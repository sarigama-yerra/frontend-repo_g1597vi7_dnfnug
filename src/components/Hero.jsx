import { motion } from 'framer-motion'

export default function Hero({ onToggleSnow, snowEnabled }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542500186-2eb755fa87f2?q=80&w=2000&auto=format&fit=crop"
        alt="Warm festive bar"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Twinkling lights */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-red-400/60 via-amber-300/60 to-emerald-400/60" />
        <div className="absolute inset-x-0 top-1 flex justify-center gap-8 animate-pulse">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="w-1.5 h-1.5 bg-amber-200 rounded-full shadow-[0_0_10px_2px_rgba(250,204,21,0.7)]" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow"
        >
          Where Great Food Meets Great Company
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg sm:text-2xl text-white/90 max-w-2xl mx-auto"
        >
          A neighborhood gem in Cleveland's Jefferson community — now dressed for the holidays.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#menu" className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-500/30 transition">See Menu</a>
          <a href="#contact" className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition">Visit Us</a>
          <button onClick={onToggleSnow} className="px-6 py-3 rounded-full bg-red-500/80 hover:bg-red-600 text-white font-semibold shadow-lg transition">
            {snowEnabled ? 'Turn Off Snow' : 'Let it Snow'}
          </button>
        </motion.div>
      </div>

      {/* Snow overlay (subtle) */}
      {snowEnabled && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: 80 }).map((_, i) => (
            <span
              key={i}
              className="absolute top-[-10%] w-1 h-1 bg-white/90 rounded-full opacity-70 animate-[snowfall_10s_linear_infinite]
                [animation-delay:var(--d)] [animation-duration:var(--t)]"
              style={{ left: `${(i * 7) % 100}%`, ['--d']: `${i * 0.12}s`, ['--t']: `${8 + (i % 6)}s` }}
            />
          ))}
        </div>
      )}

      <style>{`
        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0); opacity: .9; }
          100% { transform: translateY(110vh) translateX(10px); opacity: .2; }
        }
      `}</style>
    </section>
  )
}
