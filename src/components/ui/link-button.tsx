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
        'group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-base-6/30 bg-base-7/10 px-6 py-3 text-lg font-semibold text-neutral-12 transition-all duration-300 hover:scale-105 hover:border-base-6/50 hover:bg-base-6/20 active:scale-95',
        className,
      )}
    >
      <span className="relative z-10 transform transition-all duration-300 group-hover:tracking-wider">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-base-6/20 to-base-5/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  )
}
