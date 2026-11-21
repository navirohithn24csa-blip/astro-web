import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { ChevronLeft, Filter, Bookmark, Sparkles, Home as HomeIcon, Heart, MessageSquare, User, Send } from 'lucide-react';

export const Screen7Matrimony: React.FC = () => {
  const profiles = [
    {
      name: 'Ananya, 26',
      match: 'Match 88%',
      profession: 'B.E. • Software Engineer',
      location: 'Chennai, Tamil Nadu',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
    },
    {
      name: 'Karthik, 29',
      match: 'Match 86%',
      profession: 'M.E. • Project Manager',
      location: 'Bengaluru, Karnataka',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    },
  ];

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0c051a] via-[#160a2c] to-[#1e0d3a] p-3 text-white overflow-hidden">
      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-1">
        <ChevronLeft className="w-5 h-5 text-white/90" />
        <h3 className="font-bold text-xs tracking-wide text-white">Matrimony</h3>
        <Filter className="w-4 h-4 text-white/90" />
      </div>

      {/* Subtitle */}
      <div className="relative z-10 text-center px-1 my-0.5">
        <p className="text-[10px] text-purple-200/80 leading-snug">
          Horoscope-matched profiles so you start with compatibility already checked.
        </p>
      </div>

      {/* Profile Cards */}
      <div className="relative z-10 space-y-2 my-1 flex-1">
        {profiles.map((p) => (
          <div
            key={p.name}
            className="bg-slate-950/80 border border-purple-500/25 rounded-2xl p-2.5 shadow-lg backdrop-blur-md space-y-2 hover:border-purple-400/40 transition"
          >
            <div className="flex items-start gap-2.5">
              {/* Photo & Bookmark */}
              <div className="flex flex-col items-center gap-1 shrink-0">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-purple-400/30 bg-slate-800">
                  <img src={p.avatar} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <Bookmark className="w-3.5 h-3.5 text-purple-300 hover:text-amber-300 transition cursor-pointer" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 truncate">
                    <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
                    <h4 className="text-[11px] font-bold text-white truncate">{p.name}</h4>
                  </div>
                  <span className="text-[9px] font-bold bg-emerald-500 text-white px-2 py-0.5 rounded-full shadow-sm shrink-0">
                    {p.match}
                  </span>
                </div>
                <p className="text-[9px] text-purple-200 mt-1 truncate">{p.profession}</p>
                <p className="text-[9px] text-slate-400 truncate">{p.location}</p>

                {/* Send Interest CTA */}
                <div className="pt-1.5 flex justify-end">
                  <a
                    href={PLAY_STORE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[9px] font-semibold flex items-center gap-1 shadow-sm transition"
                  >
                    <Send className="w-2.5 h-2.5" />
                    <span>Send Interest</span>
                  </a>
                </div>
              </div>
            </div>
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
          <Heart className="w-3.5 h-3.5 fill-amber-400" />
          <span>Matrimony</span>
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
