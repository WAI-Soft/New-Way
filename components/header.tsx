'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Briefcase, Info, Users, Handshake, Mail } from 'lucide-react'
import { LanguageToggle } from '@/components/language-toggle'
import { Logo } from '@/components/logo'
import { useLanguage } from '@/lib/language-context'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  // Determine active page based on pathname
  const getActivePage = () => {
    if (pathname === '/services') return 'services'
    if (pathname === '/about') return 'about'
    if (pathname === '/clients') return 'clients'
    if (pathname === '/partners') return 'partners'
    if (pathname === '/contact') return 'contact'
    return 'home'
  }

  const activePage = getActivePage()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 me-8">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'home' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.home')}
            </Link>
            <Link 
              href="/services" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'services' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.services')}
            </Link>
            <Link 
              href="/about" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'about' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.about')}
            </Link>
            <Link 
              href="/clients" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'clients' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.clients')}
            </Link>
            <Link 
              href="/partners" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'partners' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.partners')}
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                activePage === 'contact' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>

        {/* Language Toggle */}
        <div className="hidden md:block ms-8">
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full inset-x-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'home' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Home size={18} />
                <span className="whitespace-nowrap">{t('nav.home')}</span>
              </Link>
              <Link 
                href="/services" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'services' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Briefcase size={18} />
                <span className="whitespace-nowrap">{t('nav.services')}</span>
              </Link>
              <Link 
                href="/about" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'about' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Info size={18} />
                <span className="whitespace-nowrap">{t('nav.about')}</span>
              </Link>
              <Link 
                href="/clients" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'clients' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Users size={18} />
                <span className="whitespace-nowrap">{t('nav.clients')}</span>
              </Link>
              <Link 
                href="/partners" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'partners' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Handshake size={18} />
                <span className="whitespace-nowrap">{t('nav.partners')}</span>
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                  activePage === 'contact' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Mail size={18} />
                <span className="whitespace-nowrap">{t('nav.contact')}</span>
              </Link>
              <div className="flex justify-center pt-2">
                <LanguageToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
