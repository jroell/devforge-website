export default function PriceAnchor() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="gradient-border overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 text-center sm:p-12">
          {/* Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stop Paying Monthly for Developer Tools
          </h2>

          <p className="mt-4 text-lg text-neutral-400">
            Most SaaS dev tools charge $10&ndash;$20/month. That&apos;s $120&ndash;$240/year &mdash; every year.
          </p>

          {/* Price comparison */}
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-12">
            {/* Others */}
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-neutral-500">Typical SaaS</p>
              <p className="mt-2 text-4xl font-bold text-neutral-500 line-through decoration-red-500/60 decoration-2">
                $10&ndash;$20
              </p>
              <p className="mt-1 text-sm text-neutral-500">/month, forever</p>
            </div>

            {/* Divider */}
            <div className="hidden h-20 w-px bg-neutral-800 sm:block" />
            <div className="h-px w-20 bg-neutral-800 sm:hidden" />

            {/* DevForge */}
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-blue-400">DevForge AI</p>
              <p className="mt-2 text-5xl font-extrabold text-white">
                $9<span className="text-3xl">.99</span>
              </p>
              <p className="mt-1 text-sm font-medium text-green-400">one-time, forever yours</p>
            </div>
          </div>

          {/* Value props */}
          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 text-left">
            {[
              '30+ professional developer tools',
              'AI-powered code generation & analysis',
              'Lifetime updates at no extra cost',
              'Works offline — your data stays local',
              'Mac & Windows support',
            ].map(item => (
              <div key={item} className="flex items-center gap-3">
                <svg className="h-5 w-5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-300">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="https://github.com/jroell/devforge-ai/releases/latest"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Free Trial
            </a>
            <p className="mt-4 text-sm text-neutral-500">
              Try free for 7 days &middot; No credit card needed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
