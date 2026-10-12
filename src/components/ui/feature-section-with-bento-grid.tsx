import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Sparkles, Maximize2, X, Image as ImageIcon, Play, Volume2, VolumeX, Pause } from "lucide-react";
import { SocialIcons } from "@/components/ui/social-icons";

import uploadedAsset1 from "@/assets/images/regenerated_image_1784822006302.jpg";
import uploadedAsset2 from "@/assets/images/regenerated_image_1784822153539.jpg";
import uploadedAsset3 from "@/assets/images/regenerated_image_1788379082195.jpg";
import uploadedAsset4 from "@/assets/images/regenerated_image_1788451049371.jpg";
import uploadedAsset5 from "@/assets/images/regenerated_image_1788379090227.jpg";
import uploadedAsset6 from "@/assets/images/regenerated_image_1788379086381.jpg";
import creatorPortraitImg from "@/assets/images/regenerated_image_1788380574184.jpg";

const DEFAULT_BENTO_VIDEO_SRC = "https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4";

export function FeaturesSectionWithBentoGrid({
  className,
  title = "Shyani Pal • Journey & Craft",
  description = "5+ years of UX design across enterprise SaaS, fintech, and automotive R&D. Currently making car dashboards less terrifying at Mercedes-Benz.",
  videoSrc = DEFAULT_BENTO_VIDEO_SRC,
}: {
  className?: string;
  title?: string;
  description?: string;
  videoSrc?: string;
}) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const features = [
    {
      title: "Yep that's me Shyani Pal",
      description: "",
      skeleton: <SkeletonOne onPreview={(src) => setSelectedImage(src)} />,
      className:
        "col-span-1 md:col-span-6 lg:col-span-5 border-b md:border-r border-zinc-200 dark:border-neutral-800 bg-white",
    },
    {
      title: "Visual Systems & Creative Pipeline",
      description: "",
      skeleton: <SkeletonTwo onPreview={(src) => setSelectedImage(src)} />,
      className: "col-span-1 md:col-span-6 lg:col-span-7 border-b border-zinc-200 dark:border-neutral-800 bg-white",
    },
    {
      title: "Studio Culture & Day-to-Day Moments",
      description: "",
      skeleton: (
        <SkeletonThree 
          videoSrc={videoSrc}
          onExpandVideo={() => setSelectedVideo(videoSrc || DEFAULT_BENTO_VIDEO_SRC)}
        />
      ),
      className:
        "col-span-1 md:col-span-6 lg:col-span-6 border-b md:border-b-0 md:border-r border-zinc-200 dark:border-neutral-800 bg-white",
    },
    {
      title: "",
      description: "",
      skeleton: <SkeletonFour />,
      className: "col-span-1 md:col-span-6 lg:col-span-6 border-zinc-200 dark:border-neutral-800 bg-white",
    },
  ];

  return (
    <div style={{ backgroundColor: "#ffffff" }} className={cn("relative z-20 py-12 lg:py-20 max-w-7xl mx-auto bg-white", className)}>
      <div className="px-6 md:px-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-3 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          <span className="text-xs font-medium text-gray-600">
            About
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl max-w-5xl mx-auto text-center tracking-tight">
          Who I am
        </h1>

        <p className="text-sm lg:text-base max-w-3xl my-4 mx-auto text-zinc-500 text-center font-normal dark:text-neutral-400">
          {description}
        </p>

        {/* Quick Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 mb-2">
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/80 dark:border-zinc-700">
            🏢 Mercedes-Benz R&D
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/80 dark:border-zinc-700">
            🎓 Master's in HCI
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/80 dark:border-zinc-700">
            📍 Bengaluru, India
          </span>
          <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium border border-zinc-200/80 dark:border-zinc-700">
            ⚡ 5+ Years Experience
          </span>
        </div>
      </div>

      <div className="relative px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 mt-10 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-neutral-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-sm">
          {features.map((feature, idx) => (
            <FeatureCard key={feature.title || `feature-${idx}`} className={feature.className} style={{ backgroundColor: "#ffffff" }}>
              {feature.title ? (
                <div className="mb-4">
                  <FeatureTitle style={idx === 2 || idx === 3 ? { color: "#111827" } : undefined}>
                    {feature.title}
                  </FeatureTitle>
                  {feature.description ? (
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  ) : null}
                </div>
              ) : null}
              <div className="flex-1 flex items-center justify-center w-full min-h-[280px] sm:min-h-[300px]">
                {feature.skeleton}
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden p-2 shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Uploaded Artwork High Resolution"
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
              <div className="p-3 text-center text-xs text-zinc-300 font-mono flex items-center justify-center gap-2">
                {selectedImage === uploadedAsset3 || selectedImage === creatorPortraitImg ? (
                  <span className="text-brand-primary font-bold">✨ Yep that's me Shyani Pal</span>
                ) : (
                  "Uploaded Asset Preview"
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fullscreen Video Showcase Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Top Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/70">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                  <h3 className="font-header text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    Studio Culture & Day-to-Day Moments
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 ml-1 hidden sm:inline-block">
                    1080p HD
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-full transition-colors border border-white/10"
                  title="Close video"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Real Video Showcase Player */}
              <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
                <video
                  src={selectedVideo}
                  autoPlay
                  controls
                  playsInline
                  loop
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 bg-zinc-900/70 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Design walkthrough & studio culture moments</span>
                <span className="text-zinc-500 text-[11px]">Press ESC or click outside to exit</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  key?: React.Key;
}) => {
  return (
    <div 
      style={{ backgroundColor: "#ffffff", ...style }}
      className={cn("p-6 sm:p-8 relative overflow-hidden bg-white flex flex-col justify-between h-full", className)}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children, style }: { children?: React.ReactNode; style?: React.CSSProperties }) => {
  return (
    <p 
      style={style}
      className="max-w-5xl mx-auto text-left tracking-tight text-gray-900 dark:text-white font-bold font-sans text-xl md:text-2xl leading-tight"
    >
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left",
        "text-zinc-500 font-normal dark:text-neutral-400",
        "my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = ({ onPreview }: { onPreview?: (src: string) => void }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[300px] py-2">
      <div 
        onClick={() => onPreview?.(creatorPortraitImg)}
        className="relative w-full max-w-[340px] sm:max-w-[360px] h-[280px] sm:h-[300px] p-2 bg-white rounded-2xl border border-zinc-200 shadow-md hover:shadow-xl transition-shadow group overflow-hidden cursor-pointer flex flex-col items-center justify-center"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <img
            src={creatorPortraitImg}
            alt="Yep that's me Shyani Pal"
            className="h-full w-full object-cover object-center rounded-xl group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />

          {/* Tag: Yep that's me Shyani Pal */}
          <div className="absolute top-3 left-3 z-20 px-3 py-1.5 bg-zinc-950/90 text-white backdrop-blur-md rounded-full text-[11px] font-mono font-bold flex items-center gap-1.5 shadow-xl border border-brand-primary pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            <span>Yep that's me Shyani Pal</span>
          </div>

          <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl pointer-events-none">
            <span className="px-3 py-1.5 bg-black/80 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 backdrop-blur-sm shadow-xl">
              <Maximize2 className="w-3.5 h-3.5 text-brand-primary" /> View Artwork
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = ({
  videoSrc = DEFAULT_BENTO_VIDEO_SRC,
  onExpandVideo,
}: {
  videoSrc?: string;
  onExpandVideo?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

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
      setCurrentTime(videoRef.current.currentTime);
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
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

  const formatVideoTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "00:00";
    const mins = Math.floor(secs / 60);
    const remaining = Math.floor(secs % 60);
    return `${mins.toString().padStart(2, "0")}:${remaining.toString().padStart(2, "0")}`;
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[280px] sm:min-h-[300px] py-2">
      <div 
        onClick={togglePlay}
        className="w-full max-w-[380px] sm:max-w-[420px] h-[280px] sm:h-[300px] mx-auto bg-zinc-950 group/video rounded-2xl overflow-hidden relative shadow-md hover:shadow-xl transition-shadow border border-zinc-200 dark:border-neutral-800 flex flex-col justify-between cursor-pointer"
      >
        {/* Real Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          playsInline
          loop
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Subtle Ambient Video Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 pointer-events-none" />

        {/* Video Player Top Bar */}
        <div className="relative z-10 flex items-center justify-between p-3.5">
          <div className="px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 border border-white/10">
            <span className={`w-2 h-2 rounded-full ${isPlaying ? "bg-emerald-400 animate-pulse" : "bg-zinc-400"}`} />
            <span className="font-semibold text-white">Studio Walkthrough</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpandVideo?.();
            }}
            title="Expand video showcase"
            className="px-2.5 py-1 bg-black/70 hover:bg-black/90 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md shadow-md border border-white/15 hover:border-brand-primary transition-all"
          >
            <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-[10px]">Expand</span>
          </button>
        </div>

        {/* Video Player Center Button Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
              isPlaying
                ? "bg-black/40 text-white/80 opacity-0 group-hover/video:opacity-100 backdrop-blur-sm"
                : "bg-brand-primary text-black ring-4 ring-brand-primary/20 opacity-100"
            }`}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current" />
            ) : (
              <Play className="w-5 h-5 fill-current translate-x-0.5" />
            )}
          </motion.div>
        </div>

        {/* Video Player Bottom Control Bar */}
        <div 
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 p-3 bg-gradient-to-t from-black/90 via-black/70 to-transparent flex flex-col gap-1.5"
        >
          {/* Scrubber progress bar */}
          <div 
            onClick={handleScrub}
            className="w-full h-1.5 bg-white/25 hover:h-2 rounded-full overflow-hidden cursor-pointer transition-all"
          >
            <div 
              className="h-full bg-brand-primary rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-white text-xs font-mono pt-1">
            <div className="flex items-center gap-2.5">
              <button 
                onClick={togglePlay}
                className="hover:text-brand-primary transition-colors p-0.5"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button 
                onClick={toggleMute}
                className="hover:text-brand-primary transition-colors p-0.5"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-[10px] text-zinc-300">
                {formatVideoTime(currentTime)} / {formatVideoTime(duration || 195)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 uppercase font-mono">
                HD
              </span>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onExpandVideo?.();
                }}
                title="Expand video showcase"
                className="hover:text-brand-primary transition-colors p-1"
              >
                <Maximize2 className="w-4 h-4 text-white hover:text-brand-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = ({ onPreview }: { onPreview?: (src: string) => void }) => {
  const uploadedImages = [
    { src: uploadedAsset1, label: "Cyberpunk Avatar" },
    { src: uploadedAsset2, label: "Character Art" },
    { src: uploadedAsset3, label: "Yep That's me SHYANI", isCreator: true },
    { src: uploadedAsset4, label: "Creator Profile" },
    { src: uploadedAsset5, label: "UI System" },
    { src: uploadedAsset6, label: "Interface Mockup" },
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.15,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div 
      style={{ backgroundColor: "#ffffff" }}
      className="relative flex flex-col justify-center items-center w-full h-full min-h-[280px] sm:min-h-[300px] p-2 sm:p-4 gap-3 overflow-hidden bg-white"
    >
      {/* Row 1 */}
      <div className="flex flex-row -ml-12 sm:-ml-16">
        {uploadedImages.map((imgObj, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first-" + idx}
            style={{
              rotate: (idx % 2 === 0 ? 1 : -1) * (idx * 3 + 2),
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => onPreview?.(imgObj.src)}
            className="rounded-2xl -mr-3 mt-2 p-1 bg-white border border-neutral-200 flex-shrink-0 overflow-visible shadow-md cursor-pointer transition-shadow hover:shadow-2xl relative group"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={imgObj.src}
                alt={imgObj.label}
                className="rounded-xl h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center p-1 text-center pointer-events-none gap-1">
                <span className="text-[9px] md:text-[10px] font-bold text-white leading-tight font-sans">
                  {imgObj.label}
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
              </div>
            </div>

            {imgObj.isCreator && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-950 text-white rounded-full text-[8px] md:text-[9px] font-bold font-mono whitespace-nowrap shadow-xl border border-brand-primary z-20 flex items-center gap-1 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Yep That's me SHYANI
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-row -ml-6 sm:-ml-8">
        {uploadedImages.slice().reverse().map((imgObj, idx) => (
          <motion.div
            key={"images-second-" + idx}
            style={{
              rotate: (idx % 2 === 0 ? -1 : 1) * (idx * 2.5 + 3),
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            onClick={() => onPreview?.(imgObj.src)}
            className="rounded-2xl -mr-3 mt-2 p-1 bg-white border border-neutral-200 flex-shrink-0 overflow-visible shadow-md cursor-pointer transition-shadow hover:shadow-2xl relative group"
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={imgObj.src}
                alt={imgObj.label}
                className="rounded-xl h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-cover flex-shrink-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex flex-col items-center justify-center p-1 text-center pointer-events-none gap-1">
                <span className="text-[9px] md:text-[10px] font-bold text-white leading-tight font-sans">
                  {imgObj.label}
                </span>
                <Maximize2 className="w-3.5 h-3.5 text-brand-primary" />
              </div>
            </div>

            {imgObj.isCreator && (
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-zinc-950 text-white rounded-full text-[8px] md:text-[9px] font-bold font-mono whitespace-nowrap shadow-xl border border-brand-primary z-20 flex items-center gap-1 pointer-events-none">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
                Yep That's me SHYANI
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[50] inset-y-0 w-12 bg-gradient-to-r from-white to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[50] inset-y-0 w-12 bg-gradient-to-l from-white to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="w-full h-full min-h-[280px] sm:min-h-[300px] flex flex-col items-center justify-center relative bg-transparent overflow-hidden py-4 px-3">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm mx-auto">
        <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans">
          Connect with me
        </h4>

        <SocialIcons />
      </div>
    </div>
  );
};

