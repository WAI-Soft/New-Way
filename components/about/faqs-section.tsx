'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  questionKey: string
  answerKeys: string[]
}

function FAQItem({ 
  faq, 
  index, 
  isVisible, 
  isOpen, 
  onToggle,
  t
}: { 
  faq: FAQ; 
  index: number; 
  isVisible: boolean;
  isOpen: boolean;
  onToggle: () => void;
  t: (key: string) => string;
}) {
  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="border border-border/40 rounded-xl hover:border-primary/50 transition-colors bg-card overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-6 text-start hover:bg-card/50 transition-colors"
        >
          <span className="text-lg font-semibold text-foreground pe-4">
            {t(faq.questionKey)}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        
        <div
          className={`transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-6 pb-6 space-y-3">
            {faq.answerKeys.map((answerKey, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 mt-2 flex-shrink-0" />
                <p className="text-foreground/70 leading-relaxed">{t(answerKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQsSection() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t, language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQ[] = [
    {
      questionKey: 'about.faqs.secureAccess.question',
      answerKeys: [
        'about.faqs.secureAccess.answer1',
        'about.faqs.secureAccess.answer2',
        'about.faqs.secureAccess.answer3'
      ]
    },
    {
      questionKey: 'about.faqs.threatDetection.question',
      answerKeys: [
        'about.faqs.threatDetection.answer1',
        'about.faqs.threatDetection.answer2'
      ]
    },
    {
      questionKey: 'about.faqs.endpointSecurity.question',
      answerKeys: [
        'about.faqs.endpointSecurity.answer1',
        'about.faqs.endpointSecurity.answer2',
        'about.faqs.endpointSecurity.answer3'
      ]
    },
    {
      questionKey: 'about.faqs.dataSecurity.question',
      answerKeys: [
        'about.faqs.dataSecurity.answer1',
        'about.faqs.dataSecurity.answer2'
      ]
    },
    {
      questionKey: 'about.faqs.emailSecurity.question',
      answerKeys: [
        'about.faqs.emailSecurity.answer1'
      ]
    },
    {
      questionKey: 'about.faqs.networkManagement.question',
      answerKeys: [
        'about.faqs.networkManagement.answer1',
        'about.faqs.networkManagement.answer2',
        'about.faqs.networkManagement.answer3'
      ]
    },
    {
      questionKey: 'about.faqs.virtualization.question',
      answerKeys: [
        'about.faqs.virtualization.answer1',
        'about.faqs.virtualization.answer2'
      ]
    },
    {
      questionKey: 'about.faqs.additional.question',
      answerKeys: [
        'about.faqs.additional.answer1',
        'about.faqs.additional.answer2',
        'about.faqs.additional.answer3',
        'about.faqs.additional.answer4',
        'about.faqs.additional.answer5',
        'about.faqs.additional.answer6'
      ]
    }
  ]

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30" ref={elementRef}>
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {language === 'en' && t('about.faqs.title')}
            {language === 'en' && t('about.faqs.title') && t('about.faqs.highlight') && ' '}
            {t('about.faqs.highlight') && <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">{t('about.faqs.highlight')}</span>}
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            {t('about.faqs.subtitle')}
          </p>
        </div>

        {/* FAQs list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              faq={faq} 
              index={index} 
              isVisible={isVisible}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              t={t}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

