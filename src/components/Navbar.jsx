import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="inline-block w-8 h-8 rounded bg-sky-600"></span>
            <span className="font-extrabold text-slate-900 tracking-tight">HotWheels Hub</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#collection" className="hover:text-slate-900">Collection</a>
            <a href="/test" className="hover:text-slate-900">System Status</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-slate-700">
              <a href="#collection" className="px-3 py-2 rounded hover:bg-slate-100">Collection</a>
              <a href="/test" className="px-3 py-2 rounded hover:bg-slate-100">System Status</a>
              <a href="#contact" className="px-3 py-2 rounded hover:bg-slate-100">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
