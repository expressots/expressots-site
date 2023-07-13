import Image from 'next/image'
import Link from 'next/link'
import { MenuLi } from '../ui/menu-li'
import { IconBook, IconBrandGithub, IconBriefcase, IconUsersGroup } from '@tabler/icons-react'
import { NavMobile } from './nav-mobile'

export const Header = () => {
  return (
    <header className="fixed z-50 flex items-center justify-between w-full py-8 border border-b shadow-md h-14 border-neutral-900 bg-neutral-950 bg-neutral-950/90 backdrop-blur-sm lg:inset-0 lg:top-0">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <Link
          href="/"
          className="flex items-center justify-start gap-3 border border-transparent rounded-full overlow-hidden group hover:animate-ascend"
        >
          <Image width={50} height={50} src="./assets/logos/logo-circular-dark.svg" alt="" />
        </Link>
        <div className="flex items-center gap-4 max-lg:hidden">
          <ul className="flex items-center justify-end gap-5">
            <MenuLi href="https://doc.expresso-ts.com/docs/hello">
              <IconBook className="w-5 h-5 mr-2" aria-hidden="true" />
              Documentation
            </MenuLi>
            <MenuLi href="https://doc.expresso-ts.com/docs/hello">
              <IconBriefcase className="w-5 h-5 mr-2" aria-hidden="true" />
              Showcases
            </MenuLi>
            <MenuLi href="/team">
              <IconUsersGroup className="w-5 h-5 mr-2" aria-hidden="true" />
              Team
            </MenuLi>
            <MenuLi href="https://github.com/expressots/expressots">
              <IconBrandGithub className="w-5 h-5 mr-2" aria-hidden="true" />
              Github
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
