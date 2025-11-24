'use client'

import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ClientGrid } from '@/components/clients/client-grid'
import { IndustriesSection } from '@/components/clients/industries-section'
import { TestimonialsSection } from '@/components/clients/testimonials-section'
import { useLanguage } from '@/lib/language-context'

export default function ClientsPage() {
  const { t } = useLanguage()

  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title={t('clients.page.title')}
        subtitle={t('clients.page.subtitle')}
        backgroundVariant="aurora"
      />
      
      <ClientGrid />
      <IndustriesSection />
      <TestimonialsSection />
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
