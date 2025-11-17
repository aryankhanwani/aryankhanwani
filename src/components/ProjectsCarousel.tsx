'use client';

import { motion } from 'motion/react';

const demoImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop' },
  { id: 2, url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop' },
  { id: 3, url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop' },
  { id: 4, url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop' },
  { id: 5, url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
  { id: 6, url: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop' },
  { id: 7, url: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=300&fit=crop' },
  { id: 8, url: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400&h=300&fit=crop' },
];

export default function ProjectsCarousel() {
  // Duplicate images for seamless loop (need 2 sets for seamless infinite scroll)
  const duplicatedImages = [...demoImages, ...demoImages];

  // Calculate the width of one set (8 images) for larger images
  // Mobile: 280px width + 16px gap = 296px per item
  // Tablet: 360px width + 24px gap = 384px per item
  // Desktop: 450px width + 32px gap = 482px per item
  // Using mobile as base for animation calculation
  const oneSetWidth = 8 * 296; // Approximate width of one set in pixels

  return (
    <section className="w-full overflow-hidden bg-transparent py-12 md:py-16">
      {/* Row 1: Moving right to left */}
      <div className="mb-8 md:mb-12 overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8"
          animate={{
            x: [0, -oneSetWidth],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`row1-${image.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[450px] h-[180px] sm:h-[210px] md:h-[240px] lg:h-[300px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 p-1.5 md:p-2 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                <img
                  src={image.url}
                  alt={`Project ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moving left to right */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 lg:gap-8"
          animate={{
            x: [-oneSetWidth, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`row2-${image.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[450px] h-[180px] sm:h-[210px] md:h-[240px] lg:h-[300px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 p-1.5 md:p-2 border-2 border-zinc-200 dark:border-zinc-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-full h-full rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-900">
                <img
                  src={image.url}
                  alt={`Project ${image.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

