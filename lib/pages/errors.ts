/**
 * Error handling utilities for Page API Routes
 * 
 * Provides centralized error handling, logging, and response formatting
 * to ensure consistent error responses across all API endpoints.
 */

import { NextResponse } from 'next/server'
import { ApiResponse, ErrorCode } from './types'

/**
 * Custom error class for API errors with status codes
 */
export class ApiError extends Error {
  constructor(
    public code: ErrorCode,
    message: string,
    public statusCode: number = 500
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

/**
 * Log error to console with context information
 * @param context - Context string (e.g., route name)
 * @param error - Error object
 * @param additionalInfo - Optional additional information
 */
export function logError(
  context: string,
  error: unknown,
  additionalInfo?: Record<string, unknown>
): void {
  const timestamp = new Date().toISOString()
  
  console.error(`[${timestamp}] Error in ${context}:`)
  
  if (error instanceof Error) {
    console.error(`  Message: ${error.message}`)
    console.error(`  Name: ${error.name}`)
    if (error.stack) {
      console.error(`  Stack: ${error.stack}`)
    }
  } else {
    console.error(`  Error: ${String(error)}`)
  }
  
  if (additionalInfo) {
    console.error('  Additional Info:', JSON.stringify(additionalInfo, null, 2))
  }
}

/**
 * Create a standardized error response
 * @param code - Error code
 * @param message - Error message
 * @param statusCode - HTTP status code
 * @returns NextResponse with error
 */
export function createErrorResponse(
  code: ErrorCode,
  message: string,
  statusCode: number
): NextResponse<ApiResponse<never>> {
  const response: ApiResponse<never> = {
    success: false,
    error: {
      code,
      message
    }
  }
  
  return NextResponse.json(response, { status: statusCode })
}

/**
 * Create a 400 Bad Request error response
 * @param message - Error message
 * @param code - Optional error code (defaults to VALIDATION_ERROR)
 * @returns NextResponse with 400 status
 */
export function createBadRequestError(
  message: string,
  code: ErrorCode = ErrorCode.VALIDATION_ERROR
): NextResponse<ApiResponse<never>> {
  return createErrorResponse(code, message, 400)
}

/**
 * Create a 404 Not Found error response
 * @param resource - Resource that was not found (e.g., "Page")
 * @param identifier - Resource identifier (e.g., path)
 * @returns NextResponse with 404 status
 */
export function createNotFoundError(
  resource: string,
  identifier: string
): NextResponse<ApiResponse<never>> {
  return createErrorResponse(
    ErrorCode.NOT_FOUND,
    `${resource} not found: ${identifier}`,
    404
  )
}

/**
 * Create a 500 Internal Server Error response
 * @param context - Context where error occurred
 * @param error - Original error object
 * @param exposeDetails - Whether to expose error details (default: false for security)
 * @returns NextResponse with 500 status
 */
export function createInternalError(
  context: string,
  error: unknown,
  exposeDetails: boolean = false
): NextResponse<ApiResponse<never>> {
  // Log the error for debugging
  logError(context, error)
  
  // Determine message based on whether we should expose details
  let message = 'An unexpected error occurred'
  
  if (exposeDetails && error instanceof Error) {
    message = error.message
  }
  
  return createErrorResponse(ErrorCode.INTERNAL_ERROR, message, 500)
}

/**
 * Create a success response
 * @param data - Response data
 * @param statusCode - HTTP status code (default: 200)
 * @returns NextResponse with success data
 */
export function createSuccessResponse<T>(
  data: T,
  statusCode: number = 200
): NextResponse<ApiResponse<T>> {
  const response: ApiResponse<T> = {
    success: true,
    data
  }
  
  return NextResponse.json(response, { status: statusCode })
}

/**
 * Validate required query parameter
 * @param value - Parameter value
 * @param paramName - Parameter name
 * @throws ApiError if parameter is missing or empty
 */
export function validateRequiredParam(
  value: string | null | undefined,
  paramName: string
): asserts value is string {
  if (!value || value.trim() === '') {
    throw new ApiError(
      ErrorCode.INVALID_PARAMETER,
      `Missing required parameter: ${paramName}`,
      400
    )
  }
}

/**
 * Validate language parameter
 * @param langParam - Language parameter value
 * @returns Validated language code ('en' or 'ar')
 */
export function validateLanguageParam(langParam: string | null): 'en' | 'ar' {
  if (langParam === 'ar' || langParam === 'en') {
    return langParam
  }
  // Default to English for invalid values
  return 'en'
}

/**
 * Handle API route errors consistently
 * Converts various error types into appropriate HTTP responses
 * @param context - Context string (e.g., route name)
 * @param error - Error object
 * @returns NextResponse with appropriate error
 */
export function handleApiError(
  context: string,
  error: unknown
): NextResponse<ApiResponse<never>> {
  // Handle known ApiError instances
  if (error instanceof ApiError) {
    logError(context, error)
    return createErrorResponse(error.code, error.message, error.statusCode)
  }
  
  // Handle unknown errors as internal server errors
  return createInternalError(context, error, false)
}

/**
 * Wrap an async API route handler with error handling
 * @param handler - Async handler function
 * @param context - Context string for error logging
 * @returns Wrapped handler with error handling
 */
export function withErrorHandling<T extends unknown[]>(
  handler: (...args: T) => Promise<NextResponse>,
  context: string
): (...args: T) => Promise<NextResponse> {
  return async (...args: T): Promise<NextResponse> => {
    try {
      return await handler(...args)
    } catch (error) {
      return handleApiError(context, error)
    }
  }
}
