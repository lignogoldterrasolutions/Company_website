'use client'
import { useState } from 'react'

const INPUT_CLASS =
  'w-full px-3.5 py-2.5 border border-navy-text/15 rounded-lg text-sm text-navy-text bg-white outline-none ' +
  'focus:border-ligno-gold focus:ring-2 focus:ring-ligno-gold/20 transition-all duration-200 font-inter placeholder:text-navy-text/35'

function Spinner() {
  return (
    <svg
      className="animate-spin h-5 w-5 text-white inline-block mr-2"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  )
}

function SuccessScreen({ onReset }: { onReset: () => void }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-2xl"
      style={{
        background: 'linear-gradient(135deg, rgba(58,107,26,0.07) 0%, rgba(200,149,39,0.07) 100%)',
        border: '1px solid rgba(58,107,26,0.2)',
        animation: 'fadeInUp 0.4s ease both',
      }}
    >
      {/* Animated checkmark */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
        style={{ background: 'rgba(58,107,26,0.12)', border: '2px solid rgba(58,107,26,0.3)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3A6B1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8"
          style={{ animation: 'checkPop 0.4s ease 0.1s both' }}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h3
        className="text-xl font-bold mb-2 font-inter"
        style={{ color: '#1E3A5F' }}
      >
        Message Sent Successfully!
      </h3>
      <p className="text-sm leading-relaxed mb-1 font-inter" style={{ color: '#1E3A5F', opacity: 0.65 }}>
        Thank you for reaching out to LignoGold Terra Solutions.
      </p>
      <p className="text-sm font-semibold mb-6 font-inter" style={{ color: '#3A6B1A' }}>
        We'll get back to you within 48 hours. 🌱
      </p>

      <button
        onClick={onReset}
        className="text-sm font-medium px-5 py-2 rounded-lg transition-all duration-200 font-inter"
        style={{
          border: '1px solid rgba(30,58,95,0.2)',
          color: '#1E3A5F',
          background: 'white',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = '#1E3A5F', e.currentTarget.style.color = 'white')}
        onMouseLeave={e => (e.currentTarget.style.background = 'white', e.currentTarget.style.color = '#1E3A5F')}
      >
        Send Another Message
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes checkPop {
          0%   { opacity: 0; transform: scale(0.5); }
          70%  { transform: scale(1.15); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    const form = e.currentTarget
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID

    if (!formspreeId) {
      setErrorMsg('Form is not configured yet. Please email us directly.')
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.error || 'Submission failed. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return <SuccessScreen onReset={() => setStatus('idle')} />
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium mb-1.5 text-navy-text font-inter">Full Name *</label>
        <input
          name="name"
          required
          placeholder="Your full name"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-navy-text font-inter">Email Address *</label>
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-navy-text font-inter">Organization / Company</label>
        <input
          name="organization"
          placeholder="Company name (optional)"
          className={INPUT_CLASS}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-navy-text font-inter">Partnership Type</label>
        <select name="partnership_type" className={INPUT_CLASS + ' cursor-pointer'}>
          <option value="">Select a partnership type</option>
          {['B2B Facility Partner', 'B2G Urban Body', 'Agri Buyer', 'Incubator', 'Technical Mentor', 'Other'].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5 text-navy-text font-inter">Message</label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your interest and how you'd like to collaborate..."
          className={INPUT_CLASS}
          style={{ resize: 'vertical', minHeight: 100 }}
        />
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <div
          className="rounded-xl px-4 py-3 text-sm font-inter flex items-start gap-3"
          style={{
            background: 'rgba(192,57,43,0.07)',
            border: '1px solid rgba(192,57,43,0.25)',
            color: '#c0392b',
            animation: 'fadeInUp 0.3s ease both',
          }}
        >
          <span className="text-base mt-0.5">⚠️</span>
          <div>
            <p className="font-semibold mb-0.5">Something went wrong</p>
            <p className="opacity-80">
              {errorMsg}{' '}
              <a href="mailto:manjueesa@gmail.com" className="underline font-medium">
                manjueesa@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 rounded-lg text-white font-semibold text-sm font-inter transition-all duration-200 flex items-center justify-center gap-2"
        style={{
          background: status === 'loading' ? '#C89527cc' : '#C89527',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          boxShadow: status === 'loading' ? 'none' : '0 4px 14px rgba(200,149,39,0.35)',
        }}
      >
        {status === 'loading' ? (
          <>
            <Spinner />
            Sending your message…
          </>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="w-4 h-4">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Send Message
          </>
        )}
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </form>
  )
}
