import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { NUTRIENTS } from '@/lib/constants'
import TechnologyContent from './TechnologyContent'

export const metadata: Metadata = {
  title: 'Technology | LignoGold Terra Solutions',
  description: 'Explore the biomineralization science of the Ligno-Pod. Learn how urine interception, biochar adsorption, and solar-thermal drying recover premium Struvite NPK fertilizers in-situ.',
  keywords: 'Ligno-Pod technology, biomineralization, struvite precipitation, biochar adsorption, nitrogen recovery, phosphorus recovery'
}

export default function TechnologyPage() {
  return (
    <>
      <PageHero eyebrow="Core Innovation" title="The Ligno-Pod"
        subtitle="A modular, odorless biomineralization system that intercepts, recovers, and valorises nutrients at the source." />
      <TechnologyContent nutrients={NUTRIENTS} />
    </>
  )
}
