export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Supercharge Your Workflow?
        </h2>
        <p className="mt-5 text-lg text-neutral-400">
          Join developers who replaced a dozen browser tabs with one fast, beautiful desktop app.
          Try DevForge AI free for 7 days.
        </p>

        <div className="mt-10">
          <a
            href="https://github.com/jroell/devforge-ai/releases/latest"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 hover:scale-[1.02]"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download DevForge AI Free
          </a>
        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Free 7-day trial &middot; Then $9.99 one-time &middot; No subscription ever
        </p>
      </div>
    </section>
  )
}
