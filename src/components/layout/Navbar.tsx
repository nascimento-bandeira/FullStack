import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Sobre");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "serviços", "projetos", "processo"];
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const displayName = 
              section === "home" ? "" :
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

  const navItems = ["Sobre", "Serviços", "Projetos", "Processo"];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        <motion.a 
          href="#home"
          onClick={() => {
            setActiveTab("");
            setIsOpen(false);
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display text-lg font-extrabold tracking-tighter text-on-surface hover:text-neon-teal transition-colors"
        >
          IMPÉRIODEV
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2 items-center">
          {navItems.map((item, i) => (
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
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-on-surface focus:outline-none p-2 relative z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-surface-dim/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => {
                    setActiveTab(item);
                    setIsOpen(false);
                  }}
                  className={`text-lg font-sans font-medium py-2 border-b border-white/5 transition-colors ${
                    activeTab === item ? "text-neon-teal" : "text-on-surface-variant"
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-xl bg-neon-teal text-surface font-sans font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-neon-teal/10"
              >
                Vamos Conversar
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

