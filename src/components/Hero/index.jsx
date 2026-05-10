import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85"
        alt="MBHA studio architektura"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Top label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute top-32 left-8 md:left-16 text-white/50 text-xs tracking-[0.35em] uppercase"
      >
        Architektonické studio · Praha
      </motion.p>

      {/* Main content — bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-light text-white leading-none mb-4"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
          >
            MBHA
            <br />
            <span className="italic text-gold">studio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-white/55 font-light text-sm md:text-base tracking-wide max-w-sm leading-relaxed mb-10"
          >
            Navrhujeme prostory, které respektují místo,<br />
            člověka i čas. Každý projekt je jedinečný příběh.
          </motion.p>

          {/* Buttons — vždy vedle sebe */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-row items-center gap-4"
          >
            <a
              href="#kontakt"
              className="flex items-center gap-3 bg-gold text-black text-xs tracking-[0.2em] uppercase px-7 py-4 hover:bg-white transition-all duration-300 group whitespace-nowrap"
            >
              Získat nabídku zdarma
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projekty"
              className="flex items-center gap-3 border border-white/40 text-white text-xs tracking-[0.2em] uppercase px-7 py-4 hover:border-gold hover:text-gold transition-all duration-300 whitespace-nowrap"
            >
              Prohlédnout projekty
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="h-14 w-px bg-white/20" />
        <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={13} className="text-gold" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  )
}
