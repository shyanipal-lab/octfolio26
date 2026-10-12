import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { 
  Cloud, 
  CreditCard, 
  ShoppingBag, 
  GraduationCap, 
  Award, 
  Smartphone, 
  Battery, 
  Car,
  Gamepad2
} from "lucide-react";

const MILESTONES = [
  {
    year: "Jul 2018 - Mar 2019",
    title: "Mayadata",
    description: "Product Designer · Cloudnative dashboards & infra UX",
    icon: Cloud,
    color: "#FFD02F",
  },
  {
    year: "Aug 2019 - Nov 2020",
    title: "Fyle",
    description: "Product Designer · Fintech, design systems, reimbursement workflows",
    icon: CreditCard,
    color: "#9747FF",
  },
  {
    year: "Feb 2021 - Jan 2022",
    title: "Flits",
    description: "Product Designer · Shopify merchant UX redesign",
    icon: ShoppingBag,
    color: "#00C3FF",
  },
  {
    year: "Jan 2022",
    title: "MSc · Bournemouth University",
    description: "Marketing & User Experience · UX research, WCAG, HCI, usability evaluation",
    icon: GraduationCap,
    color: "#FF708B",
  },
  {
    year: "Oct 2023",
    title: "Graduated",
    description: "Returned to Bengaluru after completing MSc in the UK.",
    icon: Award,
    color: "#4ADE80",
  },
  {
    year: "Jun - Jul 2024",
    title: "HoShaksham",
    description: "Product Designer · 0→1 mobile & web app for service providers",
    icon: Smartphone,
    color: "#F472B6",
  },
  {
    year: "Sept 2024 - Dec 2024",
    title: "Zemetric",
    description: "UI/UX Designer · EV charging dashboard & design system from scratch",
    icon: Battery,
    color: "#FB923C",
  },
  {
    year: "Mar 2025 - Present",
    title: "Mercedes-Benz R&D",
    description: "UX Designer (Contract) · Android Auto & Apple CarPlay · connected mobility",
    icon: Car,
    color: "#3B82F6",
  },
  {
    year: "Present & Future",
    title: "Designing Games",
    description: "Exploring the intersection of UX and game design. Leveling up the play experience.",
    icon: Gamepad2,
    color: "#A855F7",
  },
];

export default function JourneyGame() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-400%"]);
  
  // Intro text animations
  const introOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.05], [0, -50]);
  
  return (
    <motion.div 
      id="journey" 
      ref={containerRef} 
      className="h-[1000vh] relative overflow-visible bg-[#F9F9F9] border-t border-zinc-200 z-[50]"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Simple Clean Header */}
        <motion.div 
          style={{ opacity: introOpacity, y: introY }}
          className="absolute top-20 left-1/2 -translate-x-1/2 z-30 text-center pointer-events-none"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-black text-zinc-900 uppercase tracking-tighter leading-none"
          >
            Career <span className="text-brand-primary font-accent lowercase">Journey</span>
          </motion.h2>
          <p className="text-zinc-400 text-xs font-bold uppercase tracking-[0.4em] mt-4">Scroll to Explore</p>
        </motion.div>

        {/* The Journey Track */}
        <motion.div 
          style={{ x }}
          className="flex items-center gap-[40vw] pl-[40vw] pr-[80vw] relative z-10 mt-20"
        >
          {/* Connecting Line (Dashed) */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] border-t-2 border-dashed border-zinc-200 z-0" />

          {MILESTONES.map((milestone, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Milestone Card (Clean Sticky Note Style) */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -1 : 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                className="w-80 p-10 rounded-xl border border-zinc-200 relative group shadow-sm hover:shadow-md transition-all duration-500 bg-white"
              >
                {/* Connector Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-primary border-4 border-white z-[-1]" />

                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${milestone.color}15` }}>
                  <milestone.icon className="w-6 h-6" style={{ color: milestone.color }} />
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest mb-2 block text-zinc-400">
                  {milestone.year}
                </span>
                <h4 className="text-2xl font-display font-black mb-3 leading-none uppercase tracking-tighter text-zinc-900">
                  {milestone.title}
                </h4>
                <p className="text-sm font-medium leading-relaxed text-zinc-500">
                  {milestone.description}
                </p>

                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl opacity-50" style={{ backgroundColor: milestone.color }} />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Hint */}
      <motion.div 
        style={{ opacity: introOpacity }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <motion.div 
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-zinc-300 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-zinc-300 rounded-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
