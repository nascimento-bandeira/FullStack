import { motion } from "motion/react";
import { Menu } from "lucide-react";

export default function Navbar() {
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
        <div className="hidden md:flex space-x-8 items-center">
          {["Sobre", "Serviços", "Projetos", "Processo"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-on-surface-variant hover:text-neon-teal transition-colors font-sans text-sm font-medium"
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contato"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2 rounded-full bg-neon-teal/10 text-neon-teal border border-neon-teal/20 hover:bg-neon-teal hover:text-surface transition-all font-mono text-xs font-bold"
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
