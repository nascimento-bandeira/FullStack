import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Authority from "./components/sections/Authority";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Projects from "./components/sections/Projects";
import Process from "./components/sections/Process";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-neon-teal/30 selection:text-neon-teal overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Authority />
        <About />
        <Services />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
