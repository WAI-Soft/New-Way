# Test Screenshots Directory

This directory contains screenshots captured during Playwright tests for Arabic RTL testing.

## Directory Structure

```
test-screenshots/
├── baseline/           # Baseline screenshots for comparison
│   ├── en/            # English version screenshots
│   └── ar/            # Arabic version screenshots
├── current/           # Current test run screenshots
│   ├── en/            # English version screenshots
│   └── ar/            # Arabic version screenshots
└── failures/          # Screenshots from failed tests
```

## Naming Conventions

Screenshots follow this naming pattern:
```
{page}-{language}-{viewport}.png
```

### Components:
- **page**: The page being tested (e.g., `home`, `services`, `about`, `clients`, `partners`, `contact`)
- **language**: The language mode (`en` for English, `ar` for Arabic)
- **viewport**: The viewport size (`desktop`, `tablet`, `mobile`)

### Examples:
- `home-ar-desktop.png` - Home page in Arabic on desktop viewport
- `services-en-mobile.png` - Services page in English on mobile viewport
- `contact-ar-tablet.png` - Contact page in Arabic on tablet viewport

## Viewport Sizes

- **Desktop**: 1920x1080
- **Tablet**: 768x1024
- **Mobile**: 375x667

## Usage

Screenshots are automatically captured by Playwright tests and organized according to the naming convention above. The test suite uses these screenshots for:

1. **Visual Regression Testing**: Comparing current screenshots with baseline
2. **Manual Review**: Allowing developers to visually inspect RTL layout
3. **Documentation**: Providing visual evidence of Arabic translation coverage
4. **Debugging**: Capturing state when tests fail

## Maintenance

- Baseline screenshots should be updated when intentional UI changes are made
- Failed test screenshots should be reviewed and either:
  - Fixed by correcting the code
  - Accepted by updating the baseline
- Old screenshots should be cleaned up periodically to save space
