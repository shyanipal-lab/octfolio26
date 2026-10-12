"use client"

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PortfolioGalleryProps {
  title?: string;
  archiveButton?: {
    text: string;
    href: string;
  };
  images?: Array<{
    src: string;
    alt: string;
    title?: string;
  }>;
  className?: string;
  maxHeight?: number;
  spacing?: string;
  onImageClick?: (index: number) => void;
  /**
   * Whether to pause marquee animation on hover (mobile only)
   * @default true
   */
  pauseOnHover?: boolean;
  /**
   * Number of times to repeat the content in marquee (mobile only)
   * @default 4
   */
  marqueeRepeat?: number;
}

function renderIllustration(index: number, alt: string) {
  // 10 distinct, highly polished visual illustrations for work showcases
  switch (index % 10) {
    case 0: // SaaS Dashboard Design
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Workspace // Pulse v2</span>
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#10f400]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 my-2 flex-grow items-center">
            <div className="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
              <span className="text-[6px] text-zinc-500 font-mono block">MRR</span>
              <p className="text-xs font-black text-purple-400">$18.4K</p>
            </div>
            <div className="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
              <span className="text-[6px] text-zinc-500 font-mono block">LTV</span>
              <p className="text-xs font-black text-amber-400">$4.2K</p>
            </div>
            <div className="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800">
              <span className="text-[6px] text-zinc-500 font-mono block">CHURN</span>
              <p className="text-xs font-black text-red-400">1.2%</p>
            </div>
          </div>
          <div className="h-10 w-full bg-zinc-900/40 border border-zinc-900 rounded-lg p-2 flex items-end gap-1 font-mono">
            {[40, 60, 45, 80, 55, 95, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-gradient-to-t from-purple-500/30 to-purple-500 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      );
    case 1: // Web Development
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-teal-400 uppercase tracking-widest font-bold">engine.ts</span>
            <span className="text-[6px] font-mono text-zinc-600">TypeScript</span>
          </div>
          <div className="flex-grow flex flex-col justify-center gap-1.5 font-mono text-[7px] text-zinc-400 my-4 pl-2 border-l border-zinc-805">
            <div><span className="text-teal-400">const</span> initModel = <span className="text-amber-300">async</span> () =&gt; &#123;</div>
            <div className="pl-3"><span className="text-purple-400">const</span> res = <span className="text-teal-400">await</span> ai.models.generate(&#123;</div>
            <div className="pl-6">prompt: <span className="text-amber-200">"Build elegant interface"</span></div>
            <div className="pl-3">&#125;);</div>
            <div>&#125;;</div>
          </div>
          <div className="flex items-center justify-between text-[6px] text-zinc-600 font-mono">
            <span>Lines: 154</span>
            <span className="text-[#10f400] font-bold">● Compiling successful</span>
          </div>
        </div>
      );
    case 2: // E-Commerce Platform
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Storefront // Billing API</span>
            <span className="px-1 py-0.5 rounded bg-zinc-900 text-amber-400 text-[6px] font-mono font-bold">SECURE</span>
          </div>
          
          <div className="flex items-center justify-between gap-4 flex-grow my-2">
            <div className="border border-zinc-800 p-3 rounded-xl bg-zinc-900/40 flex-1 relative overflow-hidden">
              <p className="text-[7px] text-zinc-500 uppercase font-mono">Total Cart Value</p>
              <h5 className="text-base font-black text-white mt-1">₹48,150</h5>
              <div className="absolute right-2 bottom-2 w-3 h-3 rounded-full bg-[#10f400]/20 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#10f400]" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1 shrink-0">
              <div className="w-16 h-4 bg-zinc-900 rounded-md border border-zinc-800 flex items-center justify-center text-[6px] font-bold text-zinc-400">Visa •••• 90</div>
              <div className="w-16 h-4 bg-zinc-900 rounded-md border border-zinc-800 flex items-center justify-center text-[6px] font-bold text-[#10f400]">Stripe Active</div>
            </div>
          </div>

          <p className="text-[7px] font-mono text-zinc-500">
            Unified payload gateway deployed across 3 nodes.
          </p>
        </div>
      );
    case 3: // Mobile App Design
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-1.5">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Device Node chassis // Haptic</span>
            <span className="text-[6px] text-rose-400 font-mono font-bold">iOS 18</span>
          </div>

          <div className="flex justify-center items-center flex-grow py-1">
            {/* Minimal Mobile Screen Wireframe */}
            <div className="w-20 h-28 border border-zinc-800 rounded-xl bg-zinc-950 p-1.5 flex flex-col justify-between relative shadow-lg">
              <span className="w-6 h-1 bg-zinc-900 rounded-full absolute top-1 left-1/2 -translate-x-1/2" />
              
              <div className="mt-3 space-y-1">
                <div className="w-8 h-1 bg-rose-500/30 rounded-sm" />
                <div className="w-12 h-3 bg-zinc-900 rounded-sm border border-zinc-850" />
              </div>

              <div className="grid grid-cols-2 gap-1 my-1">
                <div className="h-6 bg-zinc-900 rounded-sm border border-zinc-850" />
                <div className="h-6 bg-rose-500/10 rounded-sm border border-rose-500/20" />
              </div>

              <div className="w-full h-3 bg-rose-500 rounded-xs flex items-center justify-center text-[5px] text-white font-mono font-bold">ACTIVATE</div>
            </div>
          </div>

          <p className="text-[6px] text-zinc-655 text-center uppercase tracking-widest font-mono">
            Haptic Touch mapped.
          </p>
        </div>
      );
    case 4: // Brand Identity
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Vector Core geometry // Style</span>
            <span className="text-[6px] font-mono text-zinc-600">Grid: 8px</span>
          </div>

          <div className="flex-grow flex items-center justify-center gap-4 py-2">
            <span className="text-7xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-200">
              SP
            </span>
            <div className="border border-dashed border-zinc-805 p-2 rounded flex flex-col gap-1 items-start">
              <span className="text-[5px] font-mono text-zinc-500">HEX #DCE817</span>
              <div className="flex gap-1">
                <span className="w-3.5 h-3.5 rounded-full bg-brand-primary" />
                <span className="w-3.5 h-3.5 rounded-full bg-white" />
                <span className="w-3.5 h-3.5 rounded-full bg-zinc-900 border border-zinc-800" />
              </div>
            </div>
          </div>

          <p className="text-[7px] font-mono text-zinc-500 text-center">
            Branding principles mapped to variables.
          </p>
        </div>
      );
    case 5: // Marketing Campaign
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Conversion Metrics // Nodes</span>
            <span className="text-[#10f400] text-[6px] font-mono font-bold">LIVE CAMPAIGN</span>
          </div>

          <div className="flex-grow flex items-center justify-between my-2">
            <div className="space-y-1">
              <p className="text-[6px] text-zinc-500 uppercase tracking-wider font-mono">ROAS // Expected</p>
              <h5 className="text-xl font-black text-white">4.82<span className="text-xs text-[#10f400] font-mono font-bold ml-1">x</span></h5>
            </div>
            
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="24" cy="24" r="18" className="stroke-zinc-900 fill-none" strokeWidth="3" />
                <circle cx="24" cy="24" r="18" className="stroke-sky-500 fill-none" strokeWidth="3" strokeDasharray="113" strokeDashoffset="25" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-[7px] font-mono font-bold text-sky-400">
                76%
              </div>
            </div>
          </div>

          <p className="text-[7px] font-sans text-zinc-500 italic">
            Automating user funnels to trigger conversions.
          </p>
        </div>
      );
    case 6: // Product Photography
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Optic Sensor grid // RAW</span>
            <span className="text-[6px] text-indigo-400 font-mono font-bold">50MM F/1.2</span>
          </div>

          <div className="flex-grow flex items-center justify-center my-2 relative">
            <div className="relative border-2 border-dashed border-zinc-800 rounded-full w-20 h-20 flex items-center justify-center">
              <div className="absolute inset-2 border border-indigo-500/20 rounded-full flex items-center justify-center">
                <div className="absolute inset-4 border border-indigo-500/40 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#10f400] rounded-full animate-ping" />
                </div>
              </div>
              <span className="absolute left-1/2 -top-1 w-0.5 h-2 bg-zinc-700" />
              <span className="absolute left-1/2 -bottom-1 w-0.5 h-2 bg-zinc-700" />
              <span className="absolute top-1/2 -left-1 w-2 h-0.5 bg-zinc-700" />
              <span className="absolute top-1/2 -right-1 w-2 h-0.5 bg-zinc-700" />
            </div>
            <span className="text-[5px] font-mono text-zinc-600 absolute right-2 bottom-2">FOCUS LOCKED // 144ms</span>
          </div>

          <p className="text-[7px] font-mono text-zinc-500 text-center">
            Precision focal mapping for digital assets.
          </p>
        </div>
      );
    case 7: // Packaging Design
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">3D Isometric Model</span>
            <span className="text-[6px] text-emerald-400 font-mono">Dxf Vector v8</span>
          </div>

          <div className="flex-grow flex items-center justify-center my-2 relative">
            <svg className="w-20 h-20 stroke-emerald-500/40 hover:stroke-emerald-400 transition-colors fill-none stroke-[0.8]" viewBox="0 0 100 100">
              <path d="M50,15 L85,35 L50,55 L15,35 Z" />
              <path d="M15,35 L15,75 L50,95 L50,55" />
              <path d="M85,35 L85,75 L50,95" />
              <line x1="50" y1="15" x2="50" y2="55" className="stroke-dashed stroke-zinc-700 stroke-[0.5]" />
            </svg>
            <div className="absolute top-2 right-4 text-[5px] font-mono text-zinc-600 space-y-0.5">
              <div>X: 320MM</div>
              <div>Y: 140MM</div>
              <div>Z: 200MM</div>
            </div>
          </div>

          <p className="text-[7px] font-mono text-zinc-500 text-center">
            Die-cut template optimization engine active.
          </p>
        </div>
      );
    case 8: // Interactive Portfolio UI
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-fuchsia-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Interactive layer // Pointer</span>
            <span className="px-1 py-0.5 rounded bg-fuchsia-500/10 text-fuchsia-400 text-[6px] font-mono font-bold">FLUID ENGINE</span>
          </div>

          <div className="flex-grow flex flex-col justify-center gap-2 my-2">
            <div className="h-6 w-full bg-zinc-900 rounded-lg border border-zinc-850 p-1 flex items-center justify-between">
              <span className="w-2 h-2 rounded bg-fuchsia-500 animate-pulse" />
              <div className="w-24 h-1 bg-zinc-800 rounded mx-2 flex-grow relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-fuchsia-400 w-2/3" />
              </div>
              <span className="text-[6px] text-fuchsia-400 font-mono font-bold">66%</span>
            </div>
            
            <div className="h-6 w-full bg-zinc-900 rounded-lg border border-zinc-850 p-1 flex items-center justify-between">
              <span className="w-2.5 h-1 bg-teal-500" />
              <div className="w-24 h-1 bg-zinc-800 rounded mx-2 flex-grow relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-teal-400 w-1/3" />
              </div>
              <span className="text-[6px] text-teal-400 font-mono font-bold">33%</span>
            </div>
          </div>

          <p className="text-[7px] font-mono text-zinc-500">
            Responsive frame timing with zero visual drag.
          </p>
        </div>
      );
    case 9: // Digital Experience Lab
      return (
        <div className="w-full h-full bg-zinc-950 p-4 flex flex-col justify-between relative group-hover:bg-zinc-900 transition-colors duration-500">
          <div className="absolute top-0 right-0 w-36 h-36 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Cosmic oscillator signal</span>
            <span className="text-[6px] text-orange-400 font-mono font-bold">HIFI_FREQ</span>
          </div>

          <div className="flex-grow flex items-center justify-center my-3">
            <div className="w-full flex items-center justify-between gap-1 px-2 h-10">
              {[4, 15, 8, 25, 45, 12, 6, 22, 50, 40, 10, 31, 15, 8, 3].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-grow bg-gradient-to-t from-orange-600/30 via-orange-400 to-amber-200/50 rounded-full animate-pulse" 
                  style={{ 
                    height: `${h}%`,
                    animationDelay: `${i * 0.05}s`
                  }} 
                />
              ))}
            </div>
          </div>

          <p className="text-[7px] font-mono text-zinc-500 text-center">
            Sound synthesis engine driving custom response.
          </p>
        </div>
      );
    default:
      return (
        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
          <span className="text-xs font-mono text-zinc-650">Empty Illustration</span>
        </div>
      );
  }
}

export function PortfolioGallery({
  title = "Browse my library",
  archiveButton = {
    text: "View gallery",
    href: "/#work"
  },
  images: customImages,
  className = "",
  maxHeight = 120,
  spacing = "-space-x-44 md:-space-x-60 lg:-space-x-72",
  onImageClick,
  pauseOnHover = true,
  marqueeRepeat = 4
}: PortfolioGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  
  const defaultImages = [
    { src: "", alt: "SaaS Dashboard Design" },
    { src: "", alt: "Web Development" },
    { src: "", alt: "E-Commerce Platform" },
    { src: "", alt: "Mobile App Design" },
    { src: "", alt: "Brand Identity" },
    { src: "", alt: "Marketing Campaign" },
    { src: "", alt: "Product Photography" },
    { src: "", alt: "Packaging Design" },
    { src: "", alt: "Interactive Portfolio UI" },
    { src: "", alt: "Digital Experience Lab" }
  ]
  
  const images = customImages || defaultImages

  return (
    <section
      aria-label={title}
      className={cn(
        "relative min-h-[80vh] py-24 px-4 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900/60",
        className
      )}
      id="archives"
    >
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto bg-zinc-900/10 backdrop-blur-sm rounded-[40px] border border-zinc-900/80 overflow-hidden relative z-10">
        {/* Header Section */}
        <div className="relative z-10 text-center pt-20 pb-10 px-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-primary font-black block mb-4">
            Curated Archives
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">
            {title}
          </h2>

          <Link
            to={archiveButton.href}
            className="inline-flex items-center gap-3 bg-white text-zinc-950 px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-lg active:scale-95 group mb-14"
          >
            <span>{archiveButton.text}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-zinc-950" />
          </Link>
        </div>

        {/* Desktop 3D overlapping layout - hidden on mobile */}
        <div className="hidden md:block relative overflow-hidden h-[450px] -mb-[120px]">
          <div className={`flex ${spacing} pb-8 pt-24 items-end justify-center`}>
            {images.map((image, index) => {
              // Calculate stagger height - peak in middle, descending to edges
              const totalImages = images.length
              const middle = Math.floor(totalImages / 2)
              const distanceFromMiddle = Math.abs(index - middle)
              const staggerOffset = maxHeight - distanceFromMiddle * 16

              const zIndex = totalImages - index

              const isHovered = hoveredIndex === index
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index

              // When hovering: hovered card moves to consistent top position, others move to baseline
              const yOffset = isHovered ? -140 : isOtherHovered ? 20 : -staggerOffset

              return (
                <motion.div
                  key={index}
                  className="group cursor-pointer flex-shrink-0"
                  style={{
                    zIndex: zIndex,
                    transformPerspective: 2000,
                  }}
                  initial={{
                    rotateY: -40,
                    y: 150,
                    opacity: 0,
                  }}
                  animate={{
                    rotateY: isHovered ? 0 : -40,
                    y: yOffset,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => onImageClick?.(index)}
                >
                  <div
                    className="relative aspect-video w-64 md:w-80 lg:w-96 rounded-2xl overflow-hidden border border-zinc-800/80 transition-all duration-500 group-hover:border-brand-primary group-hover:scale-105"
                    style={{
                      boxShadow: `
                        rgba(0, 0, 0, 0.2) 0px 10px 30px,
                        rgba(0, 0, 0, 0.4) 0px 30px 60px
                      `,
                    }}
                  >
                    {renderIllustration(index, image.alt)}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <p className="text-[10px] font-mono text-brand-primary tracking-widest uppercase font-bold">Project Ref 0{index + 1}</p>
                      <h4 className="text-sm font-black text-white uppercase tracking-tight mt-0.5">{image.alt}</h4>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile marquee layout */}
        <div className="block md:hidden relative pb-12 overflow-hidden">
          <div
            className={cn(
              "group flex overflow-hidden p-2 [--duration:30s] [--gap:1rem] [gap:var(--gap)]",
              "flex-row"
            )}
          >
            {Array(marqueeRepeat)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "flex shrink-0 justify-around [gap:var(--gap)]",
                    "animate-marquee flex-row-reverse", 
                    {
                      "group-hover:[animation-play-state:paused]": pauseOnHover,
                    }
                  )}
                  style={{
                    animation: 'marquee 30s linear infinite',
                  }}
                >
                  {images.map((image, index) => (
                    <div
                      key={`${i}-${index}`}
                      className="group cursor-pointer flex-shrink-0"
                      onClick={() => onImageClick?.(index)}
                    >
                      <div
                        className="relative aspect-video w-56 rounded-xl overflow-hidden border border-zinc-800 hover:border-brand-primary transition-all duration-300"
                        style={{
                          boxShadow: `rgba(0, 0, 0, 0.4) 0px 8px 24px`,
                        }}
                      >
                        {renderIllustration(index, image.alt)}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
