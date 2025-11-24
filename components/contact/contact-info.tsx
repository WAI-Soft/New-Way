'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { useLanguage } from '@/lib/language-context'

export function ContactInfo() {
  const { elementRef, isVisible } = useScrollAnimation()
  const { t } = useLanguage()

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="bg-card border border-border/40 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
        <p className="text-foreground/60 mb-8">
          {t('contact.info.description')}
        </p>

        {/* Contact Details */}
        <div className="space-y-6 mb-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{t('contact.info.email')}</h3>
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
              <h3 className="font-semibold mb-1">{t('contact.info.phone')}</h3>
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
              <h3 className="font-semibold mb-1">{t('contact.info.office')}</h3>
              <p className="text-foreground/60">
                {t('contact.info.address.line1')}<br />
                {t('contact.info.address.line2')}<br />
                {t('contact.info.address.line3')}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 my-8" />

        {/* Social Media Links */}
        <div>
          <h3 className="font-semibold mb-4">{t('footer.followUs')}</h3>
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
          <h3 className="font-semibold mb-4">{t('contact.hours.title')}</h3>
          <div className="space-y-2 text-sm text-foreground/60">
            <div className="flex justify-between">
              <span>{t('contact.hours.weekdays')}</span>
              <span className="font-medium text-foreground">{t('contact.hours.weekdays.time')}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('contact.hours.saturday')}</span>
              <span className="font-medium text-foreground">{t('contact.hours.saturday.time')}</span>
            </div>
            <div className="flex justify-between">
              <span>{t('contact.hours.sunday')}</span>
              <span className="font-medium text-foreground">{t('contact.hours.sunday.time')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
