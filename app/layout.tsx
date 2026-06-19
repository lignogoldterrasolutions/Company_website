import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'LignoGold Terra Solutions',
  description: 'Redesigning wastewater infrastructure into decentralized resource factories. Recovering N, P, K nutrients from urine and converting them into premium organo-mineral fertilizers.',
  keywords: 'nutrient recovery, struvite fertilizer, biochar, wastewater treatment, circular economy, India, MSME, sustainable agriculture',
  openGraph: {
    title: 'LignoGold Terra Solutions',
    description: 'Turning wastewater into value — closing the nutrient loop between cities and farms.',
    url: 'https://lignogold.in',
    siteName: 'LignoGold Terra Solutions',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
