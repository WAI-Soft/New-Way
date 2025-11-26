/**
 * Unit tests for PageRepository
 */

import { PageRepository } from '../../../lib/pages/repository'
import { PageMetadata } from '../../../lib/pages/types'

describe('PageRepository', () => {
  let repository: PageRepository

  beforeEach(() => {
    // Reset singleton and get fresh instance
    PageRepository.resetInstance()
    repository = PageRepository.getInstance()
  })

  afterEach(() => {
    repository.clearCache()
  })

  describe('Singleton Pattern', () => {
    it('should return the same instance', () => {
      const instance1 = PageRepository.getInstance()
      const instance2 = PageRepository.getInstance()
      expect(instance1).toBe(instance2)
    })
  })

  describe('getAllPages', () => {
    it('should return all pages from pages.json', () => {
      const pages = repository.getAllPages()
      expect(pages).toBeInstanceOf(Array)
      expect(pages.length).toBeGreaterThan(0)
      
      // Verify we have the expected pages
      const pageIds = pages.map(p => p.id)
      expect(pageIds).toContain('home')
      expect(pageIds).toContain('services')
      expect(pageIds).toContain('about')
    })

    it('should return a copy of the cache (not the original)', () => {
      const pages1 = repository.getAllPages()
      const pages2 = repository.getAllPages()
      expect(pages1).not.toBe(pages2)
      expect(pages1).toEqual(pages2)
    })

    it('should load pages lazily on first access', () => {
      // First call should load from file
      const pages = repository.getAllPages()
      expect(pages.length).toBeGreaterThan(0)
      
      // Second call should use cache
      const cachedPages = repository.getAllPages()
      expect(cachedPages).toEqual(pages)
    })
  })

  describe('getPageByPath', () => {
    it('should return page for valid path', () => {
      const page = repository.getPageByPath('/')
      expect(page).not.toBeNull()
      expect(page?.id).toBe('home')
      expect(page?.path).toBe('/')
    })

    it('should return page for services path', () => {
      const page = repository.getPageByPath('/services')
      expect(page).not.toBeNull()
      expect(page?.id).toBe('services')
    })

    it('should return null for invalid path', () => {
      const page = repository.getPageByPath('/nonexistent')
      expect(page).toBeNull()
    })

    it('should return null for empty path', () => {
      const page = repository.getPageByPath('')
      expect(page).toBeNull()
    })
  })

  describe('getPageById', () => {
    it('should return page for valid id', () => {
      const page = repository.getPageById('home')
      expect(page).not.toBeNull()
      expect(page?.id).toBe('home')
      expect(page?.path).toBe('/')
    })

    it('should return page for services id', () => {
      const page = repository.getPageById('services')
      expect(page).not.toBeNull()
      expect(page?.path).toBe('/services')
    })

    it('should return null for invalid id', () => {
      const page = repository.getPageById('nonexistent')
      expect(page).toBeNull()
    })
  })

  describe('getPagesByCategory', () => {
    it('should return all pages in main category', () => {
      const pages = repository.getPagesByCategory('main')
      expect(pages).toBeInstanceOf(Array)
      expect(pages.length).toBeGreaterThan(0)
      
      // All returned pages should have category 'main'
      pages.forEach(page => {
        expect(page.category).toBe('main')
      })
    })

    it('should return empty array for nonexistent category', () => {
      const pages = repository.getPagesByCategory('nonexistent')
      expect(pages).toEqual([])
    })

    it('should return empty array for empty category', () => {
      const pages = repository.getPagesByCategory('')
      expect(pages).toEqual([])
    })
  })

  describe('getPagesByTag', () => {
    it('should return pages with services tag', () => {
      const pages = repository.getPagesByTag('services')
      expect(pages).toBeInstanceOf(Array)
      expect(pages.length).toBeGreaterThan(0)
      
      // All returned pages should have the 'services' tag
      pages.forEach(page => {
        expect(page.tags).toContain('services')
      })
    })

    it('should return pages with main tag', () => {
      const pages = repository.getPagesByTag('main')
      expect(pages).toBeInstanceOf(Array)
      expect(pages.length).toBeGreaterThan(0)
    })

    it('should return empty array for nonexistent tag', () => {
      const pages = repository.getPagesByTag('nonexistent')
      expect(pages).toEqual([])
    })

    it('should return empty array for empty tag', () => {
      const pages = repository.getPagesByTag('')
      expect(pages).toEqual([])
    })
  })

  describe('Cache Management', () => {
    it('should clear cache when clearCache is called', () => {
      // Load pages
      const pages1 = repository.getAllPages()
      expect(pages1.length).toBeGreaterThan(0)
      
      // Clear cache
      repository.clearCache()
      
      // Should reload from file
      const pages2 = repository.getAllPages()
      expect(pages2).toEqual(pages1)
    })
  })

  describe('Data Integrity', () => {
    it('should return pages with required fields', () => {
      const pages = repository.getAllPages()
      
      pages.forEach(page => {
        expect(page).toHaveProperty('id')
        expect(page).toHaveProperty('path')
        expect(page).toHaveProperty('title')
        expect(page).toHaveProperty('description')
        expect(page).toHaveProperty('category')
        expect(page).toHaveProperty('order')
        expect(page.title).toHaveProperty('en')
        expect(page.title).toHaveProperty('ar')
        expect(page.description).toHaveProperty('en')
        expect(page.description).toHaveProperty('ar')
      })
    })
  })
})
