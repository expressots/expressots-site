import React from 'react'
import { TInfoCardProps } from './types'

const InfoCard = ({ header, content }: TInfoCardProps) => {
  return (
    <div className="group flex min-h-[300px] w-full max-w-xs overflow-hidden rounded-md border border-neutral-1 bg-grid bg-cover shadow-md transition-all hover:border-base-5">
      <div className="flex-col items-start justify-start gap-5 bg-black/70 p-5 text-left backdrop-blur-sm group-hover:bg-base-12/70 group-hover:text-base-4">
        <div className="flex items-center justify-start gap-2">{header}</div>
        <p className="pt-3">{content}</p>
      </div>
    </div>
  )
}

export default InfoCard
