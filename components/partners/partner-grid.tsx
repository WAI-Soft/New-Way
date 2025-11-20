'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

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
  { id: 12, name: 'Partner 12', logo: '/partners/12.png', category: 'Integration' },
]

export function PartnerGrid() {
  const { elementRef, isVisible } = useScrollAnimation()

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
            Our Strategic Partners
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            We collaborate with industry-leading technology providers to deliver comprehensive solutions
          </p>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl p-8 h-32 flex items-center justify-center border border-border/40 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
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
    </section>
  )
}
