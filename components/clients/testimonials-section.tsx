'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { TestimonialCard } from './testimonial-card'

interface Testimonial {
  quote: string
  author: string
  position: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    quote: "New Way Solutions transformed our security infrastructure with their IAM implementation. Their expertise and professionalism exceeded our expectations.",
    author: "Ahmed Al-Rashid",
    position: "Chief Information Security Officer",
    company: "Ministry of Interior"
  },
  {
    quote: "The team's deep understanding of healthcare compliance and security requirements made our HIPAA implementation seamless. Highly recommended.",
    author: "Dr. Sarah Johnson",
    position: "IT Director",
    company: "National Guard Health Affairs"
  },
  {
    quote: "Outstanding service and support. Their SSO solution has significantly improved our operational efficiency while maintaining the highest security standards.",
    author: "Mohammed Al-Qahtani",
    position: "Technology Manager",
    company: "Saudi Payments"
  }
]

export function TestimonialsSection() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Client <span className="bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Hear what our clients have to say about working with us
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
