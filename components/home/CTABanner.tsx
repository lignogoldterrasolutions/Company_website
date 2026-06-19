'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section className="py-20 text-center" style={{ background: 'linear-gradient(135deg, #152236 0%, #0C1A2E 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
          className="text-4xl font-bold text-white mb-4 font-playfair"
        >
          Ready to Close the Nutrient Loop?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="text-base leading-relaxed mb-10 mx-auto max-w-xl font-light font-inter"
          style={{ color: 'rgba(255,255,255,0.65)' }}
        >
          We are actively seeking incubation partners, technical mentors, pilot facility hosts, and agri-distribution partners across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/contact"><Button variant="primary" size="lg">Partner With Us</Button></Link>
          <Link href="/technology"><Button variant="outline-white" size="lg">Learn Our Technology</Button></Link>
        </motion.div>
      </div>
    </section>
  )
}
