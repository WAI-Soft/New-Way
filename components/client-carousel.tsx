'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

const clients = [
  {
    name: 'Akaria',
    logo: '/clients/Akaria.png',
  },
  {
    name: 'Almajdouie',
    logo: '/clients/Almajdouie.png',
  },
  {
    name: 'Education & Training',
    logo: '/clients/Education__Training.png',
  },
  {
    name: 'IMBSU',
    logo: '/clients/IMBSU.png',
  },
  {
    name: 'KSMC',
    logo: '/clients/KSMC.png',
  },
  {
    name: 'MOFA',
    logo: '/clients/MOFA.png',
  },
  {
    name: 'MOI',
    logo: '/clients/MOI.png',
  },
  {
    name: 'MOIMR',
    logo: '/clients/MOIMR.png',
  },
  {
    name: 'Momrah',
    logo: '/clients/Momrah.png',
  },
  {
    name: 'National Guard Health Affairs',
    logo: '/clients/National_Guard_Health_Affairs.png',
  },
  {
    name: 'NeC',
    logo: '/clients/NeC.png',
  },
  {
    name: 'PSBAU',
    logo: '/clients/PSBAU.png',
  },
  {
    name: 'Saudi Payments',
    logo: '/clients/Saudi_Payments.png',
  },
  {
    name: 'STC Solutions',
    logo: '/clients/STC_Solutions.png',
  },
  {
    name: 'Client 15',
    logo: '/clients/IMG_2206.png',
  },
  {
    name: 'Client 16',
    logo: '/clients/IMG_2207.png',
  },
]

export function ClientCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [isAutoPlay] = useState(true)
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, dir, language } = useLanguage()

  const anglePerCard = 360 / clients.length

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // Reverse direction in RTL mode
        const nextIndex = dir === 'rtl' 
          ? (prev - 1 + clients.length) % clients.length
          : (prev + 1) % clients.length
        setRotation(nextIndex * anglePerCard)
        return nextIndex
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, anglePerCard, dir])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setRotation(index * anglePerCard)
    // Keep auto-play running even after user interaction
  }

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-foreground/5 to-background" ref={elementRef}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            {language === 'en' ? (
              <>
                {t('clients.title')}
                {t('clients.title') && t('clients.title.highlight') && ' '}
                {t('clients.title.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('clients.title.highlight')}</span>}
              </>
            ) : (
              <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('clients.title')}</span>
            )}
          </h2>
          <p className="text-lg text-foreground/60">{t('clients.subtitle')}</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="flex items-center justify-center min-h-[400px]">
          {/* Carousel */}
          <div className="relative w-full max-w-md h-64 sm:h-72 mx-auto">
            <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
              {clients.map((client, idx) => {
                const angle = (idx * 360) / clients.length
                const isActive = idx === activeIndex
                const distance = 250

                return (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    className={`absolute w-80 h-48 cursor-pointer transition-all duration-700 ${
                      isActive ? 'z-10 scale-100' : 'z-0 scale-75 opacity-50 hover:opacity-75'
                    }`}
                    style={{
                      transform: `rotateY(${dir === 'rtl' ? -(angle - rotation) : (angle - rotation)}deg) translateZ(${distance}px)`,
                      transformStyle: 'preserve-3d',
                      left: '50%',
                      top: '50%',
                      marginLeft: '-160px',
                      marginTop: '-96px',
                    }}
                  >
                    <div className="h-full p-8 rounded-xl border border-border/40 bg-white shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center">
                      {/* Client Logo */}
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={client.name}
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
