import React, { useState } from 'react';
import { PLAY_STORE_URL, trackAnalyticsEvent } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { Screen5MatchMaker } from './screens/Screen5MatchMaker';
import { Screen1Home } from './screens/Screen1Home';
import { Sparkles, Download, CheckCircle2, Star, Heart, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'matchmaker' | 'home'>('matchmaker');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060314] via-[#0d0624] to-[#080418] pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Radiant Cosmic Star & Nebula Ambient Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[750px] bg-gradient-to-tr from-purple-800/30 via-amber-400/10 to-rose-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Screen Switcher Tabs */}
        <div className="mb-4 inline-flex items-center gap-1.5 p-1 rounded-full bg-[#160933]/90 border border-purple-500/35 backdrop-blur-xl shadow-lg z-20">
          <button
            type="button"
            onClick={() => setActiveScreen('matchmaker')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeScreen === 'matchmaker'
                ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-400" />
            <span>Match Maker</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveScreen('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeScreen === 'home'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/30'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-300" />
            <span>Home Dashboard</span>
          </button>
        </div>

        {/* 1. FIRST: Realistic Android Phone Mockup (Top Focal Point) */}
        <div className="relative flex justify-center w-full max-w-sm sm:max-w-md pb-8">
          {/* Subtle Ambient Cosmic Halo behind the phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 via-rose-500/20 to-amber-400/20 rounded-full filter blur-2xl transform scale-110 pointer-events-none" />

          {/* Floating Contextual Badges */}
          <div className="absolute top-8 -left-4 sm:-left-12 z-20 bg-[#160a33]/90 backdrop-blur-md border border-rose-500/40 p-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex items-center gap-2 animate-bounce">
            <span className="text-xl">❤️</span>
            <div className="leading-tight text-left">
              <span className="text-[10px] text-purple-300 block font-semibold uppercase">Kundli Milan</span>
              <span className="text-xs font-bold text-emerald-400 block">36 / 36 Guna Score</span>
            </div>
          </div>

          <div className="absolute bottom-16 -right-4 sm:-right-12 z-20 bg-[#160a33]/90 backdrop-blur-md border border-amber-500/40 p-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.6)] flex items-center gap-2">
            <span className="text-xl">✨</span>
            <div className="leading-tight text-left">
              <span className="text-[10px] text-purple-300 block font-semibold uppercase">Good Time</span>
              <span className="text-xs font-bold text-amber-300 block">10:30 AM – 12:00 PM</span>
            </div>
          </div>

          {/* Main Hero Phone running Screen 5 Match Maker (or Screen 1 Home) */}
          <PhoneMockup className="z-10 shadow-[0_30px_90px_rgba(112,38,206,0.45)]">
            {activeScreen === 'matchmaker' ? <Screen5MatchMaker /> : <Screen1Home />}
          </PhoneMockup>
        </div>

        {/* 2. BELOW: Detailed Text (Substantial Amount of Text, Not Brief) */}
        <div className="w-full max-w-3xl space-y-6 text-center pt-2">
          
          {/* Offer Badges */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-950/80 text-purple-200 font-bold text-xs sm:text-sm border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              First chat FREE
            </span>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-950/80 text-amber-300 font-bold text-xs sm:text-sm border border-amber-500/40 shadow-[0_0_15px_rgba(245,194,107,0.25)]">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              1 month FREE
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Ask the stars.<br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent filter drop-shadow-[0_0_25px_rgba(245,194,107,0.35)]">
              Get real answers.
            </span>
          </h1>

          {/* Detailed Description (Not Brief) */}
          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Your first consultation is 100% free with verified Vedic astrologers. Calculate high-precision Kundli birth charts, check couple compatibility with 36 Guna matching, discover your Pancha Pakshi daily biorhythm, and find your personalized auspicious timing windows. No subscriptions, no hidden charges, and real Vedic calculation data.
          </p>

          {/* Feature Highlights Grid (Substantial Content) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto text-left pt-1">
            <div className="bg-[#12072e]/80 border border-purple-500/30 rounded-xl p-2.5 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-300 block">36/36 Guna</span>
              <span className="text-[11px] text-slate-300 block">Kundli Milan Match</span>
            </div>
            <div className="bg-[#12072e]/80 border border-purple-500/30 rounded-xl p-2.5 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-300 block">Pancha Pakshi</span>
              <span className="text-[11px] text-slate-300 block">5 Daily Bird States</span>
            </div>
            <div className="bg-[#12072e]/80 border border-purple-500/30 rounded-xl p-2.5 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-300 block">Good Timings</span>
              <span className="text-[11px] text-slate-300 block">Color Heatmap Windows</span>
            </div>
            <div className="bg-[#12072e]/80 border border-purple-500/30 rounded-xl p-2.5 backdrop-blur-sm">
              <span className="text-xs font-bold text-amber-300 block">Verified Gurus</span>
              <span className="text-[11px] text-slate-300 block">24/7 Live Private Chat</span>
            </div>
          </div>

          {/* Main Action CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackAnalyticsEvent('download_click', { location: 'hero_primary_button' })}
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#7026CE] via-[#8B5CF6] to-[#A855F7] hover:from-[#5B1FA8] hover:to-[#7E22CE] text-white font-black text-base shadow-[0_10px_35px_rgba(112,38,206,0.5)] border border-purple-400/40 flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Astro Chat – Free</span>
            </a>
          </div>

          {/* Store Badges & Social Proof */}
          <div className="pt-2 flex flex-col items-center justify-center gap-3">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#0f0724] hover:bg-[#1a0c3b] text-white px-6 py-3 rounded-2xl border border-purple-500/30 transition shadow-lg hover:scale-105"
            >
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.85.9-1.35 1.6-.9l14 8.5c.7.45.7 1.45 0 1.9l-14 8.4c-.7.45-1.6-.05-1.6-.9z" fill="#00E676" />
                <path d="M14.5 12L3 20.5c.4.3.9.3 1.4 0l12-7.3-1.9-1.2z" fill="#FF3D00" />
                <path d="M3 3.5c0-.4.3-.8.7-.9l12.7 7.7-1.9 1.2-11.5-8z" fill="#00B0FF" />
                <path d="M18.6 11.1l-2.2-1.3-2 1.2 2 1.2 2.2-1.3c.6-.4.6-1 0-1.4z" fill="#FFC107" />
              </svg>
              <div className="leading-none text-left">
                <span className="text-[9px] text-slate-400 block uppercase font-medium">GET IT ON</span>
                <span className="text-sm font-bold text-white block">Google Play</span>
              </div>
            </a>

            {/* Verified Trust Tag */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required &bull; 100% Free Trial</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
