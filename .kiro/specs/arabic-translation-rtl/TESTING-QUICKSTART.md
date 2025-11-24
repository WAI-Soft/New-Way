# Testing Quick Start Guide

## Quick Test (5 minutes)

### Option 1: Automated Browser Test

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Press F12 to open DevTools Console

4. Copy and paste this command:
   ```javascript
   fetch('/.kiro/specs/arabic-translation-rtl/automated-verification.js')
     .then(r => r.text())
     .then(eval)
   ```
   
   Or manually copy the contents of `automated-verification.js` and paste into console

5. Review the test results (should show ~100% pass rate)

### Option 2: Quick Manual Test

1. Start the dev server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000

3. **Test Default Language:**
   - Open DevTools Console (F12)
   - Run: `localStorage.clear()` then refresh
   - Verify page loads in English

4. **Test Language Toggle:**
   - Click the language toggle button (top right)
   - Verify content changes to Arabic
   - Verify layout becomes RTL

5. **Test Persistence:**
   - Navigate to different pages (Services, About, etc.)
   - Verify language stays Arabic
   - Close and reopen browser
   - Verify language is still Arabic

6. **Test Smooth Transitions:**
   - Click language toggle
   - Verify no page reload (watch Network tab)
   - Verify instant content change

## Detailed Testing

For comprehensive testing, see:
- `verification-tests.md` - Detailed manual test procedures
- `automated-verification.js` - Full automated test suite
- `test-report.md` - Complete test report and results

## Expected Results

✅ Default language is English  
✅ Language toggle switches between EN/AR  
✅ Content translates immediately  
✅ Layout changes to RTL for Arabic  
✅ Language persists across pages  
✅ Language persists across sessions  
✅ No page reload on language change  
✅ No console errors  

## Troubleshooting

**Issue:** Language doesn't persist
- Check: localStorage is enabled in browser
- Check: Not in private/incognito mode
- Check: Browser console for errors

**Issue:** Layout doesn't change to RTL
- Check: HTML element has dir="rtl" attribute
- Check: Browser DevTools Elements tab
- Check: CSS is loaded correctly

**Issue:** Content doesn't translate
- Check: Translation keys exist in `lib/translations.ts`
- Check: Components use `t()` function
- Check: Browser console for missing translation warnings

## Quick Verification Commands

Run these in browser console:

```javascript
// Check current language
console.log('Language:', localStorage.getItem('language'));
console.log('HTML lang:', document.documentElement.getAttribute('lang'));
console.log('HTML dir:', document.documentElement.getAttribute('dir'));

// Test localStorage
localStorage.setItem('language', 'ar');
console.log('Stored:', localStorage.getItem('language'));

// Find language toggle
console.log('Toggle button:', document.querySelector('button[aria-label*="Switch to"]'));
```

## Success Criteria

All of these should be true:

- [ ] Build completes without errors
- [ ] Page loads in English by default
- [ ] Language toggle button is visible
- [ ] Clicking toggle changes language
- [ ] Content translates to Arabic
- [ ] Layout becomes RTL for Arabic
- [ ] Language persists across page navigation
- [ ] Language persists after browser restart
- [ ] No console errors or warnings
- [ ] Smooth transitions (no page reload)

---

**Need Help?** See the detailed guides:
- Manual tests: `verification-tests.md`
- Automated tests: `automated-verification.js`
- Full report: `test-report.md`
