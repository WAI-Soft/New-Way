# Playwright Test Infrastructure Setup Guide

This document provides detailed instructions for setting up and verifying the Playwright test infrastructure for Arabic RTL testing.

## ✅ Setup Completed

The following components have been configured:

### 1. Playwright Configuration (`playwright.config.ts`)
- ✅ Test directory configured: `./tests/e2e`
- ✅ Parallel execution enabled
- ✅ Multiple reporters configured (HTML, JSON, List, JUnit)
- ✅ Screenshot capture on failure
- ✅ Video recording on retry
- ✅ Trace collection on first retry
- ✅ Three viewport projects: Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- ✅ Web server auto-start configured

### 2. Directory Structure
```
tests/
├── e2e/
│   ├── arabic-translation/    # Translation coverage tests
│   ├── language-toggle/       # Language switching tests
│   ├── rtl-layout/           # RTL layout validation tests
│   └── smoke.spec.ts         # Basic infrastructure test
├── helpers/                   # Test utility functions (to be implemented)
├── fixtures/
│   └── test-data.ts          # Shared test data and constants
└── README.md                  # Test suite documentation
```

### 3. Screenshot Directory Structure
```
test-screenshots/
├── baseline/
│   ├── en/                   # English baseline screenshots
│   └── ar/                   # Arabic baseline screenshots
├── current/
│   ├── en/                   # Current English screenshots
│   └── ar/                   # Current Arabic screenshots
├── failures/                 # Failed test screenshots
└── README.md                 # Screenshot documentation
```

### 4. NPM Scripts
The following test scripts have been added to `package.json`:

- `npm test` - Run all tests
- `npm run test:ui` - Run tests in interactive UI mode
- `npm run test:headed` - Run tests with visible browser
- `npm run test:debug` - Run tests in debug mode
- `npm run test:report` - View HTML test report
- `npm run test:codegen` - Generate test code interactively

### 5. Test Artifacts Configuration
- ✅ Test results directory: `test-results/`
- ✅ HTML report: `test-results/html-report/`
- ✅ JSON results: `test-results/results.json`
- ✅ JUnit XML: `test-results/junit.xml`
- ✅ Artifacts: `test-results/artifacts/`

### 6. Git Configuration
Updated `.gitignore` to exclude:
- `/test-results/` - Test execution results
- `/playwright-report/` - Playwright reports
- `/playwright/.cache/` - Playwright cache
- `test-screenshots/current/` - Current test screenshots
- `test-screenshots/failures/` - Failed test screenshots

## 🚀 Getting Started

### Prerequisites
1. Node.js 18+ installed
2. npm or pnpm package manager
3. All project dependencies installed

### Installation Steps

1. **Install Dependencies** (if not already done)
   ```bash
   npm install
   ```

2. **Install Playwright Browsers**
   ```bash
   npx playwright install
   ```
   
   Or install specific browsers:
   ```bash
   npx playwright install chromium
   ```

3. **Verify Installation**
   Run the smoke test to verify everything is working:
   ```bash
   npm test tests/e2e/smoke.spec.ts
   ```

### First Test Run

1. **Start the Development Server**
   ```bash
   npm run dev
   ```
   
   The server should start on `http://localhost:3000`

2. **Run Tests** (in a new terminal)
   ```bash
   npm test
   ```

3. **View Results**
   ```bash
   npm run test:report
   ```

## 📋 Verification Checklist

Use this checklist to verify the setup is complete:

- [ ] Playwright is installed (`@playwright/test` in `package.json`)
- [ ] `playwright.config.ts` exists and is properly configured
- [ ] Test directory structure is created (`tests/e2e`, `tests/helpers`, `tests/fixtures`)
- [ ] Screenshot directory structure is created
- [ ] NPM test scripts are added to `package.json`
- [ ] `.gitignore` is updated with test artifacts
- [ ] Smoke test runs successfully
- [ ] Test report can be generated and viewed
- [ ] Development server starts correctly

## 🧪 Running Your First Test

### Interactive Mode (Recommended for Development)
```bash
npm run test:ui
```

This opens the Playwright UI where you can:
- See all tests
- Run tests individually
- Watch tests in real-time
- Debug failures
- View traces

### Headed Mode (See the Browser)
```bash
npm run test:headed
```

### Debug Mode (Step Through Tests)
```bash
npm run test:debug
```

### Run Specific Test File
```bash
npx playwright test tests/e2e/smoke.spec.ts
```

### Run Tests for Specific Viewport
```bash
npx playwright test --project=chromium-desktop
npx playwright test --project=chromium-tablet
npx playwright test --project=chromium-mobile
```

## 📊 Understanding Test Reports

### HTML Report
After running tests, view the HTML report:
```bash
npm run test:report
```

The report includes:
- Test results summary
- Individual test details
- Screenshots of failures
- Video recordings (if enabled)
- Trace files for debugging

### JSON Report
Located at `test-results/results.json`, useful for:
- CI/CD integration
- Custom reporting
- Programmatic analysis

### JUnit XML Report
Located at `test-results/junit.xml`, useful for:
- CI/CD systems (Jenkins, GitLab CI, etc.)
- Test result aggregation

## 🔧 Troubleshooting

### Issue: Tests fail to start
**Solution:**
1. Ensure dev server is running: `npm run dev`
2. Check if port 3000 is available
3. Verify Playwright browsers are installed: `npx playwright install`

### Issue: "Cannot find module '@playwright/test'"
**Solution:**
```bash
npm install
```

### Issue: Browser not found
**Solution:**
```bash
npx playwright install chromium
```

### Issue: Tests timeout
**Solution:**
1. Increase timeout in `playwright.config.ts`
2. Check network connectivity
3. Verify dev server is responding

### Issue: Screenshots not captured
**Solution:**
1. Check directory permissions for `test-screenshots/`
2. Verify screenshot path in test code
3. Check Playwright configuration

## 🎯 Next Steps

Now that the infrastructure is set up, you can proceed with:

1. **Task 2**: Create test utility modules
   - Arabic test utilities
   - RTL validators
   - Screenshot utilities
   - Console error monitoring

2. **Task 3**: Implement language toggle functionality tests

3. **Task 4+**: Implement page-specific translation and RTL tests

## 📚 Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Configuration](https://playwright.dev/docs/test-configuration)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Test Fixtures](https://playwright.dev/docs/test-fixtures)
- [Page Object Model](https://playwright.dev/docs/pom)

## 🤝 Contributing

When adding new tests:
1. Follow the existing directory structure
2. Use descriptive test names
3. Add comments explaining complex logic
4. Capture screenshots for visual tests
5. Monitor console for errors
6. Update documentation as needed

## ✨ Summary

The Playwright test infrastructure is now fully configured and ready for Arabic RTL testing. The setup includes:

- ✅ Comprehensive test configuration
- ✅ Organized directory structure
- ✅ Screenshot management system
- ✅ Multiple test execution modes
- ✅ Detailed reporting capabilities
- ✅ CI/CD ready configuration
- ✅ Smoke test for verification

You can now proceed with implementing the test utilities and test suites for Arabic translation and RTL layout validation.
