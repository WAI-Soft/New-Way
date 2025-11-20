'use client'

import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface Client {
  name: string
  logo: string
}

const clients: Client[] = [
  { name: 'Akaria', logo: '/clients/Akaria.png' },
  { name: 'Almajdouie', logo: '/clients/Almajdouie.png' },
  { name: 'Education & Training', logo: '/clients/Education__Training.png' },
  { name: 'IMBSU', logo: '/clients/IMBSU.png' },
  { name: 'Client 5', logo: '/clients/IMG_2206.png' },
  { name: 'Client 6', logo: '/clients/IMG_2207.png' },
  { name: 'KSMC', logo: '/clients/KSMC.png' },
  { name: 'MOFA', logo: '/clients/MOFA.png' },
  { name: 'MOI', logo: '/clients/MOI.png' },
  { name: 'MOIMR', logo: '/clients/MOIMR.png' },
  { name: 'Momrah', logo: '/clients/Momrah.png' },
  { name: 'National Guard Health Affairs', logo: '/clients/National_Guard_Health_Affairs.png' },
  { name: 'NeC', logo: '/clients/NeC.png' },
  { name: 'PSBAU', logo: '/clients/PSBAU.png' },
  { name: 'Saudi Payments', logo: '/clients/Saudi_Payments.png' },
  { name: 'STC Solutions', logo: '/clients/STC_Solutions.png' },
]

export function ClientGrid() {
  const { elementRef, isVisible } = useScrollAnimation()

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
            Our <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Proud to serve leading organizations across multiple industries
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-1000`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <div className="group relative">
                {/* Gradient border effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-40 transition-opacity blur" />
                
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 h-32 flex items-center justify-center border border-border/40 group-hover:border-primary/50 transition-all duration-300 group-hover:scale-105">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={80}
                    className="object-contain max-h-20 w-auto grayscale group-hover:grayscale-0 transition-all duration-300"
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
