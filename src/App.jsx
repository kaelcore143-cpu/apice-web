import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Devlog from './pages/Devlog'
import Documentation from './pages/Documentation'
import Roadmap from './pages/Roadmap'

function App() {
  return (
    <div className="min-h-screen bg-apice-50 text-apice-900 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/devlog" element={<Devlog />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
