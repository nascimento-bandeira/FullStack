import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Entendimento",
    description: "Reunião para alinhar objetivos, público-alvo e referências visuais para o projeto.",
  },
  {
    number: "02",
    title: "Organização",
    description: "Estruturação da arquitetura de informação e coleta de conteúdos essenciais.",
  },
  {
    number: "03",
    title: "Layout",
    description: "Criação do design visual (UI/UX) para aprovação antes do desenvolvimento.",
  },
  {
    number: "04",
    title: "Desenvolvimento",
    description: "Codificação limpa e otimizada utilizando as melhores práticas web e frameworks modernos.",
  },
  {
    number: "05",
    title: "Revisões",
    description: "Testes em múltiplos dispositivos e refinamentos baseados no seu feedback.",
  },
  {
    number: "06",
    title: "Publicação",
    description: "Configuração de domínio, hospedagem e lançamento oficial do site.",
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 border-y border-white/5 bg-surface-dim/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="font-mono text-xs text-neon-teal uppercase tracking-[0.2em] mb-4">Metodologia</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">Processo de Criação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-neon-teal shadow-[0_0_10px_#2DD4BF]"></div>
              <div className="font-mono text-on-surface-variant/40 text-sm mb-4">{step.number}.</div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">{step.title}</h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
