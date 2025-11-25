/**
 * Test Data and Fixtures for Arabic RTL Testing
 * 
 * This file contains shared test data, constants, and fixtures
 * used across the test suite.
 */

/**
 * Viewport configurations for responsive testing
 */
export const VIEWPORTS = {
  mobile: {
    width: 375,
    height: 667,
    name: 'mobile'
  },
  tablet: {
    width: 768,
    height: 1024,
    name: 'tablet'
  },
  desktop: {
    width: 1920,
    height: 1080,
    name: 'desktop'
  }
} as const

/**
 * Page routes for testing
 */
export const ROUTES = {
  home: '/',
  services: '/services',
  about: '/about',
  clients: '/clients',
  partners: '/partners',
  contact: '/contact'
} as const

/**
 * Language codes
 */
export const LANGUAGES = {
  english: 'en',
  arabic: 'ar'
} as const

/**
 * Common selectors used across tests
 */
export const SELECTORS = {
  languageToggle: '[data-testid="language-toggle"], button[aria-label*="language"], button:has-text("English"), button:has-text("العربية")',
  navigation: 'nav, [role="navigation"]',
  mainContent: 'main, [role="main"]',
  footer: 'footer',
  heading: 'h1',
  form: 'form',
  formInput: 'input, textarea',
  formButton: 'button[type="submit"]'
} as const

/**
 * Expected Arabic translations for common UI elements
 * Used for validation in tests
 */
export const ARABIC_TRANSLATIONS = {
  home: 'الرئيسية',
  services: 'الخدمات',
  about: 'من نحن',
  clients: 'العملاء',
  partners: 'الشركاء',
  contact: 'اتصل بنا'
} as const

/**
 * Allowed exceptions for English text in Arabic mode
 * These are proper nouns, brand names, or technical terms
 * that should remain in English
 */
export const ALLOWED_ENGLISH_EXCEPTIONS = [
  'IAM',
  'SSO',
  'PAM',
  'MFA',
  'API',
  'URL',
  'HTTP',
  'HTTPS',
  'email',
  '@',
  '.com',
  '.sa'
] as const

/**
 * Test timeouts (in milliseconds)
 */
export const TIMEOUTS = {
  short: 5000,
  medium: 10000,
  long: 30000,
  navigation: 30000
} as const

/**
 * Screenshot naming helper
 */
export function getScreenshotName(
  page: string,
  language: 'en' | 'ar',
  viewport: 'mobile' | 'tablet' | 'desktop'
): string {
  return `${page}-${language}-${viewport}.png`
}

/**
 * Get screenshot path for baseline or current
 */
export function getScreenshotPath(
  type: 'baseline' | 'current' | 'failures',
  page: string,
  language: 'en' | 'ar',
  viewport: 'mobile' | 'tablet' | 'desktop'
): string {
  const filename = getScreenshotName(page, language, viewport)
  return `test-screenshots/${type}/${language}/${filename}`
}
