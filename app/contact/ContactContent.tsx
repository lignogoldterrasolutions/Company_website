'use client'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'
import GradientCard from '@/components/ui/GradientCard'

interface ContactInfo {
  name: string
  role: string
  email: string
  phone: string
  location: string
}
interface PartnerType {
  icon: string
  label: string
  desc: string
}
interface Props {
  contactInfo: ContactInfo
  partnershipTypes: PartnerType[]
}

const CONTACT_FIELDS = (info: ContactInfo) => [
  { icon: '👤', label: 'Name', value: info.name, link: null },
  { icon: '💼', label: 'Role', value: info.role, link: null },
  { icon: '📧', label: 'Email', value: info.email, link: `mailto:${info.email}` },
  {
    icon: '📍',
    label: 'Location',
    value: info.location,
    link: `https://maps.google.com/?q=${encodeURIComponent(info.location)}`,
  },
]

export default function ContactContent({ contactInfo, partnershipTypes }: Props) {
  return (
    <section className="py-20" style={{ background: '#FAF7F0' }}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form: 3/5 */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65 }}
        >
          <h3 className="text-xl font-semibold mb-6 font-playfair text-dark-brown">Send Us a Message</h3>
          <ContactForm />
        </motion.div>

        {/* Details: 2/5 */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-6 font-playfair text-dark-brown">Direct Contact</h3>
          <div className="flex flex-col">
            {CONTACT_FIELDS(contactInfo).map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="flex gap-4 items-start py-4"
                style={{ borderBottom: '1px solid rgba(44,26,6,0.1)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base"
                  style={{ background: 'rgba(200,149,39,0.12)' }}
                >
                  {d.icon}
                </div>
                <div>
                  <p className="text-xs mb-0.5 text-dark-brown/50 font-inter">{d.label}</p>
                  {d.link
                    ? <a
                        href={d.link}
                        target={d.link.startsWith('http') ? '_blank' : undefined}
                        rel={d.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium no-underline text-ligno-gold font-inter hover:underline"
                      >
                        {d.value}
                      </a>
                    : <p className="text-sm font-medium text-dark-brown font-inter">{d.value}</p>
                  }
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-7">
            <h4 className="text-base font-semibold mb-4 font-inter text-dark-brown">We&apos;re Looking For</h4>
            <div className="flex flex-col gap-3">
              {partnershipTypes.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                >
                  <GradientCard className="p-4 rounded-xl">
                    <h5 className="text-sm font-semibold mb-1 font-inter text-dark-brown">{p.icon} {p.label}</h5>
                    <p className="text-xs leading-relaxed text-dark-brown/65 font-inter">{p.desc}</p>
                  </GradientCard>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
