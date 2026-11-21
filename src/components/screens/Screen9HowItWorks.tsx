import React from 'react';
import { ChevronLeft, Calendar, MessageSquare, TrendingUp, ArrowDown } from 'lucide-react';

export const Screen9HowItWorks: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">How It Works</h3>
        <div className="w-5" />
      </div>

      {/* Steps Container */}
      <div className="relative z-10 space-y-1.5 my-auto flex flex-col items-center">
        {/* Step 1 */}
        <div className="w-full bg-slate-950/80 border border-purple-500/25 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center font-bold text-[10px] text-white">
              1
            </div>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#7026CE] shadow-md">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[11px] font-bold text-white">Enter birth details</h4>
            <p className="text-[9px] text-purple-200 leading-snug">Share your date, time and place of birth.</p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 my-0.5">
          <ArrowDown className="w-3 h-3" />
        </div>

        {/* Step 2 */}
        <div className="w-full bg-slate-950/80 border border-purple-500/25 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center font-bold text-[10px] text-white">
              2
            </div>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#7026CE] shadow-md">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[11px] font-bold text-white">Get your free chart & first chat</h4>
            <p className="text-[9px] text-purple-200 leading-snug">See your detailed chart and chat with an astrologer for free.</p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300 my-0.5">
          <ArrowDown className="w-3 h-3" />
        </div>

        {/* Step 3 */}
        <div className="w-full bg-slate-950/80 border border-purple-500/25 rounded-2xl p-2.5 flex items-center gap-2.5 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center font-bold text-[10px] text-white">
              3
            </div>
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#7026CE] shadow-md">
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-[11px] font-bold text-white">Follow your good times & remedies</h4>
            <p className="text-[9px] text-purple-200 leading-snug">Use personalized timings and simple remedies for better results.</p>
          </div>
        </div>
      </div>

      <div className="h-2" />
    </div>
  );
};
