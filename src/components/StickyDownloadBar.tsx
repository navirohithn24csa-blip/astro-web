import React, { useState, useEffect } from 'react';
import { PLAY_STORE_URL } from '../data/config';
import { Home as HomeIcon, Heart, Compass, Users, Download } from 'lucide-react';

export const StickyDownloadBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 250px
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2 bg-[#090317]/95 backdrop-blur-xl border-t border-purple-800/40 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-around gap-1 max-w-md mx-auto">
        
        {/* Navigation Icon 1: Home */}
        <a
          href="#"
          className="flex flex-col items-center justify-center p-1 text-slate-400 hover:text-amber-300 transition text-[9px] font-medium"
        >
          <HomeIcon className="w-4 h-4" />
          <span>Home</span>
        </a>

        {/* Navigation Icon 2: Prediction */}
        <a
          href="#life-prediction"
          className="flex flex-col items-center justify-center p-1 text-slate-400 hover:text-amber-300 transition text-[9px] font-medium"
        >
          <Compass className="w-4 h-4" />
          <span>Kundli</span>
        </a>

        {/* Navigation Icon 3: Match Maker */}
        <a
          href="#match-maker"
          className="flex flex-col items-center justify-center p-1 text-rose-400 hover:text-rose-300 transition text-[9px] font-bold"
        >
          <Heart className="w-4 h-4 fill-rose-500/30" />
          <span>Match</span>
        </a>

        {/* Navigation Icon 4: Astrologers */}
        <a
          href="#astrologers"
          className="flex flex-col items-center justify-center p-1 text-slate-400 hover:text-amber-300 transition text-[9px] font-medium"
        >
          <Users className="w-4 h-4" />
          <span>Gurus</span>
        </a>

        {/* Action Button: Download CTA */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="h-9 px-3.5 rounded-full bg-gradient-to-r from-[#7026CE] to-[#9333EA] hover:from-[#5b1fa8] hover:to-[#7e22ce] text-white font-black text-[10px] flex items-center gap-1 shadow-lg shadow-purple-900/50 border border-purple-400/40 shrink-0 transition"
        >
          <Download className="w-3 h-3" />
          <span>Get Free</span>
        </a>

      </div>
    </div>
  );
};
