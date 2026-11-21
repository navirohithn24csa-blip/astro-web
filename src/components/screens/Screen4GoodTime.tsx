import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, ArrowRight, Calendar, Star } from 'lucide-react';

export const Screen4GoodTime: React.FC = () => {
  const heatmapRows = [
    { time: '6 AM', blocks: ['bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-yellow-400', 'bg-rose-500', 'bg-rose-500'] },
    { time: '9 AM', blocks: ['bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-rose-500'] },
    { time: '12 PM', blocks: ['bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-rose-500', 'bg-rose-500'] },
    { time: '3 PM', blocks: ['bg-emerald-500', 'bg-emerald-500', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-rose-500', 'bg-rose-500'] },
    { time: '6 PM', blocks: ['bg-emerald-500', 'bg-yellow-400', 'bg-yellow-400', 'bg-yellow-400', 'bg-rose-500', 'bg-rose-500', 'bg-rose-500'] },
    { time: '9 PM', blocks: ['bg-rose-500', 'bg-rose-500', 'bg-rose-500', 'bg-rose-500', 'bg-rose-500', 'bg-rose-500', 'bg-rose-500'] },
  ];

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Good Time Finder</h3>
        <div className="w-5" />
      </div>

      {/* Glowing 3D Calendar Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center my-0.5">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-500/30 via-purple-600/40 to-amber-300/30 border border-amber-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(245,194,107,0.3)]">
          <Calendar className="w-6 h-6 text-amber-300" />
        </div>
      </div>

      {/* Headline & Description */}
      <div className="relative z-10 text-center space-y-0.5">
        <h2 className="text-sm font-extrabold leading-tight text-white">
          Your good time.<br />
          <span className="text-amber-300">Only yours.</span>
        </h2>
        <p className="text-[10px] text-purple-200/80 leading-snug px-1">
          Personalized lucky timings for every kind of work: job, travel, business, new beginnings.
        </p>
      </div>

      {/* Heatmap Card with Floating Tooltip */}
      <div className="relative z-10 bg-slate-950/70 border border-purple-500/25 rounded-xl p-2.5 backdrop-blur-md shadow-lg my-1 space-y-1.5">
        
        {/* Floating Tooltip Callout */}
        <div className="relative flex justify-center -mt-1 mb-1">
          <div className="bg-gradient-to-r from-amber-400 to-amber-300 text-slate-950 px-2.5 py-1 rounded-lg text-[9px] font-bold shadow-lg flex items-center gap-1 animate-bounce">
            <Star className="w-3 h-3 fill-slate-950" />
            <span>Best time: 10:30 AM – 12:00 PM</span>
          </div>
        </div>

        {/* 6 Time Rows */}
        <div className="space-y-1">
          {heatmapRows.map((row) => (
            <div key={row.time} className="flex items-center gap-1.5">
              <span className="w-9 text-[9px] font-mono text-purple-200 shrink-0 text-right">{row.time}</span>
              <div className="flex-1 grid grid-cols-7 gap-1">
                {row.blocks.map((color, i) => (
                  <div key={i} className={`h-2.5 rounded-[2px] ${color} shadow-sm opacity-90 hover:opacity-100 transition`} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-3 pt-1 border-t border-purple-500/20 text-[8px] text-purple-200">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Auspicious
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-yellow-400" /> Neutral
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-rose-500" /> Caution
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
          <span>Find My Lucky Time</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
