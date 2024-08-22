import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  href: string
}

export const LinkButton = ({ children, href }: Props) => {
  return (
    <button className="group relative flex items-center justify-center overflow-hidden rounded-md border border-base-5 bg-base-7 duration-300 ease-out hover:scale-105 active:scale-95">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 transition-all duration-500 ease-out group-hover:rotate-180"></div>
      <div className="absolute inset-0 h-full w-full bg-black opacity-20 mix-blend-multiply transition-all duration-500 ease-out group-hover:opacity-30"></div>
      <Link
        target="_blank"
        href={href}
        draggable={false}
        className="relative z-10 flex h-14 select-none items-center justify-center px-6 py-3 text-lg font-bold text-white duration-300 ease-out group-hover:text-neutral-12"
      >
        <span className="transform transition-transform duration-300 group-hover:tracking-wider">
          {children}
        </span>
      </Link>
    </button>
  )
}
