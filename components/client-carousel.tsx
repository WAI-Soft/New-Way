'use client'

import { useState, useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

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
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const { elementRef, isVisible } = useScrollAnimation()

  const anglePerCard = 360 / clients.length

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % clients.length
        setRotation(nextIndex * anglePerCard)
        return nextIndex
      })
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlay, anglePerCard])

  const handleCardClick = (index: number) => {
    setActiveIndex(index)
    setRotation(index * anglePerCard)
    setIsAutoPlay(false) // Stop auto-play when user interacts
  }

  return (
    <section id="clients" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-foreground/5 to-background" ref={elementRef}>
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Our <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-foreground/60">Trusted by leading enterprises worldwide</p>
        </div>

        {/* 3D Carousel Container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Carousel */}
          <div className="relative w-full lg:w-2/3 h-48 sm:h-56 perspective">
            <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
              {clients.map((client, idx) => {
                const angle = (idx * 360) / clients.length
                const isActive = idx === activeIndex
                const distance = 200

                return (
                  <div
                    key={idx}
                    onClick={() => handleCardClick(idx)}
                    className={`absolute w-full max-w-xs h-full cursor-pointer transition-all duration-700 left-1/2 -translate-x-1/2 ${
                      isActive ? 'z-10 scale-100' : 'z-0 scale-75 opacity-50 hover:opacity-75'
                    }`}
                    style={{
                      transform: `translateX(-50%) rotateY(${angle - rotation}deg) translateZ(${distance}px)`,
                      transformStyle: 'preserve-3d',
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

          {/* Selector Dots - Divided into 2 Groups Side by Side */}
          <div className="flex flex-row gap-6 justify-center">
            {/* First Group (Clients 1-8) */}
            <div className="flex flex-col gap-3">
              {clients.slice(0, 8).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCardClick(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'bg-primary h-8 w-3'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Select client ${idx + 1}`}
                />
              ))}
            </div>
            
            {/* Second Group (Clients 9-16) */}
            <div className="flex flex-col gap-3">
              {clients.slice(8, 16).map((_, idx) => (
                <button
                  key={idx + 8}
                  onClick={() => handleCardClick(idx + 8)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx + 8 === activeIndex
                      ? 'bg-primary h-8 w-3'
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Select client ${idx + 9}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Fallback for browsers without 3D support */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-6">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-center ${
                idx === activeIndex
                  ? 'border-primary bg-white shadow-lg'
                  : 'border-border/40 bg-white/80 opacity-60'
              }`}
              onClick={() => {
                setActiveIndex(idx)
                setIsAutoPlay(false)
              }}
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="w-full h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
