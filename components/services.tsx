'use client'

import { Shield, Key, Lock, FileText, Smartphone, ShieldCheck } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const services = [
  {
    icon: Key,
    title: 'Identity & Access Management (IAM)',
    description: "In today's digital landscape, securing access to your critical systems and data is more important than ever",
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Single Sign-On (SSO)',
    description: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Lock,
    title: 'Privilege Access Management (PAM)',
    description: "Securing access to sensitive systems and data is critical in today's cybersecurity landscape, and that's where Privilege Access Management (PAM) comes in",
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: FileText,
    title: 'Log Management',
    description: "Managing logs is a critical aspect of any organization's cybersecurity and compliance strategy",
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Multi-Factor Authentication (MFA)',
    description: "In today's digital world, passwords alone are no longer enough to secure sensitive data and systems",
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'In an age where cyber threats are constantly evolving, ensuring the protection of your digital assets is more important than ever',
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export function Services() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-foreground/5"
      ref={elementRef}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Our <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive security solutions tailored to protect your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-1000`}
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              {/* Gradient Border Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur`}
              />

              {/* Card Content */}
              <div className="relative bg-card border border-border/40 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}
                >
                  <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed flex-grow">{service.description}</p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Learn more</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
