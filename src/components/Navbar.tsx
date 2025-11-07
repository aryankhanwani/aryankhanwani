'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Initialize scroll state on mount
  useEffect(() => {
    const checkScroll = () => {
      if (typeof window !== 'undefined') {
        setIsScrolled(window.scrollY > 50);
      }
    };
    checkScroll();
  }, []);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4">
      <motion.div
        className="flex items-center justify-between rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg px-4 md:px-6 py-3 mx-auto"
        initial={{
          maxWidth: '1280px',
        }}
        animate={{
          maxWidth: isScrolled ? '900px' : '1280px',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
      >
        {/* Name - Responsive */}
        <div className="flex items-center">
          <span className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            <span className="hidden sm:inline">Aryan Khanwani</span>
            <span className="sm:hidden">A.K.</span>
          </span>
        </div>

        {/* Nav Items - Always visible on desktop */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#work"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 relative group transition-colors"
          >
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-50 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 relative group transition-colors"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-50 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-50 relative group transition-colors"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-zinc-900 dark:bg-zinc-50 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/* Right side - Theme toggle and CTA */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggle */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle theme"
            type="button"
          >
            {theme === 'light' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-900 dark:text-zinc-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-zinc-900 dark:text-zinc-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-4 md:px-6 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm md:text-base font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Schedule a call
          </a>
        </div>
      </motion.div>
    </nav>
  );
}

