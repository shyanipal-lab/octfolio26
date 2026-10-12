import React from "react";
import { Image as ImageIcon, ZoomIn, FileText, ArrowUpRight } from "lucide-react";

export interface ImagePlaceholderCardProps {
  id?: string;
  tag: string;
  title: string;
  caption?: string;
  metadata?: string;
  aspectRatio?: string;
  imageSrc?: string;
  illustration?: React.ReactNode;
  className?: string;
}

export default function ImagePlaceholderCard({
  id,
  tag,
  title,
  caption,
  metadata,
  aspectRatio = "aspect-[16/10]",
  imageSrc,
  illustration,
  className = "",
}: ImagePlaceholderCardProps) {
  return (
    <div
      id={id}
      className={`group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col ${className}`}
    >
      {/* Top Metadata Header */}
      <div className="px-4 py-3 bg-gray-50/80 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-500">
            <ImageIcon className="w-3 h-3 text-brand-primary" />
          </div>
          <span className="text-[11px] font-bold text-gray-700 uppercase tracking-wider font-pj">
            {tag}
          </span>
        </div>
        {metadata && (
          <span className="text-[10px] font-mono text-gray-500 font-medium">
            {metadata}
          </span>
        )}
      </div>

      {/* Visual Canvas / Frame */}
      <div className={`relative w-full ${aspectRatio} bg-gray-100/70 border-b border-gray-100 overflow-hidden flex items-center justify-center`}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : illustration ? (
          <div className="w-full h-full">
            {illustration}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white border border-dashed border-gray-300 flex items-center justify-center text-gray-400 mb-2 shadow-2xs group-hover:border-brand-primary group-hover:text-brand-primary transition-colors">
              <ImageIcon className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold text-gray-700 font-pj">{title}</span>
            <span className="text-[10px] text-gray-500 font-inter mt-0.5">Visual Asset Placeholder</span>
          </div>
        )}

        {/* Subtle hover badge */}
        <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <span className="px-2 py-0.5 bg-gray-900/80 backdrop-blur-sm text-white text-[9px] font-bold rounded-full font-mono flex items-center gap-1">
            <span>Inspect</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </span>
        </div>
      </div>

      {/* Card Info Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-sm font-bold text-gray-900 font-pj group-hover:text-brand-primary transition-colors">
            {title}
          </h4>
          {caption && (
            <p className="text-xs text-gray-600 font-inter mt-1.5 leading-relaxed">
              {caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
