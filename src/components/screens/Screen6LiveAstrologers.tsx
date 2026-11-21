import React, { useState } from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, Search, Star, MessageCircle, Home as HomeIcon, MessageSquare, Radio, User } from 'lucide-react';

export const Screen6LiveAstrologers: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Hindi', 'Tamil', 'Kannada'];

  const astrologers = [
    {
      name: 'Sri Raman',
      exp: '25+ Years',
      lang: 'Tamil, English',
      rating: '4.9',
      reviews: '2.4K',
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop&crop=face',
      online: true,
    },
    {
      name: 'Priya Devi',
      exp: '12+ Years',
      lang: 'Hindi, English',
      rating: '4.8',
      reviews: '2.9K',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
      online: true,
    },
    {
      name: 'Arun Kumar',
      exp: '18+ Years',
      lang: 'Tamil, Kannada',
      rating: '4.7',
      reviews: '1.8K',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      online: true,
    },
  ];

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1c0c3e] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1.5">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Live Astrologers</h3>
        <Search className="w-4 h-4 text-white/90" />
      </div>

      {/* Language / Category Filter Chips */}
      <div className="relative z-10 flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold transition ${
              activeFilter === filter
                ? 'bg-purple-600 text-white shadow-sm shadow-purple-900/60'
                : 'bg-slate-900/80 text-purple-200 border border-purple-500/20 hover:border-purple-400/40'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Astrologer Profile Cards List */}
      <div className="relative z-10 space-y-1.5 my-1 flex-1">
        {astrologers.map((astro) => (
          <div
            key={astro.name}
            className="bg-slate-950/80 border border-purple-500/25 rounded-xl p-2 flex items-center justify-between gap-2 shadow-md hover:border-purple-400/40 transition"
          >
            {/* Avatar & Online Dot */}
            <div className="relative shrink-0">
              <div className="w-10 h-10 rounded-full border border-amber-400/40 overflow-hidden bg-slate-800">
                <img src={astro.avatar} alt={astro.name} className="w-full h-full object-cover" />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-slate-950" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <h4 className="text-[11px] font-bold text-white truncate">{astro.name}</h4>
                <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded border border-emerald-500/30">
                  Online
                </span>
              </div>
              <p className="text-[9px] text-purple-200 truncate">{astro.exp} • {astro.lang}</p>
              <div className="flex items-center gap-1 text-[9px] text-amber-300">
                <Star className="w-2.5 h-2.5 fill-amber-300 text-amber-300" />
                <span className="font-bold">{astro.rating}</span>
                <span className="text-slate-400 text-[8px]">({astro.reviews})</span>
              </div>
            </div>

            {/* Chat CTA Button */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-2.5 py-1 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-bold text-[10px] flex items-center gap-1 shadow-sm transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Chat</span>
            </a>
          </div>
        ))}
      </div>

      {/* In-App Bottom Navigation Bar */}
      <div className="relative z-10 -mx-3 -mb-3 bg-[#0a0518]/95 border-t border-purple-500/20 px-3 py-1.5 flex items-center justify-around text-[10px]">
        <div className="flex flex-col items-center text-slate-400">
          <HomeIcon className="w-3.5 h-3.5" />
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center text-amber-400 font-bold">
          <Radio className="w-3.5 h-3.5 text-amber-400" />
          <span>Live</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Chat</span>
        </div>
        <div className="flex flex-col items-center text-slate-400">
          <User className="w-3.5 h-3.5" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};
