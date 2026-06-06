import { Mountain, Github, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-apice-900 text-apice-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mountain className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold">ÁPICE</span>
            </div>
            <p className="text-apice-300 text-sm leading-relaxed">
              La última IA que vas a necesitar para cada pregunta. 
              Construida desde cero, sin APIs externas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/docs" className="text-apice-300 hover:text-accent-light transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="/roadmap" className="text-apice-300 hover:text-accent-light transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="/devlog" className="text-apice-300 hover:text-accent-light transition-colors">
                  Devlog
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Conecta</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-apice-800 text-apice-300 hover:bg-apice-700 hover:text-accent-light transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-apice-800 text-apice-300 hover:bg-apice-700 hover:text-accent-light transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-4 text-xs text-apice-400">
              Gatitos Cósmicos: máximo 20 personas
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-apice-800 text-center text-sm text-apice-400">
          <p>© {currentYear} ÁPICE. Construido con precisión.</p>
          <p className="mt-1 italic">"Una respuesta. Un cierre. No vuelvas hasta que el problema sea otro."</p>
        </div>
      </div>
    </footer>
  )
}
