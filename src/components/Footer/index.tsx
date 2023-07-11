import React from 'react'
import Container from '../Container'
import Link from 'next/link'

const Footer = () => {
  const Anchor = ({ link, name }: { link: string; name: string }) => {
    return (
      <Link className="hover:text-base-6" target="_blank" href={link}>
        {name}
      </Link>
    )
  }

  return (
    <footer className="border-t border-neutral-1 bg-[url('/assets/grid.svg')] bg-cover bg-no-repeat">
      <div className="min-h-[250px] bg-neutral-950/90 py-5">
        <Container className="flex h-full flex-col items-start justify-center gap-10 md:flex-row">
          <ul className="font-thin">
            <li className="pb-3 font-semibold">Docs</li>
            <li>
              <Anchor name="Tutorial" link="https://expresso-ts.com/docs/tutorials/overview" />
            </li>
          </ul>
          <ul className="font-thin">
            <li className="pb-3 font-semibold">Community</li>
            <li>
              <Anchor name="Twitch TV" link="https://www.twitch.tv/richardzampieri" />
            </li>
            <li>
              <Anchor name="Discord" link="https://discord.com/invite/PyPJfGK" />
            </li>
          </ul>
          <ul className="font-thin">
            <li className="pb-3 font-semibold">Code</li>
            <li>
              <Anchor name="NPM Core" link="https://www.npmjs.com/package/@expressots/core" />
            </li>
            <li>
              <Anchor name="NPM CLI" link="https://www.npmjs.com/package/@expressots/cli" />
            </li>
            <li>
              <Anchor name="GitHub" link="https://github.com/expressots" />
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
