'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import { PROCESS_STEPS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function ProcessSection() {
  return (
    <section className="py-20 section-light-img">
      <div className="max-w-6xl mx-auto px-6">
        <SectionLabel>How It Works</SectionLabel>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-3 font-playfair text-dark-brown">
          The Four-Step Ligno-Pod Process
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-base mb-16 max-w-xl text-dark-brown/60 font-inter">
          A continuous-flow system with zero batch processing and zero manual intervention.
        </motion.p>
        <div className="relative">
          {/* Connecting line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
            className="absolute top-11 h-0.5 hidden md:block origin-left"
            style={{ background: 'linear-gradient(90deg, #C89527, #3A6B1A)', left: '12.5%', right: '12.5%' }} 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="text-center relative z-10"
              >
                <div className="w-22 h-22 rounded-full border-2 flex items-center justify-center mx-auto mb-4 relative text-3xl"
                  style={{ width: 88, height: 88, borderColor: s.accent, background: 'rgba(255,252,240,0.85)', backdropFilter: 'blur(4px)' }}>
                  {s.emoji}
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center text-white"
                    style={{ background: s.accent, fontSize: 10 }}>{s.num}</span>
                </div>
                <h3 className="text-sm font-semibold mb-2 font-inter text-dark-brown">{s.title}</h3>
                <p className="text-xs leading-relaxed text-dark-brown/65 font-inter">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
