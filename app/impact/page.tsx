import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { SDG_GOALS, IMPACT_PILLARS, IMPACT_BEFORE, IMPACT_AFTER } from '@/lib/constants'
import ImpactContent from './ImpactContent'

export const metadata: Metadata = {
  title: 'Environmental Impact | LignoGold Terra Solutions',
  description: 'Verifiable environmental impact metrics of the Ligno-Pod circular sanitation system. Explore water savings, carbon sequestration, and nitrogen/phosphorus nutrient recovery.',
  keywords: 'environmental impact, water conservation, carbon sequestration, nutrient recovery, ESG metrics, circular sanitation'
}

export default function ImpactPage() {
  return (
    <>
      <PageHero eyebrow="Environmental Impact" title="Measurable. Multi-Dimensional. Permanent."
        subtitle="The Ligno-Pod delivers verifiable environmental benefits — from eliminating ammonia odors at source to permanently sequestering carbon and recovering critical phosphorus." />
      <ImpactContent
        sdgGoals={SDG_GOALS}
        impactPillars={IMPACT_PILLARS}
        beforeList={IMPACT_BEFORE}
        afterList={IMPACT_AFTER}
      />
    </>
  )
}
