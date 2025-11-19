import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Filters from './components/Filters'
import PlantCard from './components/PlantCard'
import CompareDrawer from './components/CompareDrawer'

function App() {
  const [filters, setFilters] = useState({})
  const [plants, setPlants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState([])
  const [open, setOpen] = useState(false)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    const controller = new AbortController()
    async function load() {
      try {
        setLoading(true)
        setError('')
        const params = new URLSearchParams()
        Object.entries(filters).forEach(([k, v]) => {
          if (v !== '' && v !== undefined && v !== null) params.append(k, v)
        })
        const res = await fetch(`${backend}/plants?${params.toString()}`, { signal: controller.signal })
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`)
        const data = await res.json()
        setPlants(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
    return () => controller.abort()
  }, [backend, JSON.stringify(filters)])

  const toggleCompare = (plant) => {
    const exists = selected.find(p => p.name === plant.name)
    const next = exists ? selected.filter(p => p.name !== plant.name) : [...selected, plant]
    setSelected(next)
    if (next.length >= 2) setOpen(true)
  }
  const removeFromCompare = (plant) => setSelected(prev => prev.filter(p => p.name !== plant.name))

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(16,185,129,0.25),transparent_35%),radial-gradient(circle_at_80%_0,rgba(52,211,153,0.18),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto px-6 py-10 space-y-8">
        <Header />

        <Filters onChange={setFilters} />

        {loading && (
          <div className="text-center text-emerald-100/80">Loading plants...</div>
        )}
        {error && (
          <div className="text-center text-red-200">{error}</div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plants.map((p) => (
              <PlantCard key={p.name} plant={p} selected={!!selected.find(s=>s.name===p.name)} onToggleCompare={toggleCompare} />
            ))}
          </div>
        )}
      </div>

      <CompareDrawer open={open} plants={selected} onClose={()=>setOpen(false)} onRemove={removeFromCompare} />

      {selected.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button onClick={()=>setOpen(true)} className="px-4 py-2 rounded-full bg-emerald-500 text-emerald-950 font-semibold shadow-lg hover:brightness-110">
            Compare {selected.length} selected
          </button>
        </div>
      )}
    </div>
  )
}

export default App
