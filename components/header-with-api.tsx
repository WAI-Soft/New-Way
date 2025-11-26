'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X, Home, Briefcase, Info, Users, Handshake, Mail } from 'lucide-react'
import { LanguageToggle } from '@/components/language-toggle'
import { useLanguage } from '@/lib/language-context'

// Icon mapping
const iconMap: Record<string, any> = {
  Home,
  Briefcase,
  Info,
  Users,
  Handshake,
  Mail
}

interface NavigationItem {
  id: string
  path: string
  title: string
  icon?: string
  order: number
  isActive?: boolean
}

export function HeaderWithAPI() {
  const [isOpen, setIsOpen] = useState(false)
  const [navItems, setNavItems] = useState<NavigationItem[]>([])
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()
  const { language } = useLanguage()

  // Fetch navigation from API
  useEffect(() => {
    async function fetchNavigation() {
      try {
        const response = await fetch(
          `/api/pages/navigation?section=main&currentPath=${pathname}&lang=${language}`
        )
        const data = await response.json()
        
        if (data.success) {
          setNavItems(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch navigation:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNavigation()
  }, [pathname, language])

  if (loading) {
    return (
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 me-8">
            <Image 
              src="/logo.png" 
              alt="New Way Solutions" 
              width={200}
              height={70}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>
          <div className="text-sm text-muted-foreground">Loading navigation...</div>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 me-8">
          <Image 
            src="/logo.png" 
            alt="New Way Solutions" 
            width={200}
            height={70}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        {/* Desktop Navigation - Powered by API */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.id}
                href={item.path} 
                className={`text-lg font-medium transition-all px-4 py-2 rounded-lg whitespace-nowrap ${
                  item.isActive
                    ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                    : 'text-foreground/70 hover:text-primary'
                }`}
              >
                {item.title}
              </Link>
            ))}
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

        {/* Mobile Navigation - Powered by API */}
        {isOpen && (
          <div className="absolute top-full inset-x-0 bg-background border-b border-border p-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const IconComponent = item.icon ? iconMap[item.icon] : null
                return (
                  <Link 
                    key={item.id}
                    href={item.path} 
                    className={`text-sm transition-all px-4 py-2 rounded-lg flex items-center gap-3 ${
                      item.isActive
                        ? 'text-primary border-2 border-primary/50 bg-primary/10 backdrop-blur-sm' 
                        : 'text-foreground/70 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {IconComponent && <IconComponent size={18} />}
                    <span className="whitespace-nowrap">{item.title}</span>
                  </Link>
                )
              })}
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
