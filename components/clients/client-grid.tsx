'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface Client {
  name: string
  logo: string
  category: string
  description: string
}

const clients: Client[] = [
  { 
    name: 'Ministry of Foreign Affairs', 
    logo: '/clients/MOFA.png',
    category: 'Government',
    description: 'Leading government institution implementing advanced security solutions for diplomatic services and international relations.'
  },
  { 
    name: 'Ministry of Interior', 
    logo: '/clients/MOI.png',
    category: 'Government',
    description: 'National security agency deploying cutting-edge cybersecurity infrastructure for public safety and national defense.'
  },
  { 
    name: 'National Guard Health Affairs', 
    logo: '/clients/National_Guard_Health_Affairs.png',
    category: 'Healthcare',
    description: 'Premier healthcare provider delivering patient-centric medical services with advanced security and compliance solutions.'
  },
  { 
    name: 'KSMC', 
    logo: '/clients/KSMC.png',
    category: 'Healthcare',
    description: 'Leading medical center providing specialized healthcare services with state-of-the-art security infrastructure.'
  },
  { 
    name: 'Saudi Payments', 
    logo: '/clients/Saudi_Payments.png',
    category: 'Financial Services',
    description: 'Financial institution providing secure payment solutions with advanced fraud detection and data protection systems.'
  },
  { 
    name: 'STC Solutions', 
    logo: '/clients/STC_Solutions.png',
    category: 'Technology',
    description: 'Telecommunications leader implementing enterprise-grade security solutions for digital transformation initiatives.'
  },
  { 
    name: 'Almajdouie', 
    logo: '/clients/Almajdouie.png',
    category: 'Logistics',
    description: 'Logistics company securing supply chain operations with comprehensive cybersecurity and monitoring solutions.'
  },
  { 
    name: 'Education & Training', 
    logo: '/clients/Education__Training.png',
    category: 'Education',
    description: 'Educational institution transforming learning with secure online platforms and personalized student experiences.'
  },
  { 
    name: 'PSBAU', 
    logo: '/clients/PSBAU.png',
    category: 'Education',
    description: 'University implementing advanced security solutions for research data protection and campus-wide infrastructure.'
  },
  { 
    name: 'Momrah', 
    logo: '/clients/Momrah.png',
    category: 'Government',
    description: 'Municipal affairs authority deploying smart city security solutions for urban development and public services.'
  },
  { 
    name: 'MOIMR', 
    logo: '/clients/MOIMR.png',
    category: 'Government',
    description: 'Government agency implementing secure digital platforms for administrative services and citizen engagement.'
  },
  { 
    name: 'NeC', 
    logo: '/clients/NeC.png',
    category: 'Technology',
    description: 'Technology company delivering innovative security solutions for enterprise digital transformation projects.'
  },
]

function ClientCard({ client, index, isVisible }: { client: Client; index: number; isVisible: boolean }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className={`transition-all duration-1000`}
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="relative h-full perspective-1000">
        {/* Gradient glow effect */}
        <div className={`absolute -inset-0.5 bg-gradient-to-r from-primary via-cyan-400 to-primary rounded-2xl transition-all duration-500 blur-lg ${isFlipped ? 'opacity-20' : 'opacity-0'}`} />
        
        {/* Flip container */}
        <div 
          className="relative w-full h-full transition-transform duration-700 transform-style-3d" 
          style={{ 
            minHeight: '320px',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front side */}
          <div className="absolute inset-0 backface-hidden">
            <div className="bg-card border border-border/40 rounded-2xl p-6 transition-all duration-500 shadow-xl h-full flex flex-col">
              {/* Logo */}
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-4 p-3 border border-border/20 shadow-sm">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={60}
                  height={60}
                  className="object-contain w-full h-full filter brightness-100"
                />
              </div>

              {/* Company name */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {client.name}
              </h3>

              {/* Category tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                  {client.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-foreground/60 leading-relaxed flex-grow">
                {client.description}
              </p>
            </div>
          </div>

          {/* Back side */}
          <div className="absolute inset-0 backface-hidden" style={{ transform: 'rotateY(180deg)' }}>
            <div className="bg-white border border-primary/30 rounded-2xl p-8 h-full flex items-center justify-center shadow-xl">
              <Image
                src={client.logo}
                alt={client.name}
                width={250}
                height={250}
                className="object-contain max-w-full max-h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ClientGrid() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/20" ref={elementRef}>
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
            Trusted by leading organizations across government, healthcare, finance, and technology sectors
          </p>
        </div>

        {/* Client cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <ClientCard key={index} client={client} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
