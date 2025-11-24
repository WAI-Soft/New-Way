'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

const partnerLogos = [
  { name: 'Partner 1', logo: '/partners/1.png' },
  { name: 'Partner 2', logo: '/partners/2.png' },
  { name: 'Partner 3', logo: '/partners/3.png' },
  { name: 'Partner 4', logo: '/partners/4.png' },
  { name: 'Partner 5', logo: '/partners/5.png' },
  { name: 'Partner 6', logo: '/partners/6.png' },
  { name: 'Partner 7', logo: '/partners/7.png' },
  { name: 'Partner 8', logo: '/partners/8.png' },
  { name: 'Partner 9', logo: '/partners/9.png' },
  { name: 'Partner 10', logo: '/partners/10.png' },
  { name: 'Partner 11', logo: '/partners/11.png' },
  { name: 'Partner 12', logo: '/partners/12.png' },
]

export function Partners() {
  const itemsPerSlide = 3
  const totalSlides = Math.ceil(partnerLogos.length / itemsPerSlide)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, dir } = useLanguage()

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        // Reverse direction in RTL mode
        return dir === 'rtl'
          ? (prev - 1 + totalSlides) % totalSlides
          : (prev + 1) % totalSlides
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, totalSlides, dir])

  return (
    <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">{t('partners.title')}</h2>
          <p className="text-lg text-foreground/60">
            {t('partners.subtitle')}
          </p>
        </div>

        {/* Partners Carousel */}
        <div className={`relative transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: dir === 'rtl' ? `translateX(${currentSlide * 100}%)` : `translateX(-${currentSlide * 100}%)` }}>
              {Array.from({ length: totalSlides }).map((_, slideIdx) => (
                <div key={slideIdx} className="min-w-full">
                  <div 
                    className="grid grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg relative bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: 'url(/Green-image.png)' }}
                  >
                    {/* Overlay for better contrast */}
                    <div className="absolute inset-0 bg-black/20 rounded-lg" />
                    
                    {partnerLogos
                      .slice(slideIdx * itemsPerSlide, (slideIdx + 1) * itemsPerSlide)
                      .map((partner, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-center h-24 sm:h-32 relative z-10"
                        >
                          <div className="w-full h-full rounded-lg bg-white/90 p-4 flex items-center justify-center hover:bg-white transition-all">
                            <img 
                              src={partner.logo} 
                              alt={partner.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx)
                  setIsAutoPlay(false)
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'bg-primary w-8' : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
