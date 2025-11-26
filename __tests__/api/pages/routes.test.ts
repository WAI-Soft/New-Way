/**
 * Integration tests for API routes
 * Tests basic functionality of all page API endpoints
 * Validates error responses and bilingual support
 */

import { GET as getAllPages } from '@/app/api/pages/route'
import { GET as getPageByPath } from '@/app/api/pages/[path]/route'
import { GET as getNavigation } from '@/app/api/pages/navigation/route'
import { GET as getBreadcrumbs } from '@/app/api/pages/breadcrumbs/route'
import { GET as getRelated } from '@/app/api/pages/related/route'
import { GET as getSiblings } from '@/app/api/pages/siblings/route'
import { GET as searchPages } from '@/app/api/pages/search/route'
import { NextRequest } from 'next/server'

describe('API Routes Integration Tests', () => {
  describe('GET /api/pages', () => {
    it('should return all pages metadata', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages')
      const response = await getAllPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
      expect(data.data.length).toBeGreaterThan(0)
    })

    it('should support language parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages?lang=ar')
      const response = await getAllPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })
  })

  describe('GET /api/pages/[path]', () => {
    it('should return single page metadata for valid path', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/services')
      const response = await getPageByPath(request, { params: Promise.resolve({ path: 'services' }) })
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toBeDefined()
      expect(data.data.path).toBe('/services')
    })

    it('should return 404 for invalid path', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/invalid')
      const response = await getPageByPath(request, { params: Promise.resolve({ path: 'invalid' }) })
      const data = await response.json()
      
      expect(response.status).toBe(404)
      expect(data.success).toBe(false)
      expect(data.error).toBeDefined()
    })
  })

  describe('GET /api/pages/navigation', () => {
    it('should return navigation structure', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/navigation')
      const response = await getNavigation(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })

    it('should support section filtering', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/navigation?section=main')
      const response = await getNavigation(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })
  })

  describe('GET /api/pages/breadcrumbs', () => {
    it('should return breadcrumbs for valid path', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs?path=/services')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })

    it('should return 400 for missing path parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error?.code).toBe('INVALID_PARAMETER')
    })

    it('should return 404 for invalid path', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs?path=/invalid')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      expect(response.status).toBe(404)
      expect(data.success).toBe(false)
    })
  })

  describe('GET /api/pages/related', () => {
    it('should return related pages', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/related?path=/services')
      const response = await getRelated(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })

    it('should respect limit parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/related?path=/services&limit=3')
      const response = await getRelated(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.length).toBeLessThanOrEqual(3)
    })

    it('should return 400 for missing path parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/related')
      const response = await getRelated(request)
      const data = await response.json()
      
      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
    })
  })

  describe('GET /api/pages/siblings', () => {
    it('should return siblings structure', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/siblings?path=/services')
      const response = await getSiblings(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toBeDefined()
      expect(data.data).toHaveProperty('previous')
      expect(data.data).toHaveProperty('next')
    })

    it('should return 400 for missing path parameter', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/siblings')
      const response = await getSiblings(request)
      const data = await response.json()
      
      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
    })
  })

  describe('GET /api/pages/search', () => {
    it('should return search results', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/search?q=services')
      const response = await searchPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
    })

    it('should return 400 for empty query', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/search?q=')
      const response = await searchPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error?.code).toBe('VALIDATION_ERROR')
    })

    it('should return empty array for no matches', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/search?q=nonexistentquery12345')
      const response = await searchPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toEqual([])
    })

    it('should perform case-insensitive search', async () => {
      const request1 = new NextRequest('http://localhost:3000/api/pages/search?q=SERVICES')
      const response1 = await searchPages(request1)
      const data1 = await response1.json()
      
      const request2 = new NextRequest('http://localhost:3000/api/pages/search?q=services')
      const response2 = await searchPages(request2)
      const data2 = await response2.json()
      
      expect(data1.data.length).toBe(data2.data.length)
      expect(data1.data.length).toBeGreaterThan(0)
    })
  })

  describe('Bilingual Support', () => {
    it('should return English content by default', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/services')
      const response = await getPageByPath(request, { params: Promise.resolve({ path: 'services' }) })
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.data.title.en).toBeDefined()
      expect(data.data.description.en).toBeDefined()
    })

    it('should return Arabic content when lang=ar', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/services?lang=ar')
      const response = await getPageByPath(request, { params: Promise.resolve({ path: 'services' }) })
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.data.title.ar).toBeDefined()
      expect(data.data.description.ar).toBeDefined()
    })

    it('should support Arabic in navigation', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/navigation?lang=ar')
      const response = await getNavigation(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.data.length).toBeGreaterThan(0)
      // Navigation nodes should have localized titles
      expect(data.data[0].title).toBeDefined()
    })

    it('should support Arabic in breadcrumbs', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs?path=/services&lang=ar')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(Array.isArray(data.data)).toBe(true)
    })

    it('should support Arabic in search', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/search?q=خدمات&lang=ar')
      const response = await searchPages(request)
      const data = await response.json()
      
      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
    })
  })

  describe('Error Response Structure', () => {
    it('should return consistent error structure for 404', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/invalid')
      const response = await getPageByPath(request, { params: Promise.resolve({ path: 'invalid' }) })
      const data = await response.json()
      
      expect(response.status).toBe(404)
      expect(data.success).toBe(false)
      expect(data.error).toBeDefined()
      expect(data.error.code).toBeDefined()
      expect(data.error.message).toBeDefined()
      expect(typeof data.error.code).toBe('string')
      expect(typeof data.error.message).toBe('string')
    })

    it('should return consistent error structure for 400', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBeDefined()
      expect(data.error.code).toBe('INVALID_PARAMETER')
      expect(data.error.message).toBeDefined()
    })
  })

  describe('Data Validation', () => {
    it('should return pages with required fields', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages')
      const response = await getAllPages(request)
      const data = await response.json()
      
      expect(data.data.length).toBeGreaterThan(0)
      
      // Check first page has required fields
      const page = data.data[0]
      expect(page.id).toBeDefined()
      expect(page.path).toBeDefined()
      expect(page.title).toBeDefined()
      expect(page.title.en).toBeDefined()
      expect(page.title.ar).toBeDefined()
      expect(page.description).toBeDefined()
      expect(page.category).toBeDefined()
      expect(page.order).toBeDefined()
    })

    it('should return navigation nodes with required fields', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/navigation')
      const response = await getNavigation(request)
      const data = await response.json()
      
      expect(data.data.length).toBeGreaterThan(0)
      
      const node = data.data[0]
      expect(node.id).toBeDefined()
      expect(node.path).toBeDefined()
      expect(node.title).toBeDefined()
      expect(node.order).toBeDefined()
      expect(typeof node.isActive).toBe('boolean')
    })

    it('should return breadcrumbs with required fields', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/breadcrumbs?path=/services')
      const response = await getBreadcrumbs(request)
      const data = await response.json()
      
      if (data.data.length > 0) {
        const crumb = data.data[0]
        expect(crumb.title).toBeDefined()
        expect(crumb.path).toBeDefined()
      }
    })

    it('should return siblings with correct structure', async () => {
      const request = new NextRequest('http://localhost:3000/api/pages/siblings?path=/services')
      const response = await getSiblings(request)
      const data = await response.json()
      
      expect(data.data).toBeDefined()
      expect(data.data).toHaveProperty('previous')
      expect(data.data).toHaveProperty('next')
      
      // Previous and next should be either null or valid page objects
      if (data.data.previous) {
        expect(data.data.previous.id).toBeDefined()
        expect(data.data.previous.path).toBeDefined()
      }
      
      if (data.data.next) {
        expect(data.data.next.id).toBeDefined()
        expect(data.data.next.path).toBeDefined()
      }
    })
  })

  describe('Performance and Response Time', () => {
    it('should respond quickly for all pages request', async () => {
      const start = Date.now()
      const request = new NextRequest('http://localhost:3000/api/pages')
      const response = await getAllPages(request)
      const duration = Date.now() - start
      
      expect(response.status).toBe(200)
      expect(duration).toBeLessThan(200) // Target: <200ms
    })

    it('should respond quickly for navigation request', async () => {
      const start = Date.now()
      const request = new NextRequest('http://localhost:3000/api/pages/navigation')
      const response = await getNavigation(request)
      const duration = Date.now() - start
      
      expect(response.status).toBe(200)
      expect(duration).toBeLessThan(200)
    })
  })
})
