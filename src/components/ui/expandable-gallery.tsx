import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Lottie from "lottie-react";
import { 
  Maximize2, 
  Sparkles, 
  Upload, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Layers, 
  Play, 
  Image as ImageIcon,
  Palette,
  Eye,
  FileCode2
} from "lucide-react";

import illustrationAsset1 from "@/assets/images/regenerated_image_1784822006302.jpg";
import illustrationAsset2 from "@/assets/images/regenerated_image_1784822153539.jpg";
import illustrationAsset3 from "@/assets/images/design-vibe-only/src/assets/images/regenerated_image_1780031428336.png";
import illustrationAsset4 from "@/assets/images/regenerated_image_1788451049371.jpg";
import flow10Lottie from "@/assets/lottie/flow10.json";
import emailLottie from "@/assets/lottie/email.json";

function sanitizeLottieData(raw: any) {
  if (!raw) return null;
  const data = raw.default || raw;
  return {
    v: "5.7.0",
    fr: 30,
    ip: 0,
    op: 80,
    w: 400,
    h: 300,
    assets: [],
    layers: [],
    ...data
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Illustration" | "Lottie & Motion" | "3D & Render" | "Storyboard";
  subtitle: string;
  description: string;
  type: "image" | "lottie";
  src?: string;
  lottieData?: object | null;
  tags: string[];
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: "item-1",
    title: "Cyberpunk Avatar",
    category: "Illustration",
    subtitle: "Character & Identity Design",
    description: "Digital portrait exploring vibrant neon highlights, detailed linework, and futuristic character aesthetics.",
    type: "image",
    src: illustrationAsset1,
    tags: ["Character", "Vector", "Digital Art"]
  },
  {
    id: "item-2",
    title: "Micro-Interaction Flow",
    category: "Lottie & Motion",
    subtitle: "Lottie Vector Animation",
    description: "60fps vector Lottie animation designed for seamless mobile application feedback and smooth UI states.",
    type: "lottie",
    lottieData: flow10Lottie,
    tags: ["Lottie", "UI Motion", "60fps"]
  },
  {
    id: "item-3",
    title: "Having Fun at Office",
    category: "Illustration",
    subtitle: "Saving My Chair • Studio Life",
    description: "Having fun at office, saving my chair — candid studio snapshot capturing the day-to-day creative energy, product sprints, and team culture.",
    type: "image",
    src: illustrationAsset2,
    tags: ["Studio Life", "Culture", "Design Life"]
  },
  {
    id: "item-4",
    title: "App Journey Animatic",
    category: "Storyboard",
    subtitle: "UI Sequence & Storyboarding",
    description: "High-fidelity storyboarding visualizing user emotion, key touchpoints, and smooth interface transitions.",
    type: "image",
    src: illustrationAsset3,
    tags: ["Storyboard", "UX Flow", "Wireframe"]
  },
  {
    id: "item-5",
    title: "Interactive Motion JSON",
    category: "Lottie & Motion",
    subtitle: "Lottie Animation Asset",
    description: "Vector Lottie animation rendered dynamically from JSON for smooth scaling across high-DPI displays.",
    type: "lottie",
    lottieData: emailLottie,
    tags: ["Lottie", "JSON", "Vector Motion"]
  }
];

export function ExpandableGallery() {
  const [items, setItems] = useState<GalleryItem[]>(DEFAULT_GALLERY);
  const [activeId, setActiveId] = useState<string>("item-1");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [targetUploadId, setTargetUploadId] = useState<string | null>(null);

  const categories = ["All", "Illustration", "Lottie & Motion", "3D & Render", "Storyboard"];

  const filteredItems = selectedCategory === "All" 
    ? items 
    : items.filter(item => item.category === selectedCategory);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !targetUploadId) return;

    if (file.name.endsWith(".json") || file.type.includes("json")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          setItems(prev => prev.map(item => {
            if (item.id === targetUploadId) {
              return {
                ...item,
                type: "lottie",
                lottieData: json,
                subtitle: "Custom Uploaded Lottie"
              };
            }
            return item;
          }));
        } catch {
          alert("Invalid Lottie JSON file format.");
        }
      };
      reader.readAsText(file);
    } else if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setItems(prev => prev.map(item => {
        if (item.id === targetUploadId) {
          return {
            ...item,
            type: "image",
            src: url,
            subtitle: "Custom Uploaded Artwork"
          };
        }
        return item;
      }));
    }
    setTargetUploadId(null);
  };

  const triggerUploadFor = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTargetUploadId(id);
    fileInputRef.current?.click();
  };

  const openLightbox = (item: GalleryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxItem(item);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!lightboxItem) return;
    const currentIndex = items.findIndex(i => i.id === lightboxItem.id);
    if (currentIndex === -1) return;
    
    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = items.length - 1;
    if (newIndex >= items.length) newIndex = 0;
    
    setLightboxItem(items[newIndex]);
  };

  return (
    <div className="w-full space-y-4">
      {/* Hidden File Input for Custom Uploads */}
      <input 
        type="file" 
        ref={fileInputRef} 
        accept="image/*,.json" 
        className="hidden" 
        onChange={handleFileUpload} 
      />

      {/* Expandable Gallery Container */}
      <div className="w-full h-[540px] md:h-[620px] flex flex-col md:flex-row gap-3 md:gap-4 select-none">
        {filteredItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.div
              key={item.id}
              layout
              onClick={() => setActiveId(item.id)}
              transition={{
                layout: { duration: 0.5, ease: [0.32, 0.72, 0, 1] }
              }}
              className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 border ${
                isActive
                  ? "flex-[4] md:flex-[4] border-brand-primary/40 shadow-2xl shadow-zinc-950/15"
                  : "flex-1 md:flex-[1] border-zinc-200/70 hover:border-zinc-400 hover:shadow-lg"
              } bg-zinc-950 group`}
            >
              {/* Media Container */}
              <div className="absolute inset-0 w-full h-full">
                {item.type === "lottie" ? (
                  item.lottieData ? (
                    <div className="w-full h-full bg-[#0b132b] flex items-center justify-center p-4">
                      <Lottie
                        animationData={sanitizeLottieData(item.lottieData)}
                        loop={true}
                        autoplay={true}
                        style={{ width: "100%", height: "100%", maxHeight: isActive ? "480px" : "180px" }}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-zinc-950/90 border border-zinc-800/80 flex flex-col items-center justify-center p-6 text-center text-white">
                      <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-primary mb-3 shadow-xl group-hover:scale-110 transition-transform">
                        <FileCode2 className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-zinc-300 mb-1">
                        Lottie JSON
                      </span>
                      <button 
                        onClick={(e) => triggerUploadFor(item.id, e)}
                        className="px-3.5 py-1.5 bg-brand-primary text-zinc-950 font-black text-[10px] uppercase tracking-wider rounded-xl flex items-center gap-1.5 hover:bg-brand-primary-light transition-all shadow-md active:scale-95"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Upload JSON</span>
                      </button>
                    </div>
                  )
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isActive ? "scale-100" : "scale-110 group-hover:scale-105 opacity-90"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Subtle Gradient Overlay for controls visibility */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 bg-gradient-to-t ${
                    isActive 
                      ? "from-zinc-950/40 via-transparent to-black/30" 
                      : "from-zinc-950/60 via-transparent to-black/20 group-hover:from-zinc-950/40"
                  }`} 
                />
              </div>

              {/* Active State Details */}
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-8 text-white pointer-events-none"
                  >
                    {/* Top Bar - Action Buttons */}
                    <div className="flex items-center justify-between gap-2 w-full pointer-events-auto">
                      <div className="flex items-center gap-2">
                        {item.type === "lottie" && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/40 text-white backdrop-blur-md border border-white/10 flex items-center gap-1">
                            <Play className="w-3 h-3 fill-white" />
                            <span>Lottie</span>
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={(e) => triggerUploadFor(item.id, e)}
                          className="p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
                          title="Upload image or Lottie JSON for this slot"
                        >
                          <Upload className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => openLightbox(item, e)}
                          className="p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 backdrop-blur-md transition-all active:scale-95 shadow-lg"
                          title="View Fullscreen Lightbox"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* Inactive / Collapsed State - Minimal Icon Indicator */
                  <div className="relative z-10 w-full h-full p-4 flex md:flex-col justify-between items-end md:items-start text-white pointer-events-none">
                    <div className="hidden md:block">
                      <span className="w-8 h-8 rounded-full bg-black/40 border border-white/15 flex items-center justify-center text-white backdrop-blur-md shadow-md">
                        {item.type === "lottie" ? <Play className="w-3.5 h-3.5 fill-white" /> : <ImageIcon className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-transform active:scale-90"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-transform active:scale-90"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-transform active:scale-90"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Media Viewport */}
              <div className="w-full flex-1 min-h-[350px] md:min-h-[480px] bg-zinc-900 flex items-center justify-center p-6 relative overflow-hidden">
                {lightboxItem.type === "lottie" ? (
                  lightboxItem.lottieData ? (
                    <div className="w-full h-full max-w-2xl max-h-[450px] flex items-center justify-center">
                      <Lottie
                        animationData={sanitizeLottieData(lightboxItem.lottieData)}
                        loop={true}
                        autoplay={true}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                      <div className="w-20 h-20 rounded-3xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-brand-primary shadow-xl">
                        <FileCode2 className="w-10 h-10" />
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-white tracking-tight">Lottie JSON Placeholder</h4>
                        <p className="text-xs text-zinc-400 mt-1 max-w-sm">
                          Upload a vector Lottie JSON animation file to preview interactive motion.
                        </p>
                      </div>
                      <button
                        onClick={(e) => triggerUploadFor(lightboxItem.id, e)}
                        className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-light text-zinc-950 font-black px-6 py-3 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                      >
                        <Upload className="w-4 h-4" />
                        <span>Upload Lottie JSON</span>
                      </button>
                    </div>
                  )
                ) : (
                  <img
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    className="w-full h-full max-h-[500px] object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Lightbox Footer */}
              <div className="p-6 md:p-8 bg-zinc-950 border-t border-zinc-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest bg-brand-primary text-zinc-950">
                      {lightboxItem.category}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">{lightboxItem.subtitle}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{lightboxItem.title}</h3>
                  <p className="text-xs md:text-sm text-zinc-400 mt-1 max-w-2xl">{lightboxItem.description}</p>
                </div>

                <button
                  onClick={(e) => triggerUploadFor(lightboxItem.id, e)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/10 shrink-0"
                >
                  <Upload className="w-4 h-4" />
                  <span>Replace Media</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
