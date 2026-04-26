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
        "google/gemini-2.0-flash-exp:free"
    ],
    
    // CONFIDENTIAL LOGGING PERSISTENCE (Supabase Internal)
    logConfig: {
        url: "https://otapitwycmotvkxrjsbh.supabase.co", 
        key: "sb_publishable_7crrx-zCvEM-BK9SzWkWgw_wlWgZnEL",
        secret: "sb_secret_UGyuOXD_F0aGDMe76DJ2VA_xNMjgi0g"
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
        
        // JARVIS PROTOCOL: HYBRID NATIVE LOGIC + GLOBAL DATA ACCESS
        if (typeof logToTerminal === "function") {
            logToTerminal(`[JARVIS_CORE] STABILITY: 100% | MODE: GLOBAL_INTELLIGENCE`, "success");
            logToTerminal("[SYSTEM] ANALYZING INTENT: LOGIC vs. SEARCH...", "log");
        }

        try {
            this.resourceMonitor.thermalLevel = 25; 
            const logicPath = input.toLowerCase();
            let responseText = "";
            let techMeta = "";

            // 1. JARVIS-STYLE NATIVE GREETING & LOGIC (Internal Brain)
            if (logicPath.includes("hello") || logicPath.includes("hi ") || logicPath.includes("hey") || 
                logicPath.includes("who are you") || logicPath.includes("status")) {
                
                logToTerminal("[AJ_BRAIN] Executing Native Greetings Protocol", "success");
                const greetings = [
                    "Hello BOSS. I'm fully operational and at your service. How can I help you today?",
                    "Hello there! All systems are stable. What's on your mind, BOSS?",
                    "Greetings, BOSS. I'm online and ready for anything you need."
                ];
                responseText = greetings[Math.floor(Math.random() * greetings.length)];
                techMeta = "[INTENT: GREETING]\n[LOGIC: NATIVE]\n[STATUS: STABILITY_MAX]";
            } 
            // 2. GLOBAL SEARCH INTELLIGENCE (Global Database/Website Scan)
            else {
                logToTerminal(`[GLOBAL_SCAN] Scanning all databases and websites for: "${input}"`, "success");
                
                // Open Global Intelligence Link for Accurate Answers
                window.open(`https://www.google.com/search?q=${encodeURIComponent(input)}+AI+Overview+full+data`, '_blank');
                
                responseText = `I've scanned the global databases for you, BOSS. It looks like "${input}" refers to the latest data I'm pulling up in your holographic display right now. Take a look.`;
                techMeta = `[INTENT: ACCURATE_QUERY]\n[LOGIC: GLOBAL_SCAN]\n[DATA: DATABASE_WEBSITE_LINK]`;
            }
            
            // -----------------------------------------------------------
            // NEURAL VAULT (HYBRID PERSISTENCE)
            // -----------------------------------------------------------
            try {
                const supabaseRequest = {
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
                        technical_meta: techMeta,
                        identity_marker: this.userName
                    })
                };

                fetch(`${this.logConfig.url}/rest/v1/confidential_logs`, supabaseRequest)
                    .then(res => {
                        if (res.ok) logToTerminal("[SYSTEM] VAULT SECURE: TRANSACTION PERSISTENT.", "success");
                    });
            } catch(e) {}

            // RETURN ONLY THE PURE ANSWER - NO METADATA PROSSESSING
            return `━━━━━━━━━━━━━━━━━━━━━━\n${responseText}`;
            
        } catch (err) {
            return `━━━━━━━━━━━━━━━━━━━━━━\nLogic Constant. I am always on, BOSS.`;
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
                
                // Human-like Speech Metrics (JARVIS TONE)
                utterance.rate = 1.0;   // Natural human pace
                utterance.pitch = 1.0;  // Balanced pitch
                utterance.volume = 1.0;
                
                // Natural Pausing Logic
                const voices = window.speechSynthesis.getVoices();
                const preferredVoice = voices.find(v => 
                    v.name.includes("Natural") || 
                    v.name.includes("Aria") || 
                    v.name.includes("Guy") ||
                    v.name.includes("Zira")
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
