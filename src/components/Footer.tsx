export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 sm:flex-row sm:justify-between">
        {/* Logo / Copyright */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
            D
          </div>
          <span className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} DevForge AI. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-neutral-500 transition-colors hover:text-neutral-300">
            Features
          </a>
          <a href="#tools" className="text-sm text-neutral-500 transition-colors hover:text-neutral-300">
            Tools
          </a>
          <a href="#pricing" className="text-sm text-neutral-500 transition-colors hover:text-neutral-300">
            Pricing
          </a>
          <a
            href="https://github.com/jroell/devforge-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 transition-colors hover:text-neutral-300"
            aria-label="GitHub"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
