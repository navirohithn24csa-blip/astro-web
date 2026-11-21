import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeatureSectionProps {
  sectionId?: string;
  pillTag?: string;
  title: string;
  subtitle?: string;
  description: string;
  checklist?: string[];
  ctaText: string;
  ctaUrl: string;
  offerText?: string;
  reversed?: boolean;
  bgColor?: string;
  children: React.ReactNode;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  sectionId,
  pillTag,
  title,
  subtitle,
  description,
  checklist,
  ctaText,
  ctaUrl,
  offerText,
  reversed = false,
  bgColor = "bg-white",
  children,
}) => {
  return (
    <section id={sectionId} className={`py-16 sm:py-24 ${bgColor} border-t border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-8 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`lg:col-span-6 space-y-6 text-center lg:text-left ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            
            {pillTag && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-[#7026CE] text-xs font-bold uppercase tracking-wider">
                <span>{pillTag}</span>
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#151515] tracking-tight leading-[1.12]">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#7026CE] to-[#A855F7] bg-clip-text text-transparent">
                  {subtitle}
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {checklist && checklist.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#18A558] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#7026CE] hover:bg-[#5b1fa8] text-white font-extrabold text-sm shadow-lg shadow-purple-600/25 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {offerText && (
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
                  {offerText}
                </span>
              )}
            </div>
          </div>

          {/* Smartphone Frame Showcase Column */}
          <div className={`lg:col-span-6 flex justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200/40 via-amber-100/30 to-transparent rounded-full filter blur-2xl transform scale-110 pointer-events-none" />
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
