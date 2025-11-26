/**
 * GET /api/pages/search
 * Returns search results for pages matching the query
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, PageMetadata, ErrorCode } from '@/lib/pages/types'

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const langParam = searchParams.get('lang') || 'en'
    
    // Validate query parameter
    if (!query || query.trim() === '') {
      const response: ApiResponse<never> = {
        success: false,
        error: {
          code: ErrorCode.VALIDATION_ERROR,
          message: 'Search query cannot be empty'
        }
      }
      
      return NextResponse.json(response, { status: 400 })
    }
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Search pages
    const results = pageService.searchPages(query, lang)
    
    // Return success response (empty array if no matches)
    const response: ApiResponse<PageMetadata[]> = {
      success: true,
      data: results
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages/search:', error)
    
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
