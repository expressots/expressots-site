import React, { ReactNode } from 'react'

export type TInfoCardProps = {
  header: ReactNode
  content: ReactNode
}

const InfoCard = ({ header, content }: TInfoCardProps) => {
  return (
    <div className="glass-card-premium group flex min-h-[280px] w-full flex-col items-center justify-center gap-6 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105">
      <div className="flex flex-col items-center gap-4">{header}</div>
      <div className="text-base leading-relaxed">{content}</div>
    </div>
  )
}

export default InfoCard
