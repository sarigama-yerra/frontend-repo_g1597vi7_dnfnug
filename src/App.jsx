import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Events from './components/Events'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  const [snow, setSnow] = useState(true)

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero snowEnabled={snow} onToggleSnow={() => setSnow((v) => !v)} />
        <About />
        <Menu />
        <Events />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-10 text-center bg-zinc-950">
        <p className="text-white/70">Happy Holidays from The Jefferson Bar & Grill</p>
        <p className="text-white/40 text-sm mt-1">© {new Date().getFullYear()} The Jefferson Bar & Grill. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
