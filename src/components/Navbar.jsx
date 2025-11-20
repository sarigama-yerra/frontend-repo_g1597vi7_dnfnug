import { useState } from 'react'
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-emerald-500 shadow" />
            <span className="text-white font-semibold tracking-wide">The Jefferson Bar & Grill</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-white/90 hover:text-white transition-colors">
                {n.label}
              </a>
            ))}
            <div className="h-6 w-px bg-white/20" />
            <a href="tel:+1" className="text-white/90 hover:text-white flex items-center gap-2">
              <Phone size={18} /> <span>Call</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-white">
              <Facebook size={20} />
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2 bg-black/60">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded text-white/90 hover:bg-white/10">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
