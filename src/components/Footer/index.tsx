import React from 'react'
import Container from '../Container'
import Link from 'next/link'

const Footer = () => {
  const Anchor = ({ link, name }: { link: string; name: string }) => {
    return (
      <Link className="flex h-12 items-center hover:text-base-6" target="_blank" href={link}>
        {name}
      </Link>
    )
  }

  return (
    <footer className="border-t border-neutral-1 bg-grid bg-cover bg-no-repeat">
      <div className="min-h-[250px] bg-neutral-950/90 py-5">
        <Container className="flex h-full flex-col items-start justify-center gap-10 md:flex-row">
          <ul className="font-thin">
            <li className="pb-3 font-semibold">Community</li>
            <li>
              <Anchor name="Twitter" link="https://twitter.com/expressots" />
            </li>
            <li>
              <Anchor name="Discord" link="https://discord.com/invite/PyPJfGK" />
            </li>
            <li>
              <Anchor name="LinkedIn" link="https://www.linkedin.com/company/expresso-ts/" />
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
          <div className="py-5 text-center text-sm">
            <p>Released under the MIT License. Official ExpressoTS Site</p>
            <p>
              Copyright © 2021-2024{' '}
              <a
                href="https://www.linkedin.com/in/richardzampieri/"
                target="_blank"
                className="text-base-5"
                rel="noreferrer"
              >
                Richard Zampieri
              </a>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
