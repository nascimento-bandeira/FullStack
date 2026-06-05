import { ChevronUp } from "lucide-react";

const footerLinks = [
  {
    name: "LinkedIn",
    members: [
      { name: "Mateus Nascimento", url: "https://www.linkedin.com/in/mateus-nascimento-08a81b21a/" },
      { name: "Gabriel Bandeira", url: "https://www.linkedin.com/in/gabriel-bandeira-13468a111/" },
    ]
  },
  {
    name: "GitHub",
    members: [
      { name: "Mateus Nascimento", url: "https://github.com/mateusnasc97" },
      { name: "Gabriel Bandeira", url: "https://github.com/gabrielbandeirasob" },
      { name: "ImperioDev", url: "https://github.com/orgs/nascimento-bandeira/repositories" },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="font-display text-lg font-extrabold text-on-surface">IMPÉRIODEV</div>
          <p className="font-sans text-sm text-on-surface-variant">© {new Date().getFullYear()} ImpérioDev. Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {footerLinks.map((link) => (
            <div key={link.name} className="relative group">
              <button className="font-sans text-sm text-on-surface-variant hover:text-neon-teal transition-colors flex items-center gap-1 py-2">
                {link.name}
                <ChevronUp size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown flutuante (Abre para cima) */}
              <div className="absolute bottom-[100%] left-1/2 -translate-x-1/2 mb-1 w-32 bg-surface border border-white/10 rounded-xl shadow-[0_-10px_30px_rgba(0,0,0,0.5)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 overflow-hidden z-50 flex flex-col">
                {link.members.map((member) => (
                  <a 
                    key={member.name}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 text-sm text-on-surface-variant hover:text-neon-teal hover:bg-white/5 transition-colors text-center border-b border-white/5 last:border-0"
                  >
                    {member.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
          <span className="font-sans text-sm text-on-surface-variant py-2">
            imperio.dev.go@gmail.com
          </span>
        </div>
      </div>
    </footer>
  );
}

