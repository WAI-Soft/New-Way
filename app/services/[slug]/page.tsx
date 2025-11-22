import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { ServiceDetail } from '@/components/services/service-detail'
import { servicesData } from '@/lib/services-data'

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)
  
  if (!service) {
    return {
      title: 'Service Not Found | New-Way-Solutions',
    }
  }

  return {
    title: `${service.title} | New-Way-Solutions`,
    description: service.description,
  }
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = servicesData.find(s => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <main className="w-full">
      <ScrollToTop />
      <Header />
      <ServiceDetail slug={slug} />
      <Footer />
    </main>
  )
}

