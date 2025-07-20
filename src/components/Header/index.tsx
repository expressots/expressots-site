'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MenuLi } from '../ui/menu-li'
import { IconBrandGithub } from '@tabler/icons-react'
import { NavMobile } from './nav-mobile'
import { clsxm } from '@/utils/clsxm'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { LinkButton } from '../ui/link-button'

export const Header = () => {
  const { y: height } = useScrollPosition()

  return (
    <header
      className={clsxm(
        'fixed z-50 flex h-16 w-full items-center justify-between border-b border-transparent bg-transparent py-4 transition-all duration-300 lg:inset-0 lg:top-0',
        Number(height) > 30 && 'nav-glass-premium border-b-neutral-2/50',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link
          aria-label="Home"
          href="/"
          className="group flex items-center justify-start gap-3 rounded-xl p-2 transition-all duration-300 hover:bg-white/5 hover:backdrop-blur-sm"
        >
          <div className="relative">
            <Image
              width={40}
              height={40}
              src="./assets/logos/logo-circular-dark.svg"
              alt="ExpressoTS Logo"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xl font-bold text-neutral-12">EXPRESSO</span>
            <div className="rounded-lg bg-base-11 px-2 py-1 text-sm font-bold text-base-6 shadow-lg">
              TS
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-6 max-lg:hidden">
          <ul className="flex items-center justify-end gap-6">
            <MenuLi href="/#playground">Playground</MenuLi>
            <MenuLi href="/#ecosystem">Ecosystem</MenuLi>
            <MenuLi href="/team">Team</MenuLi>
          </ul>
          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/expressots/expressots"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-neutral-8 transition-all duration-300 hover:bg-white/5 hover:text-base-6"
              target="_blank"
              aria-label="GitHub"
            >
              <IconBrandGithub className="h-5 w-5" />
              GitHub
            </Link>
            <LinkButton
              href="https://doc.expresso-ts.com/"
              className="btn-primary-premium rounded-lg px-6 py-2 text-sm font-semibold"
            >
              Get Started
            </LinkButton>
          </div>
        </div>

        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
