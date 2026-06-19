'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { MARKET_CARDS, WHY_NOW } from '@/lib/constants'

export default function MarketSection() {
  return (
    <section className="py-20" style={{ background: '#0C1A2E' }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Market Opportunity</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3 font-playfair text-white"
        >
          A ₹2.3 Lakh Crore Market Ready for Disruption
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base mb-10 max-w-xl font-light font-inter"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          India generates ~38 billion litres of nutrient-rich urine per year — entirely underutilised.
          Bio-inputs are growing at 12–15% CAGR.
        </motion.p>

        {/* Market size cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {MARKET_CARDS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="rounded-2xl p-6"
              style={{ background: m.bg, border: `1px solid ${m.border}` }}
            >
              <span
                className="text-xs font-bold tracking-widest block mb-2 font-inter"
                style={{ color: m.tagColor }}
              >
                {m.tag}
              </span>
              <div className="text-3xl font-bold text-white mb-2 font-playfair">{m.value}</div>
              <p className="text-xs leading-relaxed font-inter" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Why Now strip — now with a clear heading label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-7"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h3
            className="text-xs font-bold tracking-widest uppercase mb-5 font-inter"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            Why Now?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_NOW.map((w, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed pl-4 font-inter"
                style={{ color: 'rgba(255,255,255,0.65)', borderLeft: '2px solid #C89527' }}
              >
                {w}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
