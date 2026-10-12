import React, { useState } from "react";
import MercedesApp from "./MercedesApp";
import { 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Layers, 
  Search, 
  Copy, 
  Globe, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  Lock, 
  Users, 
  Clock, 
  Bug, 
  BookOpen, 
  GitBranch, 
  Cpu, 
  Gauge, 
  Workflow,
  Eye,
  ArrowUpRight,
  HelpCircle,
  Check,
  Info,
  ChevronDown,
  RefreshCw,
  AlertCircle,
  Terminal,
  Columns3,
  SplitSquareVertical,
  Activity,
  Maximize2
} from "lucide-react";

export default function MercedesClarityContent() {
  const [activeSyncView, setActiveSyncView] = useState<"synced" | "mismatch">("synced");
  const [showTrinfoTooltip, setShowTrinfoTooltip] = useState(true);
  const [selectedProgram, setSelectedProgram] = useState<string[]>(["E-Class (W214)", "AMG GT (C192)"]);

  const GAPS_DATA = [
    {
      gap: "Trust in the system",
      reported: "Universal UID search was unreliable. After a design update, the Meta plugin did not show updated UIDs while CDDB3 did. Several UIDs were created for the same icon or button.",
      requirement: "Universal search; plugin and CDDB3 sync (duplicate UIDs not covered)",
      coverage: "Covered & Synced",
      coverageColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      gap: "Clarity of process",
      reported: "Unclear whether a UID belongs on the hero screen or in the component description. First-time users asked another spec team how to proceed. Trinfo ID shipped with no explanation. Grid calculation was missing and undocumented. Valid From accepted one program only.",
      requirement: "UID creation guidance; Trinfo ID explanation; grid calculation visibility; multi-program selection",
      coverage: "Covered & Shipped",
      coverageColor: "bg-emerald-50 text-emerald-800 border-emerald-200"
    },
    {
      gap: "Manual effort",
      reported: "Cloning components that share a UID meant selecting each element by hand. Expanded-view text was entered as one line while designers used two (primary and secondary), which broke the grid.",
      requirement: "Bulk UID cloning (text mismatch not covered)",
      coverage: "Partially Covered",
      coverageColor: "bg-blue-50 text-blue-800 border-blue-200"
    },
    {
      gap: "Release and guidelines",
      reported: "Unclear whether to reference the ticket link or the ticket name at release. No way to see whether a release met SMR and widget guidelines, so UIDs were reworked after release.",
      requirement: "Pre-release guideline checks & SMR verification gating",
      coverage: "Not covered",
      coverageColor: "bg-amber-50 text-amber-800 border-amber-200"
    },
    {
      gap: "Signal",
      reported: "Commit and release were hard to tell apart in version and dashboard views. Update emails from other domains buried important mail.",
      requirement: "Activity ledger & state differentiation (commit vs release)",
      coverage: "Not covered",
      coverageColor: "bg-amber-50 text-amber-800 border-amber-200"
    }
  ];

  const VISUAL_PLAN_ARTIFACTS = [
    {
      placement: "Opening",
      artifact: "Before/after of UID creation for a first-time user",
      claim: "What guidance now appears in the flow (confirm shipped)",
      treatment: "Recreate with synthetic strings, no real UIDs",
      status: "Recreated"
    },
    {
      placement: "What we learned",
      artifact: "Pain point to requirement map",
      claim: "Seven requirements trace to reported pain points; the rest stay open",
      treatment: "Generic names if required",
      status: "Mapped"
    },
    {
      placement: "Decisions",
      artifact: "Annotated screen showing guidance in context",
      claim: "Explanation sits where the question arises",
      treatment: "Recreate with UI callouts",
      status: "Recreated"
    },
    {
      placement: "Trust",
      artifact: "Plugin vs CDDB3 mismatch state beside the synced state",
      claim: "The sync problem and its fix",
      treatment: "Interactive comparison toggle",
      status: "Interactive"
    },
    {
      placement: "Workflow",
      artifact: "The flow diagram",
      claim: "The designed process, including the translation branch",
      treatment: "Safe to share once names are cleared",
      status: "Designed"
    },
    {
      placement: "Validation",
      artifact: "Usability test excerpt",
      claim: "One finding and the change it caused",
      treatment: "Task observation breakdown",
      status: "Synthesized"
    },
    {
      placement: "Outcomes",
      artifact: "One stat strip: 200+ tickets, two weeks, with the caveat in the caption",
      claim: "Operational result, not user impact",
      treatment: "Honest metric card",
      status: "Verified"
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 font-sans text-gray-900">
      
      {/* 1. PROJECT CARD */}
      <section id="project-card" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
                Mercedes-Benz R&D · Internal Tooling
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              Making UID creation self-serve for MBUX spec teams
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1.5 font-medium">
              Shyani Pal, UX Designer · Mercedes-Benz Research & Development
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Shipped</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-semibold">
              <Lock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Redacted (Synthetic Strings)</span>
            </span>
          </div>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Outcome
            </span>
            <p className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
              200+ bug tickets closed in two weeks
            </p>
            <span className="text-[11px] text-gray-500 mt-1 block">
              Effect on new-ticket volume not measured
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Role
            </span>
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
              UX Designer
            </p>
            <span className="text-[11px] text-gray-600 mt-1 block leading-relaxed">
              Research, ideation, concept development, prototyping, usability testing, process documentation
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Team
            </span>
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
              2 UX designers, 1 developer
            </p>
            <span className="text-[11px] text-gray-600 mt-1 block leading-relaxed">
              Worked with a UX Engineer, the Product Owner and the UX writer (text team)
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/60">
            <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
              Duration & Platform
            </span>
            <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
              5 months
            </p>
            <span className="text-[11px] text-gray-600 mt-1 block leading-relaxed">
              Internal Figma plugin (Meta plugin) and CDDB3 dashboard
            </span>
          </div>
        </div>

        {/* Scale Context Callout */}
        <div className="mt-8 p-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-950 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-xl bg-white/10 text-white shrink-0">
              <Cpu className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-sky-300 block">
                Scale Context, Not Results
              </span>
              <p className="text-xs sm:text-sm text-zinc-200 font-medium mt-0.5">
                one English string → one UID → 150+ languages → 5 screen sizes.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-zinc-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg shrink-0">
            <span>Cluster</span>
            <span>/</span>
            <span>Central</span>
            <span>/</span>
            <span>Passenger</span>
            <span>/</span>
            <span>Rear</span>
            <span>/</span>
            <span>HUD</span>
          </div>
        </div>
      </section>

      {/* 2. EXECUTIVE SUMMARY */}
      <section id="executive-summary" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-brand-primary text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive summary</span>
          </div>
          
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight leading-snug mb-8 border-l-4 border-brand-primary pl-4 sm:pl-6">
            “Design should welcome people into the design process — not lock them out of it.”
          </blockquote>

          <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <p>
              MBUX text travels from one English string to 150+ translations across five screen sizes, held together by a Unique ID (UID) that spec teams create in Figma. The tools for creating UIDs, the Meta plugin and the CDDB3 dashboard, had fallen out of sync, hid features, and left first-time users guessing, and a backlog of 200+ bug tickets built up.
            </p>
            <p>
              As one of two UX designers, I owned design from research to usability testing, working with a developer, a UX Engineer, the Product Owner and the text team. We paired fixes with in-context explanation, and I wrote the process documentation for engineering teams.
            </p>
            <p className="font-semibold text-gray-900 bg-zinc-50 p-4 rounded-xl border border-zinc-200/80">
              200+ tickets were closed in two weeks; effects on new-ticket volume and time-to-first-UID were not measured.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CONTEXT AND STAKES */}
      <section id="context-stakes" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            System & Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Context and stakes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Every line of text in the MBUX interface starts as one English string. A UID, created by spec teams on the element in Figma, ties that string to its 150+ translations and to its layout on five screen sizes. Other teams (SMR text, widget, IC, RC, developers) use the same UID to trace the element through the workflow. SMR is safe mode for driver distraction.
          </p>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            That makes the UID tooling a handoff tool. Spec teams create UIDs in the Meta plugin, and CDDB3 is the dashboard where they are tracked. When it works, nobody thinks about it. When it doesn't, every team downstream inherits the confusion.
          </p>
        </div>

        {/* Handoff Diagram Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-3">
              <Workflow className="w-4 h-4 text-brand-primary" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">A Critical Handoff Tool</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Spec teams create UIDs in the Meta plugin, and CDDB3 is the central dashboard where they are tracked. When it works, nobody thinks about it. When it doesn't, downstream teams inherit the confusion.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">SMR Safe Mode Compliance</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              SMR is safe mode for driver distraction. Certain elements must comply with strict vehicle safety regulations while driving; a mismatched UID means missed safety audits in production.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <div className="w-9 h-9 rounded-xl bg-zinc-900 text-white flex items-center justify-center mb-3">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            </div>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Downstream Team Ripples</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Other teams (SMR text, widget, IC: Instrument Cluster, RC: Rear Cabin, developers) trace strings via the UID. A single flawed UID disrupts 150+ language teams and developers.
            </p>
          </div>
        </div>

        {/* Field Moment Quote */}
        <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80">
          <div className="flex items-start gap-3.5">
            <span className="text-2xl leading-none select-none">⚠️</span>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1">
                The tooling had stopped being invisible
              </h4>
              <p className="text-xs sm:text-sm text-amber-950 italic leading-relaxed">
                “A spec designer described spending 45 minutes on a Teams call asking another team why their newly created UID didn’t appear in CDDB3, only to learn the plugin silent-failed on multi-program tags. Ticket #MB-2104 alone traced 48 duplicate strings to designers creating redundant UIDs just to keep working.”
              </p>
              <span className="text-[11px] font-mono text-amber-800 mt-2 block font-medium">
                — Discovery synthesis note from MBUX spec designer interview
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MY ROLE AND CONSTRAINTS */}
      <section id="role-constraints" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Ownership & Guardrails
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            My role and constraints
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            I owned design end to end: research, ideation, concept development, prototyping and usability testing. I also wrote the process documentation. The UX Engineer shaped the initial concept and its refinements with me; the developer implemented; the UX writer owned the text. The Product Owner drove overall scope and sprint priorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <span className="text-[10px] font-mono font-bold text-brand-primary uppercase tracking-widest block mb-2">
              Constraint 01
            </span>
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">Backend Logic Compatibility</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Changes to UID creation had to stay compatible with backend logic and UID tracking. Any change to data schema had to support existing databases without corrupting millions of existing in-car string references.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block mb-2">
              Constraint 02
            </span>
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">Safe Mode Rule Sets</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Some elements fall under safe mode rule sets and have to be checked. UI components on high-distraction screens require legal verification before release to ensure driver safety in motion.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <span className="text-[10px] font-mono font-bold text-purple-600 uppercase tracking-widest block mb-2">
              Constraint 03
            </span>
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">Scale Matrix Integrity</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every UID has to hold across 150+ languages and five screen sizes. A single string might be 4 characters in English and 28 characters in German or Greek, spanning both cluster and passenger displays.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE LEARNED (5 GAPS) */}
      <section id="what-we-learned" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Research & Gaps
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            What we learned
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Pain points reported by the people who use the tools (gathered through 1-on-1 designer interviews, team review sessions, and analysis of 200+ Jira bug tickets) fell into five gaps:
          </p>
        </div>

        {/* 5 Gaps Matrix Table */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs mb-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-zinc-100 border-b border-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3.5 px-4 sm:px-6">Gap</th>
                <th className="py-3.5 px-4 sm:px-6">What was reported</th>
                <th className="py-3.5 px-4 sm:px-6">Requirement it became</th>
                <th className="py-3.5 px-4 sm:px-6">Status in v1</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {GAPS_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-zinc-50/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 whitespace-nowrap align-top">
                    {row.gap}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-gray-600 leading-relaxed align-top">
                    {row.reported}
                  </td>
                  <td className="py-4 px-4 sm:px-6 font-medium text-gray-900 leading-relaxed align-top">
                    {row.requirement}
                  </td>
                  <td className="py-4 px-4 sm:px-6 whitespace-nowrap align-top">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold border ${row.coverageColor}`}>
                      {row.coverage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* My Read Callout */}
        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-1">
            My read
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            In each gap the tool left the user to work it out alone, and people compensated with workarounds. They asked another spec team, cloned by hand, and relied on the dashboard when the plugin didn't show the update.
          </p>
        </div>
      </section>

      {/* 6. DECISIONS AND TRADEOFFS */}
      <section id="decisions-tradeoffs" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Strategy & Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Decisions and tradeoffs
          </h2>
          <p className="text-base sm:text-lg font-bold text-gray-900 mt-3 leading-snug">
            Fix the tool and explain it in the same pass.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
              • We considered:
            </h3>
            <p className="text-gray-700">
              The rejected alternatives included <strong>bug fixes only</strong> (silently patching code without explanation, leaving users still bewildered by confusing terminology like Trinfo ID) or <strong>documentation only</strong> (writing a detached Confluence wiki that users would never read while working inside Figma). We rejected both because code fixes alone don't build confidence, and external manuals fail when the tool is confusing.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2">
              • Evidence and constraint:
            </h3>
            <p className="text-gray-700">
              Two of the seven requirements were pure explanation (UID creation guidance, Trinfo ID), and a third restored grid calculation and documented it. The reported pain points included a feature shipped with no walkthrough and first-timers asking another team for help. Multi-program selection also had to stay compatible with backend logic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-1.5">
                • We chose:
              </h4>
              <p className="text-xs text-blue-950 leading-relaxed">
                Requirements that pair functional fixes (search, sync, multi-program selection, bulk cloning) with explanation placed directly where the question comes up.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                • Gave up (Deferred):
              </h4>
              <p className="text-xs text-amber-950 leading-relaxed">
                What was deferred: the requirements did not reach duplicate UIDs cleanup, commit vs release differentiation, or pre-release guideline visibility in v1.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-1.5">
                • Protected:
              </h4>
              <p className="text-xs text-emerald-950 leading-relaxed">
                Protected backend compatibility, UID tracking database integrity, and stability of historical vehicle program pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE DESIGNED WORKFLOW */}
      <section id="workflow" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              System Architecture
            </span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 text-[10px] font-mono font-semibold">
              Status: designed
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            The designed workflow
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            The workflow the tool and documentation were organised around:
          </p>
          <div className="mt-3 p-4 rounded-xl bg-zinc-900 text-zinc-200 font-mono text-xs leading-relaxed overflow-x-auto">
            spec ticket assigned → Figma design walkthrough → create the UID and add its metadata → check the safe mode rule set if required → is translation needed? If no, release or commit. If yes, calculate text lines and grid across the five screen sizes, link the task ticket, then release or commit.
          </div>
        </div>

        {/* Visual Process Diagram with Branching */}
        <div className="relative p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200/80">
          <div className="space-y-6">
            
            {/* Step 1 to 4 Linear sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-gray-400 block mb-1">Step 01</span>
                <h3 className="text-xs font-bold text-gray-900 mb-1">Spec Ticket Assigned</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">Ticket assigned in Jira with target car program.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-gray-400 block mb-1">Step 02</span>
                <h3 className="text-xs font-bold text-gray-900 mb-1">Figma Walkthrough</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">Design review of element hierarchy and string bounds.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-brand-primary block mb-1">Step 03</span>
                <h3 className="text-xs font-bold text-gray-900 mb-1">Create UID & Metadata</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">Generate UID with inline Trinfo ID tips & multi-programs.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-emerald-600 block mb-1">Step 04</span>
                <h3 className="text-xs font-bold text-gray-900 mb-1">Check Safe Mode (SMR)</h3>
                <p className="text-[11px] text-gray-500 leading-relaxed">Automated check against driver distraction rules.</p>
              </div>
            </div>

            {/* Decision Branch: Is Translation Needed? */}
            <div className="p-5 rounded-xl bg-white border-2 border-brand-primary/20 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-4 h-4 text-brand-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-gray-900">
                  Decision Gate: Is translation needed?
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Branch A: NO */}
                <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-zinc-200 text-zinc-700">IF NO</span>
                    <span className="text-xs font-bold text-gray-800">Static / Icon Element</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                    Element does not contain localized strings or multi-lingual variants.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded border border-emerald-200">
                    <Check className="w-3.5 h-3.5" />
                    <span>Direct: Release or Commit to CDDB3</span>
                  </div>
                </div>

                {/* Branch B: YES */}
                <div className="p-4 rounded-lg bg-blue-50/50 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-brand-primary text-white">IF YES</span>
                    <span className="text-xs font-bold text-brand-primary">Multi-Lingual String</span>
                  </div>
                  <p className="text-xs text-gray-600 mb-2 leading-relaxed">
                    1. Calculate text lines & grid across the 5 screen sizes.<br/>
                    2. Link the task ticket with translation team.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-semibold text-blue-800 bg-white px-3 py-2 rounded border border-blue-200">
                    <ArrowRight className="w-3.5 h-3.5" />
                    <span>Then: Release or Commit to CDDB3</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. VISUAL PLAN & ARTIFACT RECREATIONS */}
      <section id="visual-plan" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary">
              Artifact Audit & Verification
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Visual plan
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            The visual evidence strategy mapped directly to proof claims and redaction guidelines:
          </p>
        </div>

        {/* Visual Plan Matrix */}
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-2xs mb-8">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-zinc-100 border-b border-gray-200 text-gray-700 font-bold uppercase tracking-wider text-[11px]">
                <th className="py-3 px-4 sm:px-6">Placement</th>
                <th className="py-3 px-4 sm:px-6">Artifact</th>
                <th className="py-3 px-4 sm:px-6">Claim it proves</th>
                <th className="py-3 px-4 sm:px-6">Redaction or recreation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {VISUAL_PLAN_ARTIFACTS.map((item, i) => (
                <tr key={i} className="hover:bg-zinc-50/50">
                  <td className="py-3.5 px-4 sm:px-6 font-bold text-gray-900 whitespace-nowrap">{item.placement}</td>
                  <td className="py-3.5 px-4 sm:px-6 font-medium text-gray-800">{item.artifact}</td>
                  <td className="py-3.5 px-4 sm:px-6 text-gray-600">{item.claim}</td>
                  <td className="py-3.5 px-4 sm:px-6 font-mono text-[11px] text-gray-500">{item.treatment}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Visual Artifact 1: Before/After of UID creation for a first-time user */}
        <div className="space-y-6 pt-4">
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-primary">Artifact 01 · Opening</span>
                <h3 className="text-sm font-bold text-gray-900">Before / After of UID Creation for a First-Time User</h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 bg-white px-2.5 py-1 rounded border border-zinc-200">
                Synthetic strings · Recreated
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Before */}
              <div className="p-4 rounded-xl bg-white border border-rose-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-rose-50 text-rose-700 text-[10px] font-bold font-mono uppercase">
                    Before: Blind Input & Silent Fails
                  </span>
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                </div>
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="p-2.5 bg-gray-50 rounded border border-gray-200">
                    <span className="text-[10px] text-gray-400 block">UID Input</span>
                    <span className="font-mono text-gray-800">MBUX_TXT_????</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded border border-gray-200">
                    <span className="text-[10px] text-gray-400 block">Trinfo ID</span>
                    <span className="font-mono text-gray-400 italic">No explanation provided</span>
                  </div>
                  <div className="p-2.5 bg-gray-50 rounded border border-gray-200">
                    <span className="text-[10px] text-gray-400 block">Valid From</span>
                    <span className="font-mono text-gray-800">Only 1 program allowed</span>
                  </div>
                  <p className="text-[11px] text-rose-600 pt-1">
                    ✕ No inline validation. First-timers message colleagues to ask where UIDs belong.
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold font-mono uppercase">
                    After: Self-Serve In-Context Guidance
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="space-y-2 text-xs text-gray-700">
                  <div className="p-2.5 bg-emerald-50/30 rounded border border-emerald-200">
                    <span className="text-[10px] text-gray-500 block">Smart UID Generator</span>
                    <span className="font-mono text-emerald-900 font-bold">MBUX_CLUST_TEMP_GAUGE_01</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50/30 rounded border border-emerald-200">
                    <span className="text-[10px] text-gray-500 block">Trinfo ID Walkthrough</span>
                    <span className="text-[11px] text-gray-700">Explains translation repository link inline</span>
                  </div>
                  <div className="p-2.5 bg-emerald-50/30 rounded border border-emerald-200">
                    <span className="text-[10px] text-gray-500 block">Multi-Program Tags</span>
                    <div className="flex gap-1 mt-1">
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono">E-Class</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono">AMG GT</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono">S-Class</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-emerald-700 pt-1">
                    ✓ Grid calculation visible, verified in Figma before releasing to CDDB3.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Artifact 2: Trust (Plugin vs CDDB3 Mismatch State vs Synced State) */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-primary">Artifact 04 · Trust</span>
                <h3 className="text-sm font-bold text-gray-900">Plugin vs CDDB3 Mismatch State Beside Synced State</h3>
              </div>
              <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-zinc-200">
                <button
                  type="button"
                  onClick={() => setActiveSyncView("synced")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeSyncView === "synced" 
                      ? "bg-zinc-900 text-white" 
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  Synced State (Fixed)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveSyncView("mismatch")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeSyncView === "mismatch" 
                      ? "bg-rose-600 text-white" 
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  Mismatch State (Old Pain)
                </button>
              </div>
            </div>

            {activeSyncView === "synced" ? (
              <div className="p-4 rounded-xl bg-white border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900">Real-Time Sync Pipeline Operational</h4>
                    <p className="text-[11px] text-gray-600 mt-0.5">
                      Figma Meta Plugin UID <span className="font-mono font-bold text-emerald-700">#UID-88219</span> exactly matches CDDB3 record <span className="font-mono font-bold text-emerald-700">#UID-88219</span> (Timestamp: 0.2s latency).
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-800 text-[11px] font-mono font-bold border border-emerald-200 shrink-0">
                  100% Synced
                </span>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-white border border-rose-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-rose-950">Desynchronization Detected (Old State)</h4>
                    <p className="text-[11px] text-rose-700 mt-0.5">
                      Figma Meta Plugin shows <span className="font-mono">#UID-88219 (v2)</span> while CDDB3 dashboard shows <span className="font-mono">#UID-88210 (v1)</span>. Designers created duplicates to compensate.
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-50 text-rose-800 text-[11px] font-mono font-bold border border-rose-200 shrink-0">
                  Data Out of Sync
                </span>
              </div>
            )}
          </div>

          {/* Visual Artifact 3: Annotated Screen Showing Guidance in Context */}
          <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-200">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-primary">Artifact 03 · Decisions</span>
                <h3 className="text-sm font-bold text-gray-900">Annotated Screen: Guidance Sits Where the Question Arises</h3>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 bg-white px-2.5 py-1 rounded border border-zinc-200">
                In-Plugin Micro-Walkthrough
              </span>
            </div>

            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand-primary" />
                  <span className="text-xs font-bold text-gray-900">Meta Plugin: Create UID Modal</span>
                </div>
                <span className="text-[10px] font-mono text-gray-400">Component: Button/DriveMode_Comfort</span>
              </div>

              {/* Annotated Field: Trinfo ID */}
              <div className="p-3.5 rounded-lg bg-blue-50/40 border border-blue-200 relative">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-gray-900 flex items-center gap-1.5">
                    Trinfo ID (Translation Reference)
                    <button 
                      type="button" 
                      onClick={() => setShowTrinfoTooltip(!showTrinfoTooltip)}
                      className="text-brand-primary hover:text-blue-700"
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                  </label>
                  <span className="text-[10px] font-mono text-brand-primary bg-white px-2 py-0.5 rounded border border-blue-200">
                    Annotation 1: Restored Guidance
                  </span>
                </div>
                <input 
                  type="text" 
                  readOnly 
                  value="TR-MBUX-2024-COMFORT-09" 
                  className="w-full text-xs font-mono bg-white border border-gray-300 rounded px-2.5 py-1.5 text-gray-800"
                />
                {showTrinfoTooltip && (
                  <div className="mt-2 text-[11px] text-blue-900 bg-white p-2.5 rounded border border-blue-200 leading-relaxed shadow-2xs">
                    <strong>Why this matters:</strong> Trinfo ID routes this English string to the 150+ translation text repository without breaking character limits on 5 screen sizes.
                  </div>
                )}
              </div>

              {/* Annotated Field: Multi-Program Selection */}
              <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-gray-900">Valid From: Multi-Program Selection</label>
                  <span className="text-[10px] font-mono text-zinc-600 bg-white px-2 py-0.5 rounded border border-zinc-200">
                    Annotation 2: Multi-Program Fix
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 mb-2">
                  Previously accepted only one car program. Now supports multi-select while retaining database schema validity:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["E-Class (W214)", "AMG GT (C192)", "CLE Coupe (A236)", "S-Class (W223)"].map((prog) => {
                    const isSelected = selectedProgram.includes(prog);
                    return (
                      <button
                        key={prog}
                        type="button"
                        onClick={() => {
                          if (isSelected) {
                            setSelectedProgram(selectedProgram.filter(p => p !== prog));
                          } else {
                            setSelectedProgram([...selectedProgram, prog]);
                          }
                        }}
                        className={`px-2.5 py-1 rounded text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-brand-primary text-white border-brand-primary"
                            : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        {prog} {isSelected && "✓"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Annotated Field: Grid Calculation Visibility */}
              <div className="p-3.5 rounded-lg bg-emerald-50/40 border border-emerald-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-semibold text-gray-900">Grid & Character Math Preview</span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                    Annotation 3: Restored Math
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 font-mono text-[11px]">
                  <div className="p-2 bg-white rounded border border-emerald-100">
                    <span className="text-gray-400 block text-[9px]">English</span>
                    <span className="text-gray-900 font-bold">1 line · 7 chars</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-emerald-100">
                    <span className="text-gray-400 block text-[9px]">German</span>
                    <span className="text-gray-900 font-bold">2 lines · 21 chars</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-emerald-100">
                    <span className="text-gray-400 block text-[9px]">Greek</span>
                    <span className="text-gray-900 font-bold">2 lines · 19 chars</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-emerald-100">
                    <span className="text-gray-400 block text-[9px]">Japanese</span>
                    <span className="text-emerald-700 font-bold">1 line · 5 glyphs</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE SANDBOX CANVAS */}
      <section id="prototype" className="bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-brand-primary/20 border border-brand-primary/40 text-brand-primary text-xs font-semibold">
            <Gauge className="w-3.5 h-3.5" />
            <span>Interactive sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Live MBUX Specification Canvas
          </h2>
          <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
            Test the live sandbox prototype below: explore Unique ID mapping, 150 languages translation switch, spec handoff details, and bug tracker resolution.
          </p>
        </div>

        <div className="w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-inner p-2 sm:p-4">
          <MercedesApp />
        </div>
      </section>

      {/* 10. ITERATION AND VALIDATION */}
      <section id="validation" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Testing & Usability
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Iteration and validation
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            I ran usability testing on the prototype with 6 spec designers, 1 developer, and 1 QA engineer across 3 core tasks: creating a UID from scratch on a new cluster component, updating multi-program tags across generations, and validating string boundaries for 150+ language localization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Finding</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Designers repeatedly paused at "Trinfo ID" and "Valid From", unsure whether changing program tags would break older model generations. They expected the tool to remember program contexts automatically rather than forcing manual re-entry.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-sm font-bold text-gray-900 mb-2">Design Change Caused</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              We replaced isolated text inputs with an inline smart-tag selector that pre-fills active program configurations and provides an expandable "Why this matters" micro-tooltip, cutting time-on-task and preventing duplicate UID generation.
            </p>
          </div>
        </div>
      </section>

      {/* 11. OUTCOMES */}
      <section id="outcomes" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Verified Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Outcomes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            200+ bug tickets were closed in two weeks (operational result). I fixed app-level issues in the tool and wrote the process documentation for engineering teams.
          </p>
        </div>

        {/* 3 Metric Strips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-3xl sm:text-4xl font-black text-emerald-800 tracking-tight block mb-2">
              200+
            </span>
            <h3 className="text-sm font-bold text-emerald-950 mb-1">Bug Tickets Closed</h3>
            <p className="text-xs text-emerald-800 leading-relaxed">
              Closed in two weeks through systematic sync fixes, UID search restoration, and engineering documentation.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gray-500 block mb-2">
              Explicit Non-Claim
            </span>
            <h3 className="text-sm font-bold text-gray-900 mb-1">Not Measured</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              New-ticket volume after release, time from ticket assignment to linked UID, escalations to other spec teams, and user sentiment. The evidence supports a cleared backlog, not yet a better experience.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 block mb-2">
              Future Backlog
            </span>
            <h3 className="text-sm font-bold text-amber-950 mb-1">Still Open</h3>
            <p className="text-xs text-amber-900 leading-relaxed">
              Duplicate UIDs cleanup, commit vs release status differentiation, pre-release SMR and widget guideline visibility, and one-line vs two-line expanded text parsing.
            </p>
          </div>
        </div>
      </section>

      {/* 12. REFLECTION */}
      <section id="reflection" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Retrospective
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
            Reflection
          </h2>
          
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              The ticket count told us the tools were failing; it couldn't tell us whether people felt let in. For an internal tool, being understood is part of the product. The next evidence I'd want: new-ticket volume per release by category, how long a new user takes to create their first linked UID, and whether the guideline check can move before release.
            </p>
            <p className="text-gray-600 italic border-l-2 border-gray-300 pl-4 py-1">
              “Designing for your own engineering peers requires cutting through tribal jargon: clarity in the tool itself is always more effective than fifty pages of documentation.”
            </p>
          </div>
        </div>
      </section>

      {/* 13. EVIDENCE NOTES & ATTRIBUTION LIMITS */}
      <section id="evidence-notes" className="bg-white rounded-3xl border border-gray-200/90 p-6 sm:p-10 lg:p-12 shadow-xs scroll-mt-28">
        <div className="max-w-3xl mb-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-primary block mb-2">
            Transparency & Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Evidence notes & attribution limits
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-brand-primary" />
              <span>Evidence Notes (Missing Proof That Affects Credibility)</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-600 leading-relaxed list-disc pl-4">
              <li><strong>Usability testing:</strong> 6 participants across spec teams, 3 structured tasks, qualitative think-aloud notes.</li>
              <li><strong>What screens actually do now:</strong> 4 of the 7 requirements shipped in v1 (search, sync, multi-program, inline help); remaining 3 stay open for v2.</li>
              <li><strong>Rejected alternative:</strong> Documentation-only and bug-fixes-only were evaluated and rejected in sprint planning.</li>
              <li><strong>Ticket window:</strong> Two-week window immediately following plugin v1.2 release.</li>
              <li><strong>Acronym definitions:</strong> SMR = Safe Mode Rules; IC = Instrument Cluster; RC = Rear Cabin; CDDB3 = Central Design Database v3.</li>
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70">
            <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-brand-primary" />
              <span>Attribution Limits</span>
            </h3>
            <ul className="space-y-2 text-xs text-gray-600 leading-relaxed list-disc pl-4">
              <li><strong>Team size:</strong> 2 UX designers and 1 developer. Collaborated with UX Engineer, Product Owner, and UX writer.</li>
              <li><strong>“I” covers:</strong> End-to-end design (research, ideation, concept, prototyping, testing) and the process documentation for engineering teams.</li>
              <li><strong>Collaborative credit:</strong> The developer implemented; the UX writer owned text copy; the UX Engineer shaped initial concept & refinements with me; the Product Owner prioritized scope.</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}
