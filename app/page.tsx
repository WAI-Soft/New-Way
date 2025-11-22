import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { WorkProcess } from '@/components/work-process'
import { Partners } from '@/components/partners'
import { ClientCarousel } from '@/components/client-carousel'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'

export const metadata = {
  title: 'New-Way-Solutions',
  description: 'Enterprise solutions that deliver exceptional results',
}

export default function Home() {
  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <Hero />
      <Services />
      <WorkProcess />
      <Partners />
      <ClientCarousel />
      <CTA />
      <Footer />
    </main>
  )
}
