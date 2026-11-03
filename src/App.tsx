import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Courses from '@/components/Courses';
import Facilities from '@/components/Facilities';
import Team from '@/components/Team';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col">
        {/* Navbar hamesha har page par nazar aayega */}
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            {/* Home Page (Sirf Hero yahan hoga) */}
            <Route path="/" element={<Hero />} />
            
            {/* Baqi Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer hamesha har page ke neeche nazar aayega */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;