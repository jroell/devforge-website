const features = [
  {
    title: 'AI-Powered',
    description:
      'Built-in AI code generation, explanation, and chat. Use GPT, Claude, or Gemini — bring your own API keys for full control.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: 'Privacy-First',
    description:
      'All tools run 100% locally on your machine. Your code and data never leave your computer. No telemetry, no tracking, no cloud dependency.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Lightning Fast',
    description:
      'Native desktop performance with instant tool switching. No browser tabs, no loading spinners, no internet required. Just open and go.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built Different
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Not another Electron wrapper around a web app. DevForge AI is purpose-built for developers.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map(f => (
            <div
              key={f.title}
              className="gradient-border group rounded-2xl border border-neutral-800 bg-neutral-900/60 p-8 transition-colors hover:border-neutral-700"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-blue-400 transition-colors group-hover:bg-blue-600/20">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-neutral-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
