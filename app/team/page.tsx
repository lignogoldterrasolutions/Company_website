import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import { TEAM, STRATEGIC_REQUIREMENTS } from '@/lib/constants'
import TeamContent from './TeamContent'

export const metadata: Metadata = {
  title: 'Team | LignoGold Terra Solutions',
  description: 'Meet the founders of LignoGold Terra Solutions. Learn about our execution capabilities and the strategic requirements we seek for scaling circular sanitation pilots across India.',
  keywords: 'LignoGold team, founders, climate-tech partnerships, B2B pilot deployment, circular sanitation scaling'
}

export default function TeamPage() {
  return (
    <>
      <PageHero variant="cream" eyebrow="The Execution Team" title="Built by Founders Who Believe in the Mission"
        subtitle="A cross-disciplinary team combining circular economy design, sustainability compliance, and deep-tech engineering." />
      <TeamContent team={TEAM} requirements={STRATEGIC_REQUIREMENTS} />
    </>
  )
}
