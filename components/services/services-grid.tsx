'use client'

import { ServiceCard } from './service-card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { servicesData } from '@/lib/services-data'

export function ServicesGrid() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {servicesData.map((service, idx) => (
            <div
              key={service.slug}
              className="transition-all duration-1000 flex"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
