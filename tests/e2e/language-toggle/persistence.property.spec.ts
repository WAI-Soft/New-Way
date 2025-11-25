import { test, expect } from '@playwright/test'
import { switchToArabic, switchToEnglish } from '../../helpers/arabic-test-utils'

/**
 * Property-Based Test: Language Persistence
 * 
 * **Feature: arabic-rtl-testing, Property 4: Language Persistence**
 * 
 * Property: For any language selection, the preference should be stored in 
 * localStorage and should be applied when the page is reloaded or when 
 * navigating to a different page.
 * 
 * **Validates: Requirements 6.1, 6.2, 6.3, 6.4**
 * 
 * This property test verifies that language persistence works correctly
 * across all pages and all possible navigation/reload scenarios.
 */

test.describe('Property Test - Language Persistence', () => {
  // Test pages - represents "any page" in the property
  const testPages = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/clients', name: 'Clients' },
    { path: '/partners', name: 'Partners' },
    { path: '/contact', name: 'Contact' },
  ]

  // Test both language selections
  const languages = [
    { lang: 'ar', dir: 'rtl', switchFn: switchToArabic, name: 'Arabic' },
    { lang: 'en', dir: 'ltr', switchFn: switchToEnglish, name: 'English' },
  ]

  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await page.waitForLoadState('networkidle')
  })

  // Property 4.1: Language selection is stored in localStorage
  for (const language of languages) {
    test(`Property 4: ${language.name} selection is stored in localStorage`, async ({ page }) => {
      // Navigate to home page
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      
      // Switch to the language
      await language.switchFn(page)
      await page.waitForTimeout(300)
      
      // Verify localStorage contains the language
      const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
      expect(storedLanguage).toBe(language.lang)
    })
  }

  // Property 4.2: Stored language preference is applied on page reload
  for (const language of languages) {
    for (const testPage of testPages) {
      test(`Property 4: ${language.name} preference persists on ${testPage.name} page reload`, async ({ page }) => {
        // Navigate to the test page
        await page.goto(testPage.path)
        await page.waitForLoadState('networkidle')
        
        // Switch to the language
        await language.switchFn(page)
        await page.waitForTimeout(300)
        
        // Verify language is applied
        let dir = await page.locator('html').getAttribute('dir')
        let lang = await page.locator('html').getAttribute('lang')
        
        if (language.lang === 'ar') {
          expect(dir).toBe('rtl')
        } else {
          expect(dir).not.toBe('rtl')
        }
        expect(lang).toBe(language.lang)
        
        // Reload the page
        await page.reload()
        await page.waitForLoadState('networkidle')
        
        // Verify language preference is still applied
        dir = await page.locator('html').getAttribute('dir')
        lang = await page.locator('html').getAttribute('lang')
        
        if (language.lang === 'ar') {
          expect(dir).toBe('rtl')
        } else {
          expect(dir).not.toBe('rtl')
        }
        expect(lang).toBe(language.lang)
        
        // Verify localStorage still contains the preference
        const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
        expect(storedLanguage).toBe(language.lang)
      })
    }
  }

  // Property 4.3: Language preference persists across page navigation
  for (const language of languages) {
    test(`Property 4: ${language.name} preference persists across all page navigation`, async ({ page }) => {
      // Start on home page
      await page.goto('/')
      await page.waitForLoadState('networkidle')
      
      // Switch to the language
      await language.switchFn(page)
      await page.waitForTimeout(300)
      
      // Navigate through all pages
      for (const testPage of testPages) {
        await page.goto(testPage.path)
        await page.waitForLoadState('networkidle')
        
        // Verify language is still applied
        const dir = await page.locator('html').getAttribute('dir')
        const lang = await page.locator('html').getAttribute('lang')
        
        if (language.lang === 'ar') {
          expect(dir).toBe('rtl')
        } else {
          expect(dir).not.toBe('rtl')
        }
        expect(lang).toBe(language.lang)
        
        // Verify localStorage still contains the preference
        const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
        expect(storedLanguage).toBe(language.lang)
      }
    })
  }

  // Property 4.4: Default language is English when no preference exists
  for (const testPage of testPages) {
    test(`Property 4: Default language is English on ${testPage.name} page when no preference exists`, async ({ page }) => {
      // Navigate to the test page (localStorage is already cleared in beforeEach)
      await page.goto(testPage.path)
      await page.waitForLoadState('networkidle')
      
      // Verify no language preference in localStorage
      const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
      expect(storedLanguage).toBeNull()
      
      // Verify default language is English
      const dir = await page.locator('html').getAttribute('dir')
      const lang = await page.locator('html').getAttribute('lang')
      
      expect(dir).not.toBe('rtl')
      expect(lang).toBe('en')
    })
  }

  // Property 4.5: Persistence works across multiple navigation and reload cycles
  test('Property 4: Language persists through complex navigation patterns', async ({ page }) => {
    // Set language to Arabic
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Perform multiple navigation and reload cycles
    const navigationPattern = [
      { action: 'navigate', path: '/services' },
      { action: 'reload' },
      { action: 'navigate', path: '/about' },
      { action: 'navigate', path: '/clients' },
      { action: 'reload' },
      { action: 'navigate', path: '/partners' },
      { action: 'navigate', path: '/contact' },
      { action: 'reload' },
      { action: 'navigate', path: '/' },
    ]
    
    for (const step of navigationPattern) {
      if (step.action === 'navigate') {
        await page.goto(step.path!)
        await page.waitForLoadState('networkidle')
      } else if (step.action === 'reload') {
        await page.reload()
        await page.waitForLoadState('networkidle')
      }
      
      // After each action, verify language is still Arabic
      const dir = await page.locator('html').getAttribute('dir')
      const lang = await page.locator('html').getAttribute('lang')
      const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
      
      expect(dir).toBe('rtl')
      expect(lang).toBe('ar')
      expect(storedLanguage).toBe('ar')
    }
  })

  // Property 4.6: Persistence survives language changes
  test('Property 4: Most recent language selection is always persisted', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Perform multiple language changes across different pages
    const changes = [
      { page: '/', lang: 'ar', switchFn: switchToArabic },
      { page: '/services', lang: 'en', switchFn: switchToEnglish },
      { page: '/about', lang: 'ar', switchFn: switchToArabic },
      { page: '/clients', lang: 'en', switchFn: switchToEnglish },
      { page: '/partners', lang: 'ar', switchFn: switchToArabic },
    ]
    
    for (const change of changes) {
      await page.goto(change.page)
      await page.waitForLoadState('networkidle')
      
      await change.switchFn(page)
      await page.waitForTimeout(300)
      
      // Verify the new language is stored
      const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
      expect(storedLanguage).toBe(change.lang)
      
      // Reload to verify persistence
      await page.reload()
      await page.waitForLoadState('networkidle')
      
      const lang = await page.locator('html').getAttribute('lang')
      expect(lang).toBe(change.lang)
    }
  })

  // Property 4.7: Persistence works with browser back/forward navigation
  test('Property 4: Language persists with browser back/forward navigation', async ({ page }) => {
    // Set language to Arabic on home page
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Navigate to services
    await page.goto('/services')
    await page.waitForLoadState('networkidle')
    
    // Verify still in Arabic
    let lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Navigate to about
    await page.goto('/about')
    await page.waitForLoadState('networkidle')
    
    // Verify still in Arabic
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Go back
    await page.goBack()
    await page.waitForLoadState('networkidle')
    
    // Verify still in Arabic
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Go back again
    await page.goBack()
    await page.waitForLoadState('networkidle')
    
    // Verify still in Arabic
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Go forward
    await page.goForward()
    await page.waitForLoadState('networkidle')
    
    // Verify still in Arabic
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
  })

  // Property 4.8: Multiple rapid language changes are handled correctly
  test('Property 4: Rapid language changes maintain consistency', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Perform rapid language changes
    for (let i = 0; i < 10; i++) {
      await switchToArabic(page)
      await page.waitForTimeout(50)
      await switchToEnglish(page)
      await page.waitForTimeout(50)
    }
    
    // End on Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Verify final state is consistent
    const dir = await page.locator('html').getAttribute('dir')
    const lang = await page.locator('html').getAttribute('lang')
    const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    
    expect(dir).toBe('rtl')
    expect(lang).toBe('ar')
    expect(storedLanguage).toBe('ar')
    
    // Reload to verify persistence
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    const dirAfterReload = await page.locator('html').getAttribute('dir')
    const langAfterReload = await page.locator('html').getAttribute('lang')
    
    expect(dirAfterReload).toBe('rtl')
    expect(langAfterReload).toBe('ar')
  })
})
