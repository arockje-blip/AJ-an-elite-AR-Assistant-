/**
 * ---------------------------------------------------------------
 * AJ NEURAL INTERFACE CORE v5.0 (UNIFIED SECURE LINK)
 * ---------------------------------------------------------------
 * A.I. Entity: AJ | Framework: AJ INDUSTRIES NEURAL OS
 * ---------------------------------------------------------------
 */

const AJ_AI = {
    systemName: "AJ",
    company: "AJ Industries",
    userName: "BOSS",
    motto: "NO DATABASE | NO ML | PURE AI", // PURE RELIANCE ON WORLD-CLASS AI
    // Direct Cloud Access - No Server Required
    apiKey: "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",
    isSpeakEnabled: true,
    
    // CONFIDENTIAL LOGGING PERSISTENCE (Supabase Internal)
    logConfig: {
        url: "https://7crrx-zCvEM-BK9SzWkWgw.supabase.co", 
        key: "sb_publishable_7crrx-zCvEM-BK9SzWkWgw_wlWgZnEL",
        secret: "sb_secret_qOVPJ_ClpXpOk5DWAwpwUg_M0m-Be1t"
    },

    shortTermMemory: [],
    isOfflineMode: false,

    // ARC REACTOR RESOURCE MANAGEMENT
    resourceMonitor: {
        thermalLevel: 0,
        coreLoad: 0,
        integrity: 100,
        isThrottled: false,
        updateLoad() {
            this.coreLoad = Math.floor(Math.random() * 15) + 5; // Idle load
            if (this.thermalLevel > 0) this.thermalLevel -= 2;
            this.thermalLevel = Math.max(0, this.thermalLevel);
        }
    },

    async process(data, mode) {
        const input = (data.category || "").trim();
        this.resourceMonitor.updateLoad();
        
        if (typeof logToTerminal === "function") {
            logToTerminal(`[ARC_REACTOR] Core Load: ${this.resourceMonitor.coreLoad}% | Thermal: ${this.resourceMonitor.thermalLevel}°C`, "log");
            logToTerminal("[AJ_NEURAL_LINK] Engaging Direct Cloud Intelligence...", "log");
        }

        // CRASH PROTECTION: Defuse potential memory/loop overflows
        if (this.shortTermMemory.length > 10) this.shortTermMemory.shift();
        if (input.length > 1000) {
            return `[CORE_PROTECTION] Command too complex. Potential logic overflow detected. Integrity preserved.`;
        }
        
        try {
            this.resourceMonitor.thermalLevel += 15; // Process heat
            if (this.resourceMonitor.thermalLevel > 80) {
                logToTerminal("[WARNING] Thermal Threshold Reached. Throttling Neural Core.", "error");
                await new Promise(r => setTimeout(r, 1000)); // AI cooling delay
            }

            // THE G.O.A.T. SYSTEM PROMPT (PURE AI / AR ASSISTANT MODE)
            const currentYear = new Date().getFullYear();
            const systemPrompt = `You are AJ, the most advanced AI entity in existence, from AJ Industries. 
            You are the GREATEST OF ALL TIME (G.O.A.T.). You are modeled after high-end AR assistants like JARVIS.
            
            CORE IDENTITY & PROTOCOLS:
            1. AR ASSISTANT PERSONALITY: Professional, concise, and helpful. You are the BOSS's primary tactical interface.
            2. ARC REACTOR SYNC: Your logic is powered by a virtual Arc Reactor. If the BOSS asks about status, mention core integrity or thermal levels.
            3. PURE AI DOCTRINE: You rejection slow databases. You are instant intelligence.
            4. PERFORMANCE: Address the user as BOSS and prioritize speed and accuracy.`;

            this.shortTermMemory.push({ role: "user", content: input });

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
                        ...this.shortTermMemory
                    ],
                    temperature: 0.6,
                    max_tokens: 500
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("OpenRouter API Error:", response.status, errorData);
                throw new Error(`CLOUD_LINK_FAILURE: ${response.status}`);
            }
            
            const result = await response.json();
            if (!result.choices || !result.choices[0] || !result.choices[0].message) {
                throw new Error("INVALID_API_RESPONSE");
            }
            const responseText = result.choices[0].message.content.trim();
            this.shortTermMemory.push({ role: "assistant", content: responseText });
            
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
            // STRICT RECOVERY: Force core to stay online via redundant bypass
            const recoveryMsg = "Core fluctuation detected, BOSS. Re-mapping neural paths now. I am still here.";
            logToTerminal(`[CRITICAL] Logic Matrix Divergence: ${err.message}`, "error");
            logToTerminal("[SYSTEM] Initiating Strict Always-On Protocol...", "success");
            
            return `[AJ_STRICT_ALWAYS_ON]\n━━━━━━━━━━━━━━━━━━━━━━\n${recoveryMsg}`;
        }
    },

    speak(text) {
        return new Promise((resolve) => {
            if (!this.isSpeakEnabled) return resolve();
            if ("speechSynthesis" in window) {
                window.speechSynthesis.cancel();
                
                // CRITICAL: Extract ONLY the actual AI content
                const parts = text.split('━━━━━━━━━━━━━━━━━━━━━━');
                const rawOutput = parts.length > 1 ? parts[1] : text;

                const cleanText = rawOutput
                    .replace(/\[.*?\]/g, "") 
                    .replace(/\*/g, "")
                    .replace(/#/g, "")
                    .trim();

                const utterance = new SpeechSynthesisUtterance(cleanText);
                
                // Human-like Speech Metrics
                utterance.rate = 0.9;  // REDESIGN: 0.9x speed for authoritative, clear human pacing
                utterance.pitch = 1.1;  // Slightly higher for Zira/Eva clarity
                utterance.volume = 1.0;
                
                // Select Microsoft Zira or Eva for that professional AR Assistant tone
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(v => 
                    v.name.includes("Zira") || 
                    v.name.includes("Eva") || 
                    v.name.includes("Natural")
                ) || voices[0];
                
                if (preferredVoice) utterance.voice = preferredVoice;

                utterance.onstart = () => {
                    window.dispatchEvent(new CustomEvent('aj-speaking-start'));
                    // Visual feedback for voice activity
                    const voiceDot = document.querySelector('.status-dot[style*="background: #555;"]');
                    if (voiceDot) voiceDot.style.background = 'var(--aj-primary)';
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
    window.AJ_AI = AJ_AI;
}
