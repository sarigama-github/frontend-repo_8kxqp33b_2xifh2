import { useEffect, useMemo, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function ListingCard({ item }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square overflow-hidden bg-slate-100">
        <img src={item.images?.[0] || 'https://images.unsplash.com/photo-1608889175153-5483ffbb6092?q=80&w=800&auto=format&fit=crop'} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-slate-900 line-clamp-1">{item.name}</h3>
          <span className="text-sky-700 font-bold">${item.price?.toFixed?.(2) ?? item.price}</span>
        </div>
        <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.series || '—'} • {item.year || '—'}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className={`text-xs px-2 py-1 rounded-full ${item.stock > 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>{item.stock > 0 ? 'In stock' : 'Sold out'}</span>
          <button className="text-sm font-semibold text-sky-700 hover:text-sky-800">View</button>
        </div>
      </div>
    </div>
  )
}

function Filters({ q, setQ, series, setSeries, year, setYear }) {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="relative">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search cars, series, tags..." className="w-72 max-w-[90vw] rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      </div>
      <input value={series} onChange={e=>setSeries(e.target.value)} placeholder="Series" className="w-40 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
      <input value={year} onChange={e=>setYear(e.target.value)} placeholder="Year" className="w-28 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" />
    </div>
  )
}

function ListingGrid() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [q, setQ] = useState('')
  const [series, setSeries] = useState('')
  const [year, setYear] = useState('')

  const params = useMemo(() => {
    const p = new URLSearchParams()
    if (q) p.set('q', q)
    if (series) p.set('series', series)
    if (year) p.set('year', year)
    return p.toString()
  }, [q, series, year])

  useEffect(() => {
    let ignore = false
    async function fetchItems() {
      setLoading(true)
      try {
        const res = await fetch(`${apiBase}/api/hotwheels${params ? `?${params}`: ''}`)
        const data = await res.json()
        if (!ignore) setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    fetchItems()
    return () => { ignore = true }
  }, [params])

  return (
    <section id="collection" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Featured Listings</h2>
            <p className="text-slate-600">Browse the latest additions to the collection</p>
          </div>
          <Filters q={q} setQ={setQ} series={series} setSeries={setSeries} year={year} setYear={setYear} />
        </div>

        {loading ? (
          <div className="text-center py-20 text-slate-600">Loading collection...</div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 text-slate-600">No items found. Try adjusting your filters.</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => <ListingCard key={item.id} item={item} />)}
          </div>
        )}
      </div>
    </section>
  )
}

export default ListingGrid
