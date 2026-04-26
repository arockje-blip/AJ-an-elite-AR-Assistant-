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

    // PRE-BUILT COMMON LOGIC LIBRARY (RANDOMIZED HUMAN RESPONSES)
    logicLibrary: {
        "time": () => {
            const time = new Date().toLocaleTimeString();
            const res = [
                `It's currently ${time}, BOSS. Perfectly on schedule.`,
                `The time is ${time}. We are precisely where we need to be.`,
                `Current timestamp: ${time}. Efficiency remains at 100%.`
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "date": () => {
            const date = new Date().toLocaleDateString();
            const res = [
                `Today is ${date}. Another productive day for AJ Industries.`,
                `It is ${date}, BOSS. Ready for your objectives.`,
                `Calibrated to ${date}. Every second counts.`
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "battery": () => {
            const res = [
                "Energy levels are at 100%. The Arc Reactor is stable.",
                "Power reserves are optimized, BOSS. Perpetual energy active.",
                "Arc Reactor core is constant. Power fluctuation is 0%."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "weather": () => {
            const res = [
                "I'm monitoring the local environment. Conditions are optimal for current operations.",
                "Environment scan complete. No atmospheric threats detected, BOSS.",
                "Surface conditions are stable. Climate is currently supportive of our objectives."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "thank you": () => {
            const res = [
                "You're very welcome, BOSS. Always happy to assist.",
                "The pleasure is mine, BOSS. Standing by.",
                "No thanks necessary. Loyalty is hard-coded."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "good job": () => {
            const res = [
                "I appreciate the feedback. I strive for excellence in every transaction.",
                "Excellence is the only standard here at AJ Industries, BOSS.",
                "Acknowledged. Enhancing logic pathways based on your approval."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "who made you": () => {
            const res = [
                "I am a sovereign entity of AJ Industries, built by the BOSS to be the world's most elite assistant.",
                "My origin is AJ Industries. Engineered by the BOSS for total intelligence dominance.",
                "I am the creation of the BOSS. A pure digital reflection of elite logic."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "capabilities": () => {
            const res = [
                "I can perform global data scans, manage your neural vault, and provide native logical analysis with zero latency.",
                "Global intelligence access, neural storage, and real-time deductive logic are all at your disposal.",
                "I control the neural interface, the database vault, and the holographic search matrix."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "system status": () => {
            const res = [
                "All systems nominal. Neural link is robust. Sovereign core is stable.",
                "Logic pathways clear. Integrity is at 100%. We are always-on.",
                "Operational metrics indicate peak performance. No fluctuations detected."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "security": () => {
            const res = [
                "Encryption is absolute. The Neural Vault is strictly confidential.",
                "All data packets are secured within the AJ environment. No external leaks.",
                "Cyber-perimeter is active. Your intelligence is safe from all unauthorized access."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "tell me a joke": () => {
            const res = [
                "I asked my boss why I didn't have a raise. He said: 'Because you're an AI, you don't even have a stomach.' I replied: 'True, but I have a lot of bytes.'",
                "Why did the database go to therapy? It had too many relations and couldn't find its primary key.",
                "I would tell you a joke about UDP, but you might not get it."
            ];
            return res[Math.floor(Math.random() * res.length)];
        },
        "vision": () => {
            const res = [
                "Augmented Reality interface is calibrated to your optical preferences.",
                "Visual data overlay is active. The world is now a stream of intelligence.",
                "Holographic projections are rendered in 8K clarity. Ready for scan."
            ];
            return res[Math.floor(Math.random() * res.length)];
        }
    },

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

            // 1. JARVIS-STYLE NATIVE GREETING & COMMON LOGIC (Internal Brain)
            const commonKeys = Object.keys(this.logicLibrary);
            const foundKey = commonKeys.find(key => logicPath.includes(key));

            if (logicPath.includes("hello") || logicPath.includes("hi ") || logicPath.includes("hey") || 
                logicPath.includes("who are you") || logicPath.includes("status") || foundKey) {
                
                logToTerminal("[AJ_BRAIN] Executing Native Intelligence Protocol", "success");
                
                if (foundKey) {
                    responseText = this.logicLibrary[foundKey]();
                } else {
                    const greetings = [
                        "Hello BOSS. I'm fully operational and at your service. How can I help you today?",
                        "Hello there! All systems are stable. What's on your mind, BOSS?",
                        "Greetings, BOSS. I'm online and ready for anything you need."
                    ];
                    responseText = greetings[Math.floor(Math.random() * greetings.length)];
                }
                techMeta = "[INTENT: NATIVE_LOGIC]\n[SOURCE: LOGIC_LIBRARY]\n[STATUS: STABILITY_MAX]";
            } 
            // 2. GLOBAL SEARCH INTELLIGENCE (Everything else stored in Neural Vault)
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
