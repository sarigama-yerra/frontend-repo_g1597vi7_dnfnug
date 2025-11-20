import { useState } from 'react'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const [state, setState] = useState({ name: '', email: '', message: '', phone: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state) })
      const data = await res.json()
      setStatus(data.message || 'Sent!')
      setState({ name: '', email: '', message: '', phone: '' })
    } catch (e) {
      setStatus('Something went wrong. Please call us!')
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Visit Us</h2>
          <p className="mt-2 text-white/70">Stop by for dinner, drinks, or your next holiday gathering.</p>
          <div className="mt-6 space-y-3 text-white/80">
            <p className="flex items-center gap-2"><MapPin size={18}/> 17105 Cooley Ave, Cleveland, OH</p>
            <p className="flex items-center gap-2"><Phone size={18}/> (216) 555-1234</p>
            <p className="flex items-center gap-2"><Mail size={18}/> hello@jeffersonbar.com</p>
            <p className="flex items-center gap-2"><Clock size={18}/> Mon–Thu 11a–11p • Fri–Sat 11a–1a • Sun 11a–10p</p>
          </div>

          <div className="mt-6 rounded-lg overflow-hidden ring-1 ring-white/10">
            <iframe title="map" src="https://www.google.com/maps?q=17105%20Cooley%20Ave%20Cleveland%20OH&output=embed" className="w-full h-64" allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>

        <form onSubmit={submit} className="bg-white/5 backdrop-blur rounded-xl p-6 ring-1 ring-white/10">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <input required value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} placeholder="Name" className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40" />
            <input required type="email" value={state.email} onChange={(e)=>setState({...state,email:e.target.value})} placeholder="Email" className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40" />
            <input value={state.phone} onChange={(e)=>setState({...state,phone:e.target.value})} placeholder="Phone (optional)" className="sm:col-span-2 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40" />
            <textarea required rows={4} value={state.message} onChange={(e)=>setState({...state,message:e.target.value})} placeholder="Message" className="sm:col-span-2 w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder-white/40" />
          </div>
          <button className="mt-4 px-5 py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">Send</button>
          {status && <p className="mt-3 text-sm text-white/70">{status}</p>}
        </form>
      </div>
    </section>
  )
}
