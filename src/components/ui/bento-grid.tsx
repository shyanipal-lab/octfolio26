"use client";

import * as React from "react";
import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

// Animation variants for the container to stagger children with tight 50ms stagger
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

// Animation variants for each grid item using Emil Kowalski custom ease-out and subtle scale(0.98)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.32,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

/**
 * Props for the BentoGridShowcase component.
 * Each prop represents a "slot" in the grid.
 */
export interface BentoGridShowcaseProps {
  /** Slot for the top-left card (Integrations) */
  integrations: React.ReactNode;
  /** Slot for the top-right card (Feature Tags) */
  featureTags: React.ReactNode;
  /** Slot for the tall middle card (Main Feature) */
  mainFeature: React.ReactNode;
  /** Slot for the middle-left card (Secondary Feature) */
  secondaryFeature: React.ReactNode;
  /** Slot for the middle-right card (Statistic) */
  statistic: React.ReactNode;
  /** Slot for the bottom-left card (Journey) */
  journey: React.ReactNode;
  /** Optional class names for the grid container */
  className?: string;
}

/**
 * A responsive, animated 3-column bento grid layout component.
 * It arranges six content slots in a specific 3-row vertical layout.
 */
export const BentoGridShowcase = ({
  integrations,
  featureTags,
  mainFeature,
  secondaryFeature,
  statistic,
  journey,
  className,
}: BentoGridShowcaseProps) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        // Core grid layout: 1 col on mobile, 3 on desktop
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        // Defines 3 explicit rows on medium screens and up
        "md:grid-rows-3",
        // Use minmax to ensure cards can grow but have a minimum height
        "auto-rows-[minmax(200px,auto)]",
        className
      )}
    >
      {/* Slot 1: Integrations (1,1) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {integrations}
      </motion.div>

      {/* Slot 2: Main Feature (1,2) - Spans 3 rows */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-3">
        {mainFeature}
      </motion.div>

      {/* Slot 3: Feature Tags (1,3) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {featureTags}
      </motion.div>

      {/* Slot 4: Secondary Feature (2,1) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {secondaryFeature}
      </motion.div>

      {/* Slot 5: Statistic (2,3) - Spans 2 rows */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2">
        {statistic}
      </motion.div>

      {/* Slot 6: Journey (3,1) */}
      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {journey}
      </motion.div>
    </motion.section>
  );
};

/* Additional exports for backward compatibility */
export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
  key?: React.Key;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl min-h-[22rem]",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="absolute inset-0 w-full h-full z-0">{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent mt-auto rounded-b-xl text-white">
      <Icon className="h-10 w-10 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-zinc-200 text-sm">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-20",
      )}
    >
      <a
        href={href}
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "pointer-events-auto bg-white/90 text-zinc-900 hover:bg-white shadow-md inline-flex items-center"
        )}
      >
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
);

export default BentoGridShowcase;
