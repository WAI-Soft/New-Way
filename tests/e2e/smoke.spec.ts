import { test, expect } from '@playwright/test'

/**
 * Smoke Test - Verify Basic Setup
 * 
 * This test verifies that the test infrastructure is properly configured
 * and the application is accessible.
 */

test.describe('Smoke Test - Infrastructure Setup', () => {
  test('should load the home page successfully', async ({ page }) => {
    // Navigate to home page
    await page.goto('/')
    
    // Verify page loads
    await expect(page).toHaveTitle(/.*/)
    
    // Verify main content is visible
    const body = page.locator('body')
    await expect(body).toBeVisible()
  })

  test('should have proper HTML structure', async ({ page }) => {
    await page.goto('/')
    
    // Verify HTML element exists
    const html = page.locator('html')
    await expect(html).toBeVisible()
    
    // Verify body element exists
    const body = page.locator('body')
    await expect(body).toBeVisible()
  })

  test('should not have console errors on page load', async ({ page }) => {
    const consoleErrors: string[] = []
    
    // Listen for console errors
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })
    
    // Navigate to home page
    await page.goto('/')
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle')
    
    // Verify no console errors (allow some common warnings)
    const criticalErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('404')
    )
    
    expect(criticalErrors).toHaveLength(0)
  })
})
