import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  id: string;
}

interface GradientMenuProps {
  items: MenuItem[];
  activeSection?: string;
}

export default function GradientMenu({ items, activeSection }: GradientMenuProps) {
  const location = useLocation();

  return (
    <div className="flex justify-center items-center py-6">
      <ul className="flex gap-4 md:gap-6">
        {items.map(({ label, href, icon, gradientFrom, gradientTo, id }, idx) => {
          const isInternal = href.startsWith('/') && !href.includes('#');
          const isHash = href.includes('#');
          const isActive = activeSection === id || (id === 'work' && activeSection === 'changelog');
          
          let Component: any = "a";
          let props: any = { href };

          if (isInternal || isHash) {
            Component = Link;
            props = { to: href };
          }

          return (
            <li
              key={idx}
              style={{ 
                '--gradient-from': gradientFrom, 
                '--gradient-to': gradientTo 
              } as React.CSSProperties}
              className={`relative w-[40px] h-[40px] md:w-[48px] md:h-[48px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[112px] md:hover:w-[144px] hover:shadow-none group cursor-pointer ${isActive ? 'ring-2 ring-offset-2 ring-brand-primary' : ''}`}
            >
              <Component 
                {...props} 
                className="absolute inset-0 flex items-center justify-center z-20 rounded-full focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:outline-none"
                aria-label={label}
              >
                {/* Gradient background on hover */}
                <span className="absolute inset-0 rounded-full bg-brand-primary opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                {/* Blur glow */}
                <span className="absolute top-[8px] inset-x-0 h-full rounded-full bg-brand-primary blur-[12px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

                {/* Icon */}
                <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                  <span className={`text-lg md:text-xl ${isActive ? 'text-brand-primary' : 'text-gray-500'}`}>{icon}</span>
                </span>

                {/* Title */}
                <span className="absolute text-white uppercase font-bold tracking-wide text-[10px] md:text-xs transition-all duration-500 scale-0 group-hover:scale-100 delay-150">
                  {label}
                </span>
              </Component>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
