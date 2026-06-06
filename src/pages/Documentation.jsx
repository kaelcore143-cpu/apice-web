import { useState } from 'react'
import { Book, ChevronRight, Terminal, GitBranch, Cpu, Database, Shield } from 'lucide-react'

const sections = [
  {
    id: 'overview',
    title: 'Visión General',
    icon: Book,
    content: `
## ¿Qué es ÁPICE?

ÁPICE es un modelo de inteligencia artificial fundacional construido **completamente desde cero**, sin depender de APIs externas ni modelos preentrenados. Su propósito no es competir en velocidad o volumen de información, sino **optimizar cada interacción para que sea la última que el usuario necesita sobre un tema**.

### La Paradoja de ÁPICE

> Una IA cuyo éxito se mide por cuánto tiempo el usuario NO la necesita.

En un mercado donde todas las IAs compiten por retener la atención del usuario, ÁPICE compite por liberarlo.

### Origen: de BABEL a ÁPICE

El proyecto nació como **BABEL**, inspirado en el mito de la Torre de Babel. Al descubrir que "BABEL AI" ya existía comercialmente, se renombró a **ÁPICE** (punta superior, cumbre, convergencia).

### Acróstico Fundacional

- **A**horrando tiempo, no acumulando palabras
- **P**recisión sobre cantidad, definición sobre opciones
- **I**nteracción que termina cuando tú lo decides
- **C**erteza: una sola respuesta, no diez posibilidades
- **E**ficiencia como métrica principal
    `,
  },
  {
    id: 'architecture',
    title: 'Arquitectura',
    icon: Cpu,
    content: `
## Arquitectura del Sistema

### Motor de Lenguaje Base (Alpha)

| Atributo | Valor actual |
|----------|-------------|
| Arquitectura | LSTM a nivel de carácter |
| Capas LSTM | 3 |
| Embedding dim | 256 |
| Hidden dim | 512 |
| Dropout | 0.3 |
| Vocabulario | Dinámico (basado en corpus) |
| Tokenización | Carácter por carácter |

### Componentes Principales

1. **Detector de Repetición**
   - Embeddings semánticos + umbral de similitud
   - Compara preguntas nuevas con historial
   - Si detecta repetición: responde con re-enfoque

2. **Sintetizador Único**
   - Temperatura baja (0.3 - 0.5)
   - Top-k = 1
   - Fuerza la respuesta más probable

3. **Detector de Suficiencia**
   - Evalúa si el usuario ya puede actuar
   - Versión Alpha: basado en reglas
   - Beta: clasificador ligero

4. **Memoria de Sesión**
   - Almacenamiento volátil (dict en Python)
   - Lista de pares (pregunta, respuesta)
   - Solo durante la sesión actual

### Plan de Evolución

| Fase | Arquitectura |
|------|-------------|
| Alpha (actual) | LSTM a nivel de carácter |
| Beta | Transformer reducido (tipo GPT-2) |
| v1.0 | Transformer completo con optimizaciones |
    `,
  },
  {
    id: 'rules',
    title: 'Reglas de Comportamiento',
    icon: Shield,
    content: `
## Reglas No Negociables

Estas reglas definen la personalidad de ÁPICE:

### Regla #1: Una sola respuesta
Nunca dar 3 opciones. Si hay múltiples caminos válidos, elige el más probable para el contexto implícito del usuario.

**Incorrecto:** "Puedes hacerlo con Python, con JavaScript o con Rust."
**Correcto:** "Usa Python. Es la ruta más directa para tu contexto."

### Regla #2: Cero repeticiones
Nunca repetir una respuesta ya dada. Ante una pregunta idéntica o muy similar, responder con re-enfoque.

**Correcto:** "Ya respondí esto. ¿En qué parte específica de mi respuesta anterior necesitas más claridad?"

### Regla #3: Cierre cuando corresponda
Si la respuesta entrega todo lo necesario para actuar, añadir cierre activo.

**Ejemplo:** "Con esto ya puedes resolverlo. Vuelve solo si el escenario cambia."

### Regla #4: Prohibido el relleno
Nada de "Es una excelente pregunta", "Me encanta que me preguntes", "Por supuesto". Directo al grano.

### Regla #5: Precisión forzada
Si el usuario es vago, ÁPICE pide aclaración antes de responder. No adivina.

### Regla #6: Memoria de sesión
Recuerda todo lo dicho en la sesión actual y lo usa para contextualizar.
    `,
  },
  {
    id: 'stack',
    title: 'Stack Tecnológico',
    icon: Terminal,
    content: `
## Stack Tecnológico

### En Uso

| Herramienta | Propósito |
|-------------|-----------|
| Python 3.10+ | Lenguaje principal |
| PyTorch | Framework de deep learning |
| NumPy | Operaciones numéricas |
| Git + GitHub | Control de versiones |

### Futuro

| Herramienta | Propósito |
|-------------|-----------|
| Sentence-BERT | Detección semántica de repeticiones |
| FastAPI | Exposición como API |
| SQLite / Redis | Memoria de sesión persistente |

### Estructura del Proyecto

\`\`\`
APICE/
├── apice.py              # Modelo principal
├── train.py              # Script de entrenamiento
├── generate.py           # Script de inferencia
├── data/
│   ├── raw/              # Textos originales
│   ├── processed/        # Corpus etiquetado
│   └── vocab/            # Vocabularios
├── models/               # Pesos entrenados
├── docs/                 # Documentación
└── tests/                # Pruebas
\`\`\`
    `,
  },
  {
    id: 'training',
    title: 'Entrenamiento',
    icon: Database,
    content: `
## Proceso de Entrenamiento

### Flujo de Datos

1. **Corpus multilingüe etiquetado**
   \`<ES> texto en español\`
   \`<EN> text in english\`

2. **Preprocesamiento**
   - Tokenización carácter a carácter
   - Mapeo char2idx / idx2char
   - División en secuencias

3. **Entrenamiento**
   - Forward pass: secuencia → predicción
   - Loss: CrossEntropyLoss
   - Optimizador: Adam
   - Épocas: 100-500

### Hiperparámetros

| Parámetro | Valor típico |
|-----------|-------------|
| Learning rate | 0.001 |
| Batch size | 64 |
| Sequence length | 100 |
| Dropout | 0.3 |
| Epochs | 200 |

### Generación

\`\`\`python
temperature = 0.3  # Baja para precisión
top_k = 1        # Solo el token más probable
\`\`\`
    `,
  },
  {
    id: 'github',
    title: 'Repositorio',
    icon: GitBranch,
    content: `
## Repositorio

El código fuente de ÁPICE está disponible en GitHub.

### Estructura de Commits

- \`feat:\` Nueva funcionalidad
- \`fix:\` Corrección de bug
- \`docs:\` Cambios en documentación
- \`train:\` Entrenamiento/experimentos
- \`refactor:\` Refactorización de código

### Ramas

- \`main\` — Código estable
- \`develop\` — Desarrollo activo
- \`experiment/\` — Experimentos aislados

### Licencia

MIT License (pendiente de inclusión formal).
    `,
  },
]

export default function Documentation() {
  const [activeSection, setActiveSection] = useState('overview')

  const currentSection = sections.find(s => s.id === activeSection)
  const ContentIcon = currentSection?.icon || Book

  return (
    <div className="pt-24 pb-16 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-apice-500 mb-4">
                Documentación
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                        activeSection === section.id
                          ? 'bg-apice-100 text-apice-900 font-medium'
                          : 'text-apice-600 hover:bg-apice-50 hover:text-apice-800'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm">{section.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform ${
                        activeSection === section.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  )
                })}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-apice-200 p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-apice-100">
                <ContentIcon className="w-8 h-8 text-accent-dark" />
                <h1 className="text-2xl font-bold text-apice-900">
                  {currentSection?.title}
                </h1>
              </div>

              <div className="prose prose-apice max-w-none">
                <div className="whitespace-pre-wrap text-apice-700 leading-relaxed">
                  {currentSection?.content.split('\n').map((line, i) => {
                    if (line.startsWith('## ')) {
                      return <h2 key={i} className="text-xl font-semibold text-apice-900 mt-8 mb-4">{line.replace('## ', '')}</h2>
                    }
                    if (line.startsWith('### ')) {
                      return <h3 key={i} className="text-lg font-semibold text-apice-900 mt-6 mb-3">{line.replace('### ', '')}</h3>
                    }
                    if (line.startsWith('- ')) {
                      return <li key={i} className="ml-4 mb-1">{line.replace('- ', '')}</li>
                    }
                    if (line.startsWith('> ')) {
                      return <blockquote key={i} className="border-l-4 border-accent pl-4 italic text-apice-600 my-4">{line.replace('> ', '')}</blockquote>
                    }
                    if (line.startsWith('|') && line.includes('|')) {
                      return null // Skip table separator lines
                    }
                    if (line.match(/^\|[^|]+\|/)) {
                      return <div key={i} className="font-mono text-sm bg-apice-50 p-2 my-1 rounded">{line}</div>
                    }
                    if (line.startsWith('```')) {
                      return null
                    }
                    if (line.trim() === '') {
                      return <div key={i} className="h-4" />
                    }
                    if (line.startsWith('**') && line.endsWith('**')) {
                      return <p key={i} className="font-semibold text-apice-900 my-2">{line.replace(/\*\*/g, '')}</p>
                    }
                    return <p key={i} className="mb-3">{line.replace(/\*\*/g, '')}</p>
                  })}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
