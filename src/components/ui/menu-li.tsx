import Link from 'next/link'
import { ReactNode } from 'react'
import { clsxm } from '@/utils/clsxm'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const MenuLi = ({ children, href, className }: Props) => {
  return (
    <li>
      <Link
        href={href}
        target="_self"
        className={clsxm(
          'flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-neutral-8 transition-all duration-300 hover:bg-white/5 hover:text-base-6',
          className,
        )}
      >
        {children}
      </Link>
    </li>
  )
}
