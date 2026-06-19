import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { TIMELINE } from '@/lib/constants'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About Us | LignoGold Terra Solutions',
  description: 'Learn about LignoGold Terra Solutions, our mission to close the nutrient loop, and the team driving decentralized circular sanitation systems in India.',
  keywords: 'circular economy, organic farming, sanitation innovation, sustainable startup, India'
}

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Closing the Loop Between Cities and Farms"
        subtitle="A deep-tech innovation team on a mission to redesign urban sanitation into a distributed agricultural resource network." />
      <AboutContent timeline={TIMELINE} />
    </>
  )
}
