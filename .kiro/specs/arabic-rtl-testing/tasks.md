# Implementation Plan

- [x] 1. Set up Playwright test infrastructure





  - Configure Playwright with proper settings for Arabic RTL testing
  - Create test directory structure (e2e, helpers, fixtures)
  - Set up screenshot directory and naming conventions
  - Configure test reporter for comprehensive output
  - _Requirements: All requirements_

- [x] 2. Create test utility modules





- [x] 2.1 Implement Arabic test utilities


  - Create `tests/helpers/arabic-test-utils.ts` with functions for language switching, text validation, and Arabic character detection
  - Implement `switchToArabic()`, `switchToEnglish()`, `isArabicText()`, `isEnglishText()`, and `verifyNoEnglishText()` functions
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6_

- [x] 2.2 Implement RTL validation utilities


  - Create `tests/helpers/rtl-validators.ts` with functions for validating RTL layout properties
  - Implement `verifyDirAttribute()`, `verifyTextAlignment()`, `verifyFlexDirection()`, `verifyElementPosition()`, `verifyNavigationAlignment()`, and `verifyFormAlignment()` functions
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

- [x] 2.3 Implement screenshot utilities


  - Create `tests/helpers/screenshot-utils.ts` with functions for capturing and managing screenshots
  - Implement `captureFullPage()`, `captureElement()`, and `captureResponsive()` functions with proper naming conventions
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_


- [x] 2.4 Implement console error monitoring

  - Create `tests/helpers/console-monitor.ts` with console message tracking functionality
  - Implement `startMonitoring()`, `getErrors()`, `getWarnings()`, `verifyNoErrors()`, and `clear()` functions
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [-] 3. Implement language toggle functionality tests









- [x] 3.1 Create language toggle test suite


  - Create `tests/e2e/language-toggle/toggle-functionality.spec.ts`
  - Write tests for switching from English to Arabic and back
  - Verify content updates immediately after language change
  - Verify layout direction updates immediately after language change
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [x] 3.2 Write property test for language toggle bidirectionality


  - **Property 3: Language Toggle Bidirectionality**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4**


- [x] 3.3 Create language persistence test suite

  - Create `tests/e2e/language-toggle/persistence.spec.ts`
  - Write tests for localStorage persistence
  - Verify language preference is applied on page reload
  - Verify language preference persists across page navigation
  - Verify default language is English when no preference exists
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [ ] 3.4 Write property test for language persistence



  - **Property 4: Language Persistence**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.4**

- [ ] 4. Implement home page translation and RTL tests
- [ ] 4.1 Create home page test suite
  - Create `tests/e2e/arabic-translation/home.spec.ts`
  - Write tests for navigation translation
  - Write tests for hero section translation
  - Write tests for services section translation
  - Write tests for partners section translation
  - Write tests for CTA section translation
  - Write tests for footer translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.1_

- [ ] 4.2 Write property test for complete translation coverage on home page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 4.3 Write RTL layout tests for home page
  - Verify HTML dir attribute is "rtl"
  - Verify navigation menu is right-aligned
  - Verify content sections flow right to left
  - Verify flex containers are reversed
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 4.4 Write property test for RTL direction consistency on home page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 4.5 Write property test for error-free language switching on home page
  - **Property 7: Error-Free Language Switching**
  - **Validates: Requirements 9.1, 9.2, 9.3, 9.4**

- [ ] 5. Implement services page translation and RTL tests
- [ ] 5.1 Create services page test suite
  - Create `tests/e2e/arabic-translation/services.spec.ts`
  - Write tests for page title and subtitle translation
  - Write tests for service cards translation (IAM, SSO, PAM, Log Management, MFA, Cybersecurity)
  - Write tests for "Why Choose Us" section translation
  - Write tests for services CTA section translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.2_

- [ ] 5.2 Write property test for complete translation coverage on services page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 5.3 Write RTL layout tests for services page
  - Verify service cards layout in RTL
  - Verify service features list alignment
  - Verify "Learn More" buttons alignment
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 5.4 Write property test for RTL direction consistency on services page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 6. Implement about page translation and RTL tests
- [ ] 6.1 Create about page test suite
  - Create `tests/e2e/arabic-translation/about.spec.ts`
  - Write tests for page title and subtitle translation
  - Write tests for company overview translation
  - Write tests for mission, vision, values translation
  - Write tests for FAQs section translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.3_

- [ ] 6.2 Write property test for complete translation coverage on about page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 6.3 Write RTL layout tests for about page
  - Verify content sections layout in RTL
  - Verify team cards alignment (if applicable)
  - Verify FAQ accordion alignment
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 6.4 Write property test for RTL direction consistency on about page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 7. Implement clients page translation and RTL tests
- [ ] 7.1 Create clients page test suite
  - Create `tests/e2e/arabic-translation/clients.spec.ts`
  - Write tests for page title and subtitle translation
  - Write tests for client grid translation
  - Write tests for industries section translation
  - Write tests for testimonials section translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.4_

- [ ] 7.2 Write property test for complete translation coverage on clients page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 7.3 Write RTL layout tests for clients page
  - Verify client grid layout in RTL
  - Verify testimonial cards alignment
  - Verify industries section layout
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 7.4 Write property test for RTL direction consistency on clients page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 8. Implement partners page translation and RTL tests
- [ ] 8.1 Create partners page test suite
  - Create `tests/e2e/arabic-translation/partners.spec.ts`
  - Write tests for page title and subtitle translation
  - Write tests for partner grid translation
  - Write tests for partner categories translation
  - Write tests for partnership benefits translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.5_

- [ ] 8.2 Write property test for complete translation coverage on partners page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 8.3 Write RTL layout tests for partners page
  - Verify partner grid layout in RTL
  - Verify partner category sections alignment
  - Verify partnership benefits cards layout
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 8.4 Write property test for RTL direction consistency on partners page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 9. Implement contact page translation and RTL tests
- [ ] 9.1 Create contact page test suite
  - Create `tests/e2e/arabic-translation/contact.spec.ts`
  - Write tests for page title and subtitle translation
  - Write tests for contact information translation
  - Write tests for contact form labels and placeholders translation
  - Write tests for location map section translation
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 4.6_

- [ ] 9.2 Write property test for complete translation coverage on contact page
  - **Property 1: Complete Translation Coverage**
  - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.5, 1.6**

- [ ] 9.3 Write contact form functionality tests in Arabic
  - Verify form labels are in Arabic
  - Verify form placeholders are in Arabic
  - Verify input fields are right-aligned
  - Verify submit button text is in Arabic
  - Test form submission in Arabic mode
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ] 9.4 Write property test for form functionality in RTL
  - **Property 5: Form Functionality in RTL**
  - **Validates: Requirements 7.1, 7.2, 7.3, 7.4, 7.5**

- [ ] 9.5 Write RTL layout tests for contact page
  - Verify contact information layout in RTL
  - Verify form layout in RTL
  - Verify location map section layout
  - Capture screenshots for visual verification
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 5.1, 5.2, 5.3_

- [ ] 9.6 Write property test for RTL direction consistency on contact page
  - **Property 2: RTL Direction Consistency**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

- [ ] 10. Implement responsive RTL testing
- [ ] 10.1 Create responsive layout test suite
  - Create `tests/e2e/rtl-layout/responsive.spec.ts`
  - Write tests for mobile viewport (375x667) in Arabic RTL
  - Write tests for tablet viewport (768x1024) in Arabic RTL
  - Write tests for desktop viewport (1920x1080) in Arabic RTL
  - _Requirements: 8.1, 8.2, 8.3_

- [ ] 10.2 Write mobile menu tests in Arabic
  - Verify mobile menu opens from correct side in RTL
  - Verify all mobile menu items are in Arabic
  - Verify mobile menu navigation works correctly
  - _Requirements: 8.4, 8.5_

- [ ] 10.3 Write property test for responsive RTL behavior
  - **Property 6: Responsive RTL Behavior**
  - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 8.5**

- [ ] 10.4 Capture responsive screenshots
  - Capture screenshots of all pages at mobile viewport in Arabic
  - Capture screenshots of all pages at tablet viewport in Arabic
  - Capture screenshots of all pages at desktop viewport in Arabic
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [ ] 11. Implement visual regression testing
- [ ] 11.1 Create baseline screenshots
  - Capture baseline screenshots for all pages in English
  - Capture baseline screenshots for all pages in Arabic
  - Organize screenshots in proper directory structure
  - _Requirements: 5.1, 5.2, 5.3_

- [ ] 11.2 Implement visual validation tests
  - Create tests that verify no text overflow in Arabic mode
  - Create tests that verify proper spacing and alignment in RTL
  - Create tests that verify directional icons are flipped
  - _Requirements: 5.4, 5.5, 2.6_

- [ ] 12. Create test report generator
- [ ] 12.1 Implement test report generation
  - Create script to generate comprehensive test report from Playwright results
  - Include summary statistics (total, passed, failed, duration)
  - Include detailed results for each page
  - Include links to screenshots
  - Include error details for failed tests
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 12.2 Create test documentation
  - Document how to run the test suite
  - Document how to interpret test results
  - Document how to add new tests
  - Create troubleshooting guide for common issues
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 13. Final integration and validation
  - Run complete test suite and verify all tests pass
  - Review all captured screenshots for visual issues
  - Verify test report is comprehensive and accurate
  - Ensure all requirements are covered by tests
  - Document any issues found and create follow-up tasks
  - _Requirements: All requirements_
