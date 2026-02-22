import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DevForge AI — AI-Supercharged Developer Toolbox',
  description:
    '30+ essential developer tools in one beautiful desktop app. Formatters, encoders, generators, AI tools — everything you need, offline and fast. $9.99 once, yours forever.',
  keywords: [
    'developer tools',
    'JSON formatter',
    'code generator',
    'AI coding',
    'base64 encoder',
    'regex tester',
    'desktop app',
    'developer utility',
  ],
  openGraph: {
    title: 'DevForge AI — AI-Supercharged Developer Toolbox',
    description:
      '30+ essential developer tools in one desktop app. $9.99 once, yours forever.',
    type: 'website',
    url: 'https://devforge.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevForge AI — AI-Supercharged Developer Toolbox',
    description:
      '30+ essential developer tools in one desktop app. $9.99 once, yours forever.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-neutral-950 font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
