import HeroSection from '@/components/home/HeroSection'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import ProcessSection from '@/components/home/ProcessSection'
import MarketSection from '@/components/home/MarketSection'
import SDGSection from '@/components/home/SDGSection'
import CTABanner from '@/components/home/CTABanner'
import Image from 'next/image'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Trust bar */}
      <div className="py-3 text-center text-sm font-medium text-white flex items-center justify-center gap-3 px-4" style={{ background: '#3A6B1A', fontFamily: 'Inter, sans-serif', letterSpacing: '0.3px' }}>
        <Image
          src="/MSME logo.jpeg"
          alt="Government of India MSME Logo"
          width={32}
          height={16}
          className="object-contain bg-white rounded p-0.5 flex-shrink-0"
        />
        <span>MSME Registered Company &nbsp;·&nbsp; Closing the nutrient loop between cities and farms &nbsp;·&nbsp; Chennai, India</span>
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
