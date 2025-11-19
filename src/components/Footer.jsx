function Footer() {
  return (
    <footer className="mt-12 text-center text-emerald-200/70 text-sm">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
        <span>Built for plant people</span>
        <span className="size-1 rounded-full bg-emerald-400" />
        <span>Compare smarter</span>
      </div>
      <p className="mt-3 opacity-80">© {new Date().getFullYear()} Houseplant Finder</p>
    </footer>
  )
}

export default Footer
