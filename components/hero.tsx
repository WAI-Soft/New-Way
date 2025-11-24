'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { useLanguage } from '@/lib/language-context'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t, dir } = useLanguage()

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AuroraBackground className="min-h-screen flex items-center justify-center pt-20 md:pt-24" id="home">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center z-10 relative">
        {/* Main Heading with Gradient */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent mt-5">
            {t('hero.title.line1')}
          </span>
          <span className="block text-foreground mt-2">{t('hero.title.line2')}</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
            {t('hero.cta.getStarted')}
            <ArrowRight className={`group-hover:${dir === 'rtl' ? '-translate-x-1' : 'translate-x-1'} transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} size={20} />
          </button>
          <button className="px-8 py-4 border border-border/40 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors">
            {t('hero.cta.learnMore')}
          </button>
        </div>
      </div>
    </AuroraBackground>
  )
}
