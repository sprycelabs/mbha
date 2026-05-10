import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const hodnoty = [
  {
    cislo: '01',
    nazev: 'Kontext',
    popis: 'Každá stavba vychází z místa, ve kterém stojí. Čteme historii parcely, krajinu, sousedství — a teprve pak navrhujeme.',
  },
  {
    cislo: '02',
    nazev: 'Lidský rozměr',
    popis: 'Navrhujeme pro lidi, ne pro fotografie. Funkčnost, světlo a pocit jsou stejně důležité jako čistota formy.',
  },
  {
    cislo: '03',
    nazev: 'Trvalost',
    popis: 'Věříme v architekturu, která obstojí ve zkoušce časem. Volíme materiály a detaily, které stárnou elegantně.',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  )
}

export default function Filozofie() {
  return (
    <section id="filozofie" className="bg-cream py-32 px-8">
      <div className="max-w-7xl mx-auto">

        <FadeIn>
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-8">Filozofie</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          <FadeIn delay={0.1}>
            <h2 className="font-serif text-5xl md:text-[3.5rem] font-light text-stone-950 leading-[1.12]">
              Architektura jako<br />
              <span className="italic text-gold">odpověď</span> na otázky,<br />
              které si sami klademe.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="md:pt-3">
              <p className="text-stone-600 font-light leading-relaxed text-base mb-5">
                MBHA studio vzniklo z přesvědčení, že dobrá architektura není jen o vizuální dokonalosti.
                Je o hlubokém pochopení toho, jak chce člověk žít, pracovat a přebývat.
              </p>
              <p className="text-stone-400 font-light leading-relaxed text-sm">
                Každý projekt bereme jako dlouhodobý vztah. Jsme s vámi od první tužky po předání klíčů.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 border-t border-stone-200">
          {hodnoty.map((h, i) => (
            <FadeIn key={h.cislo} delay={0.1 * i}>
              <div className={`py-12
                ${i < 2 ? 'md:border-r border-stone-200 md:pr-12' : ''}
                ${i > 0 ? 'md:pl-12' : ''}
                border-b md:border-b-0
              `}>
                <span className="text-gold text-xs tracking-[0.25em] uppercase block mb-5 font-light">{h.cislo}</span>
                <h3 className="font-serif text-2xl font-light text-stone-950 mb-4">{h.nazev}</h3>
                <p className="text-stone-500 font-light leading-relaxed text-sm">{h.popis}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mt-16 grid grid-cols-3 gap-3 h-44">
            {[
              'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=75',
              'https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?w=600&q=75',
              'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=75',
            ].map((src, i) => (
              <div key={i} className="overflow-hidden bg-stone-200">
                <img src={src} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
