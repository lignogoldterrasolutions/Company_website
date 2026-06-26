'use client'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import { SDG_GOALS } from '@/lib/constants'

export default function SDGSection() {
  return (
    <section className="py-20 section-light-img">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>Global Alignment</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-10 font-playfair text-dark-brown"
        >
          Contributing to 5 UN Sustainable Development Goals
        </motion.h2>

        {/* Grid layout — avoids the "stretched last row" bug from flex-wrap + flex-1 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {SDG_GOALS.map((g, i) => (
            <motion.div
              key={g.num}
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2 rounded-xl px-4 py-5 text-white"
              style={{ background: g.color }}
            >
              <span className="text-4xl font-bold font-playfair leading-none" style={{ opacity: 0.9 }}>
                {g.num}
              </span>
              <div>
                <div className="text-xs font-bold tracking-wide font-inter mb-0.5">SDG GOAL {g.num}</div>
                <div className="text-sm font-semibold font-inter leading-snug">{g.name}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
