import { ReactNode } from 'react'
import { Metadata, Viewport } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Footer, Header } from '@/components'
import { NewsletterProvider } from '@/components/NewsletterModal/NewsletterProvider'

const fontFamily = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const viewPort: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#161616',
}

export const metadata: Metadata = {
  title: 'ExpressoTS - Node.js Framework',
  description: 'A lightweight, fast and easy to use TypeScript Node.js framework',
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
    title: 'ExpressoTS - Node.js Framework',
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
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=_turnstileCb"
          defer
        ></script>
      </head>
      <body className={fontFamily.className}>
        {/* Renderiza o NewsletterProvider sem quebrar o layout */}
        <NewsletterProvider />

        <div className="relative mx-auto min-h-screen w-full bg-neutral-950/90 text-neutral-100 antialiased selection:bg-base-6 selection:text-neutral-1">
          <Header />
          <main className="relative z-10 bg-black/80 backdrop-blur-sm">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
