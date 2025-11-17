"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer comprehensive web design, frontend development, UI/UX design, mobile app development, and product design services. Our team specializes in creating modern, responsive, and user-friendly digital experiences.",
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website typically takes 2-4 weeks, while more complex applications can take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support after launch?",
    answer: "Yes, we offer various support packages including maintenance, updates, and optimization services. We're committed to your long-term success and can customize a support plan that fits your needs.",
  },
  {
    id: 4,
    question: "What is your design and development process?",
    answer: "Our process follows three main phases: Discovery & Strategy, where we understand your goals; Design & Build, where we create and develop your solution; and Launch & Optimize, where we deploy and continuously improve your product.",
  },
  {
    id: 5,
    question: "Can you work with our existing team?",
    answer: "Absolutely! We're experienced in collaborating with in-house teams, agencies, and stakeholders. We adapt our workflow to integrate seamlessly with your existing processes and tools.",
  },
  {
    id: 6,
    question: "What technologies do you use?",
    answer: "We work with modern technologies including React, Next.js, TypeScript, Tailwind CSS, and various design tools. We choose the best stack for each project based on requirements, scalability, and performance needs.",
  },
];

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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
                FAQs
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
              Frequently Asked Questions
            </motion.p>
          </div>

          {/* FAQs List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-3xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="group"
                >
                  <motion.div
                    animate={{
                      y: isOpen ? -2 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: "1000px",
                      boxShadow: isOpen
                        ? "0 2px 4px 0 rgba(0,0,0,0.08), 0 8px 16px 0 rgba(0,0,0,0.12), 0 16px 32px 0 rgba(0,0,0,0.15), 0 32px 64px 0 rgba(0,0,0,0.18)"
                        : "0 1px 2px 0 rgba(0,0,0,0.05), 0 4px 8px 0 rgba(0,0,0,0.08), 0 12px 24px 0 rgba(0,0,0,0.1), 0 24px 48px 0 rgba(0,0,0,0.12)",
                    }}
                    className={cn(
                      "relative rounded-2xl overflow-hidden",
                      "bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl",
                      "transition-all duration-300",
                      "cursor-pointer"
                    )}
                    onClick={() => toggleFAQ(index)}
                  >
                    {/* Inner highlight for 3D depth */}
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.05)",
                      }}
                    />

                    {/* Question */}
                    <div className="relative p-6 md:p-8">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50 pr-8">
                          {faq.question}
                        </h3>
                        <motion.div
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                        </motion.div>
                      </div>

                      {/* Answer */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

