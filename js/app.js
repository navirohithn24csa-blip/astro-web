/**
 * AstroChat - Main Application Controller
 * Handles View switching, Kundli Generator, Compatibility Matcher, Tarot 3D Flip, and Simulated Live Calling
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Chat Engine
  window.astroChat = new AstroChatEngine();

  // App State
  const state = {
    currentTab: 'chat',
    selectedHoroscopeSign: 'aries',
    horoscopePeriod: 'today',
    compatSign1: 'leo',
    compatSign2: 'sagittarius',
    tarotCards: [null, null, null],
    callInterval: null,
    callSeconds: 0,
    isCalling: false
  };

  // Setup DOM Elements
  initNavigation();
  initChatView();
  initHoroscopeView();
  initKundliView();
  initCompatibilityView();
  initTarotView();
  initAstrologersView();
  initTransitsView();
  initSettingsModal();
  initCallModal();

  // Handle Navigation Tabs
  function initNavigation() {
    const navLinks = document.querySelectorAll('[data-nav-tab]');
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-nav-tab');
        switchTab(tab);
      });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const closeMobileNav = document.getElementById('close-mobile-nav');

    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener('click', () => {
        mobileNavDrawer.classList.toggle('hidden');
      });
    }
    if (closeMobileNav && mobileNavDrawer) {
      closeMobileNav.addEventListener('click', () => {
        mobileNavDrawer.classList.add('hidden');
      });
    }
  }

  function switchTab(tabId) {
    state.currentTab = tabId;

    // Update active nav button styles
    document.querySelectorAll('[data-nav-tab]').forEach((btn) => {
      const isCurrent = btn.getAttribute('data-nav-tab') === tabId;
      if (isCurrent) {
        btn.classList.add('bg-purple-600/30', 'text-amber-300', 'border-purple-400/40');
        btn.classList.remove('text-slate-400', 'border-transparent');
      } else {
        btn.classList.remove('bg-purple-600/30', 'text-amber-300', 'border-purple-400/40');
        btn.classList.add('text-slate-400', 'border-transparent');
      }
    });

    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach((pane) => {
      pane.classList.add('hidden');
      pane.classList.remove('active');
    });

    // Show target pane
    const targetPane = document.getElementById(`pane-${tabId}`);
    if (targetPane) {
      targetPane.classList.remove('hidden');
      targetPane.classList.add('active');
    }

    // Close mobile drawer if open
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileNavDrawer) mobileNavDrawer.classList.add('hidden');

    // Specific tab triggers
    if (tabId === 'chat') {
      window.astroChat.scrollToBottom();
    }
  }

  // CHAT VIEW LOGIC
  function initChatView() {
    window.astroChat.updateActiveAstrologerUI();
    window.astroChat.renderChatMessages();

    // Render Astrologer Selector List in Sidebar
    const listEl = document.getElementById('astrologer-sidebar-list');
    if (listEl) {
      listEl.innerHTML = ASTRO_DATA.astrologers
        .map(
          (astro) => `
        <div onclick="window.appSelectAstrologer('${astro.id}')"
             class="group flex items-center gap-3 p-2.5 rounded-xl cursor-pointer transition-all border border-transparent hover:border-purple-500/30 hover:bg-purple-900/20 ${
               astro.id === window.astroChat.activeAstrologerId ? 'bg-purple-950/60 border-purple-500/40 shadow-inner' : ''
             }" id="astro-item-${astro.id}">
          <div class="relative flex-shrink-0">
            <img src="${astro.avatar}" alt="${astro.name}" class="w-10 h-10 rounded-full object-cover border border-purple-400/30 group-hover:scale-105 transition">
            <span class="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full ${
              astro.status === 'online' ? 'bg-emerald-400' : 'bg-amber-400'
            } ring-2 ring-slate-950"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-semibold text-slate-200 truncate group-hover:text-amber-300 transition">${astro.name}</h4>
              <span class="text-[10px] text-amber-400 font-medium">${astro.rate}</span>
            </div>
            <p class="text-[11px] text-slate-400 truncate">${astro.skills[0]} • ${astro.exp}</p>
          </div>
        </div>
      `
        )
        .join('');
    }

    // Global selector bridge
    window.appSelectAstrologer = (id) => {
      window.astroChat.setAstrologer(id);
      document.querySelectorAll('[id^="astro-item-"]').forEach((el) => {
        el.classList.remove('bg-purple-950/60', 'border-purple-500/40', 'shadow-inner');
      });
      const activeEl = document.getElementById(`astro-item-${id}`);
      if (activeEl) {
        activeEl.classList.add('bg-purple-950/60', 'border-purple-500/40', 'shadow-inner');
      }
    };

    // Chat form submit
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    if (chatForm && chatInput) {
      chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (text) {
          window.astroChat.handleUserSendMessage(text);
        }
      });

      chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          chatForm.dispatchEvent(new Event('submit'));
        }
      });
    }

    // Voice Input Button
    const micBtn = document.getElementById('mic-btn');
    if (micBtn) {
      micBtn.addEventListener('click', () => {
        window.astroChat.toggleVoiceInput();
      });
    }

    // Audio Sound toggle button
    const soundToggle = document.getElementById('toggle-sound-btn');
    if (soundToggle) {
      soundToggle.addEventListener('click', () => {
        window.astroChat.soundEnabled = !window.astroChat.soundEnabled;
        soundToggle.textContent = window.astroChat.soundEnabled ? '🔔' : '🔕';
        soundToggle.title = window.astroChat.soundEnabled ? 'Sound Enabled' : 'Sound Muted';
      });
    }

    // Export Chat Button
    const exportBtn = document.getElementById('export-chat-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        window.astroChat.exportChat();
      });
    }

    // Clear Chat Button
    const clearBtn = document.getElementById('clear-chat-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Clear current chat consultation history?')) {
          window.astroChat.clearChat();
        }
      });
    }

    // Start live consultation call button from chat
    const startCallBtn = document.getElementById('start-call-btn');
    if (startCallBtn) {
      startCallBtn.addEventListener('click', () => {
        startConsultationCall(window.astroChat.getActiveAstrologer());
      });
    }
  }

  // HOROSCOPE VIEW LOGIC
  function initHoroscopeView() {
    const grid = document.getElementById('zodiac-grid');
    if (!grid) return;

    // Render 12 Zodiac Cards
    grid.innerHTML = ASTRO_DATA.zodiacSigns
      .map(
        (z) => `
      <div onclick="window.selectHoroscopeSign('${z.id}')"
           class="zodiac-card relative p-4 rounded-2xl bg-slate-900/60 border ${
             z.id === state.selectedHoroscopeSign ? 'border-amber-400/80 bg-purple-950/40 shadow-lg shadow-purple-900/30' : 'border-purple-500/20'
           } hover:border-purple-400 cursor-pointer transition-all hover:-translate-y-1 group" id="zcard-${z.id}">
        <div class="flex items-center justify-between mb-2">
          <span class="text-3xl filter drop-shadow group-hover:scale-110 transition">${z.symbol}</span>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-purple-900/50 text-purple-300 border border-purple-400/30">${z.element}</span>
        </div>
        <h3 class="text-base font-bold text-white group-hover:text-amber-300 transition">${z.name}</h3>
        <p class="text-xs text-slate-400 mb-2">${z.dates}</p>
        <p class="text-xs text-slate-300 line-clamp-2">${z.summary}</p>
      </div>
    `
      )
      .join('');

    window.selectHoroscopeSign = (signId) => {
      state.selectedHoroscopeSign = signId;
      document.querySelectorAll('[id^="zcard-"]').forEach((c) => {
        c.classList.remove('border-amber-400/80', 'bg-purple-950/40', 'shadow-lg', 'shadow-purple-900/30');
        c.classList.add('border-purple-500/20');
      });
      const selected = document.getElementById(`zcard-${signId}`);
      if (selected) {
        selected.classList.add('border-amber-400/80', 'bg-purple-950/40', 'shadow-lg', 'shadow-purple-900/30');
      }
      renderHoroscopeDetail();
    };

    // Period buttons
    document.querySelectorAll('[data-period]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-period]').forEach((b) => b.classList.remove('bg-purple-600', 'text-white'));
        btn.classList.add('bg-purple-600', 'text-white');
        state.horoscopePeriod = btn.getAttribute('data-period');
        renderHoroscopeDetail();
      });
    });

    renderHoroscopeDetail();
  }

  function renderHoroscopeDetail() {
    const detailContainer = document.getElementById('horoscope-detail-box');
    if (!detailContainer) return;

    const z = ASTRO_DATA.zodiacSigns.find((s) => s.id === state.selectedHoroscopeSign) || ASTRO_DATA.zodiacSigns[0];
    const h = z.dailyHoroscope;

    detailContainer.innerHTML = `
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 via-purple-950/40 to-slate-950/90 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center text-4xl shadow-lg shadow-purple-600/30">
              ${z.symbol}
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-2xl sm:text-3xl font-bold text-white">${z.name}</h2>
                <span class="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">${z.dates}</span>
              </div>
              <p class="text-sm text-purple-200">Ruled by <strong class="text-white">${z.ruler}</strong> • Element: <strong class="text-white">${z.element}</strong> (${z.quality})</p>
            </div>
          </div>
          <button onclick="window.chatAboutZodiac('${z.name}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-purple-900/40 transition hover:scale-105 self-start md:self-auto">
            <span>💬 Ask Astrologer About ${z.name}</span>
          </button>
        </div>

        <!-- Prediction Text -->
        <div class="my-6">
          <div class="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-amber-400 mb-2">
            <span>🌟 Cosmic Prediction (${state.horoscopePeriod.toUpperCase()})</span>
          </div>
          <p class="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
            "${h.prediction}"
          </p>
          <div class="mt-4 p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center gap-3">
            <span class="text-xl">✨</span>
            <div class="text-xs text-purple-200">
              <span class="font-semibold text-amber-300">Cosmic Advice:</span> ${h.tip}
            </div>
          </div>
        </div>

        <!-- Meter Scores Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-purple-500/20">
          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-rose-300 flex items-center gap-1">❤️ Love</span>
              <span class="font-bold text-white">${h.love}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-rose-500 to-pink-500 h-full rounded-full" style="width: ${h.love}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-amber-300 flex items-center gap-1">💼 Career</span>
              <span class="font-bold text-white">${h.career}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full" style="width: ${h.career}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-emerald-300 flex items-center gap-1">🌿 Health</span>
              <span class="font-bold text-white">${h.health}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full" style="width: ${h.health}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-cyan-300 flex items-center gap-1">💰 Finance</span>
              <span class="font-bold text-white">${h.finance}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-cyan-500 to-blue-400 h-full rounded-full" style="width: ${h.finance}%"></div>
            </div>
          </div>
        </div>

        <!-- Astrological Metadata Chips -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
          <div class="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div class="text-[10px] uppercase text-slate-400">Lucky Number</div>
            <div class="text-base font-bold text-amber-300">${z.luckyNumber}</div>
          </div>
          <div class="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div class="text-[10px] uppercase text-slate-400">Lucky Color</div>
            <div class="text-xs font-semibold text-purple-200 mt-1">${z.luckyColor}</div>
          </div>
          <div class="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div class="text-[10px] uppercase text-slate-400">Lucky Gemstone</div>
            <div class="text-xs font-semibold text-emerald-300 mt-1">${z.luckyGem}</div>
          </div>
          <div class="p-3 rounded-lg bg-white/[0.03] border border-white/5 text-center">
            <div class="text-[10px] uppercase text-slate-400">Best Matches</div>
            <div class="text-xs font-semibold text-rose-300 mt-1">${z.compatibility.slice(0, 2).join(', ')}</div>
          </div>
        </div>
      </div>
    `;

    window.chatAboutZodiac = (signName) => {
      switchTab('chat');
      window.astroChat.handleUserSendMessage(`Tell me what the planets have in store for ${signName} and any remedies for today.`);
    };
  }

  // KUNDLI & BIRTH CHART GENERATOR
  function initKundliView() {
    const kundliForm = document.getElementById('kundli-form');
    if (!kundliForm) return;

    kundliForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('kundli-name').value || 'Seeker';
      const dob = document.getElementById('kundli-dob').value || '1998-05-15';
      const tob = document.getElementById('kundli-tob').value || '14:30';
      const city = document.getElementById('kundli-city').value || 'New Delhi, India';

      generateKundliResult(name, dob, tob, city);
    });

    // Default pre-computation
    generateKundliResult('Seeker', '1998-05-15', '14:30', 'New Delhi, India');
  }

  function generateKundliResult(name, dob, tob, city) {
    const resultBox = document.getElementById('kundli-result-box');
    if (!resultBox) return;

    const birthDate = new Date(dob);
    const day = birthDate.getDate() || 15;
    const month = birthDate.getMonth() || 4; // 0-based

    // Astronomical Ascendant & Rashi calculations based on sun/moon angles
    const zodiacs = ASTRO_DATA.zodiacSigns;
    const ascIndex = (month + Math.floor(parseInt(tob.split(':')[0] || '12') / 2)) % 12;
    const moonIndex = (month * 2 + day) % 12;
    const sunIndex = month % 12;
    const nakshatraIndex = (day * 3 + month * 5) % ASTRO_DATA.nakshatras.length;

    const ascendant = zodiacs[ascIndex];
    const moonSign = zodiacs[moonIndex];
    const sunSign = zodiacs[sunIndex];
    const nakshatra = ASTRO_DATA.nakshatras[nakshatraIndex];

    // Manglik Check (Mars in houses 1, 4, 7, 8, or 12)
    const marsHouse = ((ascIndex + 7) % 12) + 1;
    const isManglik = [1, 4, 7, 8, 12].includes(marsHouse);

    // Sade Sati Status
    const isSadeSati = ['Pisces', 'Aquarius', 'Aries'].includes(moonSign.name);

    // Draw North Indian Vedic Kundli SVG Chart
    const svgChart = renderNorthIndianChartSvg(ascendant.name, moonSign.name);

    resultBox.innerHTML = `
      <div class="rounded-3xl bg-slate-900/80 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
          <div>
            <span class="text-xs text-amber-400 uppercase font-semibold tracking-wider">Vedic Birth Chart (Lagna Kundli)</span>
            <h2 class="text-2xl sm:text-3xl font-bold text-white mt-1">${name}'s Janam Kundli</h2>
            <p class="text-xs text-slate-400">Born: ${dob} at ${tob} • ${city}</p>
          </div>
          <button onclick="window.chatAboutKundli('${name}', '${ascendant.name}', '${moonSign.name}')" class="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-xs flex items-center gap-2 shadow-lg transition hover:scale-105 self-start">
            <span>🔮 Discuss Kundli with Astrologer</span>
          </button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6 items-center">
          <!-- SVG Vedic Chart -->
          <div class="lg:col-span-6 flex justify-center">
            <div class="w-full max-w-[380px] p-2 rounded-2xl bg-gradient-to-b from-purple-950/40 to-slate-950 border border-amber-500/30 shadow-2xl">
              ${svgChart}
            </div>
          </div>

          <!-- Key Cosmic Placements & Doshas -->
          <div class="lg:col-span-6 space-y-4">
            <div class="grid grid-cols-2 gap-3">
              <div class="p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/20">
                <span class="text-[11px] text-purple-300 uppercase block font-semibold">Lagna (Ascendant)</span>
                <span class="text-lg font-bold text-amber-300">${ascendant.name} ${ascendant.symbol}</span>
                <p class="text-[10px] text-slate-400">Governs physical aura & vitality</p>
              </div>

              <div class="p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/20">
                <span class="text-[11px] text-purple-300 uppercase block font-semibold">Rashi (Moon Sign)</span>
                <span class="text-lg font-bold text-cyan-300">${moonSign.name} ${moonSign.symbol}</span>
                <p class="text-[10px] text-slate-400">Emotional subconscious & mind</p>
              </div>

              <div class="p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/20">
                <span class="text-[11px] text-purple-300 uppercase block font-semibold">Sun Sign (Surya)</span>
                <span class="text-lg font-bold text-amber-400">${sunSign.name} ${sunSign.symbol}</span>
                <p class="text-[10px] text-slate-400">Soul purpose & career dignity</p>
              </div>

              <div class="p-3.5 rounded-xl bg-purple-900/30 border border-purple-500/20">
                <span class="text-[11px] text-purple-300 uppercase block font-semibold">Nakshatra (Constellation)</span>
                <span class="text-lg font-bold text-emerald-300">${nakshatra}</span>
                <p class="text-[10px] text-slate-400">Karmic lunar mansion</p>
              </div>
            </div>

            <!-- Dosha Analysis Cards -->
            <div class="p-4 rounded-xl ${isManglik ? 'bg-amber-950/40 border-amber-500/40' : 'bg-emerald-950/30 border-emerald-500/30'} border">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold ${isManglik ? 'text-amber-300' : 'text-emerald-300'}">
                  ${isManglik ? '🔥 Manglik (Kuja) Dosha: Present' : '🛡️ Manglik Dosha: Absent / Neutralized'}
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded ${isManglik ? 'bg-amber-500/20 text-amber-200' : 'bg-emerald-500/20 text-emerald-200'}">
                  ${isManglik ? 'Remedies Recommended' : 'Safe'}
                </span>
              </div>
              <p class="text-xs text-slate-300 mt-1">
                ${
                  isManglik
                    ? 'Mars influences marital harmony. Easily balanced with Kumbh Vivah ritual, fasting on Tuesdays, or pairing with another Manglik partner.'
                    : 'Mars is harmoniously positioned outside conflict houses. Natural marital harmony indicated.'
                }
              </p>
            </div>

            <div class="p-4 rounded-xl ${isSadeSati ? 'bg-indigo-950/50 border-indigo-500/40' : 'bg-slate-900/60 border-purple-500/20'} border">
              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold ${isSadeSati ? 'text-indigo-300' : 'text-purple-300'}">
                  ${isSadeSati ? '🪐 Shani Sade Sati: Active Cycle' : '✨ Sade Sati: Inactive'}
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded ${isSadeSati ? 'bg-indigo-500/20 text-indigo-200' : 'bg-purple-500/20 text-purple-200'}">
                  ${isSadeSati ? 'Peak Transformation' : 'Peaceful'}
                </span>
              </div>
              <p class="text-xs text-slate-300 mt-1">
                ${
                  isSadeSati
                    ? 'Saturn is transiting adjacent to your natal Moon. Chanting Hanuman Chalisa and meditating on Saturdays will yield great discipline and wealth.'
                    : 'You are currently outside the 7.5-year Saturn trial cycle. Favorable period for expansion.'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    `;

    window.chatAboutKundli = (pName, pAsc, pMoon) => {
      switchTab('chat');
      window.astroChat.handleUserSendMessage(
        `Here is my Kundli breakdown: Name: ${pName}, Lagna: ${pAsc}, Moon: ${pMoon}. Can you analyze my marriage prospects, career transits, and dosha remedies?`
      );
    };
  }

  // Generates the sacred North Indian Diamond Vedic Kundli Chart SVG
  function renderNorthIndianChartSvg(ascendant, moon) {
    return `
      <svg viewBox="0 0 400 400" class="w-full h-auto drop-shadow-md select-none font-sans">
        <!-- Outer Box -->
        <rect x="10" y="10" width="380" height="380" fill="#090d16" stroke="#f59e0b" stroke-width="2.5" />

        <!-- Diagonal X Lines -->
        <line x1="10" y1="10" x2="390" y2="390" stroke="#f59e0b" stroke-width="1.8" opacity="0.85" />
        <line x1="390" y1="10" x2="10" y2="390" stroke="#f59e0b" stroke-width="1.8" opacity="0.85" />

        <!-- Inner Diamond (Square rotated 45 deg) -->
        <polygon points="200,10 390,200 200,390 10,200" fill="#13112c" fill-opacity="0.6" stroke="#f59e0b" stroke-width="2" />

        <!-- House 1 (Lagna / Top Center Diamond) -->
        <text x="200" y="70" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">1. Lagna</text>
        <text x="200" y="115" text-anchor="middle" fill="#e2e8f0" font-size="13" font-weight="600">${ascendant.slice(0, 3)} (Asc)</text>

        <!-- House 2 -->
        <text x="100" y="55" text-anchor="middle" fill="#a78bfa" font-size="10">2</text>
        <text x="105" y="85" text-anchor="middle" fill="#94a3b8" font-size="11">Jup, Mer</text>

        <!-- House 3 -->
        <text x="50" y="100" text-anchor="middle" fill="#a78bfa" font-size="10">3</text>
        <text x="60" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">Sun</text>

        <!-- House 4 -->
        <text x="110" y="200" text-anchor="middle" fill="#a78bfa" font-size="10">4</text>
        <text x="110" y="225" text-anchor="middle" fill="#67e8f9" font-size="12" font-weight="600">Ven</text>

        <!-- House 5 -->
        <text x="50" y="300" text-anchor="middle" fill="#a78bfa" font-size="10">5</text>
        <text x="60" y="325" text-anchor="middle" fill="#94a3b8" font-size="11">Ketu</text>

        <!-- House 6 -->
        <text x="100" y="350" text-anchor="middle" fill="#a78bfa" font-size="10">6</text>
        <text x="105" y="370" text-anchor="middle" fill="#94a3b8" font-size="11">Mar</text>

        <!-- House 7 (Marital Union / Bottom Diamond) -->
        <text x="200" y="280" text-anchor="middle" fill="#fbbf24" font-size="12" font-weight="bold">7. Kalatra</text>
        <text x="200" y="325" text-anchor="middle" fill="#f43f5e" font-size="13" font-weight="600">${moon.slice(0, 3)} (Moon)</text>

        <!-- House 8 -->
        <text x="300" y="350" text-anchor="middle" fill="#a78bfa" font-size="10">8</text>
        <text x="295" y="370" text-anchor="middle" fill="#94a3b8" font-size="11">Sat</text>

        <!-- House 9 -->
        <text x="350" y="300" text-anchor="middle" fill="#a78bfa" font-size="10">9</text>
        <text x="340" y="325" text-anchor="middle" fill="#94a3b8" font-size="11">Rahu</text>

        <!-- House 10 (Career / Right Diamond) -->
        <text x="290" y="200" text-anchor="middle" fill="#a78bfa" font-size="10">10</text>
        <text x="290" y="225" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="600">Karma</text>

        <!-- House 11 -->
        <text x="350" y="100" text-anchor="middle" fill="#a78bfa" font-size="10">11</text>
        <text x="340" y="130" text-anchor="middle" fill="#94a3b8" font-size="11">Labha</text>

        <!-- House 12 -->
        <text x="300" y="55" text-anchor="middle" fill="#a78bfa" font-size="10">12</text>
        <text x="295" y="85" text-anchor="middle" fill="#94a3b8" font-size="11">Vyaya</text>

        <!-- Center Sacred Glyph -->
        <circle cx="200" cy="200" r="18" fill="#1e1b4b" stroke="#f59e0b" stroke-width="1.5" />
        <text x="200" y="206" text-anchor="middle" fill="#f59e0b" font-size="16">ॐ</text>
      </svg>
    `;
  }

  // LOVE COMPATIBILITY VIEW
  function initCompatibilityView() {
    const select1 = document.getElementById('compat-sign-1');
    const select2 = document.getElementById('compat-sign-2');
    const matchBtn = document.getElementById('calc-compat-btn');

    if (!select1 || !select2) return;

    // Populate Options
    const optionsHtml = ASTRO_DATA.zodiacSigns
      .map((z) => `<option value="${z.id}">${z.symbol} ${z.name} (${z.element})</option>`)
      .join('');

    select1.innerHTML = optionsHtml;
    select2.innerHTML = optionsHtml;

    select1.value = state.compatSign1;
    select2.value = state.compatSign2;

    const runMatch = () => {
      state.compatSign1 = select1.value;
      state.compatSign2 = select2.value;
      renderCompatibilityResult();
    };

    if (matchBtn) matchBtn.addEventListener('click', runMatch);
    select1.addEventListener('change', runMatch);
    select2.addEventListener('change', runMatch);

    renderCompatibilityResult();
  }

  function renderCompatibilityResult() {
    const resultBox = document.getElementById('compat-result-box');
    if (!resultBox) return;

    const s1 = ASTRO_DATA.zodiacSigns.find((s) => s.id === state.compatSign1) || ASTRO_DATA.zodiacSigns[4]; // Leo
    const s2 = ASTRO_DATA.zodiacSigns.find((s) => s.id === state.compatSign2) || ASTRO_DATA.zodiacSigns[8]; // Sag

    // Compute compatibility score
    let score = 75;
    let elementalHarmony = 'Harmonious Flow';
    let summary = '';

    const e1 = s1.element;
    const e2 = s2.element;

    if (e1 === e2) {
      score = 92;
      elementalHarmony = `Twin Elements (${e1} + ${e2})`;
      summary = `Because both ${s1.name} and ${s2.name} share the ${e1} element, there is instant instinctive understanding. You share the same emotional rhythm, ambitions, and core values.`;
    } else if ((e1 === 'Fire' && e2 === 'Air') || (e1 === 'Air' && e2 === 'Fire')) {
      score = 95;
      elementalHarmony = 'Electric Fire & Air Synergy';
      summary = `Air feeds Fire while Fire warms Air. ${s1.name} and ${s2.name} create an electrifying dynamic filled with laughter, intellectual sparks, and shared grand adventures.`;
    } else if ((e1 === 'Earth' && e2 === 'Water') || (e1 === 'Water' && e2 === 'Earth')) {
      score = 94;
      elementalHarmony = 'Nourishing Earth & Water Sanctuary';
      summary = `Water nourishes Earth to blossom, while Earth provides steady riverbanks for Water. Deep loyalty, emotional sanctuary, and enduring domestic bliss.`;
    } else if ((e1 === 'Fire' && e2 === 'Water') || (e1 === 'Water' && e2 === 'Fire')) {
      score = 72;
      elementalHarmony = 'Steamy & Transformative Alchemy';
      summary = `Fire and Water create intense steam! Passions run blazing hot, but conscious emotional regulation is key so neither smothers or scorches the other.`;
    } else {
      score = 78;
      elementalHarmony = 'Dynamic Complementary Growth';
      summary = `Different elemental perspectives encourage profound soul growth. When you embrace each other's contrasts rather than resist them, this bond becomes unbreakable.`;
    }

    const loveScore = Math.min(score + 3, 99);
    const commScore = Math.max(score - 4, 68);
    const intimacyScore = Math.min(score + 1, 98);
    const marriageScore = score;

    resultBox.innerHTML = `
      <div class="rounded-3xl bg-slate-900/80 border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-purple-500/20">
          <div class="flex items-center gap-6">
            <div class="text-center">
              <span class="text-4xl sm:text-5xl">${s1.symbol}</span>
              <p class="text-xs font-bold text-white mt-1">${s1.name}</p>
              <span class="text-[10px] text-purple-300">${s1.element}</span>
            </div>

            <div class="flex flex-col items-center">
              <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-rose-500/30">
                ❤️
              </div>
              <span class="text-[10px] text-amber-400 mt-1 font-semibold">SYNTHESIS</span>
            </div>

            <div class="text-center">
              <span class="text-4xl sm:text-5xl">${s2.symbol}</span>
              <p class="text-xs font-bold text-white mt-1">${s2.name}</p>
              <span class="text-[10px] text-purple-300">${s2.element}</span>
            </div>
          </div>

          <!-- Overall Score Badge -->
          <div class="flex items-center gap-4 bg-purple-950/60 p-4 rounded-2xl border border-purple-500/30">
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-black bg-gradient-to-r from-amber-400 to-rose-400 bg-clip-text text-transparent">
                ${score}%
              </div>
              <div class="text-[10px] text-purple-300 uppercase tracking-widest font-semibold">Love Synergy</div>
            </div>
          </div>
        </div>

        <div class="my-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/40 border border-purple-500/30 text-xs text-amber-300 mb-3">
            <span>✨ ${elementalHarmony}</span>
          </div>
          <p class="text-base text-slate-200 leading-relaxed font-light">
            ${summary}
          </p>
        </div>

        <!-- Metric Breakdown -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-purple-500/20">
          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-pink-300">Romantic Love</span>
              <span class="font-bold text-white">${loveScore}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-pink-500 to-rose-500 h-full rounded-full" style="width: ${loveScore}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-cyan-300">Communication</span>
              <span class="font-bold text-white">${commScore}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style="width: ${commScore}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-amber-300">Intimacy & Spark</span>
              <span class="font-bold text-white">${intimacyScore}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-amber-500 to-orange-500 h-full rounded-full" style="width: ${intimacyScore}%"></div>
            </div>
          </div>

          <div class="p-3.5 rounded-xl bg-slate-900/60 border border-purple-500/20">
            <div class="flex justify-between items-center text-xs mb-1">
              <span class="text-emerald-300">Long-Term Marriage</span>
              <span class="font-bold text-white">${marriageScore}%</span>
            </div>
            <div class="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div class="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full" style="width: ${marriageScore}%"></div>
            </div>
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button onclick="window.chatAboutCompat('${s1.name}', '${s2.name}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-purple-900/40 transition hover:scale-105">
            <span>💬 Ask Astrologer About ${s1.name} & ${s2.name} Union</span>
          </button>
        </div>
      </div>
    `;

    window.chatAboutCompat = (n1, n2) => {
      switchTab('chat');
      window.astroChat.handleUserSendMessage(
        `Can you give me a personalized relationship reading for a ${n1} and a ${n2}? How can we overcome our challenges and bring out the best in each other?`
      );
    };
  }

  // TAROT 3-CARD SPREAD VIEW
  function initTarotView() {
    const shuffleBtn = document.getElementById('shuffle-tarot-btn');
    if (shuffleBtn) {
      shuffleBtn.addEventListener('click', () => {
        shuffleAndDealTarot();
      });
    }

    shuffleAndDealTarot();
  }

  function shuffleAndDealTarot() {
    // Pick 3 random unique cards from deck
    const deck = [...ASTRO_DATA.tarotDeck].sort(() => Math.random() - 0.5);
    state.tarotCards = [
      { card: deck[0], flipped: false, position: 'Past Influences' },
      { card: deck[1], flipped: false, position: 'Present Crucible' },
      { card: deck[2], flipped: false, position: 'Future Horizon' }
    ];

    renderTarotCards();
    const readingSynthesis = document.getElementById('tarot-synthesis');
    if (readingSynthesis) readingSynthesis.classList.add('hidden');
  }

  function renderTarotCards() {
    const container = document.getElementById('tarot-cards-container');
    if (!container) return;

    container.innerHTML = state.tarotCards
      .map((item, idx) => {
        const { card, flipped, position } = item;
        return `
        <div class="flex flex-col items-center">
          <span class="text-xs uppercase font-semibold tracking-widest text-amber-400 mb-3">${position}</span>
          <div class="tarot-card-wrapper w-56 h-84 sm:w-64 sm:h-96 cursor-pointer perspective-1000 group" onclick="window.flipTarotCard(${idx})">
            <div class="tarot-card-inner relative w-full h-full rounded-2xl transition-transform duration-700 transform-style-3d shadow-2xl ${
              flipped ? 'rotate-y-180' : ''
            }">
              <!-- CARD BACK (Mystic Pattern) -->
              <div class="tarot-card-face tarot-back absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-950 border-2 border-amber-500/50 p-4 flex flex-col items-center justify-between backface-hidden group-hover:border-amber-400 shadow-xl transition">
                <div class="w-full flex justify-between text-amber-400 text-xs"><span>✦</span><span>✦</span></div>
                <div class="flex flex-col items-center text-center">
                  <div class="w-20 h-20 rounded-full border border-amber-400/40 flex items-center justify-center bg-purple-950/60 shadow-inner mb-3">
                    <span class="text-3xl text-amber-300 animate-pulse">🔮</span>
                  </div>
                  <h4 class="text-sm font-serif font-bold text-amber-200">SACRED ORACLE</h4>
                  <p class="text-[10px] text-purple-300 mt-1">Tap to reveal starlight wisdom</p>
                </div>
                <div class="w-full flex justify-between text-amber-400 text-xs"><span>✦</span><span>✦</span></div>
              </div>

              <!-- CARD FRONT (Revealed Arcana) -->
              <div class="tarot-card-face tarot-front absolute inset-0 rounded-2xl bg-slate-900 border-2 border-amber-400 p-4 flex flex-col justify-between rotate-y-180 backface-hidden shadow-2xl overflow-hidden">
                <div class="flex justify-between items-center text-amber-400 font-serif font-bold text-xs pb-1 border-b border-white/10">
                  <span>${card.numeral}</span>
                  <span class="text-[10px] text-purple-300">${card.element}</span>
                </div>
                
                <div class="relative my-2 rounded-xl overflow-hidden h-40 border border-purple-500/30 shadow-inner">
                  <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <span class="absolute bottom-1.5 left-2 text-xs font-bold text-amber-300 drop-shadow">${card.name}</span>
                </div>

                <div class="space-y-1 text-left flex-1 flex flex-col justify-between">
                  <p class="text-[11px] text-slate-200 line-clamp-3 leading-snug font-light">${card.meaningUpright}</p>
                  <div class="pt-1 border-t border-white/10">
                    <span class="text-[9px] text-amber-300 block font-semibold">Advice: ${card.advice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      })
      .join('');

    window.flipTarotCard = (idx) => {
      state.tarotCards[idx].flipped = !state.tarotCards[idx].flipped;
      window.astroChat.playCosmicChime('send');
      renderTarotCards();

      // Check if all 3 are flipped
      if (state.tarotCards.every((c) => c.flipped)) {
        renderTarotSynthesis();
      }
    };
  }

  function renderTarotSynthesis() {
    const readingSynthesis = document.getElementById('tarot-synthesis');
    if (!readingSynthesis) return;

    readingSynthesis.classList.remove('hidden');
    const [c1, c2, c3] = state.tarotCards.map((c) => c.card);

    readingSynthesis.innerHTML = `
      <div class="rounded-3xl bg-slate-900/90 border border-amber-500/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl mt-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-3xl">✨</span>
          <div>
            <span class="text-xs text-amber-400 uppercase font-bold tracking-widest">Oracle Synthesis</span>
            <h3 class="text-xl sm:text-2xl font-bold text-white">Your Past • Present • Future Arc</h3>
          </div>
        </div>
        <p class="text-slate-200 text-sm sm:text-base leading-relaxed mb-4">
          Your path moved from the foundation of <strong class="text-amber-300">${c1.name}</strong> (${c1.keywords[0]}), passes through the crucible of <strong class="text-cyan-300">${c2.name}</strong> (${c2.keywords[0]}), and is culminating into the blossoming destiny of <strong class="text-emerald-300">${c3.name}</strong> (${c3.keywords[0]}).
        </p>
        <button onclick="window.chatAboutTarot('${c1.name}', '${c2.name}', '${c3.name}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-lg transition hover:scale-105">
          <span>🔮 Ask Master Orion to Deepen This Spread</span>
        </button>
      </div>
    `;

    window.chatAboutTarot = (p1, p2, p3) => {
      switchTab('chat');
      window.astroChat.setAstrologer('master-orion');
      window.astroChat.handleUserSendMessage(
        `I drew a 3-Card Spread: Past: ${p1}, Present: ${p2}, Future: ${p3}. Master Orion, what is the spiritual meaning and next step I should take?`
      );
    };
  }

  // ASTROLOGERS DIRECTORY VIEW
  function initAstrologersView() {
    const container = document.getElementById('astrologers-directory-grid');
    if (!container) return;

    container.innerHTML = ASTRO_DATA.astrologers
      .map(
        (astro) => `
      <div class="rounded-2xl bg-slate-900/70 border border-purple-500/20 p-5 backdrop-blur-md hover:border-purple-400/50 transition-all flex flex-col justify-between group shadow-xl">
        <div>
          <div class="flex items-start gap-4 mb-4">
            <div class="relative">
              <img src="${astro.avatar}" alt="${astro.name}" class="w-16 h-16 rounded-2xl object-cover border border-purple-400/30 group-hover:scale-105 transition">
              <span class="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full ${
                astro.status === 'online' ? 'bg-emerald-400' : 'bg-amber-400'
              } ring-2 ring-slate-950"></span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between">
                <h3 class="text-base font-bold text-white group-hover:text-amber-300 transition truncate">${astro.name}</h3>
              </div>
              <p class="text-xs text-purple-300 font-medium">${astro.title}</p>
              <div class="flex items-center gap-2 mt-1 text-xs text-slate-300">
                <span class="text-amber-400">★ ${astro.rating}</span>
                <span class="text-slate-500">•</span>
                <span class="text-slate-400">${astro.reviews.toLocaleString()} consults</span>
              </div>
            </div>
          </div>

          <p class="text-xs text-slate-300 mb-4 line-clamp-3 leading-relaxed font-light">${astro.bio}</p>

          <div class="flex flex-wrap gap-1.5 mb-4">
            ${astro.skills
              .map(
                (skill) => `
              <span class="text-[10px] px-2 py-0.5 rounded-md bg-purple-900/40 text-purple-200 border border-purple-500/20">${skill}</span>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="pt-4 border-t border-purple-500/20 flex items-center justify-between gap-3">
          <div>
            <span class="text-[10px] text-slate-400 uppercase block">Consultation Rate</span>
            <span class="text-sm font-bold text-amber-300">${astro.rate}</span>
          </div>
          <div class="flex gap-2">
            <button onclick="window.startAstroCallModal('${astro.id}')" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-purple-200 text-xs font-semibold flex items-center gap-1 border border-purple-500/30 transition hover:scale-105" title="Audio Call">
              <span>📞</span> Call
            </button>
            <button onclick="window.startDirectChatWith('${astro.id}')" class="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-purple-900/30 transition hover:scale-105">
              Chat Now
            </button>
          </div>
        </div>
      </div>
    `
      )
      .join('');

    window.startDirectChatWith = (id) => {
      switchTab('chat');
      window.appSelectAstrologer(id);
    };

    window.startAstroCallModal = (id) => {
      const astro = ASTRO_DATA.astrologers.find((a) => a.id === id) || ASTRO_DATA.astrologers[0];
      startConsultationCall(astro);
    };
  }

  // TRANSITS VIEW
  function initTransitsView() {
    const grid = document.getElementById('planetary-transits-grid');
    if (!grid) return;

    grid.innerHTML = ASTRO_DATA.planetaryTransits
      .map(
        (t) => `
      <div class="p-4 rounded-2xl bg-slate-900/60 border border-purple-500/20 backdrop-blur-md hover:border-purple-400/40 transition">
        <div class="flex items-center justify-between mb-2">
          <span class="text-sm font-bold text-amber-300">${t.planet}</span>
          <span class="text-[10px] px-2 py-0.5 rounded-full ${
            t.motion.includes('Retrograde')
              ? 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
              : 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
          }">${t.motion}</span>
        </div>
        <div class="text-xs text-purple-200 font-semibold mb-1">${t.sign} • ${t.house}</div>
        <p class="text-xs text-slate-300 leading-snug font-light">${t.vibe}</p>
      </div>
    `
      )
      .join('');
  }

  // SIMULATED LIVE CALL MODAL
  function initCallModal() {
    const modal = document.getElementById('call-modal');
    const endCallBtn = document.getElementById('end-call-btn');

    if (endCallBtn) {
      endCallBtn.addEventListener('click', () => {
        endConsultationCall();
      });
    }
  }

  function startConsultationCall(astro) {
    const modal = document.getElementById('call-modal');
    if (!modal) return;

    state.isCalling = true;
    state.callSeconds = 0;

    const callAvatar = document.getElementById('call-astro-avatar');
    const callName = document.getElementById('call-astro-name');
    const callTitle = document.getElementById('call-astro-title');
    const callStatus = document.getElementById('call-status');

    if (callAvatar) callAvatar.src = astro.avatar;
    if (callName) callName.textContent = astro.name;
    if (callTitle) callTitle.textContent = astro.title;
    if (callStatus) callStatus.textContent = 'Calling celestial channel...';

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Ringing bell sound
    window.astroChat.playCosmicChime('send');

    // Connect after 2.5 seconds
    setTimeout(() => {
      if (!state.isCalling) return;
      if (callStatus) callStatus.textContent = 'Connected • 00:00';
      window.astroChat.playCosmicChime('receive');

      // Astrologer greeting voice
      window.astroChat.speakText(`Namaste and blessings! I am ${astro.name}. I am tuned in to your celestial vibrations. What can I illuminate for you today?`);

      // Timer counter
      state.callInterval = setInterval(() => {
        state.callSeconds++;
        const mins = String(Math.floor(state.callSeconds / 60)).padStart(2, '0');
        const secs = String(state.callSeconds % 60).padStart(2, '0');
        if (callStatus) callStatus.textContent = `Live Consultation • ${mins}:${secs}`;
      }, 1000);
    }, 2500);
  }

  function endConsultationCall() {
    state.isCalling = false;
    clearInterval(state.callInterval);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    const modal = document.getElementById('call-modal');
    if (modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }
  }

  // SETTINGS MODAL
  function initSettingsModal() {
    const settingsBtn = document.getElementById('settings-btn');
    const settingsModal = document.getElementById('settings-modal');
    const closeSettings = document.getElementById('close-settings-btn');
    const saveSettings = document.getElementById('save-settings-btn');

    const apiKeyInput = document.getElementById('gemini-api-key-input');
    const userZodiacSelect = document.getElementById('user-zodiac-select');
    const userNameInput = document.getElementById('user-name-input');

    // Populate Zodiac Select
    if (userZodiacSelect) {
      userZodiacSelect.innerHTML = ASTRO_DATA.zodiacSigns
        .map((z) => `<option value="${z.id}">${z.symbol} ${z.name}</option>`)
        .join('');
      userZodiacSelect.value = window.astroChat.userZodiac;
    }

    if (userNameInput) userNameInput.value = window.astroChat.userName;
    if (apiKeyInput) apiKeyInput.value = window.astroChat.geminiApiKey;

    if (settingsBtn && settingsModal) {
      settingsBtn.addEventListener('click', () => {
        settingsModal.classList.remove('hidden');
        settingsModal.classList.add('flex');
      });
    }

    if (closeSettings && settingsModal) {
      closeSettings.addEventListener('click', () => {
        settingsModal.classList.add('hidden');
        settingsModal.classList.remove('flex');
      });
    }

    if (saveSettings && settingsModal) {
      saveSettings.addEventListener('click', () => {
        if (apiKeyInput) {
          window.astroChat.geminiApiKey = apiKeyInput.value.trim();
          localStorage.setItem('astrochat_gemini_api_key', window.astroChat.geminiApiKey);
        }
        if (userZodiacSelect) {
          window.astroChat.userZodiac = userZodiacSelect.value;
          localStorage.setItem('astrochat_user_zodiac', window.astroChat.userZodiac);
        }
        if (userNameInput) {
          window.astroChat.userName = userNameInput.value.trim() || 'Seeker';
          localStorage.setItem('astrochat_user_name', window.astroChat.userName);
        }

        settingsModal.classList.add('hidden');
        settingsModal.classList.remove('flex');
        alert('Cosmic Preferences saved successfully!');
      });
    }
  }
});
