'use client'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { HERO_STATS } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-x-hidden"
      style={{
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark gradient overlay — light enough for image to show through */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,5,1,0.65) 0%, rgba(30,15,3,0.55) 40%, rgba(10,5,1,0.45) 100%)',
        }}
      />
      {/* Decorative rings */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute rounded-full border"
          style={{ width: 500, height: 500, top: -100, right: 100, borderColor: 'rgba(200,149,39,0.07)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
          className="absolute rounded-full border"
          style={{ width: 340, height: 340, top: 30, right: 210, borderColor: 'rgba(58,107,26,0.06)' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.6 }}
          className="absolute rounded-full border"
          style={{ width: 200, height: 200, top: 130, right: 350, borderColor: 'rgba(200,149,39,0.04)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

          {/* Left: text + mobile stat cards + CTA — 3/5 on desktop */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-6"
              style={{
                border: '1px solid #C89527',
                color: '#C89527',
                background: 'rgba(200,149,39,0.08)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Deep-Tech · Circular Economy · Made in India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-playfair text-white"
            >
              Redesigning Wastewater Infrastructure into{' '}
              <span className="text-ligno-gold">Decentralized Resource Factories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg leading-relaxed mb-8 font-light text-white/65 font-inter max-w-[580px]"
            >
              We intercept wastewater assets at the source, transforming high-BOD/COD waste into
              high-value organo-mineral fertilizers — turning a costly disposal problem into a
              profitable resource recovery operation.
            </motion.p>

            {/*
              Mobile-only stat cards: appear between paragraph and CTAs so the hero
              has visual interest above the fold on small screens.
            */}
            <div className="lg:hidden grid grid-cols-1 gap-3 mb-8">
              {HERO_STATS.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="rounded-xl p-4 bg-white/5 border border-white/8 flex items-center gap-4"
                  style={{ borderLeft: `3px solid ${s.color}` }}
                >
                  <div className="text-2xl font-bold font-playfair flex-shrink-0" style={{ color: s.color }}>
                    {s.value}
                  </div>
                  <div className="text-sm leading-relaxed text-white/60 font-inter">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact"><Button variant="primary" size="lg">Partner With Us</Button></Link>
            </motion.div>
          </div>

          {/* Right: 2/5 — Stat cards visible on desktop only */}
          <div className="hidden lg:flex lg:col-span-2 flex-col gap-4">
            {HERO_STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="rounded-2xl p-5 bg-white/5 border border-white/8"
                style={{ borderLeft: `3px solid ${s.color}` }}
              >
                <div className="text-3xl font-bold mb-1 font-playfair" style={{ color: s.color }}>{s.value}</div>
                <div className="text-sm leading-relaxed text-white/60 font-inter">{s.label}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
