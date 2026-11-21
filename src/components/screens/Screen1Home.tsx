import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { Bell, Menu, Home as HomeIcon, MessageSquare, Radio, User } from 'lucide-react';

export const Screen1Home: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#060312] via-[#100726] to-[#1a0c3b] p-3 text-white overflow-hidden select-none">
      {/* Background Cosmic Star Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent pointer-events-none" />

      {/* Top Header App Bar */}
      <div className="relative z-10 flex items-center justify-between pb-1.5 pt-0.5">
        <button type="button" aria-label="Menu" className="text-white/90 hover:text-amber-300 transition">
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-lg filter drop-shadow-[0_0_6px_rgba(245,194,107,0.6)]">🪷</span>
          <span className="font-extrabold text-sm tracking-wider text-white">Astro Chat</span>
        </div>

        <button type="button" aria-label="Notifications" className="text-white/90 hover:text-amber-300 transition relative">
          <Bell className="w-4 h-4" />
          <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full" />
        </button>
      </div>

      {/* Hero Headline & Offers */}
      <div className="relative z-10 text-center my-1 space-y-0.5">
        <h2 className="text-[15px] font-black leading-tight tracking-tight">
          <span className="text-white block">Ask the stars.</span>
          <span className="text-amber-300 block text-[16px] filter drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]">
            Get real answers.
          </span>
        </h2>
        <div className="text-[10px] text-purple-200/90 leading-tight pt-0.5 font-medium">
          <p>Your first chat is free.</p>
          <p>Your first month is free.</p>
        </div>
      </div>

      {/* 8 Feature Action Buttons (4 + 3 layout) */}
      <div className="relative z-10 space-y-2 my-0.5">
        {/* Row 1: 4 circular items */}
        <div className="grid grid-cols-4 gap-1 text-center">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">♈</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Life<br/>Prediction</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">🦅</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Pancha<br/>Pakshi</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">⏳</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Good<br/>Time</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-pink-400/60 flex items-center justify-center text-pink-400 shadow-[0_0_12px_rgba(244,63,94,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">❤️</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Match<br/>Maker</span>
          </a>
        </div>

        {/* Row 2: 3 circular items centered */}
        <div className="grid grid-cols-3 gap-2 px-3 text-center">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">👳</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Live<br/>Astrologers</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm">💍</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">Matrimony</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-[#1e0f3d]/90 border border-amber-400/60 flex items-center justify-center text-amber-300 shadow-[0_0_12px_rgba(245,194,107,0.3)] group-hover:scale-110 transition">
              <span className="text-sm font-bold">•••</span>
            </div>
            <span className="text-[9px] text-slate-100 mt-1 leading-tight font-semibold">More</span>
          </a>
        </div>
      </div>

      {/* Radiant Golden Kundli Sun Chakra Wheel at Bottom */}
      <div className="relative z-0 h-16 flex items-center justify-center -mb-2 overflow-hidden">
        <div className="relative w-44 h-44 rounded-full border-2 border-amber-400/50 bg-gradient-to-t from-amber-400/30 via-purple-700/20 to-transparent flex items-center justify-center shadow-[0_0_40px_rgba(245,194,107,0.4)]">
          {/* Inner Dashed Ring */}
          <div className="w-32 h-32 rounded-full border border-dashed border-amber-300/60 flex items-center justify-center animate-[spin_30s_linear_infinite]">
            <div className="w-20 h-20 rounded-full border border-amber-400/30 flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-amber-400/80 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* In-App Bottom Navigation Bar */}
      <div className="relative z-10 -mx-3 -mb-3 bg-[#070314]/98 border-t border-purple-500/25 px-3 py-1.5 flex items-center justify-around text-[10px]">
        <div className="flex flex-col items-center text-amber-400 font-bold">
          <HomeIcon className="w-3.5 h-3.5 fill-amber-400" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat</span>
        </div>
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <Radio className="w-3.5 h-3.5" />
          <span>Live</span>
        </div>
        <div className="flex flex-col items-center text-slate-400 hover:text-white transition">
          <User className="w-3.5 h-3.5" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
