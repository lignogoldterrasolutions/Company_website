'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'
import GradientCard from '@/components/ui/GradientCard'

interface Goal {
  num: number
  name: string
  color: string
  desc: string
}

interface Pillar {
  icon: string
  title: string
  stat: string
  statLabel: string
  desc: string
  color: string
}

interface Props {
  sdgGoals: Goal[]
  impactPillars: Pillar[]
  beforeList: string[]
  afterList: string[]
}

export default function ImpactContent({ sdgGoals, impactPillars, beforeList, afterList }: Props) {
  return (
    <>
      {/* 4 Impact Pillars */}
      <section className="py-20 section-light-img">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Impact Pillars</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-10 font-playfair text-dark-brown">Four Dimensions of Impact</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impactPillars.map((imp, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <GradientCard className="h-full">
                  <div className="text-3xl mb-3">{imp.icon}</div>
                  <h3 className="text-base font-semibold mb-2 font-inter text-dark-brown">{imp.title}</h3>
                  <p className="text-sm leading-relaxed mb-4 text-dark-brown/70 font-inter">{imp.desc}</p>
                  <div className="text-2xl font-bold font-playfair" style={{ color: imp.color }}>{imp.stat}</div>
                  <div className="text-xs mt-1 text-dark-brown/50 font-inter">{imp.statLabel}</div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>The Difference</SectionLabel>
          <h2 className="text-3xl font-bold mb-8 font-playfair text-dark-brown">Before and After the Ligno-Pod</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-7 bg-dark-brown/5 border border-dark-brown/10"
            >
              <h3 className="text-base font-semibold mb-4 font-inter text-dark-brown">🚫 Before</h3>
              {beforeList.map((b, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 text-sm font-inter" style={{ borderBottom: i < beforeList.length - 1 ? '1px solid rgba(44,26,6,0.07)' : 'none', color: 'rgba(44,26,6,0.75)' }}>
                  <span style={{ color: '#c0392b', fontWeight: 700, fontSize: 14 }}>✕</span>{b}
                </div>
              ))}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl p-7 bg-earth-green/4 border border-earth-green/18"
            >
              <h3 className="text-base font-semibold mb-4 font-inter text-earth-green">✅ After Ligno-Pod</h3>
              {afterList.map((a, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 text-sm font-inter" style={{ borderBottom: i < afterList.length - 1 ? '1px solid rgba(58,107,26,0.1)' : 'none', color: 'rgba(44,26,6,0.75)' }}>
                  <span style={{ color: '#3A6B1A', fontWeight: 700, fontSize: 14 }}>✓</span>{a}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDG Full */}
      <section className="py-20 section-light-img">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>UN SDG Alignment</SectionLabel>
          <h2 className="text-3xl font-bold mb-8 font-playfair text-dark-brown">Contributing to 5 Sustainable Development Goals</h2>
          <div className="flex flex-col gap-4">
            {sdgGoals.map((g, i) => (
              <motion.div 
                key={g.num} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-5 items-start rounded-2xl px-6 py-5 text-white" 
                style={{ background: g.color }}
              >
                <span className="text-5xl font-bold flex-shrink-0 font-playfair opacity-85 min-w-[56px]">{g.num}</span>
                <div>
                  <h3 className="text-base font-semibold mb-1 font-inter">{g.name}</h3>
                  <p className="text-sm leading-relaxed opacity-85 font-inter">{g.desc}</p>
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
