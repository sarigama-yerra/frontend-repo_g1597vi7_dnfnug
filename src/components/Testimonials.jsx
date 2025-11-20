import { useEffect, useState } from 'react'

export default function Testimonials() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/testimonials`)
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

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What People Are Saying</h2>
        <p className="mt-2 text-white/70">Real words from our neighborhood and guests.</p>

        {loading ? (
          <p className="mt-8 text-white/70">Loading...</p>
        ) : (
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {items.map((t, idx) => (
              <blockquote key={idx} className="relative rounded-xl p-6 bg-white/5 ring-1 ring-white/10 backdrop-blur">
                <p className="text-lg leading-relaxed">“{t.quote}”</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{t.author}</p>
                    {t.source && <p className="text-xs text-white/60">via {t.source}</p>}
                  </div>
                  {typeof t.rating === 'number' && (
                    <p className="text-emerald-300 text-sm">{'★'.repeat(Math.round(t.rating))}</p>
                  )}
                </div>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
