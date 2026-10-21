/**
 * AstroChat - Comprehensive Astrology, Zodiac, Tarot & Transit Data
 */

const ASTRO_DATA = {
  zodiacSigns: [
    {
      id: 'aries',
      name: 'Aries',
      symbol: '♈',
      icon: 'sparkles',
      dates: 'Mar 21 - Apr 19',
      element: 'Fire',
      quality: 'Cardinal',
      ruler: 'Mars',
      luckyNumber: 9,
      luckyColor: 'Crimson Red',
      luckyGem: 'Red Coral, Diamond',
      compatibility: ['Leo', 'Sagittarius', 'Gemini', 'Aquarius'],
      traits: ['Bold', 'Pioneering', 'Passionate', 'Dynamic', 'Courageous'],
      summary: 'The fearless trailblazer of the zodiac. High energy, initiates bold new journeys, and thrives on challenges.',
      dailyHoroscope: {
        prediction: 'Mars aligns favorably with your creative sector today. A breakthrough in your professional vision is on the horizon. Trust your gut instincts over committee advice.',
        love: 88,
        career: 92,
        health: 85,
        finance: 79,
        mood: 'Empowered & Energetic',
        tip: 'Channel excess adrenaline into productive workout or a passion project.'
      }
    },
    {
      id: 'taurus',
      name: 'Taurus',
      symbol: '♉',
      icon: 'shield',
      dates: 'Apr 20 - May 20',
      element: 'Earth',
      quality: 'Fixed',
      ruler: 'Venus',
      luckyNumber: 6,
      luckyColor: 'Emerald Green',
      luckyGem: 'Emerald, Diamond',
      compatibility: ['Virgo', 'Capricorn', 'Cancer', 'Pisces'],
      traits: ['Grounded', 'Sensual', 'Patient', 'Loyal', 'Abundant'],
      summary: 'The steadfast anchor who builds lasting wealth, cherishes sensory delights, and radiates quiet serenity.',
      dailyHoroscope: {
        prediction: 'Venus casts a gentle glow over your financial and emotional house. Good news regarding a past investment or emotional reconciliation arrives this evening.',
        love: 94,
        career: 86,
        health: 89,
        finance: 95,
        mood: 'Serene & Prosperous',
        tip: 'Indulge in nourishing food and grounding nature walks today.'
      }
    },
    {
      id: 'gemini',
      name: 'Gemini',
      symbol: '♊',
      icon: 'message-circle',
      dates: 'May 21 - Jun 20',
      element: 'Air',
      quality: 'Mutable',
      ruler: 'Mercury',
      luckyNumber: 5,
      luckyColor: 'Bright Yellow',
      luckyGem: 'Emerald, Agate',
      compatibility: ['Libra', 'Aquarius', 'Aries', 'Leo'],
      traits: ['Witty', 'Curious', 'Versatile', 'Expressive', 'Adaptable'],
      summary: 'The witty messenger and curious intellectual. Thrives on conversation, multifaceted passions, and rapid ideas.',
      dailyHoroscope: {
        prediction: 'Mercury sharpens your mental acuity. A casual conversation or digital message could unlock a major collaboration. Keep your notepad handy for flashes of insight.',
        love: 82,
        career: 94,
        health: 80,
        finance: 84,
        mood: 'Curious & Electric',
        tip: 'Avoid multitasking too many threads; focus on finishing one high-impact idea.'
      }
    },
    {
      id: 'cancer',
      name: 'Cancer',
      symbol: '♋',
      icon: 'moon',
      dates: 'Jun 21 - Jul 22',
      element: 'Water',
      quality: 'Cardinal',
      ruler: 'Moon',
      luckyNumber: 2,
      luckyColor: 'Silver & Pearl White',
      luckyGem: 'Pearl, Moonstone',
      compatibility: ['Scorpio', 'Pisces', 'Taurus', 'Virgo'],
      traits: ['Intuitive', 'Nurturing', 'Empathetic', 'Protective', 'Imaginative'],
      summary: 'The psychic empath and guardian. Deeply connected to tides of emotion, family sanctuary, and protective loyalty.',
      dailyHoroscope: {
        prediction: 'The lunar transit elevates your psychic resonance. Pay close attention to early morning dreams. A heart-to-heart conversation brings profound healing to a key bond.',
        love: 96,
        career: 80,
        health: 87,
        finance: 82,
        mood: 'Deeply Intuitive',
        tip: 'Create a peaceful evening sanctuary; water and salt baths will clear your aura.'
      }
    },
    {
      id: 'leo',
      name: 'Leo',
      symbol: '♌',
      icon: 'sun',
      dates: 'Jul 23 - Aug 22',
      element: 'Fire',
      quality: 'Fixed',
      ruler: 'Sun',
      luckyNumber: 1,
      luckyColor: 'Royal Gold & Amber',
      luckyGem: 'Ruby, Amber',
      compatibility: ['Aries', 'Sagittarius', 'Gemini', 'Libra'],
      traits: ['Radiant', 'Generous', 'Charismatic', 'Noble', 'Magnanimous'],
      summary: 'The solar sovereign of radiant warmth and creative flair. Commands the stage with heart-centered confidence.',
      dailyHoroscope: {
        prediction: 'The Sun illuminates your self-expression and leadership. You naturally draw admirers and supporters today. Perfect day to present, pitch, or express your romantic feelings.',
        love: 91,
        career: 95,
        health: 89,
        finance: 87,
        mood: 'Radiant & Triumphant',
        tip: 'Lead with generosity and praise others genuinely—it magnifies your own aura.'
      }
    },
    {
      id: 'virgo',
      name: 'Virgo',
      symbol: '♍',
      icon: 'check-circle-2',
      dates: 'Aug 23 - Sep 22',
      element: 'Earth',
      quality: 'Mutable',
      ruler: 'Mercury',
      luckyNumber: 5,
      luckyColor: 'Olive Green & Navy',
      luckyGem: 'Peridot, Sapphire',
      compatibility: ['Taurus', 'Capricorn', 'Cancer', 'Scorpio'],
      traits: ['Analytical', 'Meticulous', 'Helpful', 'Discerning', 'Holistic'],
      summary: 'The master craftsman and analytical healer. Sees perfection in the details and transforms chaos into elegant order.',
      dailyHoroscope: {
        prediction: 'Your eye for strategic detail saves the day on a complex project. Streamlining your schedule today unlocks breathing room for wellness and self-care.',
        love: 84,
        career: 96,
        health: 93,
        finance: 90,
        mood: 'Organized & Lucid',
        tip: 'Release perfectionism; celebrating 90% completion brings joy and peace.'
      }
    },
    {
      id: 'libra',
      name: 'Libra',
      symbol: '♎',
      icon: 'scale',
      dates: 'Sep 23 - Oct 22',
      element: 'Air',
      quality: 'Cardinal',
      ruler: 'Venus',
      luckyNumber: 7,
      luckyColor: 'Pastel Blue & Rose',
      luckyGem: 'Blue Sapphire, Opal',
      compatibility: ['Gemini', 'Aquarius', 'Leo', 'Sagittarius'],
      traits: ['Diplomatic', 'Harmonious', 'Charming', 'Aesthetic', 'Fair-minded'],
      summary: 'The architect of balance and beauty. Seeks poetic harmony, social grace, and deep mutual understanding.',
      dailyHoroscope: {
        prediction: 'Venus blesses partnerships of all kinds. An artistic proposal or romantic gesture will be met with open arms. Harmony returns to where tension recently lingered.',
        love: 97,
        career: 88,
        health: 86,
        finance: 85,
        mood: 'Harmonious & Magnetic',
        tip: 'Make that aesthetic tweak to your living or work space; beauty elevates your spirit.'
      }
    },
    {
      id: 'scorpio',
      name: 'Scorpio',
      symbol: '♏',
      icon: 'flame',
      dates: 'Oct 23 - Nov 21',
      element: 'Water',
      quality: 'Fixed',
      ruler: 'Pluto & Mars',
      luckyNumber: 8,
      luckyColor: 'Obsidian Black & Burgundy',
      luckyGem: 'Yellow Topaz, Coral',
      compatibility: ['Cancer', 'Pisces', 'Virgo', 'Capricorn'],
      traits: ['Intense', 'Transformative', 'Magnetic', 'Perceptive', 'Unyielding'],
      summary: 'The profound alchemist of rebirth. Penetrates hidden truths, holds magnetic mystique, and regenerates through all trials.',
      dailyHoroscope: {
        prediction: 'Secret motivations become crystal clear under your penetrating intuition. A financial turnaround or confidential agreement works heavily in your favor.',
        love: 90,
        career: 93,
        health: 88,
        finance: 96,
        mood: 'Mysterious & Powerful',
        tip: 'Hold your cards close to your chest until all pieces are locked in place.'
      }
    },
    {
      id: 'sagittarius',
      name: 'Sagittarius',
      symbol: '♐',
      icon: 'compass',
      dates: 'Nov 22 - Dec 21',
      element: 'Fire',
      quality: 'Mutable',
      ruler: 'Jupiter',
      luckyNumber: 3,
      luckyColor: 'Royal Purple & Indigo',
      luckyGem: 'Yellow Sapphire, Turquoise',
      compatibility: ['Aries', 'Leo', 'Libra', 'Aquarius'],
      traits: ['Philosophical', 'Adventurous', 'Optimistic', 'Expansive', 'Candid'],
      summary: 'The wandering cosmic philosopher. Seeks universal truth, boundless horizons, high adventure, and infectious laughter.',
      dailyHoroscope: {
        prediction: 'Jupiter expands your horizon of luck. Educational plans, travel opportunities, or cross-cultural connections yield unexpected good fortune today.',
        love: 89,
        career: 91,
        health: 92,
        finance: 88,
        mood: 'Expansive & Hopeful',
        tip: 'Say yes to an invitation outside your usual comfort zone.'
      }
    },
    {
      id: 'capricorn',
      name: 'Capricorn',
      symbol: '♑',
      icon: 'mountain',
      dates: 'Dec 22 - Jan 19',
      element: 'Earth',
      quality: 'Cardinal',
      ruler: 'Saturn',
      luckyNumber: 4,
      luckyColor: 'Charcoal & Forest Green',
      luckyGem: 'Blue Sapphire, Garnet',
      compatibility: ['Taurus', 'Virgo', 'Scorpio', 'Pisces'],
      traits: ['Ambitious', 'Disciplined', 'Strategic', 'Masterful', 'Tenacious'],
      summary: 'The master architect of legacy. Climbs every mountain with calculated patience, unwavering grit, and royal authority.',
      dailyHoroscope: {
        prediction: 'Saturn rewards your past consistency. Authority figures recognize your dedication with added respect or senior responsibilities. Long-term goals crystallize beautifully.',
        love: 82,
        career: 98,
        health: 86,
        finance: 94,
        mood: 'Resolute & Commanding',
        tip: 'Take a quiet moment to look back at how far your mountain ascent has brought you.'
      }
    },
    {
      id: 'aquarius',
      name: 'Aquarius',
      symbol: '♒',
      icon: 'zap',
      dates: 'Jan 20 - Feb 18',
      element: 'Air',
      quality: 'Fixed',
      ruler: 'Uranus & Saturn',
      luckyNumber: 11,
      luckyColor: 'Electric Cyan & Silver',
      luckyGem: 'Amethyst, Garnet',
      compatibility: ['Gemini', 'Libra', 'Aries', 'Sagittarius'],
      traits: ['Visionary', 'Original', 'Humanitarian', 'Unconventional', 'Genius'],
      summary: 'The avant-garde visionary who downloads ideas from the future. Champion of individuality, freedom, and collective upliftment.',
      dailyHoroscope: {
        prediction: 'Uranus triggers an unconventional eureka moment. You see an ingenious workaround that everyone else missed. Community and tech projects receive a massive boost.',
        love: 85,
        career: 94,
        health: 84,
        finance: 89,
        mood: 'Electrified & Visionary',
        tip: 'Do not dilute your weirdest ideas—they are your greatest cosmic edge today.'
      }
    },
    {
      id: 'pisces',
      name: 'Pisces',
      symbol: '♓',
      icon: 'waves',
      dates: 'Feb 19 - Mar 20',
      element: 'Water',
      quality: 'Mutable',
      ruler: 'Neptune & Jupiter',
      luckyNumber: 7,
      luckyColor: 'Seafoam Green & Aquamarine',
      luckyGem: 'Aquamarine, Yellow Sapphire',
      compatibility: ['Cancer', 'Scorpio', 'Taurus', 'Capricorn'],
      traits: ['Mystic', 'Compassionate', 'Artistic', 'Dreamer', 'Transcendent'],
      summary: 'The poet and mystic swimming in boundless waters of imagination. Channels cosmic music, healing empathy, and divine dreams.',
      dailyHoroscope: {
        prediction: 'Neptune deepens your spiritual alignment. Art, music, poetry, and meditation touch ethereal depths today. Synchronicities confirm you are exactly where you need to be.',
        love: 95,
        career: 83,
        health: 90,
        finance: 81,
        mood: 'Transcendent & Dreamy',
        tip: 'Trust that serendipitous coincidence today—it is the universe speaking in rhyme.'
      }
    }
  ],

  // Astrologers for Live Chat
  astrologers: [
    {
      id: 'pandit-aarav',
      name: 'Pandit Aarav Sharma',
      title: 'Vedic Astrologer & Kundli Grandmaster',
      avatar: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=200&fit=crop&crop=faces',
      rating: 4.98,
      reviews: 14200,
      exp: '18+ Years',
      rate: '₹35/min',
      status: 'online',
      languages: ['English', 'Hindi', 'Sanskrit'],
      skills: ['Kundli Analysis', 'Manglik Dosha', 'Sade Sati Remedies', 'Marriage Matching'],
      bio: 'Honored across Varanasi and Rishikesh. Specializes in pinpoint Mahadasha timing, Lal Kitab remedies, and resolving relationship deadlocks with Vedic planetary alignment.',
      welcome: 'Hari Om! I am Pandit Aarav. Welcome to your celestial consultation. Share your birth details (Date, Time, Place) or the burning question in your heart.'
    },
    {
      id: 'celeste-nova',
      name: 'Celeste Nova',
      title: 'Western Astrologer & Synastry Alchemist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces',
      rating: 4.95,
      reviews: 9800,
      exp: '12+ Years',
      rate: '$2.20/min',
      status: 'online',
      languages: ['English', 'French'],
      skills: ['Synastry & Twin Flames', 'Natal Chart Deep-Dive', 'Solar Return', 'Career Transitions'],
      bio: 'Combining modern psychological astrology with ancient Hellenistic technique. Discover your soul blueprint, midheaven vocation, and cosmic compatibility rhythms.',
      welcome: 'Greetings, starlight traveler! I am Celeste Nova. The cosmos holds a blueprint tailored specifically to your soul. What chapter of your life shall we illuminate?'
    },
    {
      id: 'master-orion',
      name: 'Master Orion',
      title: 'Tarot Grandmaster & Clairvoyant',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
      rating: 4.91,
      reviews: 11400,
      exp: '15+ Years',
      rate: '$1.80/min',
      status: 'busy',
      languages: ['English', 'Spanish'],
      skills: ['3-Card Destiny Spread', 'Shadow Work', 'Chakra Cleansing', 'Career Crossroad'],
      bio: 'Clairvoyant reader certified with the Hermetic Order of Tarot. Pierces the veil of ambiguity to deliver honest, compassionate, and uncannily accurate guidance.',
      welcome: 'Welcome to the sacred circle. Take a deep breath. Focus on your question or let the cards uncover what your higher self wants you to know right now.'
    },
    {
      id: 'dr-meera',
      name: 'Dr. Meera Varma',
      title: 'Numerologist & Astrogemologist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces',
      rating: 4.96,
      reviews: 8600,
      exp: '14+ Years',
      rate: '₹40/min',
      status: 'online',
      languages: ['English', 'Hindi', 'Gujarati'],
      skills: ['Name Correction', 'Chaldean Numerology', 'Gemstone Prescription', 'Wealth Attunement'],
      bio: 'Ph.D. in Vedic Studies. Analyzes the mathematical vibrational frequencies of names, dates, and gemstones to unlock stagnant abundance and personal power.',
      welcome: 'Namaste! Numbers are the vibrational DNA of the cosmos. Tell me your full birth name and birth date to decode your life path, destiny, and wealth numbers.'
    },
    {
      id: 'astro-ai',
      name: 'AstroAI Oracle',
      title: '24/7 Omniscient Celestial Intelligence',
      avatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&h=200&fit=crop',
      rating: 5.0,
      reviews: 154000,
      exp: 'Instant AI',
      rate: 'FREE',
      status: 'online',
      languages: ['All Languages'],
      skills: ['Instant Kundli', 'Realtime Transits', 'Love Synergy', 'Daily Fortune'],
      bio: 'Powered by an omniscient astrological matrix blending Vedic Jyotish, Western Ephemeris, Tarot archetypes, and planetary calculations. Always awake, instant answers.',
      welcome: 'Welcome! I am AstroAI Oracle, your instant celestial companion. Ask me anything about your zodiac, transits, compatibility, kundli doshas, or draw a tarot card!'
    }
  ],

  // Tarot Deck (Major Arcana with rich interpretations)
  tarotDeck: [
    {
      id: 0,
      name: 'The Fool',
      numeral: '0',
      archetype: 'The Spontaneous Beginner',
      element: 'Air',
      keywords: ['New Beginnings', 'Innocence', 'Leap of Faith', 'Boundless Potential'],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
      meaningUpright: 'A fresh spiritual chapter begins. Step forward without fear; the universe catches those who dare to take the leap with pure intention.',
      meaningReversed: 'Recklessness or hesitation at the threshold. Pause and inspect the ground beneath your feet before leaping blindly.',
      advice: 'Embrace childlike curiosity and release old baggage.'
    },
    {
      id: 1,
      name: 'The Magician',
      numeral: 'I',
      archetype: 'The Conscious Creator',
      element: 'Air / Mercury',
      keywords: ['Manifestation', 'Resourcefulness', 'Personal Power', 'Inspired Action'],
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop',
      meaningUpright: 'You hold all four elemental tools—fire, water, air, and earth. What you envision in your mind is ready to be forged into physical reality.',
      meaningReversed: 'Untapped potential, procrastination, or misaligned intentions. Align your will with your highest integrity.',
      advice: 'Speak your goals into existence and execute decisively.'
    },
    {
      id: 2,
      name: 'The High Priestess',
      numeral: 'II',
      archetype: 'The Keeper of Intuition',
      element: 'Water / Moon',
      keywords: ['Subconscious', 'Intuition', 'Sacred Secrets', 'Inner Wisdom'],
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=600&fit=crop',
      meaningUpright: 'Still your mind and listen to the silent whisper within. Secrets are being revealed through dreams and gut sensations.',
      meaningReversed: 'Ignoring your gut instincts or being swayed by exterior noise. Retreat into quiet reflection.',
      advice: 'The answers you seek cannot be found through logic alone.'
    },
    {
      id: 3,
      name: 'The Empress',
      numeral: 'III',
      archetype: 'The Divine Mother & Abundance',
      element: 'Earth / Venus',
      keywords: ['Abundance', 'Fertility', 'Creativity', 'Sensory Luxury'],
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=600&fit=crop',
      meaningUpright: 'Fertile harvest and lavish creative flowering. Nurture your creative ideas, relationships, and self-care. Prosperity flows easily.',
      meaningReversed: 'Creative blockages or neglecting your emotional well-being. Stop giving until your own cup is overflowing.',
      advice: 'Surround yourself with beauty, nature, and nourishing nourishment.'
    },
    {
      id: 4,
      name: 'The Emperor',
      numeral: 'IV',
      archetype: 'The Sovereign Architect',
      element: 'Fire / Aries',
      keywords: ['Authority', 'Structure', 'Protection', 'Firm Boundaries'],
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
      meaningUpright: 'Establishing order out of chaos. Lead with calm sovereignty, strategic boundaries, and dependable structures.',
      meaningReversed: 'Micromanagement, inflexibility, or feelings of powerlessness. Balance strength with flexibility.',
      advice: 'Build solid foundations; a steady structure supports high ambitions.'
    },
    {
      id: 6,
      name: 'The Lovers',
      numeral: 'VI',
      archetype: 'The Divine Union & Choice',
      element: 'Air / Gemini',
      keywords: ['Soul Connection', 'Harmony', 'Core Values', 'Choice of Heart'],
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop',
      meaningUpright: 'Deep soul resonance and emotional synergy. A critical crossroads where choosing love over fear will transform your trajectory.',
      meaningReversed: 'Misalignment in values or conflict between head and heart. Realign with what truly matters to your spirit.',
      advice: 'Choose relationships and decisions that honor your authentic core values.'
    },
    {
      id: 9,
      name: 'The Hermit',
      numeral: 'IX',
      archetype: 'The Inner Light Seeker',
      element: 'Earth / Virgo',
      keywords: ['Soul-Searching', 'Solitude', 'Inner Light', 'Spiritual Mentorship'],
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop',
      meaningUpright: 'A period of introspective sanctuary. The lantern you carry within illuminates the exact next step on your solitary path.',
      meaningReversed: 'Isolation slipping into loneliness or resisting necessary contemplation. Seek healthy connection without losing yourself.',
      advice: 'Unplug from social noise; wisdom blooms in sacred quietness.'
    },
    {
      id: 10,
      name: 'Wheel of Fortune',
      numeral: 'X',
      archetype: 'The Cosmic Wheel of Karma',
      element: 'Fire / Jupiter',
      keywords: ['Karmic Shift', 'Good Fortune', 'Destiny Cycles', 'Inevitable Change'],
      image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?w=400&h=600&fit=crop',
      meaningUpright: 'The cosmic wheel spins in your favor! Stagnant situations suddenly accelerate. Karma returns good seeds planted in past seasons.',
      meaningReversed: 'Temporary setback or resisting natural cycles. Remember that every valley precedes a majestic peak.',
      advice: 'Ride the wave with grace; adaptability is your lucky charm.'
    },
    {
      id: 17,
      name: 'The Star',
      numeral: 'XVII',
      archetype: 'The Beacon of Eternal Hope',
      element: 'Air / Aquarius',
      keywords: ['Renewed Hope', 'Serenity', 'Divine Blessings', 'Inspiration'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop',
      meaningUpright: 'A shower of celestial blessings after the storm. Your faith is restored, wounds heal, and your future shines with crystalline clarity.',
      meaningReversed: 'Despair or feeling disconnected from hope. Look up at the night sky; the universe has not forgotten you.',
      advice: 'Pour your true gifts into the world; your light inspires thousands.'
    },
    {
      id: 18,
      name: 'The Moon',
      numeral: 'XVIII',
      archetype: 'The Shadow Mirage',
      element: 'Water / Pisces',
      keywords: ['Illusion', 'Subconscious Shadows', 'Intuitive Tests', 'Uncertainty'],
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=400&h=600&fit=crop',
      meaningUpright: 'Things are not as they appear in the moonlight. Trust your intuition over deceptive appearances. Face inner fears to discover gold.',
      meaningReversed: 'Lifting of fog and exposure of deceptive plots. The dawn approaches with truth.',
      advice: 'Do not make hasty binding contracts until the midday sun reveals all.'
    },
    {
      id: 19,
      name: 'The Sun',
      numeral: 'XIX',
      archetype: 'The Pure Solar Joy',
      element: 'Fire / Sun',
      keywords: ['Radiant Success', 'Vitality', 'Abundant Joy', 'Celebration'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=600&fit=crop',
      meaningUpright: 'Undiluted triumph, vitality, and golden radiance! Everything you touch illuminates. Relationships blossom and clarity reigns supreme.',
      meaningReversed: 'Temporary cloudy day or mild burn-out. The light remains just behind the cloud.',
      advice: 'Bask in your achievements and share your warmth without reservation.'
    },
    {
      id: 21,
      name: 'The World',
      numeral: 'XXI',
      archetype: 'The Cosmic Completion',
      element: 'Earth / Saturn',
      keywords: ['Wholeness', 'Triumph', 'Cycle Fulfilled', 'Cosmic Harmony'],
      image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop',
      meaningUpright: 'Mastery and the triumphant completion of a great soul cycle. You have arrived at wholeness. The entire world opens its doors.',
      meaningReversed: 'Lingering on the last step before closure. Complete unfinished business to receive the crown.',
      advice: 'Celebrate your sacred journey; you have evolved into your next higher octave.'
    }
  ],

  // Live Planetary Transits (October 2026 / dynamic ephemeris snapshot)
  planetaryTransits: [
    { planet: 'Sun', sign: 'Libra 28°', house: '7th House', motion: 'Direct', vibe: 'Harmonizing relationships, contracts & diplomatic agreements' },
    { planet: 'Moon', sign: 'Pisces 14°', house: '12th House', motion: 'Waxing Gibbous', vibe: 'High psychic sensitivity, vivid dreaming, artistic channels' },
    { planet: 'Mercury', sign: 'Scorpio 06°', house: '8th House', motion: 'Direct', vibe: 'Deep investigative research, unearthing financial mysteries' },
    { planet: 'Venus', sign: 'Sagittarius 18°', house: '9th House', motion: 'Direct', vibe: 'Adventure in love, international romance, optimistic spirits' },
    { planet: 'Mars', sign: 'Cancer 22°', house: '4th House', motion: 'Fall / Sensitive', vibe: 'Fierce protection of family, domestic renovation passions' },
    { planet: 'Jupiter', sign: 'Gemini 21°', house: '3rd House', motion: 'Retrograde', vibe: 'Revisiting manuscripts, philosophical study, networking growth' },
    { planet: 'Saturn', sign: 'Pisces 19°', house: '12th House', motion: 'Direct', vibe: 'Dissolving spiritual illusions, building sacred discipline' },
    { planet: 'Rahu (North Node)', sign: 'Pisces 04°', house: '12th House', motion: 'Retrograde', vibe: 'Spiritual expansion, foreign horizons, unconventional leaps' },
    { planet: 'Ketu (South Node)', sign: 'Virgo 04°', house: '6th House', motion: 'Retrograde', vibe: 'Karmic debt clearing, releasing micro-anxieties' }
  ],

  // Nakshatras list
  nakshatras: [
    'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
    'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
    'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
    'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
    'Uttara Bhadrapada', 'Revati'
  ]
};

// Export to window
if (typeof window !== 'undefined') {
  window.ASTRO_DATA = ASTRO_DATA;
}
