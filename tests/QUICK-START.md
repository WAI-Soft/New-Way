# Quick Start Guide - Arabic RTL Testing

Get up and running with the Arabic RTL test suite in 5 minutes.

## 🚀 Quick Setup

```bash
# 1. Install Playwright browsers (one-time setup)
npx playwright install chromium

# 2. Start the dev server (in one terminal)
npm run dev

# 3. Run tests (in another terminal)
npm test
```

## 📝 Common Commands

```bash
# Run all tests
npm test

# Run tests with UI (recommended for development)
npm run test:ui

# Run tests and see the browser
npm run test:headed

# Debug a specific test
npm run test:debug

# View test report
npm run test:report

# Run specific test file
npx playwright test tests/e2e/smoke.spec.ts

# Run tests for specific viewport
npx playwright test --project=chromium-mobile
```

## 📁 Where to Add Tests

```
tests/e2e/
├── arabic-translation/    # Add translation tests here
├── language-toggle/       # Add language switching tests here
├── rtl-layout/           # Add RTL layout tests here
└── smoke.spec.ts         # Basic infrastructure test
```

## ✍️ Writing a Test

```typescript
import { test, expect } from '@playwright/test'

test('my test name', async ({ page }) => {
  // Navigate to page
  await page.goto('/')
  
  // Interact with elements
  await page.click('button')
  
  // Make assertions
  await expect(page.locator('h1')).toBeVisible()
})
```

## 🎯 Test Checklist

When writing tests, ensure:
- [ ] Test has a descriptive name
- [ ] Test is independent (doesn't rely on other tests)
- [ ] Test uses proper selectors
- [ ] Test includes assertions
- [ ] Test captures screenshots if needed
- [ ] Test checks for console errors

## 📸 Screenshots

Screenshots are automatically saved to:
- `test-screenshots/baseline/` - Baseline images
- `test-screenshots/current/` - Current test run
- `test-screenshots/failures/` - Failed test screenshots

## 🐛 Debugging

```bash
# Run in debug mode
npm run test:debug

# Run with browser visible
npm run test:headed

# Generate test code by recording actions
npm run test:codegen
```

## 📊 Viewing Results

After running tests:
```bash
npm run test:report
```

This opens an HTML report with:
- Test results
- Screenshots
- Videos (on failure)
- Traces for debugging

## 🆘 Common Issues

**Tests won't start?**
- Make sure dev server is running: `npm run dev`
- Check if port 3000 is available

**Browser not found?**
- Install browsers: `npx playwright install`

**Tests timeout?**
- Check network connection
- Verify dev server is responding

## 📚 Learn More

- Full documentation: `tests/README.md`
- Setup guide: `tests/SETUP.md`
- Test data: `tests/fixtures/test-data.ts`
- Playwright docs: https://playwright.dev/

## ✅ Verify Setup

Run the smoke test to verify everything works:
```bash
npm test tests/e2e/smoke.spec.ts
```

If it passes, you're ready to go! 🎉
