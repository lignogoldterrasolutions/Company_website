'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { SOLUTION_FEATURES } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function SolutionSection() {
  return (
    <section className="py-20 section-light-img">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionLabel>Our Solution</SectionLabel>
          <h2 className="text-4xl font-bold mb-4 font-playfair text-dark-brown">
            💎 The Ligno-Pod: In-Situ Nutrient Recovery
          </h2>
          <p className="text-base leading-relaxed mb-10 text-dark-brown/70 font-inter">
            A modular, odorless biomineralization system that intercepts and recovers nutrients
            at the source — no batch processing, no manual intervention, no disruption.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            {SOLUTION_FEATURES.map((f, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/60 border border-dark-brown/5 backdrop-blur-sm shadow-sm">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-lg"
                  style={{
                    background: i % 2 === 0 ? 'rgba(200,149,39,0.12)' : 'rgba(58,107,26,0.12)',
                  }}
                >
                  {f.icon}
                </div>
                <h4 className="text-sm font-semibold font-inter text-dark-brown leading-snug">{f.title}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
