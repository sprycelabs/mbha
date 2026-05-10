import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

const links = [
  { label: 'Filozofie', href: '#filozofie' },
  { label: 'Projekty', href: '#projekty' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Kontakt', href: '#kontakt' },
]

const social = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <a href="#" className="font-serif text-xl font-light tracking-[0.2em] text-white uppercase block mb-4">
            MBHA <span className="text-gold">studio</span>
          </a>
          <p className="text-white/40 text-sm font-light leading-relaxed">
            Architektonické studio se sídlem v Praze. Navrhujeme prostory,
            které mluví za sebe.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-5">Navigace</p>
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href}
                  className="text-white/60 text-sm font-light hover:text-gold transition-colors duration-300 flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-5">Sledujte nás</p>
          <ul className="flex flex-col gap-3">
            {social.map((s) => (
              <li key={s.label}>
                <a href={s.href}
                  className="text-white/60 text-sm font-light hover:text-gold transition-colors duration-300 flex items-center gap-1 group">
                  {s.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-5">Kontakt</p>
          <ul className="flex flex-col gap-4">
            {[
              { icon: Mail, text: 'info@mbha.cz' },
              { icon: Phone, text: '+420 777 123 456' },
              { icon: MapPin, text: 'Dlouhá 12, Praha 1' },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <Icon size={13} className="text-gold shrink-0" strokeWidth={1.5} />
                <span className="text-white/50 text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs font-light tracking-wide">
            © 2026 MBHA studio s.r.o. — Všechna práva vyhrazena
          </p>
          <p className="text-white/20 text-xs font-light">
            IČO: 123 45 678 · DIČ: CZ12345678
          </p>
        </div>
      </div>
    </footer>
  )
}
