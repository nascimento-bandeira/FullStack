import { motion } from "motion/react";
import { Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-square rounded-full bg-surface-bright flex items-center justify-center relative border border-white/5 overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2DD4BF_1px,transparent_1px)] [background-size:20px_20px]"></div>
             <Code2 size={160} className="text-neon-teal/20" />
             <div className="absolute inset-0 bg-gradient-to-tr from-surface/80 to-transparent"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-7 space-y-8"
        >
          <div className="font-mono text-xs text-neon-teal uppercase tracking-[0.2em]">Sobre Mim</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">
            Foco em performance, design minimalista e <span className="text-neon-teal">experiência do usuário</span>.
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            Somos a ImpérioDev, uma equipe dedicada a construir produtos digitais que não apenas parecem incríveis, mas funcionam perfeitamente sob o capô. Nossa abordagem combina estética limpa com código rigorosamente estruturado, garantindo que o seu negócio seja representado com a máxima autoridade online.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <div className="font-display text-4xl font-extrabold text-on-surface">100%</div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase mt-2 tracking-wider">Foco no Cliente</div>
            </div>
            <div>
              <div className="font-display text-4xl font-extrabold text-on-surface">Pixel</div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase mt-2 tracking-wider">Perfect Design</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
