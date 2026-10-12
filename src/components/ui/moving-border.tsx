"use client";
import * as React from 'react';
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export type MovingBorderProps = {
    /** The content to be displayed inside the border. */
    children: React.ReactNode;

    /** Additional CSS classes for the inner content container. */
    className?: string;

    /** Additional CSS classes for the outer wrapper container. */
    outerClassName?: string;

    /** Width of the border in pixels. @default 2 */
    borderWidth?: number;

    /** Width of the gradient effect in pixels. If not specified, defaults to borderWidth * 30. */
    gradientWidth?: number;

    /** Border radius in pixels. Ignored if isCircle is true. If not specified, inherits parent's border radius. @default undefined */
    radius?: number;

    /** Duration of one complete animation cycle in seconds. @default 4 */
    duration?: number;

    /** Array of color values for the gradient. If multiple colors provided, they will be animated in sequence. @default ["#355bd2"] */
    colors?: string[];

    /** Whether to render as a perfect circle with circular path animation. @default false */
    isCircle?: boolean;
};

export function MovingBorder({
    children,
    className,
    outerClassName,
    borderWidth = 2,
    radius,
    gradientWidth,
    duration = 4,
    colors = ["#dce817", "#10f400", "#75ba33"],
    isCircle = false
}: MovingBorderProps) {
    const scope = useRef(null);

    // If explicit radius is given, use it; otherwise use "inherit"
    const effectiveRadius = isCircle ? 9999 : radius;

    useGSAP(
        () => {
            const root = scope.current as HTMLElement | null;
            if (!root) return;

            const movingGlow1 = root.querySelector<HTMLElement>(".moving-gradient");
            const movingGlow2 = root.querySelector<HTMLElement>(".moving-gradient-alt");
            if (!movingGlow1) return;

            let pathTl: gsap.core.Timeline | null = null;
            let colorTl: gsap.core.Timeline | null = null;

            // Function to create/update the path animation
            const updateAnimation = () => {
                // Kill existing timeline if it exists
                if (pathTl) {
                    pathTl.kill();
                }

                // Get current dimensions
                const rect = root.getBoundingClientRect();
                const width = rect.width;
                const height = rect.height;

                // Grab radius from parent if not specified
                let currentRadius = effectiveRadius;
                if (!isCircle && currentRadius === undefined) {
                    const computedStyle = window.getComputedStyle(root);
                    const borderRadiusStr = computedStyle.borderRadius;
                    currentRadius = parseFloat(borderRadiusStr) || 12;
                } else if (isCircle) {
                    currentRadius = Math.min(width, height) / 2;
                }

                const rad = currentRadius as number;
                const w = width - borderWidth * 2;
                const h = height - borderWidth * 2;

                let path: { x: number; y: number; }[];

                if (isCircle) {
                    // Create a circular path using 48 coordinate points for optimal smoothness
                    const centerX = w / 2;
                    const centerY = h / 2;
                    const circleRadius = Math.min(w, h) / 2;
                    const numPoints = 48;

                    path = Array.from({ length: numPoints }, (_, i) => {
                        const angle = (i / numPoints) * Math.PI * 2;
                        return {
                            x: centerX + circleRadius * Math.cos(angle),
                            y: centerY + circleRadius * Math.sin(angle)
                        };
                    });
                } else {
                    // Calculate precise path points accounting for border radius
                    path = [
                        { x: rad, y: 0 },
                        { x: w - rad, y: 0 },
                        { x: w, y: rad },
                        { x: w, y: h - rad },
                        { x: w - rad, y: h },
                        { x: rad, y: h },
                        { x: 0, y: h - rad },
                        { x: 0, y: rad },
                        { x: rad, y: 0 },
                    ];
                }

                // Create synchronized chasing timeline for dual glowing orbits
                pathTl = gsap.timeline({
                    repeat: -1,
                    defaults: { ease: "none" }
                });

                // Primary path animation
                pathTl.to(movingGlow1, {
                    duration: duration,
                    motionPath: {
                        path: path,
                        fromCurrent: false,
                        curviness: isCircle ? 1 : 1.2,
                    },
                    force3D: true,
                }, 0);

                // Alternate chasing animation 시작 위치 오프셋을 사용해 교차/추격 연출
                if (movingGlow2) {
                    pathTl.to(movingGlow2, {
                        duration: duration,
                        motionPath: {
                            path: path,
                            fromCurrent: false,
                            curviness: isCircle ? 1 : 1.2,
                            start: 0.5, // Start offset halfway through the path
                            end: 1.5,
                        },
                        force3D: true,
                    }, 0);
                }
            };

            // Function to create color animation
            const setupColorAnimation = () => {
                if (colors.length <= 1) {
                    root.style.setProperty('--color', colors[0]);
                    root.style.setProperty('--color-alt', colors[0]);
                    return;
                }

                root.style.setProperty('--color', colors[0]);
                root.style.setProperty('--color-alt', colors[1 % colors.length]);

                colorTl = gsap.timeline({
                    repeat: -1,
                    defaults: { ease: "none", duration: duration / colors.length }
                });

                colors.forEach((_, index) => {
                    const nextColor = colors[(index + 1) % colors.length];
                    const nextColorAlt = colors[(index + 2) % colors.length];
                    colorTl!.to(root, {
                        '--color': nextColor,
                        '--color-alt': nextColorAlt,
                    });
                });
            };

            // Initial setup
            updateAnimation();
            setupColorAnimation();

            // Watch for size changes to recalibrate the motion path live
            const resizeObserver = new ResizeObserver(() => {
                updateAnimation();
            });

            resizeObserver.observe(root);

            // Cleanup
            return () => {
                if (pathTl) pathTl.kill();
                if (colorTl) colorTl.kill();
                resizeObserver.disconnect();
            };
        },
        { scope, dependencies: [borderWidth, effectiveRadius, gradientWidth, duration, colors, isCircle] }
    );

    const radStyle = isCircle ? "50%" : effectiveRadius !== undefined ? `${effectiveRadius}px` : "inherit";
    const outerRadStyle = isCircle ? "50%" : effectiveRadius !== undefined ? `${effectiveRadius + borderWidth}px` : "inherit";

    return (
        <div 
            ref={scope} 
            className={cn("wrapper relative overflow-hidden", outerClassName)}
            style={{
                ['--color' as any]: colors[0],
                ['--color-alt' as any]: colors[1 % colors.length] || colors[0],
                padding: `${borderWidth}px`,
                borderRadius: outerRadStyle,
            }}
        >
            {/* Edge-Restricted Masked Glowing Layer. The mask composite forces the graphics engine to subtract
                the internal content-box from the outer border-box, ensuring the glow is 100% confined to the 
                border region itself with completely crisp edges and zero inner-spill overlay. */}
            <div 
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    padding: `${borderWidth}px`,
                    borderRadius: outerRadStyle,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) border-box",
                    WebkitMaskComposite: "dest-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0) border-box",
                    maskComposite: "exclude",
                }}
            >
                {/* Lead Glowing Point */}
                <div 
                    className="moving-gradient aspect-square absolute top-0 left-0" 
                    style={{ width: `${borderWidth}px`, willChange: "transform" }}
                >
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full opacity-90 blur-[6px]"
                        style={{
                            width: `${gradientWidth || borderWidth * 30}px`,
                            background: `radial-gradient(circle, var(--color) 0%, var(--color) 40%, transparent 75%)`
                        }}
                    />
                </div>

                {/* Chasing Glowing Point */}
                <div 
                    className="moving-gradient-alt aspect-square absolute top-0 left-0" 
                    style={{ width: `${borderWidth}px`, willChange: "transform" }}
                >
                    <div
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square rounded-full opacity-75 blur-[8px]"
                        style={{
                            width: `${gradientWidth || borderWidth * 35}px`,
                            background: `radial-gradient(circle, var(--color-alt) 0%, var(--color) 30%, transparent 75%)`
                        }}
                    />
                </div>
            </div>

            {/* Inner Content Component Container */}
            <div 
                className={cn("inner relative z-0", className)}
                style={{
                    borderRadius: radStyle,
                }}
            >
                {children}
            </div>
        </div>
    );
}
