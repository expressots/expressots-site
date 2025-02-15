'use client'

import React, { useState } from 'react'
import { IconChevronDown, IconMessageCircleQuestion } from '@tabler/icons-react'
import Container from '../../components/Container'
import { faqs } from '@/data/faqs'

const renderAnswerWithLinks = (answer: string) => {
  return answer.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
    if (part.match(/https?:\/\/[^\s]+/)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 underline hover:text-green-300"
        >
          {part}
        </a>
      )
    }
    return part
  })
}

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="min-h-screen bg-neutral-950/90 py-12">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <IconMessageCircleQuestion className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="mb-4 text-3xl font-bold text-white">Frequently Asked Questions</h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-400">
              Find answers to the most commonly asked questions below. Can&apos;t find what
              you&apos;re looking for? Feel free to contact our support team.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-neutral-800 shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="group flex w-full items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="text-lg font-medium text-white transition-colors group-hover:text-green-400">
                    {faq.question}
                  </span>
                  <IconChevronDown
                    className={`h-5 w-5 text-green-400 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="p-5 pt-0 text-neutral-300">{renderAnswerWithLinks(faq.answer)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-400">
              Still have questions?{' '}
              <a href="/contact" className="font-medium text-green-400 hover:text-green-300">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FAQs
