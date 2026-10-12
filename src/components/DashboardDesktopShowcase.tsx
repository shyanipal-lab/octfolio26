import { motion } from "motion/react";
import { Wallet, TrendingUp, Users, Trophy, Target, ArrowUpRight, Zap, Bell, Settings, PieChart, CreditCard, Search, Plus, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardDesktopShowcase() {
  const friends = [
    { name: "You", spent: 450, goal: 1000, status: "On Track", color: "bg-brand-primary", level: 12 },
    { name: "Alex", spent: 820, goal: 1000, status: "Warning", color: "bg-red-500", level: 8 },
    { name: "Sam", spent: 310, goal: 1000, status: "Top Saver", color: "bg-emerald-500", level: 15 },
  ];

  const transactions = [
    { title: "Netflix Subscription", category: "Entertainment", amount: -15.99, date: "Today", icon: <PieChart className="w-3 h-3" /> },
    { title: "Dinner at Mario's", category: "Food", amount: -45.00, date: "Yesterday", icon: <Users className="w-3 h-3" /> },
    { title: "Salary Deposit", category: "Income", amount: 2450.00, date: "2 days ago", icon: <TrendingUp className="w-3 h-3" /> },
  ];

  return (
    <div className="w-full max-w-[800px] mx-auto group relative">
      {/* View Full App Overlay - only appears on hover */}
      <div className="absolute inset-0 z-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-900/40 backdrop-blur-[2px] rounded-2xl pointer-events-none">
        <Link 
          to="/split-and-grow" 
          className="bg-white text-zinc-900 px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 transform group-hover:scale-110 transition-transform pointer-events-auto"
        >
          <ExternalLink className="w-4 h-4 text-brand-primary" />
          View Full Interactive App
        </Link>
      </div>

      {/* Browser Frame */}
      <div className="bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col h-[500px]">

        {/* Browser Top Bar */}
        <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 bg-white border border-zinc-200 rounded-lg px-3 py-1 flex items-center gap-2">
            <Search className="w-3 h-3 text-zinc-400" />
            <div className="text-[10px] text-zinc-400 font-medium">splitandgrow.app/dashboard</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-200 rounded-full" />
            <div className="w-6 h-6 bg-zinc-200 rounded-full" />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar */}
          <div className="w-16 border-r border-zinc-100 bg-white flex flex-col items-center py-6 gap-6">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center text-white">
              <Wallet className="w-4 h-4" />
            </div>
            <div className="flex flex-col gap-4 text-zinc-300">
              <PieChart className="w-4 h-4 text-brand-primary" />
              <Users className="w-4 h-4" />
              <Trophy className="w-4 h-4" />
              <Target className="w-4 h-4" />
            </div>
            <div className="mt-auto">
              <Settings className="w-4 h-4 text-zinc-300" />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-zinc-50/50 p-6 overflow-y-auto scrollbar-hide">
            <header className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter">Financial Dashboard</h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Welcome back, Shyani</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-zinc-100 shadow-sm">
                  <Zap className="w-3 h-3 text-brand-primary" />
                  <span className="text-[10px] font-bold">Lvl 12</span>
                </div>
                <button className="bg-zinc-900 text-white p-2 rounded-xl">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </header>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="col-span-2 bg-zinc-900 rounded-3xl p-6 text-white relative overflow-hidden">
                <p className="text-[8px] font-bold uppercase tracking-widest text-zinc-500 mb-1">Total Balance</p>
                <h4 className="text-2xl font-black tracking-tighter">$12,450.80</h4>
                <div className="flex items-center gap-2 mt-4">
                  <div className="flex items-center gap-1 text-emerald-400 text-[8px] font-bold">
                    <ArrowUpRight className="w-3 h-3" />
                    +12.5%
                  </div>
                  <div className="h-3 w-px bg-zinc-800" />
                  <p className="text-zinc-500 text-[8px] font-medium">vs last month</p>
                </div>
                <TrendingUp className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 -rotate-12" />
              </div>
              <div className="bg-brand-primary rounded-3xl p-6 text-white shadow-lg shadow-brand-primary/20">
                <div className="flex justify-between items-start mb-4">
                  <Trophy className="w-4 h-4 text-white/40" />
                  <span className="text-[10px] font-bold">84%</span>
                </div>
                <p className="text-[8px] font-bold uppercase tracking-widest text-white/60 mb-1">XP Progress</p>
                <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[84%] h-full bg-white" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Transactions */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest">Recent Activity</h5>
                  <button className="text-[8px] font-bold text-brand-primary font-accent lowercase tracking-widest">View All</button>
                </div>
                <div className="space-y-2">
                  {transactions.map((t, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-zinc-100 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-zinc-50 rounded-lg flex items-center justify-center text-zinc-400">
                          {t.icon}
                        </div>
                        <div>
                          <p className="text-[10px] font-bold">{t.title}</p>
                          <p className="text-[8px] text-zinc-400 uppercase tracking-widest">{t.date}</p>
                        </div>
                      </div>
                      <p className={`text-[10px] font-bold ${t.amount > 0 ? "text-emerald-500" : "text-zinc-900"}`}>
                        {t.amount > 0 ? "+" : ""}{t.amount.toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Leaderboard */}
              <section className="bg-white border border-zinc-100 rounded-3xl p-6">
                <h5 className="text-[10px] font-bold uppercase tracking-widest mb-4">Saving Race</h5>
                <div className="space-y-4">
                  {friends.map((f, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex justify-between items-center text-[10px] font-bold">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded ${f.color} flex items-center justify-center text-[6px] text-white`}>{f.name[0]}</div>
                          <span>{f.name}</span>
                        </div>
                        <span>${f.spent}</span>
                      </div>
                      <div className="w-full h-1 bg-zinc-50 rounded-full overflow-hidden">
                        <div className={`h-full ${f.color}`} style={{ width: `${(f.spent / f.goal) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
