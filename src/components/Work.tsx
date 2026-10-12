import { motion } from "motion/react";
import { ArrowRight, Sparkles, Globe, Layout, Zap, Lock, ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import HoshakshamApp from "./HoshakshamApp";
import FyleWebApp from "./FyleWebApp";
import FyleReimbursementApp from "./FyleReimbursementApp";
import FyleCampaignHero from "./FyleCampaignHero";
import MercedesApp from "./MercedesApp";

const CASE_STUDIES = [
  {
    id: "fyle",
    year: "2020",
    title: "Fyle — Bulk Mileage Expense Report",
    subtitle: "Solving for 500+ users filing mileage expenses one painful entry at a time.",
    category: "Fintech • SaaS • Case Study",
    role: "End-to-End Designer",
    impact: "93% reduction in filing time",
    link: "/case-study/fyle",
    featured: true,
    component: <FyleReimbursementApp />,
    type: "web",
    color: "bg-zinc-900"
  },
  {
    id: "fyle-webapp",
    year: "2021",
    title: "Fyle — Expense & Reimbursement Web App",
    subtitle: "Enterprise-scale expense dashboard with real-time multi-currency conversion, instant approvals, and automated reporting.",
    category: "Fintech • SaaS • Interactive System",
    role: "Product Designer & Front-End Architecture",
    impact: "85% faster expense reconciliation",
    link: "/case-study/fyle#prototype",
    featured: false,
    component: <FyleWebApp />,
    type: "web",
    color: "bg-[#F8F9FB]"
  },
  {
    id: "fyle-campaign",
    year: "2021",
    title: "Fyle — Campaign & Automation Builder",
    subtitle: "Developer-first email campaign and marketing automation platform with zero-friction sandbox onboarding.",
    category: "Fintech • SaaS • Growth & Acquisition",
    role: "Lead Product Designer",
    impact: "3.8x trial sign-up lift",
    link: "/case-study/fyle#campaign",
    featured: false,
    component: <FyleCampaignHero />,
    type: "web",
    color: "bg-gray-50"
  },
  {
    id: "hoshaksham",
    year: "2024",
    title: "Hoshaksham — Service & Subscription Platform",
    subtitle: "Automating recurring subscriptions, Zen-mode inflows, and WhatsApp receipts for independent tutors and fitness teachers.",
    category: "Fintech • SaaS • 0 → 1",
    role: "Founding Lead Designer",
    impact: "0 spreadsheets & 98% faster admin",
    link: "https://spfolio.framer.ai/hosaksham-case-study",
    featured: false,
    component: <HoshakshamApp />,
    type: "web",
    color: "bg-zinc-50"
  },
  {
    id: "mercedes",
    year: "2025",
    title: "Mercedes Benz — Internal Tool",
    subtitle: "Streamlining complex workflows and data visualization for engineering teams.",
    category: "Enterprise • Internal Tool",
    role: "Sr. Product Designer",
    impact: "40% faster handover",
    link: "/case-study/mercedes",
    featured: false,
    component: <MercedesApp />,
    type: "web",
    color: "bg-zinc-50"
  }
];

export default function Work() {
  const [isMercedesUnlocked, setIsMercedesUnlocked] = React.useState(() => {
    return sessionStorage.getItem("mercedes_unlocked") === "true";
  });
  const [inlinePassword, setInlinePassword] = React.useState("");
  const [inlineError, setInlineError] = React.useState("");

  const handleInlineUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPass = inlinePassword.trim().toLowerCase();
    if (["mercedes", "amg2025", "benz", "shyanipal", "amg", "1234"].includes(cleanPass)) {
      setIsMercedesUnlocked(true);
      sessionStorage.setItem("mercedes_unlocked", "true");
      setInlineError("");
    } else {
      setInlineError("Wrong code.");
    }
  };

  React.useEffect(() => {
    const handleStorageChange = () => {
      setIsMercedesUnlocked(sessionStorage.getItem("mercedes_unlocked") === "true");
    };
    window.addEventListener("storage", handleStorageChange);
    const checkInterval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(checkInterval);
    };
  }, []);

  return (
    <section id="work" className="py-32 bg-white scroll-mt-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-[1px] bg-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-primary">Selected Works</span>
            </div>
            <h2 className="font-header text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85]">
              Design stories that <br />
              <span className="text-brand-primary font-accent lowercase">moved the needle</span>.
            </h2>
            <p className="text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
              Every case study is a business problem first. From messy discovery to critical decisions and measurable outcomes.
            </p>
          </motion.div>
        </div>

        {/* Work Grid */}
        <div className="space-y-20 md:space-y-32">
          {CASE_STUDIES.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-center ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Visual Side */}
              <div className={`lg:col-span-7 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                <div className={`relative rounded-[40px] md:rounded-[60px] overflow-hidden ${project.color} border border-zinc-100 shadow-sm group cursor-pointer`}>
                  {(project as any).video ? (
                    <div className="aspect-[16/10] p-3 md:p-4">
                      <div className="w-full h-full rounded-[30px] md:rounded-[40px] overflow-hidden bg-zinc-800">
                        <video 
                          src={(project as any).video} 
                          autoPlay loop muted playsInline 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ) : project.component ? (
                    <div className="aspect-[4/3] md:aspect-[16/10] flex items-center justify-center p-3 md:p-12 bg-zinc-50 overflow-hidden">
                      <div className="w-full h-full bg-white rounded-xl md:rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col origin-center">
                        <div className="h-6 md:h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-3 md:px-4 gap-1 md:gap-1.5 shrink-0">
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-zinc-300" />
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-zinc-300" />
                          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-zinc-300" />
                        </div>
                        <div className="flex-1 overflow-hidden relative">
                          {project.id === "mercedes" && !isMercedesUnlocked ? (
                            <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden select-none">
                              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                              
                              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-3 text-red-400 bg-zinc-900 border border-zinc-800 shadow-lg">
                                <Lock className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
                              </div>

                              <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.25em] text-red-300 block mb-1">
                                NDA ENCRYPTED PREVIEW
                              </span>
                              <h4 className="text-sm md:text-base font-black text-white uppercase tracking-tight mb-3">
                                Access Restricted
                              </h4>

                              <form onSubmit={handleInlineUnlock} className="flex flex-col items-center gap-2 max-w-[240px] w-full z-10">
                                <input 
                                  type="text"
                                  style={{ WebkitTextSecurity: 'disc' } as any}
                                  placeholder="Clearance Passcode"
                                  value={inlinePassword}
                                  onChange={(e) => {
                                    setInlinePassword(e.target.value);
                                    if (inlineError) setInlineError("");
                                  }}
                                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-brand-primary placeholder-zinc-650 focus:outline-none rounded-xl py-2.5 px-4 text-xs md:text-sm text-center text-white font-mono transition-all"
                                  autoComplete="new-password"
                                />
                                {inlineError && (
                                  <span className="text-[10px] font-mono font-bold text-rose-400">{inlineError}</span>
                                )}
                                <button
                                  type="submit"
                                  className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl transition-all active:scale-[0.98]"
                                >
                                  Unlock Preview
                                </button>
                              </form>
                            </div>
                          ) : (
                            project.component
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-[16/10] flex items-center justify-center bg-zinc-50 border-2 border-dashed border-zinc-200">
                      <div className="text-center">
                        <p className="text-zinc-400 font-display font-bold uppercase tracking-widest text-sm italic">Coming Soon</p>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/5 transition-colors duration-500" />
                </div>
              </div>

              {/* Info Side */}
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-center gap-2.5">
                    <Badge variant="outline" className="font-mono text-brand-primary border-brand-primary/25 bg-brand-primary/5 text-xs py-0.5 px-2.5 rounded-full">
                      {project.year}
                    </Badge>
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted border border-border/60 rounded-full px-2.5 py-0.5">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-3xl md:text-5xl font-header font-black uppercase tracking-tighter leading-[0.9]">
                    {project.title.split(' — ')[0]} — <br />
                    <span className="text-brand-primary font-accent lowercase">{project.title.split(' — ')[1]}</span>
                  </h3>

                  <p className="text-base md:text-lg text-zinc-500 leading-relaxed font-medium">
                    {project.subtitle}
                  </p>

                  <div className="grid grid-cols-2 gap-4 md:gap-6 p-4 md:p-5 rounded-2xl bg-card border border-border/80 shadow-2xs">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Role</p>
                      <p className="text-xs md:text-sm font-bold text-foreground">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Impact</p>
                      <p className="text-xs md:text-sm font-bold text-brand-primary">{project.impact}</p>
                    </div>
                  </div>

                  <div>
                    {project.link.startsWith("http") ? (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3.5 bg-foreground text-background px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all shadow-xs hover:shadow-sm active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <span>View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <Link 
                        to={project.link}
                        className="group w-full md:w-auto inline-flex items-center justify-center gap-3.5 bg-foreground text-background px-7 py-3.5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all shadow-xs hover:shadow-sm active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {project.id === "mercedes" && (
                          <Lock className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                        )}
                        <span>{project.id === "mercedes" ? "Unlock Case Study" : "View Case Study"}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


