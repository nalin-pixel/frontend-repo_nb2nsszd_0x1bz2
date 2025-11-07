import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Donate from './components/Donate';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold text-blue-700">Bright Futures</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#programs" className="hover:text-gray-900">Programs</a>
            <a href="#donate" className="hover:text-gray-900">Donate</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <div id="programs">
          <Programs />
        </div>
        <About />
        <Donate />
      </main>

      <Footer />
    </div>
  );
}

export default App;
