import { Page } from '@playwright/test'

/**
 * Switch the website language to Arabic
 * @param page - Playwright page object
 */
export async function switchToArabic(page: Page): Promise<void> {
  // Click the language toggle button
  const languageToggle = page.locator('[data-testid="language-toggle"]').or(
    page.locator('button:has-text("العربية")').or(
      page.locator('button:has-text("AR")')
    )
  )
  
  // Check if already in Arabic by checking the html dir attribute
  const currentDir = await page.locator('html').getAttribute('dir')
  
  if (currentDir !== 'rtl') {
    await languageToggle.click()
    // Wait for the language change to take effect
    await page.waitForTimeout(500)
  }
}

/**
 * Switch the website language to English
 * @param page - Playwright page object
 */
export async function switchToEnglish(page: Page): Promise<void> {
  // Click the language toggle button
  const languageToggle = page.locator('[data-testid="language-toggle"]').or(
    page.locator('button:has-text("English")').or(
      page.locator('button:has-text("EN")')
    )
  )
  
  // Check if already in English by checking the html dir attribute
  const currentDir = await page.locator('html').getAttribute('dir')
  
  if (currentDir === 'rtl') {
    await languageToggle.click()
    // Wait for the language change to take effect
    await page.waitForTimeout(500)
  }
}

/**
 * Check if text contains Arabic characters
 * @param text - Text to check
 * @returns true if text contains Arabic characters
 */
export function isArabicText(text: string): boolean {
  // Arabic Unicode range: \u0600-\u06FF (Arabic), \u0750-\u077F (Arabic Supplement)
  // \u08A0-\u08FF (Arabic Extended-A), \uFB50-\uFDFF (Arabic Presentation Forms-A)
  // \uFE70-\uFEFF (Arabic Presentation Forms-B)
  const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/
  return arabicRegex.test(text)
}

/**
 * Check if text contains only English/Latin characters (and common punctuation/numbers)
 * @param text - Text to check
 * @returns true if text contains only Latin characters
 */
export function isEnglishText(text: string): boolean {
  // Remove whitespace, numbers, and common punctuation
  const cleanedText = text.replace(/[\s0-9.,!?;:()\-–—'""\[\]{}\/\\@#$%^&*+=<>|~`]/g, '')
  
  // If nothing left after cleaning, consider it neutral (not English)
  if (cleanedText.length === 0) {
    return false
  }
  
  // Check if remaining text is only Latin characters
  const latinRegex = /^[a-zA-Z]+$/
  return latinRegex.test(cleanedText)
}

/**
 * Get all visible text content from the page
 * @param page - Playwright page object
 * @returns Array of visible text strings
 */
export async function getAllVisibleText(page: Page): Promise<string[]> {
  // Get all text content from visible elements
  const textElements = await page.locator('body *:visible').allTextContents()
  
  // Filter out empty strings and whitespace-only strings
  return textElements
    .map(text => text.trim())
    .filter(text => text.length > 0)
}

/**
 * Verify that no English text remains on the page (except allowed exceptions)
 * @param page - Playwright page object
 * @param allowedExceptions - Array of strings that are allowed to be in English (e.g., brand names, emails)
 * @returns true if no English text found (except exceptions)
 */
export async function verifyNoEnglishText(
  page: Page,
  allowedExceptions: string[] = []
): Promise<boolean> {
  const allText = await getAllVisibleText(page)
  
  // Common exceptions that are typically allowed in English
  const defaultExceptions = [
    'email',
    'http',
    'https',
    'www',
    '.com',
    '.net',
    '.org',
    '@',
    'CEO',
    'CTO',
    'CFO',
    'IT',
    'AI',
    'API',
    'URL',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
  ]
  
  const exceptions = [...defaultExceptions, ...allowedExceptions]
  
  for (const text of allText) {
    // Skip if text is in exceptions list
    const isException = exceptions.some(exception => 
      text.toLowerCase().includes(exception.toLowerCase())
    )
    
    if (isException) {
      continue
    }
    
    // Skip if text contains Arabic characters (it's already translated)
    if (isArabicText(text)) {
      continue
    }
    
    // Check if this is English text
    if (isEnglishText(text)) {
      console.log(`Found English text: "${text}"`)
      return false
    }
  }
  
  return true
}
