import Image from 'next/image'
import React from 'react'

export default function ProductHuntBadge() {
  return (
    <div className="flex flex-col rounded-md border border-base-5 bg-[#221D21]">
      <a
        href="https://www.producthunt.com/posts/expressots?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-expressots"
        target="_blank"
      >
        <Image
          id="product-hunt-badge"
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=407781&theme=dark"
          alt="ExpressoTS - Developer&#0045;Friendly&#0032;TypeScript&#0032;Framework&#0032;for&#0032;Server&#0045;Side&#0032;Apps | Product Hunt"
          className="h-[54px] w-[250px]"
          width={250}
          height={54}
        />
      </a>
    </div>
  )
}
