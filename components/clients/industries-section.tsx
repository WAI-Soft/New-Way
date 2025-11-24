'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'
import { Building2, Heart, Landmark, GraduationCap, ShoppingBag, Factory } from 'lucide-react'

interface Industry {
  nameKey: string
  icon: React.ElementType
  descriptionKey: string
}

const industriesData: Industry[] = [
  {
    nameKey: 'clients.industries.government',
    icon: Landmark,
    descriptionKey: 'clients.industries.government.description'
  },
  {
    nameKey: 'clients.industries.healthcare',
    icon: Heart,
    descriptionKey: 'clients.industries.healthcare.description'
  },
  {
    nameKey: 'clients.industries.finance',
    icon: Building2,
    descriptionKey: 'clients.industries.finance.description'
  },
  {
    nameKey: 'clients.industries.education',
    icon: GraduationCap,
    descriptionKey: 'clients.industries.education.description'
  },
  {
    nameKey: 'clients.industries.retail',
    icon: ShoppingBag,
    descriptionKey: 'clients.industries.retail.description'
  },
  {
    nameKey: 'clients.industries.manufacturing',
    icon: Factory,
    descriptionKey: 'clients.industries.manufacturing.description'
  }
]

export function IndustriesSection() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/30 to-background" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('clients.industries.title')}
            {t('clients.industries.title') && t('clients.industries.highlight') && ' '}
            {t('clients.industries.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('clients.industries.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('clients.industries.subtitle')}
          </p>
        </div>

        {/* Industries grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {industriesData.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className={`transition-all duration-1000 flex`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="group relative w-full h-full">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur" />
                  
                  {/* Card content */}
                  <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-cyan-400 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {t(industry.nameKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/60 leading-relaxed">
                      {t(industry.descriptionKey)}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
