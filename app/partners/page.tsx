'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { PartnerGrid } from '@/components/partners/partner-grid'
import { PartnerCategory } from '@/components/partners/partner-category'
import { PartnershipBenefits } from '@/components/partners/partnership-benefits'
import { useLanguage } from '@/lib/language-context'

export default function PartnersPage() {
  const { t } = useLanguage()

  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title={t('partners.page.title')}
        subtitle={t('partners.page.subtitle')}
        backgroundVariant="aurora"
      />
      
      <PartnerGrid />
      <PartnerCategory />
      <PartnershipBenefits />
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
