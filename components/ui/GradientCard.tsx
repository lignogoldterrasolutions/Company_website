import React, { ReactNode } from 'react'

interface GradientCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  style?: React.CSSProperties
}

export default function GradientCard({ children, className = '', hoverEffect = true, style }: GradientCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/60 p-8 shadow-md backdrop-blur-sm transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1.5 hover:shadow-xl hover:border-ligno-gold/50' : ''
      } ${className}`}
      style={{ background: 'rgba(255, 252, 244, 0.78)', ...style }}
    >
      {/* Decorative top-right gold blob */}
      <div className="absolute -top-12 -right-12 w-28 h-28 bg-ligno-gold/10 rounded-full blur-2xl pointer-events-none" />
      {/* Decorative bottom-left brown blob */}
      <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-wood-brown/10 rounded-full blur-2xl pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
