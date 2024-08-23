'use client'

import { CopyIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

type Props = {
  code: string
}

export const CopyInstalation = ({ code }: Props) => {
  const [open, setOpen] = useState(false)

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code)
      setOpen(true)
      setTimeout(() => {
        setOpen(false)
      }, 1000)
    }
  }

  return (
    <div className="group relative overflow-hidden rounded-md border border-base-5 bg-base-7 duration-300 ease-out hover:scale-105 active:scale-95">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-green-700 via-green-600 to-green-500 transition-all duration-500 ease-out group-hover:rotate-180"></div>
      <div className="absolute inset-0 h-full w-full bg-black opacity-20 mix-blend-multiply transition-all duration-500 ease-out group-hover:opacity-30"></div>
      <div
        className={`relative z-10 flex h-14 select-text items-center justify-between gap-4 bg-base-12/90 px-6 py-3 text-lg font-light text-white backdrop-blur-sm ${
          open ? 'bg-green-600' : ''
        } transition-colors duration-300 ease-out`}
      >
        <p className="border-none bg-transparent text-lg font-light text-neutral-12 focus:outline-none">
          {code}
        </p>
        <Tooltip.Provider>
          <Tooltip.Root open={open}>
            <Tooltip.Trigger
              title="copy to clipboard"
              className="rounded-md p-2 transition-colors duration-300 ease-out hover:bg-base-10 hover:text-base-6"
              onClick={handleCopy}
            >
              <CopyIcon aria-label="copy to clipboard" className="h-5 w-5" />
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content sideOffset={4} side="bottom">
                <p className="rounded-md bg-neutral-2 px-2 py-1 text-sm text-neutral-5">Copied</p>
                <Tooltip.Arrow className="fill-neutral-2" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  )
}
