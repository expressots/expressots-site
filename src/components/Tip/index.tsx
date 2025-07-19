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
          'flex min-h-[32px] w-max items-center justify-between gap-3 overflow-hidden rounded-full border border-base-6/20 bg-base-6/10 px-3 py-1 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-base-6/30 hover:bg-base-6/15',
          className,
        )}
        ref={ref}
        {...rest}
      >
        <div className="flex items-center justify-start">{children}</div>
        <button
          name="close-tip"
          onClick={() => setIsVisible(false)}
          className="flex h-5 w-5 items-center justify-center overflow-hidden rounded-full border border-transparent transition-all duration-300 hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-400"
        >
          <IconX className="h-3 w-3" />
        </button>
      </div>
    )
  },
)

Tip.displayName = 'Tip'

export default Tip
