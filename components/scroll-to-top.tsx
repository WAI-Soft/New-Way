'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { dir } = useLanguage()

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0)
    
    // Also handle browser back/forward navigation
    window.history.scrollRestoration = 'manual'

    // Show button when user scrolls down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 z-50 p-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-110 group ${
            dir === 'rtl' ? 'left-8' : 'right-8'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp 
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </button>
      )}
    </>
  )
}

