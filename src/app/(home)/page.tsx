'use client'

import {
  Tip,
  LinkButton,
  CopyInstalation,
  InfoCard,
  Partners,
  BlitzCode,
  Container,
} from '@/components'
import {
  IconRocket,
  IconArrowRight,
  IconPlayerPlay,
  IconBolt,
  IconShield,
  IconBox,
  IconCode,
  IconTerminal,
  IconPuzzle,
  IconChartBar,
  IconDatabase,
  IconCopy,
  IconX,
  IconBrandStackoverflow,
} from '@tabler/icons-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import sdk from '@stackblitz/sdk'

// Animated Counter Component
interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
}

const AnimatedCounter = ({ target, suffix = '', duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * target)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCount)
    }, 500) // Start animation after 500ms delay

    return () => clearTimeout(timer)
  }, [target, duration])

  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  )
}

// Copy Button Component
interface CopyButtonProps {
  command: string
}

const CopyButton = ({ command }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <button
      className="flex items-center gap-2 text-base-6 transition-colors hover:text-base-5"
      onClick={handleCopy}
    >
      <IconCopy className="h-5 w-5" />
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

// Video Modal Component
interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

const VideoModal = ({ isOpen, onClose, videoId }: VideoModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="animate-fadeInScale relative z-10 mx-4 w-full max-w-4xl">
        <div className="glass-card-premium overflow-hidden rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-6/20 p-6">
            <h3 className="text-xl font-bold text-neutral-12">Welcome to ExpressoTS</h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          {/* Video Container */}
          <div className="p-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                title="Welcome to ExpressoTS"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Playground Modal Component
interface PlaygroundModalProps {
  isOpen: boolean
  onClose: () => void
}

const PlaygroundModal = ({ isOpen, onClose }: PlaygroundModalProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'

      // Load StackBlitz when modal opens
      if (!isLoaded) {
        setTimeout(() => {
          sdk.embedProjectId('expressots-playground-modal', 'expressots', {
            clickToLoad: false,
            forceEmbedLayout: true,
            openFile: 'src/main.ts',
            hideExplorer: false,
            theme: 'dark',
            height: 600,
            width: '100%',
          })
          setIsLoaded(true)
        }, 100)
      }
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, isLoaded])

  // Reset loaded state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsLoaded(false)
      // Clear the StackBlitz container
      const container = document.getElementById('expressots-playground-modal')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Content */}
      <div className="animate-fadeInScale relative z-10 mx-4 w-full max-w-6xl">
        <div className="glass-card-premium overflow-hidden rounded-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-6/20 p-6">
            <h3 className="text-xl font-bold text-neutral-12">Playground</h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>

          {/* StackBlitz Container */}
          <div className="p-6">
            <div className="relative min-h-[600px] w-full overflow-hidden rounded-xl bg-neutral-1">
              {!isLoaded && (
                <div className="flex h-[600px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-2 border-base-6/30 border-t-base-6"></div>
                    <p className="text-neutral-7">Loading ExpressoTS Playground...</p>
                  </div>
                </div>
              )}
              <div id="expressots-playground-modal" className="w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isPlaygroundModalOpen, setIsPlaygroundModalOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      {/* Hero Section with Pulsing Circles */}
      <section className="pulsing-circles relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-neutral-2/30 to-neutral-1" />

        <Container className="relative z-10 w-full">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* Main Headline */}
            <div className="animate-fadeInScale mb-8">
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-7xl">
                Build Modern APIs with <span className="text-gradient-premium">Confidence</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="animate-slideInUp mb-12 max-w-3xl">
              <p className="text-xl leading-relaxed text-neutral-8 lg:text-2xl">
                A type-safe TypeScript framework for building fast, scalable APIs with minimal setup
                and developer-first design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col items-center gap-4 lg:flex-row">
              <LinkButton
                href="https://doc.expresso-ts.com/"
                className="btn-primary-premium min-w-[220px] rounded-lg px-8 py-4 text-lg font-semibold [&>span]:flex [&>span]:flex-nowrap [&>span]:items-center [&>span]:gap-2"
              >
                <IconRocket className="h-5 w-5 flex-shrink-0" />
                <span>Quick Start</span>
                <IconArrowRight className="h-5 w-5 flex-shrink-0" />
              </LinkButton>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="btn-secondary-premium group relative flex inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-base-6/30 bg-base-7/10 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-base-6/50 hover:bg-base-6/20 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-base-6/20 to-base-5/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex transform items-center gap-2 transition-all duration-300 group-hover:tracking-wider">
                  <IconPlayerPlay className="h-5 w-5 flex-shrink-0" />
                  <span>Watch Demo</span>
                </span>
              </button>
            </div>

            {/* Statistics */}
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">
                  <AnimatedCounter target={130000} suffix="+" />
                </div>
                <div className="mt-2 text-lg text-neutral-7">Weekly Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">
                  <AnimatedCounter target={1800} suffix="+" />
                </div>
                <div className="mt-2 text-lg text-neutral-7">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-neutral-12 lg:text-5xl">
                  <AnimatedCounter target={56} suffix="+" />
                </div>
                <div className="mt-2 text-lg text-neutral-7">Contributors</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Playground Section */}
      <section id="playground" className="relative py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-base-6/10 px-6 py-3">
              <IconBrandStackoverflow className="h-6 w-6 text-base-6" />
              <span className="text-base font-semibold uppercase tracking-wider text-base-6">
                Try It Now
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              Interactive <span className="text-gradient-premium">Playground</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-neutral-7">
              Experience ExpressoTS directly in your browser. No installation required.
            </p>

            <button
              onClick={() => setIsPlaygroundModalOpen(true)}
              className="btn-primary-premium group relative mx-auto flex inline-flex min-w-[220px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-base-6/30 bg-base-7/10 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-base-6/50 hover:bg-base-6/20 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-base-6/20 to-base-5/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10 flex transform items-center gap-2 transition-all duration-300 group-hover:tracking-wider">
                <IconBrandStackoverflow className="h-5 w-5 flex-shrink-0" />
                <span>Open Playground</span>
              </span>
            </button>
          </div>
        </Container>
      </section>

      {/* Complete Ecosystem Section */}
      <section id="ecosystem" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              Complete <span className="text-gradient-premium">Ecosystem</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-neutral-7">
              Everything you need to build, test, and deploy production-ready applications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconBolt className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Lightning Fast</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Built for speed with optimized performance and minimal overhead.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconShield className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Type Safety</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Full TypeScript support with compile-time error checking.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconBox className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Modular Architecture</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Flexible and scalable architecture for any project size.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconCode className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Developer Experience</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Intuitive APIs and excellent tooling for better productivity.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconTerminal className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">CLI Tools</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Powerful command-line tools for scaffolding and development.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconPuzzle className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Extensions</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Rich ecosystem of plugins and extensions for enhanced functionality.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconChartBar className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Performance</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Built-in monitoring and performance optimization tools.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconDatabase className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Database</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Seamless database integration with multiple providers.
                </p>
              }
            />
          </div>
        </Container>
      </section>

      {/* Start Building Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-12 lg:text-5xl">
              Start Building <span className="text-gradient-premium">Today</span>
            </h2>
            <p className="text-xl text-neutral-7">
              Get up and running with ExpressoTS in under 5 minutes.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {/* Installation Command */}
            <div className="glass-card-premium mb-8 rounded-xl p-6">
              <div className="flex items-center justify-between">
                <code className="font-mono text-lg text-neutral-8">
                  npx @expressots/cli new my-app
                </code>
                <CopyButton command="npx @expressots/cli new my-app" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
              <LinkButton
                href="https://doc.expresso-ts.com/"
                className="btn-primary-premium rounded-lg px-8 py-4 text-lg font-semibold"
              >
                Get Started
              </LinkButton>
              <LinkButton
                href="https://github.com/expressots/expressots"
                className="btn-secondary-premium rounded-lg px-8 py-4 text-lg font-semibold"
              >
                View on GitHub
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId="_Z4WLZW4zMk"
      />

      {/* Playground Modal */}
      <PlaygroundModal
        isOpen={isPlaygroundModalOpen}
        onClose={() => setIsPlaygroundModalOpen(false)}
      />
    </main>
  )
}
