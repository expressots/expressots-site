'use client'
import React, { useEffect, useState } from 'react'
import sdk from '@stackblitz/sdk'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'

const BlitzCode = () => {
  const [loadedSdk, setLoadedSdk] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (Number(width) >= 769 && !loadedSdk) {
      sdk.embedProjectId('expressots-example-code', 'expressots', {
        clickToLoad: true,
        forceEmbedLayout: true,
        openFile: 'src/main.ts',
        hideExplorer: false,
        theme: 'dark',
        height: 800,
      })
      setLoadedSdk(true)
    }
  }, [width, loadedSdk])

  return <div id="expressots-example-code"></div>
}

export default BlitzCode
