import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-neutral-950 px-4 text-white">
      <div className="max-w-md text-center">
        <div className="mb-6 text-6xl">&#127881;</div>
        <h1 className="mb-4 text-3xl font-bold">You&apos;re All Set!</h1>
        <p className="mb-2 text-lg text-neutral-300">
          Your DevForge AI lifetime license is now active.
        </p>
        <p className="mb-8 text-neutral-400">
          Open DevForge AI on your computer &mdash; it will automatically detect your
          license within a few seconds. No restart needed.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
