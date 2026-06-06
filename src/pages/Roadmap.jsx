import { useState } from 'react'
import { Check, Circle, Clock, Rocket, Layers, Brain, Server, Users } from 'lucide-react'

const phases = [
  {
    id: 1,
    title: 'Fundación',
    status: 'in-progress',
    icon: Rocket,
    items: [
      { text: 'Documento de diseño', done: true },
      { text: 'Arquitectura conceptual definida', done: true },
      { text: 'Reglas de comportamiento establecidas', done: true },
      { text: 'Modelo LSTM a nivel de carácter funcional', done: false },
      { text: 'Entrenamiento con corpus en español', done: false },
      { text: 'Generación interactiva en terminal', done: false },
    ],
  },
  {
    id: 2,
    title: 'Expansión multilingüe',
    status: 'pending',
    icon: Layers,
    items: [
      { text: 'Corpus multilingüe con etiquetas <XX>', done: false },
      { text: 'Entrenamiento en 3+ idiomas', done: false },
      { text: 'Tokenización por subpalabras (BPE)', done: false },
      { text: 'Migración a arquitectura Transformer', done: false },
    ],
  },
  {
    id: 3,
    title: 'Inteligencia conversacional',
    status: 'pending',
    icon: Brain,
    items: [
      { text: 'Implementación del detector de repetición', done: false },
      { text: 'Implementación del detector de suficiencia (Alpha: reglas)', done: false },
      { text: 'Implementación del cierre activo', done: false },
      { text: 'Memoria de sesión funcional', done: false },
    ],
  },
  {
    id: 4,
    title: 'Productivización',
    status: 'pending',
    icon: Server,
    items: [
      { text: 'API REST con FastAPI', done: false },
      { text: 'Interfaz web simple', done: false },
      { text: 'Evaluación cuantitativa de métricas', done: false },
      { text: 'Publicación open-source', done: false },
    ],
  },
  {
    id: 5,
    title: 'Comunidad',
    status: 'pending',
    icon: Users,
    items: [
      { text: 'Grupo de Telegram "ÁPICE — Gatitos Cósmicos"', done: false },
      { text: 'Devlog público', done: false },
      { text: 'Primeros colaboradores externos', done: false },
    ],
  },
]

const statusConfig = {
  'completed': { icon: Check, color: 'bg-emerald-100 text-emerald-700 border-emerald-300', label: 'Completada' },
  'in-progress': { icon: Circle, color: 'bg-amber-100 text-amber-700 border-amber-300', label: 'En progreso' },
  'pending': { icon: Clock, color: 'bg-gray-100 text-gray-600 border-gray-300', label: 'Pendiente' },
}

export default function Roadmap() {
  const [expandedPhase, setExpandedPhase] = useState(1)

  const completedItems = phases.flatMap(p => p.items).filter(i => i.done).length
  const totalItems = phases.flatMap(p => p.items).length
  const progressPercentage = Math.round((completedItems / totalItems) * 100)

  return (
    <div className="pt-24 pb-16 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-apice-900 mb-4">Roadmap</h1>
          <p className="text-lg text-apice-600 max-w-2xl mx-auto">
            El plan de desarrollo de ÁPICE, dividido en 5 fases desde la fundación hasta la comunidad.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-apice-700">Progreso general</span>
            <span className="text-sm font-medium text-accent-dark">{completedItems}/{totalItems} ({progressPercentage}%)</span>
          </div>
          <div className="h-3 bg-apice-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-accent-dark transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {phases.map((phase, index) => {
            const StatusIcon = statusConfig[phase.status].icon
            const isExpanded = expandedPhase === phase.id
            const PhaseIcon = phase.icon

            return (
              <div
                key={phase.id}
                className={`border-2 rounded-2xl overflow-hidden transition-all ${
                  phase.status === 'in-progress' 
                    ? 'border-amber-300 bg-amber-50/30' 
                    : phase.status === 'completed'
                    ? 'border-emerald-300 bg-emerald-50/30'
                    : 'border-apice-200 bg-white'
                }`}
              >
                {/* Phase Header */}
                <button
                  onClick={() => setExpandedPhase(isExpanded ? null : phase.id)}
                  className="w-full px-6 py-5 flex items-center gap-4 text-left hover:bg-apice-50/50 transition-colors"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${statusConfig[phase.status].color}`}>
                    <PhaseIcon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-apice-900">
                        Fase {phase.id} — {phase.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusConfig[phase.status].color}`}>
                        {statusConfig[phase.status].label}
                      </span>
                    </div>
                    <p className="text-sm text-apice-500 mt-1">
                      {phase.items.filter(i => i.done).length} de {phase.items.length} completados
                    </p>
                  </div>

                  <div className="text-apice-400">
                    {isExpanded ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Phase Items */}
                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="ml-16 space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`flex items-center gap-3 p-3 rounded-lg ${
                            item.done ? 'bg-emerald-50' : 'bg-apice-50'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                            item.done ? 'bg-emerald-500 text-white' : 'bg-apice-200 text-apice-400'
                          }`}>
                            {item.done ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Circle className="w-3 h-3" />
                            )}
                          </div>
                          <span className={`text-sm ${item.done ? 'text-emerald-800 line-through' : 'text-apice-700'}`}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Note */}
        <div className="mt-12 p-6 bg-apice-100 rounded-xl">
          <p className="text-sm text-apice-700">
            <strong>Nota:</strong> Este roadmap es una guía viva. Las fechas son aproximadas y pueden cambiar 
            según el progreso del aprendizaje y la disponibilidad de recursos. 
            ÁPICE crece al ritmo de quien lo construye.
          </p>
        </div>
      </div>
    </div>
  )
}
