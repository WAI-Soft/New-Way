# Implementation Plan

- [x] 1. Create translation infrastructure





  - Create `lib/translations.ts` file with translation data structure containing all English and Arabic text for navigation, hero, services, about, clients, partners, contact, and footer sections
  - Create `lib/language-context.tsx` file implementing React Context with LanguageProvider component that manages language state, provides translation function, handles localStorage persistence, and updates HTML dir/lang attributes
  - _Requirements: 1.4, 5.1, 5.2, 5.3, 5.4, 5.5, 6.1, 6.2, 6.3, 6.4_

- [x] 2. Integrate language provider into application





  - Update `app/layout.tsx` to wrap children with LanguageProvider and remove hardcoded lang="en" attribute
  - Add suppressHydrationWarning to html and body tags to prevent hydration mismatches
  - _Requirements: 1.1, 1.3, 5.3_

- [x] 3. Update language toggle component





  - Modify `components/language-toggle.tsx` to consume LanguageContext instead of local state
  - Remove localStorage logic from component (now handled by context)
  - Update button to show current language state and trigger context setLanguage function
  - _Requirements: 1.1, 1.5, 3.1_

- [x] 4. Add RTL styling foundation





  - Update `app/globals.css` with RTL-specific styles including direction property, flex-row-reverse for RTL, and logical property utilities
  - Add Tailwind configuration for RTL support if needed
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 3.3_

- [x] 5. Translate header and navigation





  - Update `components/header.tsx` to use translation context for all navigation links (Home, Services, About, Clients, Partners, Contact)
  - Add RTL-aware styling for navigation menu layout using CSS logical properties
  - Update mobile menu to support RTL layout
  - _Requirements: 1.2, 2.2, 2.3, 4.1_

- [x] 6. Translate home page components





  - Update `components/hero.tsx` to use translation context for hero title, subtitle, and CTA buttons
  - Update `components/services.tsx` to use translation context for services section title, descriptions, and service cards
  - Update `components/client-carousel.tsx` to use translation context for client section title and testimonials
  - Update `components/partners.tsx` to use translation context for partners section title and descriptions
  - Update `components/cta.tsx` to use translation context for CTA text and buttons
  - Update `components/work-process.tsx` to use translation context for process steps
  - Add RTL-aware styling to all components using CSS logical properties
  - _Requirements: 1.2, 2.2, 2.4, 4.2_

- [x] 7. Translate services page





  - Update `app/services/page.tsx` to use translation context for page title, descriptions, and all service details
  - Update service-specific components in `components/services/` directory to use translations
  - Apply RTL styling to service cards and layouts
  - _Requirements: 1.2, 2.2, 2.4, 4.2_

- [x] 8. Translate about page







  - Update `app/about/page.tsx` to use translation context for about content, team member names, titles, and descriptions
  - Update about-specific components in `components/about/` directory to use translations
  - Apply RTL styling to about page layout and team cards
  - _Requirements: 1.2, 2.2, 2.4, 4.2_

- [x] 9. Translate clients page





  - Update `app/clients/page.tsx` to use translation context for client page title, descriptions, and client information
  - Update client-specific components in `components/clients/` directory to use translations
  - Apply RTL styling to client cards and testimonials
  - _Requirements: 1.2, 2.2, 2.4, 4.2_

- [x] 10. Translate partners page





  - Update `app/partners/page.tsx` to use translation context for partner page title, descriptions, and partner information
  - Update partner-specific components in `components/partners/` directory to use translations
  - Apply RTL styling to partner cards and layouts
  - _Requirements: 1.2, 2.2, 2.4, 4.2_

- [x] 11. Translate contact page





  - Update `app/contact/page.tsx` to use translation context for contact form labels, placeholders, button text, and contact information
  - Update contact-specific components in `components/contact/` directory to use translations
  - Apply RTL styling to form layout and ensure proper input alignment
  - _Requirements: 1.2, 2.2, 2.4, 4.3_

- [x] 12. Translate footer component





  - Update `components/footer.tsx` to use translation context for footer links, copyright text, and social media labels
  - Apply RTL styling to footer layout
  - _Requirements: 1.2, 2.2, 2.4, 4.5_

- [x] 13. Handle RTL-specific component adjustments





  - Update carousel/slider components to reverse navigation direction in RTL mode
  - Flip directional icons (arrows, chevrons) in RTL mode using CSS transform
  - Adjust flexbox and grid layouts that need special RTL handling
  - Test and fix any layout issues specific to RTL
  - _Requirements: 2.2, 2.3, 2.4, 2.5_

- [x] 14. Add error handling and fallbacks





  - Implement missing translation fallback logic in translation function
  - Add console warnings for missing translation keys in development
  - Ensure graceful degradation when localStorage is unavailable
  - _Requirements: 6.5_

- [x] 15. Verify language persistence and transitions





  - Test language preference persistence across page navigations
  - Test language preference persistence across browser sessions
  - Verify smooth transitions between language switches without page reload
  - Test that default language is English when no preference is stored
  - _Requirements: 1.4, 3.4, 5.1, 5.2, 5.3, 5.4, 5.5_

- [-] 16. Final integration testing and polish













  - Test complete user flow: click language toggle, verify all content translates, verify RTL layout applies
  - Test on mobile devices and responsive breakpoints
  - Verify no console errors or warnings
  - Check accessibility with screen readers in both languages
  - Verify all requirements are met
  - _Requirements: All requirements_
