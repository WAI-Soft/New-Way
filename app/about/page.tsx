'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { CompanyOverview } from '@/components/about/company-overview'
import { FAQsSection } from '@/components/about/faqs-section'
import { WorkProcess } from '@/components/work-process'
import { MissionValues } from '@/components/about/mission-values'
import { useLanguage } from '@/lib/language-context'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title={t('about.page.title')}
        subtitle={t('about.page.subtitle')}
        backgroundVariant="aurora"
      />
      
      <CompanyOverview />
      <MissionValues />
      <WorkProcess />
      <FAQsSection />
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
