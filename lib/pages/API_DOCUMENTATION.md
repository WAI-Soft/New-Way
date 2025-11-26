# Page API Routes Documentation

## Overview

The Page API Routes provide a comprehensive backend service for managing page metadata, navigation structure, breadcrumbs, related pages, and search functionality. All endpoints support bilingual content (English and Arabic) and follow RESTful conventions.

**Base URL**: `/api/pages`

## Table of Contents

- [Authentication](#authentication)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Endpoints](#endpoints)
  - [Get All Pages](#get-all-pages)
  - [Get Single Page](#get-single-page)
  - [Get Navigation Structure](#get-navigation-structure)
  - [Get Breadcrumbs](#get-breadcrumbs)
  - [Get Related Pages](#get-related-pages)
  - [Get Page Siblings](#get-page-siblings)
  - [Search Pages](#search-pages)
- [Usage Examples](#usage-examples)
- [Performance Considerations](#performance-considerations)

---

## Authentication

Currently, all endpoints are publicly accessible and do not require authentication.

---

## Response Format

All API responses follow a consistent JSON structure:

### Success Response

```json
{
  "success": true,
  "data": <response_data>
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

---

## Error Handling

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request (validation errors, missing parameters)
- `404` - Not Found (invalid paths, non-existent resources)
- `500` - Internal Server Error (unexpected errors)

### Error Codes

| Code | Description |
|------|-------------|
| `INVALID_PATH` | The provided path does not exist |
| `INVALID_PARAMETER` | A required parameter is missing or invalid |
| `VALIDATION_ERROR` | Input validation failed |
| `NOT_FOUND` | Requested resource not found |
| `INTERNAL_ERROR` | Unexpected server error |

---

## Endpoints

### Get All Pages

Retrieves metadata for all pages in the system.

**Endpoint**: `GET /api/pages`

**Query Parameters**:
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": [
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
      "tags": ["main", "landing", "hero"],
      "relatedPages": ["services", "about", "contact"]
    }
  ]
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages?lang=en"
```

---

### Get Single Page

Retrieves metadata for a specific page by its path.

**Endpoint**: `GET /api/pages/[path]`

**Path Parameters**:
- `path`: URL-encoded page path (e.g., `services` for `/services`)

**Query Parameters**:
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "services",
    "path": "/services",
    "title": {
      "en": "Services",
      "ar": "الخدمات"
    },
    "description": {
      "en": "Comprehensive security services",
      "ar": "خدمات أمنية شاملة"
    },
    "icon": "Briefcase",
    "category": "main",
    "order": 2,
    "tags": ["main", "services", "security"],
    "relatedPages": ["about", "contact", "partners"]
  }
}
```

**Error Response** (404):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Page not found: /invalid"
  }
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/services?lang=ar"
```

---

### Get Navigation Structure

Retrieves the hierarchical navigation structure for building menus.

**Endpoint**: `GET /api/pages/navigation`

**Query Parameters**:
- `section` (optional): Filter by category/section (e.g., `main`)
- `currentPath` (optional): Current page path for active state marking
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "home",
      "path": "/",
      "title": "Home",
      "icon": "Home",
      "order": 1,
      "isActive": true,
      "children": []
    },
    {
      "id": "services",
      "path": "/services",
      "title": "Services",
      "icon": "Briefcase",
      "order": 2,
      "isActive": false,
      "children": []
    }
  ]
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/navigation?section=main&currentPath=/services&lang=en"
```

---

### Get Breadcrumbs

Retrieves the breadcrumb trail for a specific page.

**Endpoint**: `GET /api/pages/breadcrumbs`

**Query Parameters**:
- `path` (required): Page path (e.g., `/services`)
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "title": "Services",
      "path": "/services"
    }
  ]
}
```

**Note**: The home page (`/`) returns an empty array.

**Error Response** (400):
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Missing required parameter: path"
  }
}
```

**Error Response** (404):
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Page not found: /invalid"
  }
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/breadcrumbs?path=/services&lang=en"
```

---

### Get Related Pages

Retrieves pages related to a specific page based on category, tags, or explicit relationships.

**Endpoint**: `GET /api/pages/related`

**Query Parameters**:
- `path` (required): Page path (e.g., `/services`)
- `limit` (optional): Maximum number of results. Default: `6`
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "about",
      "path": "/about",
      "title": {
        "en": "About",
        "ar": "من نحن"
      },
      "description": {
        "en": "Transforming enterprises",
        "ar": "تحويل المؤسسات"
      },
      "icon": "Info",
      "category": "main",
      "order": 3
    }
  ]
}
```

**Error Response** (400):
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Missing required parameter: path"
  }
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/related?path=/services&limit=3&lang=en"
```

---

### Get Page Siblings

Retrieves the previous and next pages in the same section.

**Endpoint**: `GET /api/pages/siblings`

**Query Parameters**:
- `path` (required): Page path (e.g., `/services`)
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": {
    "previous": {
      "id": "home",
      "path": "/",
      "title": {
        "en": "Home",
        "ar": "الرئيسية"
      },
      "description": {
        "en": "Enterprise solutions",
        "ar": "حلول مؤسسية"
      },
      "icon": "Home",
      "category": "main",
      "order": 1
    },
    "next": {
      "id": "about",
      "path": "/about",
      "title": {
        "en": "About",
        "ar": "من نحن"
      },
      "description": {
        "en": "Transforming enterprises",
        "ar": "تحويل المؤسسات"
      },
      "icon": "Info",
      "category": "main",
      "order": 3
    }
  }
}
```

**Note**: `previous` or `next` will be `null` if the page is first or last in its section.

**Error Response** (400):
```json
{
  "success": false,
  "error": {
    "code": "INVALID_PARAMETER",
    "message": "Missing required parameter: path"
  }
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/siblings?path=/services&lang=en"
```

---

### Search Pages

Searches for pages matching a query string in titles or descriptions.

**Endpoint**: `GET /api/pages/search`

**Query Parameters**:
- `q` (required): Search query string
- `lang` (optional): Language code (`en` or `ar`). Default: `en`

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "services",
      "path": "/services",
      "title": {
        "en": "Services",
        "ar": "الخدمات"
      },
      "description": {
        "en": "Comprehensive security services",
        "ar": "خدمات أمنية شاملة"
      },
      "icon": "Briefcase",
      "category": "main",
      "order": 2
    }
  ]
}
```

**Features**:
- Case-insensitive search
- Searches in both title and description
- Results ordered by relevance (exact matches first)
- Returns empty array if no matches found

**Error Response** (400):
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Search query cannot be empty"
  }
}
```

**Example**:
```bash
curl "http://localhost:3000/api/pages/search?q=security&lang=en"
```

---

## Usage Examples

### React Component Example

```typescript
import { useEffect, useState } from 'react'

interface PageMetadata {
  id: string
  path: string
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  icon?: string
  category: string
  order: number
}

function PageList() {
  const [pages, setPages] = useState<PageMetadata[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch('/api/pages?lang=en')
        const data = await response.json()
        
        if (data.success) {
          setPages(data.data)
        } else {
          setError(data.error.message)
        }
      } catch (err) {
        setError('Failed to fetch pages')
      } finally {
        setLoading(false)
      }
    }

    fetchPages()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul>
      {pages.map(page => (
        <li key={page.id}>
          <a href={page.path}>{page.title.en}</a>
        </li>
      ))}
    </ul>
  )
}
```

### Navigation Component Example

```typescript
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface NavigationNode {
  id: string
  path: string
  title: string
  icon?: string
  order: number
  isActive?: boolean
  children?: NavigationNode[]
}

function Navigation() {
  const [nav, setNav] = useState<NavigationNode[]>([])
  const pathname = usePathname()

  useEffect(() => {
    async function fetchNavigation() {
      const response = await fetch(
        `/api/pages/navigation?section=main&currentPath=${pathname}&lang=en`
      )
      const data = await response.json()
      
      if (data.success) {
        setNav(data.data)
      }
    }

    fetchNavigation()
  }, [pathname])

  return (
    <nav>
      {nav.map(item => (
        <a
          key={item.id}
          href={item.path}
          className={item.isActive ? 'active' : ''}
        >
          {item.title}
        </a>
      ))}
    </nav>
  )
}
```

### Search Component Example

```typescript
import { useState } from 'react'

function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [searching, setSearching] = useState(false)

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    
    if (!query.trim()) return

    setSearching(true)
    try {
      const response = await fetch(
        `/api/pages/search?q=${encodeURIComponent(query)}&lang=en`
      )
      const data = await response.json()
      
      if (data.success) {
        setResults(data.data)
      }
    } catch (err) {
      console.error('Search failed:', err)
    } finally {
      setSearching(false)
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages..."
        />
        <button type="submit" disabled={searching}>
          {searching ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      <ul>
        {results.map((page: any) => (
          <li key={page.id}>
            <a href={page.path}>{page.title.en}</a>
            <p>{page.description.en}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
```

### Breadcrumbs Component Example

```typescript
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

interface BreadcrumbItem {
  title: string
  path: string
}

function Breadcrumbs() {
  const [crumbs, setCrumbs] = useState<BreadcrumbItem[]>([])
  const pathname = usePathname()

  useEffect(() => {
    async function fetchBreadcrumbs() {
      if (pathname === '/') {
        setCrumbs([])
        return
      }

      const response = await fetch(
        `/api/pages/breadcrumbs?path=${pathname}&lang=en`
      )
      const data = await response.json()
      
      if (data.success) {
        setCrumbs(data.data)
      }
    }

    fetchBreadcrumbs()
  }, [pathname])

  if (crumbs.length === 0) return null

  return (
    <nav aria-label="Breadcrumb">
      <ol>
        <li>
          <a href="/">Home</a>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.path}>
            {index === crumbs.length - 1 ? (
              <span>{crumb.title}</span>
            ) : (
              <a href={crumb.path}>{crumb.title}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

---

## Performance Considerations

### Caching

- The API uses in-memory caching for the pages.json data
- Cache is loaded lazily on first request
- Cache persists for the lifetime of the server process
- No cache invalidation needed for static page data

### Response Times

- Target response time: <200ms for all endpoints
- Actual performance depends on:
  - Number of pages in the system
  - Complexity of navigation structure
  - Search query complexity

### Optimization Tips

1. **Use specific endpoints**: Request only the data you need
2. **Cache on client**: Cache API responses in your application state
3. **Debounce search**: Debounce search input to reduce API calls
4. **Prefetch navigation**: Load navigation structure on app initialization

### Rate Limiting

Currently, no rate limiting is implemented. Consider adding rate limiting for production deployments, especially for the search endpoint.

---

## Internationalization (i18n)

### Supported Languages

- English (`en`)
- Arabic (`ar`)

### Language Parameter

All endpoints support the `lang` query parameter:
- Default: `en`
- Valid values: `en`, `ar`
- Invalid values default to `en`

### Fallback Behavior

If a translation is missing for the requested language:
- The API falls back to English content
- No error is returned
- The response structure remains consistent

### Example

```bash
# English (default)
curl "http://localhost:3000/api/pages/services"

# Arabic
curl "http://localhost:3000/api/pages/services?lang=ar"

# Invalid language (falls back to English)
curl "http://localhost:3000/api/pages/services?lang=fr"
```

---

## Testing

### Running Integration Tests

```bash
npm run test:unit -- __tests__/api/pages/routes.test.ts
```

### Test Coverage

The integration test suite covers:
- All API endpoints
- Error handling (400, 404, 500)
- Bilingual support
- Data validation
- Performance benchmarks
- Edge cases

---

## Changelog

### Version 1.0.0 (Current)

- Initial release
- All 7 API endpoints implemented
- Bilingual support (English/Arabic)
- Comprehensive error handling
- Integration tests
- Performance optimization with caching

---

## Support

For issues, questions, or feature requests, please refer to the project repository or contact the development team.
