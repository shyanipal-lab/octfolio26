import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import {
  Sparkles,
  Maximize2,
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  Layers,
  Code2,
  Figma,
  Compass,
  Cpu,
  Car,
  TrendingUp,
  Award,
} from "lucide-react";

import creatorPortraitImg from "@/assets/images/regenerated_image_1788380574184.jpg";

const DEFAULT_VIDEO_SRC = "/videos/unique-id-manager.mp4";
const FALLBACK_VIDEO_SRC = "https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4";

export default function About() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Video state for the secondary feature card
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    if (videoRef.current && videoRef.current.duration) {
      videoRef.current.currentTime = newPercent * videoRef.current.duration;
      setProgress(newPercent * 100);
    }
  };

  /* Slot 1: Integrations / Tooling & Design Systems */
  const IntegrationsCard = (
    <Card className="h-full border-zinc-200/90 shadow-xs hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-1 text-zinc-500">
          <Layers className="w-4 h-4 text-brand-primary" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Systems & Craft
          </span>
        </div>
        <CardTitle className="text-lg font-bold tracking-tight text-zinc-900">
          Design Tools & Stacks
        </CardTitle>
        <CardDescription className="text-xs text-zinc-500 leading-relaxed">
          Token-driven architectures, rapid high-fidelity prototyping & engineering handoff.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-800 text-xs font-medium border border-zinc-200/70">
            <Figma className="w-3.5 h-3.5 text-purple-600" />
            <span>Figma Tokens</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-800 text-xs font-medium border border-zinc-200/70">
            <Compass className="w-3.5 h-3.5 text-blue-600" />
            <span>ProtoPie</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-800 text-xs font-medium border border-zinc-200/70">
            <Code2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>React & Flutter</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100/90 text-zinc-800 text-xs font-medium border border-zinc-200/70">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>Design Ops</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  /* Slot 2: Main Feature (Tall Card Spanning 3 Rows) -> Existing Picture of Shyani */
  const MainFeatureCard = (
    <Card 
      onClick={() => setSelectedImage(creatorPortraitImg)}
      className="relative h-full min-h-[460px] md:min-h-[580px] w-full overflow-hidden border-zinc-200 shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer bg-zinc-950"
    >
      {/* Background Picture */}
      <img
        src={creatorPortraitImg}
        alt="Yep that's me Shyani Pal"
        className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

      {/* Prominent Badge Requested: "Yep that's me Shyani Pal" */}
      <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 bg-zinc-950/90 text-white backdrop-blur-md rounded-full text-xs font-mono font-bold flex items-center gap-2 shadow-xl border border-brand-primary">
        <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
        <span>Yep that's me Shyani Pal</span>
      </div>

      {/* Top-Right Quick Expand Icon */}
      <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-black/80 transition-colors">
        <Maximize2 className="w-3.5 h-3.5" />
      </div>

      {/* Bottom Bio Overlay */}
      <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-white flex flex-col justify-end">
        <div className="space-y-1">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>Shyani Pal</span>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-xs font-normal">
              Senior Product Designer
            </span>
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 font-normal leading-relaxed">
            Leading automotive dashboard HMI & infotainment at Mercedes-Benz R&D. Previously built expense fintech platforms at Fyle.
          </p>
        </div>
      </div>
    </Card>
  );

  /* Slot 3: Feature Tags (Top-Right Card) */
  const FeatureTagsCard = (
    <Card className="h-full border-zinc-200/90 shadow-xs hover:shadow-md transition-shadow bg-white">
      <CardContent className="flex h-full flex-col justify-center gap-2.5 p-6">
        <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1 flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Core Domains</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant="outline"
            className="items-center gap-1.5 border-orange-200 bg-orange-50/70 py-1.5 px-3 text-orange-800 text-xs font-semibold"
          >
            <Car className="w-3 h-3" />
            Automotive HMI
          </Badge>
          <Badge
            variant="secondary"
            className="items-center gap-1.5 bg-blue-50 py-1.5 px-3 text-blue-700 hover:bg-blue-100 text-xs font-semibold border border-blue-200/60"
          >
            <TrendingUp className="w-3 h-3" />
            Fintech Scale
          </Badge>
          <Badge
            variant="outline"
            className="items-center gap-1.5 border-purple-200 bg-purple-50/70 py-1.5 px-3 text-purple-800 text-xs font-semibold"
          >
            <Layers className="w-3 h-3" />
            Design Tokens
          </Badge>
          <Badge
            variant="outline"
            className="items-center gap-1.5 border-emerald-200 bg-emerald-50/70 py-1.5 px-3 text-emerald-800 text-xs font-semibold"
          >
            <Cpu className="w-3 h-3" />
            HCI & Accessibility
          </Badge>
        </div>
      </CardContent>
    </Card>
  );

  /* Slot 4: Secondary Feature (Middle-Left Card) -> Existing Video Player */
  const SecondaryFeatureCard = (
    <Card 
      onClick={togglePlay}
      className="relative h-full min-h-[220px] w-full overflow-hidden border-zinc-200 bg-zinc-950 shadow-xs hover:shadow-md transition-all group/vid cursor-pointer"
    >
      <video
        ref={videoRef}
        src={DEFAULT_VIDEO_SRC}
        playsInline
        loop
        muted={isMuted}
        onTimeUpdate={handleTimeUpdate}
        onError={(e) => {
          // If local video fails to load, gracefully fallback to web video
          const target = e.currentTarget;
          if (target.src !== FALLBACK_VIDEO_SRC) {
            target.src = FALLBACK_VIDEO_SRC;
            target.load();
          }
        }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/40 pointer-events-none" />

      {/* Video Header Controls */}
      <div className="relative z-10 flex items-center justify-between p-3.5">
        <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 border border-white/10">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-zinc-400"}`} />
          <span className="font-semibold text-white">Interactive Reel</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleMute}
            className="p-1.5 bg-black/60 hover:bg-black/90 text-white rounded-lg text-xs backdrop-blur-md transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(DEFAULT_VIDEO_SRC);
            }}
            className="p-1.5 bg-black/60 hover:bg-black/90 text-white rounded-lg text-xs backdrop-blur-md transition-colors"
            title="Expand Video"
          >
            <Maximize2 className="w-3 h-3 text-brand-primary" />
          </button>
        </div>
      </div>

      {/* Center Play/Pause Indicator */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
        <div
          className={`w-11 h-11 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
            isPlaying
              ? "bg-black/40 text-white/80 opacity-0 group-hover/vid:opacity-100 backdrop-blur-sm"
              : "bg-brand-primary text-black opacity-100 scale-100 ring-4 ring-brand-primary/20"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 fill-current" />
          ) : (
            <Play className="w-4 h-4 fill-current translate-x-0.5" />
          )}
        </div>
      </div>

      {/* Bottom Scrubber & Title */}
      <div 
        onClick={(e) => e.stopPropagation()} 
        className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col gap-1"
      >
        <div 
          onClick={handleScrub}
          className="w-full h-1 bg-white/25 hover:h-1.5 rounded-full overflow-hidden cursor-pointer transition-all"
        >
          <div 
            className="h-full bg-brand-primary rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs font-semibold text-white truncate mt-0.5">
          Product walkthrough & interaction engineering
        </p>
      </div>
    </Card>
  );

  /* Slot 5: Statistic (Middle-Right Card Spanning 2 Rows) */
  const StatCard = (
    <Card className="flex h-full flex-col justify-between bg-lime-100/90 dark:bg-lime-950/80 p-6 border-lime-200/90 shadow-xs hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <Award className="h-7 w-7 text-lime-800 dark:text-lime-300" />
        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-lime-200/70 text-lime-900 border border-lime-300/60">
          Proven Impact
        </span>
      </div>
      <div className="my-auto py-2">
        <p className="text-5xl sm:text-6xl font-bold tracking-tight text-lime-950 dark:text-lime-100">
          5+ Yrs
        </p>
        <p className="text-sm font-semibold text-lime-900 dark:text-lime-200 mt-1">
          Designing High-Stakes Production Systems
        </p>
        <p className="text-xs text-lime-800/90 dark:text-lime-300/80 mt-1 leading-relaxed">
          From zero-distraction automotive instrument clusters to multi-million expense pipelines.
        </p>
      </div>
    </Card>
  );

  /* Slot 6: Journey (Bottom-Left Card) */
  const JourneyCard = (
    <Card className="relative h-full w-full overflow-hidden p-6 border-zinc-200/90 shadow-xs hover:shadow-md transition-shadow bg-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-1.5 text-zinc-500 mb-1">
          <Compass className="w-3.5 h-3.5 text-brand-primary" />
          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
            Milestones
          </span>
        </div>
        <CardTitle className="text-lg font-bold text-zinc-900">Career Evolution</CardTitle>
        <CardDescription className="text-xs text-zinc-500 mt-1">
          Mercedes-Benz R&D (2024–Now) • Masters HCI • Fyle Fintech
        </CardDescription>
      </div>

      {/* Avatar Constellation / Timeline Pills */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-100">
        <div className="flex -space-x-2">
          <Avatar className="w-8 h-8 border-2 border-white ring-1 ring-zinc-200 shadow-xs">
            <AvatarImage src={creatorPortraitImg} />
            <AvatarFallback className="bg-brand-primary text-white text-xs font-bold">SP</AvatarFallback>
          </Avatar>
          <div className="w-8 h-8 rounded-full bg-zinc-900 text-white text-[10px] font-mono font-bold flex items-center justify-center border-2 border-white shadow-xs">
            MB
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold flex items-center justify-center border-2 border-white shadow-xs">
            FY
          </div>
        </div>
        <span className="text-[11px] font-medium text-zinc-600 ml-1">
          Automotive & Enterprise
        </span>
      </div>
    </Card>
  );

  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
            <span className="text-xs font-medium">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
            Who I am & What I Build
          </h2>
          <p className="text-sm lg:text-base max-w-2xl mx-auto text-zinc-500 font-normal mt-3">
            5+ years of UX design across enterprise SaaS, fintech, and automotive R&D. Currently crafting intuitive systems at Mercedes-Benz.
          </p>
        </div>

        {/* Bento Grid Showcase Integration */}
        <BentoGridShowcase
          integrations={IntegrationsCard}
          featureTags={FeatureTagsCard}
          mainFeature={MainFeatureCard}
          secondaryFeature={SecondaryFeatureCard}
          statistic={StatCard}
          journey={JourneyCard}
          className="max-w-6xl mx-auto"
        />

        {/* CTA to Full About / Story Page */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <Link 
            to="/about"
            className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-black transition-all shadow-md hover:shadow-lg active:translate-y-px"
          >
            <span>Full Story & Journey</span>
            <Sparkles className="w-4 h-4 text-brand-primary group-hover:rotate-12 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div 
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Yep that's me Shyani Pal"
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-center">
                <span className="text-sm font-semibold text-brand-primary">
                  ✨ Yep that's me Shyani Pal
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Senior Product Designer • Mercedes-Benz R&D • Ex-Fyle
                </p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div 
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in duration-200"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                playsInline
                className="w-full max-h-[75vh] object-contain bg-black"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
