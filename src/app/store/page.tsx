'use client'

import { Container, LinkButton } from '@/components'
import {
  IconBox,
  IconSparkles,
  IconBellRinging,
  IconBrandGithub,
  IconPlugConnected,
  IconBook,
} from '@tabler/icons-react'

const previewProviders: { name: string; description: string; status: string }[] = [
  {
    name: 'AuthN / JWT',
    description: 'Drop-in JWT authentication with refresh tokens, sessions, and rotation.',
    status: 'In design',
  },
  {
    name: 'Postgres + Drizzle',
    description: 'Typed Drizzle repositories with migrations and connection pooling.',
    status: 'In design',
  },
  {
    name: 'Redis Cache',
    description: 'Interceptor-friendly cache with TTL, tagging, and pub/sub helpers.',
    status: 'In design',
  },
  {
    name: 'Observability',
    description: 'OpenTelemetry traces and metrics wired into Studio out of the box.',
    status: 'In design',
  },
]

export default function Store() {
  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-neutral-2/30 to-neutral-1" />

        <Container className="relative z-10">
          <div className="text-center">
            <div className="mb-6 inline-flex animate-fadeInScale items-center gap-3 rounded-full border border-base-6/30 bg-base-6/10 px-5 py-2">
              <IconBox className="h-5 w-5 text-base-6" />
              <span className="text-sm font-semibold uppercase tracking-wider text-base-6">
                Provider Store
              </span>
            </div>
            <h1 className="mb-4 animate-fadeInScale text-4xl font-bold leading-tight text-neutral-12 sm:text-5xl lg:text-6xl">
              The <span className="text-gradient-premium">ExpressoTS</span> Provider Store
            </h1>
            <p className="mx-auto max-w-2xl animate-slideInUp text-lg text-neutral-7 sm:text-xl">
              A curated catalog of first-party and community providers. Drop-in
              authentication, databases, caches, queues, and observability for your v4 app.
            </p>

            <div className="mx-auto mt-8 flex max-w-lg items-center justify-center gap-2 rounded-full border border-base-6/20 bg-base-6/5 px-5 py-2.5">
              <IconSparkles className="h-4 w-4 text-base-6" />
              <span className="text-sm text-neutral-7">
                <span className="font-semibold text-neutral-12">Coming soon.</span> Subscribe for
                launch updates.
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Preview providers */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-neutral-12 sm:text-4xl">
              In the <span className="text-gradient-premium">pipeline</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-neutral-7 sm:text-lg">
              A sneak peek at the first set of officially supported providers landing after the
              v4.0 GA.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {previewProviders.map((p) => (
              <div
                key={p.name}
                className="glass-card-premium relative flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-base-6/10">
                    <IconPlugConnected className="h-5 w-5 text-base-6" />
                  </div>
                  <span className="rounded-full border border-neutral-3/40 bg-neutral-2/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-7">
                    {p.status}
                  </span>
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-neutral-12">{p.name}</h3>
                  <p className="text-sm leading-relaxed text-neutral-7">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-base-6/10 px-5 py-2">
              <IconBellRinging className="h-4 w-4 text-base-6" />
              <span className="text-xs font-semibold uppercase tracking-wider text-base-6">
                Get involved
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl">
              Want to <span className="text-gradient-premium">contribute</span> a provider?
            </h2>
            <p className="mb-8 text-base text-neutral-7 sm:text-lg">
              Read the provider ecosystem guide to learn how to build, publish, and ship a
              provider that integrates with the rest of the framework.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkButton
                href="https://doc.expresso-ts.com/docs/guides/provider-ecosystem"
                className="btn-primary-premium rounded-lg px-6 py-3 text-base font-semibold [&>span]:flex [&>span]:items-center [&>span]:gap-2"
              >
                <IconBook className="h-5 w-5" />
                <span>Provider Guide</span>
              </LinkButton>
              <LinkButton
                href="https://github.com/expressots/expressots/discussions"
                className="btn-secondary-premium rounded-lg px-6 py-3 text-base font-semibold [&>span]:flex [&>span]:items-center [&>span]:gap-2"
              >
                <IconBrandGithub className="h-5 w-5" />
                <span>Discuss on GitHub</span>
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
