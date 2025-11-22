import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { PartnerGrid } from '@/components/partners/partner-grid'
import { PartnerCategory } from '@/components/partners/partner-category'
import { PartnershipBenefits } from '@/components/partners/partnership-benefits'

export const metadata: Metadata = {
  title: 'Technology Partners | New-Way-Solutions',
  description: 'Explore our strategic technology partnerships with leading security, cloud, and identity management providers.',
}

export default function PartnersPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title="Technology Partners" 
        subtitle="Collaborating with industry leaders to deliver best-in-class solutions"
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
