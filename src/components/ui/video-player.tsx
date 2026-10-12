"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, Volume1, VolumeX, Upload, RotateCcw, Film, Check, Maximize } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const CustomSlider = ({
  value,
  onChange,
  className,
}: {
  value: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "relative w-full h-1 bg-white/20 rounded-full cursor-pointer",
        className
      )}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        onChange(Math.min(Math.max(percentage, 0), 100));
      }}
    >
      <motion.div
        className="absolute top-0 left-0 h-full bg-white rounded-full"
        style={{ width: `${value}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </motion.div>
  );
};

export interface VideoPlayerProps {
  src: string;
  className?: string;
  videoClassName?: string;
  allowUpload?: boolean;
  showTopBar?: boolean;
  onVideoUpload?: (url: string, file: File) => void;
  onResetVideo?: () => void;
  isCustomVideo?: boolean;
  videoFileName?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  src, 
  className, 
  videoClassName,
  allowUpload = true,
  showTopBar = true,
  onVideoUpload,
  onResetVideo,
  isCustomVideo = false,
  videoFileName,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [uploadSuccessToast, setUploadSuccessToast] = useState(false);

  useEffect(() => {
    // When src changes, reload video element
    if (videoRef.current) {
      videoRef.current.load();
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    }
  }, [src]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      const newVolume = value / 100;
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(isFinite(progress) ? progress : 0);
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (value: number) => {
    if (videoRef.current && videoRef.current.duration) {
      const time = (value / 100) * videoRef.current.duration;
      if (isFinite(time)) {
        videoRef.current.currentTime = time;
        setProgress(value);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        setVolume(0);
      } else {
        setVolume(1);
        videoRef.current.volume = 1;
      }
    }
  };

  const setSpeed = (speed: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = speed;
      setPlaybackSpeed(speed);
    }
  };

  const handleFileProcess = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file (MP4, WebM, MOV, etc.).");
      return;
    }
    const url = URL.createObjectURL(file);
    if (onVideoUpload) {
      onVideoUpload(url, file);
    }
    setUploadSuccessToast(true);
    setTimeout(() => setUploadSuccessToast(false), 3000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
    // reset input value so re-selecting same file triggers change
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (allowUpload) {
      setIsDraggingOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
    if (!allowUpload) return;
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileProcess(file);
    }
  };

  const triggerUploadDialog = (e: React.MouseEvent) => {
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm group/player select-none",
        isDraggingOver && "ring-2 ring-brand-primary ring-offset-2 ring-offset-zinc-950",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Hidden File Input */}
      {allowUpload && (
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={handleFileChange}
        />
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        className={cn("w-full h-full object-contain cursor-pointer mx-auto", videoClassName)}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (videoRef.current) {
            setDuration(videoRef.current.duration);
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
            videoRef.current.playbackRate = playbackSpeed;
          }
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        src={src}
        onClick={togglePlay}
        playsInline
        loop
        preload="auto"
      />

      {/* Drag and Drop Active Overlay */}
      <AnimatePresence>
        {isDraggingOver && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-40 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center border-2 border-dashed border-brand-primary rounded-xl"
          >
            <div className="w-14 h-14 rounded-full bg-brand-primary/20 flex items-center justify-center mb-3 text-brand-primary animate-bounce">
              <Upload className="w-7 h-7" />
            </div>
            <p className="text-white font-bold text-base mb-1">Drop your video here</p>
            <p className="text-zinc-400 text-xs">Supports MP4, WebM, MOV, and standard video formats</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top Floating Action Bar (Upload & Reset) */}
      {allowUpload && showTopBar && (
        <div 
          className={cn(
            "absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-auto transition-opacity duration-300",
            showControls || isCustomVideo ? "opacity-100" : "opacity-0 md:group-hover/player:opacity-100"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1.5 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] text-zinc-200">
            <Film className="w-3 h-3 text-brand-primary" />
            <span className="max-w-[120px] truncate font-mono">
              {isCustomVideo ? (videoFileName || "Custom Video") : "Showcase Video"}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {isCustomVideo && onResetVideo && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onResetVideo();
                }}
                className="flex items-center gap-1 bg-black/75 hover:bg-zinc-800 backdrop-blur-md text-zinc-300 hover:text-white px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-semibold transition-colors cursor-pointer"
                title="Reset to default video"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </button>
            )}

            <button
              type="button"
              onClick={triggerUploadDialog}
              className="flex items-center gap-1.5 bg-brand-primary hover:bg-brand-primary/90 text-zinc-950 px-2.5 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <Upload className="w-3 h-3" />
              <span>{isCustomVideo ? "Change" : "Upload Video"}</span>
            </button>
          </div>
        </div>
      )}

      {/* Discreet floating upload action if top bar is disabled */}
      {allowUpload && !showTopBar && (
        <div 
          className={cn(
            "absolute top-3 right-3 z-30 flex items-center gap-1.5 transition-opacity duration-300",
            showControls || isCustomVideo ? "opacity-90 hover:opacity-100" : "opacity-0 group-hover/player:opacity-80 hover:!opacity-100"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {isCustomVideo && onResetVideo && (
            <button
              type="button"
              onClick={onResetVideo}
              className="inline-flex items-center gap-1 bg-black/70 hover:bg-black/90 backdrop-blur-md text-zinc-300 hover:text-white px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-medium transition-all cursor-pointer shadow-md"
              title="Reset to default video"
            >
              <RotateCcw className="w-2.5 h-2.5" />
              <span>Reset</span>
            </button>
          )}
          <button
            type="button"
            onClick={triggerUploadDialog}
            className="inline-flex items-center gap-1.5 bg-black/70 hover:bg-zinc-900 backdrop-blur-md text-white hover:text-brand-primary px-2.5 py-1 rounded-full border border-white/15 text-[10px] font-medium transition-all cursor-pointer shadow-md"
            title="Upload your video file"
          >
            <Upload className="w-3 h-3 text-brand-primary" />
            <span>{isCustomVideo ? "Change Video" : "Upload Video"}</span>
          </button>
        </div>
      )}
      <AnimatePresence>
        {uploadSuccessToast && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-12 left-1/2 -translate-x-1/2 z-40 bg-emerald-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            Video uploaded successfully!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Play Button Overlay when Paused */}
      {!isPlaying && !isDraggingOver && (
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5 text-brand-primary" fill="currentColor" />
          </div>
        </motion.div>
      )}

      {/* Controls Overlay */}
      <AnimatePresence>
        {showControls && !isDraggingOver && (
          <motion.div
            className="absolute bottom-0 mx-auto left-2 right-2 p-2.5 sm:p-3.5 mb-2 bg-[#111111c4] backdrop-blur-md rounded-2xl border border-white/10 z-30"
            initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: "circInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white text-[11px] font-mono">
                {formatTime(currentTime)}
              </span>
              <CustomSlider
                value={progress}
                onChange={handleSeek}
                className="flex-1"
              />
              <span className="text-white text-[11px] font-mono">{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    onClick={togglePlay}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 hover:text-white h-7 w-7 rounded-lg"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </Button>
                </motion.div>
                <div className="flex items-center gap-x-1">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      onClick={toggleMute}
                      variant="ghost"
                      size="icon"
                      className="text-white hover:bg-white/10 hover:text-white h-7 w-7 rounded-lg"
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : volume > 0.5 ? (
                        <Volume2 className="h-4 w-4" />
                      ) : (
                        <Volume1 className="h-4 w-4" />
                      )}
                    </Button>
                  </motion.div>

                  <div className="w-16 sm:w-20">
                    <CustomSlider
                      value={volume * 100}
                      onChange={handleVolumeChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {allowUpload && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={triggerUploadDialog}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/10 hover:text-brand-primary text-[10px] h-6 px-2 rounded-md flex items-center gap-1 border border-white/15 cursor-pointer"
                      title="Upload your video into this player"
                    >
                      <Upload className="w-3 h-3 text-brand-primary" />
                      <span className="font-semibold">{isCustomVideo ? "Replace" : "Upload Video"}</span>
                    </Button>
                  </motion.div>
                )}

                {isCustomVideo && onResetVideo && (
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      onClick={onResetVideo}
                      variant="ghost"
                      size="sm"
                      className="text-zinc-300 hover:bg-white/10 hover:text-white text-[10px] h-6 px-2 rounded-md flex items-center gap-1 border border-white/10 cursor-pointer"
                      title="Reset to default video"
                    >
                      <RotateCcw className="w-2.5 h-2.5" />
                      <span>Reset</span>
                    </Button>
                  </motion.div>
                )}

                {[0.5, 1, 1.5, 2].map((speed) => (
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={speed}
                  >
                    <Button
                      onClick={() => setSpeed(speed)}
                      variant="ghost"
                      size="icon"
                      className={cn(
                        "text-white hover:bg-white/10 hover:text-white text-[10px] h-6 w-6 rounded-md",
                        playbackSpeed === speed && "bg-white/20 text-brand-primary font-bold"
                      )}
                    >
                      {speed}x
                    </Button>
                  </motion.div>
                ))}

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button
                    onClick={() => {
                      if (videoRef.current) {
                        if (document.fullscreenElement) {
                          document.exitFullscreen().catch(() => {});
                        } else {
                          videoRef.current.requestFullscreen().catch(() => {});
                        }
                      }
                    }}
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/10 hover:text-white h-6 w-6 rounded-md ml-0.5"
                    title="Toggle Fullscreen"
                  >
                    <Maximize className="w-3.5 h-3.5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VideoPlayer;
