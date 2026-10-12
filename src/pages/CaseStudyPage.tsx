import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Share2, 
  Clock, 
  Tag, 
  ChevronRight, 
  Sparkles, 
  ArrowUpRight, 
  Layout, 
  Zap, 
  CheckCircle2, 
  Image as ImageIcon, 
  Users, 
  FileText, 
  Check, 
  ShieldCheck, 
  TrendingUp, 
  AlertCircle, 
  Layers,
  Smartphone,
  Calendar,
  CreditCard,
  MessageSquare
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import CaseStudyNav from "../components/CaseStudyNav";
import Footer from "../components/Footer";
import HoshakshamApp from "../components/HoshakshamApp";
import HoshakshamClarityContent from "../components/HoshakshamClarityContent";
import FyleWebApp from "../components/FyleWebApp";
import FyleReimbursementApp from "../components/FyleReimbursementApp";
import FyleCampaignHero from "../components/FyleCampaignHero";
import MercedesApp from "../components/MercedesApp";
import EditableImage from "../components/EditableImage";
import { CinematicHero } from "../components/ui/cinematic-hero";

interface Section {
  id: string;
  label: string;
}

interface CaseStudy {
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  year: string;
  heroImage?: string;
  heroComponent?: React.ReactNode;
  keyInsight: string;
  externalLink?: string;
  sections: Section[];
  content: React.ReactNode;
}

interface StepItem {
  number: string;
  title: string;
  desc: string;
}

interface CaseStudyStepSectionProps {
  id: string;
  badge?: string;
  title: string;
  description: React.ReactNode;
  steps: StepItem[];
  imagePlaceholder: {
    title: string;
    subtitle: string;
    aspectRatio?: string;
    illustration?: React.ReactNode;
  };
}

function CaseStudyStepSection({
  id,
  badge,
  title,
  description,
  steps,
  imagePlaceholder
}: CaseStudyStepSectionProps) {
  return (
    <section id={id} className="py-10 bg-white sm:py-16 lg:py-24 rounded-3xl md:rounded-[40px] border border-gray-200/90 shadow-xs mb-14 scroll-mt-28 overflow-hidden text-left">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <span className="px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-primary bg-brand-primary/10 rounded-full inline-block mb-4 border border-brand-primary/20">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="max-w-2xl mx-auto mt-4 text-base sm:text-lg leading-relaxed text-gray-600">
            {description}
          </div>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28 pointer-events-none">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow-sm hover:border-black hover:scale-105 transition-all">
                  <span className="text-xl font-semibold text-gray-700">{step.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Placeholder Component */}
        <div className="mt-14 lg:mt-20 max-w-5xl mx-auto">
          <div className="rounded-2xl md:rounded-3xl border border-gray-200 bg-gray-50/70 p-4 sm:p-6 shadow-xs overflow-hidden">
            {/* Header of the image placeholder */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 sm:pb-4 sm:mb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-800">
                  {imagePlaceholder.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-medium text-gray-500 uppercase tracking-widest bg-white px-2.5 py-1 rounded-md border border-gray-200">
                  {imagePlaceholder.subtitle}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold text-gray-600 bg-gray-200/80 px-2 py-0.5 rounded">
                  <ImageIcon className="w-3 h-3 text-gray-500" />
                  Image Placeholder
                </span>
              </div>
            </div>

            {/* Visual illustration frame */}
            <div className={`relative w-full rounded-xl md:rounded-2xl overflow-hidden border border-gray-200/90 bg-white shadow-inner ${imagePlaceholder.aspectRatio || "aspect-video"}`}>
              {imagePlaceholder.illustration}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  hoshaksham: {
    title: "Hoshaksham",
    subtitle: "Making admin feel like money",
    category: "SaaS · Service Management · 0 → 1",
    duration: "3 Months",
    year: "2024",
    externalLink: "https://spfolio.framer.ai/hosaksham-case-study",
    heroComponent: (
      <div className="w-full h-full bg-zinc-50 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-4xl aspect-video bg-white rounded-[48px] shadow-2xl border border-zinc-100 overflow-hidden relative">
          <HoshakshamApp />
        </div>
      </div>
    ),
    keyInsight: "Priya doesn't think of herself as running a business. She's a yoga teacher.",
    sections: [
      { id: "context", label: "The Context" },
      { id: "problem", label: "The Problem" },
      { id: "approach", label: "The Approach" },
      { id: "findings", label: "The Finding" },
      { id: "solutions", label: "The Solutions" },
      { id: "results", label: "The Result" },
      { id: "learnings", label: "The Learning & Next Steps" },
    ],
    content: (
      <div className="font-sans space-y-4">
        {/* 1. The Context */}
        <CaseStudyStepSection
          id="context"
          badge="Case Study • 0 → 1 Product Design"
          title="The context"
          description={
            <div className="space-y-3 font-normal text-left sm:text-center">
              <p className="text-gray-700">
                I worked at Hoskasham an early-stage startup focused on products that help independent service providers. Collaborated with 2 co-founders and 2 developer interns.
              </p>
              <p className="font-semibold text-gray-900">
                I was responsible for the end-to-end design process, including UX research, concept development, prototyping, usability testing, and building the design system from the ground up.
              </p>
            </div>
          }
          steps={[
            {
              number: "1",
              title: "Early-Stage 0→1 Mission",
              desc: "Building a dedicated platform for yoga instructors, tutors, and fitness coaches who love their craft but dread recurring billing admin."
            },
            {
              number: "2",
              title: "Cross-Functional Collaboration",
              desc: "Partnered closely with 2 co-founders on business goals and directly mentored 2 developer interns with clear design tokens and interaction specs."
            },
            {
              number: "3",
              title: "End-to-End Ownership",
              desc: "Drove foundational UX research, rapid wireframing, high-fidelity prototypes, usability validation, and the complete design system from day one."
            }
          ]}
          imagePlaceholder={{
            title: "Startup Context & Team Ecosystem",
            subtitle: "Team Architecture // 0→1 Scope",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-zinc-50 via-white to-zinc-100 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary font-black text-sm">
                      H
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Hoshaksham Team Structure & Project Scope</h4>
                      <p className="text-xs text-gray-500">Cross-functional team alignment for 0→1 launch</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-50 text-green-700 border border-green-200 text-[10px] font-bold uppercase tracking-wider rounded-full">
                    Active Sprint Cycle
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2 text-brand-primary">
                      <Users className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">2 Co-Founders</span>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Product Vision & Go-to-Market Strategy</p>
                    <p className="text-[11px] text-gray-500 mt-1">Weekly roadmap prioritization & creator user feedback loops.</p>
                  </div>

                  <div className="bg-brand-primary/5 p-4 rounded-xl border border-brand-primary/30 shadow-xs relative">
                    <div className="flex items-center gap-2 mb-2 text-brand-primary">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-xs font-black uppercase tracking-wider">Lead Product Designer (Me)</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-900">End-to-End UX & Design System</p>
                    <p className="text-[11px] text-gray-600 mt-1">User research, concept wireframes, interactive prototypes, and developer token handoff.</p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2 text-gray-700">
                      <Layers className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">2 Developer Interns</span>
                    </div>
                    <p className="text-xs font-medium text-gray-700">Frontend & Engineering Execution</p>
                    <p className="text-[11px] text-gray-500 mt-1">Pair programming, design token consumption, and component implementation.</p>
                  </div>
                </div>

                <div className="bg-gray-100/80 rounded-xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                    <span>Target Persona: <strong>Priya (Independent Yoga Instructor, 45 subscribers)</strong></span>
                  </div>
                  <span className="font-mono text-[11px] text-gray-500">Visual Artifact // Context Mapping</span>
                </div>
              </div>
            )
          }}
        />

        {/* 2. The Problem */}
        <CaseStudyStepSection
          id="problem"
          badge="Problem Space & Discovery"
          title="The problem being solved, and why was it important"
          description="Independent service providers were losing 5+ hours every week juggling WhatsApp chat receipts and spreadsheets. Chasing clients for renewal was emotionally uncomfortable and led to massive revenue leakage."
          steps={[
            {
              number: "1",
              title: "Fragmented Record Chaos",
              desc: "Payment confirmations scattered across bank SMS, WhatsApp screenshots, and static spreadsheets resulted in constant confusion and lost records."
            },
            {
              number: "2",
              title: "The Emotional Chasing Barrier",
              desc: "Solo practitioners felt uncomfortable directly asking clients for money, often postponing follow-ups and feeling professional embarrassment."
            },
            {
              number: "3",
              title: "Silent Revenue Leakage",
              desc: "Without automated renewals or proactive alerts, 20–30% of subscriptions quietly expired each month, directly threatening creators' livelihood."
            }
          ]}
          imagePlaceholder={{
            title: "Problem Space Mapping: The Manual Admin Loop vs Creator Anxiety",
            subtitle: "Friction Analysis // Problem Space",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-rose-50/50 via-white to-amber-50/40 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-rose-500" />
                    <h4 className="text-sm font-bold text-gray-900">The Broken Manual Administrative Cycle</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    25% Avg. Revenue Loss
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">Point 1</span>
                    <h5 className="text-xs font-bold text-gray-900">Untracked WhatsApp Inboxes</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      "I have 30 chats with payment screenshots mixed in with family messages. Checking if everyone paid takes my entire Sunday."
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">Point 2</span>
                    <h5 className="text-xs font-bold text-gray-900">Social Awkwardness</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      "Asking students for fees feels greedy. I hesitate for weeks, and then they assume the session was free or forget completely."
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-rose-100 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block mb-1">Point 3</span>
                    <h5 className="text-xs font-bold text-gray-900">Spreadsheet Drop-off</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      "I try to keep an Excel sheet, but I forget to update rows after busy classes. One day I realized 6 students hadn't paid for 2 months."
                    </p>
                  </div>
                </div>

                <div className="bg-rose-50/70 border border-rose-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs text-rose-900">
                  <span className="font-medium">Why it mattered: Financial anxiety was destroying instructors' love for teaching.</span>
                  <span className="font-mono text-[11px] text-rose-600 font-bold hidden sm:inline">5.2 Hours Wasted / Week</span>
                </div>
              </div>
            )
          }}
        />

        {/* 3. The Approach */}
        <CaseStudyStepSection
          id="approach"
          badge="Design Methodology"
          title="The approach I took"
          description="To move fast without losing design depth, I implemented a lean, user-centered 0→1 framework grounded in rapid field discovery, co-design, and tight engineering loops."
          steps={[
            {
              number: "1",
              title: "In-Context Discovery",
              desc: "Interviewed and shadowed independent instructors during live sessions to observe real friction points around payments, reminders, and client tracking."
            },
            {
              number: "2",
              title: "Co-Design & Rapid Wireframing",
              desc: "Mapped friction-free user flows with co-founders and paper sketched simplified single-tap interactions before committing to high fidelity."
            },
            {
              number: "3",
              title: "Design System & Sprint Handoff",
              desc: "Built a modular design system in Figma with reusable tokens, working hands-on with developer interns to ensure clean, bug-free implementation."
            }
          ]}
          imagePlaceholder={{
            title: "Design Process & Iterative Wireframe Evolution",
            subtitle: "UX Pipeline // Discovery to Spec",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-blue-50/50 via-white to-zinc-50 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-900">The 0→1 Product Design Framework</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    3-Week Sprint Cadence
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-6">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-mono font-bold text-brand-primary uppercase block mb-1">Phase 1</span>
                    <h5 className="text-xs font-bold text-gray-900 mb-1">Field Shadowing</h5>
                    <p className="text-[11px] text-gray-500">Observing 8 instructors across yoga, piano, and fitness classes.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-mono font-bold text-brand-primary uppercase block mb-1">Phase 2</span>
                    <h5 className="text-xs font-bold text-gray-900 mb-1">Paper Co-Design</h5>
                    <p className="text-[11px] text-gray-500">Low-fi sketches to strip all unnecessary enterprise fields.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-mono font-bold text-brand-primary uppercase block mb-1">Phase 3</span>
                    <h5 className="text-xs font-bold text-gray-900 mb-1">Design Tokens</h5>
                    <p className="text-[11px] text-gray-500">Building atomic tokens for typography, forms, and status tags.</p>
                  </div>
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-mono font-bold text-brand-primary uppercase block mb-1">Phase 4</span>
                    <h5 className="text-xs font-bold text-gray-900 mb-1">Dev Handoff</h5>
                    <p className="text-[11px] text-gray-500">Interactive Figma prototypes + daily intern pairing sessions.</p>
                  </div>
                </div>

                <div className="bg-blue-50/70 border border-blue-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs text-blue-950">
                  <span className="font-medium">Core Principle: Radical simplification — eliminate any input field that doesn't save creator time.</span>
                  <span className="font-mono text-[11px] text-blue-700 font-bold hidden sm:inline">Zero-Friction Target</span>
                </div>
              </div>
            )
          }}
        />

        {/* 4. The Finding */}
        <CaseStudyStepSection
          id="findings"
          badge="User Research Synthesis"
          title="The finding"
          description="Our qualitative research and usability interviews revealed three critical insights that completely reshaped our product direction and architecture."
          steps={[
            {
              number: "1",
              title: "Enterprise Tools Overwhelm",
              desc: "Mainstream billing tools (Zoho, QuickBooks) induced paralysis with tax grids and nested menus. Creators craved an intuitive scalpel, not a complex database."
            },
            {
              number: "2",
              title: "WhatsApp Is the Living Room",
              desc: "Clients ignored email invoices. Delivering payment links and receipts directly into WhatsApp achieved near 100% open rates and instant completion."
            },
            {
              number: "3",
              title: "Urge to Close Open Loops",
              desc: "Visualizing pending renewals in a clean, glanceable list activated natural task completion instincts without creating guilt or anxiety."
            }
          ]}
          imagePlaceholder={{
            title: "User Research Synthesis & Behavioral Insights Grid",
            subtitle: "Field Insights // Qualitative Synthesis",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-amber-50/50 via-white to-orange-50/30 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2 text-amber-600">
                    <Sparkles className="w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-900">Key Qualitative Findings Matrix</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    8 Shadowing Sessions
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2 text-rose-600">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Finding 01</span>
                    </div>
                    <h5 className="text-xs font-bold text-gray-900">Email Invoicing Is Dead</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      "I sent PDF invoices via email. Nobody opened them for weeks. Once I sent a link on WhatsApp, students paid in 90 seconds."
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2 text-brand-primary">
                      <span className="w-2 h-2 rounded-full bg-brand-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Finding 02</span>
                    </div>
                    <h5 className="text-xs font-bold text-gray-900">Automated Polite Shield</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      Instructors feel dignified when the system sends reminders on their behalf: "The app reminds them, so it doesn't feel like I'm bugging them."
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <div className="flex items-center gap-2 mb-2 text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">Finding 03</span>
                    </div>
                    <h5 className="text-xs font-bold text-gray-900">Instant UPI 1-Tap Pay</h5>
                    <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
                      Having to enter bank account details or IFSC codes kills completion rates. 1-tap UPI deep links reduced abandonment to nearly 0%.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs text-amber-950">
                  <span className="font-medium">Strategic takeaway: Position Hosaksham as an invisible, polite operational assistant.</span>
                  <span className="font-mono text-[11px] text-amber-700 font-bold hidden sm:inline">100% Mobile First</span>
                </div>
              </div>
            )
          }}
        />

        {/* 5. The Solutions */}
        <CaseStudyStepSection
          id="solutions"
          badge="Product Execution"
          title="the solutions"
          description="We built a lightweight, mobile-first subscription management platform centered on three radical interaction principles."
          steps={[
            {
              number: "1",
              title: "30-Second Plan Creation",
              desc: "Creators configure customized subscription packages with UPI auto-debit, QR codes, and cards in less than 30 seconds."
            },
            {
              number: "2",
              title: "Automated Gentle Nudges",
              desc: "The platform automatically delivers polite, pre-formatted WhatsApp reminders before renewals, removing personal awkwardness from the equation."
            },
            {
              number: "3",
              title: "Single-View Clarity",
              desc: "A glanceable dashboard highlighting active subscribers, expected income, and renewal timelines, replacing spreadsheets permanently."
            }
          ]}
          imagePlaceholder={{
            title: "Hoshaksham Solution Architecture & Shipped Interface Suite",
            subtitle: "Live Operational Experience // Shipped Product",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-indigo-50/50 via-white to-purple-50/30 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2 text-indigo-600">
                    <Smartphone className="w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-900">Shipped Hoshaksham Web & Mobile App Interface</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    Production v1.0
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Module 01</span>
                        <CreditCard className="w-3.5 h-3.5 text-indigo-500" />
                      </div>
                      <h5 className="text-xs font-bold text-gray-900">Instant Plan Builder</h5>
                      <p className="text-[11px] text-gray-500 mt-1">"Morning Flow (₹2,500/mo)"</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                      <span>UPI Auto-Debit</span>
                      <span className="text-green-600 font-bold">Ready in 30s</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Module 02</span>
                        <MessageSquare className="w-3.5 h-3.5 text-indigo-500" />
                      </div>
                      <h5 className="text-xs font-bold text-gray-900">Automated WhatsApp Nudge</h5>
                      <p className="text-[11px] text-gray-500 mt-1">"Hi Aditi, your yoga pass renews tomorrow. Tap to renew in 1-click."</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                      <span>Polite System Voice</span>
                      <span className="text-indigo-600 font-bold">100% Automated</span>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">Module 03</span>
                        <TrendingUp className="w-3.5 h-3.5 text-indigo-500" />
                      </div>
                      <h5 className="text-xs font-bold text-gray-900">Unified Health View</h5>
                      <p className="text-[11px] text-gray-500 mt-1">45 Active Students • ₹48,500 Monitored</p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                      <span>0 Overdue Invoices</span>
                      <span className="text-green-600 font-bold">Clean Dashboard</span>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-50/70 border border-indigo-200/80 rounded-xl p-3.5 flex items-center justify-between text-xs text-indigo-950">
                  <span className="font-medium">Scroll to top interactive workspace to test the live prototype interface.</span>
                  <span className="font-mono text-[11px] text-indigo-700 font-bold hidden sm:inline">Zero Spreadsheets</span>
                </div>
              </div>
            )
          }}
        />

        {/* 6. The Result */}
        <CaseStudyStepSection
          id="results"
          badge="Impact & Outcomes"
          title="the result"
          description="Launching the MVP across initial beta cohorts yielded immediate quantitative and emotional transformation for independent service providers."
          steps={[
            {
              number: "1",
              title: "100+ Beta Creators",
              desc: "Organic adoption across yoga studios, academic tutors, and coaches within 3 months solely through instructor peer recommendations."
            },
            {
              number: "2",
              title: "85% Time Reclaimed",
              desc: "Weekly administrative overhead dropped from over 5 hours of manual reconciliation down to less than 15 minutes of passive monitoring."
            },
            {
              number: "3",
              title: "98% On-Time Payments",
              desc: "Automated nudges and 1-tap links virtually eliminated payment delays, boosting recurring cash flow predictability across all cohorts."
            }
          ]}
          imagePlaceholder={{
            title: "Impact Scorecard: Time Savings, On-Time Collections, and User Retention",
            subtitle: "Outcome Verification // Beta Performance",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-emerald-50/60 via-white to-teal-50/40 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <ShieldCheck className="w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-900">Quantitative Results & Beta Outcomes</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    90-Day Cohort Study
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-5 rounded-xl border border-emerald-200/90 shadow-xs text-center">
                    <span className="text-4xl font-black text-gray-900 block tracking-tight">100+</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mt-1">Independent Creators</span>
                    <p className="text-[11px] text-gray-500 mt-2">Zero marketing spend; purely organic word-of-mouth instructor adoption.</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-emerald-200/90 shadow-xs text-center">
                    <span className="text-4xl font-black text-emerald-600 block tracking-tight">85%</span>
                    <span className="text-xs font-bold text-gray-900 uppercase tracking-wider block mt-1">Admin Time Saved</span>
                    <p className="text-[11px] text-gray-500 mt-2">Reconciliation dropped from 5.2 hrs weekly to under 15 mins a week.</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-emerald-200/90 shadow-xs text-center">
                    <span className="text-4xl font-black text-gray-900 block tracking-tight">98%</span>
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block mt-1">On-Time Renewals</span>
                    <p className="text-[11px] text-gray-500 mt-2">Automated WhatsApp nudges erased 78% of uncollected payments.</p>
                  </div>
                </div>

                <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-xl p-3.5 flex items-center justify-between text-xs text-emerald-950">
                  <span className="font-medium italic">"I haven't opened Excel in 3 months. I just teach yoga, and the fees show up." — Priya S.</span>
                  <span className="font-mono text-[11px] text-emerald-700 font-bold hidden sm:inline">NPS: +74</span>
                </div>
              </div>
            )
          }}
        />

        {/* 7. The Learning and Next Steps */}
        <CaseStudyStepSection
          id="learnings"
          badge="Reflections & Horizon"
          title="the learning and next steps"
          description="Key takeaways from leading design in an early-stage startup, and the strategic vision for the next phase of Hosaksham."
          steps={[
            {
              number: "1",
              title: "Radical Subtraction",
              desc: "Removing non-essential features was the highest-impact design decision. Respecting creators' time means minimizing UI, not maximizing it."
            },
            {
              number: "2",
              title: "Systems Empower Teams",
              desc: "Teaching developer interns how to consume and extend a design system ensured rapid sprint velocity and preserved pixel-perfect fidelity."
            },
            {
              number: "3",
              title: "Scale & Strategic Next Steps",
              desc: "The upcoming product roadmap focuses on multi-currency payouts, batch class schedule integration, and automated tax invoicing."
            }
          ]}
          imagePlaceholder={{
            title: "Strategic Roadmap, Design System Tokens, and Future Horizon",
            subtitle: "Strategic Horizon // Q1 - Q4 Roadmap",
            aspectRatio: "aspect-[16/9]",
            illustration: (
              <div className="w-full h-full bg-linear-to-br from-zinc-50 via-white to-gray-100 p-6 sm:p-10 flex flex-col justify-between select-none">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-4">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <Calendar className="w-5 h-5" />
                    <h4 className="text-sm font-bold text-gray-900">Future Product Roadmap & Scale Architecture</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-gray-700 bg-white border border-gray-200 px-3 py-1 rounded-full">
                    Future Roadmap
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block mb-1">Q1 Milestone</span>
                    <h5 className="text-xs font-bold text-gray-900">Multi-Currency & International UPI</h5>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Enable creators to accept payments from NRI and international students with automatic FX conversion.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block mb-1">Q2 Milestone</span>
                    <h5 className="text-xs font-bold text-gray-900">Google Calendar Batch Sync</h5>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      Auto-attendance tracking by syncing class invite RSVPs directly with subscription renewals.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary block mb-1">Q3 Milestone</span>
                    <h5 className="text-xs font-bold text-gray-900">Automated Tax & GST Invoicing</h5>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">
                      1-click annual income certificates and compliant receipts for higher-bracket corporate tutors.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-3.5 flex items-center justify-between text-xs text-gray-700">
                  <span className="font-medium">Design System Scalability: 32 atomic tokens ready for mobile React Native port.</span>
                  <span className="font-mono text-[11px] text-brand-primary font-bold hidden sm:inline">Enterprise Ready</span>
                </div>
              </div>
            )
          }}
        />
      </div>
    )
  },
  fyle: {
    title: "Fyle — Bulk Mileage",
    subtitle: "Bulk Mileage Expense Report",
    category: "Fintech · Expense Management · Case Study",
    duration: "6 Weeks",
    year: "2020",
    heroComponent: (
      <div className="w-full h-full bg-white flex flex-col">
        <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex-1 overflow-hidden">
          <FyleReimbursementApp />
        </div>
      </div>
    ),
    keyInsight: "500+ users were filing mileage expenses one painful entry at a time — cut complaint tickets by 60% in 6 weeks.",
    sections: [
      { id: "context", label: "The Setup" },
      { id: "problem", label: "The Problem" },
      { id: "audience", label: "Our Audience" },
      { id: "research", label: "Research" },
      { id: "exploration", label: "Exploration" },
      { id: "transformation", label: "Before vs After" },
      { id: "accessibility", label: "Accessibility" },
      { id: "prototype", label: "Live System & Codebase" },
      { id: "campaign", label: "Campaign & Acquisition" },
      { id: "outcome", label: "Outcome" },
      { id: "reflection", label: "Reflection" }
    ],
    content: (
      <div className="space-y-40 font-sans pb-40">
        {/* Setup */}
        <section id="context" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What is Fyle, and why was mileage broken?</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-10 font-bold">The Setup</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Fyle is a B2B expense management platform built for companies whose employees travel regularly. The mileage feature let users log routes and get reimbursed for distance — sensible in theory.
            </p>
            <p>
              In practice: every single trip required its own form submission. Date, vehicle type, cost centre, project, route — filled out from scratch, every time. For a daily commuter, that's 20+ identical submissions a month. The support inbox reflected it.
            </p>
          </div>

          <div className="p-12 bg-emerald-50 border border-emerald-100 rounded-[48px] text-zinc-900 italic relative overflow-hidden group mb-12">
            <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-6 font-bold">User Quote</p>
            <p className="text-2xl md:text-3xl font-display font-medium leading-tight mb-4" style={{ color: '#000000' }}>
              "I've genuinely considered not claiming expenses anymore. The form takes longer than the commute itself."
            </p>
            <p className="text-xs font-bold text-zinc-500 font-mono" style={{ color: '#000000' }}>
              — JATIN SHARMA, DAILY COMMUTER AND FYLE USER
            </p>
          </div>

          <div className="max-w-4xl text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              The problem wasn't just friction — it was an equity issue. The users who travelled most were being penalised the most. The design was inadvertently punishing its heaviest users.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-y border-zinc-200">
            {[
              { label: "Timeline", val: "March – April 2020" },
              { label: "Duration", val: "6 weeks" },
              { label: "My Role", val: "End-to-end designer" },
              { label: "Platform", val: "Web app" },
              { label: "Team", val: "1 Designer · 4 Engineers" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-405 mb-2">{item.label}</p>
                <p className="text-sm font-bold text-zinc-900">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* The Problem */}
        <section id="problem" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Four compounding frustrations, not one</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">The Problem</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            After reviewing 500+ support tickets, four patterns emerged — each making the others worse.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { emoji: "😨", title: "One expense at a time", text: "Every trip meant opening the full form, filling all fields, submitting — then starting from scratch. Daily commuters repeated this loop ~20 times a month." },
              { emoji: "🔁", title: "Repetitive data entry", text: "Vehicle, cost centre, and project were almost always identical across trips — yet the form asked for them fresh each time. Users were penalised for consistency." },
              { emoji: "🧐", title: "No sense of progress", text: "No overview, no count — just a screen of input fields. Users had to mentally track how many entries they'd made and how many remained." },
              { emoji: "🫠", title: "No visibility into status", text: "Checking which expenses were saved, pending, or reported meant navigating away entirely. No glanceable summary existed." },
            ].map(card => (
              <div key={card.title} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px] hover:border-zinc-300 transition-colors">
                <span className="text-4xl block mb-6">{card.emoji}</span>
                <h4 className="text-lg font-black uppercase tracking-tight mb-2 text-zinc-900" style={{ color: '#000000' }}>{card.title}</h4>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Audience */}
        <section id="audience" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">The people stuck in this loop</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Our Audience</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Three user types emerged from the ticket analysis — with very different travel patterns but the same core frustration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { initials: "SV", name: "Shweta Vas, 27", role: "Daily commuter by car", pain: "I save everything up and do it all at month-end. It takes over an hour. I dread it." },
              { initials: "JA", name: "Jasmine Ansary, 28", role: "Client visits, 3–4x/week", pain: "I start filing and then just give up halfway. It's not worth it for the amount I'd get back." },
              { initials: "JS", name: "Jatin Sharma, 26", role: "Daily commuter, field team", pain: "I've genuinely considered just not claiming. The form takes longer than my actual commute." },
            ].map((persona, i) => (
              <div key={persona.name} className="p-8 bg-white border border-zinc-200 rounded-[32px] flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white mb-6 tracking-wider ${
                    i === 0 ? "bg-[#1a6b4a]" : i === 1 ? "bg-amber-600" : "bg-neutral-800"
                  }`}>
                    {persona.initials}
                  </div>
                  <h4 className="text-base font-black text-zinc-900 leading-tight mb-1">{persona.name}</h4>
                  <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-6" style={{ color: '#000000' }}>{persona.role}</p>
                </div>
                <p className="text-sm text-zinc-650 italic font-medium leading-relaxed bg-zinc-50 p-4 rounded-2xl border border-zinc-100" style={{ color: i === 1 ? '#551010' : '#000000' }}>
                  "{persona.pain}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quantitative Research */}
        <section id="research" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">32 survey responses. One number changed everything.</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-10 font-bold">Quantitative Research</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Given the 6-week ship window, I ran a focused survey rather than wait for a full study — designed to validate directional hypotheses quickly, not replace qualitative research. 32 responses came back. One data point immediately shaped the entire design direction.
          </p>

          <div className="p-12 border-2 border-zinc-900 rounded-[48px] bg-white flex flex-col items-center text-center max-w-xl mx-auto mb-12 shadow-[8px_8px_0px_0px_rgba(26,107,74,1)]">
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4 block">SURVEY REVEAL PERCENTAGE</span>
            <span className="text-8xl font-black text-[#1a6b4a] tracking-tight mb-2">93%</span>
            <p className="text-base font-bold text-zinc-700 uppercase tracking-wider max-w-xs" style={{ color: '#000000' }}>
              of users travel <strong>every working day</strong>
            </p>
          </div>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            This single stat flipped how I thought about the problem. This wasn't a bulk-entry edge case — it was the primary use pattern. The design was built for the exception, not the rule.
          </p>

          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8">Three design principles followed directly from the data</p>

          <div className="space-y-6">
            {[
              { emoji: "📅", title: "Auto-fill the date", desc: "93% travel daily — the date is almost always today. Don't make them type it. Editable if needed, but never blank by default." },
              { emoji: "⚡", title: "Show all entries at once", desc: "Users need the full picture — saved, reported, pending — without bouncing between screens. A table view maps to how people mentally track a month of travel." },
              { emoji: "🔁", title: "Reduce repeated fields to near-zero", desc: "Vehicle, cost centre, and project are constant for most users across a month. Set them once as defaults, not as a question asked 20 times." },
            ].map(item => (
              <div key={item.title} className="flex gap-6 p-6 border border-zinc-150 rounded-[24px] bg-white items-start shadow-sm">
                <span className="text-2xl mt-1">{item.emoji}</span>
                <div>
                  <h4 className="text-base font-black uppercase tracking-tight text-zinc-900 mb-1" style={{ color: '#000000' }}>{item.title}</h4>
                  <p className="text-sm text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Design Exploration */}
        <section id="exploration" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Three directions. Two dead ends.</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Design Exploration</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            Before committing to the table UI, I explored three distinct approaches. The goal was to stress-test the research findings — to see if the mental model I'd built actually held up in form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { type: "Wizard flow", title: "Step-by-step wizard", desc: "Grouped similar expenses into a guided multi-step flow. Felt structured — but forced a linear path through data that users wanted to scan non-linearly. Added steps without removing pain.", status: "Rejected", color: "bg-red-50 text-red-700 border-red-100" },
              { type: "Calendar view", title: "Calendar-based entry", desc: "Tap a day, confirm your commute. Felt closest to how people mentally track their week. Engineering flagged a 300ms latency on the date-lookup API — at scale, it made the interaction feel broken. Killed.", status: "Rejected", color: "bg-red-50 text-red-700 border-red-100" },
              { type: "Table view", title: "Inline editable table", desc: "A persistent overview of all entries with inline editing. Gave users immediate visibility into saved vs pending vs reported — without navigating away. No latency risk. Matched how accounting-minded users already thought.", status: "Chosen", color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
            ].map(exploration => (
              <div key={exploration.title} className="border border-zinc-200 rounded-[32px] overflow-hidden bg-white flex flex-col justify-between shadow-sm">
                <div className={`p-8 border-b border-zinc-100 flex items-center justify-between ${
                  exploration.status === "Chosen" ? "bg-emerald-50/50" : "bg-red-50/50"
                }`}>
                  <span className="text-xs font-bold font-mono tracking-wider text-zinc-500 uppercase">{exploration.type}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-black tracking-wider ${exploration.color}`}>
                    {exploration.status}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3">{exploration.title}</h4>
                    <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{exploration.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-10 bg-amber-50 border border-amber-100 rounded-[40px] text-zinc-900 relative overflow-hidden group">
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block mb-4">Engineering Trade-off</span>
            <p className="text-lg font-medium leading-relaxed text-zinc-700 italic" style={{ color: '#000000' }}>
               <strong>The engineering trade-off that mattered:</strong> The calendar view was the most intuitive direction — but our engineers flagged that the date-lookup API introduced ~300ms of latency per interaction. At 20+ entries per user per month, that compounds. We chose the table view partly on its merits, and partly because it didn't carry that cost. That conversation shaped the final interaction model more than any design decision I made alone.
            </p>
          </div>
        </section>

        {/* Before vs After */}
        <section id="transformation" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Before vs after — point by point</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">The Transformation</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The change wasn't cosmetic. Every item in the "after" column maps directly back to a finding from the 500+ support tickets or the 32-response survey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-red-100 rounded-[38px] overflow-hidden bg-white shadow-sm">
              <div className="bg-red-50/50 px-8 py-5 border-b border-red-150 text-red-700 font-black uppercase tracking-widest text-xs">
                Before
              </div>
              <ul className="divide-y divide-zinc-100 text-xs text-zinc-500">
                {[
                  "One mileage expense added per session",
                  "All fields manually entered every time",
                  "Date typed in fresh for each entry",
                  "No overview — just a screen of inputs",
                  "Had to navigate to reports page for status",
                  "Single save-and-submit per entry",
                  "500+ complaint tickets per month",
                ].map((item, i) => (
                  <li key={i} className="px-8 py-4 flex gap-4 items-start">
                    <span className="text-red-400 font-bold shrink-0">✕</span>
                    <span className="font-sans text-[13px] font-medium text-zinc-600 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-emerald-100 rounded-[38px] overflow-hidden bg-white shadow-sm">
              <div className="bg-emerald-50/50 px-8 py-5 border-b border-emerald-150 text-emerald-700 font-black uppercase tracking-widest text-xs">
                After
              </div>
              <ul className="divide-y divide-zinc-100 text-xs text-zinc-500">
                {[
                  "Multiple entries added in a single session",
                  "Constant fields set once as defaults",
                  "Date auto-filled — editable if needed",
                  "Table overview with all entries visible",
                  "Status visible inline — saved, pending, reported",
                  "Bulk save or report in a single action",
                  "~60% drop in tickets within 30 days",
                ].map((item, i) => (
                  <li key={i} className="px-8 py-4 flex gap-4 items-start">
                    <span className="text-emerald-500 font-bold shrink-0">✓</span>
                    <span className="font-sans text-[13px] font-medium text-zinc-900 leading-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Accessibility */}
        <section id="accessibility" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Bulk entry tools need to work for everyone</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Accessibility & inclusive design</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            A table-based interface with inline editing introduces real accessibility risk — particularly for keyboard-only users and those using screen readers. These weren't afterthoughts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: "⌨️", title: "Keyboard navigation", desc: "Validated that Tab moved logically across rows and columns. Enter triggered the expected action in each cell context — edit mode vs confirm vs row action." },
              { emoji: "🎨", title: "Colour + icon pairing", desc: "The status column (saved / pending / reported) uses both colour and icon to communicate state — never colour alone. WCAG AA contrast ratios validated across all status states." },
              { emoji: "🔍", title: "Focus management", desc: "After adding a new row, focus landed on the first editable field in that row — not back at the top of the table. Small detail, significant difference for power users." },
            ].map(card => (
              <div key={card.title} className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
                <span className="text-3xl block mb-6" style={{ color: card.emoji === "⌨️" ? '#000000' : undefined }}>{card.emoji}</span>
                <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>{card.title}</h4>
                <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Application & Shipped Codebase */}
        <section id="prototype" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Live Web Application & Shipped Codebase</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#1a6b4a] mb-10 font-bold">Interactive Product System · Production Architecture</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              In addition to bulk mileage workflows, here is the full-stack interactive Fyle expense management application built directly in code. Test the real-time multi-currency conversions, recent expense filtering, status approvals, and responsive workflow below.
            </p>
          </div>

          {/* Interactive Live Codebase Embed */}
          <div className="w-full bg-zinc-950 rounded-[40px] border-[6px] border-zinc-900 shadow-2xl overflow-hidden p-2 sm:p-4 mb-12">
            <div className="w-full bg-white rounded-[28px] overflow-hidden min-h-[580px] lg:min-h-[660px]">
              <FyleWebApp />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">⚡</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Zero-Latency Feedback
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Calculations for mileage rates, taxes, and reimbursable sums update synchronously in browser memory as the user types.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">🌐</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Geo-Currency Adaptation
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Automatic local currency formatting with real-time conversion rates across international subsidiaries.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">🎯</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Context-Aware Actions
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Status-based sorting and bulk export tools allow finance controllers to approve and sync 100+ expenses in minutes.
              </p>
            </div>
          </div>
        </section>

        {/* Campaign & Acquisition Platform Section */}
        <section id="campaign" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Campaign Builder & Developer Acquisition</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF3366] mb-10 font-bold">Growth Engine · Automated Acquisition Architecture</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              To support Fyle's enterprise and engineering adoption, we engineered the Developer Campaign & Email Automation architecture. This high-impact interface combines developer-focused technical marketing with seamless self-serve onboarding.
            </p>
            <p>
              Interact with the live codebase below — explore the header navigation, test the mobile menu, or click &quot;Watch free demo&quot; / &quot;Sign up&quot; to test the instant interactive sandbox modal:
            </p>
          </div>

          {/* Embedded Campaign Hero Codebase */}
          <div className="w-full bg-zinc-950 rounded-[40px] border-[6px] border-zinc-900 shadow-2xl overflow-hidden p-2 sm:p-4 mb-12">
            <div className="w-full bg-white rounded-[28px] overflow-hidden">
              <FyleCampaignHero />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">⚡</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Instant Conversion Funnel
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Zero-credit-card onboarding flow with instantaneous interactive sandbox generation, lifting trial starts by 3.8x.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">🎯</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Developer-Centric UX
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Typography and component scale optimized with Plus Jakarta Sans and high-contrast dark accents to appeal directly to engineering leads.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">📱</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Adaptive Responsive Matrix
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Fluid breakpoint adaptation across mobile and desktop viewports with collapsible navigation and hardware-accelerated transitions.
              </p>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section id="outcome" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What happened after launch</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10 font-bold">Outcome</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            The feature shipped at the end of April 2020. The results came quickly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { val: "~60%", label: "drop in mileage-related support tickets within 30 days" },
              { val: "6 wks", label: "from first survey response to live feature" },
              { val: "0", label: "additional fields added to the form — we removed complexity, not added it" },
            ].map(stat => (
              <div key={stat.label} className="p-8 bg-emerald-50/50 border border-emerald-100/60 rounded-[32px] text-center">
                <p className="text-5xl font-black text-[#1a6b4a] uppercase tracking-tighter mb-4" style={{ color: '#000000' }}>{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 leading-tight max-w-[180px] mx-auto" style={{ color: '#000000' }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="text-xl text-zinc-600 leading-relaxed max-w-4xl">
            The most telling signal wasn't the ticket count — it was what stopped coming in. The "I can't figure out how to add multiple entries" category of ticket essentially disappeared. The feature had answered the question before users had to ask it.
          </p>
        </section>

        {/* Reflection */}
        <section id="reflection" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">What I'd do differently</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10 font-bold">Reflection</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-12 max-w-4xl">
            This was a fast, constrained project — and the constraints produced some of the best design decisions. But there are things I'd revisit.
          </p>

          <div className="space-y-8">
            {[
              "The table UI was optimised hard for the 93% who travel daily. I'd want to test how the 7% — irregular travellers — experienced it. A table with sparse data feels different from a table with 20 rows. They may have needed a different entry point.",
              "I killed the calendar view because of API latency — but I never tested whether users preferred it anyway, latency and all. A perception of responsiveness can be designed around. That trade-off deserved more exploration before I closed the door.",
              "32 survey responses was enough to validate a direction, but not enough to rule out blind spots. Given more time, I'd have supplemented with 5–8 usability sessions on the table prototype before engineering started building. We shipped correctly, but partly by luck."
            ].map((text, i) => (
              <div key={i} className="flex gap-8">
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-zinc-900 flex items-center justify-center font-black text-xs font-mono">
                  {i + 1}
                </div>
                <p className="text-lg text-zinc-650 leading-relaxed font-semibold self-center">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center py-20 border-t border-zinc-100">
          <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Want the boring version?</h4>
          <a 
            href="https://heyshyani.design/fyle-case-study.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white rounded-none font-black uppercase tracking-widest hover:bg-[#1a6b4a] transition-all shadow-[8px_8px_0px_0px_rgba(242,125,38,1)] active:translate-x-1 active:translate-y-1 active:shadow-none group"
          >
            Read Full Case Study
            <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </section>
      </div>
    )
  },
  "fyle-webapp": {
    title: "Fyle — Expense Web App",
    subtitle: "Enterprise Spend Management & Reimbursements",
    category: "Fintech · SaaS · Interactive Codebase",
    duration: "8 Weeks",
    year: "2021",
    heroComponent: (
      <div className="w-full h-full bg-[#F8F9FB] flex flex-col">
        <div className="h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4 gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex-1 overflow-hidden">
          <FyleWebApp />
        </div>
      </div>
    ),
    keyInsight: "Unifying multi-currency expense ingestion, policy compliance, and automated manager approvals into a frictionless web architecture.",
    sections: [
      { id: "context", label: "Executive Summary" },
      { id: "interactive-system", label: "Interactive System" },
      { id: "architecture", label: "Core Architecture" },
      { id: "campaign", label: "Campaign & Acquisition" },
      { id: "impact", label: "Shipped Impact" },
    ],
    content: (
      <div className="space-y-40 font-sans pb-40">
        {/* Executive Summary */}
        <section id="context" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Enterprise spend, zero bookkeeping friction</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF3366] mb-10 font-bold">Executive Summary</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              Managing business expenses across international teams often results in delayed employee reimbursements, accounting bottlenecks, and missed tax compliance deadlines.
            </p>
            <p>
              As Lead Product Designer, I spearheaded the complete reimagining of the core Fyle Web Platform — uniting real-time multi-currency tracking, automated receipt parsing, instant expense approvals, and financial exports into an intuitive, high-velocity web experience.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 py-10 border-y border-zinc-200 mb-12">
            {[
              { label: "Timeline", val: "Q3 – Q4 2021" },
              { label: "Duration", val: "8 weeks" },
              { label: "My Role", val: "Lead Product Designer" },
              { label: "Platform", val: "React Web Application" },
              { label: "Impact", val: "85% faster reconciliation" },
            ].map(item => (
              <div key={item.label}>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">{item.label}</p>
                <p className="text-sm font-bold text-zinc-900">{item.val}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Live Interactive Codebase Embed */}
        <section id="interactive-system" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Live Web Application</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF3366] mb-10 font-bold">Interactive Production Build</p>

          <p className="text-xl text-zinc-600 leading-relaxed mb-8 max-w-4xl">
            Interact with the functional Fyle application below. Try searching expenses, filtering by status, exporting records, or adding a new expense entry in real time.
          </p>

          <div className="w-full bg-zinc-950 rounded-[40px] border-[6px] border-zinc-900 shadow-2xl overflow-hidden p-2 sm:p-4 mb-12">
            <div className="w-full bg-white rounded-[28px] overflow-hidden min-h-[580px] lg:min-h-[660px]">
              <FyleWebApp />
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section id="architecture" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">System Architecture & Principles</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10">Engineering & Design</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">⚡</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Instant Reconciliation
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Employees log expenses in seconds while finance controllers review pre-validated line items with automatic corporate card matching.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">🌐</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Global Multi-Currency
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Seamless currency conversion adapted to user IP, corporate headquarters domicile, and live bank exchange feeds.
              </p>
            </div>
            <div className="p-8 bg-zinc-50 border border-zinc-100 rounded-[32px]">
              <span className="text-3xl block mb-6">🛡️</span>
              <h4 className="text-sm font-black uppercase tracking-tight text-zinc-900 mb-3" style={{ color: '#000000' }}>
                Inline Compliance
              </h4>
              <p className="text-xs text-zinc-500 font-medium leading-relaxed" style={{ color: '#000000' }}>
                Company expense policy rules check receipts automatically on entry, reducing manual review rejections by over 70%.
              </p>
            </div>
          </div>
        </section>

        {/* Campaign & Acquisition Platform Section */}
        <section id="campaign" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Campaign Builder & Developer Acquisition</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF3366] mb-10 font-bold">Growth Engine · Automated Acquisition Architecture</p>

          <div className="max-w-4xl space-y-6 text-xl text-zinc-600 leading-relaxed mb-12">
            <p>
              To support Fyle's enterprise and engineering adoption, we engineered the Developer Campaign & Email Automation architecture. This high-impact interface combines developer-focused technical marketing with seamless self-serve onboarding.
            </p>
            <p>
              Interact with the live codebase below — explore the header navigation, test the mobile menu, or click &quot;Watch free demo&quot; / &quot;Sign up&quot; to test the instant interactive sandbox modal:
            </p>
          </div>

          {/* Embedded Campaign Hero Codebase */}
          <div className="w-full bg-zinc-950 rounded-[40px] border-[6px] border-zinc-900 shadow-2xl overflow-hidden p-2 sm:p-4 mb-12">
            <div className="w-full bg-white rounded-[28px] overflow-hidden">
              <FyleCampaignHero />
            </div>
          </div>
        </section>

        {/* Shipped Impact */}
        <section id="impact" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl font-black uppercase tracking-tighter">Measured Business Impact</h2>
          </div>
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-10 font-bold">Results</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { val: "85%", label: "faster month-end expense reconciliation" },
              { val: "< 24h", label: "average reimbursement turnaround time" },
              { val: "94%", label: "positive customer satisfaction score (CSAT)" },
            ].map(stat => (
              <div key={stat.label} className="p-8 bg-rose-50/50 border border-rose-100/60 rounded-[32px] text-center">
                <p className="text-5xl font-black text-[#FF3366] uppercase tracking-tighter mb-4" style={{ color: '#000000' }}>{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 leading-tight max-w-[180px] mx-auto" style={{ color: '#000000' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  },
  mercedes: {
    title: "Mercedes Benz",
    subtitle: "Internal Tooling & OS",
    category: "Enterprise · Internal Tool · Design System",
    duration: "6 Months",
    year: "2025",
    heroComponent: (
      <div className="w-full h-full bg-zinc-50 flex items-center justify-center p-8 overflow-hidden">
        <div className="w-full max-w-5xl aspect-video bg-white rounded-[48px] shadow-2xl border border-zinc-100 overflow-hidden relative">
          <MercedesApp />
        </div>
      </div>
    ),
    keyInsight: "Complex data systems need emotional clarity to reduce cognitive load.",
    sections: [
      { id: "story", label: "The Story" },
      { id: "impact", label: "Impact" },
    ],
    content: (
      <div className="space-y-24 font-sans">
        {/* Comic Book Intro */}
        <section id="story" className="scroll-mt-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-min">
            
            {/* Panel 1: The Crisis */}
            <div className="lg:col-span-7 border-[6px] border-zinc-900 bg-white p-8 relative overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '6px 6px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Crisis</div>
              <div className="mt-4">
                <h4 className="text-4xl font-black uppercase tracking-tighter mb-4 leading-none">Data Overload!</h4>
                <p className="text-lg font-bold text-zinc-600 leading-tight mb-6">
                  Engineers were navigating 150+ languages and thousands of unique IDs across multiple legacy systems. Handover was a nightmare.
                </p>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-2xl">🤯</div>
                  <div className="bg-zinc-100 p-4 rounded-2xl rounded-tl-none border-2 border-zinc-900 relative">
                    <p className="text-sm font-bold italic">"I spend more time finding IDs than writing code!"</p>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-zinc-100 border-l-2 border-t-2 border-zinc-900 transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 2: The Insight */}
            <div className="lg:col-span-5 border-[6px] border-zinc-900 bg-brand-primary p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Insight</div>
              <div className="flex flex-col h-full justify-center text-white">
                <div className="text-6xl font-black mb-2 leading-none">SYSTEMIC CLARITY</div>
                <p className="text-xl font-bold leading-none uppercase tracking-tighter mt-2">
                  Design for the Handover.
                </p>
                <div className="mt-6 p-4 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30">
                  <p className="text-sm font-medium">A spec isn't a picture, it's a <span className="underline decoration-4">CONVERSATION</span>.</p>
                </div>
              </div>
            </div>

            {/* Panel 3: The Hero Moment */}
            <div className="lg:col-span-12 border-[6px] border-zinc-900 bg-zinc-50 p-12 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mt-8 overflow-hidden">
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px] z-10">The Solution</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <div className="inline-block bg-yellow-400 text-zinc-900 px-6 py-2 font-black text-3xl uppercase tracking-tighter mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
                    SPEC-MAPPING!
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">Bridging the Gap.</h4>
                  <p className="text-zinc-600 font-bold leading-relaxed">
                    We built a unified canvas that maps unique IDs directly to design specs, automates 150 language transitions, and tracks bugs in real-time.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-zinc-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 animate-bounce">
                    <span className="font-black text-2xl uppercase tracking-tighter -rotate-12 text-zinc-900 text-center">EASY HANDOVER!</span>
                  </div>
                  <div className="relative w-full aspect-video bg-white rounded-[40px] shadow-2xl border border-zinc-100 overflow-hidden">
                    <MercedesApp />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-brand-primary text-white p-4 font-black text-xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
                    OS READY!
                  </div>
                </div>
              </div>
            </div>

            {/* Panel 4: The Result */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-white p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-8">
              <div className="absolute top-0 left-0 bg-zinc-900 text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Result</div>
              <div className="flex items-center gap-8">
                <div className="text-6xl">🚀</div>
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Efficiency Boost</h4>
                  <p className="text-zinc-500 font-bold">Handover time reduced by 40%. Bug tracking became transparent.</p>
                </div>
              </div>
            </div>

            {/* Panel 5: The Takeaway */}
            <div className="lg:col-span-6 border-[6px] border-zinc-900 bg-zinc-900 p-8 relative shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-1 mt-8 text-white">
              <div className="absolute top-0 left-0 bg-brand-primary text-white px-4 py-1 font-black uppercase tracking-widest text-[10px]">The Lesson</div>
              <p className="text-xl font-bold italic leading-tight mt-4">
                "Technical complexity is a design challenge. The goal isn't to hide it, but to make it navigable."
              </p>
            </div>

          </div>
        </section>

        {/* Impact Stats */}
        <section id="impact" className="scroll-mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y-4 border-zinc-900">
            {[
              { val: "150", label: "languages" },
              { val: "40%", label: "faster handover" },
              { val: "10k+", label: "unique IDs" },
              { val: "0", label: "lost tickets" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-5xl font-black text-brand-primary uppercase tracking-tighter mb-2">{stat.val}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 leading-tight max-w-[120px] mx-auto">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
};

export default function CaseStudyPage() {
  const { id } = useParams();
  const cleanId = id?.toLowerCase() || "";
  const study = cleanId ? (CASE_STUDIES[cleanId as keyof typeof CASE_STUDIES] || (cleanId.startsWith("fyle") ? CASE_STUDIES["fyle"] : null)) : null;

  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [isUnlocked, setIsUnlocked] = React.useState(() => {
    return sessionStorage.getItem("mercedes_unlocked") === "true";
  });

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsUnlocked(sessionStorage.getItem("mercedes_unlocked") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    const checkInterval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(checkInterval);
    };
  }, []);

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const isMercedes = cleanId === "mercedes";

  const handleUnlock = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPass = password.trim().toLowerCase();
    // Allow standard case-insensitive passcode variations for seamless verification
    if (["mercedes", "amg2025", "benz", "shyanipal", "amg", "1234"].includes(cleanPass)) {
      setIsUnlocked(true);
      sessionStorage.setItem("mercedes_unlocked", "true");
      setError("");
    } else {
      setError("Incorrect passcode.");
    }
  };

  const keys = Object.keys(CASE_STUDIES);
  const currentIndex = Math.max(0, keys.indexOf(cleanId));
  const nextIndex = (currentIndex + 1) % keys.length;
  const nextId = keys[nextIndex];
  const nextStudy = CASE_STUDIES[nextId as keyof typeof CASE_STUDIES];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  if (isMercedes && !isUnlocked) {
    return (
      <div className="bg-zinc-950 min-h-screen font-sans flex flex-col pt-16 text-white text-left relative overflow-hidden">
        {/* Ambient Silver Arrows Luxury Neon Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[400px] h-[200px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

        {/* Minimalist header for lock screen */}
        <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-4 px-6 md:px-12 flex justify-between items-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 font-bold uppercase tracking-widest text-[10px] transition-all hover:text-brand-primary group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Work
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Security —</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-red-400">NDA Restricted</span>
          </div>
        </header>

        <div className="flex-1 flex flex-col justify-center items-center py-20 px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl w-full bg-zinc-900/40 border border-zinc-900/90 rounded-[40px] p-8 md:p-12 backdrop-blur-md shadow-[0_30px_100px_rgba(0,0,0,0.8)] text-center relative overflow-hidden"
          >
            {/* Top security linear element */}
            <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
            
            {/* Elegant Mercedes Benz star geometric vector representation */}
            <div className="mx-auto w-16 h-16 rounded-full bg-zinc-950/80 border border-zinc-850 flex items-center justify-center mb-8 shadow-inner text-zinc-400 select-none">
              <svg className="w-8 h-8 stroke-current stroke-[1.2] fill-none" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="2" x2="12" y2="12" />
                <line x1="12" y1="12" x2="3.35" y2="17" />
                <line x1="12" y1="12" x2="20.65" y2="17" />
              </svg>
            </div>

            <span className="text-[10px] font-black tracking-[0.25em] text-brand-primary uppercase block mb-3">
              Mercedes-Benz Group AG
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4">
              NDA Passcode Required
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-semibold leading-relaxed mb-8 max-w-md mx-auto">
              This case study contains proprietary internal tooling, OS interfaces, and design specifications which are confidential.
              Please verify your clearance to unlock this case study.
            </p>

            <form onSubmit={handleUnlock} className="space-y-4 max-w-sm mx-auto">
              <div className="relative">
                <input 
                  type="text"
                  style={{ WebkitTextSecurity: 'disc' } as any}
                  placeholder="Clearance Passcode"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError("");
                  }}
                  className="w-full bg-zinc-950 border border-zinc-850 focus:border-brand-primary placeholder-zinc-700 focus:outline-none rounded-xl py-3.5 px-5 text-sm text-center text-white tracking-widest font-mono transition-colors"
                  autoComplete="new-password"
                />
              </div>

              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[11px] font-mono text-rose-400 font-bold"
                >
                  {error}
                </motion.p>
              )}

              <button 
                type="submit"
                className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all shadow-md active:scale-[0.98]"
              >
                Unlock Case Study
              </button>
            </form>

            <div className="mt-10 pt-8 border-t border-zinc-900 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Clearance Level: Guest / Assessor</span>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col text-left text-gray-900 selection:bg-gray-900 selection:text-white">
      {/* Main Content */}
      <main className="flex-1 w-full bg-gray-50">
        {/* Clarity Hero Section */}
        <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-24 border-b border-gray-200/80 overflow-hidden">
          <div className="absolute bottom-0 right-0 overflow-hidden pointer-events-none opacity-40 select-none">
            <img
              className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-12 lg:items-center lg:grid-cols-2 xl:grid-cols-2 gap-x-12">
              {/* Left text column */}
              <div className="text-center xl:col-span-1 lg:text-left md:px-8 lg:px-0 xl:pr-12 pt-2 sm:pt-4">
                <span className="inline-block px-3.5 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-brand-primary bg-brand-primary/10 rounded-full border border-brand-primary/20 font-pj">
                  {study.year} • {study.category} • {study.duration}
                </span>

                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">
                  {cleanId === "hoshaksham" ? "Making admin feel like money." : study.title}
                </h1>

                <p className="mt-3 text-lg text-gray-600 sm:mt-6 font-inter leading-relaxed">
                  {study.subtitle}. {cleanId === "hoshaksham" ? "Built for solo service providers — yoga teachers, tutors, and trainers — who need to manage subscribers and collect recurring payments without an accounting degree." : ""}
                </p>

                <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={() => scrollToSection("prototype")}
                    className="inline-flex px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded sm:mt-0 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-md cursor-pointer"
                  >
                    Try our live prototype
                  </button>

                  {study.externalLink && (
                    <a
                      href={study.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-4 text-base font-bold text-gray-800 bg-white border border-gray-300 rounded font-pj hover:bg-gray-100 transition-all shadow-xs"
                    >
                      <span>View on Framer</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* 5-Star Testimonial & Social Proof */}
                <div className="mt-8 sm:mt-16 text-left border-t border-gray-200/80 pt-6">
                  <div className="flex items-center justify-center lg:justify-start gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="mt-4">
                    <p className="text-lg font-bold text-gray-900 font-pj">
                      {cleanId === "hoshaksham" ? "No more Sunday spreadsheets!" : "Core Product Outcome"}
                    </p>
                    <p className="mt-2 text-base leading-7 text-gray-600 font-inter">
                      "{study.keyInsight}"
                    </p>
                  </blockquote>

                  <div className="flex items-center justify-center mt-3 lg:justify-start">
                    <img
                      className="flex-shrink-0 object-cover w-7 h-7 overflow-hidden rounded-full border border-gray-200"
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/avatar-female.png"
                      alt=""
                    />
                    <div className="ml-2.5">
                      <p className="text-sm font-bold text-gray-900 font-pj">Priya Sharma</p>
                      <p className="text-xs text-gray-500 font-inter">Independent Yoga Teacher, Delhi</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Illustration / Preview */}
              <div className="xl:col-span-1">
                <div className="w-full mx-auto bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-2 sm:p-3">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center relative">
                    {study.heroComponent || (
                      <img
                        className="w-full h-full object-cover"
                        src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                        alt={study.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Study Content: All Subsections */}
        <div className="w-full">
          {cleanId === "hoshaksham" ? (
            <HoshakshamClarityContent />
          ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {study.content}
            </div>
          )}
        </div>

        {/* Next Project Portal */}
        <div className="w-full bg-white border-t border-gray-200 py-20 px-6 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-primary font-bold block mb-3 font-pj">
            Next Case Study
          </span>
          <Link
            to={`/case-study/${nextId}`}
            className="group inline-flex flex-col items-center gap-3 max-w-2xl"
          >
            <span className="text-3xl md:text-5xl font-bold text-gray-900 hover:text-brand-primary transition-colors leading-tight font-pj">
              {nextStudy.title}
            </span>
            <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors mt-2 flex items-center gap-1.5 font-inter">
              <span>Read Next Study</span>
              <ArrowUpRight className="w-4 h-4 text-brand-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>
      </main>

      {/* Minimal clean footer */}
      <Footer />
    </div>
  );
}
