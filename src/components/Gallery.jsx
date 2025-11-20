import { useEffect, useState } from 'react'

export default function Gallery() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/gallery`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="gallery" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">The Vibe</h2>
        <p className="mt-2 text-white/70">A cozy, modern neighborhood bar — even cozier for the holidays.</p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((g) => (
            <figure key={g.title} className="relative group overflow-hidden rounded-lg">
              <img src={g.image_url} alt={g.title} className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-sm">{g.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
