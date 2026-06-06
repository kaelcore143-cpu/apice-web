import { Calendar, Tag, ArrowRight } from 'lucide-react'

// Sample entries - you can add more as you progress
const devlogEntries = [
  {
    id: 1,
    date: '6 de Junio, 2026',
    title: 'Sitio web de documentación lanzado',
    tags: ['infraestructura', 'web'],
    summary: 'Creación del sitio web para documentar avances del proyecto ÁPICE usando React, Vite y TailwindCSS.',
    content: `
Hoy creé esta página web para ir documentando todos los avances del proyecto ÁPICE. 
La idea es tener un espacio público donde pueda compartir el proceso de construcción 
de este modelo de IA desde cero.

La web está construida con:
- React para la interfaz
- Vite como build tool (rápido y moderno)
- TailwindCSS para los estilos
- Diseño minimalista inspirado en la filosofía de ÁPICE

Próximos pasos: empezar con la implementación del modelo LSTM base.
    `,
  },
  {
    id: 2,
    date: '25 de Mayo, 2026',
    title: 'Documento de diseño v0.1.0 completado',
    tags: ['documentación', 'planificación'],
    summary: 'Definición completa de la visión, arquitectura, reglas de comportamiento y roadmap del proyecto.',
    content: `
Finalicé la primera versión del documento de diseño de ÁPICE. Este documento es 
mi brújula para los próximos meses de desarrollo.

Puntos clave definidos:
- La paradoja de ÁPICE: éxito medido por cuánto tiempo NO se necesita
- Arquitectura inicial: LSTM a nivel de carácter
- Reglas de comportamiento no negociables
- 5 fases de desarrollo claras

El documento está escrito para que "yo dentro de 6 meses" pueda entenderlo todo 
sin tener que buscar nada externo.
    `,
  },
]

const tagColors = {
  'infraestructura': 'bg-blue-100 text-blue-700 border-blue-200',
  'web': 'bg-purple-100 text-purple-700 border-purple-200',
  'documentación': 'bg-amber-100 text-amber-700 border-amber-200',
  'planificación': 'bg-rose-100 text-rose-700 border-rose-200',
  'entrenamiento': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'arquitectura': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'modelo': 'bg-indigo-100 text-indigo-700 border-indigo-200',
}

export default function Devlog() {
  return (
    <div className="pt-24 pb-16 animate-fade-in">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-apice-900 mb-4">Devlog</h1>
          <p className="text-lg text-apice-600">
            Registro de avances, decisiones y aprendizajes en el camino de construir ÁPICE.
          </p>
        </div>

        {/* Entries */}
        <div className="space-y-8">
          {devlogEntries.map((entry) => (
            <article
              key={entry.id}
              className="bg-white rounded-2xl border border-apice-200 overflow-hidden card-hover"
            >
              <div className="p-6">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-apice-500">
                    <Calendar className="w-4 h-4" />
                    {entry.date}
                  </div>
                  <div className="flex gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${
                          tagColors[tag] || 'bg-apice-100 text-apice-700 border-apice-200'
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-apice-900 mb-3">
                  {entry.title}
                </h2>

                {/* Summary */}
                <p className="text-apice-600 mb-4">
                  {entry.summary}
                </p>

                {/* Content */}
                <div className="bg-apice-50 rounded-xl p-4">
                  <pre className="whitespace-pre-wrap text-sm text-apice-700 font-sans leading-relaxed">
                    {entry.content}
                  </pre>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State / CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-apice-100 to-apice-50 rounded-2xl border border-apice-200 text-center">
          <p className="text-apice-600 mb-4">
            Este devlog se actualizará regularmente con nuevos avances.
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-apice-500">
            <ArrowRight className="w-4 h-4" />
            Próxima entrada: Implementación del modelo LSTM
          </div>
        </div>
      </div>
    </div>
  )
}
