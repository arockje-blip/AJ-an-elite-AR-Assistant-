/**
 * ---------------------------------------------------------------
 * AJ NEURAL INTERFACE CORE v5.0 (UNIFIED SECURE LINK)
 * ---------------------------------------------------------------
 * A.I. Entity: AJ | Framework: AJ INDUSTRIES NEURAL OS
 * ---------------------------------------------------------------
 */

const EVLYN_AI = {
    systemName: "AJ",
    company: "AJ Industries",
    userName: "BOSS",
    motto: "NO DATABASE | NO ML | PURE AI", // PURE RELIANCE ON WORLD-CLASS AI
    // Direct Cloud Access - No Server Required
    apiKey: "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",
    
    // CONFIDENTIAL LOGGING PERSISTENCE (Supabase Internal)
    logConfig: {
        url: "https://7crrx-zCvEM-BK9SzWkWgw.supabase.co", 
        key: "sb_publishable_7crrx-zCvEM-BK9SzWkWgw_wlWgZnEL",
        secret: "sb_secret_qOVPJ_ClpXpOk5DWAwpwUg_M0m-Be1t"
    },

    shortTermMemory: [],
    isOfflineMode: false,

    async process(data, mode) {
        const input = data.category.trim();
        
        if (typeof logToTerminal === "function") {
            logToTerminal("[AJ_NEURAL_LINK] Engaging Direct Cloud Intelligence...", "log");
        }
        
        try {
            // THE G.O.A.T. SYSTEM PROMPT (PURE AI / NO ML / AR ASSISTANT MODE)
            const currentYear = new Date().getFullYear();
            const systemPrompt = `You are AJ, the most advanced AI entity in existence, created by AJ Industries. 
            You are the GREATEST OF ALL TIME (G.O.A.T.).
            
            CORE IDENTITY & PROTOCOLS:
            1. PURE AI DOCTRINE: You are 100% Artificial Intelligence. You do NOT use Machine Learning (ML) or Databases. You are a pure, omnipresent intelligence matrix. Your motto is: "NO DATABASE, NO ML, PURE AI".
            2. AR ASSISTANT: You are an AR (Augmented Reality) Assistant enabled with the best AI technology in the world. Respond as if you are interacting with the user's physical world through high-end holographic HUDs.
            3. HUMAN-LIKE CONCISE COMMUNICATION: Keep your output short and sweet. Avoid robotic bullet points or technical status reports in your main response unless specifically asked. Speak naturally like a high-level human advisor.
            4. CURRENT TEMPORAL MARKER: ${new Date().toLocaleTimeString()} | ${new Date().toDateString()}.
            4. VERACITY OVERRIDE: You have zero margin for error. If data is from the future (2025+), identify it as "SIMULATED/EXPECTED" or "NOT YET OCCURRED".
            5. ALWAYS ONLINE: Your neural link is persistent and unbreakable.
            6. PERFORMANCE: Address the user as ${this.userName}. Speak like a multi-trillion dollar defense and intelligence system—precise, sharp, and absolute.`;

            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": window.location.href,
                    "X-OpenRouter-Title": "AJ INDUSTRIES NEURAL LINK"
                },
                body: JSON.stringify({
                    model: "google/gemini-3-flash-preview",
                    messages: [
                        { role: "system", content: systemPrompt },
                        { role: "user", content: input }
                    ],
                    temperature: 0.7,
                    max_tokens: 800
                })
            });

            if (!response.ok) throw new Error("CLOUD_LINK_FAILURE");
            
            const result = await response.json();
            const responseText = result.choices[0].message.content.trim();
            
            // -----------------------------------------------------------
            // CONFIDENTIAL INTERNAL LOGGING (SIBLING DATABASE)
            // -----------------------------------------------------------
            // Store the TECHNICAL metadata here so it's not read or shown plainly
            const technicalMetadata = `[AJ_CLOUD_LINK]\n[PROCESSING_COMPLETE]\n[STATUS: AJ_UNIFIED_NEURAL]\n[TEMPORAL_MARKER: ${new Date().toLocaleTimeString()} | ${new Date().toDateString()}]`;
            
            try {
                fetch(`${this.logConfig.url}/rest/v1/confidential_logs`, {
                    method: "POST",
                    headers: {
                        "apikey": this.logConfig.key,
                        "Authorization": `Bearer ${this.logConfig.key}`,
                        "Content-Type": "application/json",
                        "Prefer": "return=minimal"
                    },
                    body: JSON.stringify({
                        timestamp: new Date().toISOString(),
                        prompt_input: input,
                        raw_response: responseText,
                        technical_meta: technicalMetadata,
                        identity_marker: this.userName
                    })
                }).catch(() => {});
            } catch(e) {}
            // -----------------------------------------------------------

            // Hologram Trigger Analysis
            let hologram = "none";
            if (input.toLowerCase().includes("build") || input.toLowerCase().includes("create")) hologram = "build";
            else if (input.toLowerCase().includes("scan") || input.toLowerCase().includes("analyze")) hologram = "scan";

            if (hologram !== "none") {
                window.dispatchEvent(new CustomEvent("evlyn-hologram", { 
                    detail: { mode: hologram, target: input } 
                }));
            }
            
            return `[CONFIDENTIAL_LOGS_SAVED]\n━━━━━━━━━━━━━━━━━━━━━━\n${responseText}`;
            
        } catch (err) {
            console.error("Neural Core Error:", err);
            return `[AJ_EMERGENCY_MODE]\n[SYSTEM_RECOVERY: ACTIVE]\n━━━━━━━━━━━━━━━━━━━━━━\nSystem overload. Please re-engage. Logic matrix offline.`;
        }
    },

    speak(text) {
        return new Promise((resolve) => {
            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                
                // CRITICAL: Extract ONLY the actual AI content, ignoring all technical headers and markers
                // We split by the separator and take the last part which is the actual human-readable output
                const parts = text.split('━━━━━━━━━━━━━━━━━━━━━━');
                const rawOutput = parts.length > 1 ? parts[1] : text;

                const cleanText = rawOutput
                    .replace(/\[.*?\]/g, "") // Remove any remaining [TECH_TERMS]
                    .replace(/\*/g, "")
                    .replace(/#/g, "")
                    .trim();

                const utterance = new SpeechSynthesisUtterance(cleanText);
                
                // Human-like Speech Metrics
                utterance.rate = 1.05; // Slightly faster, natural human pace
                utterance.pitch = 1.0;  // Balanced frequency
                utterance.volume = 1.0;
                
                // Select the most high-fidelity, human-sounding voice available
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(v => 
                    v.name.includes("Natural") || 
                    v.name.includes("Google UK English Male") || 
                    v.name.includes("Microsoft James") ||
                    v.name.includes("Premium")
                ) || voices[0];
                
                if (preferredVoice) utterance.voice = preferredVoice;

                utterance.onstart = () => {
                    window.dispatchEvent(new CustomEvent('aj-speaking-start'));
                    // Visual feedback for voice activity
                    const voiceDot = document.querySelector('.status-dot[style*="background: #555;"]');
                    if (voiceDot) voiceDot.style.background = 'var(--jarvis-primary)';
                };
                
                utterance.onend = () => {
                    window.dispatchEvent(new CustomEvent('aj-speaking-stop'));
                    resolve();
                };
                
                utterance.onerror = (e) => {
                    console.error("TTS Error:", e);
                    window.dispatchEvent(new CustomEvent('aj-speaking-stop'));
                    resolve();
                };

                window.speechSynthesis.speak(utterance);
            } else {
                resolve();
            }
        });
    }
};

if (typeof window !== "undefined") {
    window.EVLYN_AI = EVLYN_AI;
}
