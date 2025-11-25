import { test, expect } from '@playwright/test'
import { switchToArabic, switchToEnglish } from '../../helpers/arabic-test-utils'

/**
 * Language Persistence Tests
 * 
 * Tests that language preferences are correctly stored in localStorage
 * and persist across page reloads and navigation.
 * 
 * Requirements: 6.1, 6.2, 6.3, 6.4
 */

test.describe('Language Persistence - localStorage', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage before each test to ensure clean state
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
    await page.reload()
    await page.waitForLoadState('networkidle')
  })

  test('should store language preference in localStorage when Arabic is selected', async ({ page }) => {
    // Verify localStorage is initially empty or has default value
    const initialLanguage = await page.evaluate(() => localStorage.getItem('language'))
    
    // Switch to Arabic
    await switchToArabic(page)
    
    // Wait for localStorage to be updated
    await page.waitForTimeout(300)
    
    // Verify language is stored in localStorage
    const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('ar')
  })

  test('should store language preference in localStorage when English is selected', async ({ page }) => {
    // First switch to Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Verify Arabic is stored
    let storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('ar')
    
    // Switch back to English
    await switchToEnglish(page)
    await page.waitForTimeout(300)
    
    // Verify English is now stored
    storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('en')
  })

  test('should apply stored language preference on page reload', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Verify we're in Arabic
    let dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    // Reload the page
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic after reload
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Verify localStorage still has Arabic
    const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('ar')
  })

  test('should persist language preference across page navigation', async ({ page }) => {
    // Switch to Arabic on home page
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Verify we're in Arabic
    let dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    // Navigate to services page
    await page.goto('/services')
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    let lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Navigate to about page
    await page.goto('/about')
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
    
    // Navigate to contact page
    await page.goto('/contact')
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('ar')
  })

  test('should default to English when no preference is stored', async ({ page }) => {
    // Verify localStorage is empty
    const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBeNull()
    
    // Verify page defaults to English
    const dir = await page.locator('html').getAttribute('dir')
    expect(dir).not.toBe('rtl')
    
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('en')
  })

  test('should maintain preference after multiple page navigations', async ({ page }) => {
    // Set language to Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Navigate through multiple pages
    const pages = ['/services', '/about', '/clients', '/partners', '/contact', '/']
    
    for (const pagePath of pages) {
      await page.goto(pagePath)
      await page.waitForLoadState('networkidle')
      
      // Verify language is still Arabic
      const dir = await page.locator('html').getAttribute('dir')
      expect(dir).toBe('rtl')
      
      const lang = await page.locator('html').getAttribute('lang')
      expect(lang).toBe('ar')
    }
  })

  test('should persist preference after reload on different pages', async ({ page }) => {
    // Switch to Arabic on home page
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Navigate to services page
    await page.goto('/services')
    await page.waitForLoadState('networkidle')
    
    // Reload services page
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic
    let dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    // Navigate to about page
    await page.goto('/about')
    await page.waitForLoadState('networkidle')
    
    // Reload about page
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    // Verify language is still Arabic
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
  })

  test('should update localStorage immediately when language changes', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page)
    
    // Check localStorage immediately (with small timeout for React state update)
    await page.waitForTimeout(100)
    
    let storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('ar')
    
    // Switch to English
    await switchToEnglish(page)
    
    // Check localStorage immediately
    await page.waitForTimeout(100)
    
    storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('en')
  })

  test('should handle localStorage being cleared externally', async ({ page }) => {
    // Set language to Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Verify we're in Arabic
    let dir = await page.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    // Clear localStorage externally
    await page.evaluate(() => localStorage.clear())
    
    // Reload page
    await page.reload()
    await page.waitForLoadState('networkidle')
    
    // Should default back to English
    dir = await page.locator('html').getAttribute('dir')
    expect(dir).not.toBe('rtl')
    
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('en')
  })

  test('should persist preference in new browser context', async ({ browser }) => {
    // Create a new context (simulates new browser session with same storage)
    const context = await browser.newContext()
    const page = await context.newPage()
    
    // Navigate to home page
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    
    // Set language to Arabic
    await switchToArabic(page)
    await page.waitForTimeout(300)
    
    // Get the localStorage value
    const storedLanguage = await page.evaluate(() => localStorage.getItem('language'))
    expect(storedLanguage).toBe('ar')
    
    // Close the page
    await page.close()
    
    // Create a new page in the same context
    const newPage = await context.newPage()
    await newPage.goto('/')
    await newPage.waitForLoadState('networkidle')
    
    // Verify language preference is applied
    const dir = await newPage.locator('html').getAttribute('dir')
    expect(dir).toBe('rtl')
    
    // Clean up
    await newPage.close()
    await context.close()
  })
})
