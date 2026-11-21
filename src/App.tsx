import React from 'react';
import { PLAY_STORE_URL } from './data/config';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { FeatureSection } from './components/FeatureSection';
import { PhoneMockup } from './components/PhoneMockup';
import { GoogleReviews } from './components/GoogleReviews';
import { DownloadCTA } from './components/DownloadCTA';
import { StickyDownloadBar } from './components/StickyDownloadBar';
import { Footer } from './components/Footer';

// 12 Individual Screen Components
import { Screen2LifePrediction } from './components/screens/Screen2LifePrediction';
import { Screen3PanchaPakshi } from './components/screens/Screen3PanchaPakshi';
import { Screen4GoodTime } from './components/screens/Screen4GoodTime';
import { Screen5MatchMaker } from './components/screens/Screen5MatchMaker';
import { Screen6LiveAstrologers } from './components/screens/Screen6LiveAstrologers';
import { Screen7Matrimony } from './components/screens/Screen7Matrimony';
import { Screen8AstrologerChat } from './components/screens/Screen8AstrologerChat';
import { Screen9HowItWorks } from './components/screens/Screen9HowItWorks';
import { Screen10OfferGate } from './components/screens/Screen10OfferGate';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#060314] text-white flex flex-col font-sans selection:bg-purple-900 selection:text-amber-300">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section: Showcases Screen 1 (Home) FIRST at top, with marketing text below */}
        <HeroSection />

        {/* 3. Screen 2 Showcase: Life Prediction */}
        <FeatureSection
          sectionId="life-prediction"
          pillTag="Life Prediction"
          title="Your life. Calculated, not guessed."
          subtitle="Vedic calculation algorithms from real birth data."
          description="Understand the exact astrological trajectory of your Career, Love, Health, and Finances. Built from high-precision planetary ephemeris, not generic sun signs."
          checklist={[
            "Career & business trends",
            "Love & marriage compatibility",
            "Health & vital energy forecast",
            "Financial wealth windows"
          ]}
          ctaText="Get My Life Report"
          ctaUrl={PLAY_STORE_URL}
          offerText="Try free in Astro Chat"
          reversed={true}
          bgColor="bg-gradient-to-b from-[#080418] via-[#0e0728] to-[#070316]"
        >
          <PhoneMockup>
            <Screen2LifePrediction />
          </PhoneMockup>
        </FeatureSection>

        {/* 4. Screen 3 Showcase: Pancha Pakshi */}
        <FeatureSection
          sectionId="pancha-pakshi"
          pillTag="Ancient Tamil Wisdom"
          title="Pancha Pakshi. Loved by thousands."
          subtitle="The ancient bird-based system, now in your pocket."
          description="Discover your personal ruling bird based on your birth star. Follow your 5 daily biorhythmic states — Rule, Eat, Walk, Sleep, and Die — to act when your cosmic energy is at its absolute peak."
          checklist={[
            "Rule (Peak strength for contracts)",
            "Eat (Auspicious for meetings)",
            "Walk (Smooth travel & routine)",
            "Sleep & Die (Rest and caution)"
          ]}
          ctaText="Check Today's Status"
          ctaUrl={PLAY_STORE_URL}
          reversed={false}
          bgColor="bg-gradient-to-b from-[#070316] via-[#10082d] to-[#080419]"
        >
          <PhoneMockup>
            <Screen3PanchaPakshi />
          </PhoneMockup>
        </FeatureSection>

        {/* 5. Screen 4 Showcase: Good Time Finder */}
        <FeatureSection
          sectionId="good-time"
          pillTag="Auspicious Timings"
          title="Your good time. Only yours."
          subtitle="Personalized lucky timings for every kind of work."
          description="Never miss an auspicious window. Our color-coded heatmap highlights peak productive hours for new job offers, major investments, travel, and new beginnings while alerting you to Rahu Kaalam."
          checklist={[
            "Hourly green/yellow/red heatmaps",
            "Dynamic best-time tooltips",
            "Avoid inauspicious hours",
            "Customized to your GPS city"
          ]}
          ctaText="Find My Lucky Time"
          ctaUrl={PLAY_STORE_URL}
          reversed={true}
          bgColor="bg-gradient-to-b from-[#080419] via-[#120932] to-[#070317]"
        >
          <PhoneMockup>
            <Screen4GoodTime />
          </PhoneMockup>
        </FeatureSection>

        {/* 6. Screen 5 Showcase: Match Maker */}
        <FeatureSection
          sectionId="match-maker"
          pillTag="Kundli Milan"
          title="Two charts. One honest score."
          subtitle="Check compatibility for any couple using real calculation data."
          description="Comprehensive 36 Guna Ashta-Koota analysis. Compare lagna charts, analyze Nadi and Rasi compatibility, and check Manglik / Kuja dosha instantly before taking the big step."
          checklist={[
            "36/36 Guna Ashta-Koota score",
            "Manglik Dosha detection",
            "Nadi & Rasi harmony check",
            "Practical Vedic remedies"
          ]}
          ctaText="Check Compatibility"
          ctaUrl={PLAY_STORE_URL}
          reversed={false}
          bgColor="bg-gradient-to-b from-[#070317] via-[#11072e] to-[#08041a]"
        >
          <PhoneMockup>
            <Screen5MatchMaker />
          </PhoneMockup>
        </FeatureSection>

        {/* 7. Screen 6 Showcase: Live Astrologers */}
        <FeatureSection
          sectionId="astrologers"
          pillTag="Verified Experts"
          title="Talk to a real astrologer. Right now."
          subtitle="Live chat and call with verified masters."
          description="Consult verified practitioners of Vedic Astrology, Numerology, Tarot, and Lal Kitab. Get compassionate, honest answers and practical remedies you can actually follow."
          checklist={[
            "Sri Raman (25+ Yrs, Tamil/English)",
            "Priya Devi (12+ Yrs, Hindi/English)",
            "Arun Kumar (18+ Yrs, Tamil/Kannada)",
            "Instant 1-on-1 private messaging"
          ]}
          ctaText="Chat with Astrologer"
          ctaUrl={PLAY_STORE_URL}
          reversed={true}
          bgColor="bg-gradient-to-b from-[#08041a] via-[#140835] to-[#070318]"
        >
          <PhoneMockup>
            <Screen6LiveAstrologers />
          </PhoneMockup>
        </FeatureSection>

        {/* 8. Screen 7 Showcase: Matrimony */}
        <FeatureSection
          sectionId="matrimony"
          pillTag="Horoscope Matrimony"
          title="Find your person."
          subtitle="Horoscope-matched profiles so compatibility is already checked."
          description="Browse curated singles whose natal charts naturally harmonize with yours. Start your relationship journey with cosmic compatibility already verified."
          checklist={[
            "Pre-verified compatibility match score",
            "Community and educational details",
            "Direct interest dispatch",
            "Safe, private, and respectful"
          ]}
          ctaText="Browse Matrimony Profiles"
          ctaUrl={PLAY_STORE_URL}
          reversed={false}
          bgColor="bg-gradient-to-b from-[#070318] via-[#120830] to-[#08041b]"
        >
          <PhoneMockup>
            <Screen7Matrimony />
          </PhoneMockup>
        </FeatureSection>

        {/* 9. Screen 8 Showcase: Astrologer Consultation Chat */}
        <FeatureSection
          sectionId="chat"
          pillTag="Private 1-on-1 Consultation"
          title="Instant Astrologer Chat."
          subtitle="Ask any question. Get honest, confidential answers."
          description="Direct private chat room with your chosen astrologer. Real-time translation across English, Hindi, Tamil, Telugu, and Kannada, voice notes support, and clear remedies you can follow immediately."
          checklist={[
            "First consultation question 100% FREE",
            "Instant multi-language translation",
            "Audio voice note support",
            "Confidential end-to-end private rooms"
          ]}
          ctaText="Download to Start Chatting"
          ctaUrl={PLAY_STORE_URL}
          offerText="First chat is FREE"
          reversed={true}
          bgColor="bg-gradient-to-b from-[#08041b] via-[#130833] to-[#070316]"
        >
          <PhoneMockup>
            <Screen8AstrologerChat />
          </PhoneMockup>
        </FeatureSection>

        {/* 10. Screen 9 Showcase: How It Works */}
        <FeatureSection
          sectionId="how-it-works"
          pillTag="Simple 3-Step Process"
          title="How Astro Chat Works"
          subtitle="From birth details to personalized guidance in minutes."
          description="Three effortless steps to begin your journey. Enter your birth details, receive your complete Kundli and free astrologer consultation, and follow personalized timings and remedies."
          checklist={[
            "1. Enter birth date, time & city",
            "2. Get your free chart & first chat",
            "3. Follow your good times & remedies"
          ]}
          ctaText="Download & Get Started"
          ctaUrl={PLAY_STORE_URL}
          reversed={false}
          bgColor="bg-gradient-to-b from-[#070316] via-[#11072d] to-[#080419]"
        >
          <PhoneMockup>
            <Screen9HowItWorks />
          </PhoneMockup>
        </FeatureSection>

        {/* 11. Screen 10 Showcase: Free Offer Gate */}
        <FeatureSection
          sectionId="offer"
          pillTag="Free Offer"
          title="First chat free. First month free. No tricks."
          subtitle="Experience all premium features with zero commitment."
          description="We believe in the accuracy of our Vedic algorithms and verified astrologers. That's why your first consultation and first full month of horoscopes are completely free."
          checklist={[
            "Chat with verified astrologers",
            "Get your horoscope & life report",
            "Find lucky timings & remedies",
            "Try all premium features"
          ]}
          ctaText="Download Astro Chat – Free"
          ctaUrl={PLAY_STORE_URL}
          reversed={true}
          bgColor="bg-gradient-to-b from-[#080419] via-[#140938] to-[#08041a]"
        >
          <PhoneMockup>
            <Screen10OfferGate />
          </PhoneMockup>
        </FeatureSection>

        {/* 12. Screen 11 Showcase & Google Reviews Trust Section */}
        <GoogleReviews />

        {/* 13. Screen 12 Showcase & Final Download CTA */}
        <DownloadCTA />
      </main>

      {/* Sticky Mobile Download Bar */}
      <StickyDownloadBar />

      {/* Footer */}
      <Footer />

    </div>
  );
};
