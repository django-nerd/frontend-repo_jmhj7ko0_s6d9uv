import { X } from 'lucide-react'

function Row({ label, values }) {
  return (
    <div className="grid grid-cols-4 gap-3 items-center py-2 border-b border-white/10 last:border-0">
      <div className="text-emerald-200/80 text-sm">{label}</div>
      {values.map((v, i) => (
        <div key={i} className="text-emerald-50 text-sm bg-white/5 px-3 py-1.5 rounded-md border border-white/10">
          {v ?? '—'}
        </div>
      ))}
    </div>
  )
}

function CompareDrawer({ open, plants, onClose, onRemove }) {
  if (!open) return null
  const names = plants.map(p => p.name)

  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="absolute bottom-0 left-0 right-0 bg-emerald-900/80 backdrop-blur-xl border-t border-emerald-700/40 rounded-t-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-emerald-50 font-semibold">Comparing: {names.join(' vs ')}</h3>
          <button onClick={onClose} className="h-8 w-8 rounded-lg bg-white/10 border border-white/20 text-emerald-50 flex items-center justify-center">
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <div className="min-w-[700px]">
            <Row label="Light" values={plants.map(p=>p.light)} />
            <Row label="Water" values={plants.map(p=>p.water)} />
            <Row label="Care" values={plants.map(p=>p.care_level)} />
            <Row label="Pet-friendly" values={plants.map(p=> p.pet_friendly ? 'Yes' : 'No')} />
            <Row label="Size" values={plants.map(p=>p.size)} />
            <Row label="Placement" values={plants.map(p=>p.placement)} />
            <Row label="Humidity" values={plants.map(p=>p.humidity)} />
            <Row label="Growth" values={plants.map(p=>p.growth_rate)} />
            <Row label="Price" values={plants.map(p=> p.price ? `$${p.price}` : null)} />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          {plants.map((p) => (
            <button key={p.name} onClick={()=>onRemove(p)} className="text-xs px-2 py-1 rounded-md bg-red-500/20 text-red-100 border border-red-400/30">Remove {p.name}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CompareDrawer
