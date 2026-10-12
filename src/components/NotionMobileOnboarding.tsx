import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Circle,
  ChevronRight,
  ArrowRight,
  Smartphone,
  Layers,
  Zap,
  DollarSign,
  Send,
  MessageSquare,
  ShieldCheck,
  Check,
  Plus,
  Sliders,
  Maximize2
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  tag: string;
  duration: number; // in seconds
}

const STEPS: Step[] = [
  { id: 0, title: "Role Setup", tag: "01. Workspace", duration: 4.5 },
  { id: 1, title: "Interactive Checklist", tag: "02. Onboarding", duration: 5 },
  { id: 2, title: "Slash Command", tag: "03. Block Builder", duration: 4.5 },
  { id: 3, title: "Zen Inflows", tag: "04. Automation", duration: 5 },
];

export default function NotionMobileOnboarding() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState<1 | 1.5 | 2>(1);
  const [stepProgress, setStepProgress] = useState(0);

  // Step 0 states
  const [selectedRole, setSelectedRole] = useState<string>("Yoga & Fitness Coach");

  // Step 1 checklist states
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: false,
    2: false,
  });

  // Step 2 slash command state
  const [commandText, setCommandText] = useState("");
  const [isCommandExecuted, setIsCommandExecuted] = useState(false);

  // Step 3 animation state
  const [inflowCount, setInflowCount] = useState(1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-progress animation
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // 50ms update
    const totalSteps = (STEPS[currentStep].duration * 1000) / playbackSpeed;
    const increment = (intervalTime / totalSteps) * 100;

    timerRef.current = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          // Go to next step
          setCurrentStep((curr) => (curr + 1) % STEPS.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentStep, playbackSpeed]);

  // Step-specific simulated interactions when advancing
  useEffect(() => {
    setStepProgress(0);

    if (currentStep === 0) {
      const t = setTimeout(() => setSelectedRole("Yoga & Fitness Coach"), 1200);
      return () => clearTimeout(t);
    } else if (currentStep === 1) {
      setCheckedItems({ 0: true, 1: false, 2: false });
      const t1 = setTimeout(() => {
        setCheckedItems((prev) => ({ ...prev, 1: true }));
      }, 1500 / playbackSpeed);
      const t2 = setTimeout(() => {
        setCheckedItems((prev) => ({ ...prev, 2: true }));
      }, 3000 / playbackSpeed);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else if (currentStep === 2) {
      setCommandText("");
      setIsCommandExecuted(false);
      const text = "/receipt-automation";
      let idx = 0;
      const typeInterval = setInterval(() => {
        if (idx <= text.length) {
          setCommandText(text.slice(0, idx));
          idx++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsCommandExecuted(true), 600 / playbackSpeed);
        }
      }, 100 / playbackSpeed);

      return () => clearInterval(typeInterval);
    } else if (currentStep === 3) {
      setInflowCount(1);
      const t1 = setTimeout(() => setInflowCount(2), 1200 / playbackSpeed);
      const t2 = setTimeout(() => setInflowCount(3), 2400 / playbackSpeed);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [currentStep, playbackSpeed]);

  const toggleCheck = (idx: number) => {
    setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleManualStepChange = (idx: number) => {
    setCurrentStep(idx);
    setStepProgress(0);
  };

  return (
    <div className="w-full h-full min-h-[460px] bg-zinc-950 text-white rounded-[28px] md:rounded-[36px] p-4 md:p-6 flex flex-col justify-between relative overflow-hidden border border-zinc-800 shadow-2xl">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Ripplix-style Micro-Interaction Header */}
      <div className="relative z-10 flex items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 shadow-inner">
            <Smartphone className="w-4 h-4 text-brand-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-brand-primary">
                Notion-Style Mobile Onboarding
              </span>
              <span className="text-[8px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold">
                LIVE INTERACTIVE
              </span>
            </div>
            <p className="text-xs font-bold text-zinc-300">
              Interactive Micro-Interactions & Flow Simulation
            </p>
          </div>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-1.5 bg-zinc-900/90 border border-zinc-800 p-1 rounded-2xl">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-colors"
            title={isPlaying ? "Pause animation" : "Play animation"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>
          <button
            onClick={() => {
              setCurrentStep(0);
              setStepProgress(0);
              setIsPlaying(true);
            }}
            className="p-1.5 hover:bg-white/10 rounded-xl text-zinc-300 hover:text-white transition-colors"
            title="Restart flow"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <div className="h-3 w-[1px] bg-zinc-800 mx-0.5" />
          <button
            onClick={() => setPlaybackSpeed((s) => (s === 1 ? 1.5 : s === 1.5 ? 2 : 1))}
            className="px-2 py-0.5 text-[9px] font-mono font-bold text-brand-primary hover:bg-white/10 rounded-lg transition-colors"
            title="Change animation speed"
          >
            {playbackSpeed}x
          </button>
        </div>
      </div>

      {/* Progress Bars (Story/Ripplix Style) */}
      <div className="grid grid-cols-4 gap-2 my-3 relative z-10">
        {STEPS.map((step, idx) => (
          <button
            key={step.id}
            onClick={() => handleManualStepChange(idx)}
            className="group flex flex-col text-left focus:outline-none"
          >
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-brand-primary"
                initial={false}
                animate={{
                  width:
                    idx < currentStep
                      ? "100%"
                      : idx === currentStep
                      ? `${stepProgress}%`
                      : "0%",
                }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span
                className={`text-[8px] font-bold uppercase tracking-wider transition-colors ${
                  idx === currentStep ? "text-white" : "text-zinc-500 group-hover:text-zinc-300"
                }`}
              >
                {step.title}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Main Simulation Viewport: Mobile Phone Mockup */}
      <div className="relative z-10 flex-1 flex items-center justify-center py-2">
        <div className="w-full max-w-[340px] md:max-w-[380px] bg-zinc-900/90 border-2 border-zinc-700/80 rounded-[36px] shadow-2xl p-4 md:p-5 relative flex flex-col backdrop-blur-md">
          {/* Phone Dynamic Island & Status Bar */}
          <div className="flex items-center justify-between px-2 mb-3">
            <span className="text-[10px] font-mono font-bold text-zinc-400">9:41</span>
            <div className="w-20 h-4 bg-zinc-950 rounded-full border border-zinc-800 flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-zinc-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            </div>
            <div className="flex items-center gap-1 text-[10px] text-zinc-400 font-mono">
              <span>5G</span>
              <div className="w-4 h-2 rounded-sm border border-zinc-500 p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Screen Content Container with Smooth Transitions */}
          <div className="min-h-[260px] md:min-h-[280px] bg-[#191919] rounded-[24px] p-4 md:p-5 border border-zinc-800 flex flex-col justify-between text-zinc-100 font-sans shadow-inner overflow-hidden relative">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xl">✨</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                        Workspace Setup
                      </span>
                    </div>
                    <h4 className="text-base font-black text-white tracking-tight">
                      How will you use Hoshaksham?
                    </h4>
                    <p className="text-[11px] text-zinc-400 font-medium leading-relaxed mt-0.5">
                      We'll customize your Zen Inflows and automations.
                    </p>
                  </div>

                  {/* Selectable Roles */}
                  <div className="space-y-1.5 my-auto">
                    {[
                      { role: "Yoga & Fitness Coach", icon: "🧘", desc: "Automate class passes & WhatsApp slips" },
                      { role: "Academic & Tech Tutor", icon: "📚", desc: "Monthly recurring subscription auto-debit" },
                      { role: "Independent Consultant", icon: "⚡", desc: "One-click retainer receipts" },
                    ].map((item) => (
                      <motion.button
                        key={item.role}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedRole(item.role)}
                        className={`w-full p-2.5 rounded-xl border text-left flex items-center gap-3 transition-all ${
                          selectedRole === item.role
                            ? "bg-zinc-800/90 border-brand-primary text-white shadow-md shadow-brand-primary/10"
                            : "bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate text-zinc-200">{item.role}</p>
                          <p className="text-[9px] text-zinc-400 truncate">{item.desc}</p>
                        </div>
                        {selectedRole === item.role ? (
                          <div className="w-4 h-4 rounded-full bg-brand-primary text-zinc-950 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full border border-zinc-700 shrink-0" />
                        )}
                      </motion.button>
                    ))}
                  </div>

                  <button
                    onClick={() => handleManualStepChange(1)}
                    className="w-full py-2.5 bg-brand-primary hover:bg-brand-primary-light text-zinc-950 font-black rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">📋</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                          Getting Started Guide
                        </span>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-brand-primary">
                        {Object.values(checkedItems).filter(Boolean).length}/3 Done
                      </span>
                    </div>
                    <h4 className="text-base font-black text-white tracking-tight">
                      First Flight Checklist
                    </h4>
                  </div>

                  {/* Notion-Style Checkbox Items */}
                  <div className="space-y-2 my-auto">
                    {[
                      { id: 0, text: "Connect UPI & Auto-Inflow Wallet", icon: "💳" },
                      { id: 1, text: "Send instant WhatsApp Receipt to 1st member", icon: "📱" },
                      { id: 2, text: "Turn on Zen Inflow Mode (hide manual spreadsheets)", icon: "🧘" },
                    ].map((item) => {
                      const isChecked = checkedItems[item.id];
                      return (
                        <motion.div
                          key={item.id}
                          layout
                          onClick={() => toggleCheck(item.id)}
                          className={`p-2.5 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                            isChecked
                              ? "bg-zinc-800/40 border-zinc-800 text-zinc-400"
                              : "bg-zinc-800/90 border-zinc-700 text-white"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                              isChecked
                                ? "bg-emerald-500 border-emerald-500 text-zinc-950"
                                : "border-zinc-500 bg-zinc-900"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm">{item.icon}</span>
                          <p
                            className={`text-xs font-medium flex-1 transition-all ${
                              isChecked ? "line-through text-zinc-500" : "text-zinc-200"
                            }`}
                          >
                            {item.text}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="pt-1 flex items-center justify-between text-[10px] text-zinc-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-brand-primary" />
                      Tap items to interact
                    </span>
                    <button
                      onClick={() => handleManualStepChange(2)}
                      className="font-bold text-brand-primary hover:underline flex items-center gap-1"
                    >
                      Next Step <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-sm">⚡</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-primary">
                        Notion Slash Command
                      </span>
                    </div>
                    <h4 className="text-sm font-black text-white tracking-tight">
                      Instant Block Generation
                    </h4>
                  </div>

                  {/* Notion Command Input & Menu */}
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    <div className="bg-zinc-950 p-2.5 rounded-xl border border-zinc-700 font-mono text-xs flex items-center gap-1.5 text-brand-primary">
                      <span>{commandText}</span>
                      <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-1.5 h-3.5 bg-brand-primary inline-block"
                      />
                    </div>

                    <AnimatePresence>
                      {!isCommandExecuted ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="bg-zinc-900 border border-zinc-700 rounded-xl p-1.5 shadow-2xl space-y-1"
                        >
                          <div className="p-1.5 bg-brand-primary/20 text-brand-primary rounded-lg flex items-center gap-2 text-xs font-bold">
                            <Zap className="w-3.5 h-3.5" />
                            <span>WhatsApp Automation Trigger</span>
                          </div>
                          <div className="p-1.5 text-zinc-400 rounded-lg flex items-center gap-2 text-xs">
                            <DollarSign className="w-3.5 h-3.5" />
                            <span>Recurring Inflow Tracker</span>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs">
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp Receipt Dispatched</span>
                            </div>
                            <span className="text-[8px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-mono">
                              200 OK
                            </span>
                          </div>
                          <p className="text-[10px] text-zinc-300 font-mono">
                            "Hi Sarah, your ₹4,500 Yoga Pass is confirmed! 🧘"
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    onClick={() => handleManualStepChange(3)}
                    className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Live Inflows</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2.5 flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm">🧘</span>
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                          Zen Mode Activated
                        </span>
                      </div>
                      <span className="text-[9px] font-bold text-zinc-400">0 Admin Overhead</span>
                    </div>
                    <h4 className="text-base font-black text-white tracking-tight">
                      Real-Time Inflow Stream
                    </h4>
                  </div>

                  {/* Dynamic Inflow Stream */}
                  <div className="space-y-1.5 my-auto">
                    {[
                      { id: 1, name: "Sarah M. — Yoga Monthly", amount: "+₹4,500", time: "Just now", icon: "🧘" },
                      { id: 2, name: "Karan D. — Skating Pro", amount: "+₹1,200", time: "2m ago", icon: "⛸️" },
                      { id: 3, name: "Maya R. — Core Fitness", amount: "+₹2,500", time: "5m ago", icon: "💪" },
                    ]
                      .slice(0, inflowCount)
                      .map((inflow, i) => (
                        <motion.div
                          key={inflow.id}
                          initial={{ opacity: 0, x: -10, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className="p-2 bg-zinc-900/90 border border-zinc-800 rounded-xl flex items-center justify-between shadow-sm"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-base">{inflow.icon}</span>
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-zinc-200 truncate">{inflow.name}</p>
                              <p className="text-[9px] text-zinc-500">{inflow.time}</p>
                            </div>
                          </div>
                          <span className="text-xs font-black text-emerald-400 font-mono shrink-0">
                            {inflow.amount}
                          </span>
                        </motion.div>
                      ))}
                  </div>

                  <div className="p-2 bg-brand-primary/10 border border-brand-primary/20 rounded-xl text-center">
                    <p className="text-[10px] font-black uppercase tracking-wider text-brand-primary">
                      ✨ Onboarding Completed & Workspace Live!
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Home Indicator */}
          <div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto mt-3" />
        </div>
      </div>

      {/* Bottom Summary Pill */}
      <div className="relative z-10 pt-2 flex items-center justify-between text-[11px] text-zinc-400">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
          Interactive Demo — Click on screen to test
        </span>
        <button
          onClick={() => {
            setCurrentStep(0);
            setStepProgress(0);
          }}
          className="text-brand-primary hover:text-white font-bold uppercase tracking-wider text-[10px] transition-colors"
        >
          Replay Onboarding
        </button>
      </div>
    </div>
  );
}
