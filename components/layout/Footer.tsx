'use client'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants'

/** Inline LinkedIn SVG — avoids lucide-react version compatibility issues */
function LinkedInIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="relative pt-12 pb-6 overflow-hidden"
      style={{
        backgroundImage: 'url(/section-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(5,3,1,0.82)' }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpeg"
                alt="LignoGold Terra Solutions Logo"
                width={38}
                height={38}
                className="object-contain rounded-md"
              />
              <div
                className="text-lg font-bold leading-tight"
                style={{ fontFamily: 'Playfair Display, serif', color: '#C89527' }}
              >
                LignoGold<br />
                <span className="text-xs tracking-wider uppercase opacity-80" style={{ color: '#FAF7F0' }}>Terra Solutions</span>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Inter, sans-serif' }}
            >
              Redesigning wastewater infrastructure into decentralized resource factories.
              Closing the nutrient loop between cities and farms.
            </p>
            {/* LinkedIn — critical for B2B investor visibility */}
            <a
              href="https://linkedin.com/company/lignogold-terra-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg
                         transition-colors duration-200 hover:text-ligno-gold hover:border-ligno-gold/40"
              style={{
                color: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.15)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <LinkedInIcon size={13} />
              LinkedIn
            </a>
          </div>

          {/* Nav */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5 list-none">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm no-underline transition-colors duration-200 hover:text-ligno-gold"
                    style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm no-underline transition-colors duration-200 hover:text-ligno-gold"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Contact
            </div>
            <div
              className="text-sm leading-loose"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif' }}
            >
              <p className="font-medium" style={{ color: 'rgba(255,255,255,0.65)' }}>{CONTACT_INFO.name}</p>
              <p className="mb-1">Founder &amp; CEO</p>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="no-underline transition-colors duration-200 block hover:text-ligno-gold"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                {CONTACT_INFO.email}
              </a>
              {/* Location links to Google Maps */}
              <a
                href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="no-underline transition-colors duration-200 block mt-1 hover:text-ligno-gold"
                style={{ color: 'rgba(255,255,255,0.5)' }}
              >
                Chennai, Tamil Nadu, India ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar — dynamic year so it never goes stale */}
        <div
          className="border-t pt-5 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} LignoGold Terra Solutions. All rights reserved. · Chennai, India
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="/MSME logo.jpeg"
              alt="Government of India MSME Logo"
              width={40}
              height={20}
              className="object-contain bg-white rounded p-0.5"
            />
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full text-white tracking-wide"
              style={{ background: '#3A6B1A' }}
            >
              MSME REGISTERED
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
