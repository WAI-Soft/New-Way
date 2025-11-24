'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ServicesGrid } from '@/components/services/services-grid'
import { WhyChooseUs } from '@/components/services/why-choose-us'
import { ServicesCTA } from '@/components/services/services-cta'
import { useLanguage } from '@/lib/language-context'

export default function ServicesPage() {
  const { t } = useLanguage()

  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <PageHero 
        title={t('services.page.title')}
        subtitle={t('services.page.subtitle')}
        backgroundVariant="aurora"
      />
      <ServicesGrid />
      <WhyChooseUs />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
