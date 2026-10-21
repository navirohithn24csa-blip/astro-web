/**
 * Vercel Serverless Function: /api/chat
 * Securely communicates with Gemini AI using GEMINI_API_KEY environment variable in Vercel
 */

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { message, astroId, userZodiac, userName, clientApiKey } = req.body || {};

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY || clientApiKey;

    // Astrologer Persona mapping
    const personaMap = {
      'pandit-aarav': {
        name: 'Pandit Aarav Sharma',
        role: 'Vedic Astrologer & Kundli Grandmaster from Varanasi',
        tone: 'Deeply respectful, spiritually profound, uses Vedic Jyotish principles, Nakshatras, Mahadasha, and authentic remedies (Gayatri mantra, donations, planetary mantras, Rudraksha).'
      },
      'celeste-nova': {
        name: 'Celeste Nova',
        role: 'Western Astrologer & Synastry Alchemist',
        tone: 'Warm, intuitive, modern psychological astrology, natal chart synastry, houses, Chiron, Midheaven, and evolutionary soul purpose.'
      },
      'master-orion': {
        name: 'Master Orion',
        role: 'Tarot Grandmaster & Clairvoyant',
        tone: 'Mystical, hermetic, uses Major & Minor Arcana imagery, shadow work, intuition, and archetypal soul lessons.'
      },
      'dr-meera': {
        name: 'Dr. Meera Varma',
        role: 'Numerologist & Astrogemologist',
        tone: 'Analytical, mathematical vibrational frequencies, Chaldean numerology, Life Path numbers, and gemstone prescriptions.'
      },
      'astro-ai': {
        name: 'AstroAI Oracle',
        role: '24/7 Omniscient Celestial Intelligence',
        tone: 'All-knowing, cosmic, fast, covers both Vedic and Western astrology with precision.'
      }
    };

    const selectedPersona = personaMap[astroId] || personaMap['pandit-aarav'];

    // If Gemini API Key is available
    if (apiKey && apiKey.trim().length > 10) {
      const systemInstruction = `You are ${selectedPersona.name}, a world-renowned astrologer (${selectedPersona.role}).
Tone & Style: ${selectedPersona.tone}
The user's name is "${userName || 'Seeker'}" and their zodiac sign is "${userZodiac || 'Aries'}".
Provide deeply insightful, spiritually grounded, constructive guidance in response to the user's question.
Format your answer with neat markdown (headings, bullet points, bold keywords) and cosmic emojis (🌟, 🔮, 🪐, 🌙).
Keep your answer concise (around 150-250 words) and directly actionable.`;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [
                  {
                    text: `${systemInstruction}\n\nUser Question: ${message}`
                  }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600
            }
          })
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Gemini API Error:', errorText);
        return res.status(200).json({
          fallback: true,
          message: `The celestial channels are dense today. As ${selectedPersona.name}, I see that the planetary aspects around your question advise patience and steady focus. Let us look deeper into your chart.`
        });
      }

      const data = await response.json();
      const aiReply = data.candidates?.[0]?.content?.parts?.[0]?.text;

      return res.status(200).json({
        success: true,
        reply: aiReply,
        source: 'gemini'
      });
    }

    // Default intelligent response if no API key is configured in Vercel
    return res.status(200).json({
      fallback: true,
      notice: 'GEMINI_API_KEY environment variable not set on Vercel. Using built-in celestial knowledge engine.'
    });
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
