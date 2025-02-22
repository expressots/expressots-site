'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MenuLi } from '../ui/menu-li'
import {
  IconBook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconUsersGroup,
  IconArticle,
} from '@tabler/icons-react'
import { NavMobile } from './nav-mobile'
import { clsxm } from '@/utils/clsxm'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export const Header = () => {
  const { y: height } = useScrollPosition()

  return (
    <header
      className={clsxm(
        'fixed z-50 flex h-14 w-full items-center justify-between border border-b border-transparent bg-transparent py-9 shadow-md backdrop-blur-sm transition-colors lg:inset-0 lg:top-0',
        Number(height) > 30 && 'border border-b border-neutral-900 bg-neutral-950/90',
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link
          aria-label="Home"
          href="/"
          className="overlow-hidden group flex items-center justify-start gap-3 rounded-full border-2 border-transparent hover:animate-ascend"
        >
          <Image
            width={50}
            height={50}
            src="/assets/logos/logo-circular-dark.svg"
            alt="logo-circular-dark"
          />
        </Link>
        <div className="flex items-center gap-4 max-lg:hidden">
          <ul className="flex items-center justify-end gap-5">
            <MenuLi href="https://doc.expresso-ts.com">
              <IconBook className="mr-2 h-5 w-5" aria-hidden="true" />
              DOC
            </MenuLi>
            <MenuLi href="/team">
              <IconUsersGroup className="mr-2 h-5 w-5" aria-hidden="true" />
              CONTRIBUTORS
            </MenuLi>
            <MenuLi href="https://store.expresso-ts.com">
              <IconBriefcase className="mr-2 h-5 w-5" aria-hidden="true" />
              STORE
            </MenuLi>
            <MenuLi href="/blog">
              <IconArticle className="mr-2 h-5 w-5" aria-hidden="true" />
              BLOG
            </MenuLi>
            <MenuLi href="/blog">
              <IconArticle className="mr-2 h-5 w-5" aria-hidden="true" />
              BLOG
            </MenuLi>
          </ul>
          <ul className="ml-4 flex items-center justify-end gap-2">
            <MenuLi href="https://github.com/expressots/expressots">
              <IconBrandGithub className="h-5 w-5" aria-hidden="true" />
            </MenuLi>
            <MenuLi href="https://www.linkedin.com/company/expresso-ts/">
              <IconBrandLinkedin className="h-5 w-5" aria-hidden="true" />
            </MenuLi>
          </ul>
        </div>
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  )
}
