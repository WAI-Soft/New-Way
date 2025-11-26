# Implementation Plan

- [x] 1. Set up project structure and TypeScript types





  - Create directory structure for lib/pages and data folders
  - Define TypeScript interfaces in lib/pages/types.ts
  - Set up testing framework with Jest and fast-check
  - _Requirements: 1.1, 1.4_

- [x] 2. Create pages.json data store





  - Create data/pages.json with initial page data for all existing pages (home, services, about, clients, partners, contact)
  - Include bilingual content (English and Arabic) for all pages
  - Define page relationships, categories, and tags
  - _Requirements: 1.1, 5.1, 5.2_

- [x] 3. Implement PageRepository (data access layer)






- [x] 3.1 Create repository class with caching

  - Implement PageRepository class in lib/pages/repository.ts
  - Add in-memory caching for parsed pages.json
  - Implement lazy loading on first access
  - _Requirements: 1.1, 1.5_


- [x] 3.2 Implement basic data access methods


  - Code getAllPages() method
  - Code getPageByPath() method
  - Code getPageById() method
  - _Requirements: 1.1, 1.2, 1.3_


- [x] 3.3 Implement filtering methods


  - Code getPagesByCategory() method
  - Code getPagesByTag() method
  - Build lookup indexes for performance
  - _Requirements: 2.2, 4.2_

- [ ]* 3.4 Write property test for repository data access
  - **Property 3: All pages retrieval completeness**
  - **Validates: Requirements 1.3**

- [ ]* 3.5 Write property test for invalid path handling
  - **Property 2: Invalid path error handling**
  - **Validates: Requirements 1.2**

- [x] 4. Implement PageService (business logic layer)





- [x] 4.1 Create service class with i18n support


  - Implement PageService class in lib/pages/service.ts
  - Add language parameter handling
  - Implement fallback logic for missing translations
  - _Requirements: 5.1, 5.3, 5.4_

- [x] 4.2 Implement metadata methods


  - Code getPageMetadata() with language support
  - Code getAllPagesMetadata() with language support
  - Implement field validation
  - _Requirements: 1.1, 1.3, 1.4, 5.1_

- [ ]* 4.3 Write property test for metadata completeness
  - **Property 1: Valid page metadata completeness**
  - **Validates: Requirements 1.1**

- [ ]* 4.4 Write property test for required fields
  - **Property 4: Required fields invariant**
  - **Validates: Requirements 1.4**

- [x] 4.5 Implement navigation structure method


  - Code getNavigationStructure() with hierarchical building
  - Implement section filtering
  - Add active state marking based on current path
  - Handle parent-child relationships
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [ ]* 4.6 Write property test for navigation completeness
  - **Property 5: Navigation structure completeness**
  - **Validates: Requirements 2.1**

- [ ]* 4.7 Write property test for section filtering
  - **Property 6: Section filtering correctness**
  - **Validates: Requirements 2.2**

- [ ]* 4.8 Write property test for active state
  - **Property 8: Active state correctness**
  - **Validates: Requirements 2.4**

- [x] 4.9 Implement breadcrumbs method


  - Code getBreadcrumbs() to build ancestor trail
  - Handle home page edge case
  - Implement path traversal logic
  - _Requirements: 3.1, 3.2, 3.3_

- [ ]* 4.10 Write property test for breadcrumb completeness
  - **Property 10: Breadcrumb trail completeness**
  - **Validates: Requirements 3.1**

- [ ]* 4.11 Write property test for breadcrumb fields
  - **Property 11: Breadcrumb field completeness**
  - **Validates: Requirements 3.3**

- [x] 4.12 Implement related pages method


  - Code getRelatedPages() with relationship logic
  - Implement category, tag, and explicit relationship matching
  - Add limit parameter support with default of 6
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [ ]* 4.13 Write property test for related pages validity
  - **Property 13: Related pages validity**
  - **Validates: Requirements 4.1**

- [ ]* 4.14 Write property test for relationship correctness
  - **Property 14: Related pages relationship correctness**
  - **Validates: Requirements 4.2**

- [ ]* 4.15 Write property test for default limit
  - **Property 15: Default related pages limit**
  - **Validates: Requirements 4.4**

- [x] 4.16 Implement siblings method


  - Code getPageSiblings() to find previous/next pages
  - Implement order-based sibling detection
  - Handle edge cases (first, last, no siblings)
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ]* 4.17 Write property test for siblings structure
  - **Property 25: Siblings structure correctness**
  - **Validates: Requirements 7.1**

- [ ]* 4.18 Write property test for sibling order
  - **Property 26: Sibling order correctness**
  - **Validates: Requirements 7.4**

- [x] 4.19 Implement search method


  - Code searchPages() with text matching
  - Implement case-insensitive search
  - Add relevance-based ordering
  - Handle empty query validation
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_

- [ ]* 4.20 Write property test for search matching
  - **Property 27: Search result matching**
  - **Validates: Requirements 8.1**

- [ ]* 4.21 Write property test for case-insensitive search
  - **Property 28: Case-insensitive search consistency**
  - **Validates: Requirements 8.2**

- [ ]* 4.22 Write property test for search ordering
  - **Property 29: Search result ordering**
  - **Validates: Requirements 8.4**

- [x] 5. Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement API route handlers






- [x] 6.1 Create GET /api/pages route

  - Implement route handler in app/api/pages/route.ts
  - Add language parameter parsing
  - Implement error handling with proper status codes
  - Return all pages metadata
  - _Requirements: 1.3, 5.1, 6.1, 6.2_

- [ ]* 6.2 Write property test for language parameter
  - **Property 17: Language parameter respect**
  - **Validates: Requirements 5.1**

- [ ]* 6.3 Write property test for default language
  - **Property 18: Default language fallback**
  - **Validates: Requirements 5.3**

- [x] 6.4 Create GET /api/pages/[path] route


  - Implement route handler in app/api/pages/[path]/route.ts
  - Add path parameter decoding
  - Handle 404 for invalid paths
  - Return single page metadata
  - _Requirements: 1.1, 1.2, 6.1, 6.2_

- [x] 6.5 Create GET /api/pages/navigation route


  - Implement route handler in app/api/pages/navigation/route.ts
  - Add section and currentPath query parameters
  - Return navigation structure
  - _Requirements: 2.1, 2.2, 2.4, 6.1_

- [x] 6.6 Create GET /api/pages/breadcrumbs route


  - Implement route handler in app/api/pages/breadcrumbs/route.ts
  - Add path query parameter validation
  - Handle 404 for invalid paths
  - Return breadcrumb trail
  - _Requirements: 3.1, 3.5, 6.1, 6.3_

- [ ]* 6.7 Write property test for invalid breadcrumb path
  - **Property 12: Invalid breadcrumb path error**
  - **Validates: Requirements 3.5**

- [x] 6.8 Create GET /api/pages/related route


  - Implement route handler in app/api/pages/related/route.ts
  - Add path and limit query parameters
  - Return related pages
  - _Requirements: 4.1, 4.4, 4.5, 6.1_

- [ ]* 6.9 Write property test for custom limit
  - **Property 16: Custom limit respect**
  - **Validates: Requirements 4.5**

- [x] 6.10 Create GET /api/pages/siblings route


  - Implement route handler in app/api/pages/siblings/route.ts
  - Add path query parameter
  - Return previous and next pages
  - _Requirements: 7.1, 6.1_

- [x] 6.11 Create GET /api/pages/search route


  - Implement route handler in app/api/pages/search/route.ts
  - Add query parameter validation
  - Return 400 for empty query
  - Return search results
  - _Requirements: 8.1, 8.3, 6.1, 6.3_

- [ ]* 6.12 Write property test for empty search results
  - **Property 30: Empty search results**
  - **Validates: Requirements 8.5**

- [x] 7. Implement comprehensive error handling




- [x] 7.1 Add error handling utilities


  - Create error response helper functions
  - Implement consistent error format
  - Add error logging
  - _Requirements: 6.1, 6.2, 6.4_

- [ ]* 7.2 Write property test for error status codes
  - **Property 21: Error status code appropriateness**
  - **Validates: Requirements 6.1**

- [ ]* 7.3 Write property test for error response structure
  - **Property 22: Error response structure**
  - **Validates: Requirements 6.2**

- [ ]* 7.4 Write property test for validation errors
  - **Property 23: Validation error details**
  - **Validates: Requirements 6.3**

- [ ]* 7.5 Write property test for internal error safety
  - **Property 24: Internal error safety**
  - **Validates: Requirements 6.5**

- [x] 8. Add internationalization property tests





- [x]* 8.1 Write property test for missing translation fallback


  - **Property 19: Missing translation fallback**
  - **Validates: Requirements 5.4**

- [x]* 8.2 Write property test for language-specific paths

  - **Property 20: Language-specific paths**
  - **Validates: Requirements 5.5**

- [x] 9. Final checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Integration and documentation








  - Test all API endpoints manually or with integration tests
  - Verify error responses return correct status codes
  - Confirm bilingual support works correctly
  - Document API endpoints and usage examples
  - _Requirements: All_
