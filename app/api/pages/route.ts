/**
 * GET /api/pages
 * Returns all pages metadata with optional language parameter
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, PageMetadata, ErrorCode } from '@/lib/pages/types'

export async function GET(request: NextRequest) {
  try {
    // Parse language parameter from query string
    const searchParams = request.nextUrl.searchParams
    const langParam = searchParams.get('lang') || 'en'
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Get all pages metadata
    const pages = pageService.getAllPagesMetadata(lang)
    
    // Return success response
    const response: ApiResponse<PageMetadata[]> = {
      success: true,
      data: pages
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages:', error)
    
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
