import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { Bell, Menu, Compass, Clock, Heart, Users, Sparkles, MoreHorizontal, Home as HomeIcon, MessageSquare, Radio, User } from 'lucide-react';

export const Screen1Home: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#080318] via-[#12082b] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Background Starry Dust */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2">
        <Menu className="w-5 h-5 text-white/90" />
        <div className="flex items-center gap-1.5">
          <span className="text-amber-400 text-lg">🪷</span>
          <span className="font-bold text-sm tracking-wide text-white">Astro Chat</span>
        </div>
        <Bell className="w-4 h-4 text-white/90" />
      </div>

      {/* Hero Headline & Offers */}
      <div className="relative z-10 text-center my-1.5 space-y-1">
        <h2 className="text-base font-extrabold leading-tight">
          Ask the stars.<br />
          <span className="text-amber-300">Get real answers.</span>
        </h2>
        <div className="text-[10px] text-purple-200/90 leading-tight">
          <p>Your first chat is free.</p>
          <p>Your first month is free.</p>
        </div>
      </div>

      {/* Feature Icons Grid (4 + 3) */}
      <div className="relative z-10 space-y-2.5 my-1">
        {/* Row 1 */}
        <div className="grid grid-cols-4 gap-1 text-center">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <Compass className="w-5 h-5" />
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Life<br/>Prediction</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <span className="text-sm">🦅</span>
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Pancha<br/>Pakshi</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Good<br/>Time</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-pink-500/50 flex items-center justify-center text-pink-400 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <Heart className="w-5 h-5 fill-pink-400" />
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Match<br/>Maker</span>
          </a>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-2 px-3 text-center">
          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <Users className="w-5 h-5" />
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Live<br/>Astrologers</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <span className="text-sm">💍</span>
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">Matrimony</span>
          </a>

          <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
            <div className="w-10 h-10 rounded-full bg-purple-950/80 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-sm shadow-purple-900/50 group-hover:scale-105 transition">
              <MoreHorizontal className="w-5 h-5" />
            </div>
            <span className="text-[9px] text-slate-200 mt-1 leading-tight font-medium">More</span>
          </a>
        </div>
      </div>

      {/* Golden Glowing Kundli Wheel Silhouette */}
      <div className="relative z-0 h-16 flex items-center justify-center -mb-2">
        <div className="w-36 h-36 rounded-full border border-amber-400/30 bg-gradient-to-t from-amber-500/20 via-purple-600/10 to-transparent flex items-center justify-center shadow-[0_0_30px_rgba(245,194,107,0.2)]">
          <div className="w-24 h-24 rounded-full border border-dashed border-amber-300/40 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-amber-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* In-App Bottom Navigation Bar */}
      <div className="relative z-10 -mx-3 -mb-3 bg-[#0a0518]/95 border-t border-purple-500/20 px-3 py-1.5 flex items-center justify-around text-[10px]">
        <div className="flex flex-col items-center text-amber-400 font-bold">
          <HomeIcon className="w-3.5 h-3.5 fill-amber-400" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <Radio className="w-3.5 h-3.5" />
          <span>Live</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <User className="w-3.5 h-3.5" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
