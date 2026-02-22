'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`nav-blur fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-800 bg-neutral-950/80'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            D
          </div>
          <span className="text-lg font-bold text-white">DevForge AI</span>
        </a>

        {/* Links (hidden on mobile, shown on sm+) */}
        <div className="hidden items-center gap-8 sm:flex">
          <a href="#features" className="text-sm text-neutral-400 transition-colors hover:text-white">
            Features
          </a>
          <a href="#tools" className="text-sm text-neutral-400 transition-colors hover:text-white">
            Tools
          </a>
          <a href="#pricing" className="text-sm text-neutral-400 transition-colors hover:text-white">
            Pricing
          </a>
          <a
            href="https://github.com/jroell/devforge-ai/releases/latest"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Download
          </a>
        </div>

        {/* Mobile download button */}
        <a
          href="https://github.com/jroell/devforge-ai/releases/latest"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500 sm:hidden"
        >
          Download
        </a>
      </div>
    </nav>
  )
}
