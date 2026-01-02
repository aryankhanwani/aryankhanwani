'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

const workImages = [
  { id: 1, url: '/work-1.png' },
  { id: 2, url: '/work-2.png' },
  { id: 3, url: '/work-3.png' },
  { id: 4, url: '/work-4.png' },
  { id: 5, url: '/work-5.png' },
  { id: 6, url: '/work-6.png' },
];

export default function ProjectsCarousel() {
  // Duplicate images multiple times for seamless infinite scroll
  // We need at least 2 full sets, but use 4 sets for extra buffer
  const duplicatedImages = [...workImages, ...workImages, ...workImages, ...workImages];

  // Calculate the width of one set (6 images)
  // Mobile: 350px width + 16px gap = 366px per item
  const oneSetWidth = 6 * 366; // Approximate width of one set in pixels

  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => -v);

  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Calculate speed: oneSetWidth pixels per 30 seconds = pixels per millisecond
    const speed = oneSetWidth / 30000; // 30 seconds in milliseconds
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const delta = currentTime - lastTime;
      lastTime = currentTime;
      
      let newValue = baseX.get() + speed * delta;
      
      // Reset baseX when it reaches oneSetWidth to create seamless loop
      // Since images are duplicated, this reset is invisible
      if (newValue >= oneSetWidth) {
        newValue = newValue - oneSetWidth;
      }
      
      baseX.set(newValue);
      
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [baseX, oneSetWidth]);

  return (
    <section className="w-full overflow-hidden bg-transparent py-12 md:py-16">
      {/* Single Row: Moving right to left */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8"
          style={{ x }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`carousel-${image.id}-${index}`}
              className="shrink-0 w-[350px] sm:w-[400px] md:w-[480px] lg:w-[600px] h-[220px] sm:h-[260px] md:h-[320px] lg:h-[400px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 p-1.5 md:p-2 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                <img
                  src={image.url}
                  alt={`Work ${image.id}`}
                  className="w-full h-full object-cover object-[50%_0%]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

