'use client'

import React from 'react'
import { Disclosure } from '@headlessui/react'
import { IconChevronDown, IconMessageCircleQuestion } from '@tabler/icons-react'
import Container from '../../components/Container'
import { faqs } from '@/data/faqs'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

const renderAnswerWithLinks = (content: any) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={{
        h1: ({ children }) => (
          <h1 className="border-b-2 border-green-500 pb-2 text-4xl font-bold text-green-400">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="mt-6 text-3xl font-semibold text-green-300">{children}</h2>
        ),
        p: ({ children }) => <p className="mt-3 text-lg text-neutral-300">{children}</p>,
        a: ({ children }) => <a className="text-green-400 hover:underline">{children}</a>,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}

const FAQs = () => {
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
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="overflow-hidden rounded-lg bg-neutral-800 shadow-md transition-all duration-300">
                    <Disclosure.Button className="group flex w-full items-center justify-between p-5 text-left focus:outline-none">
                      <span className="text-lg font-medium text-white transition-colors group-hover:text-green-400">
                        {faq.question}
                      </span>
                      <IconChevronDown
                        className={`h-5 w-5 text-green-400 transition-transform duration-300 ${
                          open ? 'rotate-180' : ''
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-5 pt-0">
                      {renderAnswerWithLinks(faq.answer)}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
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
