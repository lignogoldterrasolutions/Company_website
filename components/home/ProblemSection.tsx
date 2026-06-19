'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROBLEMS } from '@/lib/constants'
import { motion } from 'framer-motion'
import { Wrench, Zap, Wheat, FlaskConical, LucideIcon } from 'lucide-react'

/**
 * Map each problem card to a lucide icon by index.
 * Lucide renders consistently across all OSes unlike emoji.
 */
const PROBLEM_ICONS: LucideIcon[] = [Wrench, Zap, Wheat, FlaskConical]

export default function ProblemSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>The Problem</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 font-playfair text-navy-text"
        >
          A Four-Fold Crisis No One Is Solving
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base leading-relaxed mb-12 max-w-2xl text-navy-text/70 font-inter"
        >
          India&apos;s wastewater infrastructure is broken at the source. Every flush discards a
          fortune in recoverable nutrients while poisoning treatment plants downstream.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROBLEMS.map((p, i) => {
            const Icon = PROBLEM_ICONS[i]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl p-7 transition-all duration-200 cursor-default bg-white border
                           border-navy-text/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-text/8"
                style={{ borderLeft: `3px solid ${p.accent}` }}
              >
                {/* Lucide icon in a styled container — renders consistently cross-platform */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${p.accent}18` }}
                >
                  <Icon size={20} style={{ color: p.accent }} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold mb-2 font-inter text-navy-text">{p.title}</h3>
                <p className="text-sm leading-relaxed text-navy-text/70 font-inter">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
