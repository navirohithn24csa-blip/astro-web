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
  bgColor = "bg-gradient-to-b from-[#060314] via-[#0d0626] to-[#08041a]",
  children,
}) => {
  return (
    <section id={sectionId} className={`py-16 sm:py-24 ${bgColor} border-t border-purple-900/30 overflow-hidden relative`}>
      {/* Subtle Cosmic Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-purple-900/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-8 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`lg:col-span-6 space-y-6 text-center lg:text-left ${reversed ? 'lg:order-2' : 'lg:order-1'}`}>
            
            {pillTag && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <span>{pillTag}</span>
              </div>
            )}

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
                {title}
              </h2>
              {subtitle && (
                <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-300 via-purple-300 to-amber-200 bg-clip-text text-transparent">
                  {subtitle}
                </p>
              )}
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            {checklist && checklist.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-2.5 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#7026CE] via-[#8B5CF6] to-[#A855F7] hover:from-[#5B1FA8] hover:to-[#7E22CE] text-white font-black text-sm shadow-[0_8px_30px_rgba(112,38,206,0.45)] border border-purple-400/30 flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {offerText && (
                <span className="text-xs font-semibold text-amber-300 bg-purple-950/80 px-3.5 py-1.5 rounded-full border border-purple-500/40">
                  {offerText}
                </span>
              )}
            </div>
          </div>

          {/* Smartphone Frame Showcase Column */}
          <div className={`lg:col-span-6 flex justify-center ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative">
              {/* Subtle ambient lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-amber-400/15 to-transparent rounded-full filter blur-3xl transform scale-125 pointer-events-none" />
              {children}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
