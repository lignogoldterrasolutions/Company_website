import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { CONTACT_INFO, PARTNERSHIP_TYPES } from '@/lib/constants'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact | LignoGold Terra Solutions',
  description: 'Get in touch with LignoGold Terra Solutions. Partner with us as a B2B facility, incubator, agri-buyer, or technical mentor.',
  keywords: 'contact LignoGold, partnership enquiry, circular sanitation partner, struvite fertilizer buyer'
}

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Partner With LignoGold Terra Solutions"
        subtitle="Whether you are a facility owner, incubator, technical mentor, or agri-buyer — let's talk." />
      <ContactContent contactInfo={CONTACT_INFO} partnershipTypes={PARTNERSHIP_TYPES} />
    </>
  )
}

