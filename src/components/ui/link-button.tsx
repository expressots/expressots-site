import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

export const LinkButton = ({ children, href }: Props) => {
  return (
    <button className="flex items-center justify-center overflow-hidden duration-100 ease-out bg-fixed border rounded-md pattern-green-oil border-base-6 hover:bg-base-6 hover:text-base-12 active:scale-95">
      <Link
        target="_blank"
        href={href}
        draggable={false}
        className="flex items-center justify-center px-6 py-3 text-lg font-bold duration-100 ease-out select-none h-14 bg-base-12/90 text-base-5 hover:bg-transparent hover:text-base-12"
      >
        {children}
      </Link>
    </button>
  )
}
