"use client";

import { motion } from "motion/react";

const footerLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <footer className="relative border-t border-zinc-200/50 dark:border-zinc-800/50 bg-transparent overflow-x-hidden py-12 md:py-16">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
        <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-transparent via-zinc-200 dark:via-zinc-800 to-transparent opacity-20" />
      </div>

      <div className="w-full max-w-[1280px] mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
          {/* Name */}
          <motion.div variants={itemAnimation} className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
              Aryan Khanwani
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 uppercase tracking-widest">
              Designer & Developer
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            variants={itemAnimation}
            className="flex items-center gap-6 md:gap-8"
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                variants={itemAnimation}
                whileHover={{ y: -2 }}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors duration-200 uppercase tracking-wider"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* Copyright */}
          <motion.div
            variants={itemAnimation}
            className="flex flex-col items-center md:items-end"
          >
            <p className="text-xs text-zinc-400 dark:text-zinc-600">
              © {new Date().getFullYear()}
            </p>
            <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-1">
              All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
