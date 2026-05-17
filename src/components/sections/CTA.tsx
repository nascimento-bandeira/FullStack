import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";

export default function CTA() {
  return (
    <section id="contato" className="py-32 relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-teal/10 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-extrabold text-on-surface mb-12"
        >
          Pronto para ter um site <br />
          <span className="text-gradient">profissional?</span>
        </motion.h2>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-neon-teal text-surface font-sans text-lg font-bold shadow-[0_0_30px_rgba(45,212,191,0.3)] transition-shadow"
        >
          Falar no WhatsApp
          <MessageSquare size={24} />
        </motion.button>
      </div>
    </section>
  );
}
