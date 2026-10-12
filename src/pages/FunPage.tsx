import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Ghost, Gamepad2, LayoutGrid, Wallet, ArrowRight, Grid3X3 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SnakeGame from "../components/SnakeGame";
import { BlockGame } from "../components/ui/block-game";
import TicTacToe from "../components/TicTacToe";
import DashboardDesktopShowcase from "../components/DashboardDesktopShowcase";

export default function FunPage() {
  const [activeGame, setActiveGame] = useState<"snake" | "tetris" | "tictactoe" | "expense-tracker">("snake");
  const { hash } = useLocation();
  const navigate = useNavigate();

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

  const games = [
    { id: "snake", name: "Snake Game", icon: Ghost, status: "Playable", color: "text-emerald-500", hash: "#fun-snake", desc: "Classic arcade snake game." },
    { id: "tetris", name: "Block Game", icon: LayoutGrid, status: "Playable", color: "text-purple-500", hash: "#fun-tetris", desc: "Classic block stacking puzzle." },
    { id: "tictactoe", name: "Tic Tac Toe", icon: Grid3X3, status: "Playable", color: "text-blue-500", hash: "#fun-tictactoe", desc: "Impossible AI opponent." },
    { id: "expense-tracker", name: "Split & Grow", icon: Wallet, status: "Featured", color: "text-orange-500", hash: "#fun-expense", desc: "Gamified expense tracker." },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-primary/20 selection:text-brand-primary">
      <main className="container mx-auto px-6 pt-32 pb-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-brand-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold uppercase tracking-widest">Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <Ghost className="w-4 h-4 text-brand-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">The Game Collection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.8]"
            >
              Level <br />
              <span className="text-brand-primary font-accent lowercase">Up</span> Your <br />
              <span className="text-zinc-300">Break</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-500 leading-relaxed mb-12 font-medium max-w-md"
            >
              A curated collection of mini-games built with React and Framer Motion. 
              Perfect for a quick mental reset between coding sessions.
            </motion.p>

            <div className="grid grid-cols-1 gap-4">
              {games.map((game, i) => (
                <motion.div
                  key={game.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => {
                    if (game.status === "Playable" || game.status === "Featured") {
                      setActiveGame(game.id as any);
                      navigate(game.hash);
                    }
                  }}
                  className={`glass p-6 rounded-2xl border transition-all cursor-pointer flex items-center justify-between group ${
                    activeGame === game.id 
                      ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_20px_rgba(246,133,27,0.1)]" 
                      : "border-zinc-100 hover:border-zinc-200"
                  } ${(game.status !== "Playable" && game.status !== "Featured") ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center transition-colors ${
                      activeGame === game.id ? "bg-brand-primary/20" : ""
                    } ${game.color}`}>
                      <game.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-zinc-900">{game.name}</p>
                        {game.status === "Featured" && (
                          <span className="text-[8px] font-black bg-brand-primary/10 text-brand-primary font-accent lowercase px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Featured</span>
                        )}
                      </div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{game.status}</p>
                    </div>
                  </div>
                  {(game.status === "Playable" || game.status === "Featured") && (
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      activeGame === game.id ? "bg-brand-primary text-white" : "bg-brand-primary/10 text-brand-primary opacity-0 group-hover:opacity-100"
                    }`}>
                      <Gamepad2 className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative sticky top-32"
          >
            <AnimatePresence mode="wait">
              {activeGame === "snake" ? (
                <motion.div
                  key="snake"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-500">
                        <Ghost className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Snake Game</h3>
                    </div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      High Score: 42
                    </div>
                  </div>
                  <SnakeGame />
                </motion.div>
              ) : activeGame === "tetris" ? (
                <motion.div
                  key="tetris"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-500">
                        <LayoutGrid className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Block Game</h3>
                    </div>
                  </div>
                  <div className="scale-75 origin-top -mt-10 -mb-20">
                    <BlockGame />
                  </div>
                </motion.div>
              ) : activeGame === "tictactoe" ? (
                <motion.div
                  key="tictactoe"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="glass p-8 rounded-[40px] shadow-2xl border border-zinc-100 bg-white/50"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-500">
                        <Grid3X3 className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Tic Tac Toe</h3>
                    </div>
                  </div>
                  <TicTacToe />
                </motion.div>
              ) : (
                <motion.div
                  key="expense"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="relative group"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                        <Wallet className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Split & Grow</h3>
                    </div>
                  </div>

                  <motion.div
                    key="desktop-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full"
                  >
                    <DashboardDesktopShowcase />
                  </motion.div>

                  <div className="mt-8 flex justify-center">
                    <Link 
                      to="/split-and-grow"
                      className="inline-flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-xl shadow-zinc-900/10 hover:shadow-brand-primary/20 group"
                    >
                      Launch Full App
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Floating Instructions */}
            {activeGame !== "expense-tracker" && (
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-10 -right-10 glass px-6 py-4 rounded-3xl shadow-2xl border border-zinc-100 bg-white/50 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-1 justify-center">
                      <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">↑</div>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">←</div>
                      <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">↓</div>
                      <div className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center text-[10px] font-bold text-zinc-900">→</div>
                    </div>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Use Arrows</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
