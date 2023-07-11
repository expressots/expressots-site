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
    <div className="pattern-green-oil overflow-hidden rounded-md border border-base-6 bg-fixed text-lg text-neutral-12 backdrop-blur-sm duration-100 ease-out">
      <div className=" flex h-14 select-text items-center justify-center gap-4 bg-base-12/90 px-3 py-3 pl-6 ">
        <p className="border-none bg-transparent text-lg font-light text-base-5 focus:outline-none">
          {code}
        </p>
        <Tooltip.Provider>
          <Tooltip.Root open={open}>
            <Tooltip.Trigger
              title="copy to clipboard"
              className="rounded-md p-2 duration-100 ease-out hover:bg-base-10 hover:text-base-6"
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
