# Test Suite Documentation

## Overview

This directory contains the test suite for the Page API Routes feature, including unit tests and property-based tests.

## Test Framework

- **Jest**: Unit testing framework
- **fast-check**: Property-based testing library
- **ts-jest**: TypeScript support for Jest

## Directory Structure

```
__tests__/
├── lib/
│   └── pages/          # Tests for lib/pages modules
├── api/
│   └── pages/          # Tests for API route handlers
├── properties/         # Property-based tests
└── setup.test.ts       # Framework verification tests
```

## Running Tests

### All Unit Tests
```bash
npm run test:unit
```

### Watch Mode
```bash
npm run test:unit:watch
```

### Coverage Report
```bash
npm run test:unit:coverage
```

### Property-Based Tests Only
```bash
npm run test:properties
```

## Writing Tests

### Unit Tests

Unit tests should be placed in the appropriate subdirectory and named `*.test.ts`:

```typescript
describe('MyComponent', () => {
  it('should do something', () => {
    expect(result).toBe(expected)
  })
})
```

### Property-Based Tests

Property-based tests should be named `*.property.test.ts` and include a comment tag:

```typescript
import * as fc from 'fast-check'

describe('MyComponent Properties', () => {
  it('should satisfy property X', () => {
    // **Feature: page-api-routes, Property 1: Description**
    fc.assert(
      fc.property(fc.string(), (input) => {
        // Test logic
        return true
      }),
      { numRuns: 100 }
    )
  })
})
```

## Configuration

- **jest.config.js**: Main Jest configuration
- **jest.setup.js**: Global test setup
- **tsconfig.json**: TypeScript configuration

## Best Practices

1. Each property-based test should run at least 100 iterations
2. Tag each property test with the design document property reference
3. Use smart generators that constrain to valid input spaces
4. Write descriptive test names that explain what is being tested
5. Keep tests focused on a single behavior or property
