# Error Handling Utilities Documentation

This document describes the error handling utilities available in `lib/pages/errors.ts` and provides examples of how to use them in API routes.

## Overview

The error handling utilities provide:
- Consistent error response format across all API endpoints
- Centralized error logging
- Type-safe error handling with TypeScript
- Helper functions for common error scenarios
- Security-conscious error messages (no internal details exposed by default)

## Core Components

### ApiError Class

Custom error class for API-specific errors with status codes:

```typescript
import { ApiError, ErrorCode } from '@/lib/pages/errors'

throw new ApiError(
  ErrorCode.NOT_FOUND,
  'Page not found: /invalid-path',
  404
)
```

### Error Response Helpers

#### createErrorResponse
Create a standardized error response:

```typescript
import { createErrorResponse, ErrorCode } from '@/lib/pages/errors'

return createErrorResponse(
  ErrorCode.VALIDATION_ERROR,
  'Invalid input provided',
  400
)
```

#### createBadRequestError
Shorthand for 400 Bad Request errors:

```typescript
import { createBadRequestError } from '@/lib/pages/errors'

// With default VALIDATION_ERROR code
return createBadRequestError('Invalid input')

// With custom error code
return createBadRequestError('Missing parameter', ErrorCode.INVALID_PARAMETER)
```

#### createNotFoundError
Shorthand for 404 Not Found errors:

```typescript
import { createNotFoundError } from '@/lib/pages/errors'

return createNotFoundError('Page', '/invalid-path')
// Returns: "Page not found: /invalid-path"
```

#### createInternalError
Shorthand for 500 Internal Server Error:

```typescript
import { createInternalError } from '@/lib/pages/errors'

// Logs error but doesn't expose details (secure)
return createInternalError('GET /api/pages', error)

// Expose error details (use only in development)
return createInternalError('GET /api/pages', error, true)
```

#### createSuccessResponse
Create a standardized success response:

```typescript
import { createSuccessResponse } from '@/lib/pages/errors'

return createSuccessResponse(data)
// or with custom status code
return createSuccessResponse(data, 201)
```

### Validation Helpers

#### validateRequiredParam
Validate and assert that a required parameter exists:

```typescript
import { validateRequiredParam } from '@/lib/pages/errors'

const path = searchParams.get('path')
validateRequiredParam(path, 'path') // Throws ApiError if missing
// TypeScript now knows path is string (not null)
```

#### validateLanguageParam
Validate and normalize language parameter:

```typescript
import { validateLanguageParam } from '@/lib/pages/errors'

const langParam = searchParams.get('lang')
const lang = validateLanguageParam(langParam) // Returns 'en' or 'ar'
```

### Error Handling Wrappers

#### handleApiError
Convert any error into an appropriate HTTP response:

```typescript
import { handleApiError } from '@/lib/pages/errors'

try {
  // ... route logic
} catch (error) {
  return handleApiError('GET /api/pages', error)
}
```

#### withErrorHandling
Wrap an entire route handler with error handling:

```typescript
import { withErrorHandling } from '@/lib/pages/errors'

async function handler(request: NextRequest) {
  // ... route logic that might throw
  return createSuccessResponse(data)
}

export const GET = withErrorHandling(handler, 'GET /api/pages')
```

## Usage Examples

### Example 1: Simple Route with Error Handling

```typescript
import { NextRequest } from 'next/server'
import { pageService } from '@/lib/pages/service'
import {
  createSuccessResponse,
  createNotFoundError,
  handleApiError,
  validateLanguageParam
} from '@/lib/pages/errors'

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string } }
) {
  try {
    const path = decodeURIComponent(params.path)
    const langParam = request.nextUrl.searchParams.get('lang')
    const lang = validateLanguageParam(langParam)
    
    const page = pageService.getPageMetadata(path, lang)
    
    if (!page) {
      return createNotFoundError('Page', path)
    }
    
    return createSuccessResponse(page)
  } catch (error) {
    return handleApiError('GET /api/pages/[path]', error)
  }
}
```

### Example 2: Route with Parameter Validation

```typescript
import { NextRequest } from 'next/server'
import { pageService } from '@/lib/pages/service'
import {
  createSuccessResponse,
  createNotFoundError,
  handleApiError,
  validateRequiredParam,
  validateLanguageParam
} from '@/lib/pages/errors'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const path = searchParams.get('path')
    
    // Throws ApiError if path is missing
    validateRequiredParam(path, 'path')
    
    const langParam = searchParams.get('lang')
    const lang = validateLanguageParam(langParam)
    
    const page = pageService.getPageMetadata(path, lang)
    
    if (!page) {
      return createNotFoundError('Page', path)
    }
    
    const breadcrumbs = pageService.getBreadcrumbs(path, lang)
    
    return createSuccessResponse(breadcrumbs)
  } catch (error) {
    return handleApiError('GET /api/pages/breadcrumbs', error)
  }
}
```

### Example 3: Using withErrorHandling Wrapper

```typescript
import { NextRequest } from 'next/server'
import { pageService } from '@/lib/pages/service'
import {
  createSuccessResponse,
  createBadRequestError,
  withErrorHandling,
  validateLanguageParam
} from '@/lib/pages/errors'

async function searchHandler(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  
  if (!query || query.trim() === '') {
    return createBadRequestError('Search query cannot be empty')
  }
  
  const langParam = searchParams.get('lang')
  const lang = validateLanguageParam(langParam)
  
  const results = pageService.searchPages(query, lang)
  
  return createSuccessResponse(results)
}

export const GET = withErrorHandling(searchHandler, 'GET /api/pages/search')
```

### Example 4: Custom Error Handling

```typescript
import { NextRequest } from 'next/server'
import { pageService } from '@/lib/pages/service'
import {
  ApiError,
  ErrorCode,
  createSuccessResponse,
  handleApiError,
  validateLanguageParam
} from '@/lib/pages/errors'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const limit = searchParams.get('limit')
    
    // Custom validation with ApiError
    if (limit && isNaN(parseInt(limit))) {
      throw new ApiError(
        ErrorCode.VALIDATION_ERROR,
        'Limit parameter must be a number',
        400
      )
    }
    
    const langParam = searchParams.get('lang')
    const lang = validateLanguageParam(langParam)
    
    const pages = pageService.getAllPagesMetadata(lang)
    
    return createSuccessResponse(pages)
  } catch (error) {
    return handleApiError('GET /api/pages', error)
  }
}
```

## Error Response Format

All error responses follow this consistent structure:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

## Error Codes

Available error codes (from `ErrorCode` enum):

- `INVALID_PATH` - The provided path does not exist
- `INVALID_PARAMETER` - A required parameter is missing or invalid
- `VALIDATION_ERROR` - Input validation failed
- `NOT_FOUND` - Requested resource not found
- `INTERNAL_ERROR` - Unexpected server error

## Best Practices

1. **Always use try-catch blocks** in API routes
2. **Use `handleApiError` or `withErrorHandling`** for consistent error handling
3. **Never expose internal details** in production (use `createInternalError` without `exposeDetails`)
4. **Validate inputs early** using `validateRequiredParam` and custom validation
5. **Use appropriate error codes** for different error scenarios
6. **Log errors** for debugging (handled automatically by error utilities)
7. **Return appropriate HTTP status codes** (400, 404, 500)

## Migration Guide

To migrate existing routes to use the new error handling utilities:

1. Import the error handling utilities
2. Replace manual error response creation with helper functions
3. Replace manual validation with `validateRequiredParam` and `validateLanguageParam`
4. Use `handleApiError` in catch blocks
5. Consider using `withErrorHandling` wrapper for cleaner code

### Before:
```typescript
export async function GET(request: NextRequest) {
  try {
    const langParam = searchParams.get('lang') || 'en'
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    const pages = pageService.getAllPagesMetadata(lang)
    
    const response: ApiResponse<PageMetadata[]> = {
      success: true,
      data: pages
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    console.error('Error in GET /api/pages:', error)
    
    const response: ApiResponse<never> = {
      success: false,
      error: {
        code: ErrorCode.INTERNAL_ERROR,
        message: 'An unexpected error occurred'
      }
    }
    
    return NextResponse.json(response, { status: 500 })
  }
}
```

### After:
```typescript
import {
  createSuccessResponse,
  handleApiError,
  validateLanguageParam
} from '@/lib/pages/errors'

export async function GET(request: NextRequest) {
  try {
    const langParam = request.nextUrl.searchParams.get('lang')
    const lang = validateLanguageParam(langParam)
    
    const pages = pageService.getAllPagesMetadata(lang)
    
    return createSuccessResponse(pages)
  } catch (error) {
    return handleApiError('GET /api/pages', error)
  }
}
```

## Testing

The error handling utilities are fully tested. See `__tests__/lib/pages/errors.test.ts` for examples of how to test routes that use these utilities.

Key testing patterns:
- Mock `console.error` to prevent test output pollution
- Test both success and error paths
- Verify error response structure and status codes
- Test validation functions with valid and invalid inputs
