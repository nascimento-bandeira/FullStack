import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Sobre");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["sobre", "serviços", "projetos", "processo"];
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const displayName = 
              section === "sobre" ? "Sobre" :
              section === "serviços" ? "Serviços" :
              section === "projetos" ? "Projetos" : "Processo";
            setActiveTab(displayName);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-lg font-extrabold tracking-tighter text-on-surface"
        >
          FULL STACK DEV
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 items-center">
          {["Sobre", "Serviços", "Projetos", "Processo"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveTab(item)}
              className={`relative px-4 py-2 rounded-full font-sans text-sm font-medium transition-colors duration-300 ${
                activeTab === item ? "text-neon-teal" : "text-on-surface-variant hover:text-on-surface"
              }`}
            >
              {activeTab === item && (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 bg-neon-teal/10 rounded-full border border-neon-teal/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="ml-4 px-6 py-2 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/20 hover:bg-neon-teal hover:text-surface transition-all font-mono text-xs font-bold"
          >
            Vamos Conversar
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-on-surface">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}

