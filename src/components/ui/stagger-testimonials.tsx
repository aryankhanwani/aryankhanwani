"use client"

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 0,
    testimonial: "We've seen 300% growth in conversions, 5x faster development cycles, and a 40% increase in revenue within just 6 months. The ROI has been incredible—every dollar invested has returned 10x.",
    by: "Alex",
    role: "CEO at TechCorp",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    size: "full",
    rating: 5
  },
  {
    id: 1,
    testimonial: "I'm confident my data is safe. I can't say that about other providers.",
    by: "Dan",
    role: "CTO at SecureNet",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=faces",
    size: "medium",
    rating: 5
  },
  {
    id: 2,
    testimonial: "We were completely lost before we found this solution. The team's expertise helped us streamline operations and achieve results we never thought possible. Can't thank you enough!",
    by: "Stephanie",
    role: "COO at InnovateCo",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    size: "small",
    rating: 5
  },
  {
    id: 3,
    testimonial: "The products make planning and execution seamless. The intuitive interface has saved us countless hours and increased our team productivity significantly. Can't recommend enough!",
    by: "Marie",
    role: "CFO at FuturePlanning",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces",
    size: "small",
    rating: 5
  },
];

interface TestimonialCardProps {
  testimonial: typeof testimonials[0];
  index: number;
  isMobile?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isMobile = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    full: "col-span-1 md:col-span-4",
    large: "col-span-1 md:col-span-2",
    medium: "col-span-1 md:col-span-2",
    small: "col-span-1"
  };

  const isFull = testimonial.size === "full" && !isMobile;
  const isLarge = testimonial.size === "large";
  const isSmall = testimonial.size === "small";

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

  const renderTextWithHighlights = (
    text: string,
    highlights: { word: string; color: string; darkColor: string; bgColor: string; darkBgColor: string; borderColor: string; darkBorderColor: string }[]
  ) => {
    // Sort highlights by length (longest first) to match multi-word phrases first
    const sortedHighlights = [...highlights].sort((a, b) => b.word.length - a.word.length);
    
    // Split text into words while preserving spaces and punctuation
    const words = text.split(/(\s+)/);
    let result: React.ReactElement[] = [];
    let keyIndex = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      
      // Check if this word (trimmed and without punctuation) matches any highlight
      const trimmedWord = word.trim().toLowerCase();
      // Remove punctuation for matching (keep original word for display)
      const wordWithoutPunctuation = trimmedWord.replace(/[.,!?;:—\-]/g, '');
      let matchedHighlight: typeof highlights[0] | null = null;
      
      for (const highlight of sortedHighlights) {
        if (wordWithoutPunctuation === highlight.word.toLowerCase()) {
          matchedHighlight = highlight;
          break;
        }
      }
      
      if (matchedHighlight) {
        // Add highlighted word
        result.push(
          <motion.span
            key={`highlight-${keyIndex++}`}
            variants={letterAnimation}
            transition={{ duration: 0.3 }}
            className={`${matchedHighlight.color} ${matchedHighlight.darkColor} border-2 ${matchedHighlight.borderColor} ${matchedHighlight.darkBorderColor} inline border-dotted px-2 md:px-3 rounded-lg ${matchedHighlight.bgColor} ${matchedHighlight.darkBgColor} whitespace-nowrap`}
          >
            {word}
          </motion.span>
        );
      } else {
        // Add regular word
        result.push(
          <span key={`word-${keyIndex++}`}>
            {word}
          </span>
        );
      }
    }
    
    return <>{result}</>;
  };

  // Define highlights for the first testimonial
  const highlights = isFull ? [
    { word: "300%", color: "text-emerald-600", darkColor: "dark:text-emerald-400", bgColor: "bg-emerald-50", darkBgColor: "dark:bg-emerald-950/30", borderColor: "border-emerald-500", darkBorderColor: "dark:border-emerald-400" },
    { word: "growth", color: "text-emerald-600", darkColor: "dark:text-emerald-400", bgColor: "bg-emerald-50", darkBgColor: "dark:bg-emerald-950/30", borderColor: "border-emerald-500", darkBorderColor: "dark:border-emerald-400" },
    { word: "5x", color: "text-violet-600", darkColor: "dark:text-violet-400", bgColor: "bg-violet-50", darkBgColor: "dark:bg-violet-950/30", borderColor: "border-violet-500", darkBorderColor: "dark:border-violet-400" },
    { word: "40%", color: "text-amber-600", darkColor: "dark:text-amber-500", bgColor: "bg-amber-50", darkBgColor: "dark:bg-amber-950/30", borderColor: "border-amber-500", darkBorderColor: "dark:border-amber-500" },
    { word: "revenue", color: "text-amber-600", darkColor: "dark:text-amber-500", bgColor: "bg-amber-50", darkBgColor: "dark:bg-amber-950/30", borderColor: "border-amber-500", darkBorderColor: "dark:border-amber-500" },
    { word: "6", color: "text-blue-600", darkColor: "dark:text-blue-400", bgColor: "bg-blue-50", darkBgColor: "dark:bg-blue-950/30", borderColor: "border-blue-500", darkBorderColor: "dark:border-blue-400" },
    { word: "months", color: "text-blue-600", darkColor: "dark:text-blue-400", bgColor: "bg-blue-50", darkBgColor: "dark:bg-blue-950/30", borderColor: "border-blue-500", darkBorderColor: "dark:border-blue-400" },
    { word: "ROI", color: "text-violet-600", darkColor: "dark:text-violet-400", bgColor: "bg-violet-50", darkBgColor: "dark:bg-violet-950/30", borderColor: "border-violet-500", darkBorderColor: "dark:border-violet-400" },
    { word: "10x", color: "text-violet-600", darkColor: "dark:text-violet-400", bgColor: "bg-violet-50", darkBgColor: "dark:bg-violet-950/30", borderColor: "border-violet-500", darkBorderColor: "dark:border-violet-400" },
  ] : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "relative group",
        isMobile ? "w-full" : sizeClasses[testimonial.size as keyof typeof sizeClasses]
      )}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        animate={{
          y: isHovered ? -3 : 0,
          rotateX: isHovered ? 2 : 0,
          rotateY: isHovered ? -2 : 0,
          scale: isHovered ? 1.01 : 1,
        }}
        transition={{ duration: 0, type: "tween" }}
        className={cn(
          "relative p-6 md:p-8 rounded-2xl overflow-hidden transform-gpu",
          isMobile ? "h-[420px]" : "h-full",
          "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl",
          "border-2 border-zinc-200 dark:border-zinc-800",
          "transition-all duration-300",
          "hover:border-zinc-300 dark:hover:border-zinc-700",
          isFull && !isMobile && "bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950",
          // Base shadow only, no hover shadows
          "shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.1)]",
          "dark:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.3),0_2px_4px_-1px_rgba(0,0,0,0.2),inset_0_1px_0_0_rgba(255,255,255,0.05)]"
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* 3D Edge Highlight */}
        <motion.div 
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.15) 100%)",
            mixBlendMode: "overlay"
          }}
        />
        
        {/* 3D Top Highlight */}
        <motion.div 
          animate={{ opacity: isHovered ? 0.6 : 0.3 }}
          transition={{ duration: 0 }}
          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-2xl pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%)"
          }}
        />
        
        {/* 3D Bottom Shadow Layer */}
        <motion.div 
          animate={{ 
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-full pointer-events-none blur-xl"
          style={{
            background: "radial-gradient(ellipse, rgba(0,0,0,0.25) 0%, transparent 70%)",
            transform: "translateZ(-20px)"
          }}
        />
        {/* Decorative gradient overlay */}
        {isFull && (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/5 via-transparent to-transparent dark:from-zinc-50/5 pointer-events-none" />
        )}

        {/* Animated background pattern for full card */}
        {isFull && (
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              opacity: isHovered ? 0.15 : 0.05,
            }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,0,0,0.1),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1),transparent_60%)]"
          />
        )}

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-100/30 to-transparent dark:from-zinc-800/30 rounded-bl-full" />
        {isFull && (
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-zinc-100/20 to-transparent dark:from-zinc-800/20 rounded-tr-full" />
        )}

        {/* Quote Icon */}
        <motion.div
          animate={{ 
            opacity: isHovered ? 0.1 : 0.05,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0 }}
          className={cn(
            "absolute opacity-5 transition-opacity",
            isMobile ? "top-4 right-4" : isFull ? "top-6 right-6" : "top-4 right-4"
          )}
        >
          <Quote className={cn(
            "text-zinc-900 dark:text-zinc-50",
            isMobile ? "h-10 w-10" : isFull ? "h-16 w-16" : isSmall ? "h-8 w-8" : "h-12 w-12"
          )} />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "fill-amber-400 text-amber-400 dark:fill-amber-500 dark:text-amber-500",
                  isMobile ? "h-4 w-4" : isFull ? "h-5 w-5" : "h-3.5 w-3.5"
                )} 
              />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className={cn(
            "text-zinc-900 dark:text-zinc-50 font-medium mb-6 flex-grow",
            isMobile 
              ? "text-base leading-relaxed" 
              : isFull 
                ? "text-xl md:text-2xl lg:text-3xl leading-loose md:leading-[1.6] lg:leading-[1.7]" 
                : "leading-relaxed",
            !isMobile && (isSmall ? "text-sm md:text-base" : "text-base md:text-lg")
          )}>
            "{isFull && !isMobile ? renderTextWithHighlights(testimonial.testimonial, highlights) : testimonial.testimonial}"
          </p>

          {/* Author Info */}
          <div className={cn(
            "flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800",
            isMobile ? "flex-row items-center" : isFull && "md:flex-row md:items-center",
            !isMobile && isSmall && "flex-col items-start gap-2"
          )}>
            <div className="relative flex-shrink-0">
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.05 : 1,
                  z: isHovered ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800",
                  "shadow-lg",
                  isMobile ? "h-12 w-12" : isFull ? "h-16 w-16" : isSmall ? "h-10 w-10" : "h-12 w-12"
                )}
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)"
                }}
              >
                <img
                  src={testimonial.imgSrc}
                  alt={testimonial.by}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
              <motion.div 
                animate={{ opacity: isHovered ? 0.2 : 0.1 }}
                transition={{ duration: 0 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-zinc-900/10 to-transparent dark:from-zinc-50/10"
              />
              {/* 3D ring around image */}
              <motion.div
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  opacity: isHovered ? 0.3 : 0
                }}
                transition={{ duration: 0 }}
                className="absolute inset-0 rounded-full border-2 border-zinc-300 dark:border-zinc-600 pointer-events-none"
                style={{ transform: "translateZ(5px)" }}
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className={cn(
                "font-semibold text-zinc-900 dark:text-zinc-50 truncate",
                isMobile ? "text-sm" : isFull ? "text-lg md:text-xl" : isSmall ? "text-xs md:text-sm" : "text-sm md:text-base"
              )}>
                {testimonial.by}
              </p>
              <p className={cn(
                "text-zinc-600 dark:text-zinc-400 truncate",
                isMobile ? "text-xs" : isFull ? "text-sm md:text-base" : "text-xs"
              )}>
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* 3D Hover glow effect */}
        <motion.div
          animate={{
            opacity: isHovered ? 0.4 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0 }}
          className="absolute inset-0 bg-gradient-to-br from-zinc-900/15 via-transparent to-transparent dark:from-zinc-50/15 pointer-events-none rounded-2xl"
          style={{ transform: "translateZ(5px)" }}
        />
        
        {/* 3D Inner shadow for depth */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06), inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
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

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-transparent overflow-x-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-6 md:space-y-8 w-full mb-12 md:mb-16">
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
                Testimonials
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
              What Clients Say
            </motion.p>
          </div>
        </div>

        {/* Mobile: Stacked Cards Carousel */}
        <div className="md:hidden relative">
          <div className="relative h-[450px] overflow-visible">
            {testimonials.map((testimonial, index) => {
              const offset = index - currentIndex;
              const isActive = index === currentIndex;
              const isVisible = Math.abs(offset) <= 2;

              return (
                <motion.div
                  key={testimonial.id}
                  className="absolute inset-x-0"
                  initial={false}
                  animate={{
                    x: offset * 12,
                    y: Math.abs(offset) * 12,
                    scale: isActive ? 1 : 0.88,
                    opacity: isVisible ? (isActive ? 1 : 0.5) : 0,
                    zIndex: testimonials.length - Math.abs(offset),
                  }}
                  transition={{
                    type: "spring",
                    damping: 25,
                    stiffness: 300,
                  }}
                >
                  <div className="w-full max-w-sm mx-auto h-[420px]">
                    <TestimonialCard
                      testimonial={testimonial}
                      index={index}
                      isMobile={true}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              onClick={prevCard}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl",
                "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-2 border-zinc-200 dark:border-zinc-800",
                "text-zinc-900 dark:text-zinc-50",
                "hover:bg-zinc-900 dark:hover:bg-zinc-50 hover:text-white dark:hover:text-zinc-900 hover:border-zinc-900 dark:hover:border-zinc-50",
                "shadow-lg hover:shadow-xl transition-all duration-200"
              )}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Dots indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-200",
                    index === currentIndex
                      ? "w-8 bg-zinc-900 dark:bg-zinc-50"
                      : "w-2 bg-zinc-300 dark:bg-zinc-700"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl",
                "bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl border-2 border-zinc-200 dark:border-zinc-800",
                "text-zinc-900 dark:text-zinc-50",
                "hover:bg-zinc-900 dark:hover:bg-zinc-50 hover:text-white dark:hover:text-zinc-900 hover:border-zinc-900 dark:hover:border-zinc-50",
                "shadow-lg hover:shadow-xl transition-all duration-200"
              )}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Desktop: Bento Grid Layout */}
        <div className="hidden md:grid grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
