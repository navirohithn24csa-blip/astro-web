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
import { Screen1Home } from './components/screens/Screen1Home';
import { Screen2LifePrediction } from './components/screens/Screen2LifePrediction';
import { Screen3PanchaPakshi } from './components/screens/Screen3PanchaPakshi';
import { Screen4GoodTime } from './components/screens/Screen4GoodTime';
import { Screen5MatchMaker } from './components/screens/Screen5MatchMaker';
import { Screen6LiveAstrologers } from './components/screens/Screen6LiveAstrologers';
import { Screen7Matrimony } from './components/screens/Screen7Matrimony';
import { Screen9HowItWorks } from './components/screens/Screen9HowItWorks';
import { Screen10OfferGate } from './components/screens/Screen10OfferGate';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#151515] flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Screen 1 Showcase: Home Dashboard */}
        <FeatureSection
          sectionId="features"
          pillTag="Home Dashboard"
          title="All of Vedic Astrology. In one app."
          subtitle="Ask the stars. Get real answers."
          description="Access life prediction, Pancha Pakshi, lucky time heatmap, couple match maker, verified astrologers, and horoscope matrimony right from your fingertips."
          checklist={[
            "First chat 100% free",
            "First month free access",
            "Vedic calculation algorithms",
            "Verified live astrologers"
          ]}
          ctaText="Get Started Free"
          ctaUrl={PLAY_STORE_URL}
          offerText="Try Free in Astro Chat"
          reversed={false}
          bgColor="bg-white"
        >
          <PhoneMockup>
            <Screen1Home />
          </PhoneMockup>
        </FeatureSection>

        {/* 4. Screen 2 Showcase: Life Prediction */}
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
          bgColor="bg-[#FAF8FF]"
        >
          <PhoneMockup>
            <Screen2LifePrediction />
          </PhoneMockup>
        </FeatureSection>

        {/* 5. Screen 3 Showcase: Pancha Pakshi */}
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
          bgColor="bg-white"
        >
          <PhoneMockup>
            <Screen3PanchaPakshi />
          </PhoneMockup>
        </FeatureSection>

        {/* 6. Screen 4 Showcase: Good Time Finder */}
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
          bgColor="bg-[#FFFDF9]"
        >
          <PhoneMockup>
            <Screen4GoodTime />
          </PhoneMockup>
        </FeatureSection>

        {/* 7. Screen 5 Showcase: Match Maker */}
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
          bgColor="bg-white"
        >
          <PhoneMockup>
            <Screen5MatchMaker />
          </PhoneMockup>
        </FeatureSection>

        {/* 8. Screen 6 Showcase: Live Astrologers */}
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
          bgColor="bg-[#F8F5FF]"
        >
          <PhoneMockup>
            <Screen6LiveAstrologers />
          </PhoneMockup>
        </FeatureSection>

        {/* 9. Screen 7 Showcase: Matrimony */}
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
          bgColor="bg-white"
        >
          <PhoneMockup>
            <Screen7Matrimony />
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
          reversed={true}
          bgColor="bg-[#FAF8FF]"
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
          reversed={false}
          bgColor="bg-white"
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
