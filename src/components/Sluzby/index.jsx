import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building2, Layers, Compass, ArrowRight } from 'lucide-react'

const sluzby = [
  {
    icon: Home,
    nazev: 'Rodinné domy',
    popis: 'Navrhujeme domy šité přesně na míru — od dispozice přes výběr materiálů po dohled nad realizací. Výsledek je domov, ve kterém se opravdu žije.',
    tag: 'Rezidence',
  },
  {
    icon: Building2,
    nazev: 'Komerční stavby',
    popis: 'Kanceláře, showroomy, restaurace a hotely. Prostory, které pracují pro vaše podnikání, reprezentují vaší značku a zanechávají trvalý dojem.',
    tag: 'Komerční',
  },
  {
    icon: Layers,
    nazev: 'Interiérový design',
    popis: 'Rekonstrukce a interiéry s důrazem na materiál, světlo a proporcí. Pracujeme s tím, co prostor má — a přidáváme to, co mu chybělo.',
    tag: 'Interiér',
  },
  {
    icon: Compass,
    nazev: 'Studie & konzultace',
    popis: 'Územní a architektonické studie, posouzení projektu nebo nezávazná konzultace. Poradíme na jakékoli fázi — i když teprve přemýšlíte.',
    tag: 'Poradenství',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 25 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }}>
      {children}
    </motion.div>
  )
}

export default function Sluzby() {
  return (
    <section id="sluzby" className="bg-black py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-20">
          <div>
            <FadeIn>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Služby</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-snug">
                Co pro vás<br />
                <span className="italic text-gold">dokážeme</span> udělat
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <p className="text-white/35 text-sm font-light max-w-xs leading-relaxed md:text-right">
              Komplexní architektonické služby od prvního náčrtu po kolaudaci.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/8">
          {sluzby.map((s, i) => {
            const Icon = s.icon
            return (
              <FadeIn key={s.nazev} delay={0.08 * i}>
                <div className="bg-black p-7 md:p-10 hover:bg-white/4 transition-colors duration-300 group h-full">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-11 h-11 border border-white/12 group-hover:border-gold/60 flex items-center justify-center transition-colors duration-300">
                      <Icon size={18} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="text-white/20 text-xs tracking-[0.2em] uppercase group-hover:text-gold/50 transition-colors duration-300">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-light text-white mb-4">{s.nazev}</h3>
                  <p className="text-white/35 font-light text-sm leading-relaxed">{s.popis}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA pod službami */}
        <FadeIn delay={0.2}>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-12">
            <p className="text-white/40 text-sm font-light max-w-md leading-relaxed">
              Nejste si jistí, která služba je pro vás ta pravá?{' '}
              <span className="text-white/70">Zavolejte nám — rádi vám doporučíme nejlepší postup.</span>
            </p>
            <a href="#kontakt"
              className="shrink-0 flex items-center gap-3 border border-gold text-gold text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-black transition-all duration-300 group whitespace-nowrap">
              Konzultace zdarma
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
