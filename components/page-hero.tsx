'use client'

import { useEffect, useState } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'

interface PageHeroProps {
  title: string
  subtitle: string
  backgroundVariant?: 'gradient' | 'aurora' | 'solid'
}

export function PageHero({ title, subtitle, backgroundVariant = 'solid' }: PageHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const getBackgroundClass = () => {
    switch (backgroundVariant) {
      case 'gradient':
        return 'bg-gradient-to-b from-background via-card to-background'
      case 'solid':
      default:
        return 'bg-background'
    }
  }

  // Use AuroraBackground for aurora variant
  if (backgroundVariant === 'aurora') {
    return (
      <AuroraBackground className="min-h-screen flex items-center justify-center pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10 relative">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {subtitle}
          </p>
        </div>
      </AuroraBackground>
    )
  }

  // Regular backgrounds for other variants
  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 ${getBackgroundClass()}`}>
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-foreground/60 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
