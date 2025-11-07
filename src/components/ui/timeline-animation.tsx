"use client";

import { motion, useInView } from "motion/react";
import { useRef, ReactNode } from "react";

interface TimelineContentProps {
  as?: React.ElementType;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement>;
  customVariants?: any;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}

export function TimelineContent({
  as = "div",
  animationNum = 0,
  timelineRef,
  customVariants,
  children,
  className = "",
  ...props
}: TimelineContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(timelineRef || ref, { once: true, margin: "-100px" });

  const Component = motion[as as keyof typeof motion] as any;

  return (
    <Component
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
