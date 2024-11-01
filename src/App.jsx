import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Technology from './components/Technology';
import Project from './components/Project';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden text-neutral-300">
       
        <div className="fixed inset-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Technology />
          <Project />
          <Contact />
          
        </div>
      </div>
    </>
  );
}

export default App;
