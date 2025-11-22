import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { CompanyOverview } from '@/components/about/company-overview'
import { FAQsSection } from '@/components/about/faqs-section'
import { WorkProcess } from '@/components/work-process'
import { MissionValues } from '@/components/about/mission-values'

export const metadata: Metadata = {
  title: 'About Us | New-Way-Solutions',
  description: 'Learn about New Way Solutions - our mission, values, and commitment to delivering innovative cybersecurity and IT solutions.',
}

export default function AboutPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title="About New Way Solutions" 
        subtitle="Transforming enterprises with innovative solutions and unparalleled expertise"
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
