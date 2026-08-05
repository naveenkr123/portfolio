import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      <main className="bg-background">
        <Hero />
        <About />
        <Skills />
        <TechMarquee />
        <Experience />
        <Projects />
        <WhyMe />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
