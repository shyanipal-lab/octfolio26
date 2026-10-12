import { motion } from "motion/react";
import { Wallet, TrendingUp, Users, Trophy, Target, ArrowUpRight, ArrowDownRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function ExpenseTrackerShowcase() {
  const friends = [
    { name: "You", spent: 450, goal: 1000, status: "On Track", color: "bg-brand-primary" },
    { name: "Alex", spent: 820, goal: 1000, status: "Warning", color: "bg-red-500" },
    { name: "Sam", spent: 310, goal: 1000, status: "Top Saver", color: "bg-emerald-500" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[360px]">
      {/* iPhone Frame */}
      <div className="relative bg-zinc-900 rounded-[55px] p-3 shadow-2xl border-[6px] border-zinc-800 ring-1 ring-zinc-700/50 overflow-hidden">
        {/* Side Buttons */}
        <div className="absolute -left-[7px] top-24 w-[3px] h-8 bg-zinc-700 rounded-r-sm" /> {/* Action Button */}
        <div className="absolute -left-[7px] top-40 w-[3px] h-14 bg-zinc-700 rounded-r-sm" /> {/* Volume Up */}
        <div className="absolute -left-[7px] top-56 w-[3px] h-14 bg-zinc-700 rounded-r-sm" /> {/* Volume Down */}
        <div className="absolute -right-[7px] top-44 w-[3px] h-20 bg-zinc-700 rounded-l-sm" /> {/* Power Button */}

        {/* Screen Content Container */}
        <div className="relative bg-zinc-50 rounded-[42px] overflow-hidden font-sans text-zinc-900 h-[640px] md:h-[720px] flex flex-col">
          
          {/* Status Bar */}
          <div className="h-10 flex items-center justify-between px-8 pt-2 z-50">
            <span className="text-[10px] font-bold">9:41</span>
            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-3 w-20 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-zinc-800 rounded-full ml-auto mr-3" />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex gap-0.5">
                <div className="w-0.5 h-1.5 bg-zinc-900 rounded-full" />
                <div className="w-0.5 h-2 bg-zinc-900 rounded-full" />
                <div className="w-0.5 h-2.5 bg-zinc-900 rounded-full" />
                <div className="w-0.5 h-1.5 bg-zinc-300 rounded-full" />
              </div>
              <div className="w-4 h-2 border border-zinc-400 rounded-[2px] p-[1px] flex items-center">
                <div className="w-full h-full bg-zinc-900 rounded-[1px]" />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {/* App Header */}
            <div className="bg-white p-6 border-b border-zinc-100">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-primary/20">
                    <Wallet className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold">Split & Grow</h3>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Gamified Finance</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-zinc-50 px-3 py-1.5 rounded-full border border-zinc-100">
                  <Zap className="w-3 h-3 text-brand-primary" />
                  <span className="text-[10px] font-bold">Lvl 12</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-900 rounded-2xl p-4 text-white">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Total Balance</p>
                  <p className="text-lg font-bold">$2,450.00</p>
                  <div className="flex items-center gap-1 text-emerald-400 text-[8px] font-bold mt-2">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.5%
                  </div>
                </div>
                <div className="bg-white border border-zinc-100 rounded-2xl p-4">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Shared Debt</p>
                  <p className="text-lg font-bold text-zinc-900">$120.50</p>
                  <div className="flex items-center gap-1 text-red-500 text-[8px] font-bold mt-2">
                    <ArrowDownRight className="w-3 h-3" />
                    Due in 2d
                  </div>
                </div>
              </div>
            </div>

            {/* Leaderboard Section */}
            <div className="p-6 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-brand-primary" />
                    <h4 className="text-xs font-bold uppercase tracking-widest">Saving Race</h4>
                  </div>
                  <span className="text-[10px] text-zinc-400 font-bold">Week 4</span>
                </div>
                
                <div className="space-y-3">
                  {friends.map((friend, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-zinc-100 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${friend.color} flex items-center justify-center text-white text-xs font-bold`}>
                        {friend.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-bold">{friend.name}</span>
                          <span className="text-[10px] font-bold">${friend.spent}</span>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(friend.spent / friend.goal) * 100}%` }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                            className={`h-full ${friend.color}`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals Section */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-brand-primary" />
                  <h4 className="text-xs font-bold uppercase tracking-widest">Your Goals</h4>
                </div>
                <div className="bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-4 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm font-bold text-zinc-900">New MacBook Pro</p>
                        <p className="text-[10px] text-zinc-500 font-medium">Target: $2,400</p>
                      </div>
                      <div className="bg-white px-2 py-1 rounded-lg text-[10px] font-bold text-brand-primary font-accent lowercase border border-brand-primary/20">
                        75%
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white rounded-full overflow-hidden mb-2">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="h-full bg-brand-primary"
                      />
                    </div>
                  </div>
                  <TrendingUp className="absolute -bottom-4 -right-4 w-24 h-24 text-brand-primary/5 rotate-12" />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button className="flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">
                  <Users className="w-3 h-3" />
                  Split Bill
                </button>
                <button className="flex items-center justify-center gap-2 border border-zinc-200 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-zinc-50 transition-colors">
                  <TrendingUp className="w-3 h-3" />
                  Invest
                </button>
              </div>

              <Link 
                to="/split-and-grow"
                className="flex items-center justify-center gap-2 w-full py-4 bg-zinc-50 border border-dashed border-zinc-200 rounded-2xl text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all group"
              >
                View Full Dashboard
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="h-6 flex items-center justify-center">
            <div className="w-32 h-1 bg-zinc-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
