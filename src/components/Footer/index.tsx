'use client'

import React, { useState } from 'react'
import Container from '../Container'
import Link from 'next/link'
import { NewsletterModal } from '../NewsletterModal/NewsletterModal'
import { IconMail } from '@tabler/icons-react'

const Footer = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false)

  const Anchor = ({ link, name }: { link: string; name: string }) => {
    return (
      <Link className="flex h-12 items-center hover:text-base-6" target="_blank" href={link}>
        {name}
      </Link>
    )
  }

  return (
    <footer className="border-t border-neutral-1 bg-grid bg-cover bg-no-repeat">
      <div className="min-h-[250px] bg-neutral-950/90 py-5">
        <Container className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left">
          {/* Newsletter Section - Centralizado */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setIsNewsletterOpen(true)}
              className="flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-green-500"
            >
              <IconMail className="h-5 w-5" />
              Subscribe to Newsletter
            </button>
          </div>

          {/* Links de Navegação - Centralizados */}
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            {/* Community */}
            <ul className="font-thin">
              <li className="pb-3 font-semibold">Community</li>
              <li>
                <Anchor name="Twitter" link="https://twitter.com/expressots" />
              </li>
              <li>
                <Anchor name="Discord" link="https://discord.com/invite/PyPJfGK" />
              </li>
              <li>
                <Anchor name="LinkedIn" link="https://www.linkedin.com/company/expresso-ts/" />
              </li>
            </ul>
            {/* Code */}
            <ul className="font-thin">
              <li className="pb-3 font-semibold">Code</li>
              <li>
                <Anchor name="NPM Core" link="https://www.npmjs.com/package/@expressots/core" />
              </li>
              <li>
                <Anchor name="NPM CLI" link="https://www.npmjs.com/package/@expressots/cli" />
              </li>
              <li>
                <Anchor name="GitHub" link="https://github.com/expressots" />
              </li>
            </ul>
            {/* More Info */}
            <ul className="font-thin">
              <li className="pb-3 font-semibold">More Info</li>
              <li>
                <Link className="flex h-12 items-center hover:text-base-6" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="flex h-12 items-center hover:text-base-6" href="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="flex h-12 items-center hover:text-base-6" href="/faqs">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/*  */}
          {/* <div className="flex items-center justify-center">
          </div> */}
        </Container>
        {/* Divider */}
        <hr className="mt-5 border-t border-neutral-1" />

        {/* Additional copyright information */}
        <Container>
          <div className="py-5 text-center text-sm">
            <p>Released under the MIT License. Official ExpressoTS Site</p>
            <p>
              Copyright © 2021-2024{' '}
              <a
                href="https://www.linkedin.com/in/richardzampieri/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                Richard Zampieri
              </a>
            </p>
          </div>
        </Container>
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
    </footer>
  )
}

export default Footer
