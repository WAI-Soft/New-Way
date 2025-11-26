# Page API Routes - Quick Reference

## Endpoints Summary

| Endpoint | Method | Purpose | Required Params |
|----------|--------|---------|-----------------|
| `/api/pages` | GET | Get all pages | - |
| `/api/pages/[path]` | GET | Get single page | `path` (URL param) |
| `/api/pages/navigation` | GET | Get navigation structure | - |
| `/api/pages/breadcrumbs` | GET | Get breadcrumb trail | `path` (query) |
| `/api/pages/related` | GET | Get related pages | `path` (query) |
| `/api/pages/siblings` | GET | Get prev/next pages | `path` (query) |
| `/api/pages/search` | GET | Search pages | `q` (query) |

## Common Query Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `lang` | string | `en` | Language code (`en` or `ar`) |
| `path` | string | - | Page path (e.g., `/services`) |
| `section` | string | - | Category filter for navigation |
| `currentPath` | string | - | Current page for active state |
| `limit` | number | `6` | Max results for related pages |
| `q` | string | - | Search query |

## Quick Examples

### Get All Pages
```bash
curl "http://localhost:3000/api/pages?lang=en"
```

### Get Single Page
```bash
curl "http://localhost:3000/api/pages/services?lang=ar"
```

### Get Navigation
```bash
curl "http://localhost:3000/api/pages/navigation?section=main&currentPath=/services"
```

### Get Breadcrumbs
```bash
curl "http://localhost:3000/api/pages/breadcrumbs?path=/services"
```

### Get Related Pages
```bash
curl "http://localhost:3000/api/pages/related?path=/services&limit=3"
```

### Get Siblings
```bash
curl "http://localhost:3000/api/pages/siblings?path=/services"
```

### Search
```bash
curl "http://localhost:3000/api/pages/search?q=security&lang=en"
```

## Response Structure

### Success
```json
{
  "success": true,
  "data": <response_data>
}
```

### Error
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description"
  }
}
```

## HTTP Status Codes

- `200` - Success
- `400` - Bad Request (missing/invalid params)
- `404` - Not Found (invalid path)
- `500` - Internal Server Error

## Error Codes

- `INVALID_PATH` - Path doesn't exist
- `INVALID_PARAMETER` - Missing required parameter
- `VALIDATION_ERROR` - Validation failed
- `NOT_FOUND` - Resource not found
- `INTERNAL_ERROR` - Server error

## React Hook Example

```typescript
function usePageData(path: string, lang: string = 'en') {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`/api/pages/${path}?lang=${lang}`)
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          setData(result.data)
        } else {
          setError(result.error)
        }
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [path, lang])

  return { data, loading, error }
}
```

## TypeScript Types

```typescript
interface PageMetadata {
  id: string
  path: string
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  icon?: string
  category: string
  order: number
  parent?: string
  tags?: string[]
  relatedPages?: string[]
}

interface NavigationNode {
  id: string
  path: string
  title: string
  icon?: string
  order: number
  children?: NavigationNode[]
  isActive?: boolean
}

interface BreadcrumbItem {
  title: string
  path: string
}

interface PageSiblings {
  previous: PageMetadata | null
  next: PageMetadata | null
}

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}
```

## Performance Tips

1. **Cache responses** in your application state
2. **Debounce search** to reduce API calls
3. **Prefetch navigation** on app load
4. **Use specific endpoints** - don't fetch all pages if you only need one

## Testing

```bash
# Run integration tests
npm run test:unit -- __tests__/api/pages/routes.test.ts

# Run all tests
npm test
```

## Common Patterns

### Fetch with Error Handling
```typescript
async function fetchPage(path: string) {
  try {
    const res = await fetch(`/api/pages/${path}`)
    const data = await res.json()
    
    if (!data.success) {
      throw new Error(data.error.message)
    }
    
    return data.data
  } catch (error) {
    console.error('Failed to fetch page:', error)
    throw error
  }
}
```

### Search with Debounce
```typescript
import { debounce } from 'lodash'

const debouncedSearch = debounce(async (query: string) => {
  const res = await fetch(`/api/pages/search?q=${encodeURIComponent(query)}`)
  const data = await res.json()
  return data.data
}, 300)
```

### Navigation with Active State
```typescript
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

## Data Source

All page data is stored in `data/pages.json`. To add or modify pages:

1. Edit `data/pages.json`
2. Restart the server (cache is loaded on startup)
3. Changes will be reflected immediately

## Architecture

```
Client → API Route → Service Layer → Repository Layer → pages.json
```

- **API Routes**: Handle HTTP requests/responses
- **Service Layer**: Business logic and i18n
- **Repository Layer**: Data access and caching
- **pages.json**: Static data store

## Need More Help?

See the full documentation: `lib/pages/API_DOCUMENTATION.md`
