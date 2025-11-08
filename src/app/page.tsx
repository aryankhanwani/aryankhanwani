import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import AboutSection from "@/components/AboutSection";
import { SparklesBackground } from "@/components/SparklesBackground";

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
    </>
  );
}
