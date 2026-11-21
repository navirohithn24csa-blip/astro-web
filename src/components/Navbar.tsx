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
    <header className="sticky top-0 z-50 bg-[#060314]/85 backdrop-blur-xl border-b border-purple-900/40 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7026CE] to-[#A855F7] p-0.5 shadow-md shadow-purple-600/30 group-hover:scale-105 transition">
            <div className="w-full h-full bg-[#12072b] rounded-[10px] flex items-center justify-center text-lg filter drop-shadow-[0_0_8px_rgba(245,194,107,0.7)]">
              🪷
            </div>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-amber-300 transition">
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
              className="text-sm font-semibold text-slate-300 hover:text-amber-300 transition-colors"
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
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7026CE] via-[#8B5CF6] to-[#A855F7] hover:from-[#5B1FA8] hover:to-[#7E22CE] text-white font-bold text-sm shadow-lg shadow-purple-900/50 border border-purple-400/30 flex items-center gap-2 hover:gap-2.5 hover:scale-105 transition-all"
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
            className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7026CE] to-[#A855F7] text-white font-bold text-xs flex items-center gap-1 shadow-md border border-purple-400/30"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Get App</span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-slate-300 hover:bg-purple-900/40 hover:text-white transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0522]/98 border-b border-purple-900/50 px-4 pt-2 pb-6 space-y-3 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-semibold text-slate-200 hover:bg-purple-900/40 hover:text-amber-300 transition"
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
              className="w-full py-3 rounded-full bg-gradient-to-r from-[#7026CE] to-[#A855F7] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-900/50 border border-purple-400/30"
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
