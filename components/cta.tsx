'use client'

import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

export function CTA() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, dir } = useLanguage()
  
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-4xl">
        <div className={`relative rounded-2xl overflow-hidden transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/5" />

          {/* Content */}
          <div className="relative p-12 sm:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-8">
              {t('cta.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group">
                {t('cta.button.primary')}
                <ArrowRight className={`group-hover:${dir === 'rtl' ? '-translate-x-1' : 'translate-x-1'} transition-transform ${dir === 'rtl' ? 'rotate-180' : ''}`} size={20} />
              </button>
              <button className="px-8 py-4 border border-border/40 text-foreground rounded-lg font-semibold hover:bg-foreground/5 transition-colors">
                {t('cta.button.secondary')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
