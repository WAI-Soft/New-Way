'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'
import { Shield, Zap, Award, Users, Globe, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    titleKey: 'partners.benefit.security.title',
    descriptionKey: 'partners.benefit.security.description',
  },
  {
    icon: Zap,
    titleKey: 'partners.benefit.implementation.title',
    descriptionKey: 'partners.benefit.implementation.description',
  },
  {
    icon: Award,
    titleKey: 'partners.benefit.expertise.title',
    descriptionKey: 'partners.benefit.expertise.description',
  },
  {
    icon: Users,
    titleKey: 'partners.benefit.support.title',
    descriptionKey: 'partners.benefit.support.description',
  },
  {
    icon: Globe,
    titleKey: 'partners.benefit.reach.title',
    descriptionKey: 'partners.benefit.reach.description',
  },
  {
    icon: TrendingUp,
    titleKey: 'partners.benefit.innovation.title',
    descriptionKey: 'partners.benefit.innovation.description',
  },
]

export function PartnershipBenefits() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'en' && t('partners.benefits.title')}
            {language === 'en' && t('partners.benefits.title') && t('partners.benefits.highlight') && ' '}
            {t('partners.benefits.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('partners.benefits.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            {t('partners.benefits.subtitle')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.titleKey}
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border/40 rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#50af9b] to-[#3b9482] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{t(benefit.titleKey)}</h3>
                  <p className="text-foreground/60 leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 via-cyan-400/10 to-primary/10 border border-primary/20 rounded-2xl p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {t('partners.cta.title')}
            </h3>
            <p className="text-lg text-foreground/60 mb-8 max-w-2xl mx-auto">
              {t('partners.cta.subtitle')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
            >
              {t('partners.cta.button')}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
