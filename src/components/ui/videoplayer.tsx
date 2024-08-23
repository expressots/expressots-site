'use client'

import React from 'react'

type VideoPlayerProps = {
  src: string
  title: string
}

export const VideoPlayer = ({ src, title }: VideoPlayerProps) => {
  // Add `?rel=0` to the end of the YouTube URL to disable related videos
  const modifiedSrc = `${src}?rel=0`
  return (
    <div className="relative w-full max-w-2xl rounded-lg bg-black p-4 shadow-lg">
      {/* Video Frame */}
      <div className="relative overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="350"
          src={modifiedSrc}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>

        {/* Light Animation */}
        <div className="animate-light-bottom absolute bottom-0 left-0 h-2 w-full"></div>
      </div>
    </div>
  )
}
