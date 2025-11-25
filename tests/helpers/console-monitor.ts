import { Page, ConsoleMessage } from '@playwright/test'

/**
 * Console monitor class for tracking browser console messages during tests
 */
export class ConsoleMonitor {
  private errors: ConsoleMessage[] = []
  private warnings: ConsoleMessage[] = []
  private logs: ConsoleMessage[] = []
  private isMonitoring: boolean = false
  private page: Page | null = null

  /**
   * Start monitoring console messages on the page
   * @param page - Playwright page object
   */
  startMonitoring(page: Page): void {
    this.page = page
    this.isMonitoring = true
    this.clear()

    // Listen to console events
    page.on('console', (msg: ConsoleMessage) => {
      if (!this.isMonitoring) return

      const type = msg.type()

      switch (type) {
        case 'error':
          this.errors.push(msg)
          break
        case 'warning':
          this.warnings.push(msg)
          break
        case 'log':
        case 'info':
        case 'debug':
          this.logs.push(msg)
          break
      }
    })

    // Listen to page errors (uncaught exceptions)
    page.on('pageerror', (error: Error) => {
      // Create a mock ConsoleMessage-like object for page errors
      const errorMsg = {
        type: () => 'error',
        text: () => error.message,
        location: () => ({ url: '', lineNumber: 0, columnNumber: 0 }),
        args: () => [],
      } as unknown as ConsoleMessage

      this.errors.push(errorMsg)
    })
  }

  /**
   * Stop monitoring console messages
   */
  stopMonitoring(): void {
    this.isMonitoring = false
    if (this.page) {
      this.page.removeAllListeners('console')
      this.page.removeAllListeners('pageerror')
    }
  }

  /**
   * Get all collected error messages
   * @returns Array of error console messages
   */
  getErrors(): ConsoleMessage[] {
    return [...this.errors]
  }

  /**
   * Get all collected warning messages
   * @returns Array of warning console messages
   */
  getWarnings(): ConsoleMessage[] {
    return [...this.warnings]
  }

  /**
   * Get all collected log messages
   * @returns Array of log console messages
   */
  getLogs(): ConsoleMessage[] {
    return [...this.logs]
  }

  /**
   * Verify that no errors occurred
   * @returns true if no errors were logged
   */
  verifyNoErrors(): boolean {
    return this.errors.length === 0
  }

  /**
   * Verify that no warnings occurred
   * @returns true if no warnings were logged
   */
  verifyNoWarnings(): boolean {
    return this.warnings.length === 0
  }

  /**
   * Get error messages as text
   * @returns Array of error message texts
   */
  getErrorTexts(): string[] {
    return this.errors.map(msg => msg.text())
  }

  /**
   * Get warning messages as text
   * @returns Array of warning message texts
   */
  getWarningTexts(): string[] {
    return this.warnings.map(msg => msg.text())
  }

  /**
   * Clear all collected messages
   */
  clear(): void {
    this.errors = []
    this.warnings = []
    this.logs = []
  }

  /**
   * Get a summary of collected messages
   * @returns Object with counts of each message type
   */
  getSummary(): { errors: number; warnings: number; logs: number } {
    return {
      errors: this.errors.length,
      warnings: this.warnings.length,
      logs: this.logs.length,
    }
  }

  /**
   * Filter errors by text pattern
   * @param pattern - String or RegExp to match against error text
   * @returns Filtered array of error messages
   */
  filterErrors(pattern: string | RegExp): ConsoleMessage[] {
    return this.errors.filter(msg => {
      const text = msg.text()
      if (typeof pattern === 'string') {
        return text.includes(pattern)
      }
      return pattern.test(text)
    })
  }

  /**
   * Check if specific error exists
   * @param pattern - String or RegExp to match against error text
   * @returns true if error matching pattern exists
   */
  hasError(pattern: string | RegExp): boolean {
    return this.filterErrors(pattern).length > 0
  }
}

/**
 * Create a new console monitor instance
 * @returns New ConsoleMonitor instance
 */
export function createConsoleMonitor(): ConsoleMonitor {
  return new ConsoleMonitor()
}
