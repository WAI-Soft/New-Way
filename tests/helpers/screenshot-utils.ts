import { Page, Locator } from '@playwright/test'
import * as path from 'path'
import * as fs from 'fs'

// Screenshot directory structure
const SCREENSHOT_BASE_DIR = 'test-screenshots'
const BASELINE_DIR = path.join(SCREENSHOT_BASE_DIR, 'baseline')
const CURRENT_DIR = path.join(SCREENSHOT_BASE_DIR, 'current')

/**
 * Ensure screenshot directories exist
 */
function ensureDirectories(language: 'en' | 'ar'): void {
  const dirs = [
    SCREENSHOT_BASE_DIR,
    BASELINE_DIR,
    CURRENT_DIR,
    path.join(BASELINE_DIR, language),
    path.join(CURRENT_DIR, language),
  ]
  
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
  })
}

/**
 * Generate screenshot filename
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @param viewport - Optional viewport descriptor (e.g., 'mobile', 'tablet', 'desktop')
 * @returns Formatted filename
 */
function generateFilename(
  name: string,
  language: 'en' | 'ar',
  viewport?: string
): string {
  const parts = [name, language]
  if (viewport) {
    parts.push(viewport)
  }
  return `${parts.join('-')}.png`
}

/**
 * Capture full page screenshot
 * @param page - Playwright page object
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @returns Path to the saved screenshot
 */
export async function captureFullPage(
  page: Page,
  name: string,
  language: 'en' | 'ar'
): Promise<string> {
  ensureDirectories(language)
  
  const filename = generateFilename(name, language, 'desktop')
  const filepath = path.join(CURRENT_DIR, language, filename)
  
  await page.screenshot({
    path: filepath,
    fullPage: true,
  })
  
  return filepath
}

/**
 * Capture element screenshot
 * @param element - Playwright locator for the element
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @returns Path to the saved screenshot
 */
export async function captureElement(
  element: Locator,
  name: string,
  language: 'en' | 'ar'
): Promise<string> {
  ensureDirectories(language)
  
  const filename = generateFilename(name, language, 'element')
  const filepath = path.join(CURRENT_DIR, language, filename)
  
  await element.screenshot({
    path: filepath,
  })
  
  return filepath
}

/**
 * Capture screenshots at different viewport sizes
 * @param page - Playwright page object
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 */
export async function captureResponsive(
  page: Page,
  name: string,
  language: 'en' | 'ar'
): Promise<void> {
  ensureDirectories(language)
  
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1920, height: 1080 },
  ]
  
  for (const viewport of viewports) {
    // Set viewport size
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    })
    
    // Wait for any layout shifts
    await page.waitForTimeout(500)
    
    // Capture screenshot
    const filename = generateFilename(name, language, viewport.name)
    const filepath = path.join(CURRENT_DIR, language, filename)
    
    await page.screenshot({
      path: filepath,
      fullPage: true,
    })
  }
  
  // Reset to default desktop viewport
  await page.setViewportSize({ width: 1920, height: 1080 })
}

/**
 * Capture baseline screenshot (for visual regression testing)
 * @param page - Playwright page object
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @returns Path to the saved baseline screenshot
 */
export async function captureBaseline(
  page: Page,
  name: string,
  language: 'en' | 'ar'
): Promise<string> {
  ensureDirectories(language)
  
  const filename = generateFilename(name, language, 'desktop')
  const filepath = path.join(BASELINE_DIR, language, filename)
  
  await page.screenshot({
    path: filepath,
    fullPage: true,
  })
  
  return filepath
}

/**
 * Get screenshot path for comparison
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @param type - Type of screenshot ('baseline' or 'current')
 * @param viewport - Optional viewport descriptor
 * @returns Path to the screenshot
 */
export function getScreenshotPath(
  name: string,
  language: 'en' | 'ar',
  type: 'baseline' | 'current' = 'current',
  viewport: string = 'desktop'
): string {
  const filename = generateFilename(name, language, viewport)
  const dir = type === 'baseline' ? BASELINE_DIR : CURRENT_DIR
  return path.join(dir, language, filename)
}

/**
 * Check if baseline screenshot exists
 * @param name - Base name for the screenshot
 * @param language - Language code ('en' or 'ar')
 * @param viewport - Optional viewport descriptor
 * @returns true if baseline exists
 */
export function baselineExists(
  name: string,
  language: 'en' | 'ar',
  viewport: string = 'desktop'
): boolean {
  const filepath = getScreenshotPath(name, language, 'baseline', viewport)
  return fs.existsSync(filepath)
}
