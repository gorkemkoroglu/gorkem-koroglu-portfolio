import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Experience } from "../components/Experience";
import { Skills } from "../components/Skills";
import { SampleWork } from "../components/SampleWork";
import { Education } from "../components/Education";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SampleWork />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
