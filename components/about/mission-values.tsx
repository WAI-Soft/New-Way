'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Target, Eye, Heart } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower organizations with cutting-edge cybersecurity and IT solutions that protect their digital assets, ensure compliance, and enable business growth in an increasingly connected world.',
    gradient: 'from-[#50af9b] to-[#3b9482]'
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be the most trusted partner in enterprise security, recognized globally for our innovation, expertise, and unwavering commitment to protecting organizations from evolving cyber threats.',
    gradient: 'from-[#60c9b3] to-[#50af9b]'
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'Integrity, Excellence, Innovation, and Client Success. We believe in building lasting relationships through transparency, delivering exceptional results, and continuously evolving to meet the challenges of tomorrow.',
    gradient: 'from-[#70d9c3] to-[#60c9b3]'
  }
]

export function MissionValues() {
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
            What <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Drives Us</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Our core principles guide everything we do
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            
            return (
              <div
                key={index}
                className={`transition-all duration-1000`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
                }}
              >
                <div className="relative group h-full">
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity blur`} />
                  
                  {/* Card content */}
                  <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-foreground">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/60 leading-relaxed flex-grow">
                      {value.description}
                    </p>

                    {/* Decorative accent */}
                    <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${value.gradient} rounded-full`} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
