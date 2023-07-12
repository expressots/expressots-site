import { ReactNode } from 'react'
import '../styles/globals.css'
import { IBM_Plex_Sans as IBMPlexSans } from 'next/font/google'
import { Header } from '@/components/Header'
import Footer from '@/components/Footer'

const IBMSans = IBMPlexSans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
})

export const metadata = {
  title: 'ExpressoTS - Node.js Framework',
  description: 'A lightweight, fast and easy to use TypeScript Node.js framework',
  themeColor: '#161616',
  category: 'technology',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    favicon: '/icons/favicon/favicon.ico',
    icon: '/icons/windows11/Square150x150Logo.scale-100.png',
    shortcut: '/icons/windows11/Square150x150Logo.scale-100.png',
    apple: 'icons/ios/152.png',
    other: {
      rel: 'icons/ios/152.png',
      url: 'icons/ios/152.png',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={IBMSans.className}>
        <div className="mx-auto min-h-screen w-full bg-neutral-950/90 text-neutral-100 antialiased selection:bg-base-6 selection:text-neutral-1">
          <div className="pointer-events-none absolute z-0 h-screen w-full bg-repeat opacity-10" />
          <Header />
          <div className="bg-black/80 backdrop-blur-sm">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
