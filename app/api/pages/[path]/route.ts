/**
 * GET /api/pages/[path]
 * Returns single page metadata by path with optional language parameter
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, PageMetadata, ErrorCode } from '@/lib/pages/types'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string }> }
) {
  try {
    // Await params (required in Next.js 15+)
    const { path } = await params
    
    // Decode path parameter (handles URL encoding)
    const decodedPath = decodeURIComponent(path)
    
    // Ensure path starts with /
    const pagePath = decodedPath.startsWith('/') ? decodedPath : `/${decodedPath}`
    
    // Parse language parameter from query string
    const searchParams = request.nextUrl.searchParams
    const langParam = searchParams.get('lang') || 'en'
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Get page metadata
    const page = pageService.getPageMetadata(pagePath, lang)
    
    // Handle 404 for invalid paths
    if (!page) {
      const response: ApiResponse<never> = {
        success: false,
        error: {
          code: ErrorCode.NOT_FOUND,
          message: `Page not found: ${pagePath}`
        }
      }
      
      return NextResponse.json(response, { status: 404 })
    }
    
    // Return success response
    const response: ApiResponse<PageMetadata> = {
      success: true,
      data: page
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages/[path]:', error)
    
    // Return internal error response
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
