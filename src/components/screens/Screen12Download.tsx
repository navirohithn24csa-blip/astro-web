import React from 'react';
import { PLAY_STORE_URL } from '../../data/config';
import { QrCode } from 'lucide-react';

export const Screen12Download: React.FC = () => {
  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#060212] via-[#0f0622] to-[#180a33] p-3 text-white overflow-hidden text-center">
      {/* 3-Line Headline */}
      <div className="relative z-10 pt-4 space-y-0.5">
        <h2 className="text-base font-extrabold leading-tight">
          <span className="text-white block">Download</span>
          <span className="text-amber-300 block text-lg font-black">Astro Chat.</span>
          <span className="text-white block">It's free.</span>
        </h2>
      </div>

      {/* Centered Store Badge & QR Code */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center gap-4 px-2">
        {/* Google Play Badge */}
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-black border border-white/20 px-4 py-2 rounded-xl shadow-lg hover:border-amber-400/50 transition text-left"
        >
          {/* Play Triangle Icon */}
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
            <path d="M3 20.5v-17c0-.85.9-1.35 1.6-.9l14 8.5c.7.45.7 1.45 0 1.9l-14 8.4c-.7.45-1.6-.05-1.6-.9z" fill="#00E676" />
            <path d="M14.5 12L3 20.5c.4.3.9.3 1.4 0l12-7.3-1.9-1.2z" fill="#FF3D00" />
            <path d="M3 3.5c0-.4.3-.8.7-.9l12.7 7.7-1.9 1.2-11.5-8z" fill="#00B0FF" />
            <path d="M18.6 11.1l-2.2-1.3-2 1.2 2 1.2 2.2-1.3c.6-.4.6-1 0-1.4z" fill="#FFC107" />
          </svg>
          <div className="leading-none">
            <span className="text-[8px] text-slate-300 block uppercase font-medium">GET IT ON</span>
            <span className="text-xs font-bold text-white block">Google Play</span>
          </div>
        </a>

        {/* QR Code Tile */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-xl bg-white p-2 flex items-center justify-center shadow-2xl">
            {/* High fidelity QR representation */}
            <QrCode className="w-full h-full text-slate-950" />
          </div>
          <span className="text-[9px] text-slate-300 font-medium tracking-wide mt-1.5">
            Scan to Download
          </span>
        </div>
      </div>

      {/* Cosmic Earth Horizon Vista Graphic */}
      <div className="relative z-0 h-16 -mx-3 -mb-3 flex items-end justify-center overflow-hidden">
        {/* Curvature of Earth with atmospheric blue & golden glow */}
        <div className="w-[140%] h-24 rounded-t-[100%] bg-gradient-to-t from-sky-950 via-[#0e1b40] to-transparent border-t-2 border-cyan-400/80 shadow-[0_-15px_30px_rgba(6,182,212,0.4)] relative">
          <div className="absolute top-0 left-1/4 w-24 h-4 bg-amber-400/80 blur-md rounded-full" />
        </div>
      </div>
    </div>
  );
};
