"use client";

import { motion } from "motion/react";

export default function AboutSection() {
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
          <motion.span
            key={`word-${keyIndex++}`}
            variants={letterAnimation}
            transition={{ duration: 0.3 }}
          >
            {word}
          </motion.span>
        );
      }
    }
    
    return <>{result}</>;
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-white dark:bg-zinc-950 min-h-[50vh] overflow-x-hidden">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col space-y-6 md:space-y-8 w-full">
          {/* Section Heading - Centered */}
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
                About Me
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
              My Story
            </motion.p>
          </div>

          {/* Single Paragraph - Left Aligned, Full Width */}
          <motion.p
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight w-full text-left break-words"
          >
            {renderTextWithHighlights("I help businesses bring their ideas to life online. With a mix of thoughtful design and solid development, I create digital products that not only look good but actually work—driving engagement and real growth.", [
              { word: "ideas", color: "text-amber-600", darkColor: "dark:text-amber-500", bgColor: "bg-amber-50", darkBgColor: "dark:bg-amber-950/30", borderColor: "border-amber-500", darkBorderColor: "dark:border-amber-500" },
              { word: "design", color: "text-emerald-600", darkColor: "dark:text-emerald-400", bgColor: "bg-emerald-50", darkBgColor: "dark:bg-emerald-950/30", borderColor: "border-emerald-500", darkBorderColor: "dark:border-emerald-400" },
              { word: "growth", color: "text-violet-600", darkColor: "dark:text-violet-400", bgColor: "bg-violet-50", darkBgColor: "dark:bg-violet-950/30", borderColor: "border-violet-500", darkBorderColor: "dark:border-violet-400" },
            ])}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

