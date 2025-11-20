'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function ContactInfo() {
  const { elementRef, isVisible } = useScrollAnimation()

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="bg-card border border-border/40 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-foreground/60 mb-8">
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>

        {/* Contact Details */}
        <div className="space-y-6 mb-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a
                href="mailto:hello@newway.com"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                hello@newway.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Phone</h3>
              <a
                href="tel:+15551234567"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Office</h3>
              <p className="text-foreground/60">
                123 Market Street, Suite 500<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 my-8" />

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com/company/newway-solutions-llc"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-8 pt-8 border-t border-border/40">
          <h3 className="font-semibold mb-4">Business Hours</h3>
          <div className="space-y-2 text-sm text-foreground/60">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="font-medium text-foreground">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
