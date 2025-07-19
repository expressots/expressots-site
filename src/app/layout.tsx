import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'

const fontFamily = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const viewPort: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#17aa56',
}

export const metadata: Metadata = {
  title: 'ExpressoTS - Modern Node.js Framework',
  description:
    'A modern, developer-friendly TypeScript Node.js framework for building scalable server-side applications',
  category: 'technology',
  icons: {
    icon: '/icons/windows11/Square150x150Logo.scale-100.png',
    shortcut: '/icons/windows11/Square150x150Logo.scale-100.png',
    apple: 'icons/ios/152.png',
    other: {
      rel: 'icons/ios/152.png',
      url: 'icons/ios/152.png',
    },
  },
  openGraph: {
    url: 'https://expresso-ts.com',
    title: 'ExpressoTS - Modern Node.js Framework',
    description: 'The Developer-Friendly TypeScript Framework for Server-Side Applications',
    images: [
      {
        url: 'https://expresso-ts.com/assets/logos/expressots.png',
        width: 1200,
        height: 628,
      },
    ],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
      </head>
      <body className={fontFamily.className}>
        <div className="mx-auto min-h-screen w-full bg-neutral-1 text-neutral-12 antialiased selection:bg-base-6/20 selection:text-base-5">
          <div className="pattern-hexagon-premium pointer-events-none absolute z-0 h-screen w-full opacity-20" />
          <Header />
          <main className="relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
