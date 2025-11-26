# Page API Routes

A comprehensive Next.js API system for managing page metadata, navigation, breadcrumbs, related pages, and search functionality with full bilingual support.

## 📚 Documentation

- **[API Documentation](./API_DOCUMENTATION.md)** - Complete API reference with examples
- **[Quick Reference](./QUICK_REFERENCE.md)** - Quick lookup guide for developers
- **[Testing Report](./TESTING_REPORT.md)** - Comprehensive test results and coverage
- **[Error Handling Guide](./ERROR_HANDLING.md)** - Error codes and handling strategies

## 🚀 Quick Start

### Installation

The API routes are already integrated into the Next.js application. No additional installation required.

### Basic Usage

```typescript
// Fetch all pages
const response = await fetch('/api/pages?lang=en')
const data = await response.json()

if (data.success) {
  console.log(data.data) // Array of page metadata
}
```

### Available Endpoints

| Endpoint | Purpose |
|----------|---------|
| `GET /api/pages` | Get all pages metadata |
| `GET /api/pages/[path]` | Get single page by path |
| `GET /api/pages/navigation` | Get navigation structure |
| `GET /api/pages/breadcrumbs` | Get breadcrumb trail |
| `GET /api/pages/related` | Get related pages |
| `GET /api/pages/siblings` | Get previous/next pages |
| `GET /api/pages/search` | Search pages |

## ✨ Features

- ✅ **7 RESTful API endpoints** for comprehensive page management
- ✅ **Bilingual support** (English and Arabic) with automatic fallback
- ✅ **Hierarchical navigation** with parent-child relationships
- ✅ **Smart search** with relevance-based ordering
- ✅ **Related pages** based on categories, tags, and explicit relationships
- ✅ **Breadcrumb generation** for navigation trails
- ✅ **Sibling navigation** for previous/next page controls
- ✅ **Robust error handling** with consistent error responses
- ✅ **High performance** with in-memory caching (<200ms response time)
- ✅ **Type-safe** with full TypeScript support
- ✅ **Well-tested** with 31 integration tests (100% pass rate)

## 📖 Examples

### React Component with Page Data

```typescript
import { useEffect, useState } from 'react'

function PageList() {
  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch('/api/pages?lang=en')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setPages(data.data)
        }
      })
  }, [])

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

### Navigation with Active State

```typescript
import { usePathname } from 'next/navigation'

function Navigation() {
  const pathname = usePathname()
  const [nav, setNav] = useState([])

  useEffect(() => {
    fetch(`/api/pages/navigation?currentPath=${pathname}`)
      .then(res => res.json())
      .then(data => setNav(data.data))
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

### Search Functionality

```typescript
function SearchBar() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  async function handleSearch(e) {
    e.preventDefault()
    const res = await fetch(`/api/pages/search?q=${encodeURIComponent(query)}`)
    const data = await res.json()
    if (data.success) {
      setResults(data.data)
    }
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  )
}
```

## 🏗️ Architecture

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

### Layers

1. **API Routes** (`app/api/pages/`) - Handle HTTP requests and responses
2. **Service Layer** (`lib/pages/service.ts`) - Business logic and internationalization
3. **Repository Layer** (`lib/pages/repository.ts`) - Data access and caching
4. **Data Store** (`data/pages.json`) - Static page configuration

## 🔧 Configuration

### Adding New Pages

Edit `data/pages.json`:

```json
{
  "pages": [
    {
      "id": "new-page",
      "path": "/new-page",
      "title": {
        "en": "New Page",
        "ar": "صفحة جديدة"
      },
      "description": {
        "en": "Description in English",
        "ar": "الوصف بالعربية"
      },
      "icon": "Icon",
      "category": "main",
      "order": 7,
      "tags": ["tag1", "tag2"],
      "relatedPages": ["other-page-id"]
    }
  ]
}
```

Restart the server to load changes.

### Supported Languages

- English (`en`) - Default
- Arabic (`ar`)

To add more languages, update the `Language` type in `lib/pages/types.ts` and add translations to `pages.json`.

## 🧪 Testing

### Run Integration Tests

```bash
npm run test:unit -- __tests__/api/pages/routes.test.ts
```

### Test Coverage

- ✅ 31 integration tests
- ✅ 100% pass rate
- ✅ All endpoints covered
- ✅ Error handling validated
- ✅ Bilingual support verified
- ✅ Performance benchmarked

See [Testing Report](./TESTING_REPORT.md) for detailed results.

## 📊 Performance

All endpoints respond in **<200ms** (target) with actual performance averaging **6ms**:

| Endpoint | Target | Actual |
|----------|--------|--------|
| GET /api/pages | <200ms | 12ms |
| GET /api/pages/[path] | <200ms | 5ms |
| GET /api/pages/navigation | <200ms | 1ms |
| GET /api/pages/breadcrumbs | <200ms | 3ms |
| GET /api/pages/related | <200ms | 11ms |
| GET /api/pages/siblings | <200ms | 6ms |
| GET /api/pages/search | <200ms | 4ms |

**Average**: 6ms (97% faster than target)

## 🛡️ Error Handling

All errors follow a consistent format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable message"
  }
}
```

### Error Codes

- `INVALID_PATH` - Path doesn't exist
- `INVALID_PARAMETER` - Missing required parameter
- `VALIDATION_ERROR` - Validation failed
- `NOT_FOUND` - Resource not found
- `INTERNAL_ERROR` - Server error

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## 🌍 Internationalization

### Language Parameter

All endpoints support the `lang` query parameter:

```bash
# English (default)
curl "/api/pages"

# Arabic
curl "/api/pages?lang=ar"
```

### Fallback Behavior

If a translation is missing:
- Falls back to English content
- No error is returned
- Response structure remains consistent

## 📝 TypeScript Types

```typescript
import {
  PageMetadata,
  NavigationNode,
  BreadcrumbItem,
  PageSiblings,
  ApiResponse,
  Language
} from '@/lib/pages/types'
```

All types are fully documented and exported from `lib/pages/types.ts`.

## 🔍 API Reference

### Quick Examples

```bash
# Get all pages
curl "http://localhost:3000/api/pages?lang=en"

# Get single page
curl "http://localhost:3000/api/pages/services"

# Get navigation
curl "http://localhost:3000/api/pages/navigation?section=main"

# Get breadcrumbs
curl "http://localhost:3000/api/pages/breadcrumbs?path=/services"

# Get related pages
curl "http://localhost:3000/api/pages/related?path=/services&limit=3"

# Get siblings
curl "http://localhost:3000/api/pages/siblings?path=/services"

# Search
curl "http://localhost:3000/api/pages/search?q=security"
```

See [API Documentation](./API_DOCUMENTATION.md) for complete reference.

## 🚦 Status

**Status**: ✅ Production Ready

- All requirements implemented
- All tests passing
- Documentation complete
- Performance optimized

## 📦 Files

```
lib/pages/
├── types.ts                 # TypeScript interfaces
├── repository.ts            # Data access layer
├── service.ts              # Business logic layer
├── errors.ts               # Error handling utilities
├── API_DOCUMENTATION.md    # Complete API reference
├── QUICK_REFERENCE.md      # Quick lookup guide
├── TESTING_REPORT.md       # Test results and coverage
├── ERROR_HANDLING.md       # Error handling guide
└── README.md              # This file

app/api/pages/
├── route.ts                # GET /api/pages
├── [path]/route.ts         # GET /api/pages/[path]
├── navigation/route.ts     # GET /api/pages/navigation
├── breadcrumbs/route.ts    # GET /api/pages/breadcrumbs
├── related/route.ts        # GET /api/pages/related
├── siblings/route.ts       # GET /api/pages/siblings
└── search/route.ts         # GET /api/pages/search

data/
└── pages.json              # Page configuration data

__tests__/api/pages/
└── routes.test.ts          # Integration tests
```

## 🤝 Contributing

When adding new features:

1. Update the relevant layer (repository, service, or route)
2. Add tests to `__tests__/api/pages/routes.test.ts`
3. Update documentation
4. Ensure all tests pass
5. Verify performance requirements

## 📄 License

Part of the main project. See project root for license information.

## 🆘 Support

For issues or questions:

1. Check the [API Documentation](./API_DOCUMENTATION.md)
2. Review the [Testing Report](./TESTING_REPORT.md)
3. See the [Quick Reference](./QUICK_REFERENCE.md)
4. Contact the development team

---

**Version**: 1.0.0  
**Last Updated**: November 26, 2025  
**Status**: Production Ready ✅
