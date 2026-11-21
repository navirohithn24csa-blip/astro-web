import React, { useState } from 'react';
import { SAMPLE_REVIEWS } from '../../data/config';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export const Screen11Reviews: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? SAMPLE_REVIEWS.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === SAMPLE_REVIEWS.length - 1 ? 0 : i + 1));

  const current = SAMPLE_REVIEWS[index];

  return (
    <div className="relative flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0a0518] via-[#140828] to-[#1e0d3a] p-3 text-white overflow-hidden text-center">
      {/* Title */}
      <div className="relative z-10 pt-2 pb-1">
        <h3 className="font-bold text-xs tracking-wide text-white">What our users say</h3>
      </div>

      {/* Review Card with Lateral Chevrons */}
      <div className="relative z-10 my-auto flex items-center justify-between gap-1">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="w-6 h-6 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-200 hover:text-white shrink-0 transition"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>

        {/* Card */}
        <div className="flex-1 bg-slate-950/80 border border-purple-500/25 rounded-2xl p-3 backdrop-blur-md shadow-xl flex flex-col items-center space-y-2">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full border-2 border-purple-400/40 overflow-hidden bg-slate-800 shadow-md">
            <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
          </div>

          {/* Name & City */}
          <div>
            <h4 className="text-xs font-bold text-white">{current.name}</h4>
            <p className="text-[9px] text-purple-300">{current.city}</p>
          </div>

          {/* 5 Stars */}
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-[10px] text-slate-200 leading-relaxed italic px-1">
            "{current.text}"
          </p>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="w-6 h-6 rounded-full bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-purple-200 hover:text-white shrink-0 transition"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 py-1">
        {SAMPLE_REVIEWS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all ${
              i === index ? 'w-4 h-1.5 bg-white rounded-full' : 'w-1.5 h-1.5 bg-white/30 rounded-full'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
