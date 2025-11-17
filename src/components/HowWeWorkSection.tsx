"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Code, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understanding your vision and goals. We identify core problems and create a roadmap with clear milestones.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Bringing your vision to life through thoughtful design and clean code. Regular updates keep you in the loop.",
    icon: Code,
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description: "Launching your product and monitoring performance. Ongoing support and optimization for long-term success.",
    icon: Rocket,
  },
];

export default function HowWeWorkSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const letterAnimation = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-transparent min-h-[60vh] overflow-x-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative z-10 px-4">
        <div className="flex flex-col space-y-12 md:space-y-16 w-full">
          {/* Section Heading */}
          <div className="flex flex-col items-center gap-3 w-full">
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="flex items-center justify-center gap-4 w-full"
            >
              <div className="h-px w-12 md:w-16 bg-zinc-300 dark:bg-zinc-700 flex-shrink-0"></div>
              <motion.h2
                variants={letterAnimation}
                transition={{ duration: 0.3 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider whitespace-nowrap"
              >
                Our Process
              </motion.h2>
              <div className="h-px w-12 md:w-16 bg-zinc-300 dark:bg-zinc-700 flex-shrink-0"></div>
            </motion.div>
            <motion.p
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="text-sm md:text-base text-zinc-500 dark:text-zinc-500 uppercase tracking-widest"
            >
              How We Work Together
            </motion.p>
          </div>

          {/* Horizontal Steps Flow */}
          <div className="relative">
            {/* Base Connecting Line */}
            <div className="hidden md:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent overflow-hidden rounded-full" />

            {/* Bright Shimmer Beam */}
            <motion.div
              className="hidden md:block absolute top-24 left-[10%] right-[10%] h-1 overflow-hidden rounded-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              {/* Glow Layer - Light Theme */}
              <motion.div
                className="absolute inset-0 dark:hidden"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                  delay: 0.1,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(0, 0, 0, 0.15) 20%, 
                    rgba(0, 0, 0, 0.25) 50%, 
                    rgba(0, 0, 0, 0.15) 80%, 
                    transparent 100%)`,
                  width: "50%",
                  filter: "blur(8px)",
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.2), 0 0 60px rgba(0, 0, 0, 0.15)",
                }}
              />

              {/* Glow Layer - Dark Theme */}
              <motion.div
                className="hidden dark:block absolute inset-0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                  delay: 0.1,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(255, 255, 255, 0.5) 20%, 
                    rgba(255, 255, 255, 0.7) 50%, 
                    rgba(255, 255, 255, 0.5) 80%, 
                    transparent 100%)`,
                  width: "50%",
                  filter: "blur(8px)",
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.4)",
                }}
              />

              {/* Main Shimmer Beam - Light Theme */}
              <motion.div
                className="absolute inset-0 dark:hidden"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(0, 0, 0, 0.3) 20%, 
                    rgba(0, 0, 0, 0.5) 50%, 
                    rgba(0, 0, 0, 0.3) 80%, 
                    transparent 100%)`,
                  width: "40%",
                  filter: "blur(2px)",
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.2)",
                }}
              />

              {/* Main Shimmer Beam - Dark Theme */}
              <motion.div
                className="hidden dark:block absolute inset-0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(255, 255, 255, 0.9) 20%, 
                    rgba(255, 255, 255, 1) 50%, 
                    rgba(255, 255, 255, 0.9) 80%, 
                    transparent 100%)`,
                  width: "40%",
                  filter: "blur(2px)",
                  boxShadow: "0 0 25px rgba(255, 255, 255, 0.9), 0 0 50px rgba(255, 255, 255, 0.7)",
                }}
              />
              
              {/* Bright Core Beam - Light Theme */}
              <motion.div
                className="absolute inset-0 dark:hidden"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                  delay: 0.05,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(0,0,0,0.4) 20%, 
                    rgba(0,0,0,0.6) 50%, 
                    rgba(0,0,0,0.4) 80%, 
                    transparent 100%)`,
                  width: "25%",
                  filter: "blur(0.5px)",
                  boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
                }}
              />

              {/* Bright Core Beam - Dark Theme */}
              <motion.div
                className="hidden dark:block absolute inset-0"
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 0.8,
                  delay: 0.05,
                }}
                style={{
                  background: `linear-gradient(90deg, 
                    transparent 0%, 
                    rgba(255,255,255,0.98) 20%, 
                    rgba(255,255,255,1) 50%, 
                    rgba(255,255,255,0.98) 80%, 
                    transparent 100%)`,
                  width: "25%",
                  filter: "blur(0.5px)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 1), 0 0 30px rgba(255, 255, 255, 0.8)",
                }}
              />
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
                const [isHovered, setIsHovered] = useState(false);

                const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  setMousePosition({ x, y });
                };

                return (
                  <motion.div
                    key={step.number}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        },
                      },
                    }}
                    className="relative"
                  >
                    {/* Step Card */}
                    <div
                      onMouseMove={handleMouseMove}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className={cn(
                        "relative h-full p-8 md:p-10 rounded-2xl overflow-hidden",
                        "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl",
                        "border border-zinc-200/30 dark:border-zinc-700/30",
                        "shadow-[0_8px_32px_0_rgba(0,0,0,0.08)]",
                        "dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]",
                        "transition-all duration-300"
                      )}
                    >
                      {/* Light theme spotlight */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0 dark:hidden"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.2) 0%, transparent 70%)`,
                        }}
                      />
                      {/* Dark theme spotlight */}
                      <div
                        className="hidden dark:block absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-0"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          background: `radial-gradient(circle 300px at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 70%)`,
                        }}
                      />
                      {/* Top Section: Step Number and Icon */}
                      <div className="relative z-10 flex items-start justify-between mb-8">
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                            Step
                          </span>
                          <span className="text-5xl md:text-6xl font-bold text-zinc-300 dark:text-zinc-700 leading-none">
                            {step.number}
                          </span>
                        </div>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center shadow-sm border border-zinc-200/50 dark:border-zinc-700/50">
                          <Icon className="w-7 h-7 text-zinc-700 dark:text-zinc-300" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="relative z-10 space-y-4">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Subtle Bottom Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200/30 dark:via-zinc-700/30 to-transparent" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
