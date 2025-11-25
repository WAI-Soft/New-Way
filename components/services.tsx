'use client'

import { Shield, Key, Lock, FileText, Smartphone, ShieldCheck } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

export function Services() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()

  const services = [
    {
      icon: Key,
      titleKey: 'services.iam.title',
      descriptionKey: 'services.iam.description',
      gradient: 'from-[#50af9b] to-[#3b9482]',
    },
    {
      icon: Shield,
      titleKey: 'services.sso.title',
      descriptionKey: 'services.sso.description',
      gradient: 'from-[#60c9b3] to-[#50af9b]',
    },
    {
      icon: Lock,
      titleKey: 'services.pam.title',
      descriptionKey: 'services.pam.description',
      gradient: 'from-[#70d9c3] to-[#60c9b3]',
    },
    {
      icon: FileText,
      titleKey: 'services.log.title',
      descriptionKey: 'services.log.description',
      gradient: 'from-[#50af9b] to-[#70d9c3]',
    },
    {
      icon: Smartphone,
      titleKey: 'services.mfa.title',
      descriptionKey: 'services.mfa.description',
      gradient: 'from-[#3b9482] to-[#60c9b3]',
    },
    {
      icon: ShieldCheck,
      titleKey: 'services.cybersecurity.title',
      descriptionKey: 'services.cybersecurity.description',
      gradient: 'from-[#60c9b3] to-[#3b9482]',
    },
  ]

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
            {language === 'en' && t('services.title')}
            {t('services.title.highlight') && ' '}
            {t('services.title.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('services.title.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('services.subtitle')}
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
                <h3 className="text-xl font-bold text-foreground mb-4">{t(service.titleKey)}</h3>

                {/* Description */}
                <p className="text-foreground/60 leading-relaxed flex-grow">{t(service.descriptionKey)}</p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">{t('services.learnMore')}</span>
                  <svg
                    className="w-4 h-4 ms-2 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform"
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
