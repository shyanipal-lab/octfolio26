import React from "react";
import ClaritySection from "./ClaritySection";
import HoshakshamApp from "./HoshakshamApp";
import ImagePlaceholderCard from "./ImagePlaceholderCard";
import {
  DiscoveryWorkshopArtifact,
  EcosystemFlowArtifact,
  WhatsAppScreenshotAuditArtifact,
  SpreadsheetChaosArtifact,
  SubscriptionDropoffArtifact,
  InContextShadowingArtifact,
  PaperWireframesArtifact,
  FigmaTokensArtifact,
  ChannelComparisonArtifact,
  PersonaProfileArtifact,
  PoliteShieldArtifact,
  PlanCreatorScreensArtifact,
  WhatsAppInteractiveArtifact,
  GreenLedgerArtifact,
  ScreenArchitectureArtifact,
  MicroInteractionsArtifact,
  TimeSavingsChartArtifact,
  RenewalGrowthCurveArtifact,
  TestimonialCardsArtifact,
  MultiCurrencyWireframeArtifact,
  CalendarAttendanceArtifact,
  TaxStatementExportArtifact
} from "./CaseStudyArtifacts";
import { 
  Users, 
  Sparkles, 
  AlertCircle, 
  MessageSquare, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Calendar, 
  CreditCard,
  CheckCircle2,
  Smartphone,
  ArrowUpRight
} from "lucide-react";

export default function HoshakshamClarityContent() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
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

  return (
    <div className="w-full">
      {/* 1. THE CONTEXT */}
      <ClaritySection
        id="context"
        badge="01 • The Context"
        title="The context: 0→1 Product Design at Hosaksham"
        description={
          <>
            <p>
              I joined Hosaksham as lead product designer to solve the chaotic, emotionally exhausting billing cycle experienced by independent service providers. Collaborated closely with 2 co-founders and mentored 2 developer interns.
            </p>
            <p className="font-semibold text-gray-900">
              I took full ownership of the end-to-end design process: foundational UX research, rapid paper prototyping, usability testing, and architecting the production design system from the ground up.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "Early-Stage 0→1 Mission",
            desc: "Dedicated platform for yoga instructors, fitness trainers, and solo tutors who love teaching but dread repetitive billing admin."
          },
          {
            number: "2",
            title: "Cross-Functional Collaboration",
            desc: "Partnered directly with 2 co-founders on product direction and mentored 2 developer interns with token-based specs."
          },
          {
            number: "3",
            title: "End-to-End Ownership",
            desc: "Discovery, user research, wireframes, high-fidelity prototypes, usability validation, and the production design system."
          }
        ]}
        ctaText="Explore The Problem"
        ctaAction={() => scrollTo("problem")}
        quoteTitle="Filling a strategic vacuum"
        quoteDesc="When there is no formal brief, the designer who arrives with structured user evidence and clear tokens earns the authority to own the product direction."
        authorName="Shyani Pal"
        authorRole="Lead Product Designer"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-sm">
                  H
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-pj">Hosaksham Core Ecosystem</h4>
                  <p className="text-xs text-gray-500 font-inter">Cross-functional team alignment</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">
                0→1 Launch
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
                <div className="flex items-center gap-2 text-gray-700 font-bold text-xs mb-1.5 font-pj">
                  <Users className="w-4 h-4 text-brand-primary" />
                  <span>2 Co-Founders</span>
                </div>
                <p className="text-xs text-gray-600 font-inter">Business roadmap, GTM strategy & creator feedback</p>
              </div>

              <div className="p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
                <div className="flex items-center gap-2 text-brand-primary font-bold text-xs mb-1.5 font-pj">
                  <Sparkles className="w-4 h-4" />
                  <span>Lead Designer (Me)</span>
                </div>
                <p className="text-xs text-gray-700 font-inter">Research, concept flows, design system & dev handoff</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200/70">
                <div className="flex items-center gap-2 text-gray-700 font-bold text-xs mb-1.5 font-pj">
                  <Layers className="w-4 h-4 text-gray-600" />
                  <span>2 Dev Interns</span>
                </div>
                <p className="text-xs text-gray-600 font-inter">FlutterFlow mobile app & Firebase backend logic</p>
              </div>
            </div>

            <div className="p-4 bg-gray-900 text-white rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FDB241]" />
                <span className="font-pj font-bold">Timeline: 3 Months (Discovery → Launch)</span>
              </div>
              <span className="text-gray-400 font-inter">100+ Beta Signups</span>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  Discovery & System Context Artifacts
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">2 Visual Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="FigJam • Workshop"
                metadata="Discovery Session #01"
                title="Foundational UX Alignment Canvas"
                caption="Synthesis of stakeholder goals, target instructor personas, and technical constraints establishing mobile-first 0→1 scope."
                illustration={<DiscoveryWorkshopArtifact />}
              />
              <ImagePlaceholderCard
                tag="Architecture Map"
                metadata="Figma Ecosystem v1.0"
                title="Service Provider Ecosystem Blueprint"
                caption="End-to-end service journey connecting instructor studio classes, Hosaksham reminder engine, and student 1-tap UPI payments."
                illustration={<EcosystemFlowArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 2. THE PROBLEM */}
      <ClaritySection
        id="problem"
        badge="02 • The Problem"
        title="The problem being solved, and why was it important"
        description={
          <>
            <p>
              Independent service providers were losing 5+ hours every weekend juggling bank SMS receipts, WhatsApp screenshots, and spreadsheets. Chasing clients for renewal was emotionally uncomfortable and led to massive revenue leakage.
            </p>
            <p className="font-semibold text-gray-900">
              The real issue was emotional friction: asking students for overdue money felt predatory to teachers, causing them to delay reminders until memberships silently lapsed.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "Fragmented Record Chaos",
            desc: "Instructors manually cross-referenced UPI bank SMS alerts against WhatsApp screenshots and static spreadsheet columns."
          },
          {
            number: "2",
            title: "The Emotional Chasing Barrier",
            desc: "Teachers felt embarrassed to ask students for overdue fees. Reminders were postponed until income was forfeited."
          },
          {
            number: "3",
            title: "Silent 25% Revenue Leakage",
            desc: "Up to one-quarter of active subscribers quietly slipped through the cracks with zero automated renewal warnings."
          }
        ]}
        ctaText="See My Approach"
        ctaAction={() => scrollTo("approach")}
        quoteTitle="The anxiety of fee collection"
        quoteDesc="I love teaching sunrise yoga. But by the 28th of every month, I got dread in my stomach thinking about who owes me money."
        authorName="Aditi Roy"
        authorRole="Pilates Instructor, Delhi"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 font-pj">
                Friction Analysis Breakdown
              </span>
              <span className="text-xs text-gray-500 font-mono">5+ hrs lost weekly</span>
            </div>

            <div className="space-y-3">
              <div className="p-4 bg-rose-50/70 border border-rose-200/80 rounded-xl">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs font-pj mb-1">
                  <AlertCircle className="w-4 h-4 text-rose-600" />
                  <span>Untracked Payment Screenshots</span>
                </div>
                <p className="text-xs text-rose-900/80 font-inter leading-relaxed">
                  "Students send UPI screenshots in personal chats. After 50 messages, they get buried and forgotten."
                </p>
              </div>

              <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl">
                <div className="flex items-center gap-2 text-amber-800 font-bold text-xs font-pj mb-1">
                  <MessageSquare className="w-4 h-4 text-amber-600" />
                  <span>The Social Chasing Burden</span>
                </div>
                <p className="text-xs text-amber-900/80 font-inter leading-relaxed">
                  "Reminding students makes me feel like a debt collector. I'd rather lose ₹2,000 than have an awkward conversation."
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="flex items-center gap-2 text-gray-800 font-bold text-xs font-pj mb-1">
                  <TrendingUp className="w-4 h-4 text-gray-600" />
                  <span>Spreadsheet Drop-off & Outdated Rosters</span>
                </div>
                <p className="text-xs text-gray-600 font-inter leading-relaxed">
                  "Keeping Google Sheets updated on a phone screen between classes is impossible."
                </p>
              </div>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  The Problem Space: Research Evidence & Friction Audit
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Evidence Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="Friction Evidence"
                metadata="40+ Unlabelled Slips"
                title="WhatsApp Screenshot Chaos Audit"
                caption="Analysis of raw instructor chat galleries flooded with unconfirmed UPI screenshots from disparate payment apps."
                illustration={<WhatsAppScreenshotAuditArtifact />}
              />
              <ImagePlaceholderCard
                tag="Spreadsheet Trap"
                metadata="Google Sheets Audit"
                title="Manual Spreadsheet Desync"
                caption="Audit of manual spreadsheet tracking revealing formula breakage, date discrepancies, and abandoned rosters."
                illustration={<SpreadsheetChaosArtifact />}
              />
              <ImagePlaceholderCard
                tag="Churn Curve"
                metadata="-25% Revenue Leakage"
                title="Silent Subscription Drop-off"
                caption="Cohort retention drop-off curve illustrating how failure to nudge students within 48 hours leads to permanent churn."
                illustration={<SubscriptionDropoffArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 3. THE APPROACH */}
      <ClaritySection
        id="approach"
        badge="03 • The Approach"
        title="The approach I took: Rapid field discovery & co-design"
        description={
          <>
            <p>
              To move fast without sacrificing depth, I implemented a lean, user-centered 0→1 framework grounded in in-context shadowing, rapid paper co-design sessions, and tight engineering token handoffs.
            </p>
            <p className="font-semibold text-gray-900">
              Rather than sending detached surveys, I shadowed 8 instructors across 12 live classes, observing payment friction at the moment of exchange.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "In-Context Shadowing",
            desc: "Watched instructors handle drop-ins and monthly renewals live to map true mental models versus claimed behavior."
          },
          {
            number: "2",
            title: "Paper Co-Design Sprints",
            desc: "Sketched rapid paper prototypes with co-founders, ruthlessly eliminating enterprise accounting bloat."
          },
          {
            number: "3",
            title: "Developer Token Handoff",
            desc: "Delivered 32 semantic tokens in Figma and paired directly with interns inside FlutterFlow."
          }
        ]}
        ctaText="View Key Findings"
        ctaAction={() => scrollTo("findings")}
        quoteTitle="Radical simplification"
        quoteDesc="At the 0→1 stage, removing unnecessary complexity is 10x more impactful than adding another settings screen. If it doesn't collect money, cut it."
        authorName="Design Process"
        authorRole="0→1 Lean Framework"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 font-pj mb-2">
              4-Phase Product Design Framework
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Phase 01</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">In-Context Shadowing</h5>
                <p className="text-[11px] text-gray-600 mt-1 font-inter">8 instructors, 12 sessions, field audio recordings</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Phase 02</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">Paper Co-Design</h5>
                <p className="text-[11px] text-gray-600 mt-1 font-inter">3 core user flows validated on paper in 48 hours</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Phase 03</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">Atomic Design Tokens</h5>
                <p className="text-[11px] text-gray-600 mt-1 font-inter">32 semantic color & typography tokens in Figma</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Phase 04</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">Dev Pairing & Handoff</h5>
                <p className="text-[11px] text-gray-600 mt-1 font-inter">FlutterFlow theme variables + sprint QA checks</p>
              </div>
            </div>

            <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800 font-pj font-bold">
              <span>Outcome: Zero design debt during engineering</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  The Approach: Field Research & Co-Design Artifacts
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Process Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="Field Research"
                metadata="12 Studio Sessions"
                title="In-Context Studio Observation Log"
                caption="Direct field inquiry documenting real-time payment scramble moments during morning rush classes."
                illustration={<InContextShadowingArtifact />}
              />
              <ImagePlaceholderCard
                tag="Rapid Co-Design"
                metadata="48-Hour Low-Fi Sprint"
                title="Low-Fidelity Paper Wireframes"
                caption="Quick paper prototypes testing 30-second pass creation and minimal friction payment links with teachers."
                illustration={<PaperWireframesArtifact />}
              />
              <ImagePlaceholderCard
                tag="Design System"
                metadata="32 Semantic Tokens"
                title="Atomic Design Tokens Spec"
                caption="Figma variables mapping colors, type scales, and interaction states seamlessly into FlutterFlow."
                illustration={<FigmaTokensArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 4. THE FINDING */}
      <ClaritySection
        id="findings"
        badge="04 • The Finding"
        title="The finding: What qualitative synthesis uncovered"
        description={
          <>
            <p>
              Direct field research and shadowing interviews with solo practitioners revealed three counter-intuitive insights that completely reshaped our product direction.
            </p>
            <p className="font-semibold text-gray-900">
              The pivotal breakthrough: Email invoices have a 14% open rate, whereas WhatsApp payment links achieve near 100% open rates with payments completed in under 90 seconds.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "Enterprise Billing Tools Overwhelm",
            desc: "Zoho, QuickBooks, and Razorpay induced cognitive paralysis with tax grids. Creators wanted a quick scalpel, not an enterprise ledger."
          },
          {
            number: "2",
            title: "WhatsApp Is The Living Room",
            desc: "Clients ignored email invoices. 1-tap WhatsApp UPI links were opened immediately and settled in under 90 seconds."
          },
          {
            number: "3",
            title: "Automated Reminders As Emotional Shield",
            desc: "When the system dispatches renewal notices, instructors feel dignified. It's the system speaking, not the teacher begging."
          }
        ]}
        ctaText="See Shipped Solutions"
        ctaAction={() => scrollTo("solutions")}
        quoteTitle="1-Tap UPI vs Invoicing"
        quoteDesc="When Ho Saksham sent the polite WhatsApp link, 94% of my students renewed within 15 minutes. It took the entire burden off my shoulders."
        authorName="Karan Mehta"
        authorRole="Piano & Vocal Coach"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600 font-pj">
                Communication Channel Synthesis
              </span>
              <span className="text-xs text-brand-primary font-bold font-mono">100% vs 14%</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 font-pj">Email Invoices</span>
                <div className="text-3xl font-bold text-gray-400 my-1 font-pj">14%</div>
                <p className="text-[11px] text-gray-500 font-inter">Open rate, 48hr average payment delay</p>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 font-pj">WhatsApp UPI Links</span>
                <div className="text-3xl font-bold text-emerald-600 my-1 font-pj">99%</div>
                <p className="text-[11px] text-emerald-700 font-inter">Open rate, 90s average completion</p>
              </div>
            </div>

            <div className="p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-xl">
              <h5 className="text-xs font-bold text-gray-900 font-pj mb-1">
                The Emotional Shield Effect
              </h5>
              <p className="text-xs text-gray-600 font-inter leading-relaxed">
                "When the reminder comes from 'Ho Saksham Bot', the student doesn't feel offended. They just tap UPI and renew."
              </p>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  Key Findings & Psychological Syntheses
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Research Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="Conversion Latency"
                metadata="Email vs WhatsApp"
                title="Channel Latency Comparative Matrix"
                caption="Rigorous comparative analysis revealing 99% open rates on WhatsApp vs 14% on email billing tools."
                illustration={<ChannelComparisonArtifact />}
              />
              <ImagePlaceholderCard
                tag="User Persona"
                metadata="Validated Profile"
                title="Priya Sharma: Solo Instructor Persona"
                caption="Comprehensive empathy map and persona detailing billing anxiety and daily smartphone-driven workflow."
                illustration={<PersonaProfileArtifact />}
              />
              <ImagePlaceholderCard
                tag="Mental Model"
                metadata="Buffer Architecture"
                title="The 'Polite Shield' Emotional Buffer"
                caption="System model demonstrating how an automated third-party sender preserves the sacred teacher-student bond."
                illustration={<PoliteShieldArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 5. THE SOLUTIONS */}
      <ClaritySection
        id="solutions"
        badge="05 • The Solutions"
        title="The solutions: Radical simplicity for recurring income"
        description={
          <>
            <p>
              We designed a lightweight, credit-only subscription management platform centered on three radical interaction principles: 30-second plan creation, polite automated WhatsApp nudges, and a glanceable single-screen operational view.
            </p>
            <p className="font-semibold text-gray-900">
              Credit-Only Philosophy: No expense tracking, no debit language, no negative red balances. Only green incoming revenue.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "30-Second Plan Builder",
            desc: "Instructors create recurring subscription passes with 1-tap UPI deep links and QR codes in half a minute."
          },
          {
            number: "2",
            title: "Automated Polite WhatsApp Nudges",
            desc: "The system automatically dispatches courteous renewal notifications 3 days before expiry."
          },
          {
            number: "3",
            title: "Single-View Green Inflow Dashboard",
            desc: "A clean overview displaying active students, expected renewals, and collected funds without confusing ledgers."
          }
        ]}
        ctaText="Try Live Prototype"
        ctaAction={() => scrollTo("prototype")}
        quoteTitle="Credit-only philosophy"
        quoteDesc="No expenses, no tax deduction fields, no negative red numbers. Money flows in — never out. This single constraint became the product's personality."
        authorName="Product Direction"
        authorRole="Design Strategy"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 font-pj mb-2">
              Shipped Core Interfaces
            </h4>

            <div className="space-y-3">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-gray-900 font-pj">1. 30-Second Plan Creator</h5>
                  <p className="text-[11px] text-gray-500 font-inter">Title, fee, cycle frequency, and 1-tap UPI deep link</p>
                </div>
                <span className="text-[10px] font-bold bg-white px-2.5 py-1 rounded border border-gray-200 font-mono">
                  30s Flow
                </span>
              </div>

              <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-emerald-900 font-pj">2. WhatsApp Bot Reminder</h5>
                  <p className="text-[11px] text-emerald-700 font-inter">"Hi Priya's student, your Yoga Pass renews in 3 days. Tap to pay ₹2,400."</p>
                </div>
                <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded font-mono">
                  Auto-Nudge
                </span>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-gray-900 font-pj">3. Glanceable Green Inflow View</h5>
                  <p className="text-[11px] text-gray-500 font-inter">Total students (34 active), ₹81,600 expected this month</p>
                </div>
                <span className="text-[10px] font-bold bg-white px-2.5 py-1 rounded border border-gray-200 font-mono">
                  Real-Time
                </span>
              </div>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  The Shipped Solution: Core Production Flows
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Production Screens</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="UI Flow Artifact"
                metadata="30s Pass Creator"
                title="Pass Creation & Pricing Interface"
                caption="3-step mobile builder enabling solo instructors to configure a pass, set cycles, and generate UPI links in under 30 seconds."
                illustration={<PlanCreatorScreensArtifact />}
              />
              <ImagePlaceholderCard
                tag="Conversational UI"
                metadata="Verified WhatsApp Bot"
                title="Automated Courteous WhatsApp Nudge"
                caption="Conversational WhatsApp UI with courteous phrasing, verified business badge, and 1-tap UPI deep-link button."
                illustration={<WhatsAppInteractiveArtifact />}
              />
              <ImagePlaceholderCard
                tag="Inflow Ledger"
                metadata="Zero Debit Philosophy"
                title="Real-Time Green Inflow Overview"
                caption="Operational view designed around positive income only, completely free of negative red debits and confusing tax deductions."
                illustration={<GreenLedgerArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 6. THE LIVE PROTOTYPE */}
      <ClaritySection
        id="prototype"
        badge="Live Interactive Prototype"
        title="Try the functional prototype in real time"
        description={
          <>
            <p>
              Interact with the actual production-fidelity prototype designed for Hosaksham. Click through student subscription passes, toggle renewal statuses, and preview automated WhatsApp reminders.
            </p>
            <p className="font-semibold text-gray-900">
              Designed desktop-first and mobile-responsive so instructors can manage their studio directly from a smartphone between classes.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "Interactive Plan Creator",
            desc: "Test creating monthly and quarterly subscription passes with real-time fee calculations."
          },
          {
            number: "2",
            title: "WhatsApp Reminder Preview",
            desc: "Preview the exact polite message sent to students to trigger 1-tap UPI payments."
          },
          {
            number: "3",
            title: "Single-Screen Operational Control",
            desc: "Filter active, overdue, and paused memberships directly from the dashboard."
          }
        ]}
        ctaText="See Results & Impact"
        ctaAction={() => scrollTo("results")}
        quoteTitle="The shipped product experience"
        quoteDesc="The shipped product matched the Figma designs closely because the developer interns had been given the right token system and context to use it."
        authorName="Production Build"
        authorRole="React + FlutterFlow Tokens"
        illustration={
          <div className="w-full bg-gray-900 p-2 sm:p-3 rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
            <div className="h-7 bg-gray-800 rounded-t-xl flex items-center px-3 gap-1.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 text-[10px] font-mono text-gray-400">hosaksham.app // preview</span>
            </div>
            <div className="bg-white rounded-xl overflow-hidden min-h-[480px]">
              <HoshakshamApp />
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  Mobile Architecture & Micro-Interactions
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">2 Interaction Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="App Hierarchy"
                metadata="2-Tap Architecture"
                title="Mobile Screen & Navigation Hierarchy"
                caption="Structural diagram highlighting zero-subsheet philosophy designed for quick mobile updates between classes."
                illustration={<ScreenArchitectureArtifact />}
              />
              <ImagePlaceholderCard
                tag="Interaction States"
                metadata="Haptics & Feedback"
                title="Micro-Interactions & State Transitions"
                caption="Tactile button states, haptic triggers, and real-time confirmation checks reassuring instructors when reminders fire."
                illustration={<MicroInteractionsArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 7. THE RESULT */}
      <ClaritySection
        id="results"
        badge="06 • The Result"
        title="The result: Quantitative and emotional transformation"
        description={
          <>
            <p>
              Launching the MVP across initial beta cohorts yielded immediate quantitative time savings and emotional relief for independent service providers.
            </p>
            <p className="font-semibold text-gray-900">
              Instructors reclaimed an average of 4.5 hours every week, and on-time renewal rates jumped from 72% to 98%.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "100+ Beta Instructors",
            desc: "Organic adoption across yoga studios, tutors, and coaches solely through peer recommendations."
          },
          {
            number: "2",
            title: "85% Administrative Time Saved",
            desc: "Weekly payment tracking and reconciliation dropped from 5+ hours down to less than 15 minutes."
          },
          {
            number: "3",
            title: "98% On-Time Subscription Renewals",
            desc: "Automated WhatsApp nudges and 1-tap UPI payments practically eliminated delayed payments."
          }
        ]}
        ctaText="View Learnings & Roadmap"
        ctaAction={() => scrollTo("learnings")}
        quoteTitle="Freedom to focus on teaching"
        quoteDesc="I haven't opened Excel in 3 months. I just teach yoga, and the fees show up in my account on the first of every month."
        authorName="Priya Sharma"
        authorRole="Founder, Prana Flow Yoga"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 font-pj mb-2">
              Quantitative Beta Scorecard
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                <div className="text-3xl font-bold text-emerald-600 font-pj">85%</div>
                <p className="text-xs font-bold text-gray-900 mt-1 font-pj">Admin Time Saved</p>
                <p className="text-[11px] text-gray-500 font-inter">5 hrs down to 15 mins</p>
              </div>

              <div className="p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-xl text-center">
                <div className="text-3xl font-bold text-brand-primary font-pj">98%</div>
                <p className="text-xs font-bold text-gray-900 mt-1 font-pj">On-Time Renewals</p>
                <p className="text-[11px] text-gray-500 font-inter">Up from 72% baseline</p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <div className="text-3xl font-bold text-gray-900 font-pj">100+</div>
                <p className="text-xs font-bold text-gray-900 mt-1 font-pj">Beta Instructors</p>
                <p className="text-[11px] text-gray-500 font-inter">100% organic peer referral</p>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-center">
                <div className="text-3xl font-bold text-amber-600 font-pj">+74</div>
                <p className="text-xs font-bold text-gray-900 mt-1 font-pj">Net Promoter Score</p>
                <p className="text-[11px] text-gray-500 font-inter">High creator love</p>
              </div>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  Post-Launch Impact & Metric Verification
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Quantitative Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="Efficiency Metric"
                metadata="85% Time Saved"
                title="Weekly Administrative Time Reclaimed"
                caption="Before-and-after tracking graph showing reduction from 5.2 hours of manual WhatsApp chasing to 12 minutes."
                illustration={<TimeSavingsChartArtifact />}
              />
              <ImagePlaceholderCard
                tag="Retention Lift"
                metadata="90-Day Cohort"
                title="Cohort Renewal Rate Trajectory"
                caption="90-day beta progression charting on-time subscription renewals climbing from 72% baseline to 98%."
                illustration={<RenewalGrowthCurveArtifact />}
              />
              <ImagePlaceholderCard
                tag="Qualitative Voice"
                metadata="NPS +74"
                title="Verified Creator Testimonial Transcripts"
                caption="Qualitative feedback cards highlighting emotional relief, eliminated awkwardness, and financial predictability."
                illustration={<TestimonialCardsArtifact />}
              />
            </div>
          </div>
        }
      />

      {/* 8. THE LEARNING AND NEXT STEPS */}
      <ClaritySection
        id="learnings"
        badge="07 • Learnings & Next Steps"
        title="The learning and next steps: Retrospective & roadmap"
        description={
          <>
            <p>
              Leading design at an early-stage startup taught me that saying no to non-essential features is the highest-leverage design decision a founding team can make.
            </p>
            <p className="font-semibold text-gray-900">
              Future roadmap items prioritize deepening financial predictability with automated calendar sync and 1-click tax receipts.
            </p>
          </>
        }
        bullets={[
          {
            number: "1",
            title: "Radical Subtraction is Power",
            desc: "Saying no to calendar integrations, CRM tags, and invoice PDFs kept the user experience effortless and fast to ship."
          },
          {
            number: "2",
            title: "Design Systems Fuel Velocity",
            desc: "Teaching developer interns token-based Figma components reduced revision cycles from days to hours."
          },
          {
            number: "3",
            title: "Strategic Product Roadmap",
            desc: "Upcoming releases include multi-currency international UPI, Google Calendar batch sync, and 1-click GST receipts."
          }
        ]}
        ctaText="Back to Top"
        ctaAction={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        quoteTitle="Design leadership takeaway"
        quoteDesc="Sure, the structure might not be perfect. But just like Ho Saksham, we made it work with what we had — and here we are."
        authorName="Shyani Pal"
        authorRole="UX Leadership Reflection"
        illustration={
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 font-pj mb-2">
              Future Roadmap & Scale Architecture
            </h4>

            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Q1 Milestone</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">International Multi-Currency UPI</h5>
                <p className="text-[11px] text-gray-500 font-inter mt-0.5">Enabling overseas students in UK/US to pay Indian yoga tutors with zero forex hassle.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Q2 Milestone</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">Google Calendar Batch Sync</h5>
                <p className="text-[11px] text-gray-500 font-inter mt-0.5">Auto-attendance tracking by syncing class invite RSVPs directly with plan renewals.</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary font-pj">Q3 Milestone</span>
                <h5 className="text-xs font-bold text-gray-900 mt-1 font-pj">1-Click GST & Tax Invoicing</h5>
                <p className="text-[11px] text-gray-500 font-inter mt-0.5">Compliant receipts and annual income certificates for higher-bracket corporate tutors.</p>
              </div>
            </div>
          </div>
        }
        bottomContent={
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-primary" />
                <h3 className="text-xs sm:text-sm font-bold text-gray-900 font-pj uppercase tracking-wider">
                  Hosaksham 2.0: Future Roadmap & Scale Concepts
                </h3>
              </div>
              <span className="text-[11px] text-gray-500 font-mono">3 Roadmap Artifacts</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              <ImagePlaceholderCard
                tag="Cross-Border UPI"
                metadata="Q1 Concept Spec"
                title="International Multi-Currency Checkout"
                caption="Exploratory wireframe enabling diaspora students in US/UK to pay Indian yoga tutors in USD/GBP with automatic forex conversion."
                illustration={<MultiCurrencyWireframeArtifact />}
              />
              <ImagePlaceholderCard
                tag="Attendance Sync"
                metadata="Q2 Calendar Spec"
                title="Google Calendar Batch Attendance Sync"
                caption="Calendar integration concept mapping class invite RSVPs to auto-decrement remaining student drop-in passes."
                illustration={<CalendarAttendanceArtifact />}
              />
              <ImagePlaceholderCard
                tag="Financial Tooling"
                metadata="Q3 Tax Export"
                title="1-Click Fiscal & Tax Invoicing Engine"
                caption="Single-tap fiscal statements enabling freelance creators to generate compliant annual income receipts for tax filing."
                illustration={<TaxStatementExportArtifact />}
              />
            </div>
          </div>
        }
      />
    </div>
  );
}
