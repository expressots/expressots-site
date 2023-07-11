import { forwardRef } from 'react'
import { TContainerProps } from './type'
import { clsxm } from '@/utils/clsxm'

const Container = forwardRef<HTMLDivElement, TContainerProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div className={clsxm('container mx-auto px-4', className)} ref={ref} {...rest}>
        {children}
      </div>
    )
  },
)

Container.displayName = 'Container'

export default Container
