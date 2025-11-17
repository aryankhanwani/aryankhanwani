"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    services: ["Web Design", "Frontend Development", "UI/UX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    services: ["Product Design", "React Development", "Design System"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Mobile App Interface",
    services: ["Mobile Design", "iOS Development", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Corporate Website",
    services: ["Web Design", "WordPress", "SEO"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
];

export default function BestProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
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
                Best Projects
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
              Featured Work
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
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
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="group"
                >
                  <a
                    href="#work"
                    className="block h-full"
                  >
                    <motion.div
                      animate={{
                        y: isHovered ? -8 : 0,
                        rotateX: isHovered ? 2 : 0,
                        rotateY: isHovered ? -1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                        boxShadow: isHovered
                          ? "0 2px 4px 0 rgba(0,0,0,0.08), 0 8px 16px 0 rgba(0,0,0,0.12), 0 16px 32px 0 rgba(0,0,0,0.15), 0 32px 64px 0 rgba(0,0,0,0.18)"
                          : "0 1px 2px 0 rgba(0,0,0,0.05), 0 4px 8px 0 rgba(0,0,0,0.08), 0 12px 24px 0 rgba(0,0,0,0.1), 0 24px 48px 0 rgba(0,0,0,0.12)",
                      }}
                      className={cn(
                        "relative h-full rounded-2xl overflow-hidden",
                        "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl",
                        "transition-all duration-300"
                      )}
                    >
                      {/* Inner highlight for 3D depth */}
                      <div 
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{
                          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.05)",
                        }}
                      />
                      
                      {/* Project Image */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading={index < 2 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index < 2 ? "high" : "low"}
                          animate={{
                            scale: isHovered ? 1.05 : 1,
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <div className="flex items-start justify-between gap-6">
                          {/* Left: Title and Services */}
                          <div className="flex-1 space-y-3 min-w-0">
                            {/* Title */}
                            <motion.h3 
                              animate={{
                                x: isHovered ? 2 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                              className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50"
                            >
                              {project.title}
                            </motion.h3>

                            {/* Services */}
                            <div className="flex flex-wrap gap-2">
                              {project.services.map((service, serviceIndex) => (
                                <span
                                  key={serviceIndex}
                                  className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider"
                                >
                                  {service}
                                  {serviceIndex < project.services.length - 1 && (
                                    <span className="mx-2">•</span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Right: Arrow CTA Button */}
                          <motion.div
                            animate={{
                              scale: isHovered ? 1.1 : 1,
                              x: isHovered ? 4 : 0,
                              y: isHovered ? -4 : 0,
                            }}
                            transition={{ 
                              type: "spring",
                              damping: 20,
                              stiffness: 300,
                            }}
                            className={cn(
                              "flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl",
                              "bg-zinc-900 dark:bg-zinc-50",
                              "flex items-center justify-center",
                              "shadow-lg",
                              "transition-colors duration-200"
                            )}
                          >
                            <motion.div
                              animate={{
                                rotate: isHovered ? 0 : -45,
                                x: isHovered ? 2 : 0,
                                y: isHovered ? -2 : 0,
                              }}
                              transition={{ 
                                type: "spring",
                                damping: 20,
                                stiffness: 300,
                              }}
                            >
                              <ArrowRight className="w-6 h-6 md:w-7 md:h-7 text-white dark:text-zinc-900" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
