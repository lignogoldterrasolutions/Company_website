import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import ProcessSection from '@/components/home/ProcessSection'
import MarketSection from '@/components/home/MarketSection'
import SDGSection from '@/components/home/SDGSection'
import CTABanner from '@/components/home/CTABanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Trust bar */}
      <div className="py-3 text-center text-sm font-medium text-white" style={{ background: '#3A6B1A', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3px' }}>
        🇮🇳 MSME Registered Company &nbsp;·&nbsp; Closing the nutrient loop between cities and farms &nbsp;·&nbsp; Chennai, India
      </div>
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <MarketSection />
      <SDGSection />
      <CTABanner />
    </>
  )
}
