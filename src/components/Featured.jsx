import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Nebula Prism',
    price: '$480',
    image: 'https://images.unsplash.com/photo-1615392030676-6c532fe0c302?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWJ1bGElMjBQcmlzbXxlbnwwfDB8fHwxNzYzNDgxOTY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'Limited 100',
  },
  {
    id: 2,
    name: 'Aurora Cut',
    price: '$620',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1400&auto=format&fit=crop',
    badge: 'Editor’s pick',
  },
  {
    id: 3,
    name: 'Halo Crystal',
    price: '$540',
    image: 'https://images.unsplash.com/photo-1575572540879-7bdbc1943a2a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYWxvJTIwQ3J5c3RhbHxlbnwwfDB8fHwxNzYzNDgxOTY1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'New',
  },
];

export default function Featured() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm tracking-widest text-sky-200/80">FEATURED</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Hand-picked selections</h2>
          </div>
          <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition">View all</button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(59,130,246,0.15)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <img src={p.image} alt={p.name} className="size-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(99,102,241,0.25),transparent_50%)]" />
                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/90">{p.badge}</div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-white/90">{p.name}</p>
                  <p className="text-sm text-slate-300/80">{p.price}</p>
                </div>
                <button className="rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600 px-3 py-2 text-xs font-medium text-white">Add to cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
