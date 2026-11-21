import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, ArrowRight, Heart, CheckCircle2, Home as HomeIcon, MessageSquare, User, Sparkles } from 'lucide-react';

export const Screen5MatchMaker: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#090317] via-[#140828] to-[#1e0a38] p-3 text-white overflow-hidden select-none">
      {/* Background Starry Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/25 via-transparent to-transparent pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1 pt-0.5">
        <button type="button" aria-label="Back" className="text-white/90 hover:text-amber-300 transition">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h3 className="font-bold text-xs tracking-wide text-white">Match Maker</h3>
        <div className="w-5" />
      </div>

      {/* 1. FIRST: Romantic Moon Silhouette Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center my-0.5">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 shadow-[0_0_30px_rgba(245,194,107,0.45)] flex items-end justify-center overflow-hidden border border-amber-300/40">
          {/* Subtle Couple Silhouette Shadow */}
          <div className="text-2xl filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-0.5">
            👩‍❤️‍👨
          </div>
        </div>
      </div>

      {/* Headline & Subtitle */}
      <div className="relative z-10 text-center space-y-0.5">
        <h2 className="text-sm font-black leading-tight tracking-tight text-white">
          Two charts.<br />
          <span className="text-amber-300 filter drop-shadow-[0_0_8px_rgba(245,194,107,0.5)]">
            One honest score.
          </span>
        </h2>
        <p className="text-[9.5px] text-purple-200/90 leading-tight px-1 font-medium">
          Check compatibility for any couple using real calculation data.
        </p>
      </div>

      {/* 2. MATCHMAKER IMAGES & HEART ICON */}
      <div className="relative z-10 my-1">
        <div className="flex items-center justify-center gap-3">
          {/* Groom Profile Image */}
          <div className="relative group">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400 p-0.5 shadow-[0_0_15px_rgba(245,194,107,0.5)] bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face"
                alt="Groom"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[7.5px] bg-amber-400 text-slate-950 px-1 rounded-full font-bold uppercase">Groom</span>
          </div>

          {/* Glowing Red Heart Icon in Center */}
          <div className="w-8 h-8 rounded-full bg-rose-600/30 border border-rose-500 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.7)] animate-pulse">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-500 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.9)]" />
          </div>

          {/* Bride Profile Image */}
          <div className="relative group">
            <div className="w-12 h-12 rounded-full border-2 border-amber-400 p-0.5 shadow-[0_0_15px_rgba(245,194,107,0.5)] bg-slate-900 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face"
                alt="Bride"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[7.5px] bg-amber-400 text-slate-950 px-1 rounded-full font-bold uppercase">Bride</span>
          </div>
        </div>
      </div>

      {/* 3. BELOW TEXT IN SUBSTANTIAL AMOUNT (NOT BRIEF) */}
      <div className="relative z-10 bg-slate-950/80 border border-purple-500/30 rounded-xl p-2 backdrop-blur-md shadow-xl space-y-1.5 my-0.5">
        {/* Score & Laurels */}
        <div className="text-center py-0.5 border-b border-purple-500/25">
          <div className="text-[10px] font-bold text-amber-300 tracking-wide uppercase">
            36 / 36 Guna
          </div>
          <div className="text-base font-black text-emerald-400 tracking-wide flex items-center justify-center gap-1 filter drop-shadow-[0_0_6px_rgba(52,211,153,0.5)]">
            <span className="text-xs">🌿</span>
            <span>90% Match</span>
            <span className="text-xs">🌿</span>
          </div>
        </div>

        {/* 4-Item Verification Checklist (Detailed, Not Brief) */}
        <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8.5px] text-slate-200 px-0.5">
          <div className="flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Guna Matching</span>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Rasi Matching</span>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Nadi Check</span>
          </div>
          <div className="flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Dosha Analysis</span>
          </div>
        </div>

        {/* Detailed Vedic Compatibility Note (Not Brief) */}
        <div className="pt-0.5 text-[8px] text-purple-200/80 text-center leading-tight">
          Ashta-Koota calculated using high-precision Vedic ephemeris algorithms. Zero Kuja Dosha detected.
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 pt-0.5 mb-1">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-1.5 px-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-[10px] flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,194,107,0.4)] hover:scale-[1.02] transition"
        >
          <span>Check Compatibility</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      {/* 4. IN BELOW SHOW LIKE NAVIGATION ICONS */}
      <div className="relative z-10 -mx-3 -mb-3 bg-[#070314]/98 border-t border-purple-500/25 px-3 py-1.5 flex items-center justify-around text-[10px]">
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <HomeIcon className="w-3.5 h-3.5" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-amber-400 font-bold">
          <Heart className="w-3.5 h-3.5 fill-amber-400" />
          <span>Match</span>
        </div>
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat</span>
        </div>
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <User className="w-3.5 h-3.5" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
