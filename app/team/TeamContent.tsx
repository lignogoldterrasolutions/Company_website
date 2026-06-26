'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SectionLabel from '@/components/ui/SectionLabel'
import CTABanner from '@/components/home/CTABanner'
import GradientCard from '@/components/ui/GradientCard'

interface TeamMember {
  name: string
  role: string
  credentials: string
  badgeColor: string
  initial: string
  image?: string
  points: string[]
}
interface StrategicReq {
  num: string
  title: string
  desc: string
}
interface Props {
  team: TeamMember[]
  requirements: StrategicReq[]
}

export default function TeamContent({ team, requirements }: Props) {
  return (
    <>
      {/* Team Cards */}
      <section className="py-20" style={{ background: '#FAF7F0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
              >
                <GradientCard className="h-full text-center">
                  {/* Avatar — photo if available, else initial */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
                    className="mx-auto mb-5 flex-shrink-0"
                    style={{
                      width: 140,
                      height: 140,
                      borderRadius: '50%',
                      border: `3px solid ${m.badgeColor}`,
                      overflow: 'hidden',
                      boxShadow: `0 4px 20px ${m.badgeColor}30`,
                      background: `${m.badgeColor}18`,
                      position: 'relative',
                    }}
                  >
                    {m.image ? (
                      <Image
                        src={m.image}
                        alt={`${m.name} photo`}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top center' }}
                        sizes="140px"
                        priority={i === 0}
                      />
                    ) : (
                      <div
                        className="w-full h-full flex items-center justify-center text-4xl font-bold font-playfair"
                        style={{ color: m.badgeColor }}
                      >
                        {m.initial}
                      </div>
                    )}
                  </motion.div>

                  <h2 className="text-xl font-bold mb-2 font-playfair text-dark-brown">{m.name}</h2>
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full text-white mb-3 font-inter"
                    style={{ background: m.badgeColor }}
                  >
                    {m.role}
                  </span>
                  <p className="text-xs mb-5 text-dark-brown/50 font-inter">{m.credentials}</p>
                  {m.points.length > 0 && (
                    <ul className="text-left flex flex-col gap-3 list-none">
                      {m.points.map((pt, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.15 + j * 0.1 + 0.35 }}
                          className="text-sm pl-4 relative leading-relaxed text-dark-brown/70 font-inter"
                        >
                          <span className="absolute left-0 text-ligno-gold">•</span>{pt}
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionLabel>What We Seek</SectionLabel>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-3 font-playfair text-dark-brown"
          >
            Strategic Requirements for Scaling &amp; Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base mb-10 max-w-xl text-dark-brown/65 font-inter"
          >
            To transition the Ligno-Pod from lab prototype to market-ready climate solution, we seek strategic partnerships.
          </motion.p>
          <div className="flex flex-col gap-4">
            {requirements.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
              >
                <GradientCard className="p-6 flex gap-5 items-start">
                  <span className="text-xl font-bold flex-shrink-0 font-playfair text-ligno-gold" style={{ minWidth: 32 }}>
                    {r.num}
                  </span>
                  <div>
                    <h4 className="text-base font-semibold mb-1 font-inter text-dark-brown">{r.title}</h4>
                    <p className="text-sm leading-relaxed text-dark-brown/65 font-inter">{r.desc}</p>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
