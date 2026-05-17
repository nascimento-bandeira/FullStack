import { motion } from "motion/react";
import { 
  Globe, 
  Layout, 
  Briefcase, 
  MessageSquare, 
  Settings, 
  Wrench 
} from "lucide-react";

const services = [
  {
    title: "Landing Pages",
    description: "Páginas únicas focadas em conversão, capturas de leads e vendas diretas com alta performance.",
    icon: Layout,
  },
  {
    title: "Sites Institucionais",
    description: "Presença digital completa para sua empresa, transmitindo credibilidade e profissionalismo.",
    icon: Briefcase,
  },
  {
    title: "Chatbots WhatsApp",
    description: "Automação de atendimento e vendas via WhatsApp com inteligência artificial e fluxos personalizados.",
    icon: MessageSquare,
  },
  {
    title: "Portfólios",
    description: "Exiba seu trabalho com layouts minimalistas que colocam seus projetos em primeiro plano.",
    icon: Globe,
  },
  {
    title: "Sistemas Web",
    description: "Aplicações web sob medida para resolver necessidades específicas de gestão ou interação.",
    icon: Settings,
  },
  {
    title: "Manutenção",
    description: "Suporte contínuo, atualizações de segurança e otimizações para manter seu site impecável.",
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="serviços" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-teal/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <div className="font-mono text-xs text-neon-teal uppercase tracking-[0.2em] mb-4">Especialidades</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">Soluções Digitais</h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 group-hover:bg-neon-teal/10 transition-colors">
                <service.icon size={24} className="text-neon-teal" />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-3">{service.title}</h3>
              <p className="font-sans text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
