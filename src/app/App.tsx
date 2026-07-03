import { useRef } from "react";
import { BrainCircuit } from "lucide-react";
import { usePortfolioMotion } from "./hooks/usePortfolioMotion";
import { C } from "./tokens";
import { ContactSection } from "./portfolio/ContactSection";
import { Footer } from "./portfolio/Footer";
import { Hero } from "./portfolio/Hero";
import { Nav } from "./portfolio/Nav";
import { OriginSection } from "./portfolio/OriginSection";
import { ProcessSection } from "./portfolio/ProcessSection";
import { ProjectsSection } from "./portfolio/ProjectsSection";
import { ServiceSection } from "./portfolio/ServiceSection";
import { BootScreen } from "./portfolio/BootScreen";
import { ThreeBackgroundLoader } from "./portfolio/ThreeBackgroundLoader";

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  usePortfolioMotion(rootRef);

  return (
    <div
      ref={rootRef}
      className="portfolio-root"
      style={{ backgroundColor: C.parchment }}
      data-component="App"
      data-file="src/app/App.tsx"
    >
      <div className="theme-tint-overlay" />
      <BootScreen />
      <ThreeBackgroundLoader />
      <Nav />
      <main>
        <Hero />
        <OriginSection />
        <ProjectsSection />
        <ProcessSection />
        <ServiceSection />
        <ContactSection />
      </main>
      <Footer />
      <BrainCircuit className="ambient-mark" aria-hidden size={420} strokeWidth={0.35} />
    </div>
  );
}
