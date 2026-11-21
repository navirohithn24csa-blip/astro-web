import React from 'react';
import { PLAY_STORE_URL, APP_STORE_URL } from '../data/config';
import { PhoneMockup } from './PhoneMockup';
import { Screen12Download } from './screens/Screen12Download';
import { Download, QrCode, CheckCircle2 } from 'lucide-react';

export const DownloadCTA: React.FC = () => {
  return (
    <section id="download" className="py-20 lg:py-28 bg-gradient-to-b from-white via-purple-50/40 to-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bold Text & Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <span>Zero Risk &bull; 100% Free Trial</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#151515] tracking-tight leading-[1.08]">
              Download Astro Chat.<br />
              <span className="bg-gradient-to-r from-[#7026CE] to-[#F59E0B] bg-clip-text text-transparent">
                It's free.
              </span>
            </h2>

            <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Start chatting with verified astrologers today. No subscriptions, no hidden fees, and your first consultation is completely on us.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto lg:mx-0 text-left pt-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#18A558]" />
                <span>Instant Android download</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#18A558]" />
                <span>First question 100% free</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#18A558]" />
                <span>Free 1-Month Kundli access</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#18A558]" />
                <span>24/7 Astrologer availability</span>
              </div>
            </div>

            {/* Badges & QR Code */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <div className="flex flex-col gap-2.5">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#151515] hover:bg-black text-white px-5 py-3 rounded-2xl transition shadow-md hover:scale-105"
                >
                  <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.85.9-1.35 1.6-.9l14 8.5c.7.45.7 1.45 0 1.9l-14 8.4c-.7.45-1.6-.05-1.6-.9z" fill="#00E676" />
                    <path d="M14.5 12L3 20.5c.4.3.9.3 1.4 0l12-7.3-1.9-1.2z" fill="#FF3D00" />
                    <path d="M3 3.5c0-.4.3-.8.7-.9l12.7 7.7-1.9 1.2-11.5-8z" fill="#00B0FF" />
                    <path d="M18.6 11.1l-2.2-1.3-2 1.2 2 1.2 2.2-1.3c.6-.4.6-1 0-1.4z" fill="#FFC107" />
                  </svg>
                  <div className="leading-none text-left">
                    <span className="text-[9px] text-slate-300 block uppercase font-medium">GET IT ON</span>
                    <span className="text-sm font-bold text-white block">Google Play</span>
                  </div>
                </a>

                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 bg-[#151515] hover:bg-black text-white px-5 py-3 rounded-2xl transition shadow-md hover:scale-105"
                >
                  <span className="text-2xl leading-none">🍎</span>
                  <div className="leading-none text-left">
                    <span className="text-[9px] text-slate-300 block font-medium">Download on the</span>
                    <span className="text-sm font-bold text-white block">App Store</span>
                  </div>
                </a>
              </div>

              {/* QR Code Container */}
              <div className="bg-white border-2 border-purple-200 p-3 rounded-2xl shadow-lg flex items-center gap-3">
                <div className="w-20 h-20 bg-slate-900 rounded-xl p-1 flex items-center justify-center text-white">
                  <QrCode className="w-full h-full text-white" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-[#151515] block">Scan with camera</span>
                  <span className="text-[11px] text-slate-500 block">Instant mobile install</span>
                  <span className="text-[10px] text-[#7026CE] font-bold block mt-1">Free on Android</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Phone Mockup showcasing Screen 12 */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup>
              <Screen12Download />
            </PhoneMockup>
          </div>

        </div>
      </div>
    </section>
  );
};
