export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/10 bg-gradient-to-b from-transparent to-white/5">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-sm tracking-widest text-sky-200/80">CRYSTAL AURORA</p>
            <p className="mt-2 max-w-sm text-slate-300/80">
              Reflective design objects for a brighter tomorrow. Limited series, crafted with precision.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold text-white/90">Shop</p>
              <ul className="space-y-2 text-sm text-slate-300/80">
                <li>New Arrivals</li>
                <li>Best Sellers</li>
                <li>Collections</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <p className="mb-3 text-sm font-semibold text-white/90">Company</p>
              <ul className="space-y-2 text-sm text-slate-300/80">
                <li>About</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex items-end md:justify-end">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Crystal Aurora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
