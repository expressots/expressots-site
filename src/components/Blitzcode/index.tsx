'use client'
import React, { useEffect } from 'react'
import sdk from '@stackblitz/sdk'

const BlitzCode = () => {
  useEffect(() => {
    sdk.embedProjectId('expressots-example-code', 'expressots', {
      forceEmbedLayout: true,
      openFile: 'src/app.controller.ts',
      theme: 'dark',
      height: 800,
    })
  }, [])

  return <div id="expressots-example-code"></div>
}

export default BlitzCode
