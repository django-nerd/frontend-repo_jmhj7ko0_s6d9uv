import { Leaf, Sprout } from 'lucide-react'

function Header() {
  return (
    <header className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none" />
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.25)]">
          <Leaf className="h-7 w-7" />
        </div>
        <div>
          <h1 className="text-white text-3xl font-semibold leading-tight tracking-tight">
            Houseplant Finder
          </h1>
          <p className="text-emerald-200/80 text-sm flex items-center gap-1">
            <Sprout className="h-4 w-4" /> Discover, filter and compare plants for your space
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header
