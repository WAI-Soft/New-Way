'use client'

import { Shield, Key, Lock, FileText, Smartphone, ShieldCheck } from 'lucide-react'
import { ServiceCard } from './service-card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const services = [
  {
    icon: Key,
    title: 'Identity & Access Management (IAM)',
    description: "In today's digital landscape, securing access to your critical systems and data is more important than ever. Our IAM solutions provide comprehensive identity governance and access control.",
    features: [
      'Centralized user identity management',
      'Role-based access control (RBAC)',
      'Automated provisioning and deprovisioning',
      'Compliance reporting and audit trails',
      'Integration with existing directories',
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Shield,
    title: 'Single Sign-On (SSO)',
    description: 'Managing multiple passwords for different applications can be a hassle for users and a security risk for organizations. Our SSO solutions streamline authentication while enhancing security.',
    features: [
      'One-click access to all applications',
      'Reduced password fatigue',
      'Enhanced security with centralized authentication',
      'Support for SAML, OAuth, and OpenID Connect',
      'Seamless integration with cloud and on-premise apps',
    ],
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: Lock,
    title: 'Privilege Access Management (PAM)',
    description: "Securing access to sensitive systems and data is critical in today's cybersecurity landscape. Our PAM solutions protect privileged accounts and prevent unauthorized access to critical resources.",
    features: [
      'Secure privileged account management',
      'Session monitoring and recording',
      'Just-in-time access provisioning',
      'Automated password rotation',
      'Comprehensive audit and compliance reporting',
    ],
    gradient: 'from-teal-500 to-green-500',
  },
  {
    icon: FileText,
    title: 'Log Management',
    description: "Managing logs is a critical aspect of any organization's cybersecurity and compliance strategy. Our log management solutions provide centralized collection, analysis, and retention of log data.",
    features: [
      'Centralized log collection and storage',
      'Real-time log analysis and alerting',
      'Advanced search and filtering capabilities',
      'Compliance-ready retention policies',
      'Integration with SIEM platforms',
    ],
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Multi-Factor Authentication (MFA)',
    description: "In today's digital world, passwords alone are no longer enough to secure sensitive data and systems. Our MFA solutions add an extra layer of security to protect against unauthorized access.",
    features: [
      'Multiple authentication methods (SMS, email, app)',
      'Biometric authentication support',
      'Adaptive authentication based on risk',
      'Easy user enrollment and management',
      'Integration with existing systems',
    ],
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity',
    description: 'In an age where cyber threats are constantly evolving, ensuring the protection of your digital assets is more important than ever. Our comprehensive cybersecurity services safeguard your organization.',
    features: [
      'Threat detection and response',
      'Vulnerability assessments and penetration testing',
      'Security awareness training',
      '24/7 security monitoring',
      'Incident response and recovery',
    ],
    gradient: 'from-cyan-500 to-blue-500',
  },
]

export function ServicesGrid() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="transition-all duration-1000 flex"
              style={{
                transitionDelay: `${idx * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
