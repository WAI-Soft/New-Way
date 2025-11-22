import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ClientGrid } from '@/components/clients/client-grid'
import { IndustriesSection } from '@/components/clients/industries-section'
import { TestimonialsSection } from '@/components/clients/testimonials-section'

export const metadata: Metadata = {
  title: 'Our Clients | New Way Solutions',
  description: 'Trusted by industry leaders across government, healthcare, finance, and more. See how we help organizations achieve their security goals.',
}

export default function ClientsPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title="Trusted by Industry Leaders"
        subtitle="We partner with organizations across diverse sectors to deliver world-class security solutions and drive digital transformation."
        backgroundVariant="solid"
      />
      
      <ClientGrid />
      <IndustriesSection />
      <TestimonialsSection />
      
      <Footer />
      <ScrollToTop />
    </main>
  )
}
