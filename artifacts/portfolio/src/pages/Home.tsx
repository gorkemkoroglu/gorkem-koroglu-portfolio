import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { WorkHighlights } from "../components/WorkHighlights";
import { SampleWork } from "../components/SampleWork";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";
import { CursorGlow } from "../components/CursorGlow";
import { ScrollProgress } from "../components/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <WorkHighlights />
        <SampleWork />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
