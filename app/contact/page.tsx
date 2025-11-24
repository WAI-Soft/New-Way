'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { LocationMap } from '@/components/contact/location-map'
import { useLanguage } from '@/lib/language-context'

export default function ContactPage() {
  const { t } = useLanguage()
  
  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
        backgroundVariant="aurora"
      />
      
      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info - Left */}
            <ContactInfo />
            
            {/* Contact Form - Right */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <LocationMap />

      <ScrollToTop />
      <Footer />
    </main>
  )
}
