# 🔮 AstroChat - Celestial Astrologer Consultations & AI Astrology Web Platform

A production-ready, celestial-themed AI Astrology Consultation & Live Chat Web Platform built for seamless deployment on **Vercel**.

![AstroChat Preview](https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&h=400&fit=crop)

---

## ✨ Features

- 💬 **Live Astrologer Consultation Chat**:
  - Multiple distinct astrologer personas:
    - **Pandit Aarav Sharma** (Vedic Astrology, Kundli & Dosha Grandmaster)
    - **Celeste Nova** (Western Astrology, Synastry & Natal Charts)
    - **Master Orion** (Tarot Grandmaster & Clairvoyant)
    - **Dr. Meera Varma** (Numerology & Astrogemology)
    - **AstroAI Oracle** (24/7 Omniscient Celestial Intelligence)
  - Built-in contextual offline intelligence engine with instant replies, typing simulation, and quick suggestions.
  - Optional Google Gemini API integration (via Vercel Serverless Function `/api/chat` or client settings).
  - Web Audio cosmic bell chimes (synthesized crystal singing bowls).
  - Speech Recognition (voice-to-text) and Text-to-Speech (read astrologer answers aloud).
  - Export chat history as text or markdown.

- 🌟 **Daily Zodiac Horoscopes**:
  - Complete 12 zodiac sign profiles (Aries through Pisces).
  - Filters for Today, Tomorrow, Weekly, and Monthly forecasts.
  - Interactive ratings for Love, Career, Health, and Finance with progress meters.
  - Lucky numbers, lucky colors, lucky gemstones, and best match indicators.

- 📜 **Interactive Janam Kundli Generator**:
  - Vedic Lagna birth chart generator with North Indian Diamond Kundli SVG rendering.
  - Ascendant, Moon Sign (Rashi), Sun Sign, and Nakshatra calculations.
  - Manglik (Kuja) Dosha detection with remedies.
  - Shani Sade Sati transit status and remedies.

- ❤️ **Cosmic Love Compatibility Matcher**:
  - Dual zodiac selector with elemental synergy (Fire, Earth, Air, Water).
  - Percentage match scores for Romantic Love, Communication, Intimacy & Spark, and Long-Term Marriage.

- 🎴 **Interactive 3-Card Tarot Oracle**:
  - 3D card flip animation for Past, Present, and Future spreads.
  - Card shuffle animation and comprehensive Major Arcana interpretations.

- 📞 **Simulated Live Astrologer Audio Call**:
  - Realistic calling interface with connection countdown, audio visualizer wave, call timer, and voice greeting.

- 🪐 **Realtime Planetary Transits Dashboard**:
  - Track current luminary and planetary signs, houses, and retrograde movements.

---

## 🚀 Deploy to Vercel (Instant)

### Option 1: Deploy with Vercel CLI (Recommended)

1. Open your terminal in this project folder:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Follow the prompt (defaults are fine).
3. To add Gemini AI capability, set your environment variable:
   ```bash
   vercel env add GEMINI_API_KEY
   ```
4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy with GitHub & Vercel Dashboard

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of AstroChat"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/astro-chat.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. (Optional) In **Environment Variables**, add:
   - Key: `GEMINI_API_KEY`
   - Value: `Your_Google_Gemini_API_Key`
5. Click **Deploy**! Your site will be live on a fast global edge CDN (e.g., `https://astro-chat.vercel.app`).

---

## 💻 Local Development & Testing

You can run AstroChat locally using any static web server:

### Using Python:
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Using Node / npx:
```bash
npx serve .
```

### Using Vite:
```bash
npm install
npm run dev
```

---

## 📁 Project Structure

```text
├── index.html            # Main Single-Page Application
├── vercel.json           # Vercel routing, clean URLs & security headers
├── package.json          # Node scripts and project metadata
├── .gitignore            # Git ignore configuration
├── api/
│   └── chat.js           # Vercel Serverless Function for Gemini AI
├── css/
│   └── style.css         # Cosmic animations, glassmorphism, 3D tarot styles
└── js/
    ├── astrology-data.js # 12 Zodiacs, Tarot deck, Ephemeris transits, Astrologers
    ├── cosmic-bg.js      # HTML5 Canvas constellation & meteor shower animation
    ├── astro-chat.js     # Chat engine, Web Audio synthesizer, Speech & Gemini hooks
    └── app.js            # Tabs controller, Kundli SVG renderer, Compatibility, Tarot
```

---

## 🔮 Astrologer Personas

- **Pandit Aarav Sharma**: Varanasi Vedic Kundli master, Sade Sati & Lal Kitab remedies.
- **Celeste Nova**: Evolutionary Western astrologer, synastry and natal soul chart.
- **Master Orion**: Tarot grandmaster and clairvoyant oracle.
- **Dr. Meera Varma**: Chaldean numerology and Vedic gemstone prescription.
- **AstroAI Oracle**: 24/7 omniscient celestial intelligence.

---

## 📜 License
MIT License. Created for seekers of cosmic truth.
