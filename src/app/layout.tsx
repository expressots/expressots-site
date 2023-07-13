import { ReactNode } from 'react'
import { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

const fontFamily = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'ExpressoTS - Node.js Framework',
  description: 'A lightweight, fast and easy to use TypeScript Node.js framework',
  themeColor: '#161616',
  category: 'technology',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
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
      </head>
      <body className={fontFamily.className}>
        <div className="w-full min-h-screen mx-auto antialiased bg-neutral-950/90 text-neutral-100 selection:bg-base-6 selection:text-neutral-1">
          <div className="absolute z-0 w-full h-screen bg-repeat pointer-events-none opacity-10" />
          <Header />
          <div className="bg-black/80 backdrop-blur-sm">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
