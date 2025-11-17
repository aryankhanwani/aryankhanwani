"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AboutSection from "@/components/AboutSection";

// Lazy load below-the-fold components
const SparklesBackground = dynamic(
  () => import("@/components/SparklesBackground").then((mod) => ({ default: mod.SparklesBackground })),
  { ssr: false }
);

const HowWeWorkSection = dynamic(() => import("@/components/HowWeWorkSection"), {
  loading: () => <div className="min-h-[60vh]" />,
});

const BestProjectsSection = dynamic(() => import("@/components/BestProjectsSection"), {
  loading: () => <div className="min-h-[60vh]" />,
});

const StaggerTestimonials = dynamic(
  () => import("@/components/ui/stagger-testimonials").then((mod) => ({ default: mod.StaggerTestimonials })),
  {
    loading: () => <div className="min-h-[60vh]" />,
  }
);

const FAQsSection = dynamic(() => import("@/components/FAQsSection"), {
  loading: () => <div className="min-h-[60vh]" />,
});

const BookAppointmentSection = dynamic(() => import("@/components/BookAppointmentSection"), {
  loading: () => <div className="min-h-[60vh]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32" />,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <SparklesBackground />
        </div>
        <Hero />
        <ProjectsCarousel />
      </div>
      <AboutSection />
      <HowWeWorkSection />
      <BestProjectsSection />
      <StaggerTestimonials />
      <FAQsSection />
      <BookAppointmentSection />
      <Footer />
    </>
  );
}
