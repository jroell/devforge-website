export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background glow */}
      <div className="hero-glow pointer-events-none absolute inset-0" />

      {/* Decorative code brackets */}
      <div className="pointer-events-none absolute top-24 left-8 text-[120px] font-extralight leading-none text-blue-500/[0.06] select-none sm:left-16 sm:text-[200px]">
        {'{'}
      </div>
      <div className="pointer-events-none absolute right-8 bottom-8 text-[120px] font-extralight leading-none text-blue-500/[0.06] select-none sm:right-16 sm:text-[200px]">
        {'}'}
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Pill badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-4 py-1.5 text-sm text-neutral-300">
          <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-green-500" />
          Now available for Mac &amp; Windows
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl leading-[1.1] font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Your AI-Supercharged{' '}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Developer Toolbox
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
          30+ essential developer tools in one beautiful desktop app.
          Formatters, encoders, generators, AI tools &mdash; everything you need,
          offline and lightning fast. <strong className="text-white">$9.99 once, yours forever.</strong>
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/jroell/devforge-ai/releases/latest"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Free Trial
          </a>
          <a
            href="#tools"
            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900/50 px-8 py-4 text-lg font-semibold text-neutral-200 transition-all hover:border-neutral-600 hover:bg-neutral-800/80"
          >
            See All Tools
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-sm text-neutral-500">
          No credit card required &middot; 7-day free trial &middot; Mac &amp; Windows
        </p>
      </div>
    </section>
  )
}
