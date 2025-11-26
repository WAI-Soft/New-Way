/**
 * PageRepository - Data access layer for page metadata
 * 
 * Provides low-level data access methods with in-memory caching
 * and lazy loading for optimal performance.
 */

import { readFileSync } from 'fs'
import { join } from 'path'
import { PageMetadata, PagesDataStore } from './types'

/**
 * Repository class for accessing page metadata from pages.json
 * Implements caching and lazy loading for performance
 */
export class PageRepository {
  private static instance: PageRepository | null = null
  private cache: PageMetadata[] | null = null
  private pathIndex: Map<string, PageMetadata> | null = null
  private idIndex: Map<string, PageMetadata> | null = null
  private categoryIndex: Map<string, PageMetadata[]> | null = null
  private tagIndex: Map<string, PageMetadata[]> | null = null

  /**
   * Private constructor to enforce singleton pattern
   */
  private constructor() {}

  /**
   * Get singleton instance of PageRepository
   */
  public static getInstance(): PageRepository {
    if (!PageRepository.instance) {
      PageRepository.instance = new PageRepository()
    }
    return PageRepository.instance
  }

  /**
   * Load and parse pages.json file (lazy loading)
   * Builds lookup indexes for performance
   */
  private loadPages(): void {
    if (this.cache !== null) {
      return // Already loaded
    }

    try {
      const dataPath = join(process.cwd(), 'data', 'pages.json')
      const fileContent = readFileSync(dataPath, 'utf-8')
      const data: PagesDataStore = JSON.parse(fileContent)
      
      this.cache = data.pages
      this.buildIndexes()
    } catch (error) {
      console.error('Error loading pages.json:', error)
      this.cache = []
    }
  }

  /**
   * Build lookup indexes for fast data access
   */
  private buildIndexes(): void {
    if (!this.cache) {
      return
    }

    // Build path index
    this.pathIndex = new Map()
    for (const page of this.cache) {
      this.pathIndex.set(page.path, page)
    }

    // Build ID index
    this.idIndex = new Map()
    for (const page of this.cache) {
      this.idIndex.set(page.id, page)
    }

    // Build category index
    this.categoryIndex = new Map()
    for (const page of this.cache) {
      const existing = this.categoryIndex.get(page.category) || []
      existing.push(page)
      this.categoryIndex.set(page.category, existing)
    }

    // Build tag index
    this.tagIndex = new Map()
    for (const page of this.cache) {
      if (page.tags) {
        for (const tag of page.tags) {
          const existing = this.tagIndex.get(tag) || []
          existing.push(page)
          this.tagIndex.set(tag, existing)
        }
      }
    }
  }

  /**
   * Get all pages from the data store
   * @returns Array of all page metadata
   */
  public getAllPages(): PageMetadata[] {
    this.loadPages()
    return this.cache ? [...this.cache] : []
  }

  /**
   * Get a single page by its path
   * @param path - The page path (e.g., "/services")
   * @returns Page metadata or null if not found
   */
  public getPageByPath(path: string): PageMetadata | null {
    this.loadPages()
    return this.pathIndex?.get(path) || null
  }

  /**
   * Get a single page by its ID
   * @param id - The page ID (e.g., "services")
   * @returns Page metadata or null if not found
   */
  public getPageById(id: string): PageMetadata | null {
    this.loadPages()
    return this.idIndex?.get(id) || null
  }

  /**
   * Get all pages in a specific category
   * @param category - The category name (e.g., "main")
   * @returns Array of pages in the category
   */
  public getPagesByCategory(category: string): PageMetadata[] {
    this.loadPages()
    return this.categoryIndex?.get(category) || []
  }

  /**
   * Get all pages with a specific tag
   * @param tag - The tag name (e.g., "services")
   * @returns Array of pages with the tag
   */
  public getPagesByTag(tag: string): PageMetadata[] {
    this.loadPages()
    return this.tagIndex?.get(tag) || []
  }

  /**
   * Clear the cache (useful for testing)
   */
  public clearCache(): void {
    this.cache = null
    this.pathIndex = null
    this.idIndex = null
    this.categoryIndex = null
    this.tagIndex = null
  }

  /**
   * Reset singleton instance (useful for testing)
   */
  public static resetInstance(): void {
    PageRepository.instance = null
  }
}

/**
 * Export singleton instance for convenience
 */
export const pageRepository = PageRepository.getInstance()
