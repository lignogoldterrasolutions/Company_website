'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'

export default function CTABanner() {
  return (
    <section
      className="relative py-20 text-center overflow-hidden"
      style={{
        backgroundImage: 'url(/section-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(8,4,1,0.72) 0%, rgba(25,12,2,0.65) 100%)',
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
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
          We are actively seeking incubation partners, technical mentors, pilot facility hosts,
          and agri-distribution partners across India.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <Button variant="primary" size="lg">Partner With Us</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
