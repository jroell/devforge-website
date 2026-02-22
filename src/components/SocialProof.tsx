const stats = [
  {
    value: '30+',
    label: 'Developer Tools',
    icon: (
      <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.63a.75.75 0 010-1.22l5.1-3.63a.75.75 0 011.16.63v7.24a.75.75 0 01-1.16.64zM17.42 15.17l-5.1-3.63a.75.75 0 010-1.22l5.1-3.63a.75.75 0 011.16.63v7.24a.75.75 0 01-1.16.64z" />
      </svg>
    ),
  },
  {
    value: '$9.99',
    label: 'One-Time Price',
    icon: (
      <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    value: 'Lifetime',
    label: 'Free Updates',
    icon: (
      <svg className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    value: '100%',
    label: 'Offline Capable',
    icon: (
      <svg className="h-5 w-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
]

export default function SocialProof() {
  return (
    <section className="border-y border-neutral-800/60 bg-neutral-900/30 py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="flex items-center justify-center gap-3">
              {s.icon}
              <div>
                <p className="text-lg font-bold text-white">{s.value}</p>
                <p className="text-xs text-neutral-500">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
