export default function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-surface-dim">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="space-y-4 text-center md:text-left">
          <div className="font-display text-lg font-extrabold text-on-surface">FULL STACK DEV</div>
          <p className="font-sans text-sm text-on-surface-variant">© 2024 Full Stack Dev. Todos os direitos reservados.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {["LinkedIn", "GitHub", "Instagram", "E-mail"].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="font-sans text-sm text-on-surface-variant hover:text-neon-teal transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
