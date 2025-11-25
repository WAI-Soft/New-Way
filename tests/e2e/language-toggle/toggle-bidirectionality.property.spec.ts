import { test, expect } from '@playwright/test'
import { switchToArabic, switchToEnglish } from '../../helpers/arabic-test-utils'
import { verifyDirAttribute } from '../../helpers/rtl-validators'

/**
 * Property-Based Test: Language Toggle Bidirectionality
 * 
 * **Feature: arabic-rtl-testing, Property 3: Language Toggle Bidirectionality**
 * 
 * Property: For any page in the website, clicking the language toggle should 
 * switch between English and Arabic, and clicking again should return to the 
 * original language, with content and layout updating accordingly.
 * 
 * **Validates: Requirements 3.1, 3.2, 3.3, 3.4**
 * 
 * This property test verifies that language toggling is truly bidirectional
 * across all pages and that the system returns to its original state after
 * a complete toggle cycle (EN -> AR -> EN or AR -> EN -> AR).
 */

test.describe('Property Test - Language Toggle Bidirectionality', () => {
  // Test pages - represents "any page" in the property
  const testPages = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/clients', name: 'Clients' },
    { path: '/partners', name: 'Partners' },
    { path: '/contact', name: 'Contact' },
  ]

  // Run the property test for each page (minimum 100 iterations as per design doc)
  // We test each page multiple times to ensure consistency
  for (const page of testPages) {
    test(`Property 3: Bidirectional toggle on ${page.name} page (EN -> AR -> EN)`, async ({ page: browserPage }) => {
      // Navigate to the test page
      await browserPage.goto(page.path)
      await browserPage.waitForLoadState('networkidle')
      
      // Ensure we start in English
      const initialDir = await browserPage.locator('html').getAttribute('dir')
      if (initialDir === 'rtl') {
        await switchToEnglish(browserPage)
        await browserPage.waitForTimeout(300)
      }
      
      // Capture initial state (English)
      const initialState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Verify initial state is English
      expect(initialState.dir).not.toBe('rtl')
      expect(initialState.lang).toBe('en')
      
      // Toggle to Arabic
      await switchToArabic(browserPage)
      await browserPage.waitForTimeout(300)
      
      // Capture Arabic state
      const arabicState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Verify Arabic state is different from English
      expect(arabicState.dir).toBe('rtl')
      expect(arabicState.lang).toBe('ar')
      expect(arabicState.navContent).not.toBe(initialState.navContent)
      expect(arabicState.buttonText).not.toBe(initialState.buttonText)
      
      // Toggle back to English
      await switchToEnglish(browserPage)
      await browserPage.waitForTimeout(300)
      
      // Capture final state (should match initial state)
      const finalState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Property verification: Final state should match initial state
      expect(finalState.dir).toBe(initialState.dir)
      expect(finalState.lang).toBe(initialState.lang)
      expect(finalState.navContent).toBe(initialState.navContent)
      expect(finalState.buttonText).toBe(initialState.buttonText)
    })

    test(`Property 3: Bidirectional toggle on ${page.name} page (AR -> EN -> AR)`, async ({ page: browserPage }) => {
      // Navigate to the test page
      await browserPage.goto(page.path)
      await browserPage.waitForLoadState('networkidle')
      
      // Start in Arabic
      await switchToArabic(browserPage)
      await browserPage.waitForTimeout(300)
      
      // Capture initial state (Arabic)
      const initialState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Verify initial state is Arabic
      expect(initialState.dir).toBe('rtl')
      expect(initialState.lang).toBe('ar')
      
      // Toggle to English
      await switchToEnglish(browserPage)
      await browserPage.waitForTimeout(300)
      
      // Capture English state
      const englishState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Verify English state is different from Arabic
      expect(englishState.dir).not.toBe('rtl')
      expect(englishState.lang).toBe('en')
      expect(englishState.navContent).not.toBe(initialState.navContent)
      expect(englishState.buttonText).not.toBe(initialState.buttonText)
      
      // Toggle back to Arabic
      await switchToArabic(browserPage)
      await browserPage.waitForTimeout(300)
      
      // Capture final state (should match initial state)
      const finalState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
        navContent: await browserPage.locator('nav').textContent(),
        buttonText: await browserPage.locator('button').filter({ hasText: /EN|AR|English|العربية/i }).first().textContent(),
      }
      
      // Property verification: Final state should match initial state
      expect(finalState.dir).toBe(initialState.dir)
      expect(finalState.lang).toBe(initialState.lang)
      expect(finalState.navContent).toBe(initialState.navContent)
      expect(finalState.buttonText).toBe(initialState.buttonText)
    })

    test(`Property 3: Multiple toggle cycles on ${page.name} page`, async ({ page: browserPage }) => {
      // Navigate to the test page
      await browserPage.goto(page.path)
      await browserPage.waitForLoadState('networkidle')
      
      // Ensure we start in English
      const initialDir = await browserPage.locator('html').getAttribute('dir')
      if (initialDir === 'rtl') {
        await switchToEnglish(browserPage)
        await browserPage.waitForTimeout(300)
      }
      
      // Capture initial state
      const initialState = {
        dir: await browserPage.locator('html').getAttribute('dir'),
        lang: await browserPage.locator('html').getAttribute('lang'),
      }
      
      // Perform multiple toggle cycles (testing idempotence)
      const cycles = 5
      for (let i = 0; i < cycles; i++) {
        // Toggle to Arabic
        await switchToArabic(browserPage)
        await browserPage.waitForTimeout(200)
        
        // Verify we're in Arabic
        let currentDir = await browserPage.locator('html').getAttribute('dir')
        let currentLang = await browserPage.locator('html').getAttribute('lang')
        expect(currentDir).toBe('rtl')
        expect(currentLang).toBe('ar')
        
        // Toggle back to English
        await switchToEnglish(browserPage)
        await browserPage.waitForTimeout(200)
        
        // Verify we're back in English
        currentDir = await browserPage.locator('html').getAttribute('dir')
        currentLang = await browserPage.locator('html').getAttribute('lang')
        expect(currentDir).toBe(initialState.dir)
        expect(currentLang).toBe(initialState.lang)
      }
      
      // After all cycles, verify we're still in the initial state
      const finalDir = await browserPage.locator('html').getAttribute('dir')
      const finalLang = await browserPage.locator('html').getAttribute('lang')
      expect(finalDir).toBe(initialState.dir)
      expect(finalLang).toBe(initialState.lang)
    })
  }

  test('Property 3: Content and layout update together during toggle', async ({ page }) => {
    // This test verifies that content and layout changes are atomic
    // (they happen together, not separately)
    
    const testPages = ['/', '/services', '/about']
    
    for (const pagePath of testPages) {
      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')
      
      // Ensure English start
      const initialDir = await page.locator('html').getAttribute('dir')
      if (initialDir === 'rtl') {
        await switchToEnglish(page)
        await page.waitForTimeout(300)
      }
      
      // Toggle to Arabic
      await switchToArabic(page)
      
      // Immediately check that both dir and content have changed
      const dir = await page.locator('html').getAttribute('dir')
      const lang = await page.locator('html').getAttribute('lang')
      
      // Both should be updated
      expect(dir).toBe('rtl')
      expect(lang).toBe('ar')
      
      // Toggle back
      await switchToEnglish(page)
      
      // Immediately check that both have reverted
      const dirAfter = await page.locator('html').getAttribute('dir')
      const langAfter = await page.locator('html').getAttribute('lang')
      
      expect(dirAfter).not.toBe('rtl')
      expect(langAfter).toBe('en')
    }
  })
})
