'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconSend, IconMail, IconSquareX, IconLoader2 } from '@tabler/icons-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      setName('')
      setEmail('')
      setIsSubmitted(false)
      setError('')
      setShowTooltip(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    setShowTooltip(false)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_URL_SUBSCRIBE_NEWSLETTER as string
      const response = await axios.post(apiUrl, { name, email })

      if (!response.data.success) {
        setError(response.data.message)
        setShowTooltip(true)
      } else {
        setIsSubmitted(true)
      }
    } catch (err) {
      setError('Failed to submit the subscription. Please try again later.')
      setShowTooltip(true)
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-80">
      <div className="relative w-full max-w-md overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900 p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-gray-300"
        >
          <IconSquareX size={24} />
        </button>

        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-700">
            <IconMail className="h-8 w-8 text-white" />
          </div>

          <h2 className="mb-2 text-2xl font-bold text-white">Stay Updated!</h2>
          {!isSubmitted && (
            <p className="mb-6 text-gray-400">
              Subscribe to our newsletter to receive the latest news and updates.
            </p>
          )}
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your best email"
                required
                className="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-white outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="relative">
              <button
                type="submit"
                disabled={isLoading}
                className={`flex w-full items-center justify-center gap-2 rounded-lg py-3 font-medium text-white transition-colors ${isLoading ? 'cursor-not-allowed bg-gray-500' : 'bg-green-600 hover:bg-green-500'}`}
              >
                {isLoading ? (
                  <IconLoader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <IconSend size={20} />
                )}
                {isLoading ? 'Processing...' : 'Subscribe'}
              </button>

              {/* Tooltip de erro */}
              {showTooltip && (
                <div className="fixed left-1/2 top-4 w-max -translate-x-1/2 rounded-lg bg-red-600 px-4 py-2 text-sm text-white shadow-lg">
                  {error}
                </div>
              )}
            </div>
          </form>
        ) : (
          <div className="py-4 text-center text-green-400">
            <p className="font-medium">Thank you for subscribing, {name}! 🎉</p>
            <p className="text-sm text-gray-400">You&apos;ll receive our updates soon.</p>
          </div>
        )}
      </div>
    </div>
  )
}
