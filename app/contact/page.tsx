import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { LocationMap } from '@/components/contact/location-map'

export const metadata: Metadata = {
  title: 'Contact Us | New-Way-Solutions',
  description: 'Get in touch with New Way Solutions. Contact us for inquiries about our security solutions and services.',
}

export default function ContactPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHero 
        title="Get in Touch" 
        subtitle="Have questions about our services? We're here to help. Reach out to us and let's discuss how we can secure your business."
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
