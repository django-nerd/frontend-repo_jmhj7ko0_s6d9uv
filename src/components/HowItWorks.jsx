function HowItWorks() {
  return (
    <section id="how-it-works" className="relative mt-10">
      {/* subtle divider */}
      <div className="absolute inset-x-0 -top-6 h-px bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent" />

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md">
        <div className="max-w-2xl">
          <h3 className="text-white text-2xl font-semibold">How it works</h3>
          <p className="text-emerald-100/80 mt-2">Search and filter, pick a few favorites, then compare side-by-side to choose the right plant for your space.</p>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 overflow-hidden">
            <div className="absolute -right-6 -top-6 size-24 rounded-full bg-[radial-gradient(circle_at_50%_50%,#34d39933,transparent_60%)] blur-lg" />
            <div className="text-emerald-50 font-semibold">1. Filter</div>
            <p className="text-emerald-100/80 text-sm mt-1">Dial in light, water, care difficulty and pet-friendliness.</p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 overflow-hidden">
            <div className="absolute -left-6 -bottom-6 size-20 rounded-full bg-[radial-gradient(circle_at_50%_50%,#10b98133,transparent_60%)] blur-lg" />
            <div className="text-emerald-50 font-semibold">2. Shortlist</div>
            <p className="text-emerald-100/80 text-sm mt-1">Tap Compare on a couple that catch your eye.</p>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-4 overflow-hidden">
            <div className="absolute right-8 bottom-2 size-16 rounded-full bg-[radial-gradient(circle_at_50%_50%,#065f4633,transparent_60%)] blur-lg" />
            <div className="text-emerald-50 font-semibold">3. Decide</div>
            <p className="text-emerald-100/80 text-sm mt-1">Open the drawer to compare essentials and pick a winner.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
