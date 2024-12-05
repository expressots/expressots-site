'use client'

import {
  Tip,
  LinkButton,
  CopyInstalation,
  InfoCard,
  Partners,
  BlitzCode,
  Container,
} from '@/components'
import { IconAB, IconApps, IconPackages, IconViewfinder } from '@tabler/icons-react'
import Image from 'next/image'
import { VideoPlayer } from '@/components/ui/videoplayer'

export default function Home() {
  return (
    <main className="pattern-background flex h-full min-h-screen flex-col items-center justify-center overflow-auto">
      <div className="w-full border border-b border-neutral-1 bg-cover bg-no-repeat">
        <div className="bg-black/80 backdrop-blur-sm">
          <Container>
            <div className="relative flex min-h-[calc(70vh)] w-full flex-col items-center justify-center">
              <div className="absolute left-1/2 top-24 z-40 -translate-x-1/2 -translate-y-1/2 transform">
                <Tip className="animate-showup text-sm text-neutral-6 transition-shadow">
                  🎉 v3.0
                </Tip>
              </div>
              <div className="mt-32 flex h-full w-full flex-col items-center justify-center gap-4 sm:mt-0">
                <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row">
                  {/* Left side content */}
                  <div className="flex flex-col items-center justify-center md:w-1/2">
                    <Image
                      width={120}
                      height={120}
                      src="./assets/logos/logo-primary.svg"
                      alt="Expresso Logo"
                    />
                    <br />
                    <h1 className="text-center text-6xl text-[clamp(48px_5vw_72px)] font-bold text-neutral-12 md:text-left">
                      EXPRESSO<span className="text-green-500">TS</span>
                    </h1>
                    <br />
                    <p className="text-center text-xl text-neutral-10 md:text-left">
                      The Developer-Friendly Node.js framework for creating
                      <br />
                      <span className="block text-center">
                        highly maintainable server-side applications.
                      </span>
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
                      <LinkButton href="https://doc.expresso-ts.com/">Get Started</LinkButton>
                      <LinkButton href="https://opencollective.com/expressots">
                        Become a Sponsor ❤️
                      </LinkButton>
                      {/* <CopyInstalation code="npm i -g @expressots/cli" /> */}
                    </div>
                  </div>
                  {/* Right side video */}
                  <div className="flex items-center justify-center md:w-1/2">
                    <VideoPlayer
                      src="https://www.youtube.com/embed/_Z4WLZW4zMk"
                      title="ExpressoTS Introduction"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Updated section with InfoCards */}
      <div className="relative min-h-[200px] w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black bg-fixed">
        <div className="bg-black/90">
          <Container className="flex h-full flex-col items-center justify-center gap-5 py-10 text-center md:flex-row">
            <InfoCard
              header={
                <>
                  <IconApps className="mr-2 h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="text-2xl font-semibold text-green-500">TEMPLATES</p>
                </>
              }
              content={
                <>
                  Choose flexible or opinionated templates: one offers freedom, the other enforces a
                  structure.
                </>
              }
            />
            <InfoCard
              header={
                <>
                  <IconPackages className="mr-2 h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="text-2xl font-semibold text-green-500">MODULAR</p>
                </>
              }
              content={<>Use only whats needed for lean, efficient development.</>}
            />
            <InfoCard
              header={
                <>
                  <IconViewfinder className="mr-2 h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="text-2xl font-semibold text-green-500">BEST PRACTICES</p>
                </>
              }
              content={<>Promotes clean code, type safety, and clear separation of concerns.</>}
            />
            <InfoCard
              header={
                <>
                  <IconAB className="mr-2 h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="text-2xl font-semibold text-green-500">EXTENSIBLE</p>
                </>
              }
              content={<>Easily create adapters/providers that integrate seamlessly.</>}
            />
          </Container>
        </div>
      </div>
      {/* The rest of your content remains unchanged */}
      <div className="pattern-green-oil relative min-h-[200px] w-full bg-fixed">
        <div className="bg-black/90">
          <Container className="flex h-full flex-col items-center gap-5 py-10 text-center">
            <h2 className="m-0 p-0 text-4xl text-base-5">PARTNERS</h2>
            <p className="text- m-0 p-0 text-lg font-normal text-neutral-12">
              Our Current Partners
            </p>
            <div className="py-10">
              <Partners />
            </div>
          </Container>
        </div>
      </div>
      <div className="pattern-green-oil relative hidden min-h-[200px] w-full border-t border-neutral-2 bg-fixed shadow-[0px_-10px_50px] shadow-base-12/80 md:flex">
        <div className="w-full bg-neutral-950/80 py-10">
          <Container className="flex h-full flex-col items-center gap-5 py-10 text-center">
            <h2 className="m-0 p-0 text-4xl text-base-4">LIVE PREVIEW</h2>
            <p className="m-0 p-0 font-normal text-neutral-12">
              See how ExpressoTS look like without leaving your browser.
            </p>
            <div className="w-full overflow-hidden rounded-md">
              <BlitzCode />
            </div>
          </Container>
        </div>
      </div>
      {/* <div className="pattern-green-oil relative hidden min-h-[200px] w-full border-t border-neutral-2 bg-fixed shadow-[0px_-10px_50px] shadow-base-12/80 md:flex">
        <div className="w-full bg-neutral-950/80">
          <Container className="flex h-full flex-col items-center gap-5 py-10 text-center">
            <h2 className="m-0 p-0 text-4xl text-base-4">SUPPORT US ❤️</h2>
            <p className="text- m-0 p-0 text-lg font-normal text-neutral-12">
              ExpressoTS is an open-source project. Consider sponsoring us to support ongoing
              development.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
              <LinkButton href="https://github.com/sponsors/expressots">
                Become a Sponsor
              </LinkButton>
            </div>
          </Container>
        </div>
      </div> */}
    </main>
  )
}
