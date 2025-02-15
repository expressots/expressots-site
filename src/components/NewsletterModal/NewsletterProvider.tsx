'use client'

import { useEffect, useState } from 'react'
import { NewsletterModal } from '@/components/NewsletterModal/NewsletterModal'

export function NewsletterProvider() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('newsletter_shown')

    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsModalOpen(true)
        localStorage.setItem('newsletter_shown', 'true')
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  return <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
}
