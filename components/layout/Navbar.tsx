'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-md' : ''}`}
      style={{ background: '#FAF7F0', borderBottom: '1px solid rgba(30,58,95,0.1)' }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/logo.jpeg"
            alt="LignoGold Terra Solutions"
            width={42}
            height={42}
            className="object-contain rounded-md shadow-sm"
          />
          <div>
            <span className="block font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#1E3A5F' }}>LignoGold</span>
            <span className="block text-xs font-semibold leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#3A6B1A' }}>Terra Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7 list-none">
          {NAV_LINKS.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium no-underline transition-colors relative group"
                style={{ color: pathname === l.href ? '#C89527' : '#1E3A5F' }}
              >
                {l.label}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-200"
                  style={{ background: '#C89527' }}
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/contact">
            <button
              className="text-sm font-semibold px-5 py-2 rounded-lg text-white transition-all duration-200 bg-ligno-gold hover:bg-deep-navy"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} style={{ color: '#1E3A5F' }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={open ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t"
            style={{ background: '#FAF7F0', borderColor: 'rgba(30,58,95,0.1)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium no-underline py-2.5 border-b"
                  style={{
                    color: pathname === l.href ? '#C89527' : '#1E3A5F',
                    borderColor: 'rgba(30,58,95,0.07)',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              {/* Separator + CTA */}
              <div className="pt-3">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button
                    className="w-full text-sm font-semibold px-5 py-2.5 rounded-lg text-white bg-ligno-gold hover:bg-deep-navy transition-all duration-200"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
