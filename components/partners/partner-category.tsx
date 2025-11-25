'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

const partnersByCategory = {
  security: [
    { id: 1, name: 'Partner 1', logo: '/partners/1.png' },
    { id: 5, name: 'Partner 5', logo: '/partners/5.png' },
    { id: 9, name: 'Partner 9', logo: '/partners/9.png' },
  ],
  cloud: [
    { id: 2, name: 'Partner 2', logo: '/partners/2.png' },
    { id: 6, name: 'Partner 6', logo: '/partners/6.png' },
    { id: 10, name: 'Partner 10', logo: '/partners/10.png' },
  ],
  identity: [
    { id: 3, name: 'Partner 3', logo: '/partners/3.png' },
    { id: 7, name: 'Partner 7', logo: '/partners/7.png' },
    { id: 11, name: 'Partner 11', logo: '/partners/11.png' },
  ],
  integration: [
    { id: 4, name: 'Partner 4', logo: '/partners/4.png' },
    { id: 8, name: 'Partner 8', logo: '/partners/8.png' },
    { id: 12, name: 'Partner 12', logo: '/partners/12.png' },
  ],
}

export function PartnerCategory() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'en' && t('partners.category.title')}
            {language === 'en' && t('partners.category.title') && t('partners.category.highlight') && ' '}
            {t('partners.category.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('partners.category.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            {t('partners.category.subtitle')}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {Object.entries(partnersByCategory).map(([category, partners], categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
                    {t(`partners.category.${category}`)}
                  </h3>
                  <span className="px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                    {partners.length} {t('partners.category.partnersCount')}
                  </span>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-[#50af9b] to-[#3b9482] rounded-full" />
              </div>

              {/* Partners Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {partners.map((partner, index) => (
                  <div
                    key={partner.id}
                    className={`transition-all duration-1000 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${(categoryIndex * 200) + (index * 100)}ms` }}
                  >
                    <div className="bg-white rounded-xl p-6 h-28 flex items-center justify-center border border-border/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                      <div className="relative w-full h-full">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
