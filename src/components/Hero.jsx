function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-100 px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-600" /> New Drop
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
              Curated Hot Wheels Collection
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Discover rare finds and classic mainlines. Clean browsing, fast search, and beautiful photos for every die-cast.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#collection" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-sky-600 text-white font-semibold shadow-sm hover:bg-sky-700">
                Explore Collection
              </a>
              <a href="#sell" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-800 font-semibold hover:bg-slate-50">
                Sell an Item
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="https://images.unsplash.com/photo-1648711729738-f411e8569d62?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIb3QlMjBXaGVlbHN8ZW58MHwwfHx8MTc2Mzc4MTE4MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hot Wheels" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
