'use client'

import { Award, Users, Clock, Shield } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const benefits = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Over 10 years of experience delivering enterprise security solutions across multiple industries.',
    gradient: 'from-[#50af9b] to-[#3b9482]',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: '24/7 expert support team ready to assist you with any security challenges or questions.',
    gradient: 'from-[#60c9b3] to-[#50af9b]',
  },
  {
    icon: Clock,
    title: 'Rapid Deployment',
    description: 'Quick implementation with minimal disruption to your business operations and workflows.',
    gradient: 'from-[#70d9c3] to-[#60c9b3]',
  },
  {
    icon: Shield,
    title: 'Proven Security',
    description: 'Battle-tested solutions protecting 500+ organizations with 99.9% uptime guarantee.',
    gradient: 'from-[#50af9b] to-[#70d9c3]',
  },
]

export function WhyChooseUs() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground/5" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">
              New Way Solutions
            </span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Partner with us for comprehensive security solutions backed by expertise and reliability
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="transition-all duration-1000"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <div className="bg-card border border-border/40 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-4`}
                >
                  <benefit.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>

                {/* Description */}
                <p className="text-sm text-foreground/60 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
