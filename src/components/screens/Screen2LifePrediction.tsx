import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, TrendingUp, Heart, Activity, Coins, ArrowRight } from 'lucide-react';

export const Screen2LifePrediction: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1e0d3a] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Life Prediction</h3>
        <div className="w-5" />
      </div>

      {/* Meditating Yogi & Glowing Zodiac Wheel */}
      <div className="relative z-10 flex flex-col items-center justify-center my-1">
        <div className="relative w-20 h-20 rounded-full border border-amber-400/40 bg-gradient-to-tr from-amber-500/20 via-purple-600/30 to-transparent flex items-center justify-center shadow-[0_0_20px_rgba(245,194,107,0.3)]">
          <div className="absolute inset-1 rounded-full border border-dashed border-amber-300/30 animate-[spin_20s_linear_infinite]" />
          {/* Meditating Yogi Silhouette */}
          <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(245,194,107,0.6)]">🧘‍♂️</span>
        </div>
      </div>

      {/* Headline & Vedic Copy */}
      <div className="relative z-10 text-center space-y-1">
        <h2 className="text-sm font-extrabold leading-tight text-white">
          Your life. Calculated,<br />
          <span className="text-amber-300">not guessed.</span>
        </h2>
        <p className="text-[10px] text-purple-200/80 leading-snug px-2">
          Predictions built from your real birth data using Vedic calculation algorithms.
        </p>
      </div>

      {/* Progress Bars Card Container */}
      <div className="relative z-10 bg-slate-950/70 border border-purple-500/25 rounded-xl p-2.5 space-y-2 backdrop-blur-md shadow-lg my-1">
        {/* Career */}
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <TrendingUp className="w-3 h-3 text-emerald-400" /> Career
            </span>
            <span className="text-emerald-400 font-bold text-[9px]">High</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-green-400 rounded-full w-[82%]" />
          </div>
        </div>

        {/* Love */}
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <Heart className="w-3 h-3 text-pink-400 fill-pink-400" /> Love
            </span>
            <span className="text-pink-400 font-bold text-[9px]">Favorable</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-rose-400 rounded-full w-[70%]" />
          </div>
        </div>

        {/* Health */}
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <Activity className="w-3 h-3 text-cyan-400" /> Health
            </span>
            <span className="text-cyan-400 font-bold text-[9px]">Steady</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full w-[64%]" />
          </div>
        </div>

        {/* Money */}
        <div className="space-y-0.5">
          <div className="flex items-center justify-between text-[10px]">
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <Coins className="w-3 h-3 text-amber-400" /> Money
            </span>
            <span className="text-amber-400 font-bold text-[9px]">Growth</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-[76%]" />
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
          <span>Get My Life Report</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
