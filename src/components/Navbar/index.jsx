import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Filozofie', href: '#filozofie' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <a href="#" className="font-serif text-lg font-light tracking-[0.25em] text-white uppercase">
          MBHA <span className="text-gold">studio</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-xs tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="#kontakt"
            className="text-xs tracking-[0.2em] uppercase border border-gold/60 text-gold px-5 py-2.5 hover:bg-gold hover:text-black transition-all duration-300">
            Kontakt
          </a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black border-b border-white/10 px-8 py-6 flex flex-col gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-xs tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
