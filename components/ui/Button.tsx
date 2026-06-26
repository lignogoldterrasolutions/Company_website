'use client'
import { ReactNode } from 'react'

type Variant = 'primary' | 'outline' | 'outline-white' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface Props {
  children: ReactNode
  variant?: Variant
  size?: Size
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

const sizeMap: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3.5 text-sm',
}

/**
 * All hover states use pure Tailwind classes so the CSS `transition-all duration-200`
 * actually fires (JS inline-style mutation bypasses CSS transitions).
 */
const variantMap: Record<Variant, string> = {
  primary:
    'bg-ligno-gold text-white border border-transparent hover:bg-dark-brown hover:border-dark-brown',
  outline:
    'bg-transparent text-ligno-gold border border-ligno-gold hover:bg-ligno-gold hover:text-white',
  'outline-white':
    'bg-transparent text-white border border-white/50 hover:bg-white/10 hover:border-white/70',
  ghost:
    'bg-transparent text-dark-brown border border-transparent hover:text-ligno-gold',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  type = 'button',
  disabled,
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        font-semibold rounded-lg transition-all duration-200 cursor-pointer font-inter
        ${sizeMap[size]}
        ${variantMap[variant]}
        ${disabled ? 'opacity-60 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {children}
    </button>
  )
}
