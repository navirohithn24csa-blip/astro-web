/**
 * Astro Chat - Global Configuration
 * 
 * CENTRALIZED PLAY STORE LISTING URL:
 * Update this single variable when your production Google Play Store listing is live!
 */
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.astrochat.astrology";

/**
 * App Store Listing URL (placeholder for iOS launch)
 */
export const APP_STORE_URL = "https://apps.apple.com/app/astro-chat/id6470000000";

/**
 * Astro Chat Brand Metadata
 */
export const BRAND_CONFIG = {
  appName: "Astro Chat",
  appTagline: "Ask the stars. Get real answers.",
  appDescription: "Your first chat is free. Your first month is free.",
  packageName: "com.astrochat.astrology",
  contactEmail: "navirohithn2006@gmail.com",
  currentYear: 2026,
};

/**
 * Safe Google Analytics 4 (GA4) Event Tracker
 */
export const trackAnalyticsEvent = (
  eventName: string,
  eventParams: Record<string, any> = {}
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, eventParams);
    } catch (e) {
      // silently ignore analytics errors in dev
    }
  }
};

/**
 * Sample User Reviews from Google Play (Illustrative Placeholders)
 * Marked for replacement with live Google Play API / verified reviews.
 */
export interface ReviewData {
  id: string;
  name: string;
  city: string;
  avatar: string;
  rating: number;
  text: string;
  tag: string;
  isSamplePlaceholder: boolean;
}

export const SAMPLE_REVIEWS: ReviewData[] = [
  {
    id: "rev-1",
    name: "Divya S.",
    city: "Chennai",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I tried the 1 month free. It showed personalized good timings for every kind of work. Super useful.",
    tag: "Good Time Finder",
    isSamplePlaceholder: true,
  },
  {
    id: "rev-2",
    name: "Rahul M.",
    city: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "It actually predicted what happened. I was shocked. Awesome!",
    tag: "Life Prediction",
    isSamplePlaceholder: true,
  },
  {
    id: "rev-3",
    name: "Ananya K.",
    city: "Mumbai",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The astrologer helped me get through a tough phase. The remedies were simple and clear.",
    tag: "Live Astrologer Consultation",
    isSamplePlaceholder: true,
  },
  {
    id: "rev-4",
    name: "Karthik & Sneha",
    city: "Coimbatore",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "We got married after using the match maker. It showed the real calculation data, not just a number. Thank you Astro Chat!",
    tag: "Match Maker & Matrimony",
    isSamplePlaceholder: true,
  },
  {
    id: "rev-5",
    name: "Vikram P.",
    city: "Hyderabad",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "It's so cheap, almost free. Life changing.",
    tag: "Free Trial & Coins",
    isSamplePlaceholder: true,
  },
];
