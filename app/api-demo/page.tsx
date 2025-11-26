'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/language-context'
import { HeaderWithAPI } from '@/components/header-with-api'

interface PageMetadata {
  id: string
  path: string
  title: { en: string; ar: string }
  description: { en: string; ar: string }
  icon?: string
  category: string
  order: number
}

interface BreadcrumbItem {
  title: string
  path: string
}

export default function APIDemoPage() {
  const [pages, setPages] = useState<PageMetadata[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<PageMetadata[]>([])
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([])
  const [loading, setLoading] = useState(true)
  const { language } = useLanguage()

  // Fetch all pages on mount
  useEffect(() => {
    async function fetchPages() {
      try {
        const response = await fetch(`/api/pages?lang=${language}`)
        const data = await response.json()
        
        if (data.success) {
          setPages(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch pages:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPages()
  }, [language])

  // Fetch breadcrumbs for current page
  useEffect(() => {
    async function fetchBreadcrumbs() {
      try {
        const response = await fetch(`/api/pages/breadcrumbs?path=/api-demo&lang=${language}`)
        const data = await response.json()
        
        if (data.success) {
          setBreadcrumbs(data.data)
        }
      } catch (error) {
        console.error('Failed to fetch breadcrumbs:', error)
      }
    }

    fetchBreadcrumbs()
  }, [language])

  // Handle search
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    
    if (!searchQuery.trim()) return

    try {
      const response = await fetch(
        `/api/pages/search?q=${encodeURIComponent(searchQuery)}&lang=${language}`
      )
      const data = await response.json()
      
      if (data.success) {
        setSearchResults(data.data)
      }
    } catch (error) {
      console.error('Search failed:', error)
    }
  }

  return (
    <>
      <HeaderWithAPI />
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              🚀 API Integration Demo
            </h1>
            <p className="text-xl text-muted-foreground">
              This page demonstrates the Page API Routes in action
            </p>
            <div className="mt-4 inline-block px-4 py-2 bg-green-500/10 border border-green-500/50 rounded-lg">
              <span className="text-green-600 dark:text-green-400 font-semibold">
                ✅ Frontend ↔️ Backend Connected
              </span>
            </div>
          </div>

          {/* Breadcrumbs Demo */}
          {breadcrumbs.length > 0 && (
            <div className="mb-8 p-4 bg-card border rounded-lg">
              <h2 className="text-lg font-semibold mb-2">📍 Breadcrumbs (from API)</h2>
              <div className="flex items-center gap-2 text-sm">
                <a href="/" className="text-primary hover:underline">Home</a>
                {breadcrumbs.map((crumb, index) => (
                  <span key={crumb.path} className="flex items-center gap-2">
                    <span className="text-muted-foreground">/</span>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="text-foreground">{crumb.title}</span>
                    ) : (
                      <a href={crumb.path} className="text-primary hover:underline">
                        {crumb.title}
                      </a>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Search Demo */}
          <div className="mb-8 p-6 bg-card border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">🔍 Search Pages (API)</h2>
            <form onSubmit={handleSearch} className="flex gap-2 mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pages..."
                className="flex-1 px-4 py-2 border rounded-lg bg-background"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                Search
              </button>
            </form>
            
            {searchResults.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground mb-2">
                  Found {searchResults.length} result(s)
                </p>
                {searchResults.map((result) => (
                  <div key={result.id} className="p-3 bg-background border rounded">
                    <a href={result.path} className="font-medium text-primary hover:underline">
                      {language === 'ar' ? result.title.ar : result.title.en}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      {language === 'ar' ? result.description.ar : result.description.en}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* All Pages Demo */}
          <div className="p-6 bg-card border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">📄 All Pages (from API)</h2>
            {loading ? (
              <p className="text-muted-foreground">Loading pages...</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pages.map((page) => (
                  <div key={page.id} className="p-4 bg-background border rounded-lg hover:border-primary transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold">
                        {language === 'ar' ? page.title.ar : page.title.en}
                      </h3>
                      {page.icon && (
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                          {page.icon}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'ar' ? page.description.ar : page.description.en}
                    </p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Category: {page.category}
                      </span>
                      <a 
                        href={page.path}
                        className="text-primary hover:underline"
                      >
                        Visit →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* API Endpoints Info */}
          <div className="mt-8 p-6 bg-card border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">🔌 Available API Endpoints</h2>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages</code>
                <span className="text-muted-foreground">- Get all pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/[path]</code>
                <span className="text-muted-foreground">- Get single page</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/navigation</code>
                <span className="text-muted-foreground">- Get navigation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/breadcrumbs</code>
                <span className="text-muted-foreground">- Get breadcrumbs</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/related</code>
                <span className="text-muted-foreground">- Get related pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/siblings</code>
                <span className="text-muted-foreground">- Get prev/next pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-500/10 text-green-600 rounded">GET</span>
                <code>/api/pages/search</code>
                <span className="text-muted-foreground">- Search pages</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
