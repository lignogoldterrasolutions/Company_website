'use client'
import { useState } from 'react'

const INPUT_CLASS =
  'w-full px-3.5 py-2.5 border border-navy-text/15 rounded-lg text-sm text-navy-text bg-white outline-none ' +
  'focus:border-ligno-gold focus:ring-2 focus:ring-ligno-gold/20 transition-all duration-200 font-inter placeholder:text-navy-text/35'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    const form = e.currentTarget
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID
    if (!formspreeId) { setStatus('error'); return }
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setStatus('success'); form.reset() }
      else setStatus('error')
    } catch { setStatus('error') }
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
        <select
          name="partnership_type"
          className={INPUT_CLASS + ' cursor-pointer'}
        >
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

      <button
        type="submit"
        disabled={status === 'loading'}
        className={`w-full py-3.5 rounded-lg text-white font-semibold text-sm font-inter transition-all duration-200
          ${status === 'loading' ? 'opacity-70 cursor-not-allowed bg-ligno-gold' : 'bg-ligno-gold hover:bg-deep-navy cursor-pointer'}`}
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div className="rounded-xl p-4 text-center text-sm font-medium font-inter"
          style={{ background: 'rgba(58,107,26,0.1)', border: '1px solid rgba(58,107,26,0.25)', color: '#3A6B1A' }}>
          ✓ Thank you! We&apos;ll be in touch within 48 hours.
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-xl p-4 text-center text-sm font-inter"
          style={{ background: 'rgba(192,57,43,0.08)', border: '1px solid rgba(192,57,43,0.2)', color: '#c0392b' }}>
          Something went wrong. Please email us directly at {' '}
          <a href="mailto:manjueesa@gmail.com" className="underline">manjueesa@gmail.com</a>
        </div>
      )}
    </form>
  )
}
