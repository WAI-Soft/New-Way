'use client'

import { Search, Settings, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

export function WorkProcess() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  const processes = [
    {
      phaseKey: 'process.assessment.phase',
      titleKey: 'process.assessment.title',
      descriptionKey: 'process.assessment.description',
      icon: Search,
      color: 'from-[#50af9b] to-[#3b9482]',
      delay: '0'
    },
    {
      phaseKey: 'process.implementation.phase',
      titleKey: 'process.implementation.title',
      descriptionKey: 'process.implementation.description',
      icon: Settings,
      color: 'from-[#60c9b3] to-[#50af9b]',
      delay: '200'
    },
    {
      phaseKey: 'process.monitoring.phase',
      titleKey: 'process.monitoring.title',
      descriptionKey: 'process.monitoring.description',
      icon: Shield,
      color: 'from-[#70d9c3] to-[#60c9b3]',
      delay: '400'
    }
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl sm:text-5xl font-bold text-balance mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {language === 'en' && t('process.title')}
            {t('process.title') && t('process.title.highlight') && ' '}
            {t('process.title.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('process.title.highlight')}</span>}
          </h2>
          <p 
            className={`text-lg text-foreground/60 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t('process.subtitle')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative md:items-stretch">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {processes.map((process, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-1000 flex`}
              style={{ 
                transitionDelay: `${process.delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Card */}
              <div className="relative group flex-1 flex flex-col">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${process.color} rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur`} />
                
                {/* Card Content */}
                <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                  {/* Phase Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${process.color} text-white font-bold text-xl mb-6 relative z-10`}>
                    {t(process.phaseKey)}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <process.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {t(process.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed flex-grow">
                    {t(process.descriptionKey)}
                  </p>

                  {/* Decorative Arrow */}
                  {idx < processes.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 w-8 h-8 ltr:-right-8 rtl:-left-8">
                      <svg className={`w-full h-full text-primary/30 group-hover:text-primary/50 transition-colors duration-300 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7 7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-foreground/60 mb-6">
            {t('process.cta.text')}
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            {t('process.cta.button')}
          </button>
        </div>
      </div>
    </section>
  )
}
