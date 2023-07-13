import { ReactNode, HTMLAttributes } from 'react'

export type TTipProps = {
  children: ReactNode
  initialVisibility?: boolean
} & HTMLAttributes<HTMLDivElement>
