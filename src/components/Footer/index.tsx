import React from 'react'
import Container from '../Container'
import Link from 'next/link'

const Footer = () => {
  const Anchor = ({ link, name }: { link: string; name: string }) => {
    return (
      <Link className="flex items-center h-12 hover:text-base-6" target="_blank" href={link}>
        {name}
      </Link>
    )
  }

  return (
    <footer className="bg-no-repeat bg-cover border-t border-neutral-1 bg-grid">
      <div className="min-h-[250px] bg-neutral-950/90 py-5">
        <Container className="flex flex-col items-start justify-center h-full gap-10 md:flex-row">
          <ul className="flex flex-col font-thin">
            <li className="pb-3 font-semibold">Docs</li>
            <li>
              <Anchor name="Tutorial" link="https://doc.expresso-ts.com/docs/tutorials/overview" />
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
        {/* Divider */}
        <hr className="mt-5 border-t border-neutral-1" />

        {/* Additional copyright information */}
        <Container>
          <div className="py-5 text-sm text-center">
            <p>Released under the MIT License</p>
            <p>Official ExpressoTS Site</p>
            <p>
              Copyright © 2021-2023{' '}
              <a
                href="https://www.linkedin.com/in/richardzampieri/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                Richard Zampieri
              </a>
            </p>
            <p>
              Designed by{' '}
              <a
                href="https://www.linkedin.com/in/ariel-betti/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                Ariel Betti
              </a>{' '}
              and{' '}
              <a
                href="https://www.linkedin.com/in/daniel-gabriel-70a565267/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                Daniel Gabriel
              </a>
              , hosted by{' '}
              <a
                href="https://pages.github.com/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                GitHub Pages
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
