import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services/services-grid'
import { WhyChooseUs } from '@/components/services/why-choose-us'
import { ServicesCTA } from '@/components/services/services-cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Security Solutions - New Way Solutions',
  description: 'Comprehensive security solutions including IAM, SSO, PAM, Log Management, MFA, and Cybersecurity services to protect your enterprise.',
}

export default function ServicesPage() {
  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <PageHero 
        title="Our Security Solutions" 
        subtitle="Comprehensive security services designed to protect your enterprise and empower your team"
        backgroundVariant="aurora"
      />
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
