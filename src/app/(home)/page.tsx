'use client'

import { LinkButton, InfoCard, Container } from '@/components'
import {
  IconRocket,
  IconArrowRight,
  IconPlayerPlay,
  IconBolt,
  IconShieldCheck,
  IconBox,
  IconCode,
  IconTerminal,
  IconPuzzle,
  IconChartLine,
  IconCopy,
  IconX,
  IconBrandStackoverflow,
  IconSparkles,
  IconArrowsLeftRight,
  IconBellRinging,
  IconLayersIntersect,
  IconSettingsAutomation,
  IconEye,
  IconCheck,
  IconActivity,
  IconNetwork,
  IconBugFilled,
} from '@tabler/icons-react'
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

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

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
    }, 500)

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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-4xl animate-fadeInScale">
        <div className="glass-card-premium overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-neutral-6/20 p-4 sm:p-6">
            <h3 className="text-lg font-bold text-neutral-12 sm:text-xl">Welcome to ExpressoTS</h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 sm:p-6">
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

      if (!isLoaded) {
        setTimeout(() => {
          sdk.embedProjectId('expressots-playground-modal', 'expressots', {
            clickToLoad: false,
            forceEmbedLayout: true,
            openFile: 'src/main.ts',
            hideExplorer: false,
            theme: 'dark',
            height: window.innerWidth < 640 ? 400 : 600,
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

  useEffect(() => {
    if (!isOpen) {
      setIsLoaded(false)
      const container = document.getElementById('expressots-playground-modal')
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 mx-4 w-full max-w-6xl animate-fadeInScale">
        <div className="glass-card-premium overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-neutral-6/20 p-4 sm:p-6">
            <h3 className="text-lg font-bold text-neutral-12 sm:text-xl">Playground</h3>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-3/20 transition-all duration-300 hover:bg-red-500/20 hover:text-red-400"
            >
              <IconX className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4 sm:p-6">
            <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl bg-neutral-1 sm:min-h-[600px]">
              {!isLoaded && (
                <div className="flex h-[400px] items-center justify-center sm:h-[600px]">
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

// v4 Feature Card
interface V4FeatureCardProps {
  icon: typeof IconRocket
  title: string
  description: string
  href: string
  tag?: string
}

const V4FeatureCard = ({ icon: Icon, title, description, href, tag }: V4FeatureCardProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="glass-card-premium group relative flex h-full flex-col gap-4 rounded-2xl p-6 transition-all duration-300 sm:p-7"
  >
    <div className="flex items-center justify-between">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-base-6/10 transition-colors group-hover:bg-base-6/20">
        <Icon className="h-6 w-6 text-base-6" aria-hidden="true" />
      </div>
      {tag && (
        <span className="rounded-full border border-base-6/30 bg-base-6/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-base-6">
          {tag}
        </span>
      )}
    </div>
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-bold text-neutral-12 transition-colors group-hover:text-base-5">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-7">{description}</p>
    </div>
    <div className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-base-6 transition-all group-hover:gap-2.5">
      Learn more
      <IconArrowRight className="h-4 w-4" />
    </div>
  </a>
)

const InstallCommand = () => {
  const [copied, setCopied] = useState(false)
  const command = 'npx @expressots/create my-app'

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mb-8 animate-slideInUp">
      <button
        onClick={handleCopy}
        className="group inline-flex items-center gap-3 rounded-xl border border-neutral-2/60 bg-neutral-1/80 px-5 py-3 font-mono text-sm text-neutral-8 backdrop-blur-sm transition-all duration-300 hover:border-base-6/40 hover:bg-neutral-2/60 sm:text-base"
      >
        <span className="text-base-6">$</span>
        <span>{command}</span>
        {copied ? (
          <IconCheck className="h-4 w-4 text-base-6" />
        ) : (
          <IconCopy className="h-4 w-4 text-neutral-6 transition-colors group-hover:text-base-6" />
        )}
      </button>
    </div>
  )
}

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isPlaygroundModalOpen, setIsPlaygroundModalOpen] = useState(false)

  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <section className="pulsing-circles relative flex min-h-screen items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-1 via-neutral-2/30 to-neutral-1" />

        <Container className="relative z-10 w-full">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            {/* v4 launch badge */}
            <div className="mb-6 animate-fadeInScale">
              <a
                href="https://doc.expresso-ts.com/docs/prologue/release"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-base-6/30 bg-base-6/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-base-6 transition-all duration-300 hover:border-base-6/60 hover:bg-base-6/20 sm:text-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-base-6 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-base-6" />
                </span>
                ExpressoTS v4.0 is live
                <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            {/* Main Headline */}
            <div className="mb-6 animate-fadeInScale">
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Ship TypeScript APIs{' '}
                <span className="text-gradient-premium">You&apos;re Proud Of</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="mb-8 max-w-3xl animate-slideInUp">
              <p className="text-lg leading-relaxed text-neutral-8 sm:text-xl lg:text-2xl">
                Stop wiring middleware by hand. ExpressoTS gives you{' '}
                <span className="font-semibold text-neutral-12">interceptors</span>,{' '}
                <span className="font-semibold text-neutral-12">typed events</span>,{' '}
                <span className="font-semibold text-neutral-12">lazy loading</span>, and a{' '}
                <span className="font-semibold text-neutral-12">built-in observability platform</span>{' '}
                so you can focus on your product, not your plumbing.
              </p>
            </div>

            {/* Quick install command */}
            <InstallCommand />

            {/* CTA Buttons */}
            <div className="mb-16 flex flex-col items-center gap-4 lg:flex-row">
              <LinkButton
                href="https://doc.expresso-ts.com/docs/core/first-steps"
                className="btn-primary-premium flex-shrink-0 rounded-lg px-6 py-4 text-lg font-semibold sm:px-8 [&>span]:flex [&>span]:flex-nowrap [&>span]:items-center [&>span]:gap-2"
              >
                <IconRocket className="h-5 w-5 flex-shrink-0" />
                <span>Get Started</span>
                <IconArrowRight className="h-5 w-5 flex-shrink-0" />
              </LinkButton>
              <button
                onClick={() => setIsPlaygroundModalOpen(true)}
                className="btn-secondary-premium group relative flex flex-shrink-0 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-base-6/30 bg-base-7/10 px-6 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-base-6/50 hover:bg-base-6/20 active:scale-95 sm:px-8"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-base-6/20 to-base-5/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex transform items-center gap-2 transition-all duration-300 group-hover:tracking-wider">
                  <IconCode className="h-5 w-5 flex-shrink-0" />
                  <span>Try in Browser</span>
                </span>
              </button>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="group relative flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-6 py-4 text-lg font-semibold text-neutral-8 transition-all duration-300 hover:text-neutral-12"
              >
                <IconPlayerPlay className="h-5 w-5 flex-shrink-0" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Statistics */}
            <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row lg:gap-20">
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter target={130000} suffix="+" />
                </div>
                <div className="mt-2 text-base text-neutral-7 sm:text-lg">Weekly Downloads</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter target={1800} suffix="+" />
                </div>
                <div className="mt-2 text-base text-neutral-7 sm:text-lg">GitHub Stars</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
                  <AnimatedCounter target={56} suffix="+" />
                </div>
                <div className="mt-2 text-base text-neutral-7 sm:text-lg">Contributors</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What's New in v4 Section */}
      <section id="whats-new" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-base-6/30 bg-base-6/10 px-5 py-2">
              <IconSparkles className="h-5 w-5 text-base-6" />
              <span className="text-sm font-semibold uppercase tracking-wider text-base-6">
                What&apos;s New in v4.0
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
              A framework for the <span className="text-gradient-premium">next decade</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-7 sm:text-xl">
              Everything you need to ship production-grade APIs, observable from your first
              request to your hundredth deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            <V4FeatureCard
              icon={IconChartLine}
              title="ExpressoTS Studio"
              description="Local developer experience platform: request timeline, architecture map, live logs, error inspector, and security dashboard. All running locally."
              href="https://doc.expresso-ts.com/docs/studio/overview"
              tag="New"
            />
            <V4FeatureCard
              icon={IconArrowsLeftRight}
              title="Interceptors"
              description="AOP-based system for cross-cutting concerns with conditional execution. Think caching, retries, transformations, and timing."
              href="https://doc.expresso-ts.com/docs/features/interceptors"
              tag="New"
            />
            <V4FeatureCard
              icon={IconBellRinging}
              title="Typed Event System"
              description="Type-safe events with auto-discovery and replay. Decouple your domain from delivery and react to system changes with confidence."
              href="https://doc.expresso-ts.com/docs/features/events"
              tag="New"
            />
            <V4FeatureCard
              icon={IconLayersIntersect}
              title="Lazy Loading"
              description="On-demand module loading for large applications. Pay for what you load and keep cold starts fast."
              href="https://doc.expresso-ts.com/docs/features/lazy-loading"
              tag="New"
            />
            <V4FeatureCard
              icon={IconShieldCheck}
              title="Guards & Authorization"
              description="Declarative guards with a permission hierarchy. Protect routes and validate roles next to the controllers they defend."
              href="https://doc.expresso-ts.com/docs/features/guards"
              tag="New"
            />
            <V4FeatureCard
              icon={IconSettingsAutomation}
              title="Type-Safe Configuration"
              description="Validated, environment-aware configuration with autocomplete everywhere. No more typo-driven outages."
              href="https://doc.expresso-ts.com/docs/features/configuration"
              tag="New"
            />
          </div>

          <div className="mt-12 flex justify-center">
            <LinkButton
              href="https://doc.expresso-ts.com/docs/prologue/release"
              className="btn-secondary-premium rounded-lg px-6 py-3 text-base font-semibold"
            >
              Read the full release notes →
            </LinkButton>
          </div>
        </Container>
      </section>

      {/* Studio Showcase Section */}
      <section id="studio" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-3 self-start rounded-full border border-base-6/30 bg-base-6/10 px-4 py-1.5">
                <IconChartLine className="h-4 w-4 text-base-6" />
                <span className="text-xs font-semibold uppercase tracking-wider text-base-6">
                  ExpressoTS Studio
                </span>
              </div>

              <h2 className="text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
                Your app, <span className="text-gradient-premium">observed.</span>
              </h2>
              <p className="text-base leading-relaxed text-neutral-7 sm:text-lg">
                Studio runs alongside your app during development. It records every HTTP request,
                captures every log line, snapshots your DI graph, scans your dependencies for
                vulnerabilities, then shows it all in one local web UI.
              </p>
              <p className="text-base font-semibold text-base-5">
                Everything on your machine. Nothing sent off the box.
              </p>

              <ul className="flex flex-col gap-3">
                {[
                  {
                    icon: IconActivity,
                    label: 'Live request timeline with replay',
                  },
                  {
                    icon: IconNetwork,
                    label: 'Architecture map from your DI graph',
                  },
                  {
                    icon: IconBugFilled,
                    label: 'Error inspector with full stack and context',
                  },
                  {
                    icon: IconShieldCheck,
                    label: 'Security dashboard: npm audit + OSV + OWASP API Top 10',
                  },
                  {
                    icon: IconTerminal,
                    label: 'CLI generators for controllers, providers, DTOs, and more',
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label} className="flex items-start gap-3 text-neutral-8">
                      <div className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-base-6/15 text-base-6">
                        <Icon className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-sm leading-relaxed sm:text-base">{item.label}</span>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-2 flex flex-wrap gap-3">
                <LinkButton
                  href="https://doc.expresso-ts.com/docs/studio/overview"
                  className="btn-primary-premium rounded-lg px-5 py-2.5 text-sm font-semibold"
                >
                  Explore Studio
                </LinkButton>
                <LinkButton
                  href="https://doc.expresso-ts.com/docs/cli/overview"
                  className="btn-secondary-premium rounded-lg px-5 py-2.5 text-sm font-semibold"
                >
                  CLI Docs
                </LinkButton>
              </div>
            </div>

            {/* Right: stylized Studio "mock" panel */}
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-base-6/30 via-base-5/10 to-transparent opacity-60 blur-2xl" />
              <div className="glass-card-premium relative overflow-hidden rounded-2xl">
                {/* mock window chrome */}
                <div className="flex items-center justify-between border-b border-neutral-2/60 bg-neutral-1/40 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                  </div>
                  <span className="font-mono text-[11px] text-neutral-6">
                    studio.expressots.local:3333
                  </span>
                  <div className="w-12" />
                </div>

                <div className="grid grid-cols-1 gap-3 p-4 sm:p-5">
                  {/* Status row */}
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { label: 'Status', value: 'Healthy', accent: 'text-base-5' },
                      { label: 'P95', value: '42 ms', accent: 'text-neutral-12' },
                      { label: 'Errors', value: '0.02%', accent: 'text-neutral-12' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-neutral-2/60 bg-neutral-1/40 p-3"
                      >
                        <div className="text-[10px] uppercase tracking-wider text-neutral-6">
                          {stat.label}
                        </div>
                        <div className={`text-base font-bold ${stat.accent}`}>{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Request timeline */}
                  <div className="rounded-lg border border-neutral-2/60 bg-neutral-1/40 p-3">
                    <div className="mb-2.5 flex items-center justify-between">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-7">
                        Request Timeline
                      </span>
                      <span className="font-mono text-[10px] text-neutral-6">live</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {[
                        { method: 'GET', path: '/api/users', code: 200, ms: 18 },
                        { method: 'POST', path: '/api/orders', code: 201, ms: 64 },
                        { method: 'GET', path: '/api/orders/:id', code: 200, ms: 22 },
                        { method: 'DELETE', path: '/api/cart/:id', code: 204, ms: 11 },
                      ].map((r, i) => {
                        const widthPct = Math.min(95, 20 + r.ms * 1.1)
                        return (
                          <div key={i} className="flex items-center gap-2.5 font-mono text-[11px]">
                            <span className="w-12 font-semibold text-base-6">{r.method}</span>
                            <span className="w-32 truncate text-neutral-8">{r.path}</span>
                            <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-neutral-2/60">
                              <div
                                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-base-7 to-base-5"
                                style={{ width: `${widthPct}%` }}
                              />
                            </div>
                            <span className="w-10 text-right text-neutral-7">{r.code}</span>
                            <span className="w-12 text-right text-neutral-6">{r.ms}ms</span>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Architecture mini */}
                  <div className="rounded-lg border border-neutral-2/60 bg-neutral-1/40 p-3">
                    <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-neutral-7">
                      Architecture Map
                    </div>
                    <div className="grid grid-cols-3 gap-2 font-mono text-[10px]">
                      {['UserController', 'OrderController', 'CartController'].map((c) => (
                        <div
                          key={c}
                          className="rounded-md border border-base-6/30 bg-base-6/10 px-2 py-1 text-center text-base-5"
                        >
                          {c}
                        </div>
                      ))}
                      {['UserService', 'OrderService', 'CartService'].map((c) => (
                        <div
                          key={c}
                          className="rounded-md border border-neutral-3/40 bg-neutral-2/40 px-2 py-1 text-center text-neutral-7"
                        >
                          {c}
                        </div>
                      ))}
                      {['PostgresRepo', 'EventBus', 'CacheProvider'].map((c) => (
                        <div
                          key={c}
                          className="rounded-md border border-accent-500/30 bg-accent-500/10 px-2 py-1 text-center text-accent-300"
                        >
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
              Interactive <span className="text-gradient-premium">Playground</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-7 sm:text-xl">
              Experience ExpressoTS directly in your browser. No installation required.
            </p>

            <button
              onClick={() => setIsPlaygroundModalOpen(true)}
              className="btn-primary-premium group relative mx-auto flex w-full max-w-[280px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border border-base-6/30 bg-base-7/10 px-6 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:border-base-6/50 hover:bg-base-6/20 active:scale-95 sm:px-8"
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

      {/* Why ExpressoTS / Ecosystem Section */}
      <section id="ecosystem" className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-2 to-neutral-1" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
              The <span className="text-gradient-premium">complete platform</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-neutral-7 sm:text-xl">
              Beyond the framework: tools, CLI, and ecosystem packages built for production
              from day one.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconTerminal className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Powerful CLI</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Scaffold, generate, containerize, run CI/CD pipelines, and estimate cloud
                  costs. All from one tool.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconShieldCheck
                      className="h-8 w-8 text-base-6"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Type Safety</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Full TypeScript with validated DTOs, typed events, typed config, and
                  autocomplete from controller to repository.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconBox className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Modular DI</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  IoC container with introspection, lazy-loaded modules, and a permission
                  hierarchy. Built for teams of any size.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconBolt className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Fast by Default</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Minimal overhead on Express, lazy loading for cold-start sensitive
                  workloads, and an unified render engine.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconCode className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">DX First</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Decorators, smart defaults, helpful errors, and an opt-in dev experience
                  platform that gets out of your way.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconPuzzle className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Extensible</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Providers, interceptors, guards, and a growing ecosystem of plugins. Drop
                  in what you need, ignore what you don&apos;t.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconEye className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Observability Built In</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  Studio gives you real-time observability: request timelines, architecture
                  maps, live logs, and a security dashboard right in your browser.
                </p>
              }
            />
            <InfoCard
              header={
                <>
                  <div className="mb-4 rounded-xl bg-base-6/10 p-3">
                    <IconCheck className="h-8 w-8 text-base-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-12">Production Ready</h3>
                </>
              }
              content={
                <p className="text-neutral-7">
                  11-phase logging with transports, error inspector, security audit, and an
                  upgrade path with ADRs and codemods.
                </p>
              }
            />
          </div>
        </Container>
      </section>

      {/* Start Building Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-1 to-neutral-2" />

        <Container className="relative z-10">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-neutral-12 sm:text-4xl lg:text-5xl">
              Start Building <span className="text-gradient-premium">Today</span>
            </h2>
            <p className="text-lg text-neutral-7 sm:text-xl">
              Get up and running with ExpressoTS v4 in under 5 minutes.
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            {/* Installation Command */}
            <div className="glass-card-premium mb-8 rounded-xl p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <code className="break-all font-mono text-sm text-neutral-8 sm:break-normal sm:text-lg">
                  npx @expressots/cli new my-app
                </code>
                <CopyButton command="npx @expressots/cli new my-app" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
              <LinkButton
                href="https://doc.expresso-ts.com/docs/core/first-steps"
                className="btn-primary-premium w-full max-w-[200px] rounded-lg px-6 py-4 text-lg font-semibold sm:px-8"
              >
                Get Started
              </LinkButton>
              <LinkButton
                href="https://github.com/expressots/expressots"
                className="btn-secondary-premium w-full max-w-[200px] rounded-lg px-6 py-4 text-lg font-semibold sm:px-8"
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
