/**
 * Unit tests for error handling utilities
 */

import { NextResponse } from 'next/server'
import {
  ApiError,
  logError,
  createErrorResponse,
  createBadRequestError,
  createNotFoundError,
  createInternalError,
  createSuccessResponse,
  validateRequiredParam,
  validateLanguageParam,
  handleApiError,
  withErrorHandling
} from '@/lib/pages/errors'
import { ErrorCode, ApiResponse } from '@/lib/pages/types'

// Mock console.error to prevent test output pollution
const originalConsoleError = console.error
beforeEach(() => {
  console.error = jest.fn()
})

afterEach(() => {
  console.error = originalConsoleError
})

describe('ApiError', () => {
  it('should create an ApiError with correct properties', () => {
    const error = new ApiError(ErrorCode.NOT_FOUND, 'Resource not found', 404)
    
    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('ApiError')
    expect(error.code).toBe(ErrorCode.NOT_FOUND)
    expect(error.message).toBe('Resource not found')
    expect(error.statusCode).toBe(404)
  })

  it('should default to 500 status code if not provided', () => {
    const error = new ApiError(ErrorCode.INTERNAL_ERROR, 'Internal error')
    
    expect(error.statusCode).toBe(500)
  })
})

describe('logError', () => {
  it('should log error with context', () => {
    const error = new Error('Test error')
    logError('Test Context', error)
    
    expect(console.error).toHaveBeenCalled()
  })

  it('should log error with additional info', () => {
    const error = new Error('Test error')
    const additionalInfo = { userId: '123', action: 'test' }
    
    logError('Test Context', error, additionalInfo)
    
    expect(console.error).toHaveBeenCalled()
  })

  it('should handle non-Error objects', () => {
    logError('Test Context', 'String error')
    
    expect(console.error).toHaveBeenCalled()
  })
})

describe('createErrorResponse', () => {
  it('should create error response with correct structure', async () => {
    const response = createErrorResponse(
      ErrorCode.VALIDATION_ERROR,
      'Validation failed',
      400
    )
    
    expect(response).toBeInstanceOf(NextResponse)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.success).toBe(false)
    expect(json.error).toBeDefined()
    expect(json.error?.code).toBe(ErrorCode.VALIDATION_ERROR)
    expect(json.error?.message).toBe('Validation failed')
    expect(response.status).toBe(400)
  })
})

describe('createBadRequestError', () => {
  it('should create 400 error with VALIDATION_ERROR code by default', async () => {
    const response = createBadRequestError('Invalid input')
    
    const json = await response.json() as ApiResponse<never>
    expect(json.success).toBe(false)
    expect(json.error?.code).toBe(ErrorCode.VALIDATION_ERROR)
    expect(json.error?.message).toBe('Invalid input')
    expect(response.status).toBe(400)
  })

  it('should accept custom error code', async () => {
    const response = createBadRequestError('Invalid parameter', ErrorCode.INVALID_PARAMETER)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.error?.code).toBe(ErrorCode.INVALID_PARAMETER)
  })
})

describe('createNotFoundError', () => {
  it('should create 404 error with formatted message', async () => {
    const response = createNotFoundError('Page', '/test-path')
    
    const json = await response.json() as ApiResponse<never>
    expect(json.success).toBe(false)
    expect(json.error?.code).toBe(ErrorCode.NOT_FOUND)
    expect(json.error?.message).toBe('Page not found: /test-path')
    expect(response.status).toBe(404)
  })
})

describe('createInternalError', () => {
  it('should create 500 error without exposing details by default', async () => {
    const error = new Error('Sensitive internal error')
    const response = createInternalError('Test Route', error)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.success).toBe(false)
    expect(json.error?.code).toBe(ErrorCode.INTERNAL_ERROR)
    expect(json.error?.message).toBe('An unexpected error occurred')
    expect(response.status).toBe(500)
    expect(console.error).toHaveBeenCalled()
  })

  it('should expose error details when explicitly enabled', async () => {
    const error = new Error('Detailed error message')
    const response = createInternalError('Test Route', error, true)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.error?.message).toBe('Detailed error message')
  })
})

describe('createSuccessResponse', () => {
  it('should create success response with data', async () => {
    const data = { id: '1', name: 'Test' }
    const response = createSuccessResponse(data)
    
    const json = await response.json() as ApiResponse<typeof data>
    expect(json.success).toBe(true)
    expect(json.data).toEqual(data)
    expect(response.status).toBe(200)
  })

  it('should accept custom status code', async () => {
    const response = createSuccessResponse({ message: 'Created' }, 201)
    
    expect(response.status).toBe(201)
  })
})

describe('validateRequiredParam', () => {
  it('should not throw for valid parameter', () => {
    expect(() => {
      validateRequiredParam('valid-value', 'testParam')
    }).not.toThrow()
  })

  it('should throw ApiError for null parameter', () => {
    expect(() => {
      validateRequiredParam(null, 'testParam')
    }).toThrow(ApiError)
  })

  it('should throw ApiError for undefined parameter', () => {
    expect(() => {
      validateRequiredParam(undefined, 'testParam')
    }).toThrow(ApiError)
  })

  it('should throw ApiError for empty string', () => {
    expect(() => {
      validateRequiredParam('', 'testParam')
    }).toThrow(ApiError)
  })

  it('should throw ApiError for whitespace-only string', () => {
    expect(() => {
      validateRequiredParam('   ', 'testParam')
    }).toThrow(ApiError)
  })

  it('should throw with correct error details', () => {
    try {
      validateRequiredParam(null, 'userId')
      fail('Should have thrown')
    } catch (error) {
      expect(error).toBeInstanceOf(ApiError)
      const apiError = error as ApiError
      expect(apiError.code).toBe(ErrorCode.INVALID_PARAMETER)
      expect(apiError.message).toBe('Missing required parameter: userId')
      expect(apiError.statusCode).toBe(400)
    }
  })
})

describe('validateLanguageParam', () => {
  it('should return "en" for valid English parameter', () => {
    expect(validateLanguageParam('en')).toBe('en')
  })

  it('should return "ar" for valid Arabic parameter', () => {
    expect(validateLanguageParam('ar')).toBe('ar')
  })

  it('should default to "en" for null', () => {
    expect(validateLanguageParam(null)).toBe('en')
  })

  it('should default to "en" for invalid language code', () => {
    expect(validateLanguageParam('fr')).toBe('en')
    expect(validateLanguageParam('es')).toBe('en')
    expect(validateLanguageParam('invalid')).toBe('en')
  })
})

describe('handleApiError', () => {
  it('should handle ApiError instances', async () => {
    const apiError = new ApiError(ErrorCode.NOT_FOUND, 'Not found', 404)
    const response = handleApiError('Test Route', apiError)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.error?.code).toBe(ErrorCode.NOT_FOUND)
    expect(json.error?.message).toBe('Not found')
    expect(response.status).toBe(404)
  })

  it('should handle unknown errors as internal errors', async () => {
    const unknownError = new Error('Unknown error')
    const response = handleApiError('Test Route', unknownError)
    
    const json = await response.json() as ApiResponse<never>
    expect(json.error?.code).toBe(ErrorCode.INTERNAL_ERROR)
    expect(response.status).toBe(500)
  })

  it('should handle non-Error objects', async () => {
    const response = handleApiError('Test Route', 'String error')
    
    const json = await response.json() as ApiResponse<never>
    expect(json.error?.code).toBe(ErrorCode.INTERNAL_ERROR)
    expect(response.status).toBe(500)
  })
})

describe('withErrorHandling', () => {
  it('should return handler result on success', async () => {
    const successHandler = jest.fn().mockResolvedValue(
      NextResponse.json({ success: true })
    )
    
    const wrappedHandler = withErrorHandling(successHandler, 'Test Route')
    const result = await wrappedHandler('arg1', 'arg2')
    
    expect(successHandler).toHaveBeenCalledWith('arg1', 'arg2')
    expect(result).toBeInstanceOf(NextResponse)
  })

  it('should catch and handle errors', async () => {
    const errorHandler = jest.fn().mockRejectedValue(
      new ApiError(ErrorCode.NOT_FOUND, 'Not found', 404)
    )
    
    const wrappedHandler = withErrorHandling(errorHandler, 'Test Route')
    const result = await wrappedHandler()
    
    const json = await result.json() as ApiResponse<never>
    expect(json.success).toBe(false)
    expect(json.error?.code).toBe(ErrorCode.NOT_FOUND)
    expect(result.status).toBe(404)
  })

  it('should handle unexpected errors', async () => {
    const errorHandler = jest.fn().mockRejectedValue(new Error('Unexpected'))
    
    const wrappedHandler = withErrorHandling(errorHandler, 'Test Route')
    const result = await wrappedHandler()
    
    const json = await result.json() as ApiResponse<never>
    expect(json.error?.code).toBe(ErrorCode.INTERNAL_ERROR)
    expect(result.status).toBe(500)
  })
})
