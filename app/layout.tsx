import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-sans'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});
const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: 'New-Way-Solutions',
  description: 'Enterprise solutions for ambitious businesses ready to lead their industries',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '64x64', type: 'image/png' },
      { url: '/favicon.png', sizes: '128x128', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable} ${cairo.variable} font-sans font-medium antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
