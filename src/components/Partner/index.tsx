'use client'
import React from 'react'
import { TPartnersProps } from './types'
import { PARTNERS } from './partners'
import Image from 'next/image'
import Tooltips from '../Tooltip'
import Link from 'next/link'

const Partners = ({ partners = PARTNERS }: TPartnersProps) => {
  if (!partners) return null

  return (
    <div className="flex flex-wrap items-center justify-center gap-10">
      {partners.map((partner) => (
        <Tooltips key={partner.name} message={partner.name}>
          <Link
            className="grayscale transition-all hover:grayscale-0"
            target="_blank"
            href={partner.site || '/'}
            rel="noreferrer"
          >
            <Image
              alt={`Partner ${partner.name} logo`}
              src={`.${partner.image}`}
              width={80}
              height={80}
            />
          </Link>
        </Tooltips>
      ))}
    </div>
  )
}

export default Partners
