import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Image as ImageIcon, 
  X, 
  RefreshCw 
} from 'lucide-react';
import hoshakshamCover from '../assets/images/hoshaksham_cover_1788970443253.jpg';

export default function CodeFeedbackSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string>(() => {
    try {
      const saved = localStorage.getItem('hoshaksham_placeholder_image');
      if (saved && saved.startsWith('data:image')) {
        return saved;
      }
      return hoshakshamCover;
    } catch {
      return hoshakshamCover;
    }
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, WebP, SVG)');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setUploadedImage(result);
        try {
          localStorage.setItem('hoshaksham_placeholder_image', result);
        } catch {
          // localStorage might exceed quota for large images, keep in state
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleClearImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUploadedImage(hoshakshamCover);
    try {
      localStorage.removeItem('hoshaksham_placeholder_image');
    } catch {
      // ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div id="code-feedback-hero" className="relative bg-gray-50 overflow-hidden">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0 pointer-events-none opacity-60">
        <img
          className="w-auto h-full object-cover"
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt=""
          loading="lazy"
        />
      </div>

      <header className="relative py-4 md:py-6 z-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link
                id="hoshaksham-brand-logo"
                to="/case-study/hoshaksham"
                title="Hoshaksham Case Study"
                className="flex items-center gap-3 rounded-xl outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 group active:scale-[0.98] transition-transform duration-150 ease-out"
              >
                <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-emerald-600 transition-colors">
                  H
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900 tracking-tight font-pj">Hoshaksham</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 uppercase tracking-wider">0 → 1 SaaS</span>
                  </div>
                  <span className="text-[11px] text-gray-500 font-medium">Subscription Management for Service Providers</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-12 sm:py-16 lg:pt-16 lg:pb-32">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 sm:gap-y-16 xl:grid-cols-5">
            <div className="text-center xl:col-span-2 lg:text-left md:px-8 lg:px-0">
              <div className="max-w-md mx-auto sm:max-w-lg md:max-w-full">
                {/* Badge / Key Words */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>100+ downloads in 3 Months · Lead founding designer</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 font-pj tracking-tight leading-[1.15]">
                  Building a Subscription Tracker from Zero (Mobile App)
                </h1>

                <p className="mt-4 text-base sm:text-lg text-gray-600 font-pj leading-relaxed font-normal max-w-lg">
                  A subscription and payment-tracking app built from scratch: information architecture, multi-role onboarding, and token-driven design system.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start lg:mt-10">
                <Link
                  id="hero-btn-case-study"
                  to="/case-study/hoshaksham"
                  title="Case study"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white transition-[transform,background-color,box-shadow] duration-150 ease-out bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-emerald-600 shadow-md hover:shadow-lg active:scale-[0.97] group cursor-pointer"
                >
                  <span>Read case study</span>
                  <ArrowUpRight className="w-4 h-4 ml-2 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
                </Link>
              </div>

              {/* Key Impact Stats Bar */}
              <div className="mt-8 pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-center lg:text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 font-pj tracking-tight">100+</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Downloads in 3 mos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-emerald-600 font-pj tracking-tight">Lead</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Founding designer</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-900 font-pj tracking-tight">0</p>
                  <p className="text-xs text-gray-500 font-medium mt-0.5">Spreadsheets needed</p>
                </div>
              </div>
            </div>

            {/* Interactive Showcase Frame */}
            <div className="xl:col-span-3 w-full">
              <div className="relative mx-auto max-w-2xl xl:max-w-none rounded-2xl sm:rounded-3xl bg-white border border-gray-200/90 shadow-2xl shadow-gray-400/20 overflow-hidden ring-1 ring-black/5">
                {/* Content Area / Selected Section */}
                <div className="w-full aspect-[16/9] overflow-hidden bg-slate-900/5 relative flex items-center justify-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        handleFile(e.target.files[0]);
                      }
                    }}
                  />

                  <div 
                    id="hoshaksham-image-placeholder-container"
                    className="w-full h-full flex flex-col justify-center items-center relative"
                  >
                    {uploadedImage ? (
                      /* Uploaded Image View */
                      <div className="relative w-full h-full overflow-hidden flex items-center justify-center group/img">
                        <img
                          id="hoshaksham-cover-mockup-img"
                          src={uploadedImage}
                          alt="Hoshaksham case study mockup"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-[1.01]"
                        />
                        <div className="absolute top-3 right-3 flex items-center gap-2 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-xl border border-gray-200/90 shadow-sm opacity-0 group-hover/img:opacity-100 transition-opacity">
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-emerald-600 active:scale-[0.94] transition-[transform,color] duration-150 ease-out"
                            title="Replace image"
                          >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Replace</span>
                          </button>
                          {uploadedImage !== hoshakshamCover && (
                            <>
                              <span className="w-px h-3.5 bg-gray-200" />
                              <button
                                type="button"
                                onClick={handleClearImage}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 hover:text-red-700 active:scale-[0.94] transition-[transform,color] duration-150 ease-out"
                                title="Reset to default cover"
                              >
                                <X className="w-3.5 h-3.5" />
                                <span>Reset</span>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* Simple Clean Image Placeholder */
                      <div
                        id="hoshaksham-image-placeholder-dropzone"
                        onClick={() => fileInputRef.current?.click()}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`w-full h-full rounded-2xl border-2 border-dashed transition-all flex flex-col items-center justify-center p-6 text-center cursor-pointer group ${
                          isDragging
                            ? 'border-emerald-500 bg-emerald-50/50'
                            : 'border-gray-300 hover:border-gray-400 bg-gray-50/60 hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200/80 shadow-xs flex items-center justify-center text-gray-400 mb-3.5 group-hover:text-emerald-600 group-hover:border-emerald-200 transition-colors">
                          <ImageIcon className="w-8 h-8 stroke-[1.5]" />
                        </div>
                        <p className="text-base font-bold text-gray-800 font-pj">
                          Image Placeholder
                        </p>
                        <p className="text-xs text-gray-400 mt-1 font-pj">
                          Drop an image here or click to browse
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
