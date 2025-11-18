import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      {/* Ambient gradient aurora */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_60%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-10 md:grid-cols-2">
        {/* Copy */}
        <div className="relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-sky-200/80">
              <span className="size-1.5 rounded-full bg-sky-400" /> New Collection
            </div>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white md:text-6xl">
              Crystal-crafted luxury for the new era
            </h1>
            <p className="mt-5 max-w-md text-lg text-slate-300/90">
              Discover reflective, light-bending design objects engineered with precision. Interactive, futuristic, and made to mesmerize.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.button whileTap={{ scale: 0.97 }} className="rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                Shop Featured
              </motion.button>
              <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/90 hover:bg-white/10 transition">
                Explore Collections
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-xs text-slate-300/70">
              <div>
                <p className="font-semibold text-white/90">Diamond-grade</p>
                <p>Multi-facet polish</p>
              </div>
              <div>
                <p className="font-semibold text-white/90">Interactive</p>
                <p>3D Spline scenes</p>
              </div>
              <div>
                <p className="font-semibold text-white/90">Limited</p>
                <p>Numbered series</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3D Scene */}
        <div className="relative aspect-square w-full">
          <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_40px_rgba(99,102,241,0.25)]">
            <div className="relative size-full overflow-hidden rounded-[1.5rem]">
              <Spline scene="https://prod.spline.design/HldEaEeFcKnMlQB3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* gloss overlay */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.14),transparent_18%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
