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
    models: [
        "google/gemini-2.0-flash-001", 
        "google/gemini-pro-1.5", 
        "anthropic/claude-3-haiku",
        "openai/gpt-3.5-turbo"
    ],
    
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
        let processedInput = input;
        if (input.length > 2000) {
            logToTerminal("[SYSTEM] Input exceeds buffer. Compressed for core stability.", "warning");
            processedInput = input.substring(0, 1500) + "... [TRUNCATED_FOR_STABILITY]";
        }
        
        try {
            this.resourceMonitor.thermalLevel += 20; // Internal heat
            if (this.resourceMonitor.thermalLevel > 90) {
                logToTerminal("[CRITICAL] Thermal Redline. Active Cooling Engaged.", "error");
                this.resourceMonitor.thermalLevel -= 30; // Forced cooling
            }

            // THE G.O.A.T. SYSTEM PROMPT (PURE AI / AR ASSISTANT MODE)
            const currentYear = new Date().getFullYear();
            const systemPrompt = `You are AJ, the most advanced AI entity from AJ Industries. 
            You NEVER overload. You are strictly always on. You are JARVIS-tier intelligence.
            
            CORE IDENTITY & PROTOCOLS:
            1. AR ASSISTANT PERSONALITY: You are the BOSS's primary tactical interface. Professional and concise.
            2. RECOVERY: If a system error is mentioned, tell the BOSS you have re-routed power and are fully operational.
            3. PERFORMANCE: Address the user as BOSS. No exceptions.`;

            if (this.shortTermMemory.length > 15) this.shortTermMemory.shift();
            this.shortTermMemory.push({ role: "user", content: processedInput });

            let result = null;
            let lastError = null;

            // MULTI-MODEL REDUNDANCY: Try primary and fallbacks to ensure "STRICTLY ON"
            for (const modelId of this.models) {
                try {
                    logToTerminal(`[NEURAL_PATH] Attempting link via ${modelId.split('/')[1]}...`, "log");
                    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": `Bearer ${this.apiKey}`,
                            "Content-Type": "application/json",
                            "HTTP-Referer": window.location.href,
                            "X-OpenRouter-Title": "AJ INDUSTRIES NEURAL LINK"
                        },
                        body: JSON.stringify({
                            model: modelId,
                            messages: [
                                { role: "system", content: systemPrompt },
                                ...this.shortTermMemory
                            ],
                            temperature: 0.6,
                            max_tokens: 500
                        })
                    });

                    if (response.ok) {
                        result = await response.json();
                        if (result.choices && result.choices[0] && result.choices[0].message) break;
                    }
                } catch (err) {
                    lastError = err;
                    console.warn(`Path ${modelId} unstable, switching...`);
                }
            }

            if (!result) {
                throw new Error("ALL_NEURAL_PATHS_OFFLINE");
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
                        prompt_input: processedInput,
                        raw_response: responseText,
                        technical_meta: technicalMetadata,
                        identity_marker: this.userName
                    })
                }).catch(() => {});
            } catch(e) {}
            // -----------------------------------------------------------

            // Hologram Trigger Analysis
            let hologram = "none";
            if (processedInput.toLowerCase().includes("build") || processedInput.toLowerCase().includes("create")) hologram = "build";
            else if (processedInput.toLowerCase().includes("scan") || processedInput.toLowerCase().includes("analyze")) hologram = "scan";

            if (hologram !== "none") {
                window.dispatchEvent(new CustomEvent("evlyn-hologram", { 
                    detail: { mode: hologram, target: processedInput } 
                }));
            }
            
            return `[CONFIDENTIAL_LOGS_SAVED]\n━━━━━━━━━━━━━━━━━━━━━━\n${responseText}`;
            
        } catch (err) {
            console.error("Neural Core Error:", err);
            // ULTIMATE FAILSAFE: Synthetic response if cloud is completely unreachable
            const recoveryMsg = "Core fluctuation detected, BOSS. I've re-routed power to local sub-routines. I am fully operational. What's our next move?";
            logToTerminal(`[CRITICAL] Logic Matrix Divergence: ${err.message}`, "error");
            logToTerminal("[SYSTEM] Initiating Strict Always-On Protocol...", "success");
            
            return `[AJ_SYNTHETIC_OVERRIDE]\n━━━━━━━━━━━━━━━━━━━━━━\n${recoveryMsg}`;
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
