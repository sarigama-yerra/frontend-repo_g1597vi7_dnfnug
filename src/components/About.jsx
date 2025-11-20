import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="text-3xl sm:text-4xl font-bold">Our Story</motion.h2>
          <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.5}} className="mt-4 text-white/80 leading-relaxed">
            What started as The Cooley Lounge is now The Jefferson Bar & Grill — revitalized by new owners with a community-first vision. We combine grilled eats, strong drinks, and even stronger vibes.
          </motion.p>
          <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.2,duration:.5}} className="mt-3 text-white/80 leading-relaxed">
            A warm, neighborhood spot on Cleveland's West Side where regulars and newcomers feel at home — a little upscale from the renovation, never stuffy.
          </motion.p>
        </div>
        <motion.div initial={{opacity:0,scale:.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:.6}} className="relative aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-white/10 shadow-xl">
          <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmlvcnxlbnwwfDB8fHwxNzYzNjM3MzAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500/10 via-transparent to-emerald-500/10" />
        </motion.div>
      </div>
    </section>
  )
}
