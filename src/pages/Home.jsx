import { ArrowRight, Zap, Target, CheckCircle, Globe, Lock, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const principles = [
  {
    icon: Target,
    title: 'Una sola respuesta',
    description: 'Nunca listas, nunca opciones múltiples. La mejor ruta comprobada para tu contexto.',
  },
  {
    icon: CheckCircle,
    title: 'Cierre activo',
    description: 'Cuando tienes suficiente información, ÁPICE lo dice explícitamente y libera tu tiempo.',
  },
  {
    icon: Zap,
    title: 'Anti-cháchara',
    description: 'Prohibido el relleno. Sin "excelentes preguntas", sin disculpas vacías. Directo al grano.',
  },
  {
    icon: Globe,
    title: 'Multilingüe nativo',
    description: 'Español, inglés, francés, alemán. Desde el entrenamiento base, no como capa añadida.',
  },
  {
    icon: Lock,
    title: 'Independencia total',
    description: 'Sin APIs externas, sin modelos preentrenados. Todo el código y pesos son propios.',
  },
  {
    icon: Sparkles,
    title: 'Memoria de sesión',
    description: 'Recuerda lo dicho para contextualizar. Si preguntas algo similar, exige precisión.',
  },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-apice-300/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-apice-100 text-apice-700 text-sm font-medium mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Alpha v0.1.0 — En desarrollo activo
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <span className="text-gradient">ÁPICE</span>
          </h1>

          <p className="text-2xl sm:text-3xl font-light text-apice-700 mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            La última IA que vas a necesitar
          </p>

          <p className="text-lg text-apice-600 max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Un modelo fundacional construido completamente desde cero. 
            Sin APIs externas, sin modelos preentrenados. 
            Optimizada para que cada interacción sea la última que necesitas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Link
              to="/docs"
              className="group flex items-center gap-2 px-8 py-4 bg-apice-900 text-apice-50 rounded-xl font-medium hover:bg-apice-800 transition-all hover:shadow-lg"
            >
              Explorar documentación
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/roadmap"
              className="px-8 py-4 border-2 border-apice-300 text-apice-700 rounded-xl font-medium hover:border-apice-400 hover:bg-apice-100/50 transition-all"
            >
              Ver roadmap
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-dark">0</div>
              <div className="text-sm text-apice-600">APIs externas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-dark">4+</div>
              <div className="text-sm text-apice-600">Idiomas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-dark">1</div>
              <div className="text-sm text-apice-600">Respuesta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-apice-900 mb-4">
              Principios de Diseño
            </h2>
            <p className="text-lg text-apice-600 max-w-2xl mx-auto">
              ÁPICE no es como otras IAs. Estas reglas son no negociables y definen su personalidad única.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div
                key={principle.title}
                className="p-6 rounded-2xl bg-apice-50 border border-apice-100 card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-apice-100 flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-accent-dark" />
                </div>
                <h3 className="text-lg font-semibold text-apice-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-apice-600 text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-apice-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl sm:text-3xl font-light text-apice-100 leading-relaxed italic mb-8">
            "La mayoría de las IAs te retienen. ÁPICE quiere que te vayas. 
            Su éxito es que ya no te haga falta."
          </blockquote>
          <div className="text-accent-light font-medium">
            La paradoja de ÁPICE
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-apice-100 to-apice-50 rounded-3xl p-8 sm:p-12 text-center border border-apice-200">
            <h2 className="text-3xl font-bold text-apice-900 mb-4">
              Sigue el desarrollo
            </h2>
            <p className="text-apice-600 mb-8 max-w-xl mx-auto">
              Documento cada avance, cada decisión de diseño y cada obstáculo superado 
              en el proceso de construir ÁPICE desde cero.
            </p>
            <Link
              to="/devlog"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-accent-dark transition-all hover:shadow-lg"
            >
              Leer el devlog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
