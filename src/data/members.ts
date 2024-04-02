import { Member, SocialIcons } from '@/components/Member/type'

const socialIconsMap: SocialIcons = {
  github: './assets/icons/socials/github.svg',
  linkedin: './assets/icons/socials/linkedin.svg',
}

const socialIcons = (name: string): string => {
  return socialIconsMap[name]
}

const team: Member[] = [
  {
    // Richard
    name: 'Richard Zampieri',
    position: 'Creator of @expressots',
    resume: 'Tech. Lead 📔 "True freedom blossoms in the realm of Open Source."',
    photo: 'https://avatars.githubusercontent.com/u/4088378?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/rsaz',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/richardzampieri',
      },
    ],
  },
  {
    // Juliano
    name: 'Juliano Soares',
    position: 'Core developer',
    resume: '💻 Researcher and student of artificial intelligence and machine learning',
    photo: 'https://avatars.githubusercontent.com/u/37117169?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/juliano-soares',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/juliano-leonardo-soares',
      },
    ],
  },
  {
    // Pedro
    name: 'Pedro Vargas',
    position: 'Product Manager',
    resume: 'I am a creator, and I am passionate about translating ideas into actionable insights.',
    photo:
      'https://media.licdn.com/dms/image/C5603AQGM4BZY9DLwzw/profile-displayphoto-shrink_200_200/0/1517520966833?e=1717632000&v=beta&t=DrB25zU1i-6fziW03QqqC_E_RKDbeLx1jSBMK_2mfNU',
    socials: [
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/pedroavargas',
      },
    ],
  },
  {
    // Ariel
    name: 'Ariel Betti',
    position: 'Core developer',
    resume:
      '🏆 World Champion of NASA Space Apps 🏅1º Maratona IBM Behind The Code. Aggressive software engineer.',
    photo: 'https://avatars.githubusercontent.com/u/42379076?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/ArielBetti',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/ariel-betti',
      },
    ],
  },
]

const alumni: Member[] = [
  {
    // Daniel
    name: 'Daniel Boll',
    position: 'Core developer',
    resume:
      "Sorcerer Boll, code mystique, In Rust, C++, Typescript's streak. Open source magic he'll deploy, Coding realms, he'll skillfully toy.",
    photo: 'https://avatars.githubusercontent.com/u/43689101?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/Daniel-Boll',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/daniel-boll',
      },
    ],
  },
  {
    // Felipe
    name: 'Felipe Fontana',
    position: 'Core developer',
    resume: "Lover of processes, always looking to improve people's lives through technology.",
    photo: 'https://avatars.githubusercontent.com/u/6570783?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/f0ntana',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/felipe-fontana/',
      },
    ],
  },
  {
    // Vitor
    name: 'Vitor Caminha',
    position: 'Core developer',
    resume:
      'Passionate about Artificial Intelligence and Python. Falling in love with JavaScript and its wonderful technologies.',
    photo: 'https://avatars.githubusercontent.com/u/50715987?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/VitorCaminha',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/vitorcaminha',
      },
    ],
  },
  {
    // Rodrigo da Hora
    name: 'Rodrigo da Hora',
    position: 'Product Designer',
    resume:
      'Minha missão é continuar minha jornada profissional, explorando novos desafios e oportunidades para aprender, evoluir e alcançar resultados expressivos.',
    photo: 'https://avatars.githubusercontent.com/u/81840077?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/dahorarodrigo',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/rodrigo-da-hora',
      },
    ],
  },
  {
    // Daniel Revogabe
    name: 'Daniel Gabriel',
    position: 'Frontend Developer',
    resume:
      '⚡️Front-end Developer⚡️- Specializing in front-end and a design lover | Mainly working with JavaScript, TypeScript and CSS.',
    photo: 'https://avatars.githubusercontent.com/u/56942108?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/revogabe',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/daniel-gabriel-70a565267',
      },
    ],
  },
  {
    // Lucas
    name: 'Lucas Veiga',
    position: 'Core developer',
    resume: 'Front-end Developer. My passion is to be always evolving. "Always keep learning"',
    photo:
      'https://avatars.githubusercontent.com/u/99448942?s=400&u=e7de3941c2473bd91d39474448191622e4167255&v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/lucasveigaa',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/lucas-veiga-643bb7214/',
      },
    ],
  },
  {
    // Aluisio
    name: 'Aluisio Amorim',
    position: 'Core developer',
    resume: 'Full-stack, for real. Opening magic boxes and turning them into science.',
    photo: 'https://avatars.githubusercontent.com/u/42624869?v=4',
    socials: [
      {
        name: 'github',
        url: 'https://github.com/Amorim33',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/aluisio-amorim-b19a701ba/',
      },
    ],
  },
]

export { team, socialIcons, alumni }
