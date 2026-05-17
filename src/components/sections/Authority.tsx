import { motion } from "motion/react";
import { Quote as QuoteIcon } from "lucide-react";

export default function Authority() {
  return (
    <section className="py-24 border-y border-white/5 bg-surface-dim/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-10 text-neon-teal/40"
        >
          <QuoteIcon size={64} fill="currentColor" stroke="none" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-2xl md:text-4xl text-on-surface leading-snug font-semibold tracking-tight"
        >
          "Sites pensados para causar uma boa primeira impressão, funcionar bem em qualquer dispositivo e facilitar o contato com seus clientes."
        </motion.h2>
      </div>
    </section>
  );
}
