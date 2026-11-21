import React, { useState } from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, MoreVertical, Plus, Mic, Send, Sparkles } from 'lucide-react';

export const Screen8AstrologerChat: React.FC = () => {
  const [translated, setTranslated] = useState(false);

  const englishText = "Yes, a good opportunity is seen after March. Follow the suggested remedy.";
  const tamilText = "ஆம், மார்ச் மாதத்திற்குப் பிறகு நல்ல வேலை வாய்ப்பு உள்ளது. பரிந்துரைக்கப்பட்ட பரிகாரத்தைப் பின்பற்றவும்.";

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-purple-500/20">
        <div className="flex items-center gap-2">
          <ChevronLeft className="w-5 h-5 text-white/90" />
          <div className="relative">
            <div className="w-8 h-8 rounded-full border border-amber-400 overflow-hidden bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop&crop=face"
                alt="Astrologer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-500 border border-slate-950" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white leading-tight">Astrologer</h4>
            <span className="text-[9px] text-emerald-400 font-medium">● Online</span>
          </div>
        </div>
        <MoreVertical className="w-4 h-4 text-white/80" />
      </div>

      {/* Free Chat Promo Pill */}
      <div className="relative z-10 my-1 text-center">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-400/15 border border-amber-400/40 text-amber-300 text-[9px] font-semibold">
          🎁 Your first chat is FREE
        </span>
      </div>

      {/* Chat Messages Body */}
      <div className="relative z-10 space-y-2.5 my-1 flex-1 overflow-y-auto no-scrollbar">
        {/* User Outgoing Message */}
        <div className="flex flex-col items-end space-y-0.5">
          <div className="bg-white text-slate-950 px-3 py-2 rounded-2xl rounded-tr-sm text-[11px] font-medium max-w-[85%] shadow-md">
            Will I get a new job this year?
          </div>
          <span className="text-[8px] text-purple-300 mr-1">10:14 AM</span>
        </div>

        {/* Astrologer Incoming Message */}
        <div className="flex flex-col items-start space-y-1">
          <div className="bg-[#7026CE] text-white px-3 py-2.5 rounded-2xl rounded-tl-sm text-[11px] font-medium max-w-[88%] shadow-md leading-relaxed border border-purple-400/30">
            {translated ? tamilText : englishText}
          </div>
          <div className="flex items-center gap-2 ml-1">
            <span className="text-[8px] text-purple-300">10:20 AM</span>
            
            {/* Translate Button */}
            <button
              type="button"
              onClick={() => setTranslated(!translated)}
              className="px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-400/40 text-[9px] text-amber-300 hover:text-white flex items-center gap-1 shadow-sm transition"
            >
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
              <span>{translated ? 'Original' : 'Translate'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Download to Chat CTA Bar */}
      <div className="relative z-10 mb-1">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-[10px] flex items-center justify-center gap-1 shadow-md shadow-amber-500/20 hover:scale-[1.01] transition"
        >
          <span>Download to Start Chatting</span>
        </a>
      </div>

      {/* Chat Input Dock */}
      <div className="relative z-10 flex items-center gap-1.5 pt-1 border-t border-purple-500/20">
        <button type="button" className="w-7 h-7 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-white/80">
          <Plus className="w-3.5 h-3.5" />
        </button>
        <div className="flex-1 h-7 rounded-full bg-slate-950/80 border border-purple-500/30 px-2.5 flex items-center justify-between text-[10px] text-slate-400">
          <span>Type a message...</span>
          <Mic className="w-3.5 h-3.5 text-purple-300" />
        </div>
        <button type="button" className="w-7 h-7 rounded-full bg-[#7026CE] flex items-center justify-center text-white shadow-md">
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
