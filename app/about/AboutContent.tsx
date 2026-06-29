'use client'
import SectionLabel from '@/components/ui/SectionLabel'
import CTABanner from '@/components/home/CTABanner'
import { motion } from 'framer-motion'
import { ABOUT_PILLARS, BUSINESS_MODEL_CARDS } from '@/lib/constants'
import GradientCard from '@/components/ui/GradientCard'
import Image from 'next/image'

interface TimelineStep {
  num: number
  phase: string
  title: string
  desc: string
}

interface Props {
  timeline: TimelineStep[]
}

export default function AboutContent({ timeline }: Props) {
  return (
    <>
      {/* Story */}
      <section className="py-20 section-light-img">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-3xl font-bold mb-5 font-playfair text-dark-brown">Who We Are</h2>
            <p className="text-base leading-relaxed mb-4 text-dark-brown/70 font-inter">
              LignoGold Terra Solutions is a deep-tech innovation team closing the loop between
              urban infrastructure and sustainable agriculture. We intercept wastewater assets at
              the source, transforming high-BOD/COD waste into high-value organo-mineral
              fertilizers — turning a costly disposal problem into a profitable resource recovery
              operation.
            </p>
            <p className="text-base leading-relaxed text-dark-brown/70 font-inter">
              Founded and MSME-registered in Chennai, Tamil Nadu, we are building India&apos;s
              first commercial-scale decentralized nutrient recovery infrastructure — one Ligno-Pod
              at a time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GradientCard className="p-9 text-dark-brown">
              <p className="text-sm leading-relaxed mb-4 pl-4 border-l-2 border-ligno-gold text-dark-brown/70 font-inter italic">
                &ldquo;The future of sanitation isn&apos;t treating waste&mdash;it&apos;s recovering value before it becomes waste.&rdquo;
              </p>
              <p className="text-xs text-dark-brown/40 font-inter">— Manjueesa Arumugam Yadav, Founder &amp; CEO</p>
            </GradientCard>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars — data sourced from constants.ts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Foundation</SectionLabel>
          <h2 className="text-3xl font-bold mb-10 font-playfair text-dark-brown">Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ABOUT_PILLARS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <GradientCard
                  className="h-full"
                  style={{ borderTop: `4px solid ${p.accent}` }}
                >
                  <div className="text-2xl mb-3">{p.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 font-playfair text-dark-brown">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-dark-brown/70 font-inter">{p.desc}</p>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model — data sourced from constants.ts */}
      <section className="py-20 section-light-img">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Business Model</SectionLabel>
          <h2 className="text-3xl font-bold mb-10 font-playfair text-dark-brown">Dual-Engine Revenue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {BUSINESS_MODEL_CARDS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <GradientCard className="h-full">
                  <div className="text-2xl mb-3">{c.icon}</div>
                  <h3 className="text-base font-semibold mb-2 font-inter text-dark-brown">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-dark-brown/70 font-inter">{c.desc}</p>
                </GradientCard>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-xl p-5 text-sm leading-relaxed bg-ligno-gold/10 border border-ligno-gold/25 text-dark-brown/75 font-inter"
          >
            Recurring HaaS revenue funds operations while fertilizer sales create a high-margin
            secondary income stream — a{' '}
            <strong className="text-dark-brown">self-reinforcing circular economy model.</strong>
          </motion.div>
        </div>
      </section>

      {/* MSME Trust banner */}
      <section className="py-16 text-center section-dark-img">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 flex flex-col items-center"
        >
          <div className="mb-3">
            <Image
              src="/MSME logo.jpeg"
              alt="Government of India MSME Logo"
              width={48}
              height={24}
              className="object-contain bg-white rounded p-0.5 mx-auto"
            />
          </div>
          <span className="inline-block text-xs font-bold px-4 py-2 rounded-full text-white mb-5 tracking-widest bg-earth-green">
            MSME REGISTERED
          </span>
          <p className="text-base mb-3 text-white/60 font-inter">
            Registered under Ministry of Micro, Small &amp; Medium Enterprises, Government of India
          </p>
          <p className="text-base font-semibold text-ligno-gold font-playfair">
            Made in India · Built for Global Impact
          </p>
        </motion.div>
      </section>

      {/* Roadmap timeline */}
      <section className="py-20 section-light-img">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>Our Journey</SectionLabel>
          <h2 className="text-3xl font-bold mb-12 font-playfair text-dark-brown">
            Path to Product-Market Fit
          </h2>
          <div className="relative">
            {/* Connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute h-0.5 hidden md:block origin-left"
              style={{
                top: 20,
                left: '12.5%',
                right: '12.5%',
                background: 'linear-gradient(90deg,#C89527,#3A6B1A)',
              }}
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                  className="text-center relative z-10"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-sm text-white font-inter"
                    style={{ background: i === 3 ? '#3A6B1A' : '#C89527', width: 40, height: 40 }}
                  >
                    {t.num}
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-1 text-ligno-gold font-inter">
                    {t.phase}
                  </p>
                  <h3 className="text-sm font-semibold font-inter text-dark-brown">{t.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
