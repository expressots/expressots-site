'use client'

import React, { useState, useRef } from 'react'
import Container from '../../components/Container'
import { Turnstile } from 'next-turnstile'
import axios from 'axios'

const ContactUs = () => {
  const [turnstileStatus, setTurnstileStatus] = useState<
    'success' | 'error' | 'expired' | 'required'
  >('required')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })

  const [successMessage, setSuccessMessage] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    if (!formRef.current) {
      setIsLoading(false)
      return
    }

    if (turnstileStatus !== 'success') {
      setError('Please verify you are not a robot')
      setIsLoading(false)
      return
    }

    try {
      const response = await axios.post('https://api.expresso-ts.com/contact', formData)

      if (!response.data.ok) {
        throw new Error('Failed to send email')
      }

      setSuccessMessage(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      })
      setTimeout(() => {
        setSuccessMessage(false)
      }, 3000)
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-neutral-950/90 py-12">
      <Container>
        <div className="mx-auto mt-10 max-w-3xl rounded-lg bg-neutral-900 p-8 shadow-lg">
          <h2 className="text-center text-3xl font-bold text-white">Contact Us</h2>
          <p className="mt-2 text-center text-neutral-400">
            Fill out the form below and we’ll get back to you as soon as possible.
          </p>

          {successMessage && (
            <div className="mb-4 mt-4 rounded-lg bg-green-600 px-4 py-3 text-center text-white">
              ✅ Your message has been sent successfully!
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-lg bg-red-600 px-4 py-3 text-center text-white">
              ❌ {error}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-neutral-400">First name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400">Last name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <Turnstile
                siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                retry="auto"
                refreshExpired="auto"
                onError={() => setTurnstileStatus('error')}
                onExpire={() => setTurnstileStatus('expired')}
                onVerify={() => setTurnstileStatus('success')}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-500"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default ContactUs
