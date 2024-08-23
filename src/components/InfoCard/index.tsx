import React, { ReactNode } from 'react'

export type TInfoCardProps = {
  header: ReactNode
  content: ReactNode
}

const InfoCard = ({ header, content }: TInfoCardProps) => {
  return (
    <div className="group flex min-h-[200px] w-full max-w-xs overflow-hidden rounded-md border border-neutral-1 bg-gradient-to-br from-neutral-800 to-neutral-700 shadow-md transition-all hover:scale-105 hover:border-green-500 hover:shadow-xl">
      <div className="flex flex-col items-center gap-5 bg-black/70 p-5 text-center backdrop-blur-sm group-hover:bg-base-12/70 group-hover:text-base-4">
        <div className="flex-w-full flex items-center justify-center gap-2">{header}</div>
        <p className="pt-2 text-lg font-normal">{content}</p>
      </div>
    </div>
  )
}

export default InfoCard
