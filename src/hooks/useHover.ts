import React from 'react'

export function useHover(): [React.RefObject<any>, boolean] {
  const [hovering, setHovering] = React.useState(false)
  const ref = React.useRef<any>(null)

  React.useEffect(() => {
    const node = ref.current

    if (!node) return

    const handleMouseEnter = () => {
      setHovering(true)
    }

    const handleMouseLeave = () => {
      setHovering(false)
    }

    node.addEventListener('mouseenter', handleMouseEnter)
    node.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      node.removeEventListener('mouseenter', handleMouseEnter)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return [ref, hovering]
}
