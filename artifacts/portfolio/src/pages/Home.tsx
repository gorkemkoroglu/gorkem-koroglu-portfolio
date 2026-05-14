import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { WorkHighlights } from "../components/WorkHighlights";
import { SampleWork } from "../components/SampleWork";
import { AnalysisCases } from "../components/AnalysisCases";
import { Education } from "../components/Education";
import { BeyondCV } from "../components/BeyondCV";
import { Footer } from "../components/Footer";
import { CursorGlow } from "../components/CursorGlow";
import { ScrollProgress } from "../components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to content
      </a>
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <WorkHighlights />
        <SampleWork />
        <AnalysisCases />
        <Education />
        <BeyondCV />
      </main>
      <Footer />
    </div>
  );
}
