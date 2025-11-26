/**
 * PageService - Business logic layer for page operations
 * 
 * Handles internationalization, data transformation, and business rules
 * for page metadata, navigation, breadcrumbs, and relationships.
 */

import { PageRepository } from './repository'
import { 
  PageMetadata, 
  NavigationNode, 
  BreadcrumbItem, 
  PageSiblings,
  Language 
} from './types'

/**
 * Service class for page-related business logic
 * Provides i18n support and transforms repository data into API responses
 */
export class PageService {
  private repository: PageRepository

  constructor(repository: PageRepository) {
    this.repository = repository
  }

  /**
   * Get localized field value with fallback to English
   * @param field - Bilingual field object
   * @param lang - Requested language
   * @returns Localized string value
   */
  private getLocalizedField(field: { en: string; ar: string }, lang: Language): string {
    // If requested language has content, return it
    if (lang === 'ar' && field.ar) {
      return field.ar
    }
    if (lang === 'en' && field.en) {
      return field.en
    }
    // Fallback to English if translation missing
    return field.en || field.ar || ''
  }

  /**
   * Transform page metadata to include localized fields
   * @param page - Raw page metadata
   * @param lang - Requested language
   * @returns Page metadata with localized title and description
   */
  private localizePageMetadata(page: PageMetadata, lang: Language): PageMetadata {
    return {
      ...page,
      title: {
        en: page.title.en,
        ar: page.title.ar
      },
      description: {
        en: page.description.en,
        ar: page.description.ar
      }
    }
  }

  /**
   * Validate that page metadata contains required fields
   * @param page - Page metadata to validate
   * @returns True if valid, false otherwise
   */
  private validatePageMetadata(page: PageMetadata): boolean {
    return !!(
      page.title &&
      page.title.en &&
      page.path
    )
  }

  /**
   * Get metadata for a single page by path
   * @param path - Page path
   * @param lang - Language code (default: 'en')
   * @returns Page metadata or null if not found
   */
  public getPageMetadata(path: string, lang: Language = 'en'): PageMetadata | null {
    const page = this.repository.getPageByPath(path)
    
    if (!page) {
      return null
    }

    // Validate required fields
    if (!this.validatePageMetadata(page)) {
      return null
    }

    return this.localizePageMetadata(page, lang)
  }

  /**
   * Get metadata for all pages
   * @param lang - Language code (default: 'en')
   * @returns Array of all page metadata
   */
  public getAllPagesMetadata(lang: Language = 'en'): PageMetadata[] {
    const pages = this.repository.getAllPages()
    
    // Filter out invalid pages and localize
    return pages
      .filter(page => this.validatePageMetadata(page))
      .map(page => this.localizePageMetadata(page, lang))
  }

  /**
   * Build navigation structure with hierarchical relationships
   * @param section - Optional section filter (category)
   * @param currentPath - Current page path for active state marking
   * @param lang - Language code (default: 'en')
   * @returns Array of navigation nodes
   */
  public getNavigationStructure(
    section?: string,
    currentPath?: string,
    lang: Language = 'en'
  ): NavigationNode[] {
    // Get all pages or filtered by section
    let pages = section 
      ? this.repository.getPagesByCategory(section)
      : this.repository.getAllPages()

    // Filter valid pages and sort by order
    pages = pages
      .filter(page => this.validatePageMetadata(page))
      .sort((a, b) => a.order - b.order)

    // Build navigation nodes
    const nodes: NavigationNode[] = []
    const nodeMap = new Map<string, NavigationNode>()

    // First pass: create all nodes
    for (const page of pages) {
      const node: NavigationNode = {
        id: page.id,
        path: page.path,
        title: this.getLocalizedField(page.title, lang),
        icon: page.icon,
        order: page.order,
        isActive: currentPath === page.path
      }
      nodeMap.set(page.id, node)
    }

    // Second pass: build hierarchy
    for (const page of pages) {
      const node = nodeMap.get(page.id)
      if (!node) continue

      if (page.parent) {
        // This page has a parent, add it as a child
        const parentNode = nodeMap.get(page.parent)
        if (parentNode) {
          if (!parentNode.children) {
            parentNode.children = []
          }
          parentNode.children.push(node)
        } else {
          // Parent not found, add to root
          nodes.push(node)
        }
      } else {
        // No parent, add to root
        nodes.push(node)
      }
    }

    // Sort children by order
    for (const node of nodeMap.values()) {
      if (node.children) {
        node.children.sort((a, b) => a.order - b.order)
      }
    }

    return nodes
  }

  /**
   * Build breadcrumb trail for a page
   * @param path - Page path
   * @param lang - Language code (default: 'en')
   * @returns Array of breadcrumb items from root to current page
   */
  public getBreadcrumbs(path: string, lang: Language = 'en'): BreadcrumbItem[] {
    const page = this.repository.getPageByPath(path)
    
    if (!page) {
      return []
    }

    // Handle home page edge case
    if (path === '/') {
      return []
    }

    const breadcrumbs: BreadcrumbItem[] = []
    const visited = new Set<string>()

    // Build ancestor trail
    let currentPage: PageMetadata | null = page
    while (currentPage) {
      // Prevent infinite loops
      if (visited.has(currentPage.id)) {
        break
      }
      visited.add(currentPage.id)

      // Add current page to breadcrumbs (at the beginning)
      breadcrumbs.unshift({
        title: this.getLocalizedField(currentPage.title, lang),
        path: currentPage.path
      })

      // Move to parent
      if (currentPage.parent) {
        currentPage = this.repository.getPageById(currentPage.parent)
      } else {
        currentPage = null
      }
    }

    return breadcrumbs
  }

  /**
   * Get related pages based on category, tags, or explicit relationships
   * @param path - Page path
   * @param limit - Maximum number of results (default: 6)
   * @param lang - Language code (default: 'en')
   * @returns Array of related page metadata
   */
  public getRelatedPages(
    path: string,
    limit: number = 6,
    lang: Language = 'en'
  ): PageMetadata[] {
    const page = this.repository.getPageByPath(path)
    
    if (!page) {
      return []
    }

    const relatedSet = new Set<string>()
    const relatedPages: PageMetadata[] = []

    // 1. Add explicitly related pages
    if (page.relatedPages) {
      for (const relatedId of page.relatedPages) {
        const relatedPage = this.repository.getPageById(relatedId)
        if (relatedPage && relatedPage.id !== page.id) {
          relatedSet.add(relatedPage.id)
          relatedPages.push(relatedPage)
        }
      }
    }

    // 2. Add pages with same category
    const categoryPages = this.repository.getPagesByCategory(page.category)
    for (const categoryPage of categoryPages) {
      if (categoryPage.id !== page.id && !relatedSet.has(categoryPage.id)) {
        relatedSet.add(categoryPage.id)
        relatedPages.push(categoryPage)
      }
    }

    // 3. Add pages with common tags
    if (page.tags) {
      for (const tag of page.tags) {
        const tagPages = this.repository.getPagesByTag(tag)
        for (const tagPage of tagPages) {
          if (tagPage.id !== page.id && !relatedSet.has(tagPage.id)) {
            relatedSet.add(tagPage.id)
            relatedPages.push(tagPage)
          }
        }
      }
    }

    // Filter valid pages, localize, and apply limit
    return relatedPages
      .filter(p => this.validatePageMetadata(p))
      .slice(0, limit)
      .map(p => this.localizePageMetadata(p, lang))
  }

  /**
   * Get previous and next pages (siblings) based on order
   * @param path - Page path
   * @param lang - Language code (default: 'en')
   * @returns Object with previous and next page metadata
   */
  public getPageSiblings(path: string, lang: Language = 'en'): PageSiblings {
    const page = this.repository.getPageByPath(path)
    
    if (!page) {
      return { previous: null, next: null }
    }

    // Get all pages in the same category (section)
    const sectionPages = this.repository.getPagesByCategory(page.category)
      .filter(p => this.validatePageMetadata(p))
      .sort((a, b) => a.order - b.order)

    // Find current page index
    const currentIndex = sectionPages.findIndex(p => p.id === page.id)
    
    if (currentIndex === -1) {
      return { previous: null, next: null }
    }

    // Get previous and next pages
    const previous = currentIndex > 0 
      ? this.localizePageMetadata(sectionPages[currentIndex - 1], lang)
      : null

    const next = currentIndex < sectionPages.length - 1
      ? this.localizePageMetadata(sectionPages[currentIndex + 1], lang)
      : null

    return { previous, next }
  }

  /**
   * Search pages by query string in title or description
   * @param query - Search query string
   * @param lang - Language code (default: 'en')
   * @returns Array of matching page metadata ordered by relevance
   */
  public searchPages(query: string, lang: Language = 'en'): PageMetadata[] {
    // Validate query
    if (!query || query.trim() === '') {
      return []
    }

    const normalizedQuery = query.toLowerCase().trim()
    const allPages = this.repository.getAllPages()
      .filter(page => this.validatePageMetadata(page))

    // Search and score results
    const results: Array<{ page: PageMetadata; score: number }> = []

    for (const page of allPages) {
      const title = this.getLocalizedField(page.title, lang).toLowerCase()
      const description = this.getLocalizedField(page.description, lang).toLowerCase()

      let score = 0

      // Exact title match (highest score)
      if (title === normalizedQuery) {
        score += 100
      }
      // Title contains query
      else if (title.includes(normalizedQuery)) {
        // Title starts with query (higher score)
        if (title.startsWith(normalizedQuery)) {
          score += 50
        } else {
          score += 30
        }
      }

      // Description contains query
      if (description.includes(normalizedQuery)) {
        score += 10
      }

      // Only include pages with matches
      if (score > 0) {
        results.push({ page, score })
      }
    }

    // Sort by relevance (score) descending
    results.sort((a, b) => b.score - a.score)

    // Return localized pages
    return results.map(result => this.localizePageMetadata(result.page, lang))
  }
}

/**
 * Export singleton instance for convenience
 */
export const pageService = new PageService(PageRepository.getInstance())

