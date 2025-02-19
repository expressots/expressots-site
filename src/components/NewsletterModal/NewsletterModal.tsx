import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IconSend, IconMail, IconSquareX } from '@tabler/icons-react'

interface NewsletterModalProps {
  isOpen: boolean
  onClose: () => void
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post('https://api.expresso-ts.com/newsletter/subscribe', {
        name,
        email,
      })

      if (!response.data.success) {
        throw new Error('Error submitting the subscription.')
      }

      setIsSubmitted(true)
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setName('')
        setEmail('')
      }, 2000)
    } catch (err) {
      setError('Failed to submit the subscription. Please try again later.')
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
          <p className="mb-6 text-gray-400">
            Subscribe to our newsletter to receive the latest news and updates.
          </p>
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
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 py-3 font-medium text-white transition-colors hover:bg-green-500"
            >
              <IconSend size={20} />
              Subscribe
            </button>
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
