import { test, expect } from '@playwright/test'
import { switchToArabic, switchToEnglish, isArabicText } from '../../helpers/arabic-test-utils'
import { verifyDirAttribute } from '../../helpers/rtl-validators'

/**
 * Language Toggle Functionality Tests
 * 
 * Tests the language toggle button functionality including:
 * - Switching from English to Arabic
 * - Switching from Arabic back to English
 * - Immediate content updates
 * - Immediate layout direction updates
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4
 */

test.describe('Language Toggle - Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to home page
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Ensure we start in English
    const currentDir = await page.locator('html').getAttribute('dir')
    if (currentDir === 'rtl') {
      await switchToEnglish(page)
    }
  })

  test('should switch from English to Arabic when toggle is clicked', async ({ page }) => {
    // Verify we start in English (LTR)
    const initialDir = await page.locator('html').getAttribute('dir')
    expect(initialDir).not.toBe('rtl')
    
    // Get initial language button text
    const languageButton = page.locator('button:has-text("EN")').or(
      page.locator('button').filter({ hasText: /EN|English/i })
    )
    await expect(languageButton).toBeVisible()
    
    // Click the language toggle
    await switchToArabic(page)
    
    // Verify language changed to Arabic (RTL)
    const newDir = await page.locator('html').getAttribute('dir')
    expect(newDir).toBe('rtl')
    
    // Verify language button now shows AR
    const arabicButton = page.locator('button:has-text("AR")').or(
      page.locator('button').filter({ hasText: /AR|العربية/i })
    )
    await expect(arabicButton).toBeVisible()
  })

  test('should switch from Arabic back to English when toggle is clicked again', async ({ page }) => {
    // First switch to Arabic
    await switchToArabic(page)
    
    // Verify we're in Arabic
    let currentDir = await page.locator('html').getAttribute('dir')
    expect(currentDir).toBe('rtl')
    
    // Switch back to English
    await switchToEnglish(page)
    
    // Verify we're back in English (LTR)
    currentDir = await page.locator('html').getAttribute('dir')
    expect(currentDir).not.toBe('rtl')
    
    // Verify language button shows EN again
    const englishButton = page.locator('button:has-text("EN")').or(
      page.locator('button').filter({ hasText: /EN|English/i })
    )
    await expect(englishButton).toBeVisible()
  })

  test('should update content immediately after language change to Arabic', async ({ page }) => {
    // Get some initial content in English
    const navigation = page.locator('nav')
    const initialNavText = await navigation.textContent()
    
    // Switch to Arabic
    await switchToArabic(page)
    
    // Wait a moment for content to update
    await page.waitForTimeout(300)
    
    // Get content after language change
    const updatedNavText = await navigation.textContent()
    
    // Verify content has changed
    expect(updatedNavText).not.toBe(initialNavText)
    
    // Verify new content contains Arabic characters
    expect(isArabicText(updatedNavText || '')).toBeTruthy()
  })

  test('should update content immediately after language change back to English', async ({ page }) => {
    // Switch to Arabic first
    await switchToArabic(page)
    
    // Get content in Arabic
    const navigation = page.locator('nav')
    const arabicNavText = await navigation.textContent()
    
    // Verify it's in Arabic
    expect(isArabicText(arabicNavText || '')).toBeTruthy()
    
    // Switch back to English
    await switchToEnglish(page)
    
    // Wait a moment for content to update
    await page.waitForTimeout(300)
    
    // Get content after switching back
    const englishNavText = await navigation.textContent()
    
    // Verify content has changed back
    expect(englishNavText).not.toBe(arabicNavText)
    
    // Verify new content does not contain Arabic characters (or very few)
    expect(isArabicText(englishNavText || '')).toBeFalsy()
  })

  test('should update layout direction immediately after language change to Arabic', async ({ page }) => {
    // Verify initial direction is LTR
    const initialIsRTL = await verifyDirAttribute(page, 'rtl')
    expect(initialIsRTL).toBeFalsy()
    
    // Switch to Arabic
    await switchToArabic(page)
    
    // Verify direction changed to RTL immediately
    const isRTL = await verifyDirAttribute(page, 'rtl')
    expect(isRTL).toBeTruthy()
    
    // Verify HTML lang attribute is also updated
    const langAttr = await page.locator('html').getAttribute('lang')
    expect(langAttr).toBe('ar')
  })

  test('should update layout direction immediately after language change back to English', async ({ page }) => {
    // Switch to Arabic first
    await switchToArabic(page)
    
    // Verify we're in RTL
    let isRTL = await verifyDirAttribute(page, 'rtl')
    expect(isRTL).toBeTruthy()
    
    // Switch back to English
    await switchToEnglish(page)
    
    // Verify direction changed back to LTR immediately
    isRTL = await verifyDirAttribute(page, 'rtl')
    expect(isRTL).toBeFalsy()
    
    // Verify HTML lang attribute is also updated
    const langAttr = await page.locator('html').getAttribute('lang')
    expect(langAttr).toBe('en')
  })

  test('should toggle language multiple times without issues', async ({ page }) => {
    // Toggle multiple times
    for (let i = 0; i < 3; i++) {
      // Switch to Arabic
      await switchToArabic(page)
      let dir = await page.locator('html').getAttribute('dir')
      expect(dir).toBe('rtl')
      
      // Switch to English
      await switchToEnglish(page)
      dir = await page.locator('html').getAttribute('dir')
      expect(dir).not.toBe('rtl')
    }
  })

  test('should maintain page functionality after language toggle', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page)
    
    // Verify page is still interactive
    const navigation = page.locator('nav')
    await expect(navigation).toBeVisible()
    
    // Verify we can still navigate (check if links are clickable)
    const links = page.locator('nav a')
    const linkCount = await links.count()
    expect(linkCount).toBeGreaterThan(0)
    
    // Switch back to English
    await switchToEnglish(page)
    
    // Verify page is still interactive
    await expect(navigation).toBeVisible()
  })
})
