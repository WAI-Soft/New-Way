'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

const partners = [
  { id: 1, name: 'Partner 1', logo: '/partners/1.png', category: 'Security' },
  { id: 2, name: 'Partner 2', logo: '/partners/2.png', category: 'Cloud' },
  { id: 3, name: 'Partner 3', logo: '/partners/3.png', category: 'Identity Management' },
  { id: 4, name: 'Partner 4', logo: '/partners/4.png', category: 'Integration' },
  { id: 5, name: 'Partner 5', logo: '/partners/5.png', category: 'Security' },
  { id: 6, name: 'Partner 6', logo: '/partners/6.png', category: 'Cloud' },
  { id: 7, name: 'Partner 7', logo: '/partners/7.png', category: 'Identity Management' },
  { id: 8, name: 'Partner 8', logo: '/partners/8.png', category: 'Integration' },
  { id: 9, name: 'Partner 9', logo: '/partners/9.png', category: 'Security' },
  { id: 10, name: 'Partner 10', logo: '/partners/10.png', category: 'Cloud' },
  { id: 11, name: 'Partner 11', logo: '/partners/11.png', category: 'Identity Management' },
  { id: 12, name: 'Partner 12', logo: '/partners/12.png', category: 'Integration', isPlaceholder: true },
]

// Split partners into 3 columns
const column1 = partners.slice(0, 4)   // Partners 1-4
const column2 = partners.slice(4, 8)   // Partners 5-8
const column3 = partners.slice(8, 12)  // Partners 9-12

export function PartnerGrid() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'en' && t('partners.grid.title')}
            {language === 'en' && t('partners.grid.title') && t('partners.grid.highlight') && ' '}
            {t('partners.grid.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('partners.grid.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            {t('partners.grid.subtitle')}
          </p>
        </div>

        {/* 3 Columns with Vertical Lines */}
        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Animated Vertical dividing lines */}
          <div 
            className={`hidden lg:block absolute left-1/3 w-px bg-gradient-to-b from-transparent via-primary to-transparent transition-all duration-1500 ${
              isVisible ? 'opacity-40 top-0 bottom-0' : 'opacity-0 top-1/2 bottom-1/2'
            }`} 
          />
          <div 
            className={`hidden lg:block absolute left-2/3 w-px bg-gradient-to-b from-transparent via-primary to-transparent transition-all duration-1500 delay-300 ${
              isVisible ? 'opacity-40 top-0 bottom-0' : 'opacity-0 top-1/2 bottom-1/2'
            }`}
          />

          {/* Column 1 - Slide from left */}
          <div className={`flex-1 lg:px-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            <div className="space-y-6">
              {column1.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                  }}
                >
                  <div className="bg-white rounded-3xl p-6 h-40 flex items-center justify-center border-2 border-foreground/20 hover:border-4 hover:border-primary hover:scale-110 hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/40 transition-all duration-500 group hover:rotate-1 cursor-pointer">
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-100 group-hover:brightness-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 - Slide from bottom */}
          <div className={`flex-1 lg:px-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            <div className="space-y-6">
              {column2.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${(index + 4) * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                  }}
                >
                  <div className="bg-white rounded-3xl p-6 h-40 flex items-center justify-center border-2 border-foreground/20 hover:border-4 hover:border-primary hover:scale-110 hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/40 transition-all duration-500 group hover:-rotate-1 cursor-pointer">
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-100 group-hover:brightness-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 - Slide from right */}
          <div className={`flex-1 lg:px-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            <div className="space-y-6">
              {column3.map((partner, index) => (
                <div
                  key={partner.id}
                  className={`transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${(index + 8) * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'
                  }}
                >
                  <div className={`bg-white rounded-3xl p-6 h-40 flex items-center justify-center transition-all duration-500 group cursor-pointer ${
                    partner.isPlaceholder 
                      ? 'border-2 border-dashed border-foreground/20 hover:border-4 hover:border-primary/80 hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/30' 
                      : 'border-2 border-foreground/20 hover:border-4 hover:border-primary hover:scale-110 hover:shadow-[0_20px_60px_-15px] hover:shadow-primary/40 hover:rotate-1'
                  }`}>
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain filter brightness-100 group-hover:brightness-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
