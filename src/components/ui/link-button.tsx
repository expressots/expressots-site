import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

export const LinkButton = ({ children, href }: Props) => {
  return (
    <button className="pattern-green-oil flex items-center justify-center overflow-hidden rounded-md border border-base-6 bg-fixed duration-100 ease-out hover:bg-base-6 hover:text-base-12 active:scale-95">
      <Link
        target="_blank"
        href={href}
        draggable={false}
        className="flex h-14 select-none items-center justify-center bg-base-12/90 px-6 py-3 text-lg font-bold text-base-5 duration-100 ease-out hover:bg-transparent hover:text-base-12"
      >
        {children}
      </Link>
    </button>
  )
}
