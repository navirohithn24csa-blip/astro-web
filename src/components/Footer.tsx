import React from 'react';
import { PLAY_STORE_URL } from '../data/config';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0D091B] text-slate-300 py-16 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row: Brand & Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7026CE] to-[#A855F7] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#150a2b] rounded-[10px] flex items-center justify-center text-lg">
                  🪷
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Astro Chat
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Ask the stars. Get real answers. Vedic astrology consultations, accurate Kundli predictions, personalized lucky timings, and verified astrologers.
            </p>
            <div className="pt-2">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 hover:text-amber-200 transition"
              >
                <span>Download on Google Play</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Features Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Features</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#life-prediction" className="hover:text-amber-300 transition">Life Prediction</a></li>
              <li><a href="#pancha-pakshi" className="hover:text-amber-300 transition">Pancha Pakshi</a></li>
              <li><a href="#good-time" className="hover:text-amber-300 transition">Good Time Finder</a></li>
              <li><a href="#match-maker" className="hover:text-amber-300 transition">Match Maker</a></li>
              <li><a href="#astrologers" className="hover:text-amber-300 transition">Live Astrologers</a></li>
              <li><a href="#matrimony" className="hover:text-amber-300 transition">Matrimony</a></li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Legal & Compliance</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="privacy.html" className="text-amber-300 hover:underline font-medium transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="terms.html" className="text-amber-300 hover:underline font-medium transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500 block">Package: com.astrochat.astrology</span>
              </li>
              <li>
                <a href="mailto:navirohithn2006@gmail.com" className="text-xs text-purple-300 hover:underline">
                  Support & Grievances
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Box */}
        <div className="pt-6 border-t border-purple-900/30 text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong>Astrological Disclaimer:</strong> Astrological predictions, Kundli charts, and tarot interpretations on Astro Chat are for spiritual guidance, self-reflection, and entertainment purposes only. Astro Chat is not a substitute for clinical medical, legal, or financial professional counsel.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-4 border-t border-purple-900/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Astro Chat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="privacy.html" className="hover:text-slate-300 transition">Privacy</a>
            <span>&bull;</span>
            <a href="terms.html" className="hover:text-slate-300 transition">Terms</a>
            <span>&bull;</span>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">Google Play</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
