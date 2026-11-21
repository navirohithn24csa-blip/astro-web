import React, { useState } from 'react';
import { PLAY_STORE_URL } from '../data/config';
import { Menu, X, ArrowRight, Download } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Life Prediction', href: '#life-prediction' },
    { name: 'Astrologers', href: '#astrologers' },
    { name: 'Matrimony', href: '#matrimony' },
    { name: 'Reviews', href: '#reviews' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7026CE] to-[#A855F7] p-0.5 shadow-md shadow-purple-600/20 group-hover:scale-105 transition">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-lg">
              🪷
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-[#151515]">
              Astro Chat
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 hover:text-[#7026CE] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-[#7026CE] hover:bg-[#5b1fa8] text-white font-bold text-sm shadow-md shadow-purple-700/25 flex items-center gap-2 hover:gap-2.5 transition-all"
          >
            <span>Download App</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full bg-[#7026CE] text-white font-bold text-xs flex items-center gap-1 shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get App</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-semibold text-slate-700 hover:bg-purple-50 hover:text-[#7026CE] transition"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#7026CE] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-purple-700/30"
            >
              <span>Download Astro Chat – Free</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
