# Design Document

## Overview

This design implements a set of Next.js API routes that provide backend functionality for managing page metadata, navigation structure, and page relationships. The system uses a centralized data store (JSON configuration file) to maintain page information and exposes RESTful endpoints for querying this data. The architecture follows Next.js App Router conventions with route handlers in the `app/api` directory.

## Architecture

### High-Level Architecture

```
┌─────────────────┐
│  Client/Browser │
│   Components    │
└────────┬────────┘
         │ HTTP Requests
         ▼
┌─────────────────┐
│   API Routes    │
│  (Route Handlers)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Page Service   │
│  (Business Logic)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Page Repository│
│  (Data Access)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  pages.json     │
│  (Data Store)   │
└─────────────────┘
```

### Directory Structure

```
app/
  api/
    pages/
      route.ts              # GET all pages metadata
      [path]/
        route.ts            # GET single page metadata
      navigation/
        route.ts            # GET navigation structure
      breadcrumbs/
        route.ts            # GET breadcrumbs for a path
      related/
        route.ts            # GET related pages
      siblings/
        route.ts            # GET previous/next pages
      search/
        route.ts            # GET search results
lib/
  pages/
    repository.ts           # Data access layer
    service.ts              # Business logic layer
    types.ts                # TypeScript interfaces
data/
  pages.json                # Page configuration data
```

## Components and Interfaces

### Data Models

#### PageMetadata Interface
```typescript
interface PageMetadata {
  id: string
  path: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  icon?: string
  category: string
  order: number
  parent?: string
  tags?: string[]
  relatedPages?: string[]
}
```

#### NavigationNode Interface
```typescript
interface NavigationNode {
  id: string
  path: string
  title: string
  icon?: string
  order: number
  children?: NavigationNode[]
  isActive?: boolean
}
```

#### BreadcrumbItem Interface
```typescript
interface BreadcrumbItem {
  title: string
  path: string
}
```

#### PageSiblings Interface
```typescript
interface PageSiblings {
  previous: PageMetadata | null
  next: PageMetadata | null
}
```

#### ApiResponse Interface
```typescript
interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}
```

### Repository Layer

**PageRepository** (`lib/pages/repository.ts`)
- Responsible for reading and parsing the pages.json file
- Provides low-level data access methods
- Caches parsed data in memory for performance

Methods:
- `getAllPages(): PageMetadata[]` - Returns all pages
- `getPageByPath(path: string): PageMetadata | null` - Returns single page
- `getPageById(id: string): PageMetadata | null` - Returns page by ID
- `getPagesByCategory(category: string): PageMetadata[]` - Returns pages in category
- `getPagesByTag(tag: string): PageMetadata[]` - Returns pages with tag

### Service Layer

**PageService** (`lib/pages/service.ts`)
- Contains business logic for page operations
- Transforms repository data into API responses
- Handles internationalization logic

Methods:
- `getPageMetadata(path: string, lang: string): PageMetadata | null`
- `getAllPagesMetadata(lang: string): PageMetadata[]`
- `getNavigationStructure(section?: string, currentPath?: string, lang?: string): NavigationNode[]`
- `getBreadcrumbs(path: string, lang: string): BreadcrumbItem[]`
- `getRelatedPages(path: string, limit: number, lang: string): PageMetadata[]`
- `getPageSiblings(path: string, lang: string): PageSiblings`
- `searchPages(query: string, lang: string): PageMetadata[]`

### API Route Handlers

Each route handler follows this pattern:
1. Parse and validate request parameters
2. Call appropriate service method
3. Handle errors and return appropriate status codes
4. Return JSON response

**GET /api/pages**
- Returns all pages metadata
- Query params: `lang` (optional, default: "en")

**GET /api/pages/[path]**
- Returns single page metadata
- Path param: `path` (URL-encoded page path)
- Query params: `lang` (optional)

**GET /api/pages/navigation**
- Returns navigation structure
- Query params: `section` (optional), `currentPath` (optional), `lang` (optional)

**GET /api/pages/breadcrumbs**
- Returns breadcrumb trail
- Query params: `path` (required), `lang` (optional)

**GET /api/pages/related**
- Returns related pages
- Query params: `path` (required), `limit` (optional, default: 6), `lang` (optional)

**GET /api/pages/siblings**
- Returns previous and next pages
- Query params: `path` (required), `lang` (optional)

**GET /api/pages/search**
- Returns search results
- Query params: `q` (required), `lang` (optional)

## Data Models

### pages.json Structure

```json
{
  "pages": [
    {
      "id": "home",
      "path": "/",
      "title": {
        "en": "Home",
        "ar": "الرئيسية"
      },
      "description": {
        "en": "Enterprise solutions that deliver exceptional results",
        "ar": "حلول مؤسسية تحقق نتائج استثنائية"
      },
      "icon": "Home",
      "category": "main",
      "order": 1,
      "tags": ["main", "landing"]
    },
    {
      "id": "services",
      "path": "/services",
      "title": {
        "en": "Services",
        "ar": "الخدمات"
      },
      "description": {
        "en": "Our comprehensive service offerings",
        "ar": "عروض خدماتنا الشاملة"
      },
      "icon": "Briefcase",
      "category": "main",
      "order": 2,
      "tags": ["main", "services"],
      "relatedPages": ["about", "contact"]
    }
  ]
}
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Valid page metadata completeness
*For any* valid page path in the data store, requesting metadata should return a JSON object containing all required fields (title, description, path, icon, category)
**Validates: Requirements 1.1**

### Property 2: Invalid path error handling
*For any* invalid page path (not in the data store), requesting metadata should return a 404 status code with an error message
**Validates: Requirements 1.2**

### Property 3: All pages retrieval completeness
*For any* state of the data store, requesting all pages metadata should return an array with length equal to the number of pages in the data store
**Validates: Requirements 1.3**

### Property 4: Required fields invariant
*For any* page metadata response, all returned objects should contain the required fields (title, path)
**Validates: Requirements 1.4**

### Property 5: Navigation structure completeness
*For any* request for navigation structure, the response should include all navigable pages from the data store
**Validates: Requirements 2.1**

### Property 6: Section filtering correctness
*For any* valid section name, requesting navigation for that section should return only pages whose category matches that section
**Validates: Requirements 2.2**

### Property 7: Navigation order field presence
*For any* navigation structure response, all navigation nodes should include an order field
**Validates: Requirements 2.3**

### Property 8: Active state correctness
*For any* current page path, the navigation structure should mark exactly that path as active
**Validates: Requirements 2.4**

### Property 9: Parent-child relationship correctness
*For any* page with a parent, the navigation structure should nest that page under its correct parent
**Validates: Requirements 2.5**

### Property 10: Breadcrumb trail completeness
*For any* valid page path, the breadcrumb trail should include all ancestors from root to the current page in correct order
**Validates: Requirements 3.1**

### Property 11: Breadcrumb field completeness
*For any* breadcrumb response, all breadcrumb items should include both title and path fields
**Validates: Requirements 3.3**

### Property 12: Invalid breadcrumb path error
*For any* invalid page path, requesting breadcrumbs should return a 404 status code
**Validates: Requirements 3.5**

### Property 13: Related pages validity
*For any* valid page path, all returned related pages should be valid page metadata objects from the data store
**Validates: Requirements 4.1**

### Property 14: Related pages relationship correctness
*For any* page, all returned related pages should share at least one of: same category, common tag, or explicit relationship
**Validates: Requirements 4.2**

### Property 15: Default related pages limit
*For any* page with more than 6 related pages, requesting related pages without a limit parameter should return at most 6 results
**Validates: Requirements 4.4**

### Property 16: Custom limit respect
*For any* limit parameter value N, requesting related pages should return at most N results
**Validates: Requirements 4.5**

### Property 17: Language parameter respect
*For any* supported language parameter, the API response should contain content in that language
**Validates: Requirements 5.1**

### Property 18: Default language fallback
*For any* request without a language parameter, the API should return content in English
**Validates: Requirements 5.3**

### Property 19: Missing translation fallback
*For any* page with missing translations in the requested language, the API should return English content for those fields
**Validates: Requirements 5.4**

### Property 20: Language-specific paths
*For any* page with different paths per language, requesting in a specific language should return the correct path for that language
**Validates: Requirements 5.5**

### Property 21: Error status code appropriateness
*For any* error type (validation, not found, server error), the API should return the appropriate HTTP status code (400, 404, 500)
**Validates: Requirements 6.1**

### Property 22: Error response structure
*For any* error response, the JSON object should contain both an error message and error code
**Validates: Requirements 6.2**

### Property 23: Validation error details
*For any* validation failure, the API should return a 400 status code with details about what validation failed
**Validates: Requirements 6.3**

### Property 24: Internal error safety
*For any* unexpected server error, the API should return a 500 status code without exposing internal implementation details
**Validates: Requirements 6.5**

### Property 25: Siblings structure correctness
*For any* valid page path, the siblings response should be an object containing previous and next fields
**Validates: Requirements 7.1**

### Property 26: Sibling order correctness
*For any* page with siblings, the previous and next pages should follow the defined page sequence order
**Validates: Requirements 7.4**

### Property 27: Search result matching
*For any* search query, all returned pages should have the query string in either their title or description (case-insensitive)
**Validates: Requirements 8.1**

### Property 28: Case-insensitive search consistency
*For any* search query, searching with different casing (uppercase, lowercase, mixed) should return the same results
**Validates: Requirements 8.2**

### Property 29: Search result ordering
*For any* search query with multiple results, results should be ordered by relevance (exact matches before partial matches)
**Validates: Requirements 8.4**

### Property 30: Empty search results
*For any* search query that matches no pages, the API should return an empty array
**Validates: Requirements 8.5**

## Error Handling

### Error Response Format

All errors follow a consistent format:
```typescript
{
  success: false,
  error: {
    code: string,      // Machine-readable error code
    message: string    // Human-readable error message
  }
}
```

### Error Codes

- `INVALID_PATH` - The provided path does not exist
- `INVALID_PARAMETER` - A required parameter is missing or invalid
- `VALIDATION_ERROR` - Input validation failed
- `NOT_FOUND` - Requested resource not found
- `INTERNAL_ERROR` - Unexpected server error

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request (validation errors, missing parameters)
- `404` - Not Found (invalid paths, non-existent resources)
- `500` - Internal Server Error (unexpected errors)

### Error Handling Strategy

1. **Input Validation**: Validate all inputs at the route handler level before calling service methods
2. **Graceful Degradation**: Return partial data with warnings when possible rather than failing completely
3. **Logging**: Log all errors to console with stack traces for debugging
4. **Security**: Never expose internal implementation details, file paths, or stack traces to clients
5. **Consistency**: Use the same error response format across all endpoints

## Testing Strategy

### Unit Testing

Unit tests will cover:
- Repository methods for data access
- Service methods for business logic
- Input validation functions
- Error handling paths
- Internationalization logic

Testing framework: Jest with TypeScript support

### Property-Based Testing

Property-based tests will verify universal properties using **fast-check** library (JavaScript/TypeScript PBT framework).

Each property-based test will:
- Run a minimum of 100 iterations
- Use smart generators that constrain to valid input spaces
- Be tagged with a comment referencing the design document property
- Tag format: `**Feature: page-api-routes, Property {number}: {property_text}**`

Property tests will cover:
- Metadata completeness across all valid paths
- Error handling for invalid inputs
- Navigation structure correctness
- Breadcrumb generation accuracy
- Related pages relationship logic
- Internationalization consistency
- Search functionality correctness

### Integration Testing

Integration tests will verify:
- End-to-end API route functionality
- Request/response cycles
- Error responses with correct status codes
- Data serialization/deserialization

### Test Organization

```
__tests__/
  lib/
    pages/
      repository.test.ts
      service.test.ts
  api/
    pages/
      route.test.ts
      navigation.test.ts
      breadcrumbs.test.ts
      related.test.ts
      siblings.test.ts
      search.test.ts
  properties/
    metadata.property.test.ts
    navigation.property.test.ts
    breadcrumbs.property.test.ts
    related.property.test.ts
    i18n.property.test.ts
    search.property.test.ts
```

## Performance Considerations

### Caching Strategy

- **In-Memory Cache**: The PageRepository will cache the parsed pages.json in memory
- **Cache Invalidation**: Cache is invalidated only on server restart (acceptable for static page data)
- **Response Time**: Target response time of <200ms for all endpoints

### Optimization Techniques

1. **Lazy Loading**: Load and parse pages.json only once on first request
2. **Index Building**: Build lookup indexes (by path, by ID, by category) on initialization
3. **Memoization**: Cache computed navigation structures and breadcrumbs
4. **Efficient Search**: Use pre-built search indexes for fast text matching

### Scalability

For future scalability:
- Data store can be migrated to a database without changing API contracts
- Caching layer can be moved to Redis for multi-instance deployments
- Search can be upgraded to Elasticsearch for advanced features

## Security Considerations

1. **Input Sanitization**: All user inputs are validated and sanitized
2. **Path Traversal Prevention**: Page paths are validated against allowed patterns
3. **Rate Limiting**: Consider adding rate limiting for search endpoints
4. **CORS**: Configure appropriate CORS headers for API routes
5. **Error Messages**: Never expose internal paths, stack traces, or implementation details

## Deployment Considerations

1. **Environment Variables**: None required for basic functionality
2. **Data Updates**: Updating pages.json requires server restart
3. **Monitoring**: Log all API errors for monitoring and debugging
4. **Backwards Compatibility**: API responses follow versioned schema
