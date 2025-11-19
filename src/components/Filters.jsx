import { useEffect, useState } from 'react'
import { Search, Sun, Droplets, PawPrint, Gauge } from 'lucide-react'

const lightOptions = [
  { label: 'Any light', value: '' },
  { label: 'Low', value: 'low' },
  { label: 'Medium', value: 'medium' },
  { label: 'Bright', value: 'bright' },
]

const waterOptions = [
  { label: 'Any water', value: '' },
  { label: 'Low', value: 'low' },
  { label: 'Moderate', value: 'moderate' },
  { label: 'High', value: 'high' },
]

const careOptions = [
  { label: 'Any difficulty', value: '' },
  { label: 'Easy', value: 'easy' },
  { label: 'Moderate', value: 'moderate' },
  { label: 'Advanced', value: 'advanced' },
]

function Filters({ onChange, initial }) {
  const [q, setQ] = useState(initial?.q || '')
  const [light, setLight] = useState(initial?.light || '')
  const [water, setWater] = useState(initial?.water || '')
  const [care, setCare] = useState(initial?.care_level || '')
  const [pet, setPet] = useState(initial?.pet_friendly ?? '')

  useEffect(() => {
    const payload = { q, light, water, care_level: care }
    if (pet !== '') payload.pet_friendly = pet === true || pet === 'true'
    onChange(payload)
  }, [q, light, water, care, pet])

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        <div className="col-span-2 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-300/70" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or feature"
            className="w-full pl-10 pr-4 py-2.5 bg-emerald-900/30 border border-emerald-700/40 rounded-xl text-emerald-50 placeholder:text-emerald-200/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
        </div>

        <select value={light} onChange={e=>setLight(e.target.value)} className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl text-emerald-50 px-3 py-2.5 focus:outline-none">
          {lightOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select value={water} onChange={e=>setWater(e.target.value)} className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl text-emerald-50 px-3 py-2.5 focus:outline-none">
          {waterOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <select value={care} onChange={e=>setCare(e.target.value)} className="bg-emerald-900/30 border border-emerald-700/40 rounded-xl text-emerald-50 px-3 py-2.5 focus:outline-none">
          {careOptions.map(o=> <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>

        <div className="flex items-center gap-2 md:col-span-1">
          <label className="flex items-center gap-2 text-emerald-100/80 text-sm">
            <input type="checkbox" checked={pet===true}
              onChange={(e)=> setPet(e.target.checked)}
              className="w-4 h-4 rounded border-emerald-500/40 bg-emerald-900/30" />
            <PawPrint className="h-4 w-4" /> Pet-friendly
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters
