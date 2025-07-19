'use client'

import { alumni, team } from '@/data/members'
import { Container, Member } from '@/components'
import { Member as MemberType } from '@/components/Member/type'
import { IconUsers, IconHeart, IconStar } from '@tabler/icons-react'

export default function Team() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-neutral-2/30 to-neutral-1" />

        <Container className="relative z-10">
          <div className="text-center">
            <div className="animate-fadeInScale mb-8">
              <h1 className="mb-4 text-5xl font-bold leading-tight text-neutral-12 lg:text-6xl">
                Meet Our <span className="text-gradient-premium">Team</span>
              </h1>
            </div>
            <div className="animate-slideInUp mx-auto max-w-3xl">
              <p className="text-xl leading-relaxed text-neutral-8 lg:text-2xl">
                The passionate developers and contributors building the future of TypeScript
                frameworks.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Team Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-base-6/10 px-6 py-3">
              <IconUsers className="h-6 w-6 text-base-6" />
              <span className="text-base font-semibold uppercase tracking-wider text-base-6">
                Core Team
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              The <span className="text-gradient-premium">Builders</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-neutral-7">
              Our dedicated core team members who drive innovation and maintain the ExpressoTS
              ecosystem.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((member: MemberType, index: number) => (
              <div
                key={member.name}
                className="animate-slideInUp glass-card-premium group overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = './assets/logos/logo-primary.svg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-6/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-neutral-12">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-base-6">{member.position}</p>
                  <p className="mb-4 text-xs leading-relaxed text-neutral-7">{member.resume}</p>

                  <div className="flex justify-center gap-3">
                    {member.socials.map((social: any, socialIndex: number) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:scale-110 hover:bg-base-6/20"
                      >
                        <img
                          src={`./assets/icons/socials/${social.name}.svg`}
                          alt={social.name}
                          className="h-4 w-4"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Alumni Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-base-6/10 px-6 py-3">
              <IconHeart className="h-6 w-6 text-base-6" />
              <span className="text-base font-semibold uppercase tracking-wider text-base-6">
                Alumni
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              Past <span className="text-gradient-premium">Contributors</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-neutral-7">
              We honor and thank all past members for their invaluable contributions to ExpressoTS.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {alumni.map((member: MemberType, index: number) => (
              <div
                key={member.name}
                className="animate-slideInUp glass-card-premium group overflow-hidden rounded-xl p-6 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="h-24 w-24 object-cover transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = './assets/logos/logo-primary.svg'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-6/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-2 text-lg font-bold text-neutral-12">{member.name}</h3>
                  <p className="mb-3 text-sm font-medium text-base-6">{member.position}</p>
                  <p className="mb-4 text-xs leading-relaxed text-neutral-7">{member.resume}</p>

                  <div className="flex justify-center gap-3">
                    {member.socials.map((social: any, socialIndex: number) => (
                      <a
                        key={socialIndex}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:scale-110 hover:bg-base-6/20"
                      >
                        <img
                          src={`./assets/icons/socials/${social.name}.svg`}
                          alt={social.name}
                          className="h-4 w-4"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community Stats Section */}
      <section className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-base-6/10 px-6 py-3">
              <IconStar className="h-6 w-6 text-base-6" />
              <span className="text-base font-semibold uppercase tracking-wider text-base-6">
                Community Impact
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              Building <span className="text-gradient-premium">Together</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-xl text-neutral-7">
              Our community continues to grow with passionate developers from around the world.
            </p>

            <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">{team.length}</div>
                <div className="mt-2 text-lg text-neutral-7">Core Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">
                  {alumni.length}
                </div>
                <div className="mt-2 text-lg text-neutral-7">Alumni</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">
                  {team.length + alumni.length}
                </div>
                <div className="mt-2 text-lg text-neutral-7">Total Contributors</div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
