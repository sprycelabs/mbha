import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, ArrowRight } from 'lucide-react'

const recenze = [
  {
    jmeno: 'Petra & Ondřej Novákovi',
    role: 'Rodinný dům · Průhonice',
    text: 'Od první schůzky bylo jasné, že MBHA studio skutečně naslouchá. Výsledný dům je přesně to, o čem jsme snili — funkční, krásný a naprosto náš.',
    hvezdy: 5,
  },
  {
    jmeno: 'Martin Dvořák',
    role: 'Kreativní studio · Holešovice',
    text: 'Potřeboval jsem proměnit syrový industriální prostor ve funkční kreativní zázemí. Tým pochopil vizi okamžitě. Projekt dodán včas, v rozpočtu, bez kompromisů.',
    hvezdy: 5,
  },
  {
    jmeno: 'Lucie Horáčková',
    role: 'Rekonstrukce bytu · Vinohrady',
    text: 'MBHA studio zachovalo ducha původního předválečného bytu a přidalo moderní funkčnost. Výsledek překonal moje očekávání. Doporučuji bez výhrad.',
    hvezdy: 5,
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

export default function Recenze() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-cream py-20 md:py-32 px-5 md:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
          Reference
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-light text-stone-950">
            Co říkají klienti
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-stone-500 text-sm font-light max-w-xs leading-relaxed">
            Každý projekt začíná vztahem. Tady je zpětná vazba od těch, se kterými jsme ho budovali.
          </motion.p>
        </div>

        {/* Tři boxy vedle sebe */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {recenze.map((r, i) => (
            <FadeIn key={r.jmeno} delay={0.1 * i}>
              <div className="bg-cream-dark border border-stone-200 p-8 flex flex-col justify-between h-full group hover:border-gold/40 transition-colors duration-300">
                <div>
                  <Quote size={24} className="text-gold/40 mb-6" strokeWidth={1} />
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: r.hvezdy }).map((_, j) => (
                      <Star key={j} size={12} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-lg font-light text-stone-800 leading-relaxed italic mb-8">
                    „{r.text}"
                  </blockquote>
                </div>
                <div className="border-t border-stone-200 pt-6">
                  <p className="text-stone-950 text-sm font-light tracking-wide">{r.jmeno}</p>
                  <p className="text-gold text-xs tracking-[0.15em] uppercase mt-1 font-light">{r.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t border-stone-200 pt-10 md:pt-14 gap-4 md:gap-8">
          {[
            { hodnota: '12+', label: 'Dokončených projektů' },
            { hodnota: '100%', label: 'Spokojených klientů' },
            { hodnota: '5 ★', label: 'Průměrné hodnocení' },
          ].map((s, i) => (
            <FadeIn key={s.label} delay={0.1 * i}>
              <div className="text-center">
                <p className="font-serif text-4xl md:text-5xl font-light text-gold mb-2">{s.hodnota}</p>
                <p className="text-stone-400 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA pod recenzemi */}
        <FadeIn delay={0.2}>
          <div className="mt-12 md:mt-16 border border-stone-200 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="font-serif text-2xl font-light text-stone-950 mb-1">Chcete být dalším spokojeným klientem?</p>
              <p className="text-stone-500 text-sm font-light">Konzultace je zdarma. Zavolejte nebo napište ještě dnes.</p>
            </div>
            <a href="#kontakt"
              className="shrink-0 flex items-center gap-3 bg-stone-950 text-cream text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-black transition-all duration-300 group whitespace-nowrap">
              Domluvit schůzku
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
