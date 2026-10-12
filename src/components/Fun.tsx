import { motion, AnimatePresence } from "motion/react";
import { Ghost, Sparkles, LayoutGrid, Gamepad2, Wallet } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import SnakeGame from "./SnakeGame";
import { BlockGame } from "./ui/block-game";
import TicTacToe from "./TicTacToe";
import DashboardDesktopShowcase from "./DashboardDesktopShowcase";

export default function Fun() {
  const [activeGame, setActiveGame] = useState<"snake" | "tetris" | "tictactoe" | "expense-tracker">("snake");
  const [isGameFocused, setIsGameFocused] = useState(false);
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsGameFocused(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isGameFocused) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isGameFocused]);

  useEffect(() => {
    setIsGameFocused(false);
  }, [activeGame]);

  useEffect(() => {
    if (hash === "#fun-snake") {
      setActiveGame("snake");
    } else if (hash === "#fun-tetris") {
      setActiveGame("tetris");
    } else if (hash === "#fun-tictactoe") {
      setActiveGame("tictactoe");
    } else if (hash === "#fun-expense") {
      setActiveGame("expense-tracker");
    }
  }, [hash]);

  return (
    <section id="fun" className="py-24 md:py-40 bg-white text-zinc-900 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start mb-6 md:mb-8"
            >
              <Badge variant="outline" className="gap-2 px-3 py-1 rounded-full border-border bg-card/80 text-muted-foreground shadow-2xs">
                <Ghost className="w-3.5 h-3.5 text-brand-primary" />
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Playground</span>
              </Badge>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl mb-8 md:mb-10 leading-tight"
            >
              Community of designers{' '}
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-12"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-1.svg"
                  alt="shape-1"
                />
              </span>{' '}
              made by designers{' '}
              <span className="inline">
                <img
                  className="inline w-auto h-8 sm:h-10 lg:h-11"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/shape-2.svg"
                  alt="shape-2"
                />
              </span>
            </motion.h2>

            <motion.div
              key={`desc-${activeGame}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10 md:mb-12"
            >
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed font-medium max-w-md mx-auto lg:mx-0">
                Take a break and play a quick game. Built with React for a quick mental reset.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 mb-10 md:mb-12">
              <button
                onClick={() => {
                  setActiveGame("snake");
                  navigate("#fun-snake");
                }}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all text-left shadow-2xs active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeGame === "snake" ? "border-foreground/30 bg-muted/40 ring-1 ring-foreground/10" : "border-border/80 bg-card hover:border-foreground/20 hover:bg-muted/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeGame === "snake" ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400" : "bg-muted text-muted-foreground"
                }`}>
                  <Ghost className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-bold text-foreground">Snake Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">High Score: 42</p>
                </div>
                {activeGame === "snake" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("tetris");
                  navigate("#fun-tetris");
                }}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all text-left shadow-2xs active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeGame === "tetris" ? "border-foreground/30 bg-muted/40 ring-1 ring-foreground/10" : "border-border/80 bg-card hover:border-foreground/20 hover:bg-muted/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeGame === "tetris" ? "bg-purple-500/20 text-purple-600 dark:text-purple-400" : "bg-muted text-muted-foreground"
                }`}>
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-bold text-foreground">Block Game</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Classic Tetris</p>
                </div>
                {activeGame === "tetris" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("tictactoe");
                  navigate("#fun-tictactoe");
                }}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all text-left shadow-2xs active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeGame === "tictactoe" ? "border-foreground/30 bg-muted/40 ring-1 ring-foreground/10" : "border-border/80 bg-card hover:border-foreground/20 hover:bg-muted/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeGame === "tictactoe" ? "bg-blue-500/20 text-blue-600 dark:text-blue-400" : "bg-muted text-muted-foreground"
                }`}>
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-bold text-foreground">Tic Tac Toe</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Impossible AI</p>
                </div>
                {activeGame === "tictactoe" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>

              <button
                onClick={() => {
                  setActiveGame("expense-tracker");
                  navigate("#fun-expense");
                }}
                className={`flex items-center gap-3.5 p-3.5 rounded-xl border transition-all text-left shadow-2xs active:translate-y-px outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  activeGame === "expense-tracker" ? "border-foreground/30 bg-muted/40 ring-1 ring-foreground/10" : "border-border/80 bg-card hover:border-foreground/20 hover:bg-muted/20"
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                  activeGame === "expense-tracker" ? "bg-orange-500/20 text-orange-600 dark:text-orange-400" : "bg-muted text-muted-foreground"
                }`}>
                  <Wallet className="w-4 h-4" />
                </div>
                <div className="text-left flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-foreground">Split & Grow</p>
                    <Badge variant="secondary" className="text-[9px] font-bold bg-brand-primary/10 text-brand-primary border-none px-1.5 py-0.5 rounded-full lowercase font-accent">Featured</Badge>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Gamified Expense Tracker</p>
                </div>
                {activeGame === "expense-tracker" && <Gamepad2 className="w-4 h-4 ml-auto text-brand-primary" />}
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-zinc-50 rounded-xl md:rounded-2xl flex items-center justify-center text-brand-primary border border-zinc-100">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-zinc-900">Ready to play?</p>
                <p className="text-[10px] md:text-xs text-zinc-400 font-medium tracking-widest uppercase">Select a game to start</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`relative w-full max-w-xl mx-auto transition-all duration-500 ${isGameFocused ? 'z-[100]' : 'z-10'}`}
          >
            {/* Focus Overlay Background */}
            <AnimatePresence>
              {isGameFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsGameFocused(false)}
                  className="fixed inset-0 bg-zinc-950/80 backdrop-blur-md z-[-1] cursor-zoom-out"
                />
              )}
            </AnimatePresence>

            {/* Invisible anchors for game-specific linking - moved here to lead to canvas */}
            <div id="fun-snake" className="absolute -top-20 left-0" />
            <div id="fun-tetris" className="absolute -top-20 left-0" />
            <div id="fun-tictactoe" className="absolute -top-20 left-0" />
            <div id="fun-expense" className="absolute -top-20 left-0" />

            <div 
              className={`relative group transition-all duration-500 ${isGameFocused ? 'scale-110 sm:scale-125' : 'hover:scale-[1.02]'}`}
              onClick={() => !isGameFocused && activeGame !== "expense-tracker" && setIsGameFocused(true)}
            >
              <AnimatePresence mode="wait">
                {activeGame === "snake" ? (
                  <motion.div
                    key="snake"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card p-4 md:p-7 rounded-[28px] md:rounded-[36px] shadow-xs border border-border ring-1 ring-foreground/5 relative"
                  >
                    <div className="scale-[0.8] sm:scale-100 origin-center">
                      <SnakeGame isFocused={isGameFocused} />
                    </div>
                  </motion.div>
                ) : activeGame === "tetris" ? (
                  <motion.div
                    key="tetris"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card p-4 md:p-7 rounded-[28px] md:rounded-[36px] shadow-xs border border-border ring-1 ring-foreground/5 overflow-hidden relative"
                  >
                    <div className="scale-[0.6] sm:scale-75 origin-top -mt-10 -mb-20">
                      <BlockGame isFocused={isGameFocused} />
                    </div>
                  </motion.div>
                ) : activeGame === "tictactoe" ? (
                  <motion.div
                    key="tictactoe"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card p-4 md:p-7 rounded-[28px] md:rounded-[36px] shadow-xs border border-border ring-1 ring-foreground/5 relative"
                  >
                    <div className="scale-[0.8] sm:scale-100 origin-center">
                      <TicTacToe isFocused={isGameFocused} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="expense"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <motion.div
                      key="desktop-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <div className="scale-[0.7] sm:scale-90 md:scale-100 origin-center">
                        <DashboardDesktopShowcase />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Focus Prompt Overlay */}
              {!isGameFocused && activeGame !== "expense-tracker" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px] rounded-[32px] md:rounded-[40px] flex flex-col items-center justify-center z-30 cursor-pointer group/overlay"
                >
                  <div className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 transform group-hover/overlay:scale-110 transition-transform">
                    <Gamepad2 className="w-5 h-5 text-brand-primary" />
                    Click to Play
                  </div>
                  <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] mt-4">Arrow keys will be enabled</p>
                </motion.div>
              )}
            </div>
            
            {/* Floating Instructions */}
            {activeGame !== "expense-tracker" && (
              <motion.div
                animate={{ y: isGameFocused ? 20 : [0, 10, 0] }}
                transition={{ duration: 3, repeat: isGameFocused ? 0 : Infinity }}
                className={`absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 glass px-4 py-3 md:px-6 md:py-4 rounded-2xl md:rounded-3xl shadow-2xl border border-zinc-100 bg-white/50 z-20 hidden sm:block transition-all duration-500 ${isGameFocused ? 'translate-y-10 opacity-0' : 'opacity-100'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 justify-center">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">↑</div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">←</div>
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">↓</div>
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-zinc-100 rounded flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-900">→</div>
                    </div>
                  </div>
                  <p className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Use Arrows</p>
                </div>
              </motion.div>
            )}

            {/* Exit Instruction */}
            <AnimatePresence>
              {isGameFocused && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-zinc-900/90 text-white px-6 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-2xl z-[110]"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold">ESC</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Press to exit game</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
