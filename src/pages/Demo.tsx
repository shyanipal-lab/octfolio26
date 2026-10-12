import GradientMenu from "@/components/ui/gradient-menu";
import { PortfolioGallery } from "@/components/ui/portfolio-gallery";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoGameControllerOutline, IoChatbubbleOutline } from 'react-icons/io5';

const DEMO_ITEMS = [
  { label: "Home", href: "/", icon: <IoHomeOutline />, id: "home", gradientFrom: '#037DD6', gradientTo: '#02c39a' },
  { label: "About", href: "/about", icon: <IoPersonOutline />, id: "about", gradientFrom: '#037DD6', gradientTo: '#F6851B' },
  { label: "Work", href: "/#work", icon: <IoBriefcaseOutline />, id: "work", gradientFrom: '#F6851B', gradientTo: '#FFD02F' },
  { label: "Games", href: "/fun", icon: <IoGameControllerOutline />, id: "fun", gradientFrom: '#0500FF', gradientTo: '#037DD6' },
  { label: "Chat", href: "/#contact", icon: <IoChatbubbleOutline />, id: "contact", gradientFrom: '#F6851B', gradientTo: '#f434e2' },
];

export default function Demo() {
  return (
    <div className="w-full min-h-screen bg-zinc-950 text-white flex flex-col">
      {/* Decorative Top Navigation Bar for Demonstration purposes */}
      <header className="w-full bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900 py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50">
        <Link 
          to="/" 
          className="group text-zinc-400 hover:text-white flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-brand-primary" />
          Back to Lab
        </Link>
        <span className="px-3 py-1 bg-brand-primary/10 text-brand-primary text-[10px] font-mono font-bold uppercase tracking-wider rounded-full border border-brand-primary/20">
          Component Sandbox
        </span>
      </header>

      {/* Main Demo Flow */}
      <main className="flex-1 w-full flex flex-col justify-between">
        {/* Interactive Floating Gradient Menu Demo */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center p-8 border-b border-zinc-900 relative">
          <div className="absolute top-12 text-center">
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-2">
              Gradient Navigation Menu
            </h1>
            <p className="text-xs text-zinc-500 font-semibold max-w-md mx-auto">
              Hover over each nav beacon to trigger the custom fluid dynamic background gradient expansion in real-time.
            </p>
          </div>
          <GradientMenu items={DEMO_ITEMS} />
        </section>

        {/* Brand New Portfolio Gallery Demo */}
        <PortfolioGallery 
          title="Archive Library" 
          archiveButton={{ text: "Back to Home", href: "/" }}
        />
      </main>
    </div>
  );
}
