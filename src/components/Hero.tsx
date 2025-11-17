'use client';

import { LayoutGroup, motion } from 'motion/react';
import Image from 'next/image';
import { TextRotate } from '@/components/ui/text-rotate';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
            <section className="relative w-full flex items-center justify-center overflow-hidden pt-24 md:pt-28 pb-8 md:pb-16 px-4 bg-transparent">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-30" />
        <div className="absolute bottom-1/4 right-0 w-px h-32 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-30" />
        
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-zinc-200 dark:border-zinc-800 opacity-20" />
        <div className="absolute bottom-0 left-0 w-32 h-32 border-b border-l border-zinc-200 dark:border-zinc-800 opacity-20" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto relative z-10">
        <LayoutGroup>
          <div className="flex flex-col items-center text-center">
            {/* Label: Your Creative Expert */}
            <motion.div
              className="mb-3 md:mb-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2.5 rounded-full bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-900/70 backdrop-blur-xl border border-white/20 dark:border-zinc-700/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.12),inset_0_1px_0_0_rgba(255,255,255,0.5)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.6)] dark:hover:shadow-[0_12px_48px_0_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/40 before:to-transparent before:pointer-events-none">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <Image src="/framer.png" alt="Framer" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 object-contain" priority />
                  <Image src="/figma.png" alt="Figma" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5 object-contain" priority />
                </div>
                <span className="text-xs md:text-sm font-medium text-zinc-900 dark:text-zinc-50 whitespace-nowrap">
                  Your Creative Expert
                </span>
              </div>
            </motion.div>

            {/* Main Headline with TextRotate */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 dark:text-zinc-50 leading-tight max-w-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.span className="inline-flex flex-wrap items-center justify-center gap-2" layout>
              <span>I design and develop</span>
                <span style={{ fontFamily: 'var(--font-lora), serif' }}>
                  <TextRotate
                    texts={[
                      'landing pages',
                      'SaaS products',
                      'web applications',
                      'brand identities',
                      'design systems',
                    ]}
                    mainClassName="text-zinc-900 dark:text-zinc-50 px-3 md:px-4 overflow-hidden py-1 md:py-2 justify-center rounded-xl inline-block italic font-medium"
                    elementLevelClassName="italic"
                    staggerFrom="last"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    exit={{ y: '-120%' }}
                    staggerDuration={0.015}
                    splitLevelClassName="overflow-hidden"
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    rotationInterval={2500}
                  />
                </span>
              </motion.span>
            </motion.h1>

            {/* Subtext - Conversion focused */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed mt-4 md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From concept to launch—I design and develop products that convert.
<br className="hidden sm:block" />
<span className="font-semibold text-zinc-900 dark:text-zinc-50">
  {' '}Beautiful design. Clean code. Real results.
</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 w-full max-w-2xl mt-8 md:mt-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm sm:text-base md:text-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-lg hover:shadow-xl flex-1 sm:flex-none sm:min-w-[200px]"
              >
                Schedule a call
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#work"
                className="flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm sm:text-base md:text-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 flex-1 sm:flex-none sm:min-w-[200px]"
              >
                View my work
              </a>
            </motion.div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

