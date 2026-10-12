'use client'
import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline, Sparkles, Layers, ShieldCheck, Lock, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import VideoPlayer from '@/components/ui/video-player'
import defaultVideo from '@/assets/videos/unique-id-manager.mp4'
import { motion } from 'motion/react'
import { getStoredVideo, saveUploadedVideo, clearStoredVideo } from '@/lib/video-storage'

// Authentic 3D star Mercedes-Benz logo component with luxury metallic finish
const MercedesBenzLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
    <span className={cn("relative inline-flex items-center justify-center p-2 rounded-2xl bg-zinc-900 shadow-md ring-1 ring-zinc-800", className)}>
        <svg viewBox="0 0 24 24" className="w-full h-full text-white fill-none stroke-current" strokeWidth="1.3">
            {/* Outer ring */}
            <circle cx="12" cy="12" r="9.5" />
            {/* Three-pointed star */}
            <path d="M12 2.6L12 12M12 12L3.8 16.8M12 12L20.2 16.8" strokeLinecap="round" strokeLinejoin="round" />
            {/* Facet lines for 3D metallic dimensional feel */}
            <path d="M12 2.6L10.8 11.2L3.8 16.8M12 12L12 13.2M20.2 16.8L13.2 11.2L12 2.6" strokeWidth="0.75" opacity="0.6" />
        </svg>
    </span>
)

export default function ContentSection() {
    const [videoSrc, setVideoSrc] = useState<string>(defaultVideo)
    const [videoFileName, setVideoFileName] = useState<string>('unique-id-manager-v2.demo')
    const [isCustomVideo, setIsCustomVideo] = useState<boolean>(false)

    // Restore uploaded video from local storage on mount
    useEffect(() => {
        let isMounted = true
        getStoredVideo().then((stored) => {
            if (isMounted && stored && stored.url) {
                setVideoSrc(stored.url)
                setVideoFileName(stored.name)
                setIsCustomVideo(true)
            }
        }).catch((err) => {
            console.error('Could not load stored video:', err)
        })
        return () => {
            isMounted = false
        }
    }, [])

    const handleVideoUpload = (newUrl: string, file: File) => {
        setVideoSrc(newUrl)
        setVideoFileName(file.name)
        setIsCustomVideo(true)
        saveUploadedVideo(file).catch(() => {})
    }

    const handleResetVideo = () => {
        setVideoSrc(defaultVideo)
        setVideoFileName('unique-id-manager-v2.demo')
        setIsCustomVideo(false)
        clearStoredVideo().catch(() => {})
    }

    return (
        <section className="w-full">
            <div className="bg-gradient-to-b from-white via-zinc-50/50 to-white border border-zinc-200/80 rounded-3xl py-14 md:py-20 my-8 shadow-sm">
                <div className="mx-auto w-full max-w-5xl px-6">
                    {/* Header with Mercedes-Benz Badge */}
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="inline-flex items-center justify-center">
                                <MercedesBenzLogo className="w-10 h-10" />
                            </span>
                            <div className="text-left">
                                <div className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 flex items-center gap-1.5">
                                    <span>Mercedes-Benz R&D</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                                <span className="text-[11px] text-zinc-500 font-mono tracking-wider">Internal Engineering Systems • OS Tooling</span>
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-4 text-xs font-medium text-zinc-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                            <span>150 languages | 200+ bug tickets</span>
                        </div>

                        <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-bold leading-tight tracking-tight font-sans max-w-3xl mx-auto">
                            <span className="block">
                                “Design should welcome people into the design process, not lock them out of it”
                            </span>
                            <span className="block mt-3 text-xs sm:text-sm font-sans font-medium text-zinc-500 tracking-normal normal-case not-italic">
                                — by Ted Goas
                            </span>
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                            An internal tool used by engineers to generate unique IDs and localise a single text string into 150 languages — plagued by 200+ open bug tickets and no documentation. My job: fix the experience, ship clarity.
                        </p>

                        {/* Coming Soon Feature CTA & Highlights */}
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs sm:text-sm font-semibold shadow-md shadow-zinc-900/10 hover:bg-zinc-800 transition-colors">
                                <Clock className="w-4 h-4 text-brand-primary" />
                                <span>Case Study Coming Soon</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-600 text-xs font-medium">
                                <Lock className="w-3.5 h-3.5 text-zinc-400" />
                                <span>Clearance / NDA Protected</span>
                            </div>
                        </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className="relative mt-10 overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-200/90 dark:border-zinc-800 shadow-xl max-w-4xl mx-auto ring-1 ring-black/5">
                        <VideoPlayer
                            src={videoSrc}
                            className="w-full aspect-video md:aspect-[16/9] max-h-[560px] bg-zinc-950"
                            videoClassName="w-full h-full object-contain"
                            allowUpload={true}
                            showTopBar={false}
                            onVideoUpload={handleVideoUpload}
                            onResetVideo={handleResetVideo}
                            isCustomVideo={isCustomVideo}
                            videoFileName={videoFileName}
                        />
                    </div>

                    {/* Key Feature Capabilities Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
                        <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900 shrink-0">
                                <Layers className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 font-sans">Automated UID Indexing</h4>
                                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                                    Instant tokenization & ticket linking across thousands of in-vehicle controls.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900 shrink-0">
                                <ShieldCheck className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 font-sans">Safety & Distraction Checks</h4>
                                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                                    Built-in driver distraction rules and automotive compliance gates prior to merge.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-zinc-100 text-zinc-900 shrink-0">
                                <Clock className="w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-gray-900 font-sans">Global Translation Grid</h4>
                                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                                    Real-time text length computation and RTL glyph adjustments for 150+ locales.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-white dark:bg-zinc-900 -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1.5 border border-zinc-200 dark:border-zinc-800 z-10', {
                    'shadow-xl shadow-black/10': variant === 'elevated',
                    'border-zinc-300 dark:border-zinc-700': variant === 'outlined',
                    'border-zinc-300 dark:border-zinc-700 shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 hover:bg-zinc-800 h-8 px-2.5">
                    <Calendar1 className="size-3.5 mr-1" />
                    <span className="text-xs font-medium">Schedule</span>
                </Button>
                <span className="bg-zinc-200 dark:bg-zinc-700 block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold"
                        className="h-8 w-8 p-0 text-zinc-700 dark:text-zinc-300">
                        <Bold className="size-3.5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic"
                        className="h-8 w-8 p-0 text-zinc-700 dark:text-zinc-300">
                        <Italic className="size-3.5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline"
                        className="h-8 w-8 p-0 text-zinc-700 dark:text-zinc-300">
                        <Underline className="size-3.5" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough"
                        className="h-8 w-8 p-0 text-zinc-700 dark:text-zinc-300">
                        <Strikethrough className="size-3.5" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-zinc-200 dark:bg-zinc-700 block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    variant="ghost">
                    <Ellipsis className="size-3.5" />
                </Button>
            </div>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white px-2 py-1 rounded font-mono text-xs font-semibold mr-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-zinc-400 dark:text-zinc-500 mx-auto w-fit font-mono text-xl sm:text-2xl font-medium space-y-1">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn("relative transition-colors", index == 2 && "text-zinc-900 dark:text-white font-bold before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import'] before:font-bold before:text-sm before:top-1")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function ContentSectionDemo() {
    return (
        <section className="w-full">
            <div className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl border border-zinc-200 dark:border-zinc-800 my-8">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div className="mx-auto max-w-2xl text-center">
                        <div>
                            <span className="text-3xl">🦊</span>
                            <h2 className="text-gray-900 dark:text-white mt-4 text-3xl sm:text-4xl font-bold font-sans leading-tight tracking-tight">Create Content with AI Assistance</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-12 mt-4 text-lg">Our AI assistant helps you create better content faster. Generate ideas, improve your writing, and design layouts with simple prompts.</p>
                        </div>

                        <div className="relative mt-8 overflow-hidden rounded-3xl bg-black/10 border border-zinc-200 dark:border-zinc-800 shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1533119408463-b0f487583ff6?q=80&w=2960&auto=format&fit=crop"
                                alt="Gradient Background"
                                className="absolute inset-0 size-full object-cover"
                            />

                            <div className="bg-white dark:bg-zinc-950 rounded-2xl relative m-4 sm:m-8 overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl ring-1 ring-black/10">
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1800&auto=format&fit=crop"
                                    alt="App Screen"
                                    className="object-top-left size-full object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
