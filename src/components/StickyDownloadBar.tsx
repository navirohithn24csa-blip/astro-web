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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0a041c]/95 backdrop-blur-xl border-t border-purple-800/40 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7026CE] to-[#A855F7] p-0.5 shadow-md shadow-purple-600/30 flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#12072b] rounded-[10px] flex items-center justify-center text-sm filter drop-shadow-[0_0_6px_rgba(245,194,107,0.7)]">
              🪷
            </div>
          </div>
          <div className="leading-tight">
            <span className="text-xs font-black text-white block">Astro Chat</span>
            <span className="text-[10px] text-amber-300 font-bold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-amber-400" /> 1st Chat & 1 Month Free
            </span>
          </div>
        </div>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="h-10 px-4 rounded-full bg-gradient-to-r from-[#7026CE] to-[#9333EA] hover:from-[#5b1fa8] hover:to-[#7e22ce] text-white font-black text-xs flex items-center gap-1.5 shadow-lg shadow-purple-900/50 border border-purple-400/40 shrink-0 transition"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Get Free</span>
        </a>
      </div>
    </div>
  );
};
