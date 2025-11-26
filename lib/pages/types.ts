/**
 * TypeScript interfaces for the Page API Routes feature
 */

/**
 * Page metadata with bilingual content support
 */
export interface PageMetadata {
  id: string
  path: string
  title: {
    en: string
    ar: string
  }
  description: {
    en: string
    ar: string
  }
  icon?: string
  category: string
  order: number
  parent?: string
  tags?: string[]
  relatedPages?: string[]
}

/**
 * Navigation node representing a page in the navigation structure
 */
export interface NavigationNode {
  id: string
  path: string
  title: string
  icon?: string
  order: number
  children?: NavigationNode[]
  isActive?: boolean
}

/**
 * Breadcrumb item for navigation trails
 */
export interface BreadcrumbItem {
  title: string
  path: string
}

/**
 * Page siblings for previous/next navigation
 */
export interface PageSiblings {
  previous: PageMetadata | null
  next: PageMetadata | null
}

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: {
    code: string
    message: string
  }
}

/**
 * Error codes used across the API
 */
export enum ErrorCode {
  INVALID_PATH = 'INVALID_PATH',
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR'
}

/**
 * Supported language codes
 */
export type Language = 'en' | 'ar'

/**
 * Data store structure for pages.json
 */
export interface PagesDataStore {
  pages: PageMetadata[]
}
