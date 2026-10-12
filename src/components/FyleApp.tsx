import React from "react";
import { motion } from "motion/react";
import { 
  Plus, 
  Search, 
  Bell, 
  MapPin, 
  Navigation, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  CreditCard,
  Receipt,
  ArrowUpRight
} from "lucide-react";

export default function FyleApp() {
  return (
    <div className="w-full h-full bg-[#F8F9FB] flex flex-col font-sans text-zinc-900">
      {/* Header */}
      <div className="px-5 py-4 bg-white border-b border-zinc-100 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#FF3366] flex items-center justify-center shadow-lg shadow-[#FF3366]/20">
            <Receipt className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest leading-none mb-1">Reimbursements</p>
            <div className="flex items-center gap-1.5">
              <p className="text-sm font-black tracking-tight">Fyle Mileage</p>
              <div className="w-1 h-1 bg-[#FF3366] rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-10 h-10 bg-zinc-50 rounded-2xl flex items-center justify-center relative border border-zinc-200/50">
          <Bell className="w-5 h-5 text-zinc-400" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-[#FF3366] rounded-full border-2 border-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-hide">
        {/* Summary Card */}
        <div className="bg-[#FF3366] rounded-[32px] p-6 text-white shadow-2xl shadow-[#FF3366]/30 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">Pending Reimbursement</p>
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-3xl font-black tracking-tighter">$1,240.50</h3>
                <p className="text-[10px] font-bold mt-1 bg-white/20 inline-block px-2 py-0.5 rounded-full">12 Entries Pending</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-md">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        {/* Bulk Actions */}
        <div className="flex gap-3">
          <button className="flex-1 bg-white border border-zinc-200 py-3 rounded-2xl flex items-center justify-center gap-2 shadow-sm">
            <Plus className="w-4 h-4 text-[#FF3366]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Add Entry</span>
          </button>
          <button className="flex-1 bg-zinc-900 text-white py-3 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-zinc-900/20">
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Submit All</span>
          </button>
        </div>

        {/* Mileage List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Recent Mileage</h4>
            <button className="text-[10px] font-bold text-[#FF3366] uppercase tracking-widest">View All</button>
          </div>

          {[
            { from: "HSR Layout", to: "Indiranagar", distance: "8.4 km", amount: "$12.60", status: "pending" },
            { from: "Koramangala", to: "Whitefield", distance: "15.2 km", amount: "$22.80", status: "pending" },
            { from: "MG Road", to: "Airport", distance: "34.0 km", amount: "$51.00", status: "approved" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-4 rounded-[24px] border border-zinc-100 shadow-sm flex items-center gap-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.status === 'approved' ? 'bg-emerald-50' : 'bg-zinc-50'}`}>
                <Navigation className={`w-6 h-6 ${item.status === 'approved' ? 'text-emerald-500' : 'text-zinc-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[10px] font-bold text-zinc-400 uppercase truncate">{item.from}</p>
                  <ChevronRight className="w-2 h-2 text-zinc-300" />
                  <p className="text-[10px] font-bold text-zinc-400 uppercase truncate">{item.to}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black tracking-tight">{item.distance}</p>
                  <p className="text-sm font-black text-[#FF3366]">{item.amount}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="px-8 py-4 bg-white border-t border-zinc-100 flex items-center justify-between z-20">
        <CreditCard className="w-5 h-5 text-[#FF3366]" />
        <div className="w-10 h-1 bg-zinc-100 rounded-full mx-4" />
        <Search className="w-5 h-5 text-zinc-300" />
      </div>
    </div>
  );
}
