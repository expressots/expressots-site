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
import ProductHuntBadge from '@/components/ProductHuntBadge'
import { IconApps, IconPackages, IconViewfinder } from '@tabler/icons-react'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-center overflow-auto">
      <div className="w-full border border-b border-neutral-1 bg-grid bg-cover bg-right-top bg-no-repeat">
        <div className="bg-black/80 backdrop-blur-sm">
          <Container>
            <div className="relative flex min-h-[calc(85vh)] w-full flex-col items-center justify-center">
              <div className="absolute left-1/2 top-24 z-40 -translate-x-1/2 -translate-y-1/2 transform">
                <Tip className="animate-showup text-sm text-neutral-6 transition-shadow">
                  🎉 Production version v2.8.0
                </Tip>
              </div>
              <div className="mt-32 flex h-full flex-col items-center justify-center gap-4 sm:mt-0">
                <Image
                  width={100}
                  height={100}
                  src="./assets/logos/logo-primary.svg"
                  alt="Expresso Logo"
                />
                <h1 className="text-center text-6xl text-[clamp(48px_5vw_72px)] font-bold">
                  ExpressoTS
                </h1>
                <p className="text-center text-xl text-neutral-10">
                  The Developer-Friendly TypeScript Framework for Server-Side Applications
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">
                  <LinkButton href="https://doc.expresso-ts.com/docs/hello">Get Started</LinkButton>
                  <CopyInstalation code="npm i -g @expressots/cli" />
                </div>
                <ProductHuntBadge />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="pattern-green-oil relative min-h-[200px] w-full bg-fixed">
        <div className="bg-black/90">
          <Container className="flex h-full flex-col items-center justify-center gap-5 py-10 text-center md:flex-row">
            <InfoCard
              header={
                <>
                  <IconApps className="mr-2 h-5 w-5" aria-hidden="true" />
                  <p className="font-semibold">Easy to use</p>
                </>
              }
              content="Built on a modular architecture and designed with simplicity in mind, it empowers developers to quickly create powerful applications."
            />
            <InfoCard
              header={
                <>
                  <IconViewfinder className="mr-2 h-5 w-5" aria-hidden="true" />
                  <p className="font-semibold">Focus on What Matters</p>
                </>
              }
              content="You can stop worrying about repetitive tasks and focus on what really matters - coding your business logic and delivering a high-quality product."
            />
            <InfoCard
              header={
                <>
                  <IconPackages className="mr-2 h-5 w-5" aria-hidden="true" />
                  <p className="font-semibold">Extensible</p>
                </>
              }
              content="Ability to easily create adapters/providers that seamlessly integrate with the rest of the application."
            />
          </Container>
        </div>
      </div>
      <div className="pattern-green-oil relative min-h-[200px] w-full bg-fixed">
        <div className="bg-black/90">
          <Container className="flex h-full flex-col items-center gap-5 py-10 text-center">
            <h2 className="m-0 p-0 text-4xl text-base-5">Current Partners</h2>
            <p className="m-0 p-0 font-normal">
              ExpressoTS is an MIT-licensed open-source project. Consider supporting us!
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
            <h2 className="m-0 p-0 text-4xl text-base-4">Live preview</h2>
            <p className="m-0 p-0 font-normal text-neutral-12">
              See how ExpressoTS look like without leaving your browser.
            </p>
            <div className="w-full overflow-hidden rounded-md">
              <BlitzCode />
            </div>
          </Container>
        </div>
      </div>
    </main>
  )
}
