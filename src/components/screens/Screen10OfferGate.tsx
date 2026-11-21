import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { CheckCircle2, Gift, Sparkles, ArrowRight } from 'lucide-react';

export const Screen10OfferGate: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#080318] via-[#140828] to-[#1e0d3a] p-3 text-white overflow-hidden text-center">
      {/* 3D Gift Illustration with Glow */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-3 my-1">
        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-800 via-indigo-700 to-purple-900 border border-amber-400/60 flex items-center justify-center shadow-[0_0_35px_rgba(245,194,107,0.45)]">
          {/* Gold Ribbons across gift */}
          <div className="absolute inset-y-0 w-3 bg-gradient-to-r from-amber-400 to-amber-300 shadow-sm" />
          <div className="absolute inset-x-0 h-3 bg-gradient-to-b from-amber-400 to-amber-300 shadow-sm" />
          {/* Top Bow */}
          <div className="absolute -top-3 flex items-center justify-center">
            <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">🎀</span>
          </div>
          <Sparkles className="w-8 h-8 text-amber-300 animate-pulse relative z-10" />
        </div>
      </div>

      {/* Headline Stack */}
      <div className="relative z-10 space-y-1 my-1">
        <h2 className="text-base font-black leading-tight tracking-tight">
          <span className="text-amber-300 block">First chat free.</span>
          <span className="text-amber-300 block">First month free.</span>
          <span className="text-white block mt-0.5">No tricks.</span>
        </h2>
      </div>

      {/* 4-Item Feature Checklist */}
      <div className="relative z-10 bg-slate-950/70 border border-purple-500/25 rounded-2xl p-3 backdrop-blur-md shadow-lg my-1 space-y-2 text-left">
        <div className="flex items-center gap-2 text-[10px] text-slate-100">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-medium">Chat with verified astrologers</span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-100">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-medium">Get your horoscope & life report</span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-100">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-medium">Find lucky timings & remedies</span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-slate-100">
          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-medium">Try all premium features</span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="relative z-10 pt-1">
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition"
        >
          <span>Download Astro Chat – Free</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
