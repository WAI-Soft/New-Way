'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-all hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-foreground transition-transform rotate-0 hover:rotate-180 duration-500" />
      ) : (
        <Moon className="h-5 w-5 text-foreground transition-transform rotate-0 hover:-rotate-180 duration-500" />
      )}
    </button>
  )
}

