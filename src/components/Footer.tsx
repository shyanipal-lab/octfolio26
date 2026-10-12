import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Linkedin, Mail, FileText, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background text-foreground pt-12 pb-8 relative overflow-hidden rounded-t-[36px] md:rounded-t-[56px] border-t border-border">
      {/* Background Subtle Wash */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto pt-2">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <p className="text-muted-foreground font-medium text-xs md:text-sm">
                © {currentYear} Shyani. Built with passion & precision.
              </p>
              <p className="text-muted-foreground/70 text-[10px] font-medium italic max-w-md">
                Built with AI, for a better AI future. Supported by multiple AIs, excessive caffeine, and a highly questionable sleep schedule. ☕️🤖💤
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
