'use client'

import { alumni, team, socialIcons } from '@/data/members'
import { Container } from '@/components'
import { Member as MemberType } from '@/components/Member/type'
import {
  IconUsers,
  IconHeart,
  IconArrowRight,
  IconBrandGithub,
  IconMessageCircle,
} from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'

function MemberCard({
  member,
  index,
  featured = false,
}: {
  member: MemberType
  index: number
  featured?: boolean
}) {
  return (
    <div
      className={`glass-card-premium group animate-slideInUp overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.03] ${
        featured ? 'col-span-full p-8 sm:col-span-2 lg:col-span-2' : 'p-6'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className={`flex ${featured ? 'flex-col items-center gap-6 sm:flex-row sm:items-start' : 'flex-col items-center'}`}>
        <div className={`relative flex-shrink-0 overflow-hidden rounded-full ${featured ? 'h-28 w-28' : 'mb-4 h-20 w-20'}`}>
          <Image
            src={member.photo}
            alt={member.name}
            width={featured ? 112 : 80}
            height={featured ? 112 : 80}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.src = '/assets/logos/logo-primary.svg'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base-6/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className={featured ? 'flex-1 text-center sm:text-left' : 'text-center'}>
          <h3 className={`font-bold text-neutral-12 ${featured ? 'mb-1 text-xl' : 'mb-1 text-base'}`}>
            {member.name}
          </h3>
          <p className={`font-medium text-base-6 ${featured ? 'mb-3 text-sm' : 'mb-2 text-xs'}`}>
            {member.position}
          </p>
          <p className={`leading-relaxed text-neutral-7 ${featured ? 'mb-4 text-sm' : 'mb-3 text-xs'}`}>
            {member.resume}
          </p>

          <div className={`flex gap-2.5 ${featured ? 'justify-center sm:justify-start' : 'justify-center'}`}>
            {member.socials.map((social, socialIndex) => (
              <a
                key={socialIndex}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:scale-110 hover:bg-base-6/20"
              >
                <Image
                  src={socialIcons(social.name)}
                  alt={social.name}
                  width={16}
                  height={16}
                  className="h-4 w-4"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Team() {
  const founder = team[0]
  const coreMembers = team.slice(1)

  return (
    <main className="relative min-h-screen">
      {/* Hero */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-neutral-2/30 to-neutral-1" />

        <Container className="relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-fadeInScale">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-neutral-12 sm:text-5xl lg:text-6xl">
                The People Behind{' '}
                <span className="text-gradient-premium">ExpressoTS</span>
              </h1>
            </div>
            <div className="mx-auto max-w-2xl animate-slideInUp">
              <p className="text-lg leading-relaxed text-neutral-8 sm:text-xl">
                A small, focused team of developers who believe TypeScript backends deserve
                better tooling. We build ExpressoTS in the open and welcome every contributor.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Team */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-base-6/30 bg-base-6/10 px-5 py-2">
              <IconUsers className="h-5 w-5 text-base-6" />
              <span className="text-sm font-semibold uppercase tracking-wider text-base-6">
                Core Team
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold text-neutral-12 sm:text-4xl">
              Meet the <span className="text-gradient-premium">Builders</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-neutral-7 sm:text-lg">
              The maintainers who design, build, and ship the framework every day.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Founder gets a featured 2-col card */}
            <MemberCard member={founder} index={0} featured />

            {/* Rest of core team */}
            {coreMembers.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index + 1} />
            ))}
          </div>
        </Container>
      </section>

      {/* Alumni */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-base-6/30 bg-base-6/10 px-5 py-2">
              <IconHeart className="h-5 w-5 text-base-6" />
              <span className="text-sm font-semibold uppercase tracking-wider text-base-6">
                Alumni
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold text-neutral-12 sm:text-4xl">
              Past <span className="text-gradient-premium">Contributors</span>
            </h2>
            <p className="mx-auto max-w-xl text-base text-neutral-7 sm:text-lg">
              We are grateful to everyone who helped shape ExpressoTS along the way.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {alumni.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Join CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="glass-card-premium mx-auto max-w-3xl rounded-2xl p-10 text-center sm:p-14">
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl">
              Want to <span className="text-gradient-premium">Contribute</span>?
            </h2>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-neutral-7 sm:text-lg">
              ExpressoTS is 100% open source. Whether you fix a typo, open an issue, or
              build a new feature, every contribution matters.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="https://github.com/expressots/expressots"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-premium inline-flex items-center gap-2 rounded-lg px-6 py-3 text-base font-semibold"
              >
                <IconBrandGithub className="h-5 w-5" />
                View on GitHub
                <IconArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="https://discord.gg/PyPJfGK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-base-6/30 bg-base-6/10 px-6 py-3 text-base font-semibold text-base-6 transition-all duration-300 hover:border-base-6/50 hover:bg-base-6/20"
              >
                <IconMessageCircle className="h-5 w-5" />
                Join Discord
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
