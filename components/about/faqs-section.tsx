'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  question: string
  answer: string[]
}

const faqs: FAQ[] = [
  {
    question: 'Secure Access & Identity',
    answer: [
      'Implement robust Multi-Factor Authentication (MFA) with Symantec VIP (2FA)',
      'Leverage Symantec Web Protection Suite (WPS) for secure web browsing',
      'Secure your network perimeter with next-generation firewalls (NGFW) from Palo Alto Networks'
    ]
  },
  {
    question: 'Threat Detection & Response',
    answer: [
      'Gain comprehensive threat detection and response with Palo Alto Networks Cortex XDR and Cortex XSOAR',
      'Secure your cloud environment with Symantec CloudSOC CASB'
    ]
  },
  {
    question: 'Endpoint Security',
    answer: [
      'Protect your devices from malware and advanced threats with Symantec Endpoint Protection (SEP) and Endpoint Detection and Response (EDR)',
      'Ensure data privacy with Symantec Endpoint Encryption (PGP)',
      'Fortify endpoint security with TrilleX HX and Email Security (EX)'
    ]
  },
  {
    question: 'Data Security & Compliance',
    answer: [
      'Prevent data breaches with Symantec Data Loss Prevention (DLP)',
      'Enforce data security policies with TrilleX Network Security (NX) and Central Management System (CMS)'
    ]
  },
  {
    question: 'Email Security',
    answer: [
      'Block phishing attempts and malware with Symantec Email Security.cloud and TrilleX Email Threat Protection (ETP)'
    ]
  },
  {
    question: 'Network Management & Monitoring',
    answer: [
      'Gain real-time insights into network performance with SolarWinds Network Performance Management (NPM), Network Traffic Analyzer (NTA), and Network Configuration Manager (NCM)',
      'Optimize database performance with SolarWinds Database Performance Analyzer (DPA)',
      'Monitor server and application health with SolarWinds Server & Application Monitor (SAM)'
    ]
  },
  {
    question: 'Virtualization & Cloud Security',
    answer: [
      'Manage virtual environments effectively with SolarWinds Virtualization Manager (VMAN)',
      'Ensure efficient storage resource utilization with SolarWinds Storage Resource Monitor (SRM)'
    ]
  },
  {
    question: 'Additional Solutions',
    answer: [
      'Enable secure remote access with Citrix solutions like Application Delivery Controller (ADC), Virtual Desktop Infrastructure (VDI), and VPN Gateway',
      'Protect against file-based threats with TrilleX File Protect (FX)',
      'Perform advanced malware analysis with TrilleX Malware Analysis (AX)',
      'Simplify user and device management with Ivanti Security Control (i-Sec)',
      'Deliver application security with F5 BIG-IP Local Traffic Manager and Web Application Firewall (WAF)',
      'Enhance file transfer security with OPSWAT MetaDefender and MetaAccess'
    ]
  }
]

function FAQItem({ 
  faq, 
  index, 
  isVisible, 
  isOpen, 
  onToggle 
}: { 
  faq: FAQ; 
  index: number; 
  isVisible: boolean;
  isOpen: boolean;
  onToggle: () => void;
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
          className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
        >
          <span className="text-lg font-semibold text-foreground pr-4">
            {faq.question}
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
            {faq.answer.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-cyan-400 mt-2 flex-shrink-0" />
                <p className="text-foreground/70 leading-relaxed">{item}</p>
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

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
            Frequently Asked <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Learn more about our comprehensive cybersecurity solutions and services
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
            />
          ))}
        </div>
      </div>
    </section>
  )
}

