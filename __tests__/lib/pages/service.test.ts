/**
 * Unit tests for PageService
 */

import { PageService } from '../../../lib/pages/service'
import { PageRepository } from '../../../lib/pages/repository'

describe('PageService', () => {
  let service: PageService
  let repository: PageRepository

  beforeEach(() => {
    repository = PageRepository.getInstance()
    repository.clearCache()
    service = new PageService(repository)
  })

  afterEach(() => {
    repository.clearCache()
  })

  describe('getPageMetadata', () => {
    it('should return page metadata for valid path', () => {
      const result = service.getPageMetadata('/', 'en')
      
      expect(result).not.toBeNull()
      expect(result?.path).toBe('/')
      expect(result?.title.en).toBe('Home')
    })

    it('should return null for invalid path', () => {
      const result = service.getPageMetadata('/invalid-path', 'en')
      
      expect(result).toBeNull()
    })

    it('should return Arabic content when lang is ar', () => {
      const result = service.getPageMetadata('/', 'ar')
      
      expect(result).not.toBeNull()
      expect(result?.title.ar).toBe('الرئيسية')
    })
  })

  describe('getAllPagesMetadata', () => {
    it('should return all pages', () => {
      const result = service.getAllPagesMetadata('en')
      
      expect(result.length).toBeGreaterThan(0)
      expect(result.every(page => page.title && page.path)).toBe(true)
    })
  })

  describe('getNavigationStructure', () => {
    it('should return navigation structure', () => {
      const result = service.getNavigationStructure(undefined, undefined, 'en')
      
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
      expect(result.every(node => node.title && node.path)).toBe(true)
    })

    it('should filter by section', () => {
      const result = service.getNavigationStructure('main', undefined, 'en')
      
      expect(Array.isArray(result)).toBe(true)
    })

    it('should mark active page', () => {
      const result = service.getNavigationStructure(undefined, '/', 'en')
      
      const homePage = result.find(node => node.path === '/')
      expect(homePage?.isActive).toBe(true)
    })
  })

  describe('getBreadcrumbs', () => {
    it('should return empty array for home page', () => {
      const result = service.getBreadcrumbs('/', 'en')
      
      expect(result).toEqual([])
    })

    it('should return breadcrumbs for valid page', () => {
      const result = service.getBreadcrumbs('/services', 'en')
      
      expect(Array.isArray(result)).toBe(true)
      expect(result.every(item => item.title && item.path)).toBe(true)
    })

    it('should return empty array for invalid path', () => {
      const result = service.getBreadcrumbs('/invalid', 'en')
      
      expect(result).toEqual([])
    })
  })

  describe('getRelatedPages', () => {
    it('should return related pages', () => {
      const result = service.getRelatedPages('/', 6, 'en')
      
      expect(Array.isArray(result)).toBe(true)
    })

    it('should respect limit parameter', () => {
      const result = service.getRelatedPages('/', 3, 'en')
      
      expect(result.length).toBeLessThanOrEqual(3)
    })

    it('should return empty array for invalid path', () => {
      const result = service.getRelatedPages('/invalid', 6, 'en')
      
      expect(result).toEqual([])
    })
  })

  describe('getPageSiblings', () => {
    it('should return siblings structure', () => {
      const result = service.getPageSiblings('/services', 'en')
      
      expect(result).toHaveProperty('previous')
      expect(result).toHaveProperty('next')
    })

    it('should return null siblings for invalid path', () => {
      const result = service.getPageSiblings('/invalid', 'en')
      
      expect(result.previous).toBeNull()
      expect(result.next).toBeNull()
    })
  })

  describe('searchPages', () => {
    it('should return matching pages', () => {
      const result = service.searchPages('home', 'en')
      
      expect(Array.isArray(result)).toBe(true)
      expect(result.length).toBeGreaterThan(0)
    })

    it('should be case-insensitive', () => {
      const result1 = service.searchPages('HOME', 'en')
      const result2 = service.searchPages('home', 'en')
      
      expect(result1.length).toBe(result2.length)
    })

    it('should return empty array for empty query', () => {
      const result = service.searchPages('', 'en')
      
      expect(result).toEqual([])
    })

    it('should return empty array for no matches', () => {
      const result = service.searchPages('xyznonexistent', 'en')
      
      expect(result).toEqual([])
    })
  })
})

