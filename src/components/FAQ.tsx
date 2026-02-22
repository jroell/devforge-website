const faqs = [
  {
    q: 'Is this really a one-time payment?',
    a: 'Yes. You pay $9.99 once and own DevForge AI forever. No subscriptions, no hidden fees. Lifetime updates are included at no extra cost.',
  },
  {
    q: 'What happens after the 7-day free trial?',
    a: 'After 7 days, the app will prompt you to purchase a license to continue using it. No credit card is collected during the trial, so you will never be charged automatically.',
  },
  {
    q: 'Does DevForge AI require an internet connection?',
    a: 'All 30+ core tools work completely offline. The AI-powered features (code generation, chat, explainer) require an internet connection since they call AI provider APIs. Everything else is local.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'DevForge AI runs on macOS (Intel & Apple Silicon) and Windows (x64). A Linux version is on the roadmap.',
  },
  {
    q: 'How do the AI features work? Do I need my own API keys?',
    a: 'Yes, you bring your own API keys for OpenAI, Anthropic (Claude), or Google (Gemini). This means you have full control over costs and models. Your keys are stored locally and never sent to our servers.',
  },
  {
    q: 'Can I use DevForge AI on multiple computers?',
    a: 'Your license is tied to one user, not one machine. You can install and activate DevForge AI on up to 3 personal computers that you own.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              className="group rounded-xl border border-neutral-800 bg-neutral-900/60 transition-colors open:bg-neutral-900"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-lg font-medium text-white">
                {q}
                <svg
                  className="faq-chevron h-5 w-5 shrink-0 text-neutral-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-5 leading-relaxed text-neutral-400">
                {a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
