import { ShoppingBag, Search, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="relative z-20">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_40px_rgba(59,130,246,0.1)]">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="size-8 rounded-xl bg-gradient-to-br from-sky-300 via-blue-400 to-indigo-600 shadow-[0_0_40px_5px_rgba(99,102,241,0.5)]" />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,0.6)_0deg,rgba(255,255,255,0)_60deg)]" />
            </div>
            <div className="leading-tight">
              <p className="text-sm tracking-widest text-sky-200/80">CRYSTAL</p>
              <p className="-mt-0.5 text-xl font-semibold text-white">AURORA</p>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-6 text-slate-200/90">
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
              <Search className="size-4" />
              Search
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition">
              <Menu className="size-4" />
              Categories
            </button>
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-sky-400 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)]"
            >
              <ShoppingBag className="size-4" />
              Cart
            </motion.button>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-3">
            <Search className="size-5 text-white/80" />
            <ShoppingBag className="size-5 text-white/80" />
            <Menu className="size-6 text-white/80" />
          </div>
        </div>
      </div>
    </div>
  );
}
