/**
 * GET /api/pages/related
 * Returns related pages for a given page path
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, PageMetadata, ErrorCode } from '@/lib/pages/types'

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams
    const path = searchParams.get('path')
    const limitParam = searchParams.get('limit')
    const langParam = searchParams.get('lang') || 'en'
    
    // Validate path parameter
    if (!path) {
      const response: ApiResponse<never> = {
        success: false,
        error: {
          code: ErrorCode.INVALID_PARAMETER,
          message: 'Missing required parameter: path'
        }
      }
      
      return NextResponse.json(response, { status: 400 })
    }
    
    // Parse and validate limit parameter
    const limit = limitParam ? parseInt(limitParam, 10) : 6
    if (isNaN(limit) || limit < 0) {
      const response: ApiResponse<never> = {
        success: false,
        error: {
          code: ErrorCode.INVALID_PARAMETER,
          message: 'Invalid limit parameter: must be a non-negative number'
        }
      }
      
      return NextResponse.json(response, { status: 400 })
    }
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Get related pages
    const relatedPages = pageService.getRelatedPages(path, limit, lang)
    
    // Return success response (empty array if page not found or no related pages)
    const response: ApiResponse<PageMetadata[]> = {
      success: true,
      data: relatedPages
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages/related:', error)
    
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
