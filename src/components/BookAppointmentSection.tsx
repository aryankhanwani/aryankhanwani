"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "@/contexts/ThemeContext";

// Replace 'your-username/event-type' with your actual Cal.com link
const CAL_COM_LINK = process.env.NEXT_PUBLIC_CAL_COM_LINK || "your-username/30min";

export default function BookAppointmentSection() {
  const { theme } = useTheme();

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

  useEffect(() => {
    let mounted = true;
    
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "appointment" });
        if (!mounted) return;
        
        cal("inline", {
          calLink: CAL_COM_LINK,
          elementOrSelector: "#cal-com-inline",
        });
        cal("ui", {
          theme: theme === "dark" ? "dark" : "light",
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (error) {
        console.error("Failed to load Cal.com embed:", error);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [theme]);

  return (
    <section
      id="contact"
      className="py-12 md:py-20 px-4 bg-transparent min-h-[60vh] overflow-x-hidden relative"
    >

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
                Book Appointment
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
              Let's Discuss Your Project
            </motion.p>
          </div>

          {/* Cal.com Integration */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full max-w-4xl mx-auto"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              className="relative rounded-2xl overflow-hidden min-h-[700px]"
            >
              {/* Cal.com Inline Embed */}
              <div
                id="cal-com-inline"
                data-cal-namespace="appointment"
                data-cal-link={CAL_COM_LINK}
                data-cal-config='{"layout":"month_view"}'
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "auto",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

