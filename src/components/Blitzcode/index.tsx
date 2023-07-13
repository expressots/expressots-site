'use client'
import React, { useEffect, useState } from 'react'
import sdk from '@stackblitz/sdk'
import { useWindowDimensions } from '@/hooks/useWindowDimensions'

const BlitzCode = () => {
  const [loadedSdk, setLoadedSdk] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    if (width >= 769 && !loadedSdk) {
      sdk.embedProjectId('expressots-example-code', 'expressots', {
        forceEmbedLayout: true,
        openFile: 'src/app.usecase.ts',
        theme: 'dark',
        height: 800,
      })
      setLoadedSdk(true)
    }
  }, [])

  return <div id="expressots-example-code"></div>
}

export default BlitzCode
