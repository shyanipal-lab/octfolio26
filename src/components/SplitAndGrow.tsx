import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Wallet, TrendingUp, Users, Trophy, Target, ArrowUpRight, ArrowDownRight, 
  Zap, ChevronLeft, Plus, Bell, Settings, PieChart, CreditCard, X, Filter,
  Calendar, Search, MoreVertical, DollarSign, HandCoins
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

interface Transaction {
  id: string;
  title: string;
  category: string;
  amount: number;
  date: string;
  timestamp: number;
}

interface Friend {
  name: string;
  spent: number;
  goal: number;
  status: string;
  color: string;
  level: number;
  trend: number[];
}

export default function SplitAndGrow({ isContained = false }: { isContained?: boolean }) {
  const [balance, setBalance] = useState(12450.80);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "reports" | "friends">("overview");

  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: "1", title: "Netflix Subscription", category: "Entertainment", amount: -15.99, date: "Today", timestamp: Date.now() },
    { id: "2", title: "Dinner at Mario's", category: "Food", amount: -45.00, date: "Yesterday", timestamp: Date.now() - 86400000 },
    { id: "3", title: "Salary Deposit", category: "Income", amount: 2450.00, date: "2 days ago", timestamp: Date.now() - 172800000 },
    { id: "4", title: "Amazon Prime", category: "Shopping", amount: -12.99, date: "3 days ago", timestamp: Date.now() - 259200000 },
    { id: "5", title: "Uber Ride", category: "Transport", amount: -22.50, date: "3 days ago", timestamp: Date.now() - 259200100 },
  ]);

  const [friends, setFriends] = useState<Friend[]>([
    { name: "You", spent: 450, goal: 1000, status: "On Track", color: "bg-brand-primary", level: 12, trend: [20, 45, 30, 55, 40, 60, 45] },
    { name: "Alex", spent: 820, goal: 1000, status: "Warning", color: "bg-red-500", level: 8, trend: [40, 60, 50, 80, 70, 90, 82] },
    { name: "Sam", spent: 310, goal: 1000, status: "Top Saver", color: "bg-emerald-500", level: 15, trend: [10, 20, 15, 25, 20, 30, 31] },
    { name: "Jordan", spent: 550, goal: 1000, status: "On Track", color: "bg-blue-500", level: 10, trend: [30, 40, 35, 50, 45, 60, 55] },
  ]);

  const chartData = useMemo(() => {
    return [
      { name: 'Mon', amount: 2400 },
      { name: 'Tue', amount: 1398 },
      { name: 'Wed', amount: 9800 },
      { name: 'Thu', amount: 3908 },
      { name: 'Fri', amount: 4800 },
      { name: 'Sat', amount: 3800 },
      { name: 'Sun', amount: 4300 },
    ];
  }, []);

  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const amount = parseFloat(formData.get("amount") as string);
    const category = formData.get("category") as string;

    if (!title || isNaN(amount)) return;

    const newTransaction: Transaction = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      category,
      amount: -Math.abs(amount),
      date: "Just now",
      timestamp: Date.now(),
    };

    setTransactions([newTransaction, ...transactions]);
    setBalance(prev => prev - Math.abs(amount));
    setIsAddModalOpen(false);
  };

  return (
    <div className={`${isContained ? "w-full" : "min-h-screen"} bg-zinc-50 text-zinc-900 font-sans pb-20 selection:bg-brand-primary/20`}>
      {/* Navigation Bar */}
      <nav className={`sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100 px-6 py-4`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-900 transition-colors group">
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest hidden sm:inline">Portfolio</span>
          </Link>

          <div className="flex bg-zinc-100 p-1 rounded-xl">
            {(["overview", "reports", "friends"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === tab ? "bg-white text-zinc-900 shadow-sm" : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex p-2 hover:bg-zinc-100 rounded-xl transition-colors relative">
              <Bell className="w-5 h-5 text-zinc-400" />
              <div className="absolute top-2 right-2 w-2 h-2 bg-brand-primary rounded-full border-2 border-white" />
            </button>
            <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-zinc-900/20">
              PS
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-12">
        <AnimatePresence mode="wait">
          {activeTab === "overview" && (
            <motion.div 
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
              {/* Left Column: Overview & Stats */}
              <div className="lg:col-span-2 space-y-8">
                <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">Financial Dashboard</h1>
                    <p className="text-zinc-400 font-medium tracking-tight">Welcome back, Shyani. Your savings are up by <span className="text-emerald-600 font-bold">$120.50</span>.</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-xl text-xs font-bold tracking-widest transition-colors">
                      <Calendar className="w-4 h-4" />
                      MAR 2024
                    </button>
                  </div>
                </header>

                {/* Main Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-zinc-900 rounded-[32px] p-8 text-white relative overflow-hidden group shadow-2xl shadow-zinc-900/20"
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-2">Total Balance</p>
                        <h2 className="text-4xl font-black tracking-tighter mb-6">${balance.toLocaleString()}</h2>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-lg">
                          <ArrowUpRight className="w-4 h-4" />
                          +12.5%
                        </div>
                        <div className="h-4 w-px bg-zinc-800" />
                        <p className="text-zinc-500 text-xs font-medium">vs last month</p>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-8">
                      <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                        <CreditCard className="w-6 h-6" />
                      </div>
                    </div>
                    <TrendingUp className="absolute -bottom-8 -right-8 w-48 h-48 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white border border-zinc-100 rounded-[32px] p-8 relative overflow-hidden group shadow-sm"
                  >
                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 text-brand-primary">Shared Pots</p>
                        <h2 className="text-4xl font-black tracking-tighter mb-6 text-zinc-900">$840.20</h2>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-3">
                          {friends.map((f, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${f.color} flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-1 ring-zinc-200/20`}>
                              {f.name[0]}
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest ml-2">+ 3 others</span>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 p-8">
                      <div className="p-3 bg-zinc-100 rounded-2xl">
                        <Users className="w-6 h-6 text-zinc-400" />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Spending Chart */}
                <section className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest">Spending Trends</h3>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Daily analysis</p>
                    </div>
                    <select className="bg-zinc-50 border-none text-[10px] font-bold uppercase tracking-widest rounded-lg px-3 py-1.5 focus:ring-0">
                      <option>This Week</option>
                      <option>Last Week</option>
                    </select>
                  </div>
                  <div className="h-[240px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.1}/>
                            <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fontSize: 10, fontWeight: 700, fill: '#A1A1AA' }}
                          dy={10}
                        />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ 
                            borderRadius: '16px', 
                            border: 'none', 
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
                            fontSize: '12px',
                            fontWeight: 'bold'
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="amount" 
                          stroke="#14B8A6" 
                          strokeWidth={3}
                          fillOpacity={1} 
                          fill="url(#colorAmount)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </section>

                {/* Recent Activity */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <h3 className="text-sm font-bold uppercase tracking-widest">Recent Activity</h3>
                      <span className="bg-zinc-100 px-2 py-0.5 rounded text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                        {transactions.length} items
                      </span>
                    </div>
                    <div className="flex gap-2">
                       <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"><Search className="w-4 h-4 text-zinc-400" /></button>
                       <button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors"><Filter className="w-4 h-4 text-zinc-400" /></button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {transactions.map((t, i) => (
                      <motion.div 
                        key={t.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="bg-white p-4 rounded-2xl border border-zinc-100 flex items-center justify-between hover:border-zinc-200 hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 ${t.amount > 0 ? "bg-emerald-50 text-emerald-500" : "bg-zinc-50 text-zinc-400"} rounded-xl flex items-center justify-center font-accent lowercase transition-colors group-hover:scale-110 duration-300`}>
                            {t.amount > 0 ? <TrendingUp className="w-5 h-5" /> : <PieChart className="w-5 h-5" />}
                          </div>
                          <div>
                            <p className="text-sm font-black lowercase tracking-tight">{t.title}</p>
                            <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">{t.category} • {t.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-black tracking-tight ${t.amount > 0 ? "text-emerald-600" : "text-zinc-900"}`}>
                            {t.amount > 0 ? "+" : ""}{t.amount.toFixed(2)}
                          </p>
                          <p className="text-[8px] text-zinc-300 font-bold uppercase tracking-widest">USD</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column: Gamification & Goals */}
              <div className="space-y-8">
                {/* Level Progress */}
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-brand-primary rounded-[32px] p-8 text-white shadow-2xl shadow-brand-primary/30 relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner">
                          <Zap className="w-6 h-6 fill-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">Current Progress</p>
                          <p className="text-2xl font-black tracking-tighter">Level 12</p>
                        </div>
                      </div>
                      <Trophy className="w-8 h-8 text-white/20 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-[0.2em]">
                        <span>Next Tier: Influencer</span>
                        <span>84%</span>
                      </div>
                      <div className="w-full h-3 bg-white/20 rounded-full p-0.5 border border-white/10 ring-2 ring-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "84%" }}
                          transition={{ duration: 1.5, ease: "circOut" }}
                          className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        />
                      </div>
                      <p className="text-[9px] text-center text-white/40 font-bold uppercase tracking-widest pt-2 italic">160 XP to Level 13</p>
                    </div>
                  </div>
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
                </motion.div>

                {/* Performance Chart */}
                 <section className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Group Growth</h3>
                  <div className="h-40 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={friends}>
                        <Bar dataKey="level">
                          {friends.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color === "bg-brand-primary" ? "#14B8A6" : entry.color.replace('bg-', '#').replace('-500', '')} className="opacity-80 hover:opacity-100" />
                          ))}
                        </Bar>
                        <XAxis dataKey="name" tick={{ fontSize: 9, fontWeight: 700, fill: '#A1A1AA' }} axisLine={false} tickLine={false} dy={10} />
                        <YAxis hide />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </section>

                {/* Savings Race Leaderboard */}
                <section className="bg-white border border-zinc-100 rounded-[32px] p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest">Savings Race</h3>
                      <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-1">Week 4 Active</p>
                    </div>
                    <HandCoins className="w-5 h-5 text-zinc-100" />
                  </div>
                  <div className="space-y-8">
                    {friends.map((f, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-zinc-200 group-hover:text-zinc-400 transition-colors">0{i + 1}</span>
                            <div className={`w-8 h-8 rounded-xl ${f.color} flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-current/10`}>
                              {f.name[0]}
                            </div>
                            <div className="leading-tight">
                              <p className="text-[11px] font-black uppercase tracking-tight">{f.name}</p>
                              <p className="text-[8px] text-zinc-400 font-bold uppercase tracking-widest">{f.status}</p>
                            </div>
                          </div>
                          <p className="text-xs font-black tracking-tighter">${f.spent.toLocaleString()}</p>
                        </div>
                        <div className="w-full h-1.5 bg-zinc-50 rounded-full overflow-hidden p-[1px]">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(f.spent / f.goal) * 100}%` }}
                            transition={{ delay: 1 + i * 0.1, duration: 1.5, ease: "circOut" }}
                            className={`h-full ${f.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 gap-4">
                  <button 
                    onClick={() => setIsAddModalOpen(true)}
                    className="w-full bg-zinc-900 text-white py-5 rounded-[24px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-xl shadow-zinc-900/10 active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    <div className="w-6 h-6 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20">
                      <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                    Add Transaction
                  </button>
                  <button className="w-full bg-white border border-zinc-100 py-5 rounded-[24px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-all shadow-sm active:scale-[0.98] flex items-center justify-center gap-3 text-zinc-400 hover:text-zinc-900">
                    <Settings className="w-4 h-4" />
                    Pot Settings
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "reports" && (
            <motion.div
              key="reports"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-white rounded-[40px] p-12 border border-zinc-100 shadow-xl min-h-[600px] flex flex-col items-center justify-center text-center space-y-6"
            >
              <div className="w-24 h-24 bg-zinc-50 rounded-full flex items-center justify-center">
                <PieChart className="w-10 h-10 text-zinc-200" />
              </div>
              <div className="max-w-md">
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-2">Detailed Reports</h2>
                <p className="text-zinc-400 font-medium tracking-tight">Advanced data visualization for your monthly spend patterns is coming soon. Stay tuned for deeper insights.</p>
              </div>
              <button onClick={() => setActiveTab("overview")} className="px-8 py-3 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">
                Back to Dashboard
              </button>
            </motion.div>
          )}

          {activeTab === "friends" && (
            <motion.div
              key="friends"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {friends.map((friend, i) => (
                <motion.div
                  key={friend.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm hover:shadow-xl transition-all group overflow-hidden relative"
                >
                   <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-[28px] ${friend.color} flex items-center justify-center text-2xl font-black text-white mb-6 transform group-hover:rotate-6 transition-transform shadow-2xl shadow-current/20`}>
                      {friend.name[0]}
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tighter mb-1">{friend.name}</h3>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.2em] mb-4">{friend.status}</p>
                    
                    <div className="w-full space-y-4 pt-4 border-t border-zinc-50">
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-zinc-400">Total Spent</span>
                        <span className="font-black text-zinc-900">${friend.spent}</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-zinc-400">Budget Limit</span>
                        <span className="font-black text-zinc-900">${friend.goal}</span>
                      </div>
                    </div>

                    <button className="mt-8 w-full py-3 rounded-2xl bg-zinc-50 text-brand-primary text-[10px] font-black uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all">
                      View full pot
                    </button>
                  </div>
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-5 h-5 text-zinc-300" />
                  </div>
                </motion.div>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-zinc-50 border-2 border-dashed border-zinc-200 rounded-[32px] p-8 flex flex-col items-center justify-center text-zinc-400 hover:border-brand-primary hover:text-brand-primary transition-all group"
              >
                <div className="w-12 h-12 rounded-full border-2 border-dashed border-current flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Add Friend</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Add Transaction Modal */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAddModalOpen(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl p-10 overflow-hidden"
            >
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">New Entry</h2>
                <p className="text-sm text-zinc-400 font-medium">Add a new expense or income to your pot.</p>
              </div>

              <form onSubmit={handleAddExpense} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Title</label>
                  <input 
                    name="title"
                    autoFocus
                    placeholder="e.g. Weekly Groceries"
                    className="w-full bg-zinc-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary placeholder:text-zinc-300"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Amount</label>
                    <div className="relative">
                      <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-300" />
                      <input 
                        name="amount"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        className="w-full bg-zinc-50 border-none rounded-2xl pl-12 pr-6 py-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary placeholder:text-zinc-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 ml-1">Category</label>
                    <select 
                      name="category"
                      className="w-full bg-zinc-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-brand-primary"
                    >
                      <option>Food</option>
                      <option>Entertainment</option>
                      <option>Shopping</option>
                      <option>Income</option>
                      <option>Health</option>
                      <option>Rent</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-zinc-900 text-white py-5 rounded-[24px] text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-primary transition-all shadow-xl shadow-zinc-900/10 active:scale-[0.98]">
                    Record Transaction
                  </button>
                </div>
              </form>

              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-zinc-50 rounded-full -z-10" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Action Button for Mobile */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsAddModalOpen(true)}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl shadow-brand-primary/40 flex items-center justify-center lg:hidden z-50 border-4 border-white"
      >
        <Plus className="w-8 h-8" />
      </motion.button>
    </div>
  );
}

