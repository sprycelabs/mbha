import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Citat() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="bg-stone-950 py-28 px-8 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        {/* Ghost velké uvozovky */}
        <span className="absolute -top-10 -left-6 font-serif text-[14rem] leading-none text-white/3 select-none pointer-events-none">
          „
        </span>

        <div className="relative z-10 max-w-4xl">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="h-px bg-gold w-16 mb-12 origin-left"
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl font-light text-white leading-[1.2] italic mb-12"
          >
            Dobrá architektura se neptá,
            jak bude vypadat na fotografii.
            Ptá se, jak se v ní bude{' '}
            <span className="text-gold not-italic">žít.</span>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-white/30 text-xs tracking-[0.25em] uppercase"
          >
            — Zakladatelé MBHA studia
          </motion.p>
        </div>

        {/* Dekorativní čára vpravo */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          animate={inView ? { opacity: 1, scaleY: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent origin-top hidden md:block"
        />
      </div>
    </section>
  )
}
