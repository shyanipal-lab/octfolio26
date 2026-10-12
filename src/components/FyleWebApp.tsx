import React from "react";
import { motion } from "motion/react";
import { useCurrency } from "../lib/currency";
import { 
  Plus, 
  Search, 
  Bell, 
  CheckCircle2, 
  ChevronRight,
  CreditCard,
  Receipt,
  ArrowUpRight,
  LayoutDashboard,
  FileText,
  Settings,
  LogOut,
  MoreVertical,
  Filter,
  Download,
  Calendar,
  DollarSign
} from "lucide-react";

export default function FyleWebApp() {
  const { currency, isLoading, formatAmount } = useCurrency();
  const [activeTab, setActiveTab] = React.useState("Dashboard");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<string>("All");
  const [showAddModal, setShowAddModal] = React.useState(false);
  const [showFilterMenu, setShowFilterMenu] = React.useState(false);
  const [expenses, setExpenses] = React.useState([
    { id: 1, date: "Oct 24, 2023", category: "Travel", merchant: "Uber India", amount: 12.60, status: "Pending" },
    { id: 2, date: "Oct 23, 2023", category: "Food", merchant: "Starbucks", amount: 8.40, status: "Approved" },
    { id: 3, date: "Oct 22, 2023", category: "Software", merchant: "Adobe Creative Cloud", amount: 52.99, status: "Approved" },
    { id: 4, date: "Oct 21, 2023", category: "Office", merchant: "Amazon Business", amount: 124.50, status: "Pending" },
    { id: 5, date: "Oct 20, 2023", category: "Travel", merchant: "Indigo Airlines", amount: 240.00, status: "Rejected" },
  ]);

  const [newExpense, setNewExpense] = React.useState({
    merchant: "",
    amount: "",
    category: "Travel",
  });

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpense.merchant.trim() || !newExpense.amount) return;
    const item = {
      id: Date.now(),
      date: "Just now",
      category: newExpense.category,
      merchant: newExpense.merchant.trim(),
      amount: parseFloat(newExpense.amount) || 0,
      status: "Pending",
    };
    setExpenses([item, ...expenses]);
    setNewExpense({ merchant: "", amount: "", category: "Travel" });
    setShowAddModal(false);
  };

  const filteredExpenses = expenses.filter((item) => {
    const matchesSearch = item.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="w-full h-full bg-[#F8F9FB] flex font-sans text-zinc-900 overflow-hidden border border-zinc-200 rounded-xl shadow-2xl relative">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-zinc-200 flex flex-col p-6 gap-8 shrink-0 hidden lg:flex">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#FF3366] flex items-center justify-center shadow-lg shadow-[#FF3366]/20">
            <Receipt className="w-4 h-4 text-white" />
          </div>
          <span className="font-black tracking-tighter text-xl">Fyle</span>
        </div>

        <nav className="flex-1 space-y-1">
          {[
            { icon: LayoutDashboard, label: "Dashboard" },
            { icon: FileText, label: "Expenses" },
            { icon: Receipt, label: "Reports" },
            { icon: CreditCard, label: "Cards" },
            { icon: Settings, label: "Settings" },
          ].map((item) => {
            const isActive = activeTab === item.label;
            return (
              <div 
                key={item.label} 
                onClick={() => setActiveTab(item.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
                  isActive ? "bg-[#FF3366] text-white shadow-lg shadow-[#FF3366]/20 font-bold" : "text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm tracking-tight">{item.label}</span>
              </div>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-zinc-100">
          <div className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:bg-zinc-50 hover:text-zinc-600 rounded-xl cursor-pointer transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-bold tracking-tight">Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 md:h-20 bg-white border-b border-zinc-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input 
                type="text" 
                placeholder="Search expenses, merchants, categories..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-2 md:py-2.5 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]/20 transition-all text-zinc-800"
              />
            </div>
            <div className="sm:hidden flex items-center gap-2">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-28 bg-zinc-50 border border-zinc-200 rounded-lg py-1 px-2 text-xs"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="px-2 md:px-3 py-1 bg-zinc-50 rounded-lg border border-zinc-200 flex items-center gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] md:text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                {isLoading ? "..." : currency}
              </span>
            </div>
            <div className="relative">
              <Bell className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 cursor-pointer hover:text-zinc-600 transition-all" />
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#FF3366] rounded-full border-2 border-white" />
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 md:space-y-8 scrollbar-hide">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { label: "Pending Reimbursement", value: 1240.50, sub: `${expenses.filter(e => e.status === "Pending").length} Entries Pending`, color: "bg-[#FF3366]", text: "text-white" },
              { label: "Approved This Month", value: 3450.00, sub: `${expenses.filter(e => e.status === "Approved").length} Entries Approved`, color: "bg-white", text: "text-zinc-900" },
              { label: "Total Reimbursed", value: 12840.00, sub: "Year to date", color: "bg-white", text: "text-zinc-900" },
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} ${stat.text} p-5 md:p-6 rounded-[24px] md:rounded-[32px] shadow-sm border border-zinc-100 relative overflow-hidden group ${i === 2 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="relative z-10">
                  <p className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest ${stat.color === 'bg-white' ? 'text-zinc-400' : 'opacity-80'} mb-2`}>{stat.label}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tighter">
                        {isLoading ? "..." : formatAmount(stat.value)}
                      </h3>
                      <p className={`text-[8px] md:text-[9px] font-bold mt-1 ${stat.color === 'bg-white' ? 'text-zinc-500' : 'bg-white/20'} inline-block px-2 py-0.5 rounded-full`}>{stat.sub}</p>
                    </div>
                    <div className={`w-8 h-8 md:w-10 md:h-10 ${stat.color === 'bg-white' ? 'bg-zinc-50' : 'bg-white/20'} rounded-lg md:rounded-xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
            <div className="p-4 md:p-6 border-b border-zinc-100 flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-3 md:gap-4">
                <h4 className="text-base md:text-lg font-black tracking-tight">Recent Expenses</h4>
                <div className="relative flex items-center gap-2">
                  <button 
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[9px] font-bold uppercase tracking-widest text-zinc-600 hover:bg-zinc-100 transition-all"
                  >
                    <Filter className="w-3 h-3 text-zinc-500" />
                    <span>{statusFilter}</span>
                  </button>
                  {showFilterMenu && (
                    <div className="absolute top-9 left-0 bg-white border border-zinc-200 rounded-xl shadow-xl py-1 w-32 z-20">
                      {["All", "Approved", "Pending", "Rejected"].map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            setStatusFilter(opt);
                            setShowFilterMenu(false);
                          }}
                          className={`w-full text-left px-3 py-1.5 text-xs font-semibold hover:bg-zinc-50 ${statusFilter === opt ? 'text-[#FF3366] font-bold' : 'text-zinc-700'}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                  <button 
                    onClick={() => {
                      const csv = expenses.map(e => `${e.date},${e.category},${e.merchant},${e.amount},${e.status}`).join('\n');
                      const blob = new Blob([csv], { type: 'text/csv' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'fyle-expenses.csv';
                      a.click();
                    }}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-zinc-50 border border-zinc-200 rounded-lg text-[9px] font-bold uppercase tracking-widest text-zinc-500 hover:bg-zinc-100 transition-all"
                  >
                    <Download className="w-3 h-3" />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>
              <button 
                onClick={() => setShowAddModal(true)}
                className="w-full sm:w-auto bg-zinc-900 text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs md:text-sm font-bold tracking-tight hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                Add Expense
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-zinc-50/50">
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Category</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Merchant</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Amount</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</th>
                    <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  {filteredExpenses.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-10 text-center text-xs text-zinc-400 font-semibold">
                        No expenses match your search or filter.
                      </td>
                    </tr>
                  ) : (
                    filteredExpenses.map((row) => (
                      <tr key={row.id} className="hover:bg-zinc-50/50 transition-all group">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
                              <Calendar className="w-4 h-4 text-zinc-400" />
                            </div>
                            <span className="text-sm font-bold tracking-tight text-zinc-600">{row.date}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-xs font-bold px-2.5 py-1 bg-zinc-100 text-zinc-500 rounded-full">{row.category}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-bold tracking-tight text-zinc-900">{row.merchant}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm font-black text-zinc-900">
                            {isLoading ? "..." : formatAmount(row.amount)}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${
                              row.status === 'Approved' ? 'bg-emerald-500' : 
                              row.status === 'Pending' ? 'bg-amber-500' : 'bg-rose-500'
                            }`} />
                            <span className={`text-xs font-bold ${
                              row.status === 'Approved' ? 'text-emerald-600' : 
                              row.status === 'Pending' ? 'text-amber-600' : 'text-rose-600'
                            }`}>{row.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
                            onClick={() => {
                              setExpenses(expenses.map(e => e.id === row.id ? { ...e, status: e.status === "Approved" ? "Pending" : "Approved" } : e));
                            }}
                            className="text-[10px] font-bold text-zinc-500 hover:text-zinc-900 px-2 py-1 rounded bg-zinc-100 hover:bg-zinc-200 transition-all"
                          >
                            Toggle Status
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 bg-zinc-50/50 border-t border-zinc-100 flex items-center justify-between">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Showing {filteredExpenses.length} of {expenses.length} expenses</p>
              <div className="flex items-center gap-2">
                <button className="px-4 py-2 bg-white border border-zinc-200 rounded-lg text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-all">Previous</button>
                <button className="px-4 py-2 bg-white border border-zinc-200 rounded-lg text-xs font-bold text-zinc-600 hover:bg-zinc-50 transition-all shadow-sm">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Add Expense Modal */}
      {showAddModal && (
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl border border-zinc-100"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black tracking-tight">Record New Expense</h3>
              <button onClick={() => setShowAddModal(false)} className="text-zinc-400 hover:text-zinc-700 text-xs font-bold uppercase">Close</button>
            </div>
            <form onSubmit={handleAddExpense} className="space-y-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Merchant / Vendor</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Uber, Delta Airlines, Figma" 
                  value={newExpense.merchant}
                  onChange={(e) => setNewExpense({ ...newExpense, merchant: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]/20 font-medium"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Amount ({currency})</label>
                <input 
                  type="number" 
                  step="0.01"
                  required
                  placeholder="0.00" 
                  value={newExpense.amount}
                  onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]/20 font-medium"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block mb-1">Category</label>
                <select
                  value={newExpense.category}
                  onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3366]/20 font-medium"
                >
                  <option value="Travel">Travel</option>
                  <option value="Food">Food & Meals</option>
                  <option value="Software">Software & Subscriptions</option>
                  <option value="Office">Office Supplies</option>
                  <option value="Mileage">Mileage</option>
                </select>
              </div>
              <div className="pt-4 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-zinc-200 text-xs font-bold text-zinc-600 hover:bg-zinc-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 py-2.5 rounded-xl bg-[#FF3366] text-white text-xs font-bold hover:bg-[#e02b5a] shadow-lg shadow-[#FF3366]/20"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
