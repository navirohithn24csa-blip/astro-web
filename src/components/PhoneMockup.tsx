import React from 'react';

interface PhoneMockupProps {
  children?: React.ReactNode;
  fallbackImage?: string;
  altText?: string;
  className?: string;
  screenTitle?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  fallbackImage,
  altText = "Astro Chat Screen",
  className = "",
  screenTitle,
}) => {
  return (
    <div
      className={`relative mx-auto w-[290px] sm:w-[320px] md:w-[340px] aspect-[9/19.2] bg-[#0c0a1a] rounded-[44px] p-2.5 sm:p-3 shadow-[0_25px_70px_-15px_rgba(112,38,206,0.35),0_10px_25px_-5px_rgba(0,0,0,0.5)] border-[3px] border-[#2b254a] transition-transform duration-500 hover:scale-[1.01] ${className}`}
    >
      {/* Outer Metallic Bezel Highlights */}
      <div className="absolute inset-0 rounded-[42px] pointer-events-none border border-white/10" />

      {/* Side Hardware Buttons */}
      <div className="absolute -left-[5px] top-24 w-[3px] h-9 bg-neutral-700 rounded-l-sm" />
      <div className="absolute -left-[5px] top-36 w-[3px] h-12 bg-neutral-700 rounded-l-sm" />
      <div className="absolute -right-[5px] top-28 w-[3px] h-14 bg-neutral-700 rounded-r-sm" />

      {/* Screen Area */}
      <div className="relative w-full h-full bg-[#070314] rounded-[36px] overflow-hidden flex flex-col text-white font-sans select-none border border-white/5">
        
        {/* Android Status Bar */}
        <div className="relative z-30 h-7 shrink-0 px-5 flex items-center justify-between text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm">
          <span>9:41</span>
          
          {/* Centered Camera Punch Hole */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-3.5 h-3.5 bg-black rounded-full border border-neutral-800 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#14142b] rounded-full" />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/90">
            {/* Cellular Signal (4 bars) */}
            <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill="currentColor">
              <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
              <rect x="4" y="6" width="2.5" height="6" rx="0.5" />
              <rect x="8" y="3" width="2.5" height="9" rx="0.5" />
              <rect x="12" y="0" width="2.5" height="12" rx="0.5" />
            </svg>
            {/* Wi-Fi Icon */}
            <svg className="w-3.5 h-3" viewBox="0 0 16 12" fill="currentColor">
              <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-4.24-3.54a6 6 0 0 1 8.48 0l-1.06 1.06a4.5 4.5 0 0 0-6.36 0L3.76 5.96zM1.29 3.49a9.5 9.5 0 0 1 13.42 0l-1.06 1.06a8 8 0 0 0-11.3 0L1.29 3.49z" />
            </svg>
            {/* Battery Capsule */}
            <div className="w-4 h-2.5 border border-white/80 rounded-[3px] p-[1px] flex items-center">
              <div className="w-full h-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content Scrollable Viewport */}
        <div className="relative flex-1 overflow-y-auto overflow-x-hidden no-scrollbar flex flex-col">
          {children ? (
            children
          ) : fallbackImage ? (
            <img
              src={fallbackImage}
              alt={altText}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex-1 flex items-center justify-center text-xs text-white/50 p-4 text-center">
              {screenTitle || "Screen Mockup"}
            </div>
          )}
        </div>

        {/* Android Gesture Navigation Bar */}
        <div className="relative z-30 h-4 shrink-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <div className="w-24 h-1 bg-white/40 rounded-full" />
        </div>
      </div>
    </div>
  );
};
