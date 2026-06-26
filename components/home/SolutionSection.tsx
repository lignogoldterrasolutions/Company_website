'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { NUTRIENTS, SOLUTION_FEATURES } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function SolutionSection() {
  return (
    <section className="py-20 section-light-img">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Dark panel — Nutrient recovery stats */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative rounded-3xl p-9 overflow-hidden"
            style={{
              backgroundImage: 'url(/section-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* overlay */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: 'rgba(10,5,1,0.72)' }}
            />
            <div className="relative z-10">
              <span className="section-label">The Ligno-Pod Recovers</span>
              <h2 className="text-3xl font-bold mb-6 text-white font-playfair">
                Nutrients Flushed Every Day
              </h2>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {NUTRIENTS.map(n => (
                  <div key={n.symbol} className="text-center py-4 rounded-xl border border-white/10">
                    <div className="text-3xl font-bold font-playfair" style={{ color: n.color }}>{n.symbol}</div>
                    <div className="text-xs mt-1 text-white/50 font-inter">{n.range}</div>
                    <div className="text-xs mt-0.5 text-white/35 font-inter">{n.name}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg p-4 text-sm leading-relaxed bg-ligno-gold/12 border border-ligno-gold/30 text-white/70 font-inter">
                Human liquid waste contains all three critical nutrients —{' '}
                <strong className="text-white">yet it&apos;s flushed away untreated</strong>{' '}
                in every toilet across India.
              </div>
            </div>
          </motion.div>

          {/* Text column — Features with proper icon containers */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <SectionLabel>Our Solution</SectionLabel>
            <h2 className="text-4xl font-bold mb-4 font-playfair text-dark-brown">
              The Ligno-Pod: In-Situ Nutrient Recovery
            </h2>
            <p className="text-base leading-relaxed mb-6 text-dark-brown/70 font-inter">
              A modular, odorless biomineralization system that intercepts and recovers nutrients
              at the source — no batch processing, no manual intervention, no disruption.
            </p>
            <div className="flex flex-col gap-5">
              {SOLUTION_FEATURES.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  {/* Icon container — fixed width so emoji never wraps with title */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                    style={{
                      background: i % 2 === 0 ? 'rgba(200,149,39,0.12)' : 'rgba(58,107,26,0.12)',
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-1 font-inter text-dark-brown">{f.title}</h4>
                    <p className="text-sm leading-relaxed text-dark-brown/70 font-inter">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
