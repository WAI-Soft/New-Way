'use client'

import { useEffect, useState } from 'react'

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
      case 'aurora':
        return 'relative overflow-hidden'
      case 'solid':
      default:
        return 'bg-background'
    }
  }

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${getBackgroundClass()}`}>
      {backgroundVariant === 'aurora' && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, rgba(80, 175, 155, 0.3), transparent),
                radial-gradient(ellipse 60% 50% at 50% 120%, rgba(59, 148, 130, 0.2), transparent)
              `,
            }}
          />
        </div>
      )}
      
      <div className="mx-auto max-w-7xl text-center relative z-10">
        <h1
          className={`text-4xl sm:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 ${
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
