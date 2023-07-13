import Container from '@/components/Container'

import { alumni, team } from '@/data/members'
import { Member } from '@/components/Member'
import { Member as MemberType } from '@/components/Member/type'

export default function Team() {
  return (
    <Container>
      <div className="mx-auto min-h-[calc(85vh)] px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        <div className="max-w-xl my-10 sm:text-center md:mx-auto md:mb-12 lg:max-w-3xl">
          <div>
            <h2 className="inline-block px-3 py-px mb-4 font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 ">
              Core Team
            </h2>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block text-base-3">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24" />
              </svg>
              <span className="relative px-2 mr-2 bg-base-6 text-base-12">Bem-vindo</span>
            </span>
            <span className="text-base-6">Nossa talentosa equipe de contribuidores</span>
          </h2>
          <p className="mt-4 text-base text-base-2 md:text-lg">
            Atualmente, temos uma pequena equipe principal de colaboradores constantes. Estamos
            procurando expandir esta equipe para incluir mais pessoas da comunidade com uma ampla
            gama de habilidades e interesses.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member: MemberType) => (
            <Member key={member.name} member={member} />
          ))}
        </div>
        <div className="max-w-xl my-20 sm:text-center md:mx-auto md:mb-12 lg:max-w-3xl">
          <div>
            <h2 className="inline-block px-3 py-px mb-4 font-semibold tracking-wider uppercase rounded-full bg-teal-accent-400 ">
              Alumni Team
            </h2>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block text-base-3">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24" />
              </svg>
              <span className="relative px-2 mr-2 bg-base-6 text-base-12">Pessoas</span>
            </span>
            <span className="text-base-6">que contribuíram e somaram à nossa história</span>
          </h2>
          <p className="mt-4 text-base text-base-2 md:text-lg">
            Para aqueles que já trabalharam conosco, saibam que valorizamos sua contribuição e
            estamos abertos para reconectar e contar com vocês novamente.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {alumni.map((member: MemberType) => (
            <Member key={member.name} member={member} />
          ))}
        </div>
      </div>
    </Container>
  )
}
