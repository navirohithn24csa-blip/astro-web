import React, { useState } from 'react';
import { PLAY_STORE_URL, SAMPLE_REVIEWS } from '../data/config';
import { Star, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export const GoogleReviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? SAMPLE_REVIEWS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === SAMPLE_REVIEWS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Play Branding */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            {/* Google Multicolor 'G' */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.44 7.36 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.04 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.27 2.56 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span className="text-xs font-bold text-slate-700 tracking-wide">Google Play Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] tracking-tight">
            What our users say
          </h2>

          <p className="text-base text-slate-500">
            Real feedback from seekers across India finding life clarity, lucky timings, and accurate Kundli predictions.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {SAMPLE_REVIEWS.map((review) => (
                <div key={review.id} className="w-full shrink-0 px-4">
                  <div className="bg-[#FFFDF9] border border-amber-200/60 rounded-3xl p-8 sm:p-10 shadow-lg shadow-amber-900/5 text-center flex flex-col items-center space-y-4">
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed max-w-2xl italic">
                      "{review.text}"
                    </p>

                    {/* Reviewer Details */}
                    <div className="flex items-center gap-3 pt-2">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 shadow-sm"
                      />
                      <div className="text-left">
                        <h4 className="font-extrabold text-[#151515] text-base">{review.name}</h4>
                        <p className="text-xs text-slate-500 font-medium">{review.city} &bull; <span className="text-[#7026CE] font-semibold">{review.tag}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Arrows */}
          <button
            type="button"
            onClick={prevReview}
            aria-label="Previous review"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-slate-50 hover:text-[#7026CE] transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={nextReview}
            aria-label="Next review"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-700 shadow-md flex items-center justify-center hover:bg-slate-50 hover:text-[#7026CE] transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {SAMPLE_REVIEWS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all ${
                  i === currentIndex
                    ? 'w-8 h-2.5 bg-[#7026CE] rounded-full'
                    : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Read Reviews on Google Play Button */}
        <div className="mt-10 text-center space-y-2">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm shadow-sm transition hover:scale-105"
          >
            <span>Read Reviews on Google Play</span>
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
          <p className="text-[11px] text-slate-400 font-normal">
            * Sample user experiences shown above for illustration. Real ratings and reviews available on the Google Play Store.
          </p>
        </div>

      </div>
    </section>
  );
};
