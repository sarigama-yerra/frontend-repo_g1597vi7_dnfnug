import { useEffect, useState } from 'react'

export default function Events() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/events?holiday_only=true`)
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        console.error(e)
      }
    }
    load()
  }, [])

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-zinc-950 to-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Holiday Specials & Events</h2>
        <p className="mt-2 text-white/70">Gather your crew for festive nights at The Jefferson.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5 backdrop-blur">
              <img src={e.image_url || 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop'} alt={e.title} className="h-40 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm text-emerald-300">{new Date(e.start_time).toLocaleString()}</p>
                <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
                {e.description && <p className="mt-1 text-white/70">{e.description}</p>}
                <p className="mt-2 text-white/60">{e.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
