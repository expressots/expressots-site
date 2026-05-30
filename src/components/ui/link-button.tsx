import Link from 'next/link'
import { ReactNode } from 'react'
import { clsxm } from '@/utils/clsxm'

type Props = {
  children: ReactNode
  href: string
  className?: string
}

export const LinkButton = ({ children, href, className }: Props) => {
  return (
    <Link
      target="_blank"
      href={href}
      draggable={false}
      className={clsxm(
        'relative inline-flex items-center justify-center gap-2 rounded-lg text-base font-semibold transition-all duration-150',
        className,
      )}
    >
      {children}
    </Link>
  )
}
