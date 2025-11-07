'use client';

import { LayoutGroup, motion } from 'motion/react';
import { TextRotate } from '@/components/ui/text-rotate';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
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
          <div className="flex flex-col items-center text-center space-y-8 md:space-y-10">
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
                      'mobile designs',
                      'brand identities',
                      'design systems',
                    ]}
                    mainClassName="text-zinc-900 dark:text-zinc-50 px-3 md:px-4 bg-slate-200 dark:bg-zinc-800 overflow-hidden py-1 md:py-2 justify-center rounded-xl inline-block italic font-medium"
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
              className="text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed"
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Primary CTA */}
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-base md:text-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
              >
                Schedule a call
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#work"
                className="flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-lg border-2 border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-base md:text-lg font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200 w-full sm:w-auto min-w-[200px]"
              >
                View my work
              </a>
            </motion.div>

            {/* Trust Building Elements */}
            <motion.div
              className="w-full mt-12 md:mt-16 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {/* Trust Text */}
              <p className="text-sm text-zinc-500 dark:text-zinc-500 uppercase tracking-wider">
                Trusted by innovative teams
              </p>

              {/* Client Logos / Brands */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity">
                {/* Placeholder brand logos - Replace with actual logos */}
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600 text-sm font-medium">
                  <div className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                    TC
                  </div>
                  <span>TechCorp</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600 text-sm font-medium">
                  <div className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                    SA
                  </div>
                  <span>StartupAI</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600 text-sm font-medium">
                  <div className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                    DF
                  </div>
                  <span>DesignFlow</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-600 text-sm font-medium">
                  <div className="w-8 h-8 rounded bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs font-bold">
                    VC
                  </div>
                  <span>VentureCo</span>
                </div>
              </div>

            </motion.div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}

