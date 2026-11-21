import React from 'react';
import { PLAY_STORE_URL, APP_STORE_URL } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { Screen8AstrologerChat } from './screens/Screen8AstrologerChat';
import { Sparkles, Download, CheckCircle2, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle Pastel Ambient Blobs (Apple Style) */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 left-[-100px] w-[400px] h-[400px] bg-amber-50/80 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Zomato/Apple bold marketing copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Offer Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-purple-50 text-[#7026CE] font-bold text-xs border border-purple-200 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                First chat FREE
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 font-bold text-xs border border-amber-200 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                1 month FREE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.08]">
              Ask the stars.<br />
              <span className="bg-gradient-to-r from-[#7026CE] via-[#9333EA] to-[#F59E0B] bg-clip-text text-transparent">
                Get real answers.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Your first chat is free. Your first month is free. Connect with verified Vedic astrologers, calculate real birth charts, and find lucky timings right now.
            </p>

            {/* CTA Button Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7026CE] hover:bg-[#5b1fa8] text-white font-extrabold text-base shadow-xl shadow-purple-600/30 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Download Astro Chat – Free</span>
              </a>
            </div>

            {/* Store Badges & Social Proof */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-3">
                {/* Google Play Button */}
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#151515] hover:bg-black text-white px-4 py-2 rounded-xl transition shadow-sm"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.85.9-1.35 1.6-.9l14 8.5c.7.45.7 1.45 0 1.9l-14 8.4c-.7.45-1.6-.05-1.6-.9z" fill="#00E676" />
                    <path d="M14.5 12L3 20.5c.4.3.9.3 1.4 0l12-7.3-1.9-1.2z" fill="#FF3D00" />
                    <path d="M3 3.5c0-.4.3-.8.7-.9l12.7 7.7-1.9 1.2-11.5-8z" fill="#00B0FF" />
                    <path d="M18.6 11.1l-2.2-1.3-2 1.2 2 1.2 2.2-1.3c.6-.4.6-1 0-1.4z" fill="#FFC107" />
                  </svg>
                  <div className="leading-none text-left">
                    <span className="text-[8px] text-slate-300 block uppercase font-medium">GET IT ON</span>
                    <span className="text-xs font-bold text-white block">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#151515] hover:bg-black text-white px-4 py-2 rounded-xl transition shadow-sm"
                >
                  <span className="text-lg leading-none">🍎</span>
                  <div className="leading-none text-left">
                    <span className="text-[8px] text-slate-300 block font-medium">Download on the</span>
                    <span className="text-xs font-bold text-white block">App Store</span>
                  </div>
                </a>
              </div>

              {/* Verified Trust Tag */}
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#18A558]" />
                <span>No credit card required &bull; 100% Free Trial</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup with floating zodiac cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient Purple Radial Glow behind phone */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-amber-400/15 to-transparent rounded-full filter blur-2xl transform scale-110 pointer-events-none" />

            {/* Floating Zodiac Badges */}
            <div className="absolute -top-4 -left-4 sm:left-4 z-20 bg-white/90 backdrop-blur-md border border-purple-100 p-2.5 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
              <span className="text-xl">♈</span>
              <div className="leading-tight text-left">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Today's Energy</span>
                <span className="text-xs font-bold text-purple-900 block">Aries: Auspicious</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 sm:right-6 z-20 bg-white/90 backdrop-blur-md border border-amber-100 p-2.5 rounded-2xl shadow-xl flex items-center gap-2">
              <span className="text-xl">✨</span>
              <div className="leading-tight text-left">
                <span className="text-[10px] text-slate-400 block font-semibold uppercase">Good Time</span>
                <span className="text-xs font-bold text-emerald-600 block">10:30 AM – 12:00 PM</span>
              </div>
            </div>

            {/* Main Phone Mockup hosting Astrologer Chat Screen */}
            <PhoneMockup className="z-10">
              <Screen8AstrologerChat />
            </PhoneMockup>
          </div>

        </div>
      </div>
    </section>
  );
};
