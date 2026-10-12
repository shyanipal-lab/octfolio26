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

  return (
    <div className="relative font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <main>
        <Hero />
        <About />
        
        {/* Content Section / Smart Editor Component before Case Studies */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <ContentSection />
          </div>
        </section>

        {/* Code Feedback Section */}
        <CodeFeedbackSection />

        {/* Fyle B2B Expense Management Case Study */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <FyleSection />
          </div>
        </section>

        <CreativeSection />
        <Fun />
      </main>
      <Footer />
    </div>
  );
}
