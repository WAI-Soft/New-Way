import { test, expect } from '@playwright/test'

/**
 * Service Detail RTL Test
 * 
 * This test verifies that the service detail page correctly displays
 * text overlay on images in RTL (Arabic) mode.
 */

test.describe('Service Detail RTL Layout', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a service detail page
    await page.goto('/services/single-sign-on')
    // Wait for page to load
    await page.waitForLoadState('networkidle')
  })

  test('should position text overlay on right side in Arabic mode', async ({ page }) => {
    // Switch to Arabic
    const languageToggle = page.locator('[data-testid="language-toggle"], button:has-text("AR"), button:has-text("العربية")').first()
    await languageToggle.click()
    
    // Wait for language change
    await page.waitForTimeout(500)
    
    // Verify HTML dir attribute is set to rtl
    const htmlDir = await page.locator('html').getAttribute('dir')
    expect(htmlDir).toBe('rtl')
    
    // Find the image container with overlay
    const imageContainer = page.locator('div.relative.max-w-4xl').first()
    await expect(imageContainer).toBeVisible()
    
    // Find the title overlay container
    const overlayContainer = imageContainer.locator('div.absolute.bottom-0').first()
    await expect(overlayContainer).toBeVisible()
    
    // Get the computed styles of the overlay container
    const overlayStyles = await overlayContainer.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return {
        right: styles.right,
        left: styles.left,
        position: styles.position
      }
    })
    
    // In RTL mode, the overlay should be positioned on the right
    // right should be 0 or a small value (padding), left should be auto
    expect(overlayStyles.position).toBe('absolute')
    expect(overlayStyles.right).toBe('0px')
    expect(overlayStyles.left).toBe('auto')
    
    // Verify the text is right-aligned
    const titleText = overlayContainer.locator('h2').first()
    await expect(titleText).toBeVisible()
    
    const textAlign = await titleText.evaluate((el) => {
      return window.getComputedStyle(el).textAlign
    })
    
    expect(textAlign).toBe('right')
  })

  test('should position text overlay on left side in English mode', async ({ page }) => {
    // Ensure we're in English mode (default)
    const languageToggle = page.locator('[data-testid="language-toggle"], button:has-text("EN"), button:has-text("English")').first()
    const currentLang = await page.locator('html').getAttribute('dir')
    
    if (currentLang === 'rtl') {
      await languageToggle.click()
      await page.waitForTimeout(500)
    }
    
    // Verify HTML dir attribute is set to ltr
    const htmlDir = await page.locator('html').getAttribute('dir')
    expect(htmlDir).toBe('ltr')
    
    // Find the image container with overlay
    const imageContainer = page.locator('div.relative.max-w-4xl').first()
    await expect(imageContainer).toBeVisible()
    
    // Find the title overlay container
    const overlayContainer = imageContainer.locator('div.absolute.bottom-0').first()
    await expect(overlayContainer).toBeVisible()
    
    // Get the computed styles of the overlay container
    const overlayStyles = await overlayContainer.evaluate((el) => {
      const styles = window.getComputedStyle(el)
      return {
        right: styles.right,
        left: styles.left,
        position: styles.position
      }
    })
    
    // In LTR mode, the overlay should be positioned on the left
    expect(overlayStyles.position).toBe('absolute')
    expect(overlayStyles.left).toBe('0px')
    expect(overlayStyles.right).toBe('auto')
    
    // Verify the text is left-aligned
    const titleText = overlayContainer.locator('h2').first()
    await expect(titleText).toBeVisible()
    
    const textAlign = await titleText.evaluate((el) => {
      return window.getComputedStyle(el).textAlign
    })
    
    expect(textAlign).toBe('left')
  })

  test('should have correct flex direction in Arabic mode', async ({ page }) => {
    // Switch to Arabic
    const languageToggle = page.locator('[data-testid="language-toggle"], button:has-text("AR"), button:has-text("العربية")').first()
    await languageToggle.click()
    await page.waitForTimeout(500)
    
    // Find the flex container inside the overlay
    const overlayContainer = page.locator('div.absolute.bottom-0').first()
    const flexContainer = overlayContainer.locator('div.flex.items-center').first()
    await expect(flexContainer).toBeVisible()
    
    // Get the flex direction
    const flexDirection = await flexContainer.evaluate((el) => {
      return window.getComputedStyle(el).flexDirection
    })
    
    // In Arabic (RTL), flex direction should be row (not row-reverse)
    expect(flexDirection).toBe('row')
  })

  test('should have correct flex direction in English mode', async ({ page }) => {
    // Ensure we're in English mode
    const languageToggle = page.locator('[data-testid="language-toggle"], button:has-text("EN"), button:has-text("English")').first()
    const currentLang = await page.locator('html').getAttribute('dir')
    
    if (currentLang === 'rtl') {
      await languageToggle.click()
      await page.waitForTimeout(500)
    }
    
    // Find the flex container inside the overlay
    const overlayContainer = page.locator('div.absolute.bottom-0').first()
    const flexContainer = overlayContainer.locator('div.flex.items-center').first()
    await expect(flexContainer).toBeVisible()
    
    // Get the flex direction
    const flexDirection = await flexContainer.evaluate((el) => {
      return window.getComputedStyle(el).flexDirection
    })
    
    // In English (LTR), flex direction should be row-reverse
    expect(flexDirection).toBe('row-reverse')
  })
})

