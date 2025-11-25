import { Page, Locator } from '@playwright/test'

/**
 * Verify the HTML dir attribute is set correctly
 * @param page - Playwright page object
 * @param expected - Expected direction ('rtl' or 'ltr')
 * @returns true if dir attribute matches expected value
 */
export async function verifyDirAttribute(
  page: Page,
  expected: 'rtl' | 'ltr'
): Promise<boolean> {
  const dirAttribute = await page.locator('html').getAttribute('dir')
  return dirAttribute === expected
}

/**
 * Verify text alignment of an element
 * @param element - Playwright locator for the element
 * @param expected - Expected alignment ('right' or 'left')
 * @returns true if text alignment matches expected value
 */
export async function verifyTextAlignment(
  element: Locator,
  expected: 'right' | 'left'
): Promise<boolean> {
  const textAlign = await element.evaluate((el) => {
    return window.getComputedStyle(el).textAlign
  })
  
  return textAlign === expected || textAlign === `${expected} start` || textAlign === 'start'
}

/**
 * Verify flex direction of an element
 * @param element - Playwright locator for the element
 * @param expected - Expected flex direction ('row-reverse' or 'row')
 * @returns true if flex direction matches expected value
 */
export async function verifyFlexDirection(
  element: Locator,
  expected: 'row-reverse' | 'row'
): Promise<boolean> {
  const flexDirection = await element.evaluate((el) => {
    return window.getComputedStyle(el).flexDirection
  })
  
  return flexDirection === expected
}

/**
 * Verify element positioning (checks if element is positioned on the expected side)
 * @param element - Playwright locator for the element
 * @param side - Expected side ('right' or 'left')
 * @returns true if element is positioned on the expected side
 */
export async function verifyElementPosition(
  element: Locator,
  side: 'right' | 'left'
): Promise<boolean> {
  const position = await element.evaluate((el) => {
    const rect = el.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    
    // Calculate which side the element is closer to
    const distanceFromLeft = rect.left
    const distanceFromRight = viewportWidth - rect.right
    
    return {
      left: distanceFromLeft,
      right: distanceFromRight,
      isOnRight: distanceFromRight < distanceFromLeft,
      isOnLeft: distanceFromLeft < distanceFromRight,
    }
  })
  
  if (side === 'right') {
    return position.isOnRight
  } else {
    return position.isOnLeft
  }
}

/**
 * Verify navigation menu alignment
 * @param page - Playwright page object
 * @returns true if navigation is properly aligned for current direction
 */
export async function verifyNavigationAlignment(page: Page): Promise<boolean> {
  const dirAttribute = await page.locator('html').getAttribute('dir')
  const isRTL = dirAttribute === 'rtl'
  
  // Find the navigation element
  const nav = page.locator('nav').first()
  
  if (!(await nav.isVisible())) {
    console.warn('Navigation element not found or not visible')
    return false
  }
  
  // Check if navigation items are aligned correctly
  const alignment = await nav.evaluate((el, rtl) => {
    const style = window.getComputedStyle(el)
    const flexDirection = style.flexDirection
    const justifyContent = style.justifyContent
    const textAlign = style.textAlign
    
    // Check various alignment properties
    const hasRTLFlexDirection = flexDirection === 'row-reverse'
    const hasRTLJustifyContent = justifyContent === 'flex-end' || justifyContent === 'end'
    const hasRTLTextAlign = textAlign === 'right'
    
    return {
      flexDirection,
      justifyContent,
      textAlign,
      isAlignedForRTL: hasRTLFlexDirection || hasRTLJustifyContent || hasRTLTextAlign,
    }
  }, isRTL)
  
  // For RTL, we expect some RTL alignment properties
  // For LTR, we expect default or left alignment
  if (isRTL) {
    return alignment.isAlignedForRTL
  } else {
    return !alignment.isAlignedForRTL || alignment.flexDirection === 'row'
  }
}

/**
 * Verify form input alignment
 * @param page - Playwright page object
 * @returns true if form inputs are properly aligned for current direction
 */
export async function verifyFormAlignment(page: Page): Promise<boolean> {
  const dirAttribute = await page.locator('html').getAttribute('dir')
  const isRTL = dirAttribute === 'rtl'
  
  // Find form inputs
  const inputs = page.locator('input[type="text"], input[type="email"], textarea')
  const inputCount = await inputs.count()
  
  if (inputCount === 0) {
    console.warn('No form inputs found on page')
    return true // No inputs to validate
  }
  
  // Check alignment of first few inputs
  const inputsToCheck = Math.min(inputCount, 3)
  
  for (let i = 0; i < inputsToCheck; i++) {
    const input = inputs.nth(i)
    
    if (!(await input.isVisible())) {
      continue
    }
    
    const textAlign = await input.evaluate((el) => {
      return window.getComputedStyle(el).textAlign
    })
    
    // For RTL, expect right alignment
    // For LTR, expect left alignment or default
    if (isRTL) {
      if (textAlign !== 'right' && textAlign !== 'start') {
        return false
      }
    } else {
      if (textAlign === 'right') {
        return false
      }
    }
  }
  
  return true
}
