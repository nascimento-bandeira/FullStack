import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Sparkles, User } from "lucide-react";

const projects = [
  {
    title: "Cascavel Running Team",
    description: "Site moderno para equipe de corrida com informações institucionais, mural de atletas e agenda de eventos.",
    image: "https://lh3.googleusercontent.com/aida/ADBb0ujiGQ1OfF_-8DYxuC5G476YCvUWM1LRr2a0YQbqOZolPUhGbG5B12C95ETMFpRo-9Yk6DoPKV0qooBMRoma9eVV9gY-UZarKn7ElCT1tVPb61RWCTTmoDZd3P9heX_IeoDzHIa4UpnSaQAQx9n2Ez36MZX99XGKmaNPuEAu4aqx3sUXYhaRg_lx0YhBDhP64F3JOBhnIVgIlKK840QsFDpSrZNkSAwO6bo1l-_ZZwYY5rcCIeetGzG5RM8",
    logo: "https://lh3.googleusercontent.com/aida/ADBb0uhrDV1SNCLfecCyZAsU5lYeAOsf-5nWk-Fmkiqz-bp6eutu5Fhx_yw6kkKR9F1rLcDtmVRmzD-fIkdIZ5gAt9lljb9NU1inhYf-L4IhYopjL26-0WcASdFZrKV2dNNPRPsYWaei-3meECt4Yr5BNIYHqFz2PHahwFesg2SrKR4gjeMGvDlCLOTsLpYkUx4eygsg4T6Xr7UokMQDia8C4rCEtbwpxx9E9mN2vHx2r_pH3env91zgGvvkpi0",
    tag: "Mais Recente",
    icon: null,
    link: "https://www.cascavelrunningteam.com.br/",
  },
  {
    title: "Agência de Marketing (LP)",
    description: "Landing page de alta conversão para agência de marketing digital, com foco em autoridade e captação de leads.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjb3hvyhsfgyxO1rLUwNKIh9IyH8_B5qPFTelEeWXTBsvZAl2zWnLlM1la99xGDcEcwyXtAuPygWwnM_3rLmVYOWxL7tg4Q5bZqJUwMpIlPuuMLaM74h9RskojkyVIi_mcmXRGh5TGP7cDrYksQYAQjmKdYzEOURckfmYkfODVxTae7Q2vx-5vBBBv6AkJEusgD6aMBRzs30CD5ddWZrhTm9NUuXtAubHfRe55pEjJn64e8Q1JC7R4w1Cld4PafhWoG9dJqFkQ7_o",
    icon: TrendingUp,
    link: "",
  },
  {
    title: "Lumina Estética",
    description: "Site institucional para clínica de estética premium, com agendamento de serviços e catálogo de tratamentos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn35K_KQlMyjMxVvG7UB2C7tdcs9T_OrcrMsTP0Nrbhc60bp_GiCrJZMqallxhXLUqrXEt4V26bJ2vFY7s6T5Dtqf28pYlg1D4Khnfb95BAmLFnNxioZWFLhGQ9Cz0fhfkW1_nZIj3vA3JbzuOGKWXTWHDxSGXdm1Yz1flB3jvpo1WKrQHRmDHdce_890pzGAuqzbM20FiIa_g-NuOHH0OkTYdV7uhtjliyOuRpD3eeFaDTaCiiFky3H57MtgBaXDHSM3ZpenAchU",
    icon: Sparkles,
    link: "",
  },
  {
    title: "Portfólio Pessoal",
    description: "Site de apresentação profissional com foco em identidade pessoal, cases de estudo e arquitetura minimalista.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuApiuAihI2Ti9Ntb1t_mzinTvpnRC7KjRGlwXT6-0VvLhOu2vs8knZFhVbkoRqzI4Kc-FTOoD8qVjJ1Y-5UyJUbnKy93wiy5o9lME249Q3yYasbaux_q-GL4q2_9wl61nHnFlFnaLguoxafrApjOY0uxIZipXvD_yJlFvNDIatKIPufJl5BlFwDDWu5Q-7zBi7PIEZsFTVM30cWgWzKuDGMrGgtcwSe2MNi111ZOVjjZx0aB3wd-RJp26t9JEyHPcyy_dRir2XDeEg",
    icon: User,
    link: "",
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6 text-left">
          <div>
            <div className="font-mono text-xs text-neon-teal uppercase tracking-[0.2em] mb-4">Trabalhos Recentes</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface">Projetos em Destaque</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link || "#"}
              onClick={project.link ? undefined : (e) => e.preventDefault()}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative h-[450px] rounded-3xl overflow-hidden ambient-shadow block ${project.link ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-surface/90 md:bg-surface/80 group-hover:bg-surface/70 transition-colors duration-500"></div>
              
              <div className="relative z-10 p-10 h-full flex flex-col">
                <div className="flex justify-between items-start">
                  {project.tag ? (
                    <span className="px-3 py-1 rounded-full bg-neon-teal/10 text-neon-teal font-mono text-[10px] border border-neon-teal/20 backdrop-blur-md">
                      {project.tag}
                    </span>
                  ) : <div></div>}
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-on-surface group-hover:bg-neon-teal group-hover:text-surface transition-all duration-300">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="mt-auto">
                  {project.logo ? (
                    <img src={project.logo} alt={project.title} className="h-12 w-auto mb-6 opacity-80 brightness-0 invert" />
                  ) : project.icon && (
                    <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center mb-6 border border-white/10">
                      <project.icon size={24} className="text-neon-teal" />
                    </div>
                  )}
                  <h3 className="font-display text-2xl font-bold text-on-surface mb-3">{project.title}</h3>
                  <p className="font-sans text-on-surface-variant leading-relaxed max-w-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
