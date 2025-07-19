import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  const Anchor = ({ link, name }: { link: string; name: string }) => {
    return (
      <Link
        className="flex h-12 items-center text-neutral-6 transition-colors duration-300 hover:text-base-6"
        target="_blank"
        href={link}
      >
        {name}
      </Link>
    )
  }

  return (
    <footer className="relative border-t border-neutral-2/50 bg-neutral-1/50 backdrop-blur-sm">
      <div className="relative z-10 py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                width={32}
                height={32}
                src="./assets/logos/logo-circular-dark.svg"
                alt="ExpressoTS Logo"
              />
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-neutral-12">EXPRESSO</span>
                <div className="rounded-lg bg-base-11 px-2 py-1 text-sm font-bold text-base-6 shadow-lg">
                  TS
                </div>
              </div>
            </div>

            {/* Separator */}
            <div className="h-6 w-px bg-neutral-6/30"></div>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <Anchor name="Docs" link="https://doc.expresso-ts.com" />
              <Anchor name="GitHub" link="https://github.com/expressots/expressots" />
              <Anchor name="Discord" link="https://discord.com/invite/PyPJfGK" />
              <Anchor name="Twitter" link="https://twitter.com/expressots" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-6">
              © 2025 ExpressoTS. Built with ❤️ for the TypeScript community.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
