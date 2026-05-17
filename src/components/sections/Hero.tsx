import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-teal/10 border border-neon-teal/20 font-mono text-[10px] text-neon-teal mb-8">
            <span className="w-2 h-2 rounded-full bg-neon-teal animate-pulse"></span>
            Desenvolvedor Web
          </div>
          
          <h1 className="font-display text-3xl sm:text-5xl md:text-7xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
            Desenvolvimento de sites profissionais para negócios que querem <span className="text-gradient">crescer online</span>.
          </h1>
          
          <p className="font-sans text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            Criamos páginas modernas, rápidas e responsivas para empresas, profissionais autônomos, eventos, equipes e projetos que precisam de uma presença digital forte.
          </p>
          
          <div className="flex flex-wrap items-center gap-5">
            <button className="px-8 py-4 rounded-full bg-neon-teal text-surface font-sans font-bold hover:scale-105 transition-transform ambient-shadow">
              Solicitar orçamento
            </button>
            <button className="px-8 py-4 rounded-full border border-white/10 text-on-surface font-sans hover:bg-white/5 transition-colors">
              Ver projetos
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-10 bg-neon-teal/10 rounded-full blur-[100px] -z-10"></div>
          <div className="rounded-2xl border border-white/10 overflow-hidden ambient-shadow">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD74dipaIzIHfefjlgh_AohG29oym-Vhc2nOXcRvDUCtpugRJZGlOlWU2FUNT2rZl35dg1z_g2FkReAYCijNebQ1zSds9hLm7lKLDAY3Ho8VphzVpNOVLU4Xx1Tb_ecF1Xhs7cLH9d7bZqHrGQow7qddJ9wPaHytYCI2cZrCl522vFMXAatpJwIJlmdJ28WzcsjAr9W_7EiHpsQPyL9sgoimu-EdH4Dg362AzZJUY1i_-3v2r4a82zHgiUVS400E7BsQj_Lq7pFbgw" 
              alt="Website Showcase" 
              className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-1000"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
