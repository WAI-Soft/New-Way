'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'
import { TestimonialCard } from './testimonial-card'

interface Testimonial {
  quoteKey: string
  authorKey: string
  positionKey: string
  companyKey: string
}

const testimonialsData: Testimonial[] = [
  {
    quoteKey: 'clients.testimonial1.quote',
    authorKey: 'clients.testimonial1.author',
    positionKey: 'clients.testimonial1.position',
    companyKey: 'clients.testimonial1.company'
  },
  {
    quoteKey: 'clients.testimonial2.quote',
    authorKey: 'clients.testimonial2.author',
    positionKey: 'clients.testimonial2.position',
    companyKey: 'clients.testimonial2.company'
  },
  {
    quoteKey: 'clients.testimonial3.quote',
    authorKey: 'clients.testimonial3.author',
    positionKey: 'clients.testimonial3.position',
    companyKey: 'clients.testimonial3.company'
  }
]

export function TestimonialsSection() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t('clients.testimonials.title')}
            {t('clients.testimonials.title') && t('clients.testimonials.highlight') && ' '}
            {t('clients.testimonials.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('clients.testimonials.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('clients.testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <TestimonialCard 
                quote={t(testimonial.quoteKey)}
                author={t(testimonial.authorKey)}
                position={t(testimonial.positionKey)}
                company={t(testimonial.companyKey)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
