import React from 'react';
import { PLAY_STORE_URL, APP_STORE_URL } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { Screen1Home } from './screens/Screen1Home';
import { Sparkles, Download, CheckCircle2, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060314] via-[#0d0624] to-[#080418] pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Radiant Cosmic Star & Nebula Ambient Effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-800/25 via-amber-400/10 to-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* 1. FIRST: Realistic Android Phone Mockup (Top / First visual showcase) */}
        <div className="relative flex justify-center w-full max-w-sm sm:max-w-md pt-2 pb-8">
          {/* Subtle Ambient Cosmic Halo behind the phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 via-amber-400/20 to-purple-800/30 rounded-full filter blur-2xl transform scale-110 pointer-events-none" />

          {/* Floating Contextual Badges */}
          <div className="absolute -top-1 -left-4 sm:-left-12 z-20 bg-[#160a33]/90 backdrop-blur-md border border-purple-500/40 p-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-2 animate-bounce">
            <span className="text-xl">♈</span>
            <div className="leading-tight text-left">
              <span className="text-[10px] text-purple-300 block font-semibold uppercase">Today's Energy</span>
              <span className="text-xs font-bold text-amber-300 block">Aries: Auspicious</span>
            </div>
          </div>

          <div className="absolute bottom-10 -right-4 sm:-right-12 z-20 bg-[#160a33]/90 backdrop-blur-md border border-amber-500/40 p-2.5 rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex items-center gap-2">
            <span className="text-xl">✨</span>
            <div className="leading-tight text-left">
              <span className="text-[10px] text-purple-300 block font-semibold uppercase">Good Time</span>
              <span className="text-xs font-bold text-emerald-400 block">10:30 AM – 12:00 PM</span>
            </div>
          </div>

          {/* Main Hero Phone running Screen 1 Home */}
          <PhoneMockup className="z-10 shadow-[0_30px_90px_rgba(112,38,206,0.45)]">
            <Screen1Home />
          </PhoneMockup>
        </div>

        {/* 2. BELOW: Headlines, Offers, Description, and Download CTAs */}
        <div className="w-full max-w-3xl space-y-6 text-center pt-4">
          
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

          {/* Description */}
          <p className="text-base sm:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Your first chat is free. Your first month is free. Connect with verified Vedic astrologers, calculate real birth charts, and find lucky timings right now.
          </p>

          {/* Main Action CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#7026CE] via-[#8B5CF6] to-[#A855F7] hover:from-[#5B1FA8] hover:to-[#7E22CE] text-white font-black text-base shadow-[0_10px_35px_rgba(112,38,206,0.5)] border border-purple-400/40 flex items-center justify-center gap-2 hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Astro Chat – Free</span>
            </a>
          </div>

          {/* Store Badges & Social Proof */}
          <div className="pt-2 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Google Play Button */}
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#0f0724] hover:bg-[#1a0c3b] text-white px-5 py-2.5 rounded-2xl border border-purple-500/30 transition shadow-lg hover:scale-105"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.85.9-1.35 1.6-.9l14 8.5c.7.45.7 1.45 0 1.9l-14 8.4c-.7.45-1.6-.05-1.6-.9z" fill="#00E676" />
                  <path d="M14.5 12L3 20.5c.4.3.9.3 1.4 0l12-7.3-1.9-1.2z" fill="#FF3D00" />
                  <path d="M3 3.5c0-.4.3-.8.7-.9l12.7 7.7-1.9 1.2-11.5-8z" fill="#00B0FF" />
                  <path d="M18.6 11.1l-2.2-1.3-2 1.2 2 1.2 2.2-1.3c.6-.4.6-1 0-1.4z" fill="#FFC107" />
                </svg>
                <div className="leading-none text-left">
                  <span className="text-[8px] text-slate-400 block uppercase font-medium">GET IT ON</span>
                  <span className="text-xs font-bold text-white block">Google Play</span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-[#0f0724] hover:bg-[#1a0c3b] text-white px-5 py-2.5 rounded-2xl border border-purple-500/30 transition shadow-lg hover:scale-105"
              >
                <span className="text-xl leading-none">🍎</span>
                <div className="leading-none text-left">
                  <span className="text-[8px] text-slate-400 block font-medium">Download on the</span>
                  <span className="text-xs font-bold text-white block">App Store</span>
                </div>
              </a>
            </div>

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
