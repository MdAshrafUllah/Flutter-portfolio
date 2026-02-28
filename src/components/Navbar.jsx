import React, { useState, useEffect } from 'react';
import { Code2, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ];

  return (
    <div className="fixed w-full top-0 z-[100] transition-all duration-500 px-0 md:px-6 py-0 md:py-4">
      <nav 
        className={`
          mx-auto transition-all duration-500 ease-in-out flex items-center justify-between
          ${isScrolled 
            ? 'max-w-[800px] rounded-full px-8 py-3 glass-card shadow-2xl border border-white/20' 
            : 'max-w-full rounded-none md:rounded-[30px] px-12 py-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800'
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-xl tracking-tighter shrink-0">
          <Code2 className="text-primary" size={28} />
          <span className="hidden sm:inline">FLUTTER<span className="text-primary">DEV</span></span>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <a 
            href="#contact" 
            className={`hidden md:block px-5 py-2 bg-primary text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 p-6 glass-card rounded-3xl shadow-2xl flex flex-col items-center gap-6 animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
