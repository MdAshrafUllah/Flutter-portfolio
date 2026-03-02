import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from "./sections/Experience";
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import TechStack from "./sections/TechStack";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Services />
      <TechStack />
      <Contact />
      <footer className="py-12 text-center text-slate-500 border-t dark:border-slate-800">
        © 2026 Md Ashraf Ullah | Professional Flutter Developer
      </footer>
    </div>
  );
}
