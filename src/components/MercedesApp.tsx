import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Database, 
  Languages, 
  FileCode, 
  Bug, 
  ChevronRight, 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  Code2,
  Layers,
  Settings2
} from "lucide-react";

const LANGUAGES = [
  "English", "German", "French", "Spanish", "Chinese", "Japanese", "Korean", "Hindi", 
  "Arabic", "Russian", "Portuguese", "Italian", "Turkish", "Dutch", "Swedish", "Polish",
  "Thai", "Vietnamese", "Indonesian", "Malay", "Greek", "Hebrew", "Danish", "Finnish"
];

const TICKETS = [
  { id: "MB-1024", title: "ID Mapping Mismatch in Engine Module", status: "In Progress", priority: "High", type: "Bug" },
  { id: "MB-1025", title: "Translation missing for 'Ignition' in Swahili", status: "Open", priority: "Medium", type: "Localization" },
  { id: "MB-1026", title: "Spec Update: Dashboard contrast ratios", status: "Resolved", priority: "Low", type: "Design" },
  { id: "MB-1027", title: "API Handover: Telemetry data structure", status: "In Progress", priority: "High", type: "Dev" },
];

const COMPONENTS = [
  { name: "Button/Primary", props: ["size", "variant", "icon"], tokens: ["brand-blue", "radius-lg"] },
  { name: "Input/Text", props: ["label", "error", "hint"], tokens: ["zinc-100", "text-sm"] },
  { name: "Card/Data", props: ["title", "value", "trend"], tokens: ["shadow-sm", "border-zinc-200"] },
];

export default function MercedesApp() {
  const [activeTab, setActiveTab] = useState<"data" | "lang" | "spec" | "handover" | "bugs">("data");

  const tabs = [
    { id: "data", label: "Unique IDs", icon: Database },
    { id: "lang", label: "150 Languages", icon: Languages },
    { id: "spec", label: "Spec Design", icon: Layers },
    { id: "handover", label: "Dev Handover", icon: FileCode },
    { id: "bugs", label: "Bug Tracking", icon: Bug },
  ];

  return (
    <div className="w-full h-full bg-white flex flex-col font-sans">
      {/* App Header */}
      <div className="h-14 border-b border-zinc-100 flex items-center justify-between px-6 shrink-0 bg-white z-10">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center">
            <Settings2 className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-900">Mercedes-Benz OS</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">System Live</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Sidebar / Bottom Nav */}
        <div className="w-full md:w-20 border-t md:border-t-0 md:border-r border-zinc-100 flex flex-row md:flex-col items-center justify-around md:justify-start py-3 md:py-6 gap-2 md:gap-6 bg-zinc-50/50 order-2 md:order-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`p-3 rounded-xl transition-all relative group ${
                activeTab === tab.id 
                  ? "bg-zinc-900 text-white shadow-lg shadow-zinc-200" 
                  : "text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <div className="absolute bottom-full md:bottom-auto md:left-full mb-2 md:mb-0 md:ml-4 px-2 py-1 bg-zinc-900 text-white text-[10px] font-bold uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                {tab.label}
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-zinc-50/30 order-1 md:order-2">
          <AnimatePresence mode="wait">
            {activeTab === "data" && (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-zinc-900">Unique ID Mapping</h3>
                  <div className="flex gap-2">
                    <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-400 hover:text-zinc-900 transition-colors">
                      <Search className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-white border border-zinc-200 rounded-lg text-zinc-400 hover:text-zinc-900 transition-colors">
                      <Filter className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { id: "ENG-001", name: "Cylinder Pressure", type: "Sensor", value: "84.2 bar" },
                    { id: "DSH-442", name: "Ambient Lighting", type: "UI", value: "#FF4E00" },
                    { id: "NAV-901", name: "GPS Coordinate", type: "System", value: "48.7758° N" },
                  ].map((item) => (
                    <div key={item.id} className="bg-white p-5 rounded-2xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary">{item.type}</span>
                        <span className="font-mono text-[10px] text-zinc-400">{item.id}</span>
                      </div>
                      <h4 className="font-bold text-zinc-900 mb-1">{item.name}</h4>
                      <p className="text-xl md:text-2xl font-black text-zinc-900 tracking-tighter">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Database className="w-24 md:w-32 h-24 md:h-32" />
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-brand-primary mb-4">Data Flow Visualization</h4>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-brand-primary flex items-center justify-center shrink-0">
                      <Database className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-primary to-transparent" />
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/20 flex items-center justify-center shrink-0">
                      <Code2 className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/10 flex items-center justify-center shrink-0">
                      <Layers className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "lang" && (
              <motion.div
                key="lang"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-zinc-900">Localization Engine</h3>
                    <p className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase tracking-widest mt-1">150 Languages Supported</p>
                  </div>
                  <div className="px-3 py-1.5 md:px-4 md:py-2 bg-green-50 text-green-600 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-green-100">
                    98.4% Translated
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                  {LANGUAGES.slice(0, 12).map((lang) => (
                    <div key={lang} className="bg-white p-3 rounded-xl border border-zinc-100 flex items-center justify-between group hover:border-brand-primary transition-colors cursor-default">
                      <span className="text-[10px] md:text-xs font-bold text-zinc-600 group-hover:text-zinc-900">{lang}</span>
                      <CheckCircle2 className="w-3 h-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ))}
                </div>

                <div className="bg-white p-4 md:p-6 rounded-2xl border border-zinc-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-4">Real-time Transition Preview</h4>
                  <div className="flex flex-col gap-3 md:gap-4">
                    <div className="p-3 md:p-4 bg-zinc-50 rounded-xl border border-zinc-100">
                      <p className="text-[9px] md:text-[10px] text-zinc-400 uppercase font-bold mb-1">Source (English)</p>
                      <p className="text-base md:text-lg font-bold text-zinc-900 italic">"Welcome to the future of driving."</p>
                    </div>
                    <div className="flex justify-center">
                      <ChevronRight className="w-4 h-4 text-brand-primary rotate-90" />
                    </div>
                    <div className="p-3 md:p-4 bg-brand-primary/5 rounded-xl border border-brand-primary/20">
                      <p className="text-[9px] md:text-[10px] text-brand-primary uppercase font-bold mb-1">Target (German)</p>
                      <p className="text-base md:text-lg font-bold text-zinc-900 italic">"Willkommen in der Zukunft des Fahrens."</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "spec" && (
              <motion.div
                key="spec"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-zinc-900">Spec Design Mapping</h3>
                
                <div className="relative aspect-video bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                  {/* Mock UI with Redlines */}
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                    <div className="w-full h-full border border-white/10 rounded-xl md:rounded-2xl relative flex items-center justify-center">
                      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-2 md:border-4 border-brand-primary flex flex-col items-center justify-center text-white relative">
                        <span className="text-2xl md:text-4xl font-black tracking-tighter">120</span>
                        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-50">km/h</span>
                        
                        {/* Redlines */}
                        <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                          <div className="w-[1px] h-6 md:h-8 bg-red-500" />
                          <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-red-500 text-white text-[6px] md:text-[8px] font-bold rounded">32px</div>
                        </div>
                        <div className="absolute top-1/2 -right-8 md:-right-12 -translate-y-1/2 flex items-center">
                          <div className="px-1.5 py-0.5 md:px-2 md:py-1 bg-red-500 text-white text-[6px] md:text-[8px] font-bold rounded">48px</div>
                          <div className="w-8 md:w-12 h-[1px] bg-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spec Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex justify-between items-end">
                    <div className="bg-white/10 backdrop-blur-md p-2 md:p-4 rounded-lg md:rounded-xl border border-white/10">
                      <p className="text-[8px] md:text-[10px] font-bold text-brand-primary uppercase mb-1">Component: Speedometer</p>
                      <p className="text-[6px] md:text-[8px] text-white/60 uppercase tracking-widest">Type: Dynamic SVG • Interaction: Real-time</p>
                    </div>
                    <div className="flex gap-1 md:gap-2">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-primary" />
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-700" />
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-500" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-zinc-100">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-900 mb-3">Typography Specs</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                        <span className="text-zinc-400">Heading 1</span>
                        <span className="font-bold">MB-Sans / 48px / Bold</span>
                      </div>
                      <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                        <span className="text-zinc-400">Body Text</span>
                        <span className="font-bold">MB-Sans / 14px / Regular</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-4 md:p-5 rounded-2xl border border-zinc-100">
                    <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-900 mb-3">Spacing System</h4>
                    <div className="flex gap-2">
                      {[4, 8, 12, 16, 24, 32].map(s => (
                        <div key={s} className="flex flex-col items-center gap-1">
                          <div className="w-3 md:w-4 bg-brand-primary/20 rounded" style={{ height: `${s}px` }} />
                          <span className="text-[7px] md:text-[8px] font-bold text-zinc-400">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "handover" && (
              <motion.div
                key="handover"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-zinc-900">Developer Handover</h3>
                  <button className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-zinc-900 text-white rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">
                    <Plus className="w-3 h-3" />
                    Export Assets
                  </button>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {COMPONENTS.map((comp) => (
                    <div key={comp.name} className="bg-white p-4 md:p-6 rounded-2xl border border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-brand-primary transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-brand-primary transition-colors shrink-0">
                          <FileCode className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-zinc-900">{comp.name}</h4>
                          <div className="flex flex-wrap gap-1.5 mt-1">
                            {comp.props.map(p => (
                              <span key={p} className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-1.5 py-0.5 rounded">{p}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {comp.tokens.map(t => (
                          <span key={t} className="text-[7px] md:text-[8px] font-mono text-brand-primary bg-brand-primary/5 px-2 py-1 rounded-full border border-brand-primary/10">{t}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-900 rounded-2xl p-4 md:p-6 font-mono text-[9px] md:text-[10px] text-zinc-400 overflow-x-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-bold uppercase tracking-widest">Component.tsx</span>
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-500" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                  </div>
                  <pre className="text-brand-primary whitespace-pre-wrap">
                    {`export const Button = ({ variant, size, children }) => {
  const styles = cn(
    "rounded-lg font-bold transition-all",
    variant === "primary" && "bg-brand-blue text-white",
    size === "lg" && "px-8 py-4 text-sm"
  );
  return <button className={styles}>{children}</button>;
};`}
                  </pre>
                </div>
              </motion.div>
            )}

            {activeTab === "bugs" && (
              <motion.div
                key="bugs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-lg md:text-xl font-black uppercase tracking-tighter text-zinc-900">Bug Tracking</h3>
                  <div className="flex gap-2 items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-zinc-200 border-2 border-white" />
                      ))}
                    </div>
                    <button className="px-3 py-1.5 md:px-4 md:py-2 bg-zinc-50 text-zinc-400 rounded-xl text-[9px] md:text-[10px] font-bold uppercase tracking-widest border border-zinc-100">
                      4 Active Tickets
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-zinc-100 overflow-x-auto">
                  <table className="w-full text-left min-w-[500px]">
                    <thead>
                      <tr className="bg-zinc-50 border-b border-zinc-100">
                        <th className="px-4 md:px-6 py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">ID</th>
                        <th className="px-4 md:px-6 py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Issue</th>
                        <th className="px-4 md:px-6 py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</th>
                        <th className="px-4 md:px-6 py-4 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400">Priority</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                      {TICKETS.map((ticket) => (
                        <tr key={ticket.id} className="hover:bg-zinc-50/50 transition-colors cursor-pointer group">
                          <td className="px-4 md:px-6 py-4 font-mono text-[9px] md:text-[10px] text-zinc-400">{ticket.id}</td>
                          <td className="px-4 md:px-6 py-4">
                            <div className="flex flex-col">
                              <span className="text-[11px] md:text-xs font-bold text-zinc-900 group-hover:text-brand-primary transition-colors">{ticket.title}</span>
                              <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400 mt-1">{ticket.type}</span>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-4">
                            <div className="flex items-center gap-2">
                              {ticket.status === "Resolved" ? (
                                <CheckCircle2 className="w-3 h-3 text-green-500" />
                              ) : ticket.status === "In Progress" ? (
                                <Clock className="w-3 h-3 text-blue-500" />
                              ) : (
                                <AlertCircle className="w-3 h-3 text-zinc-300" />
                              )}
                              <span className="text-[9px] md:text-[10px] font-bold text-zinc-600">{ticket.status}</span>
                            </div>
                          </td>
                          <td className="px-4 md:px-6 py-4">
                            <span className={`text-[7px] md:text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              ticket.priority === "High" ? "bg-red-50 text-red-600" :
                              ticket.priority === "Medium" ? "bg-yellow-50 text-yellow-600" :
                              "bg-zinc-50 text-zinc-400"
                            }`}>
                              {ticket.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  <div className="bg-white p-3 md:p-4 rounded-2xl border border-zinc-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-zinc-900 tracking-tighter">12</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-400">Bugs Found</p>
                  </div>
                  <div className="bg-white p-3 md:p-4 rounded-2xl border border-zinc-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-green-600 tracking-tighter">8</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-400">Resolved</p>
                  </div>
                  <div className="bg-white p-3 md:p-4 rounded-2xl border border-zinc-100 text-center">
                    <p className="text-xl md:text-2xl font-black text-blue-500 tracking-tighter">4</p>
                    <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest text-zinc-400">Active</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
