import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border/40 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo.png" 
                alt="New Way Solutions" 
                width={140}
                height={47}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Transforming enterprises with innovative solutions and unparalleled expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Identity & Access Management (IAM)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Single Sign-On (SSO)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Privilege Access Management (PAM)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Log Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Multi-Factor Authentication (MFA)
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <Mail size={16} />
                hello@newway.com
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <Phone size={16} />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/60">
                <MapPin size={16} />
                San Francisco, CA
              </li>
            </ul>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                <Link 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/newway-solutions-llc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </Link>
                <Link 
                  href="https://twitter.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
                  aria-label="X (Twitter)"
                >
                  <Twitter size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="text-center">
            <p className="text-sm text-foreground/60">
              © 2025 New Way Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
