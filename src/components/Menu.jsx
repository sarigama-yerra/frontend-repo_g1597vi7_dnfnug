import { useEffect, useState } from 'react'

export default function Menu() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/menu`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const categories = ['Starters', 'Mains', 'Grills', 'Cocktails', 'Beer']

  return (
    <section id="menu" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Menu</h2>
        <p className="mt-2 text-white/70">Comfort classics, house favorites, and seasonal sips.</p>

        {loading ? (
          <p className="mt-8 text-white/70">Loading...</p>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-10">
            {categories.map((cat) => (
              <div key={cat}>
                <h3 className="text-xl font-semibold text-emerald-300">{cat}</h3>
                <div className="mt-4 space-y-4">
                  {items.filter(i => i.category === cat).map((i) => (
                    <div key={i.name} className="flex items-start justify-between gap-6">
                      <div>
                        <p className="font-medium">{i.name} {i.is_seasonal && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-red-500/20 text-red-300">Holiday</span>}</p>
                        {i.description && <p className="text-sm text-white/70">{i.description}</p>}
                      </div>
                      <p className="text-emerald-300 font-semibold whitespace-nowrap">${i.price.toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
