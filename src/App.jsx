import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background texture */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(50%_40%_at_80%_100%,rgba(99,102,241,0.12),transparent_60%)]" />

      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;