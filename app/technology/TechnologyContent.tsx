'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Nutrient {
  symbol: string
  range: string
  name: string
  color: string
}

interface Props {
  nutrients: Nutrient[]
}

export default function TechnologyContent({ nutrients }: Props) {
  const features = [
    { icon: '💎', title: 'P Recovery', desc: 'Phosphorus recovered first as crystalline struvite solid' },
    { icon: '🌑', title: 'Biochar Adsorption', desc: 'Residual N and K adsorbed onto biochar, creating stable organic fertilizer' },
    { icon: '♻️', title: 'Water Reuse', desc: 'Leftover liquid recycled for toilet flushing' },
    { icon: '🛡️', title: 'Two-Step Sanitization', desc: 'Recovered biochar undergoes dual sanitization for regulatory compliance' },
    { icon: '🌲', title: 'Carbon Sequestration', desc: 'Biochar as primary medium achieves permanent carbon storage' },
  ]

  const processDetail = [
    { emoji: '🚰', accent: '#C89527', title: 'Step 1 — Interception', desc: 'Source-separated urine enters the modular IP Box via silicon odourless flap valve drain hole. Gravity-fed inlet at the top, clean effluent outlet at the bottom.' },
    { emoji: '⚙️', accent: '#3A6B1A', title: 'Step 2 — Ligno-Pod Processing', desc: 'Diffuser and enzyme stage triggers hydrolysis. Engineered Recovery Matrix (IP Protected) captures struvite. Polishing layer refines the output.' },
    { emoji: '💰', accent: '#1E3A5F', title: 'Step 3 — Dual Value Output', desc: 'Facilities immediately benefit from scale-free pipes and up to 80% water savings. Spent cores become nutrient-saturated assets.' },
    { emoji: '🌾', accent: '#3A6B1A', title: 'Step 4 — Agri-Output', desc: 'Spent cores undergo solar-thermal drying at 60°C to inactivate pathogens and viruses. Final product is harvested as premium slow-release organo-mineral fertilizer for agriculture, soil rejuvenation and carbon offsetting.' },
  ]

  const solarSpecs = [
    ['Temperature', '60°C'],
    ['Heating Source', 'Solar Thermal'],
    ['System Type', 'Batch'],
    ['Capacity', '5–10 kg per batch'],
    ['Moisture Reduction', '<10%'],
  ]

  const evidence = [
    { image: '/Fig%201.png', title: 'Fig 1: Internal Matrix Saturation', desc: 'Cross-section of biochar granule revealing high-density struvite precipitation throughout the internal porous structure.' },
    { image: '/Fig%202.png', title: 'Fig 2: Crystalline Purity Analysis', desc: 'Visible Struvite (Magnesium Ammonium Phosphate) crystals recovered from the Ligno-Pod matrix, demonstrating successful bio-mineralization.' },
    { image: '/Fig%203.png', title: 'Fig 3: Surface Adhesion and Nucleation', desc: 'Micro-growth of nutrient pins on the biochar surface, confirming the effective bonding of Nitrogen and Phosphorus.' },
  ]

  const nutrientRoles = [
    'Essential for plant growth, chlorophyll production and protein synthesis. Recovered as ammonium compounds.',
    'Finite, irreplaceable mineral for root development. Recovered as crystalline struvite — the premium form.',
    'Critical for water regulation, enzyme activation and stress resistance. Adsorbed onto biochar matrix.',
  ]

  return (
    <>
      {/* Nutrients */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What We Recover</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 font-playfair text-navy-text">Nutrients Lost in Every Flush</motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base leading-relaxed mb-10 max-w-2xl text-navy-text/70 font-inter">
            Human liquid waste contains 80–90% of Nitrogen, 50–65% of Phosphorus, and 50–80% of Potassium — yet it is flushed away. Our system intercepts and recovers these nutrients in-situ.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nutrients.map((n, i) => (
              <motion.div 
                key={n.symbol} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-2xl p-7 text-center bg-white border border-navy-text/10">
                <div className="text-6xl font-bold mb-2 font-playfair" style={{ color: n.color }}>{n.symbol}</div>
                <div className="text-2xl font-bold mb-1 font-playfair text-navy-text">{n.range}</div>
                <div className="text-base font-semibold mb-3 font-inter text-navy-text">{n.name}</div>
                <p className="text-sm leading-relaxed text-navy-text/60 font-inter">{nutrientRoles[i]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Core Features</SectionLabel>
          <h2 className="text-3xl font-bold mb-10 font-playfair text-navy-text">How the Ligno-Pod Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 bg-cream border border-navy-text/10">
                <div className="text-2xl mb-3">{f.icon}</div>
                <h3 className="text-sm font-semibold mb-2 font-inter text-navy-text">{f.title}</h3>
                <p className="text-xs leading-relaxed text-navy-text/70 font-inter">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 4-step process */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Process Details</SectionLabel>
          <h2 className="text-3xl font-bold mb-8 font-playfair text-navy-text">The Four-Step Process — Detailed</h2>
          <div className="flex flex-col gap-4">
            {processDetail.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl p-6 flex gap-5 items-start bg-white border border-navy-text/10">
                <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl flex-shrink-0" style={{ borderColor: s.accent, minWidth: 48, height: 48 }}>
                  {s.emoji}
                </div>
                <div>
                  <h3 className="text-base font-semibold mb-1 font-inter" style={{ color: s.accent }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed text-navy-text/70 font-inter">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Dryer */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Sanitization System</SectionLabel>
          <h2 className="text-3xl font-bold mb-8 font-playfair text-navy-text">Solar Thermal Drying System</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-base leading-relaxed mb-5 text-navy-text/70 font-inter">
                Solar thermal heating of struvite enriched biochar reduces moisture to less than 10% and destroys pathogens — a compact, cost-effective system requiring only sunlight.
              </p>
              <ul className="flex flex-col gap-2.5 mb-6 list-none">
                {['Compact and cost-effective', 'Requires only sunlight', 'Easy to operate and maintain', 'Ideal for small-scale users'].map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-navy-text/70 font-inter">
                    <span className="text-earth-green font-bold text-lg">✓</span>{b}
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 text-sm leading-relaxed mb-3 bg-ligno-gold/10 border border-ligno-gold/25 text-navy-text/75 font-inter">
                <strong className="text-navy-text">Heat at 60°C</strong> effectively kills bacteria, viruses, and other pathogens.
              </div>
              <div className="rounded-xl p-4 text-sm leading-relaxed bg-earth-green/7 border border-earth-green/20 text-navy-text/75 font-inter">
                Final product: Sanitized, low-moisture struvite enriched biochar fertilizer — safe and ready for agricultural use.
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6 bg-cream border border-navy-text/10"
            >
              <h3 className="text-base font-semibold mb-4 font-inter text-navy-text">Setup Details</h3>
              {solarSpecs.map(([k, v], i) => (
                <div key={i} className="flex justify-between py-2.5 text-sm" style={{ borderBottom: i < solarSpecs.length - 1 ? '1px solid rgba(30,58,95,0.1)' : 'none' }}>
                  <span className="text-navy-text/55 font-inter">{k}</span>
                  <span className="font-semibold text-navy-text font-inter">{v}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Empirical Evidence</SectionLabel>
          <h2 className="text-3xl font-bold mb-3 font-playfair text-navy-text">In-Situ Nutrient Mineralization</h2>
          <p className="text-base mb-10 max-w-xl text-navy-text/65 font-inter">
            Three linked observations pair the microscopy imagery with the corresponding mineralization findings.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {evidence.map((e, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="rounded-2xl overflow-hidden bg-white border border-navy-text/10 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-48 w-full bg-cream overflow-hidden border-b border-navy-text/8">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-sm font-semibold mb-2 font-inter text-navy-text">{e.title}</h4>
                  <p className="text-xs leading-relaxed text-navy-text/65 font-inter">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
