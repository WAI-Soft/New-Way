# Arabic RTL Testing Suite

This directory contains comprehensive automated tests for verifying Arabic language translation and RTL (right-to-left) layout functionality across the entire website.

## Overview

The test suite uses Playwright for end-to-end testing and includes:
- **Translation Coverage Tests**: Verify all text content is translated to Arabic
- **RTL Layout Tests**: Verify proper right-to-left layout implementation
- **Language Toggle Tests**: Verify language switching functionality
- **Visual Regression Tests**: Capture screenshots for manual review
- **Responsive Tests**: Test across mobile, tablet, and desktop viewports
- **Form Functionality Tests**: Verify forms work correctly in Arabic RTL mode

## Directory Structure

```
tests/
├── e2e/                          # End-to-end test suites
│   ├── arabic-translation/       # Translation coverage tests
│   ├── language-toggle/          # Language switching tests
│   └── rtl-layout/              # RTL layout validation tests
├── helpers/                      # Test utility functions
│   ├── arabic-test-utils.ts     # Arabic language utilities
│   ├── rtl-validators.ts        # RTL layout validators
│   ├── screenshot-utils.ts      # Screenshot capture utilities
│   └── console-monitor.ts       # Console error monitoring
├── fixtures/                     # Test data and fixtures
│   └── test-data.ts             # Shared test data
└── README.md                     # This file
```

## Prerequisites

1. **Node.js**: Version 18 or higher
2. **Dependencies**: Run `npm install` to install all dependencies
3. **Playwright Browsers**: Run `npx playwright install` to install browser binaries

## Running Tests

### Run All Tests
```bash
npm test
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:headed
```

### Run Tests in Debug Mode
```bash
npm run test:debug
```

### Run Specific Test File
```bash
npx playwright test tests/e2e/arabic-translation/home.spec.ts
```

### Run Tests for Specific Project (Viewport)
```bash
npx playwright test --project=chromium-desktop
npx playwright test --project=chromium-tablet
npx playwright test --project=chromium-mobile
```

### View Test Report
```bash
npm run test:report
```

## Test Configuration

The test configuration is defined in `playwright.config.ts` at the project root. Key settings:

- **Base URL**: `http://localhost:3000` (configurable via `BASE_URL` env var)
- **Timeout**: 60 seconds per test
- **Retries**: 2 retries on CI, 0 locally
- **Parallel Execution**: Enabled (disabled on CI)
- **Screenshots**: Captured on failure
- **Video**: Recorded on first retry
- **Trace**: Collected on first retry

### Viewport Configurations

- **Desktop**: 1920x1080 (Chromium)
- **Tablet**: 768x1024 (Chromium)
- **Mobile**: 375x667 (iPhone 12)

## Writing Tests

### Test Structure

Each test file should follow this structure:

```typescript
import { test, expect } from '@playwright/test'
import { switchToArabic, isArabicText } from '../helpers/arabic-test-utils'
import { verifyDirAttribute } from '../helpers/rtl-validators'

test.describe('Page Name - Arabic Translation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display content in Arabic', async ({ page }) => {
    // Switch to Arabic
    await switchToArabic(page)
    
    // Verify translation
    const heading = await page.locator('h1').textContent()
    expect(isArabicText(heading)).toBeTruthy()
    
    // Verify RTL
    await verifyDirAttribute(page, 'rtl')
  })
})
```

### Best Practices

1. **Use Helper Functions**: Leverage utilities in `helpers/` for common operations
2. **Descriptive Test Names**: Use clear, descriptive test names
3. **Isolate Tests**: Each test should be independent
4. **Wait for Elements**: Use Playwright's auto-waiting features
5. **Capture Screenshots**: Use screenshot utilities for visual verification
6. **Monitor Console**: Check for JavaScript errors during tests
7. **Test Data**: Use fixtures for shared test data

## Test Utilities

### Arabic Test Utils (`helpers/arabic-test-utils.ts`)
- `switchToArabic(page)`: Switch to Arabic language
- `switchToEnglish(page)`: Switch to English language
- `isArabicText(text)`: Check if text contains Arabic characters
- `isEnglishText(text)`: Check if text contains only Latin characters
- `verifyNoEnglishText(page)`: Verify no English text remains

### RTL Validators (`helpers/rtl-validators.ts`)
- `verifyDirAttribute(page, expected)`: Verify HTML dir attribute
- `verifyTextAlignment(element, expected)`: Verify text alignment
- `verifyFlexDirection(element, expected)`: Verify flex direction
- `verifyElementPosition(element, side)`: Verify element positioning

### Screenshot Utils (`helpers/screenshot-utils.ts`)
- `captureFullPage(page, name, language)`: Capture full page screenshot
- `captureElement(element, name, language)`: Capture element screenshot
- `captureResponsive(page, name, language)`: Capture at all viewports

### Console Monitor (`helpers/console-monitor.ts`)
- `startMonitoring(page)`: Start monitoring console
- `getErrors()`: Get collected errors
- `verifyNoErrors()`: Assert no errors occurred

## Debugging Tests

### Visual Debugging
```bash
npm run test:headed
```

### Interactive Debugging
```bash
npm run test:debug
```

### Generate Test Code
```bash
npm run test:codegen
```

### View Traces
When a test fails, traces are automatically collected. View them in the HTML report:
```bash
npm run test:report
```

## CI/CD Integration

The test suite is configured for CI/CD environments:

- **Retries**: Automatically retries failed tests twice
- **Parallel Execution**: Disabled on CI for stability
- **Artifacts**: Screenshots, videos, and traces are saved
- **Reports**: HTML, JSON, and JUnit reports are generated

### Environment Variables

- `CI`: Set to `true` in CI environments
- `BASE_URL`: Override the base URL for tests

## Troubleshooting

### Tests Fail to Start
- Ensure dev server is running: `npm run dev`
- Check if port 3000 is available
- Install Playwright browsers: `npx playwright install`

### Tests Timeout
- Increase timeout in `playwright.config.ts`
- Check network connectivity
- Verify dev server is responding

### Screenshots Not Captured
- Check `test-screenshots/` directory permissions
- Verify screenshot utilities are imported correctly
- Check Playwright configuration

### Console Errors in Tests
- Review browser console in headed mode
- Check console monitor output
- Verify JavaScript is loading correctly

## Contributing

When adding new tests:

1. Follow the existing directory structure
2. Use helper functions for common operations
3. Add descriptive test names and comments
4. Capture screenshots for visual tests
5. Update this README if adding new utilities
6. Ensure tests pass locally before committing

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Arabic RTL Testing Guide](https://www.w3.org/International/questions/qa-html-dir)
