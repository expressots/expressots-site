import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import {
  IconBrandGithub,
  IconBrandDiscord,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandYoutube,
} from '@tabler/icons-react'

type FooterLink = { name: string; href: string; external?: boolean }

const docsLinks: FooterLink[] = [
  {
    name: 'Getting Started',
    href: 'https://doc.expresso-ts.com/docs/core/first-steps',
    external: true,
  },
  { name: 'CLI', href: 'https://doc.expresso-ts.com/docs/cli/overview', external: true },
  { name: 'Studio', href: 'https://doc.expresso-ts.com/docs/studio/overview', external: true },
  {
    name: 'Upgrade Guide',
    href: 'https://doc.expresso-ts.com/docs/prologue/upgrade_guide',
    external: true,
  },
]

const communityLinks: { name: string; href: string; icon: typeof IconBrandGithub }[] = [
  { name: 'GitHub', href: 'https://github.com/expressots/expressots', icon: IconBrandGithub },
  { name: 'Discord', href: 'https://discord.com/invite/PyPJfGK', icon: IconBrandDiscord },
  { name: 'X (Twitter)', href: 'https://twitter.com/expressots', icon: IconBrandX },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/expresso-ts/',
    icon: IconBrandLinkedin,
  },
  { name: 'YouTube', href: 'https://www.youtube.com/@expressots', icon: IconBrandYoutube },
]

const projectLinks: FooterLink[] = [
  { name: 'Team', href: '/team' },
  {
    name: 'Comparison',
    href: 'https://doc.expresso-ts.com/docs/why-expressots/overview',
    external: true,
  },
  {
    name: 'Release Notes',
    href: 'https://doc.expresso-ts.com/docs/prologue/release',
    external: true,
  },
  { name: 'Governance', href: 'https://doc.expresso-ts.com/docs/governance', external: true },
]

const Footer = () => {
  const year = new Date().getFullYear()

  const FooterAnchor = ({ link }: { link: FooterLink }) => (
    <Link
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className="text-sm text-neutral-6 transition-colors duration-200 hover:text-base-6"
    >
      {link.name}
    </Link>
  )

  return (
    <footer className="relative border-t border-neutral-2/50 bg-neutral-1/60 backdrop-blur-sm">
      <div className="relative z-10 py-12 sm:py-16">
        <Container>
          {/* Top: Brand + Columns */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* Brand block */}
            <div className="flex flex-col gap-4 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  width={36}
                  height={36}
                  src="/assets/logos/logo-circular-dark.svg"
                  alt="ExpressoTS Logo"
                />
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-neutral-12">EXPRESSO</span>
                  <div className="rounded-lg bg-base-11 px-2 py-1 text-sm font-bold text-base-6 shadow-lg">
                    TS
                  </div>
                </div>
              </Link>
              <p className="max-w-xs text-sm leading-relaxed text-neutral-6">
                The TypeScript framework for modern Node.js applications. Fast, type-safe, and built
                for v4.
              </p>
              <div className="mt-2 flex items-center gap-3">
                {communityLinks.slice(0, 5).map((social) => {
                  const Icon = social.icon
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-2/60 bg-neutral-2/30 text-neutral-7 transition-all duration-200 hover:border-base-6/40 hover:bg-base-6/10 hover:text-base-6"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Docs */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-8">
                Docs
              </h4>
              <ul className="flex flex-col gap-2.5">
                {docsLinks.map((l) => (
                  <li key={l.name}>
                    <FooterAnchor link={l} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Project */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-8">
                Project
              </h4>
              <ul className="flex flex-col gap-2.5">
                {projectLinks.map((l) => (
                  <li key={l.name}>
                    <FooterAnchor link={l} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-8">
                Community
              </h4>
              <ul className="flex flex-col gap-2.5">
                {communityLinks.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-6 transition-colors duration-200 hover:text-base-6"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 h-px bg-gradient-to-r from-transparent via-neutral-6/20 to-transparent" />

          {/* Bottom row */}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center text-xs text-neutral-6 sm:flex-row sm:text-left">
            <p>© {year} ExpressoTS. Released under the MIT License.</p>
            <p className="flex items-center gap-1.5">
              Built with <span className="text-red-400">❤</span> for the TypeScript community.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
