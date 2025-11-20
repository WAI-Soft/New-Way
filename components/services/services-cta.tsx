'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ServicesCTA() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" ref={elementRef}>
      <div className="mx-auto max-w-7xl">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#50af9b] to-[#3b9482] p-12 sm:p-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Secure Your Enterprise?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Let's discuss how our security solutions can protect your business and empower your team. 
              Schedule a free consultation with our experts today.
            </p>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
