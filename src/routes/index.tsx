import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Skills,
  Projects,
  CTA,
  Resume,
  Blog,
  Coding,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";
import { useReveal } from "@/components/portfolio/useReveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="relative min-h-screen text-foreground">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CTA />
        <Resume />
        <Blog />
        <Coding />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
