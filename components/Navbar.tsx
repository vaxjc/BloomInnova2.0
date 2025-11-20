'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  variant?: 'light' | 'dark';
}

const Navbar = ({ variant = 'light' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = variant === 'dark' && !scrolled;

  const navLinks = [
    { name: 'Sobre Bloom', href: '/sobre-bloom' },
    { name: 'Metodología', href: '/metodologia' },
    { name: 'Impacto', href: '/impacto' },
    { 
      name: 'Programas', 
      href: '#programas',
      submenu: [
        { name: 'Bloom Xcelerate', href: '/xcelerate' },
        { name: 'Bloom Metrics', href: '/metrics' }
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-panel border-b-0 shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          {/* Logo */}
          <img 
            src={isDark ? "/logobloom-white.svg" : "/logobloom.svg"}
            alt="Bloom Innova" 
            className="h-14 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a 
                href={link.href} 
                className={`text-sm font-medium transition-all ${
                  isDark 
                    ? 'text-white/90 hover:text-bloom-pink hover:font-bold' 
                    : 'text-bloom-navy/80 hover:text-bloom-purple hover:font-bold'
                }`}
              >
                {link.name}
              </a>
              {link.submenu && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  {link.submenu.map((sublink) => (
                    <a
                      key={sublink.name}
                      href={sublink.href}
                      className="block px-6 py-4 text-sm font-medium text-bloom-navy hover:bg-bloom-purple/10 hover:text-bloom-purple transition-all"
                    >
                      {sublink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a 
            href="/diagnostico" 
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 ${
              isDark
                ? 'bg-bloom-pink text-white hover:bg-white hover:text-bloom-navy'
                : 'bg-bloom-navy text-white hover:bg-bloom-purple shadow-bloom-navy/20'
            }`}
          >
            Iniciar Diagnóstico <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 ${isDark ? 'text-white' : 'text-bloom-navy'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 p-8 flex flex-col gap-6 shadow-2xl min-h-screen">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a 
                href={link.href} 
                className="text-2xl font-heading font-bold text-bloom-navy block" 
                onClick={() => !link.submenu && setIsOpen(false)}
              >
                {link.name}
              </a>
              {link.submenu && (
                <div className="ml-4 mt-3 space-y-3">
                  {link.submenu.map((sublink) => (
                    <a
                      key={sublink.name}
                      href={sublink.href}
                      className="block text-lg font-medium text-bloom-navy/70 hover:text-bloom-purple"
                      onClick={() => setIsOpen(false)}
                    >
                      → {sublink.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/diagnostico" className="bg-bloom-navy text-white text-center py-4 rounded-xl font-bold mt-4 text-lg" onClick={() => setIsOpen(false)}>
            Iniciar Diagnóstico
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
