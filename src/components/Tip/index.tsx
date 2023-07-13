'use client'
import { forwardRef, useState } from 'react'
import { clsxm } from '@/utils/clsxm'
import { TTipProps } from './types'
import { IconX } from '@tabler/icons-react'

const Tip = forwardRef<HTMLDivElement, TTipProps>(
  ({ children, initialVisibility = true, className, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(initialVisibility)

    if (!isVisible) return null

    return (
      <div
        className={clsxm(
          'flex min-h-[30px] w-max items-center justify-between gap-3 overflow-hidden rounded-full border border-neutral-2 bg-neutral-1/60 px-2 shadow-md backdrop-blur-sm',
          className,
        )}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-start">{children}</div>
        <button
          name="close-tip"
          onClick={() => setIsVisible(false)}
          className="flex h-4 w-4 items-center justify-center overflow-hidden rounded-full border border-transparent transition-colors hover:border-red-500 hover:bg-red-950 hover:text-red-500"
        >
          <IconX className="h-3 w-3" />
        </button>
      </div>
    )
  },
)

Tip.displayName = 'Tip'

export default Tip
