import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Sparkles, 
  Zap, 
  Layers, 
  TicketCheck, 
  ExternalLink,
  Smartphone,
  LayoutDashboard
} from "lucide-react";
import FyleReimbursementApp from "./FyleReimbursementApp";
import FyleWebApp from "./FyleWebApp";

export default function FyleSection() {
  const [activeTab, setActiveTab] = useState<"mileage" | "webapp">("mileage");

  return (
    <section className="w-full">
      <div className="bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 dark:from-zinc-900/50 dark:via-zinc-900 dark:to-zinc-900/50 py-12 md:py-20 rounded-3xl border border-amber-200/60 dark:border-zinc-800 relative overflow-hidden shadow-xs">
        <div className="mx-auto w-full max-w-5xl px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Logo & Brand Header */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-400 text-zinc-950 font-black text-xl shadow-sm border border-amber-300">
                F
              </span>
              <div className="text-left">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-zinc-900 flex items-center gap-1.5">
                  <span>Fyle HQ</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <span className="text-[11px] text-zinc-500 font-mono tracking-wider">
                  B2B Expense Management • Lead Product Designer
                </span>
              </div>
            </div>

            {/* Metric pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/70 border border-amber-200 mb-4 text-xs font-medium text-amber-950">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Bulk Mileage & Expense Reporting • 60% Support Ticket Drop</span>
            </div>

            {/* Main Quote / Headline */}
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.22] tracking-tight font-sans max-w-3xl mx-auto">
              <span className="block">
                “I’ve genuinely considered not claiming expenses anymore. The form takes longer than the commute itself.”
              </span>
              <span className="block mt-3 text-xs sm:text-sm font-medium text-zinc-500 tracking-normal normal-case not-italic">
                — Direct quote from user research with 500+ daily commuters
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
              Fyle is a B2B expense management platform. 500+ daily commuters were filing mileage one painful entry at a time. I redesigned bulk mileage and expense approvals from the ground up — cutting complaints by 60% in 6 weeks.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex items-center justify-center">
              <a
                id="fyle-case-study-cta"
                href="https://spfolio.framer.ai/zz-case-study-bulk-mileage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white text-xs sm:text-sm font-semibold shadow-md shadow-zinc-900/10 hover:bg-zinc-800 hover:shadow-lg transition-[transform,background-color,box-shadow] duration-150 ease-out active:scale-[0.97] group cursor-pointer"
              >
                <span>Read case study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </a>
            </div>
          </div>

          {/* Interactive Prototype Sandbox Preview */}
          <div className="relative mt-10 overflow-hidden rounded-2xl bg-white border border-zinc-200/90 shadow-xl max-w-4xl mx-auto ring-1 ring-black/5">
            {/* Window Topbar */}
            <div className="h-11 bg-zinc-100/90 border-b border-zinc-200/80 px-4 flex items-center justify-between shrink-0 gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[11px] font-mono font-medium text-zinc-500 ml-2 truncate hidden sm:inline">
                  app.fylehq.com/{activeTab === "mileage" ? "reimbursements/bulk-mileage" : "dashboard/expenses"}
                </span>
              </div>

              {/* View Switcher Controls */}
              <div className="inline-flex p-0.5 bg-zinc-200/70 rounded-lg border border-zinc-200 shrink-0">
                <button
                  type="button"
                  onClick={() => setActiveTab("mileage")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:scale-[0.96] ${
                    activeTab === "mileage"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Bulk Mileage</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("webapp")}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-[transform,background-color,color,box-shadow] duration-150 ease-out active:scale-[0.96] ${
                    activeTab === "webapp"
                      ? "bg-white text-zinc-900 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  <span>Expense Web App</span>
                </button>
              </div>

              <a
                href="https://spfolio.framer.ai/zz-case-study-bulk-mileage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-zinc-600 hover:text-zinc-900 flex items-center gap-1 hover:underline shrink-0"
              >
                <span>Case study</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Sandbox Container */}
            <div className="h-[480px] md:h-[560px] overflow-y-auto bg-white">
              {activeTab === "mileage" ? (
                <FyleReimbursementApp />
              ) : (
                <FyleWebApp />
              )}
            </div>
          </div>

          {/* Key Feature Capabilities / Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-amber-50 text-amber-600 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 font-sans flex items-center gap-1.5">
                  <span>2.4s Filing Time</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-amber-100 text-amber-800">
                    -70%
                  </span>
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                  From receipt capture to auto-calculated refund in two taps. Zero manual spreadsheet data entry.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 font-sans flex items-center gap-1.5">
                  <span>50+ Bulk Claims</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-blue-100 text-blue-800">
                    High Velocity
                  </span>
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                  Batch multi-stop route uploads, recurring distance presets, and single-click mass approval workflows.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-xs flex items-start gap-3">
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                <TicketCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-900 font-sans flex items-center gap-1.5">
                  <span>-85% Support Load</span>
                  <span className="text-[10px] font-medium px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">
                    Resolved
                  </span>
                </h4>
                <p className="text-[11px] text-zinc-500 mt-1 leading-normal">
                  Proactive inline validation and OCR receipt auditing eliminated reimbursement rejection delays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
