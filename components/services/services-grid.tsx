'use client'

import { ServiceCard } from './service-card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { servicesData } from '@/lib/services-data'
import { useLanguage } from '@/lib/language-context'

export function ServicesGrid() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t } = useLanguage()

  // Map service slugs to translation key prefixes
  const getServiceTranslationKey = (slug: string): string => {
    const keyMap: Record<string, string> = {
      'identity-access-management': 'iam',
      'single-sign-on': 'sso',
      'privilege-access-management': 'pam',
      'log-management': 'log',
      'multi-factor-authentication': 'mfa',
      'cybersecurity': 'cybersecurity',
    }
    return keyMap[slug] || slug
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {servicesData.map((service, idx) => {
            const serviceKey = getServiceTranslationKey(service.slug)
            const translatedService = {
              ...service,
              title: t(`services.${serviceKey}.title`),
              description: t(`services.${serviceKey}.description`),
              features: service.features.map((_, featureIdx) => 
                t(`service.${serviceKey}.feature${featureIdx + 1}`)
              ),
            }

            return (
              <div
                key={service.slug}
                className="transition-all duration-1000 flex"
                style={{
                  transitionDelay: `${idx * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <ServiceCard {...translatedService} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
