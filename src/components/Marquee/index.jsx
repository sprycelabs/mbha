export default function Marquee({ dark = false }) {
  const items = ['MBHA studio', 'Architektura', 'Praha', 'Interiér', 'Rezidence', 'Komerční stavby', 'Est. 2024']
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <div className={`overflow-hidden border-y ${dark ? 'border-white/10 bg-black' : 'border-stone-200 bg-cream-dark'} py-4`}>
      <div className="flex animate-marquee whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className={`flex items-center gap-6 px-6 text-xs tracking-[0.25em] uppercase font-light ${dark ? 'text-white/25' : 'text-stone-400'}`}>
            {item}
            <span className={`w-1 h-1 rounded-full ${dark ? 'bg-gold/40' : 'bg-gold/50'}`} />
          </span>
        ))}
      </div>
    </div>
  )
}
