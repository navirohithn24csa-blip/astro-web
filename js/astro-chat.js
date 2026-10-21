/**
 * AstroChat - Intelligent Astrological Conversational Engine
 * Includes Web Audio cosmic chime, Web Speech voice, persona routing & Gemini API hook
 */

class AstroChatEngine {
  constructor() {
    this.activeAstrologerId = 'pandit-aarav';
    this.messages = [];
    this.isTyping = false;
    this.soundEnabled = true;
    this.userZodiac = localStorage.getItem('astrochat_user_zodiac') || 'aries';
    this.userName = localStorage.getItem('astrochat_user_name') || 'Seeker';
    this.geminiApiKey = localStorage.getItem('astrochat_gemini_api_key') || '';
    this.audioCtx = null;
    this.recognition = null;
    this.isRecording = false;

    this.initAudio();
    this.initSpeech();
    this.loadChatHistory();
  }

  // Web Audio Synthesizer for Ethereal Celestial Bell Chimes
  initAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    } catch (e) {
      console.warn('Web Audio not supported:', e);
    }
  }

  playCosmicChime(type = 'receive') {
    if (!this.soundEnabled || !this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    const now = this.audioCtx.currentTime;
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gainNode = this.audioCtx.createGain();

    if (type === 'send') {
      // Gentle ascending starlight chime
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.18); // G5

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(659.25, now); // E5
      osc2.frequency.exponentialRampToValueAtTime(1046.5, now + 0.22); // C6

      gainNode.gain.setValueAtTime(0.08, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    } else {
      // Ethereal Tibetan singing bowl / crystal chime tone
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(432, now); // 432 Hz healing frequency
      osc1.frequency.exponentialRampToValueAtTime(864, now + 0.4);

      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(648, now);
      osc2.frequency.exponentialRampToValueAtTime(1296, now + 0.45);

      gainNode.gain.setValueAtTime(0.12, now);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);
    }

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.95);
    osc2.stop(now + 0.95);
  }

  // Web Speech Voice Recognition
  initSpeech() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const input = document.getElementById('chat-input');
        if (input) {
          input.value = transcript;
          input.focus();
        }
        this.stopVoiceInput();
      };

      this.recognition.onerror = () => {
        this.stopVoiceInput();
      };

      this.recognition.onend = () => {
        this.stopVoiceInput();
      };
    }
  }

  toggleVoiceInput() {
    if (!this.recognition) {
      alert('Speech Recognition is not supported by your current browser. Try Chrome or Edge.');
      return;
    }
    if (this.isRecording) {
      this.stopVoiceInput();
    } else {
      try {
        this.recognition.start();
        this.isRecording = true;
        const micBtn = document.getElementById('mic-btn');
        if (micBtn) {
          micBtn.classList.add('text-red-400', 'animate-pulse');
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  stopVoiceInput() {
    if (this.recognition && this.isRecording) {
      this.recognition.stop();
    }
    this.isRecording = false;
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
      micBtn.classList.remove('text-red-400', 'animate-pulse');
    }
  }

  // Text to Speech
  speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    // Clean emojis and markdown formatting for smoother voice
    const cleanText = text.replace(/[*#_`>]/g, '').replace(/[\u{1F300}-\u{1F9FF}]/gu, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  }

  getActiveAstrologer() {
    return (
      ASTRO_DATA.astrologers.find((a) => a.id === this.activeAstrologerId) ||
      ASTRO_DATA.astrologers[0]
    );
  }

  setAstrologer(id) {
    this.activeAstrologerId = id;
    const astro = this.getActiveAstrologer();
    // If chat is empty or just started, add welcome message
    if (this.messages.length === 0 || this.messages.filter((m) => m.astroId === id).length === 0) {
      this.addMessage({
        sender: 'astrologer',
        astroId: id,
        text: astro.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          '🔮 2026 Love & Marriage Outlook',
          '💼 Career & Job Promotion Timing',
          '🪐 Check Sade Sati & Dosha',
          '💎 What is my Lucky Gemstone?'
        ]
      });
    }
    this.renderChatMessages();
    this.updateActiveAstrologerUI();
  }

  updateActiveAstrologerUI() {
    const astro = this.getActiveAstrologer();
    const nameEl = document.getElementById('active-astro-name');
    const titleEl = document.getElementById('active-astro-title');
    const avatarEl = document.getElementById('active-astro-avatar');
    const rateEl = document.getElementById('active-astro-rate');
    const statusDot = document.getElementById('active-astro-status-dot');

    if (nameEl) nameEl.textContent = astro.name;
    if (titleEl) titleEl.textContent = astro.title;
    if (avatarEl) avatarEl.src = astro.avatar;
    if (rateEl) rateEl.textContent = astro.rate;
    if (statusDot) {
      statusDot.className = `w-2.5 h-2.5 rounded-full ${
        astro.status === 'online' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
      }`;
    }
  }

  loadChatHistory() {
    try {
      const stored = localStorage.getItem('astrochat_messages');
      if (stored) {
        this.messages = JSON.parse(stored);
      }
    } catch (e) {
      this.messages = [];
    }

    if (this.messages.length === 0) {
      const defaultAstro = this.getActiveAstrologer();
      this.messages.push({
        sender: 'astrologer',
        astroId: defaultAstro.id,
        text: defaultAstro.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          '🔮 2026 Love & Marriage Outlook',
          '💼 Career & Job Promotion Timing',
          '🪐 Check Sade Sati & Dosha',
          '💎 What is my Lucky Gemstone?'
        ]
      });
    }
  }

  saveChatHistory() {
    try {
      localStorage.setItem('astrochat_messages', JSON.stringify(this.messages.slice(-50)));
    } catch (e) {}
  }

  clearChat() {
    const astro = this.getActiveAstrologer();
    this.messages = [
      {
        sender: 'astrologer',
        astroId: astro.id,
        text: astro.welcome,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          '🔮 2026 Love & Marriage Outlook',
          '💼 Career & Job Promotion Timing',
          '🪐 Check Sade Sati & Dosha',
          '💎 What is my Lucky Gemstone?'
        ]
      }
    ];
    this.saveChatHistory();
    this.renderChatMessages();
  }

  addMessage(msg) {
    this.messages.push(msg);
    this.saveChatHistory();
    this.renderChatMessages();
    this.scrollToBottom();
  }

  async handleUserSendMessage(userText) {
    if (!userText || !userText.trim()) return;
    const cleanText = userText.trim();

    // Play send audio
    this.playCosmicChime('send');

    // Add user message
    this.addMessage({
      sender: 'user',
      text: cleanText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Clear input
    const input = document.getElementById('chat-input');
    if (input) input.value = '';

    // Show typing indicator
    this.setTypingIndicator(true);

    try {
      let replyText = '';
      let suggestions = [];

      // 1. Try Vercel Serverless Function /api/chat first (if hosted on Vercel)
      let vercelResponseSucceeded = false;
      try {
        const vRes = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: cleanText,
            astroId: this.activeAstrologerId,
            userZodiac: this.userZodiac,
            userName: this.userName,
            clientApiKey: this.geminiApiKey
          })
        });

        if (vRes.ok) {
          const vData = await vRes.json();
          if (vData.success && vData.reply) {
            replyText = vData.reply;
            vercelResponseSucceeded = true;
          }
        }
      } catch (e) {
        // Not on Vercel or /api/chat not running locally, seamlessly fallback
      }

      // 2. If Vercel API didn't answer, check if client has direct Gemini API key
      if (!vercelResponseSucceeded) {
        if (this.geminiApiKey && this.geminiApiKey.trim().length > 15) {
          replyText = await this.fetchGeminiResponse(cleanText);
        } else {
          // 3. Use built-in intelligent astrological engine
          const res = this.generateAstrologicalResponse(cleanText);
          replyText = res.text;
          suggestions = res.suggestions;
          // Natural human reading delay
          const delay = Math.min(Math.max(cleanText.length * 20, 800), 2000);
          await new Promise((r) => setTimeout(r, delay));
        }
      }

      this.setTypingIndicator(false);
      this.playCosmicChime('receive');

      this.addMessage({
        sender: 'astrologer',
        astroId: this.activeAstrologerId,
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: suggestions.length > 0 ? suggestions : [
          '✨ Tell me more about this',
          '🎴 Pull a Tarot Card for confirmation',
          '🪐 What remedies should I perform?'
        ]
      });
    } catch (err) {
      console.error(err);
      this.setTypingIndicator(false);
      this.addMessage({
        sender: 'astrologer',
        astroId: this.activeAstrologerId,
        text: 'The planetary vibrations encountered a cosmic interference. Allow me to meditate on this for a moment. Please ask again or check your questions.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    }
  }

  setTypingIndicator(visible) {
    this.isTyping = visible;
    const typingEl = document.getElementById('typing-indicator');
    if (typingEl) {
      if (visible) {
        typingEl.classList.remove('hidden');
        typingEl.classList.add('flex');
        const astro = this.getActiveAstrologer();
        const typingName = document.getElementById('typing-astro-name');
        if (typingName) typingName.textContent = `${astro.name} is consulting the stars...`;
      } else {
        typingEl.classList.add('hidden');
        typingEl.classList.remove('flex');
      }
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    const stream = document.getElementById('chat-messages');
    if (stream) {
      setTimeout(() => {
        stream.scrollTop = stream.scrollHeight;
      }, 50);
    }
  }

  // Generates rich, highly realistic responses based on active astrologer and astrology knowledge
  generateAstrologicalResponse(query) {
    const q = query.toLowerCase();
    const astro = this.getActiveAstrologer();
    const sign = ASTRO_DATA.zodiacSigns.find(s => s.id === this.userZodiac) || ASTRO_DATA.zodiacSigns[0];

    // Check for Tarot requests
    if (q.includes('tarot') || q.includes('card') || q.includes('spread') || q.includes('draw')) {
      const card = ASTRO_DATA.tarotDeck[Math.floor(Math.random() * ASTRO_DATA.tarotDeck.length)];
      return {
        text: `🎴 **The Cards Have Spoken: ${card.name} (${card.numeral})**\n\n*Archetype: ${card.archetype} | Element: ${card.element}*\n\n` +
              `🔮 **Cosmic Message:** ${card.meaningUpright}\n\n` +
              `✨ **Keywords:** ${card.keywords.join(' • ')}\n\n` +
              `🌟 **Sacred Advice:** ${card.advice}\n\n` +
              `The veil has parted to reveal this truth to you today. Take heed of this archetype in your current situation.`,
        suggestions: ['Draw another card', 'How does this affect my love life?', 'Career implications']
      };
    }

    // Check for Sade Sati / Saturn
    if (q.includes('sade sati') || q.includes('shani') || q.includes('saturn') || q.includes('dhaiya')) {
      if (astro.id === 'pandit-aarav' || astro.id === 'dr-meera' || astro.id === 'astro-ai') {
        return {
          text: `🪐 **Shani Dev & Sade Sati Analysis for ${sign.name}:**\n\n` +
                `Lord Shani (Saturn) transits your celestial chart to forge discipline, burn off karmic debt, and elevate you into maturity.\n\n` +
                `• **Current Influence:** Saturn in Pisces exerts a deep transformative gaze. If you have been honest, humble, and disciplined, Shani showers immense long-term wealth.\n` +
                `• **Remedies for Protection & Peace:**\n` +
                `  1. Light a mustard oil lamp (Deepak) under a Peepal tree on Saturdays.\n` +
                `  2. Chant the Shani Beej Mantra: *Om Sham Shanaishcharaya Namah* (108 times at sunset).\n` +
                `  3. Donate black sesame seeds, iron, or feed black dogs or birds on Saturday mornings.\n` +
                `  4. Wear an iron ring forged from a horse's shoe on your right middle finger.`,
          suggestions: ['When will my Sade Sati end?', 'Recommend a Shani Gemstone', 'Am I Manglik?']
        };
      } else {
        return {
          text: `🪐 **Saturn's Transit Lesson:**\n\n` +
                `Saturn is the cosmic taskmaster and great karmic architect. Wherever Saturn is transiting in your chart right now, it asks for radical accountability and restructuring.\n\n` +
                `Do not rush outcomes; building slow, solid foundations will reward you with enduring victory over the next 2.5-year cycle.`,
          suggestions: ['How to prepare for Saturn return?', 'Career forecast', 'Natal Chart']
        };
      }
    }

    // Check for Love, Marriage & Soulmate
    if (q.includes('love') || q.includes('marriage') || q.includes('partner') || q.includes('ex') || q.includes('soulmate') || q.includes('relationship')) {
      const compatibleSigns = sign.compatibility.join(', ');
      return {
        text: `💖 **Romantic Synergy & Marriage Alignment for ${sign.name}:**\n\n` +
              `Venus and Mars are actively activating your relational axis!\n\n` +
              `• **Highest Compatibility:** Your natural elemental chemistry harmonizes most passionately with **${compatibleSigns}**.\n` +
              `• **Current Romantic Transit:** The 7th house of sacred union is opening up a powerful magnetic portal. If single, expect a fateful encounter through shared creative or spiritual gatherings.\n` +
              `• **Relationship Healing:** If you are navigating conflict, release the need to be "right". Venus rewards vulnerability and active listening.\n\n` +
              `🌟 **Auspicious Timing:** Strongest planetary windows for romantic breakthroughs and marriage proposals peak during the upcoming New Moon and Venus direct transit.`,
        suggestions: ['Check compatibility with another sign', 'Will my ex return?', 'Kundli Milan / 36 Gunas']
      };
    }

    // Check for Career, Money & Wealth
    if (q.includes('career') || q.includes('job') || q.includes('money') || q.includes('promotion') || q.includes('wealth') || q.includes('finance') || q.includes('business')) {
      return {
        text: `💼 **Career, Wealth & Professional Elevation:**\n\n` +
              `Your 10th House of Public Reputation and 2nd/11th Houses of Wealth show substantial energetic momentum.\n\n` +
              `• **Planetary Timing:** Jupiter’s gaze creates a strong financial expansion phase. Strategic negotiations, portfolio diversification, or career role shifts are highly favored over the coming weeks.\n` +
              `• **Key Warning:** Beware of signing vague contracts or rushing into hasty verbal agreements during Mercury shadow periods.\n` +
              `• **Wealth Remedy:** Keep an Energized Kuber Yantra or Emerald in your north workspace direction to attract sustained abundance.`,
        suggestions: ['When is the best time for job change?', 'Lucky business colors', 'Gemstones for wealth']
      };
    }

    // Check for Gemstones & Crystals
    if (q.includes('gem') || q.includes('gemstone') || q.includes('stone') || q.includes('crystal') || q.includes('ring') || q.includes('rudraksha')) {
      return {
        text: `💎 **Sacred Gemstone Prescription for ${sign.name}:**\n\n` +
              `Every gemstone acts as a crystalline cosmic prism, funneling specific planetary ray frequencies into your subtle energy field:\n\n` +
              `• **Primary Life Gemstone:** **${sign.luckyGem}** (Ruled by ${sign.ruler})\n` +
              `• **Metal to Mount In:** Gold, Silver or Panchdhatu (5-metal alloy)\n` +
              `• **Auspicious Day to Wear:** Wear for the first time on a waxing Moon (Shukla Paksha) during the day ruled by ${sign.ruler}, after purifying with raw milk and Gangajal water.\n` +
              `• **Recommended Rudraksha:** 5-Mukhi or 6-Mukhi Rudraksha bead for inner stillness and planetary shielding.`,
        suggestions: ['Can I wear Yellow Sapphire?', 'How to energize my stone?', 'Tarot reading']
      };
    }

    // Check for Kundli / Doshas / Manglik
    if (q.includes('kundli') || q.includes('dosha') || q.includes('manglik') || q.includes('kaal sarp') || q.includes('lagna')) {
      return {
        text: `📜 **Vedic Kundli & Dosha Assessment:**\n\n` +
              `In Vedic Jyotish, your Janam Kundli holds your Prarabdha Karma (the destiny chosen for this incarnation):\n\n` +
              `• **Ascendant (Lagna):** Sets your physical vitality and worldly perspective.\n` +
              `• **Manglik (Kuja) Dosha Check:** Mars placed in 1st, 4th, 7th, 8th or 12th house indicates high energetic fire in marital partnerships. If Mars is matched with another fiery placement, the dosha automatically neutralizes.\n` +
              `• **Kaal Sarp Yoga:** Occurs when all 7 major planets are hemmed between Rahu and Ketu. It brings early life obstacles followed by massive spiritual or worldly triumph after age 32.\n\n` +
              `*Would you like me to calculate your complete Kundli chart in the Kundli Tab?*`,
        suggestions: ['Open Kundli Generator', 'Calculate Manglik Status', 'Love Match Score']
      };
    }

    // Check for specific Zodiac Sign queries
    for (const z of ASTRO_DATA.zodiacSigns) {
      if (q.includes(z.name.toLowerCase()) || q.includes(z.id)) {
        return {
          text: `✨ **Cosmic Profile for ${z.symbol} ${z.name}:**\n\n` +
                `• **Element & Quality:** ${z.element} • ${z.quality}\n` +
                `• **Ruling Luminary:** ${z.ruler}\n` +
                `• **Core Traits:** ${z.traits.join(', ')}\n` +
                `• **Lucky Number:** ${z.luckyNumber} | **Lucky Color:** ${z.luckyColor}\n` +
                `• **Today's Horoscope Insight:** "${z.dailyHoroscope.prediction}"\n\n` +
                `*Mood today:* ${z.dailyHoroscope.mood} | *Cosmic Tip:* ${z.dailyHoroscope.tip}`,
          suggestions: [`${z.name} Love Compatibility`, `${z.name} Career Forecast`, 'Draw a Tarot Card']
        };
      }
    }

    // Check for Remedies & Mantras
    if (q.includes('remedy') || q.includes('mantra') || q.includes('puja') || q.includes('chant')) {
      return {
        text: `🕉️ **Universal Planetary Remedies & Mantras for Balance:**\n\n` +
              `1. **Maha Mrityunjaya Mantra:** *Om Tryambakam Yajamahe Sugandhim Pushti-Vardhanam | Urvarukamiva Bandhanan Mrityor Mukshiya Maamritat* (Dispels planetary afflictions and protects health).\n` +
              `2. **Gayatri Mantra:** *Om Bhur Bhuva Swaha, Tat Savitur Varenyam, Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat* (Awakens intellect and solar vitality).\n` +
              `3. **Daily Habit:** Offer water to the rising morning Sun (Surya Arghya) in a copper vessel to boost confidence, vitality, and career authority.`,
        suggestions: ['Mantra for wealth', 'Mantra for love harmony', 'Sade Sati remedies']
      };
    }

    // Astrologer-specific nuanced conversational fallback
    if (astro.id === 'pandit-aarav') {
      return {
        text: `Namaste! Based on your query, the planetary transits suggest an auspicious shift. Remember that while planets outline the tendencies of karma, your sincere Purushartha (conscious righteous effort) can transform any adversity into a blessing.\n\n` +
              `To provide you with pinpoint precision regarding this matter, feel free to mention your date, approximate time, and city of birth. In the meantime, maintain a calm mind and recite Gayatri Mantra at sunrise.`,
        suggestions: ['Check my 2026 horoscope', 'Am I Manglik?', 'Career prediction', 'Draw Tarot']
      };
    } else if (astro.id === 'celeste-nova') {
      return {
        text: `The celestial geometry is fascinating here! Your chart is currently reacting to the current lunation and outer planet aspects. The universe is inviting you to step out of an old karmic loop and embrace your authentic soul destiny.\n\n` +
              `What specific area—your emotional partnerships, your 10th house vocation, or your inner healing journey—is pulling your attention most right now?`,
        suggestions: ['My Love & Soulmate blueprint', 'My Midheaven career calling', 'Transit forecast']
      };
    } else if (astro.id === 'master-orion') {
      return {
        text: `I sense a strong aura of contemplation surrounding you. The subconscious mind already holds the solution you seek, but the fog of daily distractions has obscured it.\n\n` +
              `Allow me to pull a card from the sacred 78-card deck for you to illuminate the hidden undercurrents of your situation. Click below to draw a card or ask your specific question.`,
        suggestions: ['Draw a Tarot Card now', '3-Card Past-Present-Future spread', 'Love reading']
      };
    } else if (astro.id === 'dr-meera') {
      return {
        text: `In the cosmic mathematics of Pythagoras and Chaldean mysticism, your name and birth date create a specific resonance frequency with the universe.\n\n` +
              `Share your exact date of birth (DD/MM/YYYY) so I can compute your Life Path Number, Destiny Number, and pinpoint the lucky vibrational colors and gemstone that activate your prosperity sector.`,
        suggestions: ['Calculate my Life Path Number', 'Lucky Name spelling', 'Gemstone advice']
      };
    } else {
      return {
        text: `Greetings! As AstroAI, I have scanned your astrological coordinates. The cosmic currents indicate that a cycle of transformation is unfolding in your sphere.\n\n` +
              `Whether you seek deep Vedic Kundli interpretations, Western planetary transits, love synastry scores, or Tarot spreads, I am here 24/7 to guide your path. What shall we explore?`,
        suggestions: ['Daily Zodiac Reading', 'Kundli Birth Chart', 'Love Compatibility', 'Draw a Tarot Card']
      };
    }
  }

  // Google Gemini API integration (optional live LLM mode)
  async fetchGeminiResponse(userPrompt) {
    const astro = this.getActiveAstrologer();
    const systemPrompt = `You are ${astro.name}, a world-renowned professional astrologer whose specialty is: ${astro.title}.
Your bio: ${astro.bio}.
Speak warmly, authentically, and wisely in this exact persona. Use astrological insights (planetary transits, zodiac qualities, houses, Nakshatras, tarot cards or numerology depending on your persona).
Provide constructive, inspiring, and spiritually grounded guidance. Format with pleasant markdown headers, bullet points, and cosmic emojis (🌟, 🔮, 🪐).
Keep your answer concise (around 150-250 words), insightful, and engaging.`;

    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${this.geminiApiKey}`;

    const payload = {
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nUser Question: ${userPrompt}` }]
        }
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600
      }
    };

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  }

  // Render chat messages inside UI
  renderChatMessages() {
    const stream = document.getElementById('chat-messages');
    if (!stream) return;

    stream.innerHTML = this.messages
      .map((msg, idx) => {
        const isUser = msg.sender === 'user';
        const astro = ASTRO_DATA.astrologers.find((a) => a.id === msg.astroId) || this.getActiveAstrologer();

        let formattedText = this.formatMessageText(msg.text);

        // Render quick suggestions if present
        let suggestionsHtml = '';
        if (msg.suggestions && msg.suggestions.length > 0 && idx === this.messages.length - 1) {
          suggestionsHtml = `
            <div class="flex flex-wrap gap-2 mt-3 pt-2 border-t border-purple-500/20">
              ${msg.suggestions
                .map(
                  (s) => `
                <button onclick="window.astroChat.handleUserSendMessage('${s.replace(/'/g, "\\'")}')"
                        class="text-xs px-3 py-1.5 rounded-full bg-purple-900/40 hover:bg-purple-800/60 border border-purple-500/30 text-purple-200 transition-all hover:scale-105 flex items-center gap-1.5 shadow-sm">
                  <span>${s}</span>
                </button>
              `
                )
                .join('')}
            </div>
          `;
        }

        if (isUser) {
          return `
            <div class="flex justify-end mb-4 message-bubble">
              <div class="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-lg shadow-purple-950/40 border border-purple-400/30">
                <div class="text-sm sm:text-base leading-relaxed break-words">${formattedText}</div>
                <div class="text-[10px] text-purple-200 text-right mt-1.5 opacity-75">${msg.timestamp}</div>
              </div>
            </div>
          `;
        } else {
          return `
            <div class="flex gap-3 mb-5 message-bubble">
              <img src="${astro.avatar}" alt="${astro.name}" class="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-purple-400/40 object-cover flex-shrink-0 mt-1 shadow-md">
              <div class="max-w-[88%] sm:max-w-[80%] rounded-2xl rounded-tl-sm bg-slate-900/80 border border-purple-500/20 text-slate-100 p-4 shadow-xl backdrop-blur-md">
                <div class="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-white/5">
                  <span class="text-xs font-semibold text-amber-300 flex items-center gap-1">
                    <span>${astro.name}</span>
                    <span class="text-[10px] px-1.5 py-0.5 rounded bg-purple-900/60 text-purple-300 font-normal">Astrologer</span>
                  </span>
                  <div class="flex items-center gap-2">
                    <button onclick="window.astroChat.speakText(\`${msg.text.replace(/[`\\]/g, '')}\`)" title="Read Aloud" class="text-purple-400 hover:text-purple-200 text-xs p-1 rounded hover:bg-white/5 transition">
                      🔊
                    </button>
                    <span class="text-[10px] text-slate-400">${msg.timestamp}</span>
                  </div>
                </div>
                <div class="text-sm sm:text-base leading-relaxed text-slate-200 astro-message-content break-words">${formattedText}</div>
                ${suggestionsHtml}
              </div>
            </div>
          `;
        }
      })
      .join('');

    this.scrollToBottom();
  }

  formatMessageText(text) {
    if (!text) return '';
    // Format bold **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-300 font-semibold">$1</strong>');
    // Format italics *text*
    formatted = formatted.replace(/\*(.*?)\*/g, '<em class="text-purple-200">$1</em>');
    // Format bullet points
    formatted = formatted.replace(/\n• (.*?)/g, '<li class="ml-4 list-disc text-slate-300">$1</li>');
    formatted = formatted.replace(/\n  (\d+\. .*?)/g, '<li class="ml-6 list-decimal text-slate-300">$1</li>');
    // Convert newlines
    formatted = formatted.replace(/\n/g, '<br>');
    return formatted;
  }

  exportChat() {
    const textContent = this.messages
      .map((m) => `[${m.timestamp}] ${m.sender === 'user' ? 'You' : 'Astrologer'}:\n${m.text}\n`)
      .join('\n----------------------------------------\n\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AstroChat-Consultation-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

// Attach to window
if (typeof window !== 'undefined') {
  window.AstroChatEngine = AstroChatEngine;
}
