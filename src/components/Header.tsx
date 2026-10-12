import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// Import Lottie JSONs
import emailLottie from "../assets/lottie/email.json";
import linkedinLottie from "../assets/lottie/linkedin.json";
import resumeLottie from "../assets/lottie/resume.json";

const SOCIAL_ITEMS = [
  { label: "Email", href: "mailto:shyanipal06@gmail.com", lottie: emailLottie },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shyani/", lottie: linkedinLottie },
  { label: "Resume", href: "/resume", lottie: resumeLottie },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "Fun", href: "/fun" },
];

function SocialLottie({ animationData, isHovered }: { animationData: any; isHovered: boolean }) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (isHovered) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.stop();
    }
  }, [isHovered]);

  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      loop={true}
      autoplay={false}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/" && (!location.hash || location.hash === "#home");
    }
    if (href.startsWith("/#")) {
      return location.pathname === "/" && location.hash === href.substring(1);
    }
    return location.pathname === href;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? "py-2 md:py-4" : "py-4 md:py-8"
    }`}>
      <nav className={`max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-3.5 transition-all duration-500 ${
        isScrolled ? "bg-background/85 backdrop-blur-md rounded-full shadow-xs border border-border mx-4 md:mx-auto ring-1 ring-foreground/5" : "bg-transparent border-transparent"
      }`}>
        <Link to="/">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-3"
          >
            <div className="w-7 h-7 md:w-8 md:h-8 bg-foreground text-background rounded-lg flex items-center justify-center shadow-2xs">
              <span className="font-display text-base md:text-lg">S</span>
            </div>
            <span className="font-display text-lg md:text-xl font-bold tracking-tighter uppercase">Shyani</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className={`text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4 ${
                isActive(item.href) ? "text-brand-primary font-accent lowercase" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="w-[1px] h-4 bg-border" />

          <div className="flex items-center gap-6">
            {SOCIAL_ITEMS.map((item) => {
              const isInternal = item.href.startsWith("/");
              const Component = isInternal ? Link : motion.a;
              const componentProps = isInternal 
                ? { to: item.href } 
                : { href: item.href, target: item.label === "Email" ? undefined : "_blank" };

              return (
                <Component
                  key={item.label}
                  {...(componentProps as any)}
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(item.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  whileHover={{ y: -1 }}
                  className="flex items-center gap-1.5 group rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-4"
                >
                  <div className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity">
                    <SocialLottie 
                      animationData={item.lottie} 
                      isHovered={hoveredSocial === item.label}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-muted-foreground group-hover:text-brand-primary group-hover:font-accent group-hover:lowercase transition-colors">
                    {item.label.toLowerCase()}.json
                  </span>
                </Component>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/#contact" className="hidden sm:block">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-foreground text-background px-5 md:px-6 py-2 md:py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all shadow-xs hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px"
            >
              Let's Talk
            </motion.button>
          </Link>
          
          <button className="md:hidden p-2 text-foreground hover:bg-muted rounded-full transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-6 right-6 bg-card border border-border rounded-2xl p-6 shadow-xl z-[110]"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((item) => (
                <Link 
                  key={item.label} 
                  to={item.href}
                  className="text-sm font-bold uppercase tracking-widest py-3 border-b border-border text-foreground hover:text-brand-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="py-4">
                <div className="text-[10px] font-mono font-bold text-brand-primary font-accent lowercase mb-4">contact.json</div>
                <div className="flex flex-col gap-4 pl-4 border-l border-border">
                  {SOCIAL_ITEMS.map((item) => {
                    const isInternal = item.href.startsWith("/");
                    const Component = isInternal ? Link : "a";
                    const componentProps = isInternal 
                      ? { to: item.href } 
                      : { href: item.href, target: item.label === "Email" ? undefined : "_blank" };

                    return (
                      <Component 
                        key={item.label}
                        {...(componentProps as any)}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs font-medium text-zinc-700 hover:text-brand-primary hover:font-accent hover:lowercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 rounded-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-5 h-5">
                          <SocialLottie 
                            animationData={item.lottie} 
                            isHovered={true}
                          />
                        </div>
                        {item.label}
                      </Component>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
