import React, { useState } from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, ArrowRight } from 'lucide-react';

export const Screen3PanchaPakshi: React.FC = () => {
  const [selectedBird, setSelectedBird] = useState('Vulture');

  const birds = [
    { name: 'Vulture', action: 'Rule', icon: '🦅', color: '#F59E0B', ring: 'border-amber-400', glow: 'shadow-amber-500/40', desc: '100% Peak Strength' },
    { name: 'Owl', action: 'Eat', icon: '🦉', color: '#A855F7', ring: 'border-purple-400', glow: 'shadow-purple-500/40', desc: '80% Auspicious Strength' },
    { name: 'Crow', action: 'Walk', icon: '🐦‍⬛', color: '#06B6D4', ring: 'border-cyan-400', glow: 'shadow-cyan-500/40', desc: '50% Neutral Strength' },
    { name: 'Cock', action: 'Sleep', icon: '🐓', color: '#EF4444', ring: 'border-rose-400', glow: 'shadow-rose-500/40', desc: '20% Passive Strength' },
    { name: 'Peacock', action: 'Die', icon: '🦚', color: '#10B981', ring: 'border-emerald-400', glow: 'shadow-emerald-500/40', desc: 'Rest Period' },
  ];

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#070514] via-[#14092b] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Pancha Pakshi</h3>
        <div className="w-5" />
      </div>

      {/* Moon & Perched Bird Silhouettes Visual */}
      <div className="relative z-10 flex flex-col items-center justify-center my-0.5">
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-amber-100 via-purple-200 to-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.35)] flex items-center justify-center">
          <div className="absolute -bottom-1 flex items-end justify-center gap-1 text-slate-900">
            <span className="text-xs">🦅</span>
            <span className="text-sm">🦉</span>
            <span className="text-xs">🐦‍⬛</span>
          </div>
        </div>
      </div>

      {/* Headline & Description */}
      <div className="relative z-10 text-center space-y-0.5">
        <h2 className="text-sm font-extrabold leading-tight text-white">
          Pancha Pakshi.<br />
          <span className="text-amber-300">Loved by thousands.</span>
        </h2>
        <p className="text-[10px] text-purple-200/80 leading-snug px-1">
          The ancient bird-based system, now in your pocket.
        </p>
      </div>

      {/* 5 Sacred Bird Badges (3 + 2 layout) */}
      <div className="relative z-10 space-y-2 my-1">
        {/* Row 1: 3 Birds */}
        <div className="grid grid-cols-3 gap-2">
          {birds.slice(0, 3).map((bird) => (
            <button
              key={bird.name}
              type="button"
              onClick={() => setSelectedBird(bird.name)}
              className={`flex flex-col items-center p-1.5 rounded-xl border transition-all ${
                selectedBird === bird.name
                  ? `${bird.ring} bg-purple-950/90 shadow-md ${bird.glow} scale-105`
                  : 'border-white/10 bg-slate-950/40 hover:border-white/30'
              }`}
            >
              <div className={`w-8 h-8 rounded-full border-2 ${bird.ring} bg-slate-950 flex items-center justify-center text-sm shadow-inner`}>
                {bird.icon}
              </div>
              <span className="text-[10px] font-bold text-white mt-1">{bird.name}</span>
              <span className="text-[9px] font-semibold text-amber-300">{bird.action}</span>
            </button>
          ))}
        </div>

        {/* Row 2: 2 Birds */}
        <div className="grid grid-cols-2 gap-2 px-6">
          {birds.slice(3, 5).map((bird) => (
            <button
              key={bird.name}
              type="button"
              onClick={() => setSelectedBird(bird.name)}
              className={`flex flex-col items-center p-1.5 rounded-xl border transition-all ${
                selectedBird === bird.name
                  ? `${bird.ring} bg-purple-950/90 shadow-md ${bird.glow} scale-105`
                  : 'border-white/10 bg-slate-950/40 hover:border-white/30'
              }`}
            >
              <div className={`w-8 h-8 rounded-full border-2 ${bird.ring} bg-slate-950 flex items-center justify-center text-sm shadow-inner`}>
                {bird.icon}
              </div>
              <span className="text-[10px] font-bold text-white mt-1">{bird.name}</span>
              <span className="text-[9px] font-semibold text-amber-300">{bird.action}</span>
            </button>
          ))}
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
          <span>Check Today's Status</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
