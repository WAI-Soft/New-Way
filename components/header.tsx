'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { LanguageToggle } from '@/components/language-toggle'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

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
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Image 
            src="/logo.png" 
            alt="New Way Solutions" 
            width={180}
            height={60}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end ml-16">
          <div className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'home' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'services' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'about' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              href="/clients" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'clients' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Clients
            </Link>
            <Link 
              href="/partners" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'partners' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Partners
            </Link>
            <Link 
              href="/contact" 
              className={`text-lg font-medium transition-all px-4 py-2 rounded-lg ${
                activePage === 'contact' 
                  ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>
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
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'home' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/services" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'services' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'about' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/clients" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'clients' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
              <Link 
                href="/partners" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'partners' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm transition-all px-4 py-2 rounded-lg ${
                  activePage === 'contact' 
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
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
