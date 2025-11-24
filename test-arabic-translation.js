const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  const baseUrl = 'http://localhost:3000';
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'About', url: '/about' },
    { name: 'Clients', url: '/clients' },
    { name: 'Partners', url: '/partners' },
    { name: 'Contact', url: '/contact' }
  ];

  // Store results
  const results = {
    passed: [],
    failed: [],
    warnings: []
  };

  console.log('Starting Arabic Translation Test...\n');
  console.log('='.repeat(60));

  for (const testPage of pages) {
    console.log(`\nTesting ${testPage.name} page...`);
    console.log('-'.repeat(60));
    
    try {
      // Navigate to page with longer timeout
      await page.goto(baseUrl + testPage.url, { 
        waitUntil: 'domcontentloaded',
        timeout: 60000 
      });
      await page.waitForTimeout(3000);

      // Find and click the language toggle to switch to Arabic
      console.log('Switching to Arabic...');
      
      // Try to find the language toggle button - it shows "EN" when in English mode
      const langToggle = await page.locator('button:has-text("EN")').first();
      
      if (await langToggle.count() > 0) {
        await langToggle.click();
        await page.waitForTimeout(3000); // Wait for state change and re-render
        console.log('✓ Clicked language toggle (EN -> AR)');
        
        // Verify the switch happened by checking for "AR" text in the button
        const arButton = await page.locator('button:has-text("AR")').first();
        if (await arButton.count() > 0) {
          console.log('✓ Language toggled to Arabic successfully');
        } else {
          console.log('⚠ Language toggle clicked but couldn\'t verify switch to Arabic');
        }
      } else {
        // Maybe already in Arabic mode?
        const arButton = await page.locator('button:has-text("AR")').first();
        if (await arButton.count() > 0) {
          console.log('✓ Already in Arabic mode');
        } else {
          console.log('⚠ Language toggle not found');
        }
      }

      // Get all text content
      const bodyText = await page.locator('body').innerText();
      
      // Check for English letters mixed with Arabic
      // This regex looks for English words (sequences of Latin letters)
      const englishWordsPattern = /\b[A-Za-z]{2,}\b/g;
      const englishWords = bodyText.match(englishWordsPattern) || [];
      
      // Filter out common acceptable English terms (abbreviations, brands, etc.)
      const acceptableEnglishTerms = [
        'IAM', 'SSO', 'PAM', 'MFA', 'DLP', 'SIEM', 'EDR', 'SEP', 'VIP', 'WPS',
        'NGFW', 'XDR', 'XSOAR', 'CASB', 'PGP', 'VPN', 'HIPAA', 'RBAC',
        'SolarWinds', 'NPM', 'NTA', 'NCM', 'DPA', 'SAM', 'VMAN', 'SRM',
        'Citrix', 'ADC', 'VDI', 'Ivanti', 'OPSWAT', 'MetaDefender', 'MetaAccess',
        'TrilleX', 'HX', 'EX', 'NX', 'CMS', 'FX', 'AX', 'ETP', 'WAF',
        'Symantec', 'Palo', 'Alto', 'Networks', 'Cortex', 'CloudSOC',
        'MOFA', 'MOI', 'NGHA', 'KSMC', 'STC', 'PSBAU', 'NeC', 'MOIMR',
        'Almajdouie', 'CEO', 'IT', 'BIG', 'IP', 'Local', 'Traffic', 'Manager',
        'Web', 'Application', 'Firewall', 'Security', 'Control'
      ];
      
      const problematicEnglishWords = englishWords.filter(word => 
        !acceptableEnglishTerms.some(term => 
          word.toLowerCase() === term.toLowerCase()
        )
      );

      // Check if page contains significant Arabic text
      const arabicPattern = /[\u0600-\u06FF]/g;
      const arabicMatches = bodyText.match(arabicPattern) || [];
      const hasArabicText = arabicMatches.length > 50; // At least 50 Arabic characters

      console.log(`\nAnalysis for ${testPage.name}:`);
      console.log(`  Arabic characters found: ${arabicMatches.length}`);
      console.log(`  English words found: ${englishWords.length}`);
      console.log(`  Problematic English words: ${problematicEnglishWords.length}`);

      if (hasArabicText && problematicEnglishWords.length === 0) {
        console.log(`✓ ${testPage.name} - All text properly translated to Arabic`);
        results.passed.push(testPage.name);
      } else if (!hasArabicText) {
        console.log(`✗ ${testPage.name} - Not in Arabic mode or insufficient Arabic text`);
        results.failed.push({
          page: testPage.name,
          issue: 'Not in Arabic mode or insufficient Arabic content'
        });
      } else {
        console.log(`⚠ ${testPage.name} - Found ${problematicEnglishWords.length} potentially untranslated English words:`);
        console.log(`  ${problematicEnglishWords.slice(0, 10).join(', ')}${problematicEnglishWords.length > 10 ? '...' : ''}`);
        results.warnings.push({
          page: testPage.name,
          words: problematicEnglishWords
        });
      }

      // Take a screenshot for reference
      await page.screenshot({ 
        path: `test-screenshots/arabic-${testPage.name.toLowerCase()}.png`,
        fullPage: true 
      });
      console.log(`  Screenshot saved: arabic-${testPage.name.toLowerCase()}.png`);

    } catch (error) {
      console.log(`✗ Error testing ${testPage.name}: ${error.message}`);
      results.failed.push({
        page: testPage.name,
        issue: error.message
      });
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`✓ Passed: ${results.passed.length} pages`);
  console.log(`⚠ Warnings: ${results.warnings.length} pages`);
  console.log(`✗ Failed: ${results.failed.length} pages`);

  if (results.warnings.length > 0) {
    console.log('\nPages with warnings:');
    results.warnings.forEach(w => {
      console.log(`\n  ${w.page}:`);
      console.log(`    Found ${w.words.length} untranslated words`);
      if (w.words.length > 0 && w.words.length <= 20) {
        console.log(`    Words: ${w.words.join(', ')}`);
      }
    });
  }

  if (results.failed.length > 0) {
    console.log('\nFailed pages:');
    results.failed.forEach(f => {
      console.log(`  - ${f.page}: ${f.issue}`);
    });
  }

  console.log('\n' + '='.repeat(60));
  console.log('Test Complete!');
  console.log('='.repeat(60));

  await browser.close();
})();

