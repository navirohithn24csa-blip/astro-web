import React, { useState, useEffect } from 'react';
import { PLAY_STORE_URL } from '../data/config';
import { Download, Sparkles } from 'lucide-react';

export const StickyDownloadBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar once user scrolls down past 450px
      if (window.scrollY > 450) {
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-purple-600 flex items-center justify-center text-white text-base shadow-sm shrink-0">
            🪷
          </div>
          <div className="leading-tight">
            <span className="text-xs font-black text-[#151515] block">Astro Chat</span>
            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> 1st Chat & 1 Month Free
            </span>
          </div>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="h-11 px-5 rounded-full bg-[#7026CE] hover:bg-[#5b1fa8] text-white font-extrabold text-xs flex items-center gap-1.5 shadow-md shadow-purple-700/30 shrink-0 transition"
        >
          <Download className="w-4 h-4" />
          <span>Get Free</span>
        </a>
      </div>
    </div>
  );
};
