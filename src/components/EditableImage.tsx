import React from "react";
import { 
  Lock, 
  Plus, 
  Check, 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Smartphone, 
  Users, 
  Coins, 
  MessageSquare, 
  Layers, 
  ArrowUpRight, 
  TrendingUp, 
  Zap, 
  Layout, 
  HelpCircle 
} from "lucide-react";
import { motion } from "motion/react";

interface EditableImageProps {
  id: string;
  label: string;
  aspectRatio?: string;
  className?: string;
  defaultIllustration?: React.ReactNode;
}

export default function EditableImage({ 
  id, 
  label, 
  aspectRatio = "aspect-video", 
  className = "",
  defaultIllustration 
}: EditableImageProps) {

  // Return specific high-fidelity illustrations representing each component
  const renderIllustration = () => {
    switch (id) {
      case "hoshaksham-context-hero":
        return (
          <div className="w-full h-full flex flex-col justify-between bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 overflow-hidden relative group/hero">
            <div className="absolute inset-0 bg-radial-gradient from-brand-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            {/* Mock Dashboard Top Bar */}
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 rounded-full bg-green-500/80" />
                <span className="text-[10px] font-mono text-zinc-500 ml-2 tracking-widest uppercase">Priya's Workspace // Live</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-brand-primary/10 text-brand-primary text-[8px] font-mono font-bold uppercase tracking-wider">
                Expected Collection Node
              </span>
            </div>

            {/* Dashboard Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
              {/* Left Column: Flow of Students */}
              <div className="md:col-span-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/60 flex flex-col justify-between">
                <div>
                  <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block">Active Subscribers</span>
                  <div className="mt-2 space-y-2">
                    {[
                      { name: "Aditi S.", class: "Pranayama • Morning" },
                      { name: "Rahul M.", class: "Vinyasa Flow • Evening" },
                      { name: "Siddharth", class: "Ashtanga • Weekend" },
                    ].map((st, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-zinc-950/80 p-2 rounded-lg border border-zinc-900">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-[8px] text-brand-primary font-bold">
                            {st.name[0]}
                          </div>
                          <div>
                            <p className="text-[9px] font-bold text-zinc-200">{st.name}</p>
                            <p className="text-[7px] text-zinc-500 font-mono">{st.class}</p>
                          </div>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10f400] animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Collection Flow */}
              <div className="md:col-span-8 bg-zinc-900/30 p-4 rounded-xl border border-zinc-800/40 flex flex-col justify-between relative">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Total Monitored Value</span>
                    <h5 className="text-2xl font-black text-white mt-1 tracking-tight">₹48,500 <span className="text-xs text-[#10f400] font-normal font-mono">+12%</span></h5>
                  </div>
                  <div className="bg-brand-primary/10 border border-brand-primary/20 p-2 rounded-lg text-right">
                    <span className="text-[7px] text-zinc-500 block uppercase font-mono">Month's Target</span>
                    <span className="text-[10px] font-bold text-brand-primary">₹50,000</span>
                  </div>
                </div>

                {/* Growth indicator graph */}
                <div className="h-20 w-full mt-4 flex items-end gap-1 font-mono">
                  {[24, 38, 30, 45, 60, 52, 70, 85, 95].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                      <div 
                        className="w-full bg-gradient-to-t from-brand-primary/40 to-brand-primary rounded-t-sm group-hover:to-brand-primary-light transition-all" 
                        style={{ height: `${h}%` }}
                      />
                      <span className="text-[6px] text-zinc-600">0{i+1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "hoshaksham-brief-1":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative group/brief">
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-red-500/10 text-red-500 text-[7px] font-mono font-bold uppercase tracking-widest">
              Legacy Clutter
            </div>
            
            <div>
              <span className="text-[8px] font-bold text-red-400 uppercase tracking-widest mb-1.5 block">Excel Log Sheet Protocol</span>
              <h5 className="text-xs font-mono font-bold text-zinc-400 leading-tight">MESSY_COLUMNS_V4_FINAL.xlsx</h5>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden font-mono text-[8px] my-3">
              <div className="grid grid-cols-4 bg-zinc-800 p-1 text-zinc-500 font-bold border-b border-zinc-700">
                <span>Student</span>
                <span>Renewal</span>
                <span>Reminded?</span>
                <span>Payment</span>
              </div>
              <div className="divide-y divide-zinc-800/60 p-1">
                <div className="grid grid-cols-4 py-1 text-zinc-400">
                  <span>Aditi Shah</span>
                  <span className="text-red-400">Overdue 4d</span>
                  <span>Yes (WA)</span>
                  <span className="text-red-500 font-bold">Unpaid ⚠️</span>
                </div>
                <div className="grid grid-cols-4 py-1 text-zinc-400">
                  <span>Rahul Sen</span>
                  <span>12th May</span>
                  <span>No</span>
                  <span className="text-amber-500">Pending UPI</span>
                </div>
                <div className="grid grid-cols-4 py-1 text-zinc-400">
                  <span>Karan J.</span>
                  <span>08th May</span>
                  <span>Spam Sent</span>
                  <span className="text-zinc-500">Unknown State</span>
                </div>
              </div>
            </div>

            <p className="text-[8px] font-sans font-bold text-zinc-500 italic">
              "When renewal dates hit, Priya had to manually check WhatsApp logs and bank receipts to confirm."
            </p>
          </div>
        );

      case "hoshaksham-brief-2":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group/scalpel">
            <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 to-transparent pointer-events-none opacity-40" />
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-[#10f400]/10 text-[#10f400] text-[7px] font-mono font-bold uppercase tracking-widest">
              Active Stream
            </div>

            <div>
              <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest mb-1.5 block">Unified Inflow Loop</span>
              <h5 className="text-xs font-mono font-bold text-white leading-tight">One-Trigger Billing Protocol</h5>
            </div>

            <div className="flex items-center justify-between gap-2 my-4 relative">
              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl flex-1 text-center">
                <Smartphone className="w-4 h-4 text-brand-primary mx-auto mb-1" />
                <p className="text-[7px] font-black text-zinc-300">UPI Link Generated</p>
                <p className="text-[6px] text-zinc-500 mt-0.5">Automated SMS</p>
              </div>

              <div className="text-brand-primary font-bold animate-pulse text-[10px] shrink-0">
                <ArrowRight className="w-3 h-3" />
              </div>

              <div className="bg-zinc-900 border border-zinc-800 p-3 rounded-xl flex-1 text-center">
                <MessageSquare className="w-4 h-4 text-[#10f400] mx-auto mb-1" />
                <p className="text-[7px] font-black text-zinc-300">WhatsApp Alert</p>
                <p className="text-[6px] text-[#10f400] font-mono mt-0.5">Delivered ✅</p>
              </div>
            </div>

            <p className="text-[8px] font-sans font-bold text-zinc-300 leading-normal">
              Instead of an accounting dashboard, Priya gets a simple messaging bridge. It monitors the receipt and logs the renewal status instantly.
            </p>
          </div>
        );

      case "hoshaksham-research-artifacts":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group/research">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }} />
            
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4 relative z-10">
              <div className="flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-[10px] font-mono text-zinc-200 uppercase tracking-widest font-black">FigJam Affinity Mapping // Insights</span>
              </div>
              <span className="text-[7px] text-zinc-500 font-mono">4 Boards Synthesized</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 my-2 relative z-10">
              <div className="bg-[#fff9db]/5 border border-amber-500/20 p-3 rounded-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-amber-400" />
                <p className="text-[9px] font-bold text-zinc-200 leading-snug">"I don't think of myself as a business. I just love teaching my yoga class."</p>
                <span className="text-[7px] font-mono text-amber-500 block text-right mt-2 font-bold">— Priestess/Teacher Mode</span>
              </div>

              <div className="bg-[#e8f9ff]/5 border border-sky-500/20 p-3 rounded-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-sky-400" />
                <p className="text-[9px] font-bold text-zinc-200 leading-snug">"Asking for money directly via messages feels transactional and awkward."</p>
                <span className="text-[7px] font-mono text-sky-400 block text-right mt-2 font-bold">— The Friction Loop</span>
              </div>

              <div className="bg-[#f0fdf4]/5 border border-emerald-500/20 p-3 rounded-xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <p className="text-[9px] font-bold text-zinc-200 leading-snug">"If I see red blocks on a finance dashboard, I feel like I'm failing."</p>
                <span className="text-[7px] font-mono text-[#10f400] block text-right mt-2 font-bold">— Visual Guardrails</span>
              </div>
            </div>

            <p className="text-[9px] text-zinc-500 font-serif italic mt-2 text-center">
              We catalogued student mental models side by side with Priya's psychological anchors.
            </p>
          </div>
        );

      case "hoshaksham-strategy-visual":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group/strategy">
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 to-zinc-900" />
            
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4 relative z-10">
              <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest">Architectural Constraint Protocol</span>
              <span className="text-[8px] text-zinc-500 font-mono">Logic Gate: Inflow-Only</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-11 gap-2 items-center flex-1 my-4 relative z-10">
              {/* Left Box */}
              <div className="md:col-span-4 bg-zinc-900/80 p-3 rounded-xl border border-zinc-800 space-y-1.5 text-center">
                <span className="text-[7px] font-mono text-brand-primary font-bold uppercase block tracking-widest">Active Channels</span>
                <div className="text-[9px] text-zinc-300 font-bold">WhatsApp Billing • Direct UPI • Inflow</div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-primary w-4/5 rounded-full" />
                </div>
              </div>

              {/* Connecting Pulse */}
              <div className="md:col-span-3 flex flex-col items-center justify-center animate-pulse py-2">
                <Coins className="w-5 h-5 text-brand-primary mb-1" />
                <span className="text-[7px] font-mono text-zinc-500">INFLOW ONLY</span>
                <span className="text-zinc-500 text-xs">➡️</span>
              </div>

              {/* Right Box (Grayed Out/Locked) */}
              <div className="md:col-span-4 bg-zinc-900/30 p-3 rounded-xl border border-zinc-850/60 space-y-1.5 text-center opacity-40 relative">
                <div className="absolute inset-0 bg-zinc-950/25 flex items-center justify-center rounded-xl backdrop-blur-[0.5px]">
                  <Lock className="w-4 h-4 text-red-500" />
                </div>
                <span className="text-[7px] font-mono text-zinc-500 font-bold uppercase block tracking-widest">Debt & Expenses Out</span>
                <div className="text-[9px] text-zinc-500 font-bold">Ledger Balance • Debits • Invoicing</div>
                <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden" />
              </div>
            </div>

            <p className="text-[9px] font-mono text-zinc-500 leading-normal text-center relative z-10">
              ❌ ZERO manual bank transactions. 🔒 NO outgoing ledger items. Entirely optimized for incoming cash verification.
            </p>
          </div>
        );

      case "hoshaksham-direction-dashboard":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group/direction">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">UI Component Archeype SPEC_V1</span>
              <span className="px-1.5 py-0.5 rounded bg-[#10f400]/10 text-[#10f400] text-[7px] font-mono font-bold">APPROVED</span>
            </div>

            <div className="border border-dashed border-zinc-800 p-4 rounded-xl relative my-3 flex-1 flex flex-col justify-between bg-zinc-900/20">
              {/* Wireframe UI */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="w-20 h-2 bg-zinc-800 rounded-sm" />
                    <div className="w-28 h-4 bg-brand-primary/20 rounded-sm" />
                  </div>
                  <div className="w-12 h-5 bg-zinc-850 rounded-md" />
                </div>
                <div className="h-0.5 bg-zinc-850 w-full" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-zinc-900 rounded-lg space-y-1">
                    <div className="w-8 h-1.5 bg-zinc-700 rounded-sm" />
                    <div className="w-14 h-3 bg-zinc-400 rounded-sm" />
                  </div>
                  <div className="p-3 bg-zinc-900 rounded-lg space-y-1">
                    <div className="w-8 h-1.5 bg-zinc-700 rounded-sm" />
                    <div className="w-14 h-3 bg-zinc-450 rounded-sm" />
                  </div>
                </div>
              </div>

              {/* Wireframe annotations */}
              <div className="absolute -top-3 right-5 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded text-[7px] font-mono text-brand-primary">
                A // MAIN VALUE (CONFIDENCE ENVELOPE)
              </div>
              <div className="absolute -bottom-3 left-10 bg-zinc-950 border border-zinc-800 px-2 py-0.5 rounded text-[7px] font-mono text-brand-primary">
                B // ACTION HUB
              </div>
            </div>

            <p className="text-[8px] font-mono text-zinc-500 text-left">
              The wireframe mapping targets "Confidence" and "Action" triggers immediately. No secondary views needed.
            </p>
          </div>
        );

      case "hoshaksham-des-tokens":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative overflow-hidden group/tokens">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-950/10 via-zinc-950 to-[#dce817]/5 pointer-events-none" />

            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">Figma Variables Sync Pipeline</span>
              <span className="text-[8px] text-zinc-400 font-mono">Variables API Shipped</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-7 gap-1 items-center flex-1 my-3 font-mono text-[8px]">
              {/* Figma Cards */}
              <div className="md:col-span-2 bg-purple-950/20 border border-purple-900/60 p-2.5 rounded-lg">
                <span className="text-[7px] uppercase font-bold text-purple-400 block mb-1">Figma Styles</span>
                <p className="text-white">--brand-main</p>
                <p className="text-zinc-500 text-[6px]">HEX #dce817</p>
                <p className="text-white mt-1">--spacing-lg</p>
                <p className="text-zinc-500 text-[6px]">Value: 24px</p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-center text-zinc-500 py-1">
                <span>➡️</span>
              </div>

              {/* Tokens JSON */}
              <div className="md:col-span-2 bg-zinc-900 border border-zinc-800 p-2.5 rounded-lg pointer-events-none">
                <span className="text-[7px] uppercase font-bold text-amber-500 block mb-1">Tokens.json</span>
                <p className="text-brand-primary">"brand": "#dce817"</p>
                <p className="text-zinc-300">"spacing_lg": 24</p>
                <p className="text-zinc-500 text-[6px]">Formatted for API</p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex justify-center text-zinc-500 py-1">
                <span>➡️</span>
              </div>

              {/* FlutterFlow Settings */}
              <div className="md:col-span-1 bg-emerald-950/20 border border-emerald-900/60 p-2.5 rounded-lg text-center">
                <Smartphone className="w-3 h-3 text-[#10f400] mx-auto mb-1 animate-pulse" />
                <span className="text-[6px] text-zinc-400 block">FlutterFlow Sync</span>
              </div>
            </div>

            <p className="text-[9px] font-sans font-bold text-zinc-400">
              The layout mapping pipeline prevents any translation loss. Developer uses actual token variables directly inside FlutterFlow backend.
            </p>
          </div>
        );

      case "hoshaksham-hicks-ui":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative group/hicks">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <span className="text-[8px] font-bold text-red-400 uppercase tracking-widest block">Original Screen (24+ Tabs)</span>
              <span className="text-[8px] text-zinc-500 font-mono">Hick's Law Study</span>
            </div>

            <div className="flex-1 flex gap-2 overflow-hidden my-2">
              {/* Legacy Wireframe Cluter */}
              <div className="flex-1 bg-zinc-900/40 border border-zinc-850 p-2 rounded-lg opacity-45 space-y-1 flex flex-col justify-between">
                <div>
                  <div className="h-2 w-full bg-zinc-800 rounded-sm mb-2" />
                  <div className="grid grid-cols-3 gap-1">
                    <div className="h-3 bg-zinc-800 rounded-sm" />
                    <div className="h-3 bg-zinc-800 rounded-sm" />
                    <div className="h-3 bg-zinc-800 rounded-sm" />
                  </div>
                  <div className="h-4 bg-zinc-850 rounded-sm mt-2" />
                </div>
                <span className="text-[6px] font-mono text-zinc-500 block text-center uppercase font-bold">Complexity Matrix // Friction High</span>
              </div>

              <div className="w-6 flex items-center justify-center text-zinc-600 font-black">
                →
              </div>

              {/* Transformed Hick's card */}
              <div className="flex-1 bg-zinc-900 p-2.5 rounded-lg border border-brand-primary/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-2.5 bg-brand-primary/20 rounded-sm" />
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                </div>
                <div className="bg-zinc-950 py-2 px-1 text-center border border-zinc-850 rounded-md my-2">
                  <span className="text-[10px] text-white font-mono font-bold">₹15,000</span>
                </div>
                <span className="text-[6px] font-mono text-brand-primary block text-center uppercase font-bold">1 Central Inflow Action</span>
              </div>
            </div>

            <p className="text-[8px] font-mono text-zinc-500 text-center uppercase mt-1">
              Fewer choices, instant focus. The decision time is reduced by 85%.
            </p>
          </div>
        );

      case "hoshaksham-zeigarnik-ui":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative group/zeigarnik">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <span className="text-[8px] font-bold text-brand-primary uppercase tracking-widest block">Incomplete Renewal Progress indicators</span>
              <span className="text-[8px] text-zinc-500 font-mono">Zeigarnik Loop</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 flex-1 items-center my-2">
              {/* Radial Progress Graphic */}
              <div className="md:col-span-5 flex items-center justify-center">
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="40" cy="40" r="32" className="stroke-zinc-800 fill-none" strokeWidth="6" />
                    <circle cx="40" cy="40" r="32" className="stroke-brand-primary fill-none text-brand-primary" strokeWidth="6" strokeDasharray="201" strokeDashoffset="45" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs font-black text-white">82%</span>
                    <span className="text-[6px] text-zinc-500 uppercase tracking-widest">Done</span>
                  </div>
                </div>
              </div>

              {/* Status List */}
              <div className="md:col-span-7 space-y-2">
                <div className="bg-zinc-900/60 p-2 rounded-lg border border-zinc-800 flex items-center justify-between text-[8px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span className="text-zinc-200 font-bold">Ketan Shah</span>
                  </div>
                  <span className="text-zinc-400">Renewal pending (Expected 1d ago)</span>
                </div>
                <div className="bg-zinc-900/20 p-2 rounded-lg border border-zinc-850 flex items-center justify-between text-[8px] opacity-50">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    <span className="text-zinc-400 font-bold">Maya K.</span>
                  </div>
                  <span className="text-zinc-500">Collected ✅</span>
                </div>
              </div>
            </div>

            <p className="text-[8px] font-sans text-zinc-500 italic mt-1 text-center">
              "We leverage the human mind's urge to close open loops. Seeing pending users prompts zero guilt followups."
            </p>
          </div>
        );

      case "hoshaksham-impact-charts":
        return (
          <div className="w-full h-full bg-zinc-950 p-6 rounded-2xl border border-zinc-800/80 flex flex-col justify-between relative group/impact">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">ADMIN HOURS REQUIRED PER MONTH // METRIC SHIFT</span>
              <span className="text-[#10f400] text-[8px] font-mono font-bold uppercase tracking-widest">Verified Log</span>
            </div>

            {/* Impact Chart Comparison */}
            <div className="flex-1 flex flex-col justify-center my-4">
              <div className="space-y-4 font-mono text-[8px]">
                {/* Legacy Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-zinc-400">
                    <span>LEGACY METHOD (MANUAL RECONCILIATION)</span>
                    <span className="text-red-400 font-black">5.2 HOURS / MONTH</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800 relative">
                    <div className="h-full bg-red-500/80 w-11/12 rounded-sm" />
                  </div>
                </div>

                {/* Hoshaksham Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between font-bold text-brand-primary">
                    <span>HOSHAKSHAM METHOD (AUTOMATED LINK PROTOCOLS)</span>
                    <span className="text-[#10f400] font-black">5 MINUTES / MONTH</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-900 rounded-sm overflow-hidden border border-zinc-850 relative">
                    <div className="h-full bg-[#10f400] w-1/12 rounded-sm animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[8px] font-sans text-zinc-500 text-left">
              *Data compiled across 12-week tracking intervals. Represents zero-touch reconciliation workflows.
            </p>
          </div>
        );

      default:
        return defaultIllustration || (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-900 text-center min-h-[200px]">
            <HelpCircle className="w-12 h-12 text-zinc-600 mb-4" />
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-1">{label}</p>
            <p className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest">Case study visual asset is fully compiled</p>
          </div>
        );
    }
  };

  return (
    <div className={`relative rounded-[32px] overflow-hidden border border-zinc-800 bg-zinc-900/30 shadow-xl backdrop-blur-sm p-4 flex flex-col justify-between ${aspectRatio} ${className}`}>
      {renderIllustration()}
    </div>
  );
}
