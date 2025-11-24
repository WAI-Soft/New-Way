'use client'

import * as React from 'react'
import { Languages } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en'
    setLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-105 flex items-center gap-2"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Languages className="h-5 w-5 text-foreground" />
      <span className="text-sm font-medium text-foreground">
        {language === 'en' ? 'EN' : 'AR'}
      </span>
    </button>
  )
}
