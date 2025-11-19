function Hero({ onExplore }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-emerald-700/40 bg-gradient-to-b from-emerald-900/60 to-emerald-950/20 p-8 md:p-12">
      {/* Decorative pseudo elements we can replace later */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute -top-24 -left-20 size-[420px] rounded-full bg-[conic-gradient(at_70%_30%,#10b98133,transparent_45%)] blur-2xl animate-blob" />
        <div className="absolute -top-16 right-0 size-[360px] rounded-full bg-[radial-gradient(circle_at_40%_40%,#34d39933,transparent_60%)] blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-160px] left-1/2 -translate-x-1/2 size-[520px] rounded-full bg-[radial-gradient(circle_at_50%_50%,#065f4633,transparent_60%)] blur-2xl animate-blob animation-delay-4000" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.07] [background:linear-gradient(to_right,#ffffff_6%,transparent_6%)_0_0/40px_40px,linear-gradient(to_bottom,#ffffff_6%,transparent_6%)_0_0/40px_40px]" />

      <div className="relative grid gap-8 md:grid-cols-2 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-emerald-200/90">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            Smart plant matching
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-white">
            Find plants that thrive in your light, water, and vibe
          </h2>
          <p className="text-emerald-100/80 max-w-prose">
            Explore a growing catalog of curated houseplants. Filter by light, watering schedule, care level and more. Add a few to compare and we’ll reveal the perfect fit for your space.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={onExplore} className="rounded-xl bg-emerald-400 text-emerald-950 font-semibold px-4 py-2 shadow-lg hover:brightness-110">
              Explore plants
            </button>
            <a href="#how-it-works" className="rounded-xl border border-white/15 bg-white/5 text-emerald-50 px-4 py-2 hover:bg-white/10">
              How it works
            </a>
          </div>

          {/* Key stats */}
          <div className="pt-2 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-emerald-50 font-semibold">50+</div>
              <div className="text-emerald-200/70 text-xs">Species</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-emerald-50 font-semibold">10+ filters</div>
              <div className="text-emerald-200/70 text-xs">Dial it in</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-emerald-50 font-semibold">1-click</div>
              <div className="text-emerald-200/70 text-xs">Compare</div>
            </div>
          </div>
        </div>

        {/* Feature collage (placeholder shapes/images) */}
        <div className="relative h-[320px] md:h-[380px]">
          {/* floating card 1 */}
          <div className="absolute left-2 top-6 w-48 md:w-56 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-3 rotate-[-4deg] shadow-2xl animate-float">
            <div className="h-28 w-full rounded-xl bg-gradient-to-br from-emerald-300/20 to-emerald-500/10" />
            <div className="mt-3 h-3 w-3/4 rounded bg-white/20" />
            <div className="mt-2 flex gap-2">
              <span className="h-5 w-12 rounded-full bg-white/15" />
              <span className="h-5 w-12 rounded-full bg-white/15" />
            </div>
          </div>

          {/* floating card 2 */}
          <div className="absolute right-2 top-20 w-44 md:w-52 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md p-3 rotate-[3deg] shadow-2xl animate-float animation-delay-2000">
            <div className="h-24 w-full rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-200/10" />
            <div className="mt-3 h-3 w-2/3 rounded bg-white/20" />
            <div className="mt-2 flex gap-2">
              <span className="h-5 w-10 rounded-full bg-white/15" />
              <span className="h-5 w-10 rounded-full bg-white/15" />
            </div>
          </div>

          {/* floating disc accents */}
          <div className="absolute left-1/2 top-10 -translate-x-1/2 size-24 rounded-full bg-[radial-gradient(circle_at_30%_30%,#34d39966,transparent_60%)] blur-md animate-sway" />
          <div className="absolute right-10 bottom-6 size-12 rounded-full bg-[radial-gradient(circle_at_50%_50%,#10b98166,transparent_60%)] blur-[2px] animate-sway animation-delay-4000" />
        </div>
      </div>
    </section>
  )
}

export default Hero
