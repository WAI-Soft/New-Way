/**
 * GET /api/pages/navigation
 * Returns navigation structure with optional section and currentPath parameters
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, NavigationNode, ErrorCode } from '@/lib/pages/types'

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams
    const section = searchParams.get('section') || undefined
    const currentPath = searchParams.get('currentPath') || undefined
    const langParam = searchParams.get('lang') || 'en'
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Get navigation structure
    const navigation = pageService.getNavigationStructure(section, currentPath, lang)
    
    // Return success response
    const response: ApiResponse<NavigationNode[]> = {
      success: true,
      data: navigation
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages/navigation:', error)
    
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
