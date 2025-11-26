/**
 * GET /api/pages/breadcrumbs
 * Returns breadcrumb trail for a page path
 */

import { NextRequest, NextResponse } from 'next/server'
import { pageService } from '@/lib/pages/service'
import { Language, ApiResponse, BreadcrumbItem, ErrorCode } from '@/lib/pages/types'

export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const searchParams = request.nextUrl.searchParams
    const path = searchParams.get('path')
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
    
    // Validate language parameter
    const lang: Language = (langParam === 'ar' || langParam === 'en') ? langParam : 'en'
    
    // Check if page exists
    const page = pageService.getPageMetadata(path, lang)
    if (!page) {
      const response: ApiResponse<never> = {
        success: false,
        error: {
          code: ErrorCode.NOT_FOUND,
          message: `Page not found: ${path}`
        }
      }
      
      return NextResponse.json(response, { status: 404 })
    }
    
    // Get breadcrumbs
    const breadcrumbs = pageService.getBreadcrumbs(path, lang)
    
    // Return success response
    const response: ApiResponse<BreadcrumbItem[]> = {
      success: true,
      data: breadcrumbs
    }
    
    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    // Log error for debugging
    console.error('Error in GET /api/pages/breadcrumbs:', error)
    
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
