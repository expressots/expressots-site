import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

export const MenuLi = ({ children, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="flex items-center justify-center gap-2 rounded-md border border-transparent text-lg text-neutral-200 antialiased duration-150 ease-out hover:text-base-6"
      >
        {children}
      </Link>{' '}
    </li>
  )
}
