'use client'

import { useState } from 'react'
import { tools, categories } from '@/lib/tools'

const categoryIcons: Record<string, string> = {
  Formatters: '{ }',
  Encoders: '#',
  Converters: '~',
  Generators: '*',
  Inspectors: '?',
  'AI Tools': 'AI',
}

export default function ToolShowcase() {
  const [active, setActive] = useState('All')
  const tabs = ['All', ...categories]
  const filtered = active === 'All' ? tools : tools.filter(t => t.category === active)

  return (
    <section id="tools" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            30+ Tools. One App. Zero Subscriptions.
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Every tool a developer needs, organized and ready to use.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                active === tab
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                  : 'border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200'
              }`}
            >
              {tab}
              {tab !== 'All' && (
                <span className="ml-1.5 text-xs opacity-60">
                  {tools.filter(t => t.category === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(tool => (
            <div
              key={tool.name}
              className="tool-card group rounded-xl border border-neutral-800 bg-neutral-900/60 p-5"
            >
              <div className="flex items-start gap-4">
                {/* Icon placeholder */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-800 text-xs font-bold text-blue-400 transition-colors group-hover:bg-blue-600/20">
                  {categoryIcons[tool.category] ?? '>>'}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-white">{tool.name}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {tool.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-sm text-neutral-500">
          All tools work offline &middot; New tools added with free lifetime updates
        </p>
      </div>
    </section>
  )
}
