import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoHomeOutline, IoPersonOutline, IoBriefcaseOutline, IoGameControllerOutline, IoChatbubbleOutline } from 'react-icons/io5';
import GradientMenu from "./ui/gradient-menu";

const NAV_ITEMS = [
  { label: "Home", href: "/#home", icon: <IoHomeOutline />, id: "home", gradientFrom: '#037DD6', gradientTo: '#02c39a' },
  { label: "About", href: "/about", icon: <IoPersonOutline />, id: "about", gradientFrom: '#037DD6', gradientTo: '#F6851B' },
  { label: "Work", href: "/#work", icon: <IoBriefcaseOutline />, id: "work", gradientFrom: '#F6851B', gradientTo: '#FFD02F' },
  { label: "Games", href: "/fun", icon: <IoGameControllerOutline />, id: "fun", gradientFrom: '#0500FF', gradientTo: '#037DD6' },
  { label: "Chat", href: "/#contact", icon: <IoChatbubbleOutline />, id: "contact", gradientFrom: '#F6851B', gradientTo: '#f434e2' },
];

export default function PlaygroundLayer() {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState("home");
  const constraintsRef = useRef(null);

  // Track active section
  useEffect(() => {
    if (location.pathname === '/fun') {
      setActiveSection('fun');
      return;
    }
    if (location.pathname === '/about') {
      setActiveSection('about');
      return;
    }

    // Default to home if on root path and no hash or at top
    if (location.pathname === '/' && (!location.hash || location.hash === '#home' || window.scrollY < 100)) {
      setActiveSection('home');
    }

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'fun', 'changelog', 'work', 'journey', 'contact'];
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Add scroll listener for top of page fallback
    const handleScroll = () => {
      if (location.pathname === '/' && window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[60]" ref={constraintsRef}>
      {/* Top Navigation Bar */}
      <div className="nav-top-bar absolute top-6 left-1/2 -translate-x-1/2 pointer-events-auto">
        <GradientMenu items={NAV_ITEMS} activeSection={activeSection} />
      </div>
    </div>
  );
}
