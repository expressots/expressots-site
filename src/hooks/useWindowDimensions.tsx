'use client'
import { useState, useEffect } from 'react'

function getWindowDimensions(): { width: number; height: number } {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}
