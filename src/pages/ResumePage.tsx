import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Download, Mail, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const RESUME_DATA = {
  name: "Shyani Pal",
  title: "Senior Product Designer",
  subtitle: "Mobile UX · Design Systems · Human-Centered Experiences",
  contact: {
    location: "Bengaluru, India",
    phone: "+917059625550",
    email: "shyanipal06@gmail.com",
    linkedin: "linkedin.com/in/shyani",
  },
  about: "Product Designer with 5+ years of experience crafting thoughtful digital experiences across mobile, SaaS, and enterprise platforms. My work blends interaction design, visual craft, and systems thinking to create products that are both intuitive and emotionally engaging. I enjoy turning complex ideas into simple, elegant experiences and collaborating closely with engineers to bring high-quality designs to life.",
  experience: [
    {
      company: "Mercedes-Benz R&D, Bangalore",
      role: "UX Designer (Contract)",
      period: "Mar 2025 – Present",
      points: [
        "Designing user experiences that improve mobile-vehicle integration through Android Auto and Apple CarPlay.",
        "Collaborating with cross-functional teams across product, engineering, and global design teams to deliver production-ready UX solutions.",
        "Translating complex automotive system requirements into clear interaction models and intuitive user flows.",
        "Contributing to scalable UX patterns that ensure consistency across connected mobility experiences.",
      ],
    },
    {
      company: "HoShaksham, Remote",
      role: "Product designer (UI/UX)",
      period: "June 2024 - Aug 2024",
      caseStudyLink: "https://spfolio.framer.ai/hosaksham-case-study",
      points: [
        "Designed mobile and web apps enabling service providers to manage offerings, subscribers, and workflows.",
        "Owned the full design lifecycle from discovery to launch.",
        "The application reached 100+ downloads shortly after launch, validating usability and early product-market fit.",
        "Balanced functional clarity with engagement-driven design patterns.",
      ],
    },
    {
      company: "Flits, Gujrat",
      role: "Product designer (UI/UX)",
      period: "February 2021 - January 2022",
      points: [
        "Redesigned customer account experiences for Shopify merchants, improving usability and engagement.",
        "Created responsive UI flows optimised for both desktop and mobile environments.",
        "Introduced reusable UI components to streamline future design iterations.",
      ],
    },
    {
      company: "Fyle, Bengaluru",
      role: "Product designer",
      period: "August 2019 - November 2020",
      caseStudyLink: "https://heyshyani.design/fyle-case-study.html",
      points: [
        "Designed features that enabled employees to claim over £395+ monthly reimbursements efficiently.",
        "Built and improved components within the design system, improving cross-platform consistency.",
        "Redesigned key product icons and UI elements, reducing onboarding friction and improving usability.",
        "Designed bulk mileage reimbursement workflows, enabling employees to claim £3,000+ monthly in reimbursements.",
        "Worked closely with engineering to ensure pixel-perfect implementation and scalable UX patterns.",
      ],
    },
    {
      company: "Mayadata",
      role: "Product Designer",
      period: "July 2018 – March 2019",
      points: [
        "Improved usability of complex infrastructure workflows through clear information architecture and interaction design.",
        "Collaborated with engineering teams to design data-heavy enterprise dashboards.",
        "Helped translate technical workflows into intuitive developer experiences.",
      ],
    },
  ],
  education: [
    {
      school: "Bournemouth University, Bournemouth, UK",
      degree: "MSc: Marketing And User Experience",
      period: "January 2022 - September 2023",
      details: "Focus areas: User-centred design, heuristic analysis, WCAG accessibility and inclusive design, Human-Computer Interaction, UX research methodologies, marketing strategy, and usability evaluation",
    },
    {
      school: "NSHM Knowledge Campus, Kolkata, India",
      degree: "BSc: Multimedia, Animation and Graphic Design",
      period: "April 2015 - June 2018",
    },
  ],
  achievements: [
    {
      title: "Top Animation Contributor · LottieFiles",
      description: "Recognised as a Top Animation Contributor on LottieFiles",
    },
    {
      title: "AI-Powered Game Design",
      description: "Built an interactive game using AI tools, personal creative projects.",
      links: [
        "https://impossible-tic-tac-toe-with-ai.vercel.app/",
        "https://the-snake-game-coral.vercel.app/",
      ],
    },
  ],
  skills: [
    {
      category: "Product Design",
      items: "End-to-end UX, interaction design, design systems, IA, 0→1 product definition, fintech flows",
    },
    {
      category: "Research & Delivery",
      items: "Usability testing, user research, journey mapping, accessibility (WCAG), data-informed iteration",
    },
    {
      category: "Tools",
      items: "Figma, FigJam, Framer, Miro, Maze, Jira, Notion, Confluence, Adobe Creative Cloud",
    },
  ],
};

export default function ResumePage() {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-brand-primary selection:text-white">
      {/* Header Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-primary font-bold uppercase tracking-widest text-[10px] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>
          
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors shadow-lg"
          >
            <Download className="w-3.5 h-3.5" />
            Print Resume
          </button>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-4 leading-none">
                {RESUME_DATA.name}
              </h1>
              <p className="text-lg font-bold text-brand-primary uppercase tracking-widest mb-8">
                {RESUME_DATA.subtitle}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 pt-8 border-t border-zinc-100">
                <div className="flex items-center gap-3 text-zinc-500">
                  <MapPin className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm font-medium">{RESUME_DATA.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  <Phone className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm font-medium">{RESUME_DATA.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  <Mail className="w-4 h-4 text-brand-primary" />
                  <a href={`mailto:${RESUME_DATA.contact.email}`} className="text-sm font-medium hover:text-brand-primary transition-colors">
                    {RESUME_DATA.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                  <Linkedin className="w-4 h-4 text-brand-primary" />
                  <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-brand-primary transition-colors">
                    {RESUME_DATA.contact.linkedin}
                  </a>
                </div>
              </div>
            </motion.div>
          </header>

          {/* About */}
          <section className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 mb-6 flex items-center gap-4">
              About
              <div className="h-[1px] flex-1 bg-zinc-100" />
            </h2>
            <p className="text-xl text-zinc-600 leading-relaxed font-medium">
              {RESUME_DATA.about}
            </p>
          </section>

          {/* Experience */}
          <section className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 mb-10 flex items-center gap-4">
              Experience
              <div className="h-[1px] flex-1 bg-zinc-100" />
            </h2>

            <div className="space-y-12">
              {RESUME_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-zinc-100">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-brand-primary" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-black uppercase tracking-tighter">
                        {exp.company}
                      </h3>
                      {exp.caseStudyLink && (
                        <a
                          href={exp.caseStudyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white border border-brand-primary/20 text-[10px] font-bold uppercase tracking-widest transition-all group"
                        >
                          <span>Case Study</span>
                          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="text-lg font-bold text-brand-primary mb-6 italic">
                    {exp.role}
                  </p>

                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-zinc-600 leading-relaxed">
                        <span className="text-brand-primary font-bold mt-1.5">•</span>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 mb-10 flex items-center gap-4">
              Education
              <div className="h-[1px] flex-1 bg-zinc-100" />
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESUME_DATA.education.map((edu, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4">{edu.period}</p>
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2 leading-tight">{edu.school}</h3>
                  <p className="text-brand-primary font-bold mb-4">{edu.degree}</p>
                  {edu.details && <p className="text-sm text-zinc-500 leading-relaxed">{edu.details}</p>}
                </div>
              ))}
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 mb-10 flex items-center gap-4">
              Achievements
              <div className="h-[1px] flex-1 bg-zinc-100" />
            </h2>

            <div className="space-y-8">
              {RESUME_DATA.achievements.map((ach, idx) => (
                <div key={idx} className="group">
                  <h3 className="text-xl font-black uppercase tracking-tighter mb-2 group-hover:text-brand-primary transition-colors">{ach.title}</h3>
                  <p className="text-zinc-600 font-medium mb-4">{ach.description}</p>
                  {ach.links && (
                    <div className="flex flex-wrap gap-4">
                      {ach.links.map((link, lIdx) => (
                        <a 
                          key={lIdx} 
                          href={link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-primary transition-colors underline decoration-zinc-200 underline-offset-4"
                        >
                          View Project
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-400 mb-10 flex items-center gap-4">
              Skills
              <div className="h-[1px] flex-1 bg-zinc-100" />
            </h2>

            <div className="space-y-8">
              {RESUME_DATA.skills.map((skill, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <h3 className="w-48 text-sm font-black uppercase tracking-widest text-zinc-900">{skill.category}</h3>
                  <p className="flex-1 text-zinc-600 font-medium leading-relaxed">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
