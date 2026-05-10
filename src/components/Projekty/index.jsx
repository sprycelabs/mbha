import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projekty = [
  {
    id: '001',
    nazev: 'Vila Moderna',
    kategorie: 'Rezidence',
    rok: '2024',
    popis: 'Rodinný dům v Průhonicích. Surový beton, teplé dřevo, plynulý přechod do zahrady.',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    aspect: 'aspect-[3/4]',
  },
  {
    id: '002',
    nazev: 'Atelier Holešovice',
    kategorie: 'Komerční',
    rok: '2024',
    popis: 'Přestavba industriálního prostoru na kreativní studio pro 30 lidí.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    aspect: 'aspect-[4/3]',
  },
  {
    id: '003',
    nazev: 'Apartmán Vinohrady',
    kategorie: 'Interiér',
    rok: '2023',
    popis: 'Rekonstrukce předválečného bytu se zachováním původních detailů.',
    img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    aspect: 'aspect-[3/4]',
  },
]

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay }}>
      {children}
    </motion.div>
  )
}

function ProjektCard({ projekt, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="group cursor-pointer">
        <div className={`relative ${projekt.aspect} overflow-hidden mb-5 bg-black`}>
          <img src={projekt.img} alt={projekt.nazev}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gold flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <ArrowUpRight size={16} className="text-black" />
          </div>
          <div className="absolute bottom-5 left-5 bg-black/50 backdrop-blur-sm px-3 py-1.5">
            <span className="text-gold text-xs tracking-[0.2em] uppercase">{projekt.kategorie}</span>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-serif text-xl font-light text-stone-950 mb-1 group-hover:text-gold transition-colors duration-300">{projekt.nazev}</h3>
            <p className="text-stone-500 text-sm font-light leading-relaxed">{projekt.popis}</p>
          </div>
          <span className="text-stone-400 text-xs tracking-widest ml-4 mt-1 shrink-0">{projekt.rok}</span>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Projekty() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projekty" className="bg-cream-dark py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16" ref={ref}>
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Projekty
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }} className="font-serif text-4xl md:text-5xl font-light text-stone-950">
              Vybraná práce
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            href="#kontakt"
            className="hidden md:flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-stone-600 hover:text-gold transition-colors">
            Všechny projekty <ArrowUpRight size={14} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {projekty.map((p, i) => (
            <ProjektCard key={p.id} projekt={p} delay={0.1 * i} />
          ))}
        </div>
      </div>
    </section>
  )
}
