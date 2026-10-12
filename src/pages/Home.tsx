import Hero from "../components/Hero";
import About from "../components/About";
import CreativeSection from "../components/CreativeSection";
import Fun from "../components/Fun";
import Footer from "../components/Footer";
import ContentSection from "../components/ui/content-block";
import CodeFeedbackSection from "../components/CodeFeedbackSection";
import FyleSection from "../components/FyleSection";
import { motion, useScroll, useSpring } from "motion/react";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const easeOutCurve = [0.23, 1, 0.32, 1] as const;

  return (
    <div className="relative font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main className="space-y-4 md:space-y-8">
        <Hero />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: easeOutCurve }}
        >
          <About />
        </motion.div>
        
        {/* Work Section / Selected Case Studies */}
        <div id="work" className="scroll-mt-24 pt-6 md:pt-10">
          <div className="container mx-auto px-6 max-w-7xl mb-4 md:mb-8 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-[1.12]">
              Case studies in craft & complex systems
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 font-normal mt-3 max-w-2xl leading-relaxed">
              Automotive operating system tooling at Mercedes-Benz, 0→1 fintech SaaS for solo operators, and high-volume B2B expense infrastructure.
            </p>
          </div>

          {/* Content Section / Mercedes-Benz OS Tooling Case Study */}
          <motion.section 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.32, ease: easeOutCurve }}
            className="py-6 md:py-10 bg-white"
          >
            <div className="container mx-auto px-6 max-w-7xl">
              <ContentSection />
            </div>
          </motion.section>

          {/* Code Feedback / Hoshaksham 0 -> 1 Case Study Section */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.32, ease: easeOutCurve }}
          >
            <CodeFeedbackSection />
          </motion.div>

          {/* Fyle B2B Expense Management Case Study */}
          <motion.section 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.32, ease: easeOutCurve }}
            className="py-6 md:py-10 bg-white"
          >
            <div className="container mx-auto px-6 max-w-7xl">
              <FyleSection />
            </div>
          </motion.section>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: easeOutCurve }}
        >
          <CreativeSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.32, ease: easeOutCurve }}
        >
          <Fun />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
