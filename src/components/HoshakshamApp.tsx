import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  ArrowDownLeft,
  CheckCircle2,
  Clock,
  Upload,
  Image as ImageIcon,
  X,
  Sparkles,
  LayoutGrid,
  Smartphone
} from "lucide-react";
import NotionMobileOnboarding from "./NotionMobileOnboarding";

const TRANSACTIONS = [
  { id: 1, name: "Yoga Flow - Monthly", amount: "+₹ 4,500", date: "Today, 10:30 AM", status: "Received", icon: "🧘" },
  { id: 2, name: "Skating Pro - Session", amount: "+₹ 1,200", date: "Today, 09:15 AM", status: "Received", icon: "⛸️" },
  { id: 3, name: "Personal Training", amount: "+₹ 2,500", date: "Yesterday", status: "Received", icon: "💪" },
];

export default function HoshakshamApp() {
  const [activeTab, setActiveTab] = useState<"onboarding" | "dashboard" | "showcase">("onboarding");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedImage(url);
    }
  };

  return (
    <div className="w-full h-full bg-[#F8F9FB] text-zinc-900 font-sans flex flex-col overflow-y-auto select-none relative p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">0 → 1 SaaS Platform</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900">Hoshaksham — Service Management</h3>
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-400 mt-0.5">Zen Mode: Only Inflows & Active Members Visible</p>
        </div>

        {/* Actions & View Toggle */}
        <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto flex-wrap">
          <a
            href="https://spfolio.framer.ai/hosaksham-case-study"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white border border-brand-primary/20 transition-all shadow-sm group"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <div className="flex items-center bg-zinc-200/80 p-1 rounded-2xl">
            <button
              onClick={() => setActiveTab("onboarding")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "onboarding"
                  ? "bg-brand-primary text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Onboarding Flow</span>
            </button>
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "dashboard"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("showcase")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "showcase"
                  ? "bg-white text-zinc-900 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5 text-brand-primary" />
              <span>Uploads</span>
            </button>
          </div>
        </div>
      </div>

      {activeTab === "onboarding" ? (
        <div className="flex-1 flex flex-col">
          <NotionMobileOnboarding />
        </div>
      ) : activeTab === "dashboard" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
          {/* Left Column: Main Stats */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Revenue Card */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-10 shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                <DollarSign className="w-40 h-40" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Total Inflow This Month</p>
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-zinc-900 mb-3 tracking-tighter">₹ 1,42,800</h1>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-black">+24.5%</span>
                  </div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">vs last month</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[28px] p-6 shadow-md shadow-zinc-200/30 border border-zinc-100"
              >
                <div className="w-10 h-10 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Active Students</p>
                <p className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900">128</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[28px] p-6 shadow-md shadow-zinc-200/30 border border-zinc-100"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Avg. Retention</p>
                <p className="text-2xl md:text-3xl font-black tracking-tighter text-zinc-900">94%</p>
              </motion.div>
            </div>

            {/* In-card Notion Animation Callout */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 text-white rounded-[28px] p-6 border border-zinc-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/20 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Notion-Style Mobile Onboarding</p>
                  <p className="text-[10px] text-zinc-400">Interactive block creation & auto-onboarding flow</p>
                </div>
              </div>
              <button 
                onClick={() => setActiveTab("onboarding")}
                className="px-4 py-2 bg-brand-primary hover:bg-brand-primary-light text-zinc-950 rounded-xl text-xs font-black uppercase tracking-wider shrink-0 transition-all shadow-md active:scale-95"
              >
                Launch Flow
              </button>
            </div>
          </div>

          {/* Right Column: Transactions */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-zinc-900 rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex-1 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <ArrowDownLeft className="w-40 h-40 text-white" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary">Recent Inflows</h4>
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-brand-primary" />
                  </div>
                </div>

                <div className="space-y-6 flex-1">
                  {TRANSACTIONS.map((tx, i) => (
                    <motion.div 
                      key={tx.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/5 flex items-center justify-center text-xl md:text-2xl group-hover:bg-brand-primary/20 transition-colors">
                          {tx.icon}
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-bold text-white group-hover:text-brand-primary transition-colors">{tx.name}</p>
                          <p className="text-[10px] font-medium text-zinc-500">{tx.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xs md:text-sm font-black text-emerald-400 tracking-tighter">{tx.amount}</p>
                        <div className="flex items-center gap-1 justify-end">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          <span className="text-[8px] font-black uppercase tracking-widest text-zinc-500">{tx.status}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button 
                  onClick={() => setActiveTab("onboarding")}
                  className="mt-8 w-full py-3.5 bg-white/5 hover:bg-white/10 rounded-2xl text-[10px] font-black uppercase tracking-widest text-zinc-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Flow Animation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Image Showcase Placeholder Tab */
        <div className="flex-1 flex flex-col space-y-4">
          <input 
            type="file" 
            ref={fileInputRef} 
            accept="image/*" 
            className="hidden" 
            onChange={handleImageUpload} 
          />

          <div className="relative w-full min-h-[380px] flex-1 rounded-[32px] bg-zinc-900 border-2 border-dashed border-zinc-700/60 overflow-hidden flex flex-col items-center justify-center p-8 transition-all group">
            {uploadedImage ? (
              <div className="relative w-full h-full min-h-[320px] flex items-center justify-center">
                <img 
                  src={uploadedImage} 
                  alt="Hoshaksham Showcase" 
                  className="w-full h-full max-h-[420px] object-contain rounded-2xl" 
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setUploadedImage(null)}
                  className="absolute top-4 right-4 p-2 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-transform active:scale-95"
                  title="Remove image"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4 max-w-md">
                <div className="w-16 h-16 rounded-3xl bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center mx-auto text-brand-primary shadow-xl group-hover:scale-105 transition-transform">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">Custom Media Upload</h4>
                  <p className="text-xs text-zinc-400">
                    Upload your high-res design exports or switch back to the interactive Notion Onboarding Animation.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-primary-light text-zinc-950 font-black px-6 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg active:scale-95"
                  >
                    <Upload className="w-4 h-4" />
                    <span>Upload Image</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("onboarding")}
                    className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold px-5 py-2.5 rounded-2xl text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
                  >
                    <Smartphone className="w-4 h-4 text-brand-primary" />
                    <span>Play Animation</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}


