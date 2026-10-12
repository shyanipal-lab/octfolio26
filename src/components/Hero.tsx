import { motion } from "motion/react";
import { MousePointer2, Sparkles, ArrowRight, Ghost, Gamepad2, Grid3X3, LayoutGrid, Wallet } from "lucide-react";
import { GooeyText } from "./ui/gooey-text-morphing";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Link } from "react-router-dom";

const GAME_ITEMS = [
  {
    id: 1,
    name: "Snake Game",
    designation: "Classic Arcade",
    icon: Ghost,
    color: "bg-emerald-500",
    link: "/#fun-snake",
  },
  {
    id: 2,
    name: "Tic Tac Toe",
    designation: "Impossible AI",
    icon: Grid3X3,
    color: "bg-blue-500",
    link: "/#fun-tictactoe",
  },
  {
    id: 3,
    name: "Tetris",
    designation: "Brick Game",
    icon: LayoutGrid,
    color: "bg-purple-500",
    link: "/#fun-tetris",
  },
  {
    id: 4,
    name: "Split & Grow",
    designation: "Gamified Finance",
    icon: Wallet,
    color: "bg-orange-500",
    link: "/#fun-expense",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 miro-grid opacity-[0.1] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <div className="w-full">
            <div className="h-[100px] md:h-[160px] lg:h-[200px] flex items-center justify-center mb-6 md:mb-10">
              <GooeyText
                texts={["Design", "vibe", "coder", "only"]}
                morphTime={1}
                cooldownTime={0.5}
                className="font-header font-black uppercase tracking-tighter"
                textClassName="text-5xl sm:text-7xl md:text-8xl lg:text-[110px] text-center w-full flex justify-center"
              />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-xl text-zinc-500 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4 md:px-0"
            >
              <span className="font-accent text-brand-primary text-xl md:text-2xl lowercase">building connectivity</span> <span className="text-zinc-500 font-bold">@ Mercedes-Benz</span> <br className="hidden md:block" />
              I design enterprise, fintech, and mobility products used at scale. 
              UX strategy + strong craft — currently at Mercedes-Benz R&D, Bengaluru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
            >
              <Link to="/#work" className="w-full md:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto bg-foreground text-background px-9 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xs hover:bg-brand-primary hover:text-white transition-all active:translate-y-px flex items-center justify-center gap-3 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Explore Work
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              
              <div className="flex items-center gap-3 p-1.5 pl-3 pr-5 bg-card border-0 rounded-full shadow-2xs hover:shadow-xs transition-all">
                <AnimatedTooltip items={GAME_ITEMS} />
                <Link to="/#fun" className="group/games text-left ml-1 cursor-pointer">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-foreground group-hover/games:text-brand-primary transition-colors">Play Games</p>
                  <p className="text-[8px] font-medium text-muted-foreground uppercase tracking-widest">Beat the high score</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



