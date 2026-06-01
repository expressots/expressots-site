'use client'

import Image from 'next/image'
import Link from 'next/link'
import { PARTNERS } from '../Partner/partners'

export const UsedBy = () => {
  if (!PARTNERS?.length) return null

  const loop = [...PARTNERS, ...PARTNERS, ...PARTNERS]

  return (
    <div className="w-full">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes usedby-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .usedby-track {
          display: flex;
          width: max-content;
          animation: usedby-scroll 30s linear infinite;
          will-change: transform;
        }
        .usedby-track:hover {
          animation-play-state: paused;
        }
      `,
        }}
      />
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-neutral-5">
        Trusted by teams and partners worldwide
      </p>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-1 to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-1 to-transparent sm:w-24" />

        <div className="usedby-track items-center gap-10 sm:gap-14" aria-hidden="false">
          {loop.map((partner, i) => (
            <Link
              key={`${partner.name}-${i}`}
              href={partner.site || '/'}
              target="_blank"
              rel="noreferrer"
              aria-label={partner.name}
              title={partner.name}
              className="flex h-10 flex-shrink-0 items-center justify-center opacity-40 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-6/50 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-1 focus-visible:grayscale-0"
            >
              <Image
                src={`.${partner.image}`}
                alt={partner.name}
                width={140}
                height={40}
                className="h-8 w-auto max-w-[120px] object-contain sm:h-10 sm:max-w-[140px]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UsedBy
