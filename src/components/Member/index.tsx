'use client'
import React, { useState } from 'react'
import Image from 'next/image'

import { Member as MemberType } from './type'
import { socialIcons } from '@/data/members'

interface MemberProps {
  member: MemberType
}

export const Member: React.FC<MemberProps> = ({ member }) => {
  const [hasError, setHasError] = useState(false)

  return (
    <div key={member.name}>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg hover:shadow-2xl lg:hover:-translate-y-2">
        <Image
          width="100"
          height="256"
          className={`h-56 w-full md:h-64 xl:h-80 ${hasError ? 'object-fill' : 'object-cover'}`}
          src={hasError ? './assets/logos/logo-primary.svg' : member.photo}
          alt={`avatar-${member.name}`}
          onError={() => setHasError(true)}
        />
        <div className="absolute inset-0 flex flex-col justify-center px-5 py-5 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">{member.name}</p>
          <p className="mb-4 text-xs text-gray-100">{member.position}</p>
          <p className="mb-4 text-xs tracking-wide text-gray-400">{member.resume}</p>
          <div className="flex items-center justify-center space-x-3">
            {member.socials.map((social: any, ind: number) => (
              <a
                key={ind + social.name}
                href={social.url}
                target="blank"
                className="text-white transition-colors duration-300 hover:text-teal-accent-400"
              >
                <Image
                  alt={`icon-${social.name}`}
                  width={25}
                  height={25}
                  src={socialIcons(social.name)}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
