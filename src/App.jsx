import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300">

      {/* Fixed gradient background */}
      <div className="fixed inset-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <Navbar />

      {/* pt-20 offsets the fixed navbar height */}
      <div className="container mx-auto px-6 pt-20">
        <Hero />
        <Technology />
        <Services />
        <Experience />
        <Education />
        <Project />
        <Contact />
      </div>

    </div>
  );
}

export default App;
