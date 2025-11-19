function Badge({ children }) {
  return <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-xs text-white/90">{children}</span>
}

function PlantCard({ plant, selected, onToggleCompare }) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-emerald-700/40 bg-gradient-to-b from-emerald-900/40 to-emerald-900/10 backdrop-blur-sm hover:border-emerald-400/50 transition-colors">
      {plant.image_url && (
        <img src={plant.image_url} alt={plant.name} className="h-44 w-full object-cover" />
      )}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-emerald-50 font-semibold text-lg leading-tight">{plant.name}</h3>
            {plant.scientific_name && (
              <p className="text-emerald-200/70 text-xs italic">{plant.scientific_name}</p>
            )}
          </div>
          <button
            onClick={() => onToggleCompare(plant)}
            className={`text-xs px-2 py-1 rounded-md border ${selected ? 'bg-emerald-500 text-emerald-900 border-emerald-400' : 'bg-white/5 text-emerald-50 border-white/15'} hover:brightness-110`}
          >
            {selected ? 'Selected' : 'Compare'}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>Light: {plant.light}</Badge>
          <Badge>Water: {plant.water}</Badge>
          <Badge>Care: {plant.care_level}</Badge>
          {plant.pet_friendly && <Badge>Pet-friendly</Badge>}
          {plant.size && <Badge>Size: {plant.size}</Badge>}
        </div>
        {plant.description && (
          <p className="text-sm text-emerald-100/80 line-clamp-3">{plant.description}</p>
        )}
      </div>
    </div>
  )}

export default PlantCard
