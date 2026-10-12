import SplitAndGrow from "../components/SplitAndGrow";
import { motion } from "motion/react";

export default function SplitAndGrowPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-zinc-100 min-h-screen selection:bg-brand-primary/20"
    >
      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-[1280px] mx-auto bg-white rounded-[48px] shadow-2xl border border-zinc-200 overflow-hidden h-[85vh] flex flex-col relative group ring-1 ring-zinc-200/50">
          {/* Browser Title Bar / Frame Header */}
          <div className="bg-zinc-50/50 border-b border-zinc-100 px-8 py-4 flex items-center justify-between shrink-0 backdrop-blur-md">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400/20" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
              <div className="w-3 h-3 rounded-full bg-green-400/20" />
            </div>
            
            <div className="flex items-center gap-2 bg-white border border-zinc-100 rounded-xl px-6 py-1.5 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">split-and-grow.shyani.design</span>
            </div>

            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-zinc-300 rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* App Execution Canvas */}
          <div className="flex-1 overflow-auto scrollbar-hide">
            <SplitAndGrow isContained />
          </div>

          {/* Canvas Decorative Elements */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>
        
        {/* Helper Label */}
        <div className="mt-8 text-center">
          <p className="text-[10px] font-bold text-zinc-300 uppercase tracking-[0.4em]">Interactive Project Canvas</p>
        </div>
      </div>
    </motion.div>
  );
}

