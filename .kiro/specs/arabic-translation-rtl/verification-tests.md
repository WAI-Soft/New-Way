# Language Persistence and Transitions Verification Tests

This document contains manual verification tests for task 15 of the Arabic Translation and RTL Support feature.

## Test Environment Setup

1. Start the development server: `npm run dev`
2. Open the application in a browser
3. Open browser DevTools (F12)
4. Navigate to the Console tab

## Test 1: Language Preference Persistence Across Page Navigations

**Objective:** Verify that language preference persists when navigating between pages

**Steps:**
1. Clear localStorage: `localStorage.clear()`
2. Refresh the page
3. Verify default language is English (check the language toggle shows "EN")
4. Click the language toggle to switch to Arabic
5. Verify the page content changes to Arabic and layout becomes RTL
6. Navigate to different pages (Services, About, Clients, Partners, Contact)
7. On each page, verify:
   - Content is in Arabic
   - Layout is RTL (dir="rtl" on html element)
   - Language toggle shows "AR"

**Expected Result:** Language remains Arabic across all page navigations

**Verification Script:**
```javascript
// Run this in browser console after switching to Arabic
console.log('Current language:', localStorage.getItem('language'));
console.log('HTML lang attribute:', document.documentElement.getAttribute('lang'));
console.log('HTML dir attribute:', document.documentElement.getAttribute('dir'));
console.log('Expected: language=ar, lang=ar, dir=rtl');
```

## Test 2: Language Preference Persistence Across Browser Sessions

**Objective:** Verify that language preference persists after closing and reopening the browser

**Steps:**
1. Clear localStorage: `localStorage.clear()`
2. Refresh the page
3. Verify default language is English
4. Click the language toggle to switch to Arabic
5. Verify localStorage contains the preference:
   ```javascript
   console.log('Stored language:', localStorage.getItem('language'));
   ```
6. Close the browser tab completely
7. Open a new browser tab and navigate to the application
8. Verify:
   - Page loads in Arabic
   - Layout is RTL
   - Language toggle shows "AR"

**Expected Result:** Language preference persists across browser sessions

**Verification Script:**
```javascript
// Run this after reopening the browser
console.log('Stored language:', localStorage.getItem('language'));
console.log('HTML lang attribute:', document.documentElement.getAttribute('lang'));
console.log('HTML dir attribute:', document.documentElement.getAttribute('dir'));
console.log('Expected: All should be "ar" or "rtl"');
```

## Test 3: Smooth Transitions Between Language Switches Without Page Reload

**Objective:** Verify that switching languages happens smoothly without full page reload

**Steps:**
1. Open the application
2. Open browser DevTools Network tab
3. Click the language toggle to switch from English to Arabic
4. Observe:
   - Content changes immediately
   - Layout direction changes immediately
   - No full page reload occurs (no document request in Network tab)
   - No visible flash or layout shift
5. Click the language toggle again to switch back to English
6. Observe the same smooth transition

**Expected Result:** Language switches happen instantly without page reload

**Verification Script:**
```javascript
// Run this to monitor language changes
let changeCount = 0;
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes' && 
        (mutation.attributeName === 'lang' || mutation.attributeName === 'dir')) {
      changeCount++;
      console.log(`Language change #${changeCount}:`, {
        lang: document.documentElement.getAttribute('lang'),
        dir: document.documentElement.getAttribute('dir'),
        timestamp: new Date().toISOString()
      });
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['lang', 'dir']
});

console.log('Monitoring language changes. Click the language toggle to test.');
console.log('To stop monitoring, run: observer.disconnect()');
```

## Test 4: Default Language is English When No Preference is Stored

**Objective:** Verify that the application defaults to English when no language preference exists

**Steps:**
1. Clear localStorage: `localStorage.clear()`
2. Verify localStorage is empty:
   ```javascript
   console.log('Language in storage:', localStorage.getItem('language'));
   ```
3. Refresh the page (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
4. Verify:
   - Page loads in English
   - Layout is LTR (dir="ltr")
   - Language toggle shows "EN"
   - HTML lang attribute is "en"

**Expected Result:** Application defaults to English with LTR layout

**Verification Script:**
```javascript
// Run this after clearing localStorage and refreshing
console.log('=== Default Language Test ===');
console.log('Stored language:', localStorage.getItem('language'));
console.log('HTML lang attribute:', document.documentElement.getAttribute('lang'));
console.log('HTML dir attribute:', document.documentElement.getAttribute('dir'));
console.log('Expected: language=null, lang=en, dir=ltr');
console.log('Test passed:', 
  localStorage.getItem('language') === null &&
  document.documentElement.getAttribute('lang') === 'en' &&
  document.documentElement.getAttribute('dir') === 'ltr'
);
```

## Test 5: localStorage Graceful Degradation

**Objective:** Verify that the application works even when localStorage is unavailable

**Steps:**
1. Disable localStorage (in DevTools Console):
   ```javascript
   // Simulate localStorage being unavailable
   Object.defineProperty(window, 'localStorage', {
     get: function() { throw new Error('localStorage is not available'); }
   });
   ```
2. Refresh the page
3. Verify:
   - Page loads without errors
   - Default language is English
   - Language toggle is functional
   - Switching languages works (but doesn't persist)
4. Re-enable localStorage by refreshing the page normally

**Expected Result:** Application works without localStorage, but preferences don't persist

## Comprehensive Verification Script

Run this comprehensive script to verify all requirements at once:

```javascript
// Comprehensive Language Persistence Verification
(async function verifyLanguagePersistence() {
  console.log('=== Starting Comprehensive Language Verification ===\n');
  
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };
  
  // Test 1: Check current state
  console.log('Test 1: Current State');
  const currentLang = localStorage.getItem('language');
  const htmlLang = document.documentElement.getAttribute('lang');
  const htmlDir = document.documentElement.getAttribute('dir');
  
  console.log('  Stored language:', currentLang);
  console.log('  HTML lang:', htmlLang);
  console.log('  HTML dir:', htmlDir);
  
  if (htmlLang === currentLang || (currentLang === null && htmlLang === 'en')) {
    results.passed.push('Current state is consistent');
  } else {
    results.failed.push('Current state mismatch between storage and HTML');
  }
  
  // Test 2: Verify localStorage persistence
  console.log('\nTest 2: localStorage Persistence');
  const testLang = htmlLang === 'en' ? 'ar' : 'en';
  localStorage.setItem('language', testLang);
  const retrieved = localStorage.getItem('language');
  
  if (retrieved === testLang) {
    results.passed.push('localStorage persistence works');
    console.log('  ✓ localStorage can store and retrieve language');
  } else {
    results.failed.push('localStorage persistence failed');
    console.log('  ✗ localStorage persistence failed');
  }
  
  // Restore original language
  if (currentLang) {
    localStorage.setItem('language', currentLang);
  } else {
    localStorage.removeItem('language');
  }
  
  // Test 3: Check HTML attributes match
  console.log('\nTest 3: HTML Attributes Consistency');
  const expectedDir = htmlLang === 'ar' ? 'rtl' : 'ltr';
  
  if (htmlDir === expectedDir) {
    results.passed.push('HTML dir attribute matches language');
    console.log('  ✓ dir attribute is correct for language');
  } else {
    results.failed.push(`HTML dir should be ${expectedDir} but is ${htmlDir}`);
    console.log(`  ✗ dir attribute should be ${expectedDir} but is ${htmlDir}`);
  }
  
  // Test 4: Check for language toggle button
  console.log('\nTest 4: Language Toggle Presence');
  const toggleButton = document.querySelector('button[aria-label*="Switch to"]');
  
  if (toggleButton) {
    results.passed.push('Language toggle button exists');
    console.log('  ✓ Language toggle button found');
    console.log('  Button text:', toggleButton.textContent?.trim());
  } else {
    results.failed.push('Language toggle button not found');
    console.log('  ✗ Language toggle button not found');
  }
  
  // Test 5: Verify no console errors
  console.log('\nTest 5: Console Error Check');
  results.warnings.push('Check browser console for any errors or warnings');
  
  // Summary
  console.log('\n=== Verification Summary ===');
  console.log(`Passed: ${results.passed.length}`);
  results.passed.forEach(test => console.log('  ✓', test));
  
  if (results.failed.length > 0) {
    console.log(`\nFailed: ${results.failed.length}`);
    results.failed.forEach(test => console.log('  ✗', test));
  }
  
  if (results.warnings.length > 0) {
    console.log(`\nWarnings: ${results.warnings.length}`);
    results.warnings.forEach(warning => console.log('  ⚠', warning));
  }
  
  console.log('\n=== Manual Tests Required ===');
  console.log('1. Navigate to different pages and verify language persists');
  console.log('2. Close and reopen browser to verify session persistence');
  console.log('3. Click language toggle and verify smooth transition');
  console.log('4. Clear localStorage and verify default is English');
  
  return {
    passed: results.passed.length,
    failed: results.failed.length,
    warnings: results.warnings.length,
    allPassed: results.failed.length === 0
  };
})();
```

## Requirements Coverage

This verification suite covers all requirements specified in task 15:

- **Requirement 1.4:** Language preference persistence across page navigations (Test 1)
- **Requirement 3.4:** Smooth transitions between language switches (Test 3)
- **Requirement 5.1:** Store preference in browser local storage (Test 2)
- **Requirement 5.2:** Retrieve stored language preference (Test 2)
- **Requirement 5.3:** Apply preferred language on initial page load (Test 2)
- **Requirement 5.4:** Default to English when no preference exists (Test 4)
- **Requirement 5.5:** Update stored preference on language change (Test 1, Test 2)

## Test Results Template

Use this template to document your test results:

```
Date: [DATE]
Tester: [NAME]
Browser: [BROWSER NAME & VERSION]
Environment: [Development/Production]

Test 1 - Page Navigation Persistence: [PASS/FAIL]
Notes: 

Test 2 - Browser Session Persistence: [PASS/FAIL]
Notes: 

Test 3 - Smooth Transitions: [PASS/FAIL]
Notes: 

Test 4 - Default Language: [PASS/FAIL]
Notes: 

Test 5 - localStorage Graceful Degradation: [PASS/FAIL]
Notes: 

Overall Result: [PASS/FAIL]
Issues Found:
```
