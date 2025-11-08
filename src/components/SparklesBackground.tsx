'use client';

import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import { useTheme } from '@/contexts/ThemeContext';

export function SparklesBackground() {
  const { theme } = useTheme();
  
  // Use theme-aware colors matching the site's visual style
  const particleColor = theme === 'dark' ? '#FFFFFF' : '#171717'; // zinc-50 in dark, zinc-900 in light
  const backgroundColor = theme === 'dark' ? '#0a0a0a' : '#ffffff'; // zinc-950 in dark, white in light

  return (
    <div className="w-full h-full overflow-hidden pointer-events-none">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={1}
        maxSize={4}
        particleDensity={5}
        className="w-full h-full"
        particleColor={particleColor}
      />
    </div>
  );
}

