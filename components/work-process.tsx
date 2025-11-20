'use client'

import { Search, Settings, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const processes = [
  {
    phase: '01',
    title: 'Assessment',
    description: 'Analyze client needs and IT infrastructure to design tailored cybersecurity and IT solutions',
    icon: Search,
    color: 'from-[#50af9b] to-[#3b9482]',
    delay: '0'
  },
  {
    phase: '02',
    title: 'Implementation',
    description: 'Deploy identity management, multi-factor authentication, and security measures into the system',
    icon: Settings,
    color: 'from-[#60c9b3] to-[#50af9b]',
    delay: '200'
  },
  {
    phase: '03',
    title: 'Monitoring & Support',
    description: 'Provide continuous system monitoring, log management, and 24/7 support to ensure security',
    icon: Shield,
    color: 'from-[#70d9c3] to-[#60c9b3]',
    delay: '400'
  }
]

export function WorkProcess() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className={`text-4xl sm:text-5xl font-bold text-balance mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Work <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Process</span>
          </h2>
          <p 
            className={`text-lg text-foreground/60 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A proven methodology to secure your enterprise infrastructure
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {processes.map((process, idx) => (
            <div
              key={idx}
              className={`relative transition-all duration-1000`}
              style={{ 
                transitionDelay: `${process.delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              {/* Card */}
              <div className="relative group">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${process.color} rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity blur`} />
                
                {/* Card Content */}
                <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full">
                  {/* Phase Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${process.color} text-white font-bold text-xl mb-6 relative z-10`}>
                    {process.phase}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <process.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {process.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/60 leading-relaxed">
                    {process.description}
                  </p>

                  {/* Decorative Arrow */}
                  {idx < processes.length - 1 && (
                    <div className="hidden md:block absolute top-1/4 -right-4 w-8 h-8">
                      <svg className="w-full h-full text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-foreground/60 mb-6">
            Ready to strengthen your security posture?
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
            Start Your Assessment
          </button>
        </div>
      </div>
    </section>
  )
}
