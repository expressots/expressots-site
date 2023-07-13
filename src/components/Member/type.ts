export interface SocialIcons {
  [key: string]: string
}

export interface Social {
  name: string
  url: string
}

export interface Member {
  name: string
  position: string
  resume: string
  photo: string
  socials: Social[]
}
