import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Kontakt() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="kontakt" className="bg-black pt-20 md:pt-32 px-5 md:px-8 pb-0" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Top — info + formulář */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start pb-12 md:pb-20">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Kontakt
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-light text-cream mb-6 leading-snug">
              Začněme<br />
              <span className="italic text-gold">společně</span>
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
              className="text-white/50 font-light leading-relaxed mb-3 max-w-sm text-sm">
              Konzultace je <span className="text-white/80">zdarma a nezávazná.</span> Stačí nám říct,
              co máte v plánu — my vám řekneme, jak na to.
            </motion.p>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.25 }}
              className="text-white/30 font-light leading-relaxed mb-10 max-w-sm text-xs">
              Obvykle odpovídáme do 24 hodin.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.3 }}
              className="flex flex-col gap-5 mb-10">
              {[
                { icon: Mail, label: 'info@mbha.cz', href: 'mailto:info@mbha.cz' },
                { icon: Phone, label: '+420 777 123 456', href: 'tel:+420777123456' },
                { icon: MapPin, label: 'Dlouhá 12, Praha 1', href: '#mapa' },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 group w-fit">
                  <div className="w-8 h-8 border border-white/15 group-hover:border-gold flex items-center justify-center shrink-0 transition-colors duration-300">
                    <Icon size={14} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-white/50 font-light text-sm tracking-wide group-hover:text-white/80 transition-colors duration-300">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Prodejní badge */}
            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
              className="border border-white/10 p-5 max-w-xs">
              <p className="text-white/70 text-sm font-light leading-relaxed">
                💬 Nejste si jistí, co potřebujete? Klidně zavolejte —
                rádi vám poradíme ještě před tím, než se rozhodnete.
              </p>
            </motion.div>
          </div>

          {/* Formulář */}
          <motion.form initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }} className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}>
            {[
              { id: 'jmeno', label: 'Jméno a příjmení', type: 'text', placeholder: 'Jan Novák' },
              { id: 'email', label: 'E-mail', type: 'email', placeholder: 'jan@example.cz' },
              { id: 'telefon', label: 'Telefon', type: 'tel', placeholder: '+420 ...' },
            ].map((f) => (
              <div key={f.id}>
                <label className="text-white/30 text-xs tracking-[0.15em] uppercase block mb-2">{f.label}</label>
                <input type={f.type} placeholder={f.placeholder}
                  className="w-full bg-white/5 border border-white/10 focus:border-gold text-cream placeholder:text-white/20 font-light text-sm px-4 py-3.5 outline-none transition-colors duration-300" />
              </div>
            ))}
            <div>
              <label className="text-white/30 text-xs tracking-[0.15em] uppercase block mb-2">O čem chcete mluvit?</label>
              <textarea rows={4} placeholder="Rodinný dům, rekonstrukce, komerční prostor... Klidně i jen nápad."
                className="w-full bg-white/5 border border-white/10 focus:border-gold text-cream placeholder:text-white/20 font-light text-sm px-4 py-3.5 outline-none transition-colors duration-300 resize-none" />
            </div>
            <button type="submit"
              className="flex items-center justify-center gap-3 bg-gold text-black text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-all duration-300 mt-2 w-full group font-medium">
              Chci nezávaznou konzultaci
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-white/20 text-xs text-center font-light">Zdarma · Bez závazků · Odpovídáme do 24 h</p>
          </motion.form>
        </div>

        {/* Google Mapa — full width */}
        <motion.div
          id="mapa"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="border-t border-white/10"
        >
          <iframe
            title="MBHA studio — mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.972!2d14.4228!3d50.0897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94eb3757f5b7%3A0xd4d91dad3e96ce8c!2sDlouh%C3%A1%2C%20Praha%201!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz"
            width="100%"
            height="380"
            style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.6)' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

      </div>
    </section>
  )
}
