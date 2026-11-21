import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';

export const Screen5MatchMaker: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0c051a] via-[#160a2c] to-[#200c3c] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Match Maker</h3>
        <div className="w-5" />
      </div>

      {/* Moonlit Couple Silhouette Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center my-0.5">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-200 via-pink-300 to-amber-400 shadow-[0_0_25px_rgba(244,63,94,0.3)] flex items-center justify-center">
          <span className="text-xl">👩‍❤️‍👨</span>
        </div>
      </div>

      {/* Headline & Description */}
      <div className="relative z-10 text-center space-y-0.5">
        <h2 className="text-sm font-extrabold leading-tight text-white">
          Two charts.<br />
          <span className="text-amber-300">One honest score.</span>
        </h2>
        <p className="text-[10px] text-purple-200/80 leading-snug px-1">
          Check compatibility for any couple using real calculation data.
        </p>
      </div>

      {/* Couple Profiles & Compatibility Score Box */}
      <div className="relative z-10 bg-slate-950/70 border border-purple-500/25 rounded-xl p-2.5 backdrop-blur-md shadow-lg my-1 space-y-2">
        {/* Dual Avatars with Heart */}
        <div className="flex items-center justify-center gap-3">
          <div className="relative w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-[0_0_10px_rgba(245,194,107,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
              alt="Groom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-7 h-7 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center animate-pulse">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          </div>
          <div className="relative w-10 h-10 rounded-full border-2 border-amber-400 overflow-hidden shadow-[0_0_10px_rgba(245,194,107,0.4)]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
              alt="Bride"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Score & Laurels */}
        <div className="text-center py-0.5 border-y border-purple-500/20">
          <div className="text-[10px] font-bold text-amber-300">36 / 36 Guna</div>
          <div className="text-base font-black text-emerald-400 tracking-wide flex items-center justify-center gap-1">
            <span>🌿</span>
            <span>90% Match</span>
            <span>🌿</span>
          </div>
        </div>

        {/* 4-Item Verification Checklist */}
        <div className="grid grid-cols-2 gap-1 text-[9px] text-slate-200 px-1">
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Guna Matching</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Rasi Matching</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Nadi Check</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Dosha Analysis</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 pt-1">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/30 hover:scale-[1.02] transition"
        >
          <span>Check Compatibility</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
