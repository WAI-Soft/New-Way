'use client'

import * as React from 'react'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const [language, setLanguage] = React.useState<'en' | 'ar'>('en')
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Load saved language preference
    const savedLang = localStorage.getItem('language') as 'en' | 'ar'
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
    localStorage.setItem('language', newLang)
    // You can add logic here to change the website language
  }

  if (!mounted) {
    return (
      <button
        className="px-3 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors flex items-center gap-2"
        aria-label="Toggle language"
      >
        <Languages className="h-5 w-5" />
        <span className="text-sm font-medium">EN</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-105 flex items-center gap-2"
      aria-label="Toggle language"
    >
      <Languages className="h-5 w-5 text-foreground" />
      <span className="text-sm font-medium text-foreground">
        {language === 'en' ? 'EN' : 'AR'}
      </span>
    </button>
  )
}
