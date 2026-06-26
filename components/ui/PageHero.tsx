'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface Props {
  eyebrow: string
  title: string
  subtitle: string
  variant?: 'dark' | 'cream'
}

export default function PageHero({ eyebrow, title, subtitle, variant = 'dark' }: Props) {
  const isDark = variant === 'dark'
  return (
    <section
      className="relative py-16 md:py-28 overflow-x-hidden"
      style={
        isDark
          ? {
              backgroundImage: 'url(/hero-bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed',
            }
          : { background: '#FAF7F0' }
      }
    >
      {isDark && (
        <div
          className="absolute inset-0"
          style={{
            background:
            'linear-gradient(160deg, rgba(8,4,1,0.65) 0%, rgba(25,12,2,0.60) 60%, rgba(8,4,1,0.55) 100%)',
          }}
        />
      )}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-label"
        >
          {eyebrow}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mt-1 mb-5 max-w-3xl"
          style={{
            fontFamily: 'Playfair Display, serif',
            color: isDark ? '#fff' : '#2C1A06',
          }}
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed max-w-2xl font-light"
          style={{
            color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(44,26,6,0.7)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Scroll-down affordance — bouncing chevron hints content continues below */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown
            size={22}
            style={{ color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(44,26,6,0.25)' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
