import React from "react";
import { 
  Users, 
  MessageSquare, 
  FileSpreadsheet, 
  AlertTriangle, 
  CheckCircle2, 
  Smartphone, 
  Layers, 
  Palette, 
  TrendingUp, 
  Clock, 
  Calendar, 
  Globe, 
  FileText, 
  Sparkles, 
  ShieldCheck, 
  CreditCard,
  Send,
  Zap
} from "lucide-react";

/* 1. THE CONTEXT ARTIFACTS */
export function DiscoveryWorkshopArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          FigJam // Discovery Canvas
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Session #01 • 3 Co-Founders</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 items-stretch">
        <div className="bg-amber-100/90 p-2.5 rounded-lg text-slate-900 shadow-sm flex flex-col justify-between transform -rotate-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-amber-900 font-pj">User Pain</span>
          <p className="text-[10px] font-medium leading-tight mt-1">"I spend Sunday afternoons asking students if they paid."</p>
          <span className="text-[8px] text-amber-800 mt-1 font-mono">- Yoga Teacher</span>
        </div>
        <div className="bg-rose-100/90 p-2.5 rounded-lg text-slate-900 shadow-sm flex flex-col justify-between transform rotate-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-rose-900 font-pj">Bottleneck</span>
          <p className="text-[10px] font-medium leading-tight mt-1">Screenshot overload. 40+ unlabelled receipts in WhatsApp.</p>
          <span className="text-[8px] text-rose-800 mt-1 font-mono">- Piano Coach</span>
        </div>
        <div className="bg-sky-100/90 p-2.5 rounded-lg text-slate-900 shadow-sm flex flex-col justify-between transform -rotate-1">
          <span className="text-[9px] font-bold uppercase tracking-wider text-sky-900 font-pj">Core Goal</span>
          <p className="text-[10px] font-medium leading-tight mt-1">1-Tap WhatsApp renewal link that credits straight to UPI.</p>
          <span className="text-[8px] text-sky-800 mt-1 font-mono">- Product Lead</span>
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>34 Post-it clusters synthesised</span>
        <span className="text-emerald-400 font-bold">Consensus: Mobile-First</span>
      </div>
    </div>
  );
}

export function EcosystemFlowArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-2">
        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
          System Architecture Map
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Creator → Platform → Student</span>
      </div>
      <div className="flex items-center justify-between gap-2 flex-1 my-auto">
        <div className="flex-1 bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
          <div className="w-6 h-6 mx-auto rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold mb-1">
            <Users className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-200 block font-pj">Creator Studio</span>
          <span className="text-[8px] text-slate-500 block mt-0.5">Defines Pass & Fee</span>
        </div>
        <div className="text-slate-600 font-mono text-xs">→</div>
        <div className="flex-1 bg-slate-900 border border-brand-primary/40 p-2.5 rounded-xl text-center shadow-lg shadow-brand-primary/5">
          <div className="w-6 h-6 mx-auto rounded-lg bg-brand-primary/20 text-brand-primary flex items-center justify-center text-xs font-bold mb-1">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-brand-primary block font-pj">Hosaksham Core</span>
          <span className="text-[8px] text-slate-400 block mt-0.5">UPI Auto-Nudge Engine</span>
        </div>
        <div className="text-slate-600 font-mono text-xs">→</div>
        <div className="flex-1 bg-slate-900 border border-slate-800 p-2.5 rounded-xl text-center">
          <div className="w-6 h-6 mx-auto rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold mb-1">
            <Smartphone className="w-3.5 h-3.5" />
          </div>
          <span className="text-[10px] font-bold text-slate-200 block font-pj">Student Chat</span>
          <span className="text-[8px] text-slate-500 block mt-0.5">1-Tap GPay / PhonePe</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Cycle: 30-Day Auto Trigger</span>
        <span className="text-emerald-400 font-bold">Zero Friction Loop</span>
      </div>
    </div>
  );
}

/* 2. THE PROBLEM ARTIFACTS */
export function WhatsAppScreenshotAuditArtifact() {
  return (
    <div className="w-full h-full bg-[#0b141a] p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] text-white font-bold">
            W
          </div>
          <span className="text-[11px] font-bold text-slate-200 font-pj">Chat Gallery Audit (Real)</span>
        </div>
        <span className="text-[9px] bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono font-bold">
          42 Unmatched Slips
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 my-auto">
        {[
          { name: "Rahul (Vinyasa)", amount: "₹2,400", time: "Oct 28" },
          { name: "Ananya S.", amount: "₹3,000", time: "Oct 29" },
          { name: "Unknown Sender", amount: "₹1,800", time: "Nov 01" }
        ].map((slip, i) => (
          <div key={i} className="bg-[#1f2c34] p-2 rounded-lg border border-white/5 flex flex-col justify-between text-left">
            <div className="w-full aspect-[4/3] bg-emerald-950/40 rounded border border-emerald-500/20 flex flex-col items-center justify-center text-emerald-400 p-1 mb-1.5">
              <span className="text-[8px] font-mono font-bold">GPay Slip</span>
              <span className="text-[11px] font-bold text-white font-pj">{slip.amount}</span>
            </div>
            <span className="text-[9px] font-bold text-slate-300 truncate font-pj">{slip.name}</span>
            <span className="text-[8px] text-slate-500 font-mono">{slip.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 text-[9px] text-rose-400 font-mono flex items-center justify-between">
        <span>Friction: Manual reconciliation required</span>
        <span className="text-slate-500 font-bold">5+ hrs wasted</span>
      </div>
    </div>
  );
}

export function SpreadsheetChaosArtifact() {
  return (
    <div className="w-full h-full bg-white p-3.5 text-left flex flex-col justify-between select-none border border-gray-100">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
        <div className="flex items-center gap-1.5">
          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
          <span className="text-[11px] font-bold text-gray-800 font-pj">Yoga_Batch_Fees_2024_FINAL(3).xlsx</span>
        </div>
        <span className="text-[9px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded font-mono font-bold">
          Formula Desync
        </span>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden text-[9px] flex-1">
        <div className="grid grid-cols-4 bg-gray-100 font-bold text-gray-700 p-1.5 border-b border-gray-200 font-mono">
          <span>Student</span>
          <span>Due Date</span>
          <span>Status</span>
          <span className="text-right">Balance</span>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="grid grid-cols-4 p-1.5 text-gray-800 font-mono bg-white">
            <span className="font-semibold">Deepak V.</span>
            <span className="text-gray-500">28 Oct</span>
            <span className="text-rose-600 font-bold">Overdue?</span>
            <span className="text-right text-rose-600">₹2,400</span>
          </div>
          <div className="grid grid-cols-4 p-1.5 text-gray-800 font-mono bg-amber-50/50">
            <span className="font-semibold">Siddharth</span>
            <span className="text-gray-500">01 Nov</span>
            <span className="text-amber-700 font-bold">Sent Msg?</span>
            <span className="text-right">₹3,000</span>
          </div>
          <div className="grid grid-cols-4 p-1.5 text-gray-800 font-mono bg-rose-50/70">
            <span className="font-semibold">Meera K.</span>
            <span className="text-gray-500">??</span>
            <span className="text-rose-700 font-bold">#REF! ERR</span>
            <span className="text-right text-gray-400">-</span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-gray-500 font-inter flex items-center justify-between">
        <span>87% of instructors reported formula anxiety</span>
        <span className="text-rose-600 font-bold">High Drop-off</span>
      </div>
    </div>
  );
}

export function SubscriptionDropoffArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-rose-400 font-bold uppercase tracking-wider">
          Silent Revenue Leakage Curve
        </span>
        <span className="text-[9px] text-slate-400 font-mono">Baseline Cohort Churn</span>
      </div>
      <div className="flex items-end justify-between gap-3 flex-1 px-4 py-2">
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-slate-400">100%</span>
          <div className="w-full bg-emerald-500/80 rounded-t h-24" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Day 01</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-slate-400">92%</span>
          <div className="w-full bg-emerald-500/60 rounded-t h-20" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Day 15</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-amber-400">75%</span>
          <div className="w-full bg-amber-500/80 rounded-t h-14" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Day 30</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-rose-400">55%</span>
          <div className="w-full bg-rose-500/80 rounded-t h-8" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Day 45</span>
        </div>
      </div>
      <div className="mt-1 pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>Without automated reminders</span>
        <span className="text-rose-400 font-bold">-25% Lost Monthly</span>
      </div>
    </div>
  );
}

/* 3. THE APPROACH ARTIFACTS */
export function InContextShadowingArtifact() {
  return (
    <div className="w-full h-full bg-[#faf7f2] p-4 text-left flex flex-col justify-between select-none border border-amber-200/60">
      <div className="flex items-center justify-between border-b border-amber-200/80 pb-2 mb-2">
        <span className="text-[10px] font-mono text-amber-900 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Clock className="w-3 h-3 text-amber-700" />
          Field Observation Log #04
        </span>
        <span className="text-[9px] text-amber-800 font-mono">06:55 AM • Studio Prana</span>
      </div>
      <div className="space-y-2 flex-1 text-slate-800 text-[10px] font-serif leading-relaxed italic">
        <p className="border-l-2 border-amber-500 pl-2">
          "Teacher is setting up yoga mats while 3 drop-in students crowd the front desk asking for UPI QR. She scrambles to open PhonePe app on her personal phone while music plays on Bluetooth."
        </p>
        <div className="flex items-center gap-2 not-italic font-mono text-[9px] text-amber-900 pt-1">
          <span className="bg-amber-200/80 px-2 py-0.5 rounded font-bold">Friction Insight:</span>
          <span>Payment must happen in &lt;15 seconds or class begins unpaid.</span>
        </div>
      </div>
      <div className="mt-2 pt-2 border-t border-amber-200/80 flex items-center justify-between text-[9px] text-amber-800 font-mono">
        <span>8 Studios Shadowed</span>
        <span className="font-bold">Audio & Note Artifacts</span>
      </div>
    </div>
  );
}

export function PaperWireframesArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">
          Paper Co-Design Sprints
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Sprint 1 • 48-Hour Low-Fi</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 items-center">
        <div className="border border-dashed border-slate-700 p-2 rounded-lg bg-slate-800/60 text-center">
          <div className="text-[8px] font-mono text-slate-400 mb-1">Pass Setup</div>
          <div className="space-y-1">
            <div className="h-2 bg-slate-700 rounded w-3/4 mx-auto" />
            <div className="h-2 bg-slate-700 rounded w-1/2 mx-auto" />
            <div className="h-4 bg-brand-primary/40 rounded mt-2" />
          </div>
          <span className="text-[7px] text-slate-500 block mt-1 font-mono">"No tax forms"</span>
        </div>
        <div className="border border-dashed border-emerald-500/40 p-2 rounded-lg bg-emerald-950/20 text-center">
          <div className="text-[8px] font-mono text-emerald-400 mb-1">WhatsApp Nudge</div>
          <div className="space-y-1">
            <div className="h-3 bg-emerald-800/40 rounded w-5/6 mx-auto" />
            <div className="h-2 bg-emerald-800/40 rounded w-2/3 mx-auto" />
            <div className="h-3 bg-emerald-500/40 rounded mt-1 text-[8px] text-white font-bold flex items-center justify-center">
              Pay Now
            </div>
          </div>
          <span className="text-[7px] text-emerald-400 block mt-1 font-mono">"1-Tap UPI Link"</span>
        </div>
        <div className="border border-dashed border-slate-700 p-2 rounded-lg bg-slate-800/60 text-center">
          <div className="text-[8px] font-mono text-slate-400 mb-1">Ledger View</div>
          <div className="space-y-1">
            <div className="h-2 bg-emerald-700/60 rounded w-full" />
            <div className="h-2 bg-emerald-700/60 rounded w-4/5" />
            <div className="h-2 bg-emerald-700/60 rounded w-full" />
          </div>
          <span className="text-[7px] text-slate-500 block mt-1 font-mono">"Only green incoming"</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Tested with 5 teachers</span>
        <span className="text-emerald-400 font-bold">100% Task Completion</span>
      </div>
    </div>
  );
}

export function FigmaTokensArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-violet-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Palette className="w-3 h-3 text-violet-400" />
          Atomic Token Spec
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Figma → FlutterFlow (32 Vars)</span>
      </div>
      <div className="grid grid-cols-4 gap-1.5 flex-1 items-center">
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">
          <div className="w-4 h-4 rounded bg-[#00897B] mx-auto mb-1" />
          <span className="text-[8px] font-mono text-slate-400 block">color/brand</span>
          <span className="text-[7px] text-slate-500 block">#00897B</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">
          <div className="w-4 h-4 rounded bg-[#059669] mx-auto mb-1" />
          <span className="text-[8px] font-mono text-slate-400 block">color/inflow</span>
          <span className="text-[7px] text-slate-500 block">#059669</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">
          <div className="w-4 h-4 rounded bg-[#FDB241] mx-auto mb-1" />
          <span className="text-[8px] font-mono text-slate-400 block">color/renewal</span>
          <span className="text-[7px] text-slate-500 block">#FDB241</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-center">
          <div className="w-4 h-4 rounded bg-slate-800 mx-auto mb-1 border border-slate-700" />
          <span className="text-[8px] font-mono text-slate-400 block">space/16</span>
          <span className="text-[7px] text-slate-500 block">1rem</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Design-to-code velocity: 4x faster</span>
        <span className="text-violet-400 font-bold">Zero Hand-off Ambiguity</span>
      </div>
    </div>
  );
}

/* 4. THE FINDING ARTIFACTS */
export function ChannelComparisonArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider">
          Channel Latency Comparison
        </span>
        <span className="text-[9px] text-slate-500 font-mono">14 Days Field Trial</span>
      </div>
      <div className="space-y-3 flex-1 my-auto">
        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1">
            <span className="text-slate-400">Email Invoices (QuickBooks/Zoho)</span>
            <span className="text-slate-400">14% Open • 48h Latency</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-slate-500 rounded-full w-[14%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1">
            <span className="text-emerald-400 font-bold">WhatsApp Direct Deep Link</span>
            <span className="text-emerald-400 font-bold">99% Open • &lt;90s Latency</span>
          </div>
          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[99%]" />
          </div>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Clear outcome: Abandon PDF email invoices</span>
        <span className="text-emerald-400 font-bold">7x Faster Settlement</span>
      </div>
    </div>
  );
}

export function PersonaProfileArtifact() {
  return (
    <div className="w-full h-full bg-white p-3.5 text-left flex flex-col justify-between select-none border border-gray-100">
      <div className="flex items-center justify-between border-b border-gray-200 pb-2 mb-2">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
            alt="Priya"
            className="w-6 h-6 rounded-full border border-gray-200 object-cover"
          />
          <div>
            <span className="text-[11px] font-bold text-gray-900 block font-pj">Priya Sharma, 31</span>
            <span className="text-[8px] text-gray-500 font-inter">Vinyasa Yoga Teacher • 38 Students</span>
          </div>
        </div>
        <span className="text-[9px] bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded font-bold font-pj">
          Primary Persona
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-[9px] flex-1 my-auto">
        <div className="bg-gray-50 p-2 rounded-lg border border-gray-200/80">
          <span className="font-bold text-gray-700 block font-pj">Current Tools</span>
          <p className="text-gray-600 mt-0.5 font-inter">GPay personal QR, Google Sheets, WhatsApp Group</p>
        </div>
        <div className="bg-rose-50 p-2 rounded-lg border border-rose-200/80">
          <span className="font-bold text-rose-800 block font-pj">Core Dread</span>
          <p className="text-rose-900 mt-0.5 font-inter">"Asking students for money feels so predatory and transactional."</p>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-gray-500 font-mono flex items-center justify-between">
        <span>Device: iPhone 13 (Mobile-Only)</span>
        <span className="text-brand-primary font-bold">Target User Validated</span>
      </div>
    </div>
  );
}

export function PoliteShieldArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          The Emotional Shield Model
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Psychological Buffer</span>
      </div>
      <div className="flex items-center justify-between gap-2 flex-1 my-auto text-center">
        <div className="bg-slate-800/80 border border-slate-700 p-2 rounded-xl flex-1">
          <span className="text-[9px] font-bold text-slate-300 block font-pj">Teacher</span>
          <span className="text-[7px] text-slate-500 block mt-0.5">Teaches Yoga</span>
          <span className="text-[8px] text-emerald-400 font-bold mt-1 block">Dignity Intact</span>
        </div>
        <div className="text-slate-600 font-mono text-[10px]">⇄</div>
        <div className="bg-emerald-950/60 border border-emerald-500/50 p-2 rounded-xl flex-1 shadow-md">
          <span className="text-[9px] font-bold text-emerald-300 block font-pj">Hosaksham Bot</span>
          <span className="text-[7px] text-emerald-400 block mt-0.5">Courteous Reminder</span>
          <span className="text-[8px] text-white font-mono bg-emerald-600 px-1 rounded mt-1 inline-block">Neutral</span>
        </div>
        <div className="text-slate-600 font-mono text-[10px]">⇄</div>
        <div className="bg-slate-800/80 border border-slate-700 p-2 rounded-xl flex-1">
          <span className="text-[9px] font-bold text-slate-300 block font-pj">Student</span>
          <span className="text-[7px] text-slate-500 block mt-0.5">Taps UPI link</span>
          <span className="text-[8px] text-sky-400 font-bold mt-1 block">Zero Awkwardness</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Removes interpersonal tension</span>
        <span className="text-emerald-400 font-bold">100% Renewal Dignity</span>
      </div>
    </div>
  );
}

/* 5. THE SOLUTIONS ARTIFACTS */
export function PlanCreatorScreensArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
          Pass Builder UI Flow
        </span>
        <span className="text-[9px] text-slate-500 font-mono">&lt; 30 Seconds Total</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 items-center">
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[8px] font-mono text-brand-primary block font-bold">01. Pass Name</span>
          <div className="mt-1 bg-slate-800 px-1.5 py-1 rounded text-[9px] text-slate-200 font-medium">
            Morning Yoga
          </div>
          <span className="text-[7px] text-slate-500 block mt-1 font-inter">Title & Frequency</span>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg text-left">
          <span className="text-[8px] font-mono text-brand-primary block font-bold">02. Price & Cycle</span>
          <div className="mt-1 bg-slate-800 px-1.5 py-1 rounded text-[9px] text-emerald-400 font-bold">
            ₹2,400 / month
          </div>
          <span className="text-[7px] text-slate-500 block mt-1 font-inter">Auto-calculates UPI</span>
        </div>
        <div className="bg-slate-900 border border-brand-primary/40 p-2 rounded-lg text-left bg-brand-primary/5">
          <span className="text-[8px] font-mono text-emerald-400 block font-bold">03. 1-Tap Link</span>
          <div className="mt-1 bg-emerald-600 px-1.5 py-1 rounded text-[9px] text-white font-bold text-center">
            Share Pass Link
          </div>
          <span className="text-[7px] text-emerald-400 block mt-1 font-inter">Instant Deep Link</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Zero accounting jargon</span>
        <span className="text-emerald-400 font-bold">Shipped in FlutterFlow</span>
      </div>
    </div>
  );
}

export function WhatsAppInteractiveArtifact() {
  return (
    <div className="w-full h-full bg-[#0b141a] p-3 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-600 flex items-center justify-center text-[9px] text-white font-bold">
            H
          </div>
          <span className="text-[10px] font-bold text-slate-200 font-pj">Hosaksham Bot</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
        </div>
        <span className="text-[8px] text-slate-500 font-mono">10:45 AM</span>
      </div>
      <div className="bg-[#1f2c34] p-2.5 rounded-xl border border-white/5 max-w-[92%] my-auto">
        <p className="text-[9px] text-slate-200 font-inter leading-relaxed">
          Namaste Aditi! 🙏 Your <span className="font-bold text-emerald-400">Pranayama Morning Pass</span> with Priya renews on <span className="font-semibold text-white">Nov 1st</span>.
        </p>
        <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-bold text-white font-mono">Amount: ₹2,400</span>
          <div className="bg-emerald-600 px-2 py-0.5 rounded text-[8px] font-bold text-white font-mono flex items-center gap-1">
            <span>Pay via UPI</span>
            <Send className="w-2 h-2" />
          </div>
        </div>
      </div>
      <div className="mt-1 text-[8px] text-slate-400 font-mono flex items-center justify-between">
        <span>94% settlement in &lt;15 mins</span>
        <span className="text-emerald-400 font-bold">Polite & Direct</span>
      </div>
    </div>
  );
}

export function GreenLedgerArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          Single-View Inflow Ledger
        </span>
        <span className="text-[9px] text-slate-400 font-mono">Zero Debit Constraint</span>
      </div>
      <div className="space-y-1.5 flex-1 my-auto text-[9px] font-mono">
        <div className="flex items-center justify-between p-1.5 bg-slate-800/80 rounded border border-slate-700">
          <span className="text-slate-200 font-bold">34 Active Pass Holders</span>
          <span className="text-emerald-400 font-bold">+₹81,600 / mo</span>
        </div>
        <div className="flex items-center justify-between p-1.5 bg-emerald-950/40 rounded border border-emerald-500/20">
          <span className="text-emerald-300">Renews This Week (6)</span>
          <span className="text-emerald-400 font-bold">+₹14,400</span>
        </div>
        <div className="flex items-center justify-between p-1.5 bg-slate-800/50 rounded border border-slate-700">
          <span className="text-slate-400">Overdue Reminders Sent (1)</span>
          <span className="text-amber-400 font-bold">₹2,400 (Pending)</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>No tax fields, no expenses</span>
        <span className="text-emerald-400 font-bold">Pure Positive Inflow</span>
      </div>
    </div>
  );
}

/* 6. PROTOTYPE ARTIFACTS */
export function ScreenArchitectureArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider">
          Information Architecture
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Tap Depth: 2 Taps Max</span>
      </div>
      <div className="flex items-center justify-between gap-1.5 flex-1 my-auto text-center">
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg flex-1">
          <span className="text-[9px] font-bold text-white block font-pj">1. Inflow Hub</span>
          <span className="text-[7px] text-slate-400 block mt-0.5">Top-level dashboard</span>
        </div>
        <span className="text-slate-600 text-xs font-mono">→</span>
        <div className="bg-slate-900 border border-slate-800 p-2 rounded-lg flex-1">
          <span className="text-[9px] font-bold text-white block font-pj">2. Student Card</span>
          <span className="text-[7px] text-slate-400 block mt-0.5">Pass history & status</span>
        </div>
        <span className="text-slate-600 text-xs font-mono">→</span>
        <div className="bg-emerald-950/60 border border-emerald-500/40 p-2 rounded-lg flex-1">
          <span className="text-[9px] font-bold text-emerald-400 block font-pj">3. WhatsApp Nudge</span>
          <span className="text-[7px] text-emerald-300 block mt-0.5">Dispatches 1-tap link</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Zero sub-menus or nested sheets</span>
        <span className="text-sky-400 font-bold">Fast On-The-Go Use</span>
      </div>
    </div>
  );
}

export function MicroInteractionsArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          Micro-Interaction States
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Haptics & Transitions</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1 items-center text-center">
        <div className="p-2 rounded-lg bg-slate-800 border border-slate-700">
          <span className="text-[8px] font-mono text-slate-400 block mb-1">State: Default</span>
          <div className="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-[9px] text-white font-bold">
            Send Nudge
          </div>
          <span className="text-[7px] text-slate-500 block mt-1 font-inter">Resting</span>
        </div>
        <div className="p-2 rounded-lg bg-slate-800 border border-emerald-500/40">
          <span className="text-[8px] font-mono text-emerald-400 block mb-1">State: Tapped</span>
          <div className="px-2 py-1 bg-brand-primary rounded text-[9px] text-white font-bold transform scale-95 transition-transform">
            Sending...
          </div>
          <span className="text-[7px] text-emerald-400 block mt-1 font-inter">Light Haptic</span>
        </div>
        <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500">
          <span className="text-[8px] font-mono text-emerald-400 block mb-1">State: Confirmed</span>
          <div className="px-2 py-1 bg-emerald-600 rounded text-[9px] text-white font-bold flex items-center justify-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            <span>Nudged</span>
          </div>
          <span className="text-[7px] text-emerald-300 block mt-1 font-inter">Heavy Haptic</span>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Instant visual feedback</span>
        <span className="text-emerald-400 font-bold">High Tactile Confidence</span>
      </div>
    </div>
  );
}

/* 7. THE RESULT ARTIFACTS */
export function TimeSavingsChartArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          Weekly Admin Hours Comparison
        </span>
        <span className="text-[9px] text-slate-500 font-mono">100 Beta Creators</span>
      </div>
      <div className="space-y-3 flex-1 my-auto">
        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1">
            <span className="text-rose-400 font-bold">Before: Manual WhatsApp + Sheets</span>
            <span className="text-rose-400 font-bold">5.2 Hours / Week</span>
          </div>
          <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-rose-500 rounded-full w-[95%]" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] font-mono mb-1">
            <span className="text-emerald-400 font-bold">After: Hosaksham Auto-Engine</span>
            <span className="text-emerald-400 font-bold">12 Mins / Week</span>
          </div>
          <div className="w-full h-3.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full w-[8%]" />
          </div>
        </div>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>85% reclaimed time directly reinvested in teaching</span>
        <span className="text-emerald-400 font-bold">-4.8h Saved / wk</span>
      </div>
    </div>
  );
}

export function RenewalGrowthCurveArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-4 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
          On-Time Renewal Progression
        </span>
        <span className="text-[9px] text-slate-500 font-mono">90-Day Beta Cohort</span>
      </div>
      <div className="flex items-end justify-between gap-3 flex-1 px-3 py-1">
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-slate-400">72%</span>
          <div className="w-full bg-slate-700 rounded-t h-16" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Pre-Launch</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-emerald-400">86%</span>
          <div className="w-full bg-emerald-500/60 rounded-t h-20" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Month 01</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-emerald-400">94%</span>
          <div className="w-full bg-emerald-500/80 rounded-t h-24" />
          <span className="text-[8px] font-mono text-slate-400 mt-1">Month 02</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-[9px] font-mono text-emerald-300 font-bold">98%</span>
          <div className="w-full bg-emerald-500 rounded-t h-28" />
          <span className="text-[8px] font-mono text-emerald-400 font-bold mt-1">Month 03</span>
        </div>
      </div>
      <div className="mt-1 pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400 font-mono">
        <span>Almost zero forgotten drop-offs</span>
        <span className="text-emerald-400 font-bold">+26% Retention Lift</span>
      </div>
    </div>
  );
}

export function TestimonialCardsArtifact() {
  return (
    <div className="w-full h-full bg-[#111827] p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-gray-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-[#FDB241] font-bold uppercase tracking-wider">
          Creator Voice Testimonials
        </span>
        <span className="text-[9px] text-gray-500 font-mono">Verified Beta Tutors</span>
      </div>
      <div className="space-y-2 flex-1 my-auto text-[10px] font-inter">
        <div className="bg-gray-900/90 p-2.5 rounded-lg border border-gray-800 text-gray-200 leading-relaxed">
          "The first month Ho Saksham sent the WhatsApp reminder, every single one of my 24 students paid within 2 days. It removed all my anxiety."
          <span className="block text-[8px] text-gray-400 font-mono mt-1 font-bold">
            - Rohit Sen, Guitar Instructor (Pune)
          </span>
        </div>
      </div>
      <div className="mt-1 pt-1.5 border-t border-gray-800/80 flex items-center justify-between text-[9px] text-gray-400 font-mono">
        <span>Net Promoter Score: +74</span>
        <span className="text-[#FDB241] font-bold">High Emotional Relief</span>
      </div>
    </div>
  );
}

/* 8. THE LEARNINGS AND NEXT STEPS ARTIFACTS */
export function MultiCurrencyWireframeArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-cyan-400" />
          Hosaksham 2.0 • Cross-Border Spec
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Q1 Roadmap Wireframe</span>
      </div>
      <div className="bg-slate-800/90 p-2.5 rounded-xl border border-slate-700 flex-1 flex flex-col justify-between my-auto">
        <div className="flex items-center justify-between border-b border-slate-700/80 pb-1.5">
          <span className="text-[10px] font-bold text-white font-pj">International Yoga Pass</span>
          <span className="text-[9px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono font-bold">
            USD / GBP / EUR
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="bg-slate-900 p-2 rounded text-left">
            <span className="text-[8px] text-slate-400 font-mono block">Student Pays (London)</span>
            <span className="text-[11px] font-bold text-white font-mono block">£45.00</span>
          </div>
          <div className="bg-slate-900 p-2 rounded text-left">
            <span className="text-[8px] text-emerald-400 font-mono block">Teacher Receives (INR)</span>
            <span className="text-[11px] font-bold text-emerald-400 font-mono block">₹4,850 UPI</span>
          </div>
        </div>
        <span className="text-[8px] text-slate-400 font-inter">Automated Forex settlement via Stripe + UPI rails</span>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Opens global diaspora market</span>
        <span className="text-cyan-400 font-bold">3x Revenue Expansion</span>
      </div>
    </div>
  );
}

export function CalendarAttendanceArtifact() {
  return (
    <div className="w-full h-full bg-slate-950 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <Calendar className="w-3 h-3 text-emerald-400" />
          Google Calendar Sync Spec
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Q2 Roadmap Concept</span>
      </div>
      <div className="border border-slate-800 rounded-lg p-2 bg-slate-900/60 flex-1 flex flex-col justify-between my-auto">
        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 border-b border-slate-800 pb-1">
          <span>Weekly Class Roster</span>
          <span className="text-emerald-400">RSVP Attendance Auto-Deduct</span>
        </div>
        <div className="space-y-1 my-1 text-[8px] font-mono">
          <div className="flex justify-between items-center bg-slate-800 px-2 py-1 rounded">
            <span className="text-slate-200">Monday 07:00 AM Yoga</span>
            <span className="text-emerald-400 font-bold">18/20 Checked In (-1 Pass)</span>
          </div>
          <div className="flex justify-between items-center bg-slate-800 px-2 py-1 rounded">
            <span className="text-slate-200">Wednesday 07:00 AM Yoga</span>
            <span className="text-emerald-400 font-bold">19/20 Checked In (-1 Pass)</span>
          </div>
        </div>
        <span className="text-[8px] text-slate-500 font-inter">Drop-in passes auto-decrement without manual roster marking</span>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Zero manual attendance checking</span>
        <span className="text-emerald-400 font-bold">Seamless Integration</span>
      </div>
    </div>
  );
}

export function TaxStatementExportArtifact() {
  return (
    <div className="w-full h-full bg-slate-900 p-3.5 text-left flex flex-col justify-between select-none">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
        <span className="text-[10px] font-mono text-[#FDB241] font-bold uppercase tracking-wider flex items-center gap-1.5">
          <FileText className="w-3 h-3 text-[#FDB241]" />
          1-Click Tax & Fiscal Export
        </span>
        <span className="text-[9px] text-slate-500 font-mono">Q3 Financial Tooling</span>
      </div>
      <div className="bg-slate-800/80 p-2.5 rounded-lg border border-slate-700 flex-1 flex flex-col justify-between my-auto text-[9px]">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-1">
          <span className="font-bold text-white font-pj">Annual Earnings Certificate</span>
          <span className="font-mono text-emerald-400 font-bold">FY 2024-25</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5 my-1 text-center font-mono">
          <div className="bg-slate-900 p-1 rounded">
            <span className="text-[7px] text-slate-400 block">Gross Inflow</span>
            <span className="text-[9px] font-bold text-white block">₹9,79,200</span>
          </div>
          <div className="bg-slate-900 p-1 rounded">
            <span className="text-[7px] text-slate-400 block">Passes Issued</span>
            <span className="text-[9px] font-bold text-cyan-400 block">408</span>
          </div>
          <div className="bg-slate-900 p-1 rounded">
            <span className="text-[7px] text-slate-400 block">GST Exempt</span>
            <span className="text-[9px] font-bold text-emerald-400 block">Section 44ADA</span>
          </div>
        </div>
        <span className="text-[8px] text-slate-400 font-inter">Single-tap PDF export ready for CA submission</span>
      </div>
      <div className="mt-2 text-[9px] text-slate-400 font-mono flex items-center justify-between">
        <span>Freelancer financial legitimacy</span>
        <span className="text-[#FDB241] font-bold">Compliant & Clean</span>
      </div>
    </div>
  );
}
