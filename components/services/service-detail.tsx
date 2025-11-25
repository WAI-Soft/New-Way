'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { servicesData } from '@/lib/services-data'
import { servicesTranslations } from '@/lib/services-data-translations'
import { useLanguage } from '@/lib/language-context'
import { notFound } from 'next/navigation'

interface ServiceDetailProps {
  slug: string
}

export function ServiceDetail({ slug }: ServiceDetailProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { t, language } = useLanguage()
  
  const service = servicesData.find(s => s.slug === slug)
  const serviceTranslation = servicesTranslations[slug]
  
  if (!service) {
    notFound()
  }
  
  const Icon = service.icon
  
  // Helper function to get translated text
  const getTranslation = (key: { en: string; ar: string } | undefined) => {
    if (!key) return ''
    return language === 'ar' ? key.ar : key.en
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/services"
          className={`inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 ${
            isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          } transition-all duration-500`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{t('service.detail.backToServices')}</span>
        </Link>

        {/* Header Section */}
        <div className={`mb-12 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {serviceTranslation ? getTranslation(serviceTranslation.title) : service.title}
          </h1>
          <p className="text-xl text-foreground/70 max-w-4xl">
            {serviceTranslation ? getTranslation(serviceTranslation.description) : service.description}
          </p>
        </div>

        {/* Main Image */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="relative max-w-4xl mx-auto h-[300px] rounded-2xl overflow-hidden border border-border/40 shadow-2xl">
            <div className={language === 'ar' ? 'absolute inset-0 -scale-x-100' : 'absolute inset-0'}>
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            
            {/* Title Overlay */}
            <div className={`absolute bottom-0 p-6 ${language === 'ar' ? 'right-0' : 'left-0'}`}>
              <div className={`flex items-center gap-3 ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-xl backdrop-blur-sm`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h2 className={`text-xl sm:text-2xl font-bold text-white drop-shadow-lg ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {serviceTranslation ? getTranslation(serviceTranslation.title) : service.title}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Full Description */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="prose prose-lg max-w-none">
            {(serviceTranslation ? getTranslation(serviceTranslation.fullDescription) : service.fullDescription).split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 leading-relaxed mb-6 text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {serviceTranslation ? getTranslation(serviceTranslation.howItWorks.title) : service.howItWorks.title}
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            {serviceTranslation ? getTranslation(serviceTranslation.howItWorks.content) : service.howItWorks.content}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.howItWorks.points.map((point, idx) => {
              const translatedPoint = serviceTranslation?.howItWorks.points[idx]
              return (
                <div 
                  key={idx}
                  className="bg-card border border-border/40 rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                >
                  <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {translatedPoint ? getTranslation(translatedPoint.title) : point.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {translatedPoint ? getTranslation(translatedPoint.description) : point.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Adding Value Section */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {serviceTranslation ? getTranslation(serviceTranslation.addingValue.title) : service.addingValue.title}
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            {serviceTranslation ? getTranslation(serviceTranslation.addingValue.content) : service.addingValue.content}
          </p>
          
          <div className="bg-gradient-to-br from-card to-card/50 border border-border/40 rounded-2xl p-8">
            <ul className="space-y-4">
              {service.addingValue.benefits.map((benefit, idx) => {
                const translatedBenefit = serviceTranslation?.addingValue.benefits[idx]
                return (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className={`w-6 h-6 flex-shrink-0 mt-0.5 text-primary`} />
                    <span className="text-foreground/80 text-lg leading-relaxed">
                      {translatedBenefit ? getTranslation(translatedBenefit) : benefit}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <p className="text-foreground/70 mt-6 text-lg leading-relaxed">
            {t('service.detail.closingNote')}
          </p>
        </div>

        {/* Process Section */}
        <div className={`mb-16 transition-all duration-1000 delay-600 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {serviceTranslation ? getTranslation(serviceTranslation.process.title) : service.process.title}
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            {serviceTranslation ? getTranslation(serviceTranslation.process.content) : service.process.content}
          </p>
          
          <div className="space-y-6">
            {service.process.steps.map((step, idx) => {
              const translatedStep = serviceTranslation?.process.steps[idx]
              return (
                <div 
                  key={idx}
                  className="relative bg-card border border-border/40 rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {translatedStep ? getTranslation(translatedStep.title) : step.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {translatedStep ? getTranslation(translatedStep.description) : step.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          <p className="text-foreground/70 mt-8 text-lg leading-relaxed">
            {t('service.detail.processNote')}
          </p>
        </div>

        {/* Closing Statement */}
        <div className={`bg-gradient-to-br from-primary/10 via-cyan-400/10 to-primary/10 border border-primary/20 rounded-2xl p-8 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-foreground/80 leading-relaxed mb-6">
            {serviceTranslation ? getTranslation(serviceTranslation.closingStatement) : service.closingStatement}
          </p>
          <Link 
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105`}
          >
            {t('service.detail.getStarted')}
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

