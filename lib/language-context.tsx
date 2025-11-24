'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Language } from './translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en')
  const [isInitialized, setIsInitialized] = useState(false)

  // Initialize language from localStorage on mount
  useEffect(() => {
    try {
      // Check if localStorage is available
      if (typeof window !== 'undefined' && window.localStorage) {
        const savedLanguage = localStorage.getItem('language')
        if (savedLanguage === 'en' || savedLanguage === 'ar') {
          setLanguageState(savedLanguage)
        } else if (savedLanguage) {
          // Invalid language value in storage, clear it
          if (process.env.NODE_ENV === 'development') {
            console.warn(`Invalid language preference in storage: ${savedLanguage}. Defaulting to English.`)
          }
          localStorage.removeItem('language')
        }
      }
    } catch (error) {
      // localStorage might be unavailable (private browsing, storage quota exceeded, etc.)
      if (process.env.NODE_ENV === 'development') {
        console.warn('localStorage is unavailable. Language preference will not persist:', error)
      }
      // Gracefully continue with default language
    } finally {
      setIsInitialized(true)
    }
  }, [])

  // Update HTML attributes and localStorage when language changes
  useEffect(() => {
    if (!isInitialized) return

    const dir = language === 'ar' ? 'rtl' : 'ltr'
    
    // Update HTML attributes
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', language)
        document.documentElement.setAttribute('dir', dir)
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to update HTML attributes:', error)
      }
    }
    
    // Save to localStorage with graceful degradation
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('language', language)
      }
    } catch (error) {
      // localStorage might be full, unavailable, or blocked
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to save language preference to localStorage:', error)
      }
      // Continue without persistence - user can still use the app
    }
  }, [language, isInitialized])

  // Translation function with comprehensive fallback logic
  const t = (key: string): string => {
    // Validate input
    if (!key || typeof key !== 'string') {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Translation key must be a non-empty string, received:', key)
      }
      return String(key || '')
    }

    const translation = translations[key]
    
    // Missing translation key
    if (!translation) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing translation for key: "${key}"`)
      }
      // Return the key itself as fallback (useful for debugging)
      return key
    }
    
    // Get translation for current language with fallback chain
    const currentTranslation = translation[language]
    const englishFallback = translation.en
    
    // Missing translation for current language
    if (!currentTranslation) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Missing ${language} translation for key: "${key}". Falling back to English.`)
      }
      // Fallback to English, then to key
      return englishFallback || key
    }
    
    return currentTranslation
  }

  // Set language function
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  const dir = language === 'ar' ? 'rtl' : 'ltr'

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    dir,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext)
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  
  return context
}
