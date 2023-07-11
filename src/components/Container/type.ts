import { ReactNode, HTMLAttributes } from 'react'

export type TContainerProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>
