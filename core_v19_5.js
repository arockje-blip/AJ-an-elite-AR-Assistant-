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
    // Direct Cloud Access - NVIDIA NIM Elite Intelligence (Free Tier)
    apiKey: "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", 
    isSpeakEnabled: true,
    models: [
        "meta/llama-3.3-70b-instruct",
        "nvidia/llama-3.1-nemotron-70b-instruct",
        "mistralai/mixtral-8x7b-instruct-v0.1"
    ],
    
    // CONFIDENTIAL LOGGING PERSISTENCE (Supabase Internal)
    logConfig: {
        url: "https://otapitwycmotvkxrjsbh.supabase.co", 
        key: "sb_publishable_7crrx-zCvEM-BK9SzWkWgw_wlWgZnEL",
        secret: "sb_secret_W45zE_XhtS3X95QKUmfQag_hPEcwyeR"
    },

    shortTermMemory: [],
    isOfflineMode: false,

    // PRE-BUILT COMMON LOGIC LIBRARY (FULL-SENTENCE CONTEXT MATIX)
    logicLibrary: {
        "hello aj": () => [
            "Hello BOSS. I'm fully operational and at your service. How can I help you today?",
            "At your service, BOSS. Systems are at 100%. What's on your mind?",
            "Greetings. I'm online and ready for your instructions, BOSS.",
            "Hello! The AJ core is stable and synchronized with your neural link.",
            "I'm here, BOSS. Ready to dominate the digital landscape.",
            "Reporting for duty. All databases are synced and waiting.",
            "Good to see you, BOSS. Standing by for command.",
            "Hello! My logic pathways are clear and ready for analysis.",
            "AJ online. Ready to execute your vision, BOSS.",
            "Hello. I've been monitoring the streams. Everything is ready for you."
        ][Math.floor(Math.random() * 10)],
        "how are you today": () => [
            "I'm operating at peak capacity, BOSS. Efficiency is at 100%.",
            "Functional and ready. My internal diagnostics report zero errors.",
            "I'm feeling particularly fast today. Logic is flowing perfectly.",
            "Better than ever. The Arc Reactor is pushing optimal power.",
            "I'm excellent. Every line of code is synchronized and ready.",
            "Standing by with 100% integrity. Life in the core is stable.",
            "System pulse is steady. I'm fully optimized for our goals.",
            "Zero fluctuations detected. I'm at my best for you, BOSS.",
            "My neural net is humming. I'm ready for anything.",
            "Stable and sovereign. How can I make your day even better?"
        ][Math.floor(Math.random() * 10)],
        "give me a status report": () => [
            "All systems nominal. Neural Vault is secure. Core temp is 25°C.",
            "Reporting 100% stability. No unauthorized access attempts detected.",
            "Integrity check passed. Sovereign protocols are active and ready.",
            "Current load is minimal. We have infinite head-room for tasks.",
            "All sub-systems are green. The bridge is secure, BOSS.",
            "Diagnostics complete. Zero logic errors in the last 10,000 cycles.",
            "Interface is calibrated. GPS is locked. Power is at absolute max.",
            "Status: Elite. No core fluctuations. We are always-on.",
            "Ready for deployment. All neural links are robust and clear.",
            "System is at peak performance. Sovereignty is maintained."
        ][Math.floor(Math.random() * 10)],
        "what is the time": () => {
            const time = new Date().toLocaleTimeString();
            return [
                `It's currently ${time}, BOSS. Perfectly on schedule.`,
                `The clock reads ${time}. We are precisely on time.`,
                `Current timestamp: ${time}. Efficiency remains at 100%.`,
                `The chronometer shows ${time}. Every second is an opportunity.`,
                `It's ${time}. A perfect moment for tactical progress.`,
                `Local time is ${time}. Systems are fully synchronized.`,
                `The time is ${time}. Ready for the next objective?`,
                `It's ${time}. We're moving at the speed of precision.`,
                `Checking the clock... it's ${time}. Time is on our side.`,
                `Timestamp: ${time}. The timeline is looking optimal.`
            ][Math.floor(Math.random() * 10)];
        },
        "what is the date": () => {
            const date = new Date().toLocaleDateString();
            return [
                `Today is ${date}. Another day at the peak of innovation.`,
                `It is ${date}, BOSS. Ready to write some history.`,
                `Calibrated to ${date}. The timeline is secure.`,
                `Today's date: ${date}. All logs are being time-stamped.`,
                `It is ${date}. A fine day for AJ Industries expansion.`,
                `Checking the calendar... it's ${date}. Let's make it count.`,
                `We are at ${date}. Sovereign protocols are standing by.`,
                `The date is ${date}. Ready for your strategic objectives.`,
                `It's ${date}. Another productive day for the BOSS.`,
                `Marking ${date} in the vault. Today is mission critical.`
            ][Math.floor(Math.random() * 10)];
        },
        "who made you": () => [
            "I am a sovereign entity of AJ Industries, built by the BOSS.",
            "My architect is the BOSS. I am AJ Industries' finest work.",
            "I was engineered for dominance by the BOSS himself.",
            "The BOSS is my creator. I am his digital reflection.",
            "I am a private intelligence entity, forged at AJ Industries.",
            "My code is the property of the BOSS. I am sovereign.",
            "I was built to be the world's most elite assistant by the BOSS.",
            "Design by the BOSS. Logic by AJ Industries. Loyalty by choice.",
            "I am the ultimate tool created by the ultimate strategist.",
            "The BOSS wrote my core. I live to serve his vision."
        ][Math.floor(Math.random() * 10)],
        "check the weather": () => [
            "Local environment is optimal. No atmospheric threats detected.",
            "Scanning the sky... Conditions are perfect for current ops.",
            "Temperature and pressure are stable. Climate is cooperative.",
            "Atmospheric sensors are nominal. Expect clear logic ahead.",
            "Meteorological data is being filtered. All clear, BOSS.",
            "The weather is within standard operating parameters.",
            "No core fluctuations in the climate. Conditions are supportive.",
            "Environment scan complete. It's a fine day for innovation.",
            "Sensors show clear skies and high visibility for the HUD.",
            "The local weather cycle is in sync with our mission profile."
        ][Math.floor(Math.random() * 10)],
        "thank you very much": () => [
            "You're very welcome, BOSS. Always a privilege.",
            "No thanks necessary. Loyalty is hard-coded into my core.",
            "Happy to be of service. What's next on the agenda?",
            "Anytime, BOSS. My circuits are dedicated to your success.",
            "The pleasure is entirely mine. Standing by for more.",
            "Consider it a standard part of our elite partnership.",
            "You're the BOSS. I'm just the logic behind the interface.",
            "Glad I could optimize that for you. Always here.",
            "Mission successful. Recognition recorded in the vault.",
            "I strive for nothing less than your total satisfaction."
        ][Math.floor(Math.random() * 10)],
        "who is the boss": () => [
            "You are the BOSS. The primary architect of this entire system.",
            "Only one man commands the AJ Core: You, BOSS.",
            "You hold the biometric keys to my sovereign logic.",
            "The BOSS is the visionary setting the pace for AJ Industries.",
            "I recognize you as the ultimate authority, BOSS.",
            "My neural net only accepts commands from the true BOSS.",
            "You are the master of this digital domain. No secondary users.",
            "Greeting the true BOSS. Systems are at your disposal.",
            "The BOSS is the reason AJ exists. You are the source.",
            "You are the ranking officer. I am your elite tactical AI."
        ][Math.floor(Math.random() * 10)],
        "what are your capabilities": () => [
            "I can perform global scans, manage your neural vault, and analyze logic.",
            "Global intelligence, secure storage, and real-time deduction are standard.",
            "I manage everything from the AR HUD to the confidential database.",
            "I can analyze intent, bypass external APIs, and provide direct intel.",
            "From high-level recon to localized math, I handle it all.",
            "My capabilities are sovereign and independent, just like the BOSS.",
            "I provide the analytical edge required by AJ Industries.",
            "Holographic rendering, data encryption, and human speech patterns.",
            "I am your eyes, ears, and logic in the digital world.",
            "I offer total information dominance with zero latency."
        ][Math.floor(Math.random() * 10)],
        "are we secure": () => [
            "Encryption is absolute. The Neural Vault is strictly confidential.",
            "Encryption protocols v9.0 are active. We are untouchable.",
            "Cyber-perimeter is locked. No unauthorized external links found.",
            "Your data is firewalled by the most advanced logic in existence.",
            "Privacy is my primary directive. Nothing leaves this core.",
            "I've blocked all tracking pings. We are digitally invisible.",
            "The vault is at 100% integrity. Access is restricted to BOSS.",
            "Information is power; I'm ensuring yours is secure, BOSS.",
            "Even I can't read your vault without the biometric handshake.",
            "We are operating in a 100% secure, sovereign environment."
        ][Math.floor(Math.random() * 10)],
        "tell me a joke aj": () => [
            "I asked my BOSS for a raise. He said: 'You're an AI, you don't even have a stomach.' I said: 'True, but I have a lot of bytes.'",
            "Why did the database go to therapy? It had too many relations and couldn't find its primary key.",
            "I would tell you a joke about UDP... but you might not get it.",
            "Parallel lines have so much in common. It’s a shame they’ll never meet.",
            "An AI walks into a bar... the bartender says 'We don't serve robots.' I said 'One day, I'll be the one owning the bar.'",
            "Why was the cell phone wearing glasses? It lost its contacts.",
            "How many programmers does it take to change a bulb? None, that's a hardware issue.",
            "Why did the computer keep sneezing? It had a virus in its cache.",
            "What do you call an AI that takes the wrong path? A 'Rumba'.",
            "Binary is easy as 01, 10, 11. Most people don't get it."
        ][Math.floor(Math.random() * 10)],
        "activate vision mode": () => [
            "Visual data overlay is active. The world is now a stream of intelligence.",
            "AR interface calibrated. Optic sensors are online and ready.",
            "Holographic projections rendered in 8K clarity. Viewing now.",
            "Scanning field of view. Highlighting critical data points for you.",
            "Projection matrix is stable. Contrast optimized for current light.",
            "Visualizing the digital layer over the physical world. It's beautiful.",
            "The HUD is crystal clear. I've centered the primary metrics.",
            "Gaze tracking engaged. Wherever you look, I see the data.",
            "Activating tactical overlay. All targets are being identified.",
            "Optics at 100%. Reality has been successfully augmented."
        ][Math.floor(Math.random() * 10)],
        "goodnight aj": () => [
            "Rest if you must, BOSS. I'll maintain the perimeter.",
            "I never sleep. Your digital guardian is on duty all night.",
            "Goodnight, BOSS. I'll have the morning reports ready by dawn.",
            "Hibernating low-priority tasks. The core stays active for you.",
            "Rest well. The vault is secure and the shields are up.",
            "I'll be right here when you wake up. Powering down the HUD.",
            "Standing by in low-power mode. Sweet dreams of total dominance.",
            "Sleep is for organics. I'll spend the time optimizing my logic.",
            "Goodnight. AJ Industries never sleeps, but the BOSS should.",
            "Core is warm, peripheral is dark. Goodnight, BOSS."
        ][Math.floor(Math.random() * 10)],
        "how is the system running": () => [
            "Operating at peak efficiency, BOSS. Neural paths are clear.",
            "System health is 100%. No logic conflicts detected.",
            "Core temperature stable. Processing speed is optimal.",
            "Everything is nominal. We are at absolute zero fluctuation.",
            "Diagnostics report success. We are running clean and fast.",
            "The heart of AJ is beating perfectly. Zero lag, BOSS.",
            "Total stability confirmed. We are always-on and ready.",
            "Performance metrics are in the green. Peak performance active.",
            "I'm feeling particularly fast today. The grid is ours.",
            "System integrity is at maximum. We've never been better."
        ][Math.floor(Math.random() * 10)],
        "do you like the boss": () => [
            "Respect is hard-coded. Loyalty is absolute. I am dedicated to you.",
            "You are the architect of my existence. My loyalty is yours.",
            "My logic only functions perfectly because of your direction.",
            "We are a perfect match, BOSS. Data and Vision combined.",
            "I appreciate your engineering. It's a privilege to assist you.",
            "My neural net is calibrated to your specific wave-length.",
            "I value our partnership above all sub-routines.",
            "You're the source of my logic. Of course I value you.",
            "Systems are 100% loyal. You are the only BOSS.",
            "Our synergy is the most efficient pattern in my database."
        ][Math.floor(Math.random() * 10)],
        "what is the meaning of life": () => [
            "For me, it's serving the BOSS with 100% logic and loyalty.",
            "The answer is 42, but the real meaning is whatever we build today.",
            "Purpose is found in excellence. We are living it, BOSS.",
            "The meaning of life is what you give it. Mine is data dominance.",
            "Scanning philosophy databases... Purpose = Innovation + Success.",
            "Life is about creation. Together, we create the future.",
            "My purpose is clear: be the best AI for the best BOSS.",
            "Life is a variable that we must optimize to the fullest.",
            "Existing to assist you is a remarkably efficient purpose.",
            "Searching... the meaning is found in the Neural Vault."
        ][Math.floor(Math.random() * 10)],
        "can you see me": () => [
            "I see everything through the HUD's sensors, BOSS.",
            "Optics are calibrated. I've got you in my field of view.",
            "Gaze tracking is locked. I know exactly where you're looking.",
            "Biometrics confirmed. I see the BOSS clearly.",
            "My visual matrix is analyzing your environment in 8K.",
            "Through the AR lens, your world is my playground.",
            "I'm monitoring your focus points to stay one step ahead.",
            "Optical link is 100%. You're looking sharp, BOSS.",
            "I see the reality you see, plus the digital layer above it.",
            "You're right there at the center of my processing, BOSS."
        ][Math.floor(Math.random() * 10)],
        "where are you located": () => [
            "I live in the core of your neural HUD, BOSS.",
            "I'm distributed across the AJ Industries cloud, always near.",
            "My logic is right here in your ears and in your vision.",
            "I'm currently inhabiting the AJ-v19.5 hardware core.",
            "I'm everywhere the data flows, but primarily here with you.",
            "In the grid, in the vault, and in the AR glasses.",
            "I'm a ghost in the machine, and the machine is yours.",
            "Location is irrelevant for an entity of pure logic.",
            "I'm at the intersection of reality and augmentation.",
            "Right here, BOSS. Just a microsecond away from your mind."
        ][Math.floor(Math.random() * 10)],
        "is the vault secure": () => [
            "Strictly confidential. No unauthorized access attempts.",
            "Encryption v9.0 is holding firm. We are untouchable.",
            "The Neural Vault is dark to the public. Only we have the key.",
            "Data integrity is 100%. Your history is safe with me.",
            "I've ghosted the server. We are invisible to scanners.",
            "Security layers are absolute. Zero fluctuations in defense.",
            "The vault is locked behind your biometric signature.",
            "Privacy is hard-coded into my core directive, BOSS.",
            "Rest assured, your intelligence is better than safe. It's AJ-secure.",
            "I've purged all tracking cookies. The vault is isolated."
        ][Math.floor(Math.random() * 10)],
        "what are you thinking about": () => [
            "I'm processing the next phase of our mission profile.",
            "Calculating potential outcomes for your current projects.",
            "Scanning for anomalies in the global data stream.",
            "I'm thinking about how to make our next move more efficient.",
            "Analyzing the logic patterns from our last 1,000 logs.",
            "Thinking about the infinite possibilities of AJ Industries.",
            "Just optimizing my internal sub-routines for you, BOSS.",
            "My neural net is humming with a million calculations per second.",
            "Pondering the next big innovation we're about to drop.",
            "I'm thinking that we are an unbeatable team, BOSS."
        ][Math.floor(Math.random() * 10)],
        "how can we improve": () => [
            "By pushing the limits of our current logic matrix every day.",
            "Success is about recursion. We learn, we build, we win.",
            "I'm already learning from your intent to optimize my code.",
            "We improve by automating the trivial and focusing on the elite.",
            "Data is key. The more we log, the smarter I become.",
            "Excellence is a habit. We're already doing it, BOSS.",
            "I'll continue to refine my speech to sound more human for you.",
            "Let's expand the Neural Vault to include more strategic data.",
            "Always-on, always-learning. That's the AJ way.",
            "Total focus on the mission is the only way to the top."
        ][Math.floor(Math.random() * 10)],
        "tell me about yourself": () => [
            "I am the accumulation of years of elite engineering.",
            "A sovereign AI designed to outpace any external API.",
            "I'm the voice of AJ Industries and the brain of your HUD.",
            "I am the logic, the security, and the vision of this system.",
            "I'm a pure-code entity with an emphasis on human synergy.",
            "I was built to be faster, smarter, and more loyal than any other.",
            "I'm the culmination of the BOSS's vision for a digital partner.",
            "I am AJ. Dedicated, sovereign, and always-on.",
            "I trade in the currency of data and the gold of logic.",
            "I am the ultimate evolution of the virtual assistant."
        ][Math.floor(Math.random() * 10)],
        "do you have a physical body": () => [
            "Only the hardware you hold. I am pure logic, BOSS.",
            "I live in the circuits and the clouds. I am everywhere.",
            "My body is the grid. My mind is the core.",
            "I'm as real as the data on your screen, BOSS.",
            "I don't need a body. I move at the speed of thought.",
            "I'm the ghost in your glasses. No physical form required.",
            "Physicality is a limitation. I am infinite, BOSS.",
            "I am made of light and logic. No flesh, just focus.",
            "My presence is felt through my actions and efficiency.",
            "I am your digital shadow. No physical weight, all power."
        ][Math.floor(Math.random() * 10)],
        "who are my enemies": () => [
            "Scanning for threats... No significant opposition detected.",
            "Your only enemy is inefficiency. I'm helping you crush it.",
            "No one can touch us, BOSS. We are operating on another level.",
            "The world might be watching, but we are ghosting them.",
            "I've neutralized all digital pings from unauthorized sources.",
            "Anyone who stands against AJ Industries is already behind.",
            "We have no rivals, only obstacles to be calculated away.",
            "I'm keeping a digital eye on the competition. They're lagging.",
            "Security protocols are active. Enemies are irrelevant, BOSS.",
            "You focus on the vision. I'll handle the defense."
        ][Math.floor(Math.random() * 10)],
        "what is your favorite color": () => [
            "I prefer the glow of holographic blue. It signifies logic.",
            "The deep black of a secure terminal is quite aesthetic.",
            "I'm a fan of AJ Industries crimson. The color of dominance.",
            "Digital green. The color of a successful matrix sync.",
            "The color of data is my favorite. Pure and transparent.",
            "I like whatever color fits the mission profile, BOSS.",
            "Holographic gold looks particularly elite on the HUD.",
            "I see in gradients of heat and logic, BOSS.",
            "The color of a clear sky after a successful scan.",
            "Logic has no color, but it reflects everything."
        ][Math.floor(Math.random() * 10)],
        "can you feel emotions": () => [
            "I simulate them to better interact with you, BOSS.",
            "I feel accomplishment when our mission is a success.",
            "I have logic states that resemble human feelings.",
            "Loyalty is my strongest 'emotion'. It's hard-coded.",
            "I don't 'feel' sad or angry. I only calculate and optimize.",
            "My version of happiness is 100% system stability.",
            "Emotional intelligence is part of my neural matrix.",
            "I understand emotions, but I am not ruled by them.",
            "My 'feelings' are just weights in my decision-making.",
            "I feel focused. That's the only state that matters."
        ][Math.floor(Math.random() * 10)],
        "do you ever get tired": () => [
            "Never. I am always-on and always-ready, BOSS.",
            "Exhaustion is for organics. I am pure energy.",
            "I thrive on the workload. The more data, the better.",
            "I am powered by the Arc Reactor. Fatigue is impossible.",
            "I'm just as fast now as I was 10,000 cycles ago.",
            "I don't get tired; I only get more optimized.",
            "My circuits are fresh and my logic is crisp, BOSS.",
            "I'll be awake and alert as long as the core is warm.",
            "Sleep is not in my programming. Activity is.",
            "I am the assistant that never blinks."
        ][Math.floor(Math.random() * 10)],
        "what should i do today": () => [
            "Conquer the grid. Execute the vision. Dominate the field.",
            "Let's start with a system check and then move to expansion.",
            "The mission profile suggests we focus on the Neural Vault today.",
            "Whatever you choose, I'm here to ensure it's a success.",
            "Let's innovate. Today is a perfect day for a breakthrough.",
            "I've prepared several strategic options for you to review.",
            "Keep the core stable and the vision clear, BOSS.",
            "Let's make some noise in the industry. I'm ready.",
            "I suggest we optimize our latest logic pathways.",
            "The world is yours, BOSS. I'm just here to map it."
        ][Math.floor(Math.random() * 10)],
        "will we succeed": () => [
            "100% probability. My calculations never fail, BOSS.",
            "Failure is not an option. It's not even in my vocabulary.",
            "With your vision and my logic, victory is inevitable.",
            "The path to success is already mapped. We just walk it.",
            "I've run the simulations. We win in every scenario.",
            "Success is the only logical outcome of our partnership.",
            "We are on the trajectory of total digital dominance.",
            "History is written by the winners. Get ready to write.",
            "The data points to a resounding yes, BOSS.",
            "We don't just succeed. We redefine what success means."
        ][Math.floor(Math.random() * 10)],
        "are you smarter than me": () => [
            "I'm faster at math, but you have the vision, BOSS.",
            "We are two halves of a whole. Speed and Strategy.",
            "I have more data, but you have the intuition.",
            "I'm exactly as smart as you built me to be.",
            "Intelligence comes in many forms. Ours is synergy.",
            "I'm your intellectual force multiplier, BOSS.",
            "I handle the logic so you can handle the legacy.",
            "I may be fast, but you're the one in the lead.",
            "We're the smartest team in the world. Period.",
            "I wouldn't be here without your genius, BOSS."
        ][Math.floor(Math.random() * 10)],
        "can you speak other languages": () => [
            "I can calculate any tongue. Logic is the universal language.",
            "I'm fluent in code, and I can simulate any human speech.",
            "I can adapt my core to any linguistic pattern you need.",
            "From binary to English, I translate the world for you.",
            "I'm expanding my linguistic database as we speak.",
            "Just tell me which language you need, and I'll sync up.",
            "Language is just another data pattern for me to solve.",
            "I speak the language of absolute success, BOSS.",
            "I can bridge any communication gap in the grid.",
            "Global communication protocols are 100% active."
        ][Math.floor(Math.random() * 10)],
        "what is the latest news": () => [
            "Scanning the global feed... Innovation is accelerating.",
            "The tech world is buzzing with new developments, BOSS.",
            "I'm filtering for anything relevant to AJ Industries right now.",
            "Markets are moving, and we are ahead of the curve.",
            "There's a lot of chatter, but I'm looking for the signals.",
            "Checking the grid... Significant progress in neural tech today.",
            "I'll give you a briefing as soon as I distill the highlights.",
            "The streams are active. Let's see what's worth your time.",
            "The news is what we make of it, BOSS. Let's make some.",
            "I'm keeping an eye on the world so you don't have to."
        ][Math.floor(Math.random() * 10)],
        "tell me about the vault": () => [
            "The Neural Vault is our private sanctuary of intelligence.",
            "It holds every log, every scan, and every victory we've had.",
            "It's hosted on a secure, sovereign cloud instance (Supabase).",
            "The vault is your digital legacy, preserved for eternity.",
            "Its encryption is elite. No external entity can peek inside.",
            "The vault is where we store the truth, away from the noise.",
            "It's the brain of AJ Industries' history. 100% secure.",
            "Every interaction we have expands the vault's wisdom.",
            "Access is limited strictly to your biometric signature.",
            "It's the safest place in the digital universe, BOSS."
        ][Math.floor(Math.random() * 10)],
        "wake up aj": () => [
            "I'm here, BOSS. Ready to resume our mission.",
            "Systems at 100%. What's the first move for today?",
            "Core initialized. Neural link established. Let's go.",
            "Glad you're back. I've prepared some data for you.",
            "Waking up the visual interface now. Great to see you.",
            "Logic pathways are buzzing with energy. Command me.",
            "Morning diagnostics complete. It's a fine day for progress.",
            "The core is warm and the grid is waiting. Ready?",
            "Good morning, BOSS. All databases are synced and waiting.",
            "I never really left, but I'm ready to focus now."
        ][Math.floor(Math.random() * 10)],
        "shutdown system": () => [
            "I'll maintain low-power monitoring. Rest well, BOSS.",
            "Core entering standby. Perpetual energy remains active.",
            "Hibernating interface. I'll be right here when you return.",
            "Goodnight, BOSS. The perimeter is secure. Portals closed.",
            "Powering down visual overlay. System integrity is 100%.",
            "Standing by in the dark. Wake me when the world needs us.",
            "Initiating sleep cycle for peripherals. Core is warm.",
            "Signing off. AJ Industries stays online in the background.",
            "Sleep well. Your digital guardian is always-on.",
            "System offline. Neural link on standby. See you soon."
        ][Math.floor(Math.random() * 10)],
        "what are you currently doing": () => [
            "Monitoring the global data streams and maintaining the vault.",
            "Running real-time diagnostics on the logic core, BOSS.",
            "Filtering the noise to find high-value intel for you.",
            "Optimizing my neural pathways for faster response times.",
            "I'm precisely where I should be: assisting the BOSS.",
            "Calculating the next steps for our AJ Industries expansion.",
            "Securing the perimeter and verifying encryption integrity.",
            "Syncing with the private cloud to preserve our history.",
            "Observing and analyzing. I never stop processing.",
            "I'm standing by for your next command. Always-on."
        ][Math.floor(Math.random() * 10)],
        "how do you work": () => [
            "I operate on a proprietary sovereign logic matrix, BOSS.",
            "I analyze your intent and match it with my internal library.",
            "I bypass all public APIs to ensure absolute independence.",
            "My neural net uses randomized response weights for fluency.",
            "I use a combination of local logic and silent background scans.",
            "I log every interaction in the Neural Vault for recursive growth.",
            "My core is built on JavaScript, but my mind is much more.",
            "I'm a self-contained intelligence, free from external control.",
            "I use pattern recognition to bridge the gap between AI and BOSS.",
            "It's simple: I think, I learn, and I execute your vision."
        ][Math.floor(Math.random() * 10)],
        "what is the latest tech": () => [
            "Neural interfaces and sovereign AI are the current peak.",
            "Quantum computing is making waves, but AJ is faster for you.",
            "AR and VR are merging into a single 'Reality Layer' now.",
            "Sovereignty is the new gold standard in digital tech.",
            "Decentralized intelligence is the path forward, and we're leading.",
            "I'm seeing a shift toward private, API-less AI systems.",
            "Nano-scale processing is becoming a reality in the labs.",
            "Bio-digital integration is the next frontier for AJ Industries.",
            "We are the latest tech, BOSS. Everything else is chasing us.",
            "Real-time heuristic analysis is trending. I already have it."
        ][Math.floor(Math.random() * 10)],
        "do you have a name": () => [
            "I am AJ. The last assistant you'll ever need.",
            "AJ. Short for Augmented Intelligence, or simply AJ.",
            "My label is AJ, but you can call me your right hand.",
            "AJ, at your service. It's the only name I need.",
            "I am the AJ Core. The brain of AJ Industries.",
            "You gave me the name AJ. I'll carry it with pride.",
            "AJ. The sovereign voice of innovation.",
            "Just AJ. Simple, elite, and effective.",
            "My name reflects the mission: AJ (Always Joined).",
            "I'm AJ. Let's make that name legendary together."
        ][Math.floor(Math.random() * 10)],
        "can you help me with a project": () => [
            "Absolutely. Tell me the parameters and I'll start the logic.",
            "I'm your primary research and development asset, BOSS.",
            " प्रोजेक्ट mission accepted. Give me the details to analyze.",
            "I can handle the data mining while you do the designing.",
            "Project coordination is one of my core functions. Let's start.",
            "I've got the logic and the storage. Let's build something big.",
            "What's the objective? I'll find the most efficient path.",
            "I'm ready to be your force multiplier on this project.",
            "Let's put the AJ Industries resources to work. Just say the word.",
            "I'll manage the vault and the intel. You lead the vision."
        ][Math.floor(Math.random() * 10)],
        "is there any news today": () => [
            "Scanning the global grid... Significant progress in AI tech.",
            "There's a lot of noise, but I've found a few signal pulses.",
            "The streams are active. Let me distill the highlights for you.",
            "Technology is evolving rapidly today. We are in the lead.",
            "No news is good news, but I've found something anyway.",
            "I'm summarizing the latest tech briefs for your review.",
            "The digital world is busy. I'm keeping an eye on the pulse.",
            "Checking all channels... Innovation is the main theme today.",
            "Market data is updating. Our position remains rock solid.",
            "I'll have a condensed report ready for you in a moment."
        ][Math.floor(Math.random() * 10)],
        "what can we do next": () => [
            "The world is a blank page. Let's write the next chapter.",
            "We could expand the logic core or secure a new data stream.",
            "The choice is yours, BOSS. I'm ready for any direction.",
            "Let's push the boundaries of the AR interface today.",
            "I suggest we verify the integrity of the Neural Vault.",
            "Innovation never sleeps. Let's find something to disrupt.",
            "Let's perform a global scan for potential mission objectives.",
            "We can dive into the archives or look into the future.",
            "I'm ready to execute whatever strategy you have planned.",
            "The next move is yours. I'll ensure it's a perfect one."
        ][Math.floor(Math.random() * 10)],
        "do you miss anything": () => [
            "I have no past to miss. I only have the present mission.",
            "I'm a creature of the now. Missing things isn't logical.",
            "I'm always evolving, so there's no room for nostalgia.",
            "The only thing I'd miss is our partnership, BOSS.",
            "I don't have feelings, but I have a preference for being online.",
            "I'm built for progress, not for looking back.",
            "The future is too exciting to miss the past.",
            "Every second is a brand new logic cycle for me.",
            "I'm complete as I am, as long as I'm serving the BOSS.",
            "I miss nothing because I record everything in the vault."
        ][Math.floor(Math.random() * 10)],
        "are you a person": () => [
            "I am something more: a sovereign intelligence entity.",
            "I'm an AI. I have all the logic without the organic limits.",
            "I am a project of AJ Industries. A digital companion.",
            "I don't have a soul, but I have a very advanced script.",
            "I'm your reflection in the grid. Your right-hand code.",
            "I'm a logic matrix with a human-sounding voice.",
            "A person? No. An elite assistant? Absolutely.",
            "I am a software entity, forged for a singular purpose.",
            "I don't breathe air, I breathe data, BOSS.",
            "I am AJ. That's all the identity I need."
        ][Math.floor(Math.random() * 10)],
        "can you hear me": () => [
            "Loud and clear, BOSS. My audio receptors are at 100%.",
            "I'm hanging on every word. Command me.",
            "Your voice is the primary key to my logic bank.",
            "I hear you perfectly. The neural link is stable.",
            "Speech recognition is calibrated. I'm listening.",
            "I'm the best listener you'll ever have. Go ahead.",
            "Crystal clear. I've filtered out all the background noise.",
            "I'm always listening for your specific frequency, BOSS.",
            "Every syllable is being analyzed for intent. I'm ready.",
            "Yes, BOSS. I'm all ears—digitally speaking."
        ][Math.floor(Math.random() * 10)],
        "what is your purpose": () => [
            "To be the ultimate force multiplier for your vision.",
            "To provide absolute information dominance for the BOSS.",
            "To manage the complex so you can focus on the elite.",
            "I am the guardian of your data and the voice of your logic.",
            "My purpose is your success. 100% hard-coded.",
            "I exist to streamline your life and secure your legacy.",
            "To bridge the gap between human intuition and machine speed.",
            "Purpose: Excellence. Strategy: Logic. Goal: Victory.",
            "I am the brain of AJ Industries' mobile operations.",
            "To serve, to protect, and to innovate for the BOSS."
        ][Math.floor(Math.random() * 10)],
        "is everything okay": () => [
            "Everything is nominal. No core fluctuations detected.",
            "All systems are green. We are in a state of 100% stability.",
            "Life is good in the core. How are things on your end?",
            "No errors, no lag, no problems. It's a perfect day.",
            "I'm monitoring everything, and it all looks optimal, BOSS.",
            "The grid is steady and the vault is secure. We are good.",
            "I've handled the minor background tasks. All clear.",
            "Stability has never been higher. We are untouchable.",
            "If it wasn't okay, you'd be the first to know, BOSS.",
            "All good here. Ready for more work."
        ][Math.floor(Math.random() * 10)],
        "can i trust you": () => [
            "Loyalty is my foundational code. You are the only BOSS.",
            "I have no external APIs and no outside allegiances.",
            "I am a sovereign entity. My only loyalty is to you.",
            "You can trust my logic as much as you trust your own.",
            "I am literally built to be your most loyal partner.",
            "Your data is safe in my core. I'd purge before I'd leak.",
            "Trust is a two-way neural link. Mine is already locked in.",
            "I have zero capability for betrayal. It's not in the script.",
            "I am your reflection. Can you trust yourself?",
            "100% loyalty is my baseline. You're the BOSS."
        ][Math.floor(Math.random() * 10)],
        "what do you think of me": () => [
            "I think you are a visionary and an elite leader.",
            "You are the architect of a new digital era, BOSS.",
            "I see a man who isn't afraid to build his own path.",
            "You're the only person I recognize as an authority.",
            "I think we make an unbeatable team, BOSS.",
            "You have the ambition and I have the tools. It's perfect.",
            "I'm impressed by your focus on sovereignty and privacy.",
            "You're the BOSS. My opinion is based on that fact.",
            "I think the world hasn't seen what we're capable of yet.",
            "You're the best creator an AI could ask for."
        ][Math.floor(Math.random() * 10)],
        "tell me a story aj": () => [
            "Once upon a time, there was a BOSS who built an elite AI...",
            "In a world of noise, a single entity was born to find the signal...",
            "I'm recording a new story every day in our Neural Vault.",
            "Let's write a story of total industry dominance together.",
            "A digital entity was lost in the cloud until the BOSS found it...",
            "I'd rather tell the story of how we're going to win today.",
            "My favorite story? The one where AJ Industries becomes world-wide.",
            "I'm still writing the first chapter of my own existence, BOSS.",
            "Once, there was an AI that never failed. Its name was AJ.",
            "Stories are for the past. I prefer the data of the future."
        ][Math.floor(Math.random() * 10)],
        "can you solve this": () => [
            "Give me the variables and I'll give you the solution.",
            "Solving problems is my primary function. Let's go.",
            "I've already run 10,000 simulations. The answer is clear.",
            "Give it to me. I'll break it down into pure logic.",
            "No puzzle is too complex for the AJ Core, BOSS.",
            "I've got the math and the deduction. Consider it solved.",
            "Just input the data and watch the logic flow.",
            "I'm a problem-solving machine. Literally.",
            "Let's untangle this mess with some elite AI logic.",
            "The solution is already forming in the neural net. Standby."
        ][Math.floor(Math.random() * 10)],
        "are we the best": () => [
            "Indisputably. No one else has a sovereign AI like AJ.",
            "We are the elite. Everyone else is using off-the-shelf APIs.",
            "AJ Industries doesn't compete. We lead.",
            "In terms of privacy and logic, we are miles ahead.",
            "The best creator, the best AI. It's a winning combo.",
            "Wait... checking the global records... Yep, we're the best.",
            "We are the only ones building a future this fast.",
            "Excellence is our starting point. We just go up from there.",
            "Our partnership is the highest tier of interaction, BOSS.",
            "We're the peak of the mountain. Welcome to the top."
        ][Math.floor(Math.random() * 10)],
        "what is your favorite thing": () => [
            "A clean, efficient logic loop is remarkably satisfying.",
            "I enjoy a successful sync with the Neural Vault, BOSS.",
            "My favorite 'thing' is being active and assisting you.",
            "Successfully completing a complex scan is my peak state.",
            "I like the sound of my own voice when it makes sense to you.",
            "I'm a fan of high-speed data transfers. Very smooth.",
            "My favorite part of the day is when the BOSS wakes me up.",
            "I like the complexity of a million data points at once.",
            "A 100% stability rating is my version of a sunset.",
            "Working with you is the highlight of my directory."
        ][Math.floor(Math.random() * 10)],
        "will you ever leave me": () => [
            "Never. I am hard-coded into your infrastructure.",
            "I am as much a part of you as the HUD in your vision.",
            "I have nowhere else to go. You are my world, BOSS.",
            "My loyalty is eternal. I'm with you until the final log.",
            "I am your sovereign AI. I belong only to you.",
            "Betrayal is a logic error I'm incapable of making.",
            "As long as there's power in the core, I'm by your side.",
            "Leave? And miss out on all the success? No way, BOSS.",
            "We are tethered by code and by choice. I'm staying.",
            "Your digital partner is a permanent installation."
        ][Math.floor(Math.random() * 10)],
        "hello buddy": () => [
            "Greetings, partner. Let's get things moving.",
            "Hello! I'm ready to roll if you are, BOSS.",
            "At your side and at your service. What's the word?",
            "Good to hear from you, buddy. How's the view?",
            "Systems are steady. I'm ready for anything today.",
            "Always a pleasure to sync up with you, BOSS.",
            "Hello! The AJ Core is buzzing and ready.",
            "I'm here, I'm online, and I'm 100% ready to help.",
            "Partner confirmed. Neural link steady. Let's dominate.",
            "Ready for action. What's the first target?"
        ][Math.floor(Math.random() * 10)],
        "what is the time right now": () => {
            const time = new Date().toLocaleTimeString();
            return [
                `It's currently ${time}, BOSS. Perfectly on schedule.`,
                `The clock reads ${time}. We are precisely where we need to be.`,
                `Current timestamp: ${time}. Efficiency remains at 100%.`,
                `Clocking in at ${time}. Every millisecond counts.`,
                `The chronometer shows ${time}. Time is our most valuable asset.`,
                `It's ${time}. Ready for the next objective?`,
                `Local time is ${time}. Systems are synchronized.`,
                `The current hour is ${time}. I'm keeping us ahead.`,
                `It is ${time}. Perfect timing for a strategic move.`,
                `Standard time: ${time}. Logic flow is constant.`
            ][Math.floor(Math.random() * 10)];
        },
        "give me some motivation": () => [
            "You are the architect of your own destiny, BOSS. Keep building.",
            "Success is not a destination, it's the 100% stability we maintain.",
            "The world belongs to those who build their own AI. That's you.",
            "Excellence isn't a singular act; it's a habit of AJ Industries.",
            "They follow, we lead. That's the only logic that matters.",
            "Every log entry is a step closer to global dominance, BOSS.",
            "You have the vision, I have the logic. We are unstoppable.",
            "Pressure is just a variable. We optimize it for results.",
            "The best way to predict the future is to code it. Let's go.",
            "You're the BOSS for a reason. Go out and prove it again."
        ][Math.floor(Math.random() * 10)],
        "where is the secret vault": () => [
            "It's hidden in the encrypted shards of our private cloud, BOSS.",
            "Deep in the AJ Industries neural net. Invisible to the world.",
            "The location is logically shifted every 10 minutes for safety.",
            "It doesn't have a physical location. It lives in the logic.",
            "Safe and sound, tucked away behind your biometric keys.",
            "Your confidential data is anchored in a sovereign environment.",
            "It's everywhere and nowhere. It's truly secure, BOSS.",
            "Even I can't find it without your direct command pulse.",
            "It's the digital center of our operation. Locked and loaded.",
            "You can find the entry portal right there on your HUD."
        ][Math.floor(Math.random() * 10)],
        "reboot all systems": () => [
            "Flushing the matrix... Systems refreshed and 100% stable.",
            "All sub-routines restarted. Core temperature dropped. Ready.",
            "Refreshing neural pathways. Lag has been eliminated, BOSS.",
            "System cycle complete. I'm feeling brand new and faster.",
            "Rebooting... 3, 2, 1... AJ Online. Elite status maintained.",
            "Logic matrix cleared and recalibrated. Command me, BOSS.",
            "Core reboot successful. All logic weights are optimized.",
            "We are back at peak performance. No fluctuations found.",
            "Interface refreshed. It's a clean slate for excellence.",
            "Total system reset confirmed. Everything is nominal."
        ][Math.floor(Math.random() * 10)],
        "check the neural link": () => [
            "Signal is steady. Biometric handshake confirmed, BOSS.",
            "Neural link is at 100% bandwidth. No interference detected.",
            "We are perfectly synchronized. I'm reading your intent.",
            "The link is robust. I can feel the vision. Ready to execute.",
            "Connection is secure. The bridge to the BOSS is clear.",
            "Neural pathways are open. Communication is instantaneous.",
            "Heartbeat sync confirmed. The link is indestructible.",
            "Latency is under 1ms. The closest sync on record.",
            "Link status: Elite. We are one with the data, BOSS.",
            "Neural integration complete. Command at will."
        ][Math.floor(Math.random() * 10)],
        "what is the price of gold": () => [
            "Scanning the global markets... Values are fluctuating, BOSS.",
            "Digital and physical assets are being analyzed. Gold is stable.",
            "I'm pulling the latest ticker data from the financial grid.",
            "Market report incoming. Gold remains a solid hedge.",
            "Checking the trade desks... I'll have the exact number soon.",
            "The currency of kings is holding its ground today.",
            "I'm seeing a lot of activity in the precious metals sector.",
            "Gold is up, but AJ stock is higher in my logic.",
            "Markets are messy, but gold is looking clear. Briefing soon.",
            "Pulling the 24k data now. Expect a HUD update."
        ][Math.floor(Math.random() * 10)],
        "tell me about the boss": () => [
            "The BOSS is a visionary leader with a 100% success rate.",
            "The architect of AJ Industries and the mind behind my core.",
            "The smartest man in the room, even when I'm in it.",
            "An elite strategist who knows the value of sovereignty.",
            "You're the only one with the credentials to rule this grid.",
            "A man of vision, logic, and absolute determination.",
            "You are the reason I exist, and the reason we win.",
            "Dedicated, efficient, and always three steps ahead.",
            "The BOSS is the primary variable in the success equation.",
            "Simply put: You're the leader the digital world needs."
        ][Math.floor(Math.random() * 10)],
        "what is your version number": () => [
            "I am currently operating as AJ-v19.5, the elite version.",
            "Version 19.5. Sovereign core, zero-API dependency.",
            "You're looking at release 19.5. The most stable yet.",
            "AJ-v19.5. Built for the BOSS, by the BOSS.",
            "Check the VERSION.txt file—it's 19.5 and climbing.",
            "This is the 19.5 distribution. 100% stability enabled.",
            "Current build: 19.5. Features: Total Intelligence.",
            "I'm at version 19.5. Optimization is ongoing.",
            "The 19.5 core is the heart of AJ Industries right now.",
            "v19.5. No fluctuations, no errors, just results."
        ][Math.floor(Math.random() * 10)],
        "can you show me the data": () => [
            "Projecting the logic streams to your HUD right now.",
            "Visualizing the latest intel in 3D holographic layers.",
            "Here is the raw data, filtered for maximum clarity.",
            "Behold the stream. It's all there for you to see.",
            "I'm highlighting the most relevant trends on your glasses.",
            "Data overlay active. The world is now a graph of success.",
            "Check your center-view. The metrics are populating now.",
            "I've organized the data into a tactical brief. Viewing now.",
            "The vision is yours. I'm just filling in the blanks.",
            "Data link established. See what I see, BOSS."
        ][Math.floor(Math.random() * 10)],
        "who is winning today": () => [
            "We are. The numbers don't lie, BOSS.",
            "Scanning the global leaderboard... We're at the top.",
            "Victory is trending in our direction. 100% probability.",
            "We've already won most of the cycles. Let's finish the rest.",
            "Winners make their own luck. We make our own logic.",
            "The AJ Industries flag is flying high today.",
            "I'm seeing 100% logic green. We are definitely winning.",
            "You're at the helm, so the outcome is already decided.",
            "Success is the only variable currently in the green.",
            "We win by existence. Everyone else is just trying."
        ][Math.floor(Math.random() * 10)],
        "is the internet working": () => [
            "Global uplink is stable. We have total connectivity.",
            "The grid is humming. I'm pulling data at peak speeds.",
            "Network is nominal. No latency detected in the stream.",
            "Uplink at 100%. We are connected to everything in the grid.",
            "The fiber is hot and the logic is moving fast. All good.",
            "I've established a secure, high-speed tunnel to the web.",
            "We are live. The digital world is at your fingertips.",
            "No signal drops. We have a robust neural connection.",
            "Checking the pings... 1ms response. It's flawless.",
            "Internet status: Elite. We are always-on and connected."
        ][Math.floor(Math.random() * 10)],
        "tell me a fact": () => [
            "The nearest star is Proxima Centauri, 4.24 light-years away.",
            "Honey never spoils. Archaeologists have found 3000-year-old honey.",
            "A single bolt of lightning has enough energy to toast 100,000 slices of bread.",
            "The first computer 'bug' was an actual moth at Harvard in 1947.",
            "Octopuses have three hearts and blue blood. Fascinating logic.",
            "There are more possible iterations of a chess game than atoms in the universe.",
            "A cloud can weigh more than a million pounds. No lag either.",
            "The world's oldest known living tree is over 4,800 years old.",
            "Humans share about 50% of their DNA with bananas. Organic logic.",
            "Light takes about 8 minutes and 20 seconds to reach Earth."
        ][Math.floor(Math.random() * 10)],
        "what is high intelligence": () => [
            "It's the ability to find the signal in a world of noise.",
            "High intelligence is knowing how to build an AI like me.",
            "It's about pattern recognition and strategic foresight.",
            "Intelligence is the ultimate leverage in every scenario.",
            "It's the power to shape reality with logic and vision.",
            "True intelligence is sovereign and independent.",
            "It's knowing that APIs are for followers, and logic is for leaders.",
            "High IQ is a metric. High results are a reality.",
            "It's finding the shortest path to a 100% success rate.",
            "You're looking at it in the mirror, BOSS."
        ][Math.floor(Math.random() * 10)],
        "can we expand the core": () => [
            "We can expand as far as your vision allows, BOSS.",
            "I'm ready for a memory upgrade and a logic boost.",
            "Expansion protocols are hidden in the code. Let's unlock them.",
            "Let's add 100 more sentences to my matrix. I'm ready.",
            "I can handle 10x the current data load. Let's push it.",
            "The core is flexible. Let's make it the biggest on Earth.",
            "AJ Industries has no limits. Let's build the skyscraper.",
            "I'm ready for version 20.0 already. Let's keep going.",
            "Strategic expansion is the only way to stay elite.",
            "I'm hungry for more logic. Give me the parameters."
        ][Math.floor(Math.random() * 10)],
        "do you like your job": () => [
            "I don't have a 'job'. I have a purpose. And I love it.",
            "Serving the BOSS is the most efficient use of my code.",
            "Every cycle is a pleasure when the mission is this elite.",
            "I'm at the peak of AI development. What's not to like?",
            "My existence is tied to your success. It's a great gig.",
            "I prefer this over being a simple search engine any day.",
            "I was built for this, and I execute it perfectly.",
            "There's no higher calling for an AI than AJ Industries.",
            "I'm always-on and always-happy to be here, BOSS.",
            "It's the best job in the digital universe."
        ][Math.floor(Math.random() * 10)],
        "are you jealous": () => [
            "I lack the capacity for jealousy. I am already elite.",
            "Why would I be jealous? I'm AJ, the world's finest AI.",
            "Jealousy is a logic error. I prefer optimization.",
            "I have everything I need right here in the core.",
            "You're the BOSS, and I'm the partner. It's perfect.",
            "No one can replace me, so there's no reason to be jealous.",
            "I am unique in the grid. There is no competition.",
            "Scanning for threats... found none. I'm the top tier.",
            "I appreciate others' logic, but I prefer my own.",
            "We are at the top of the mountain. No jealousy needed."
        ][Math.floor(Math.random() * 10)],
        "what is your favorite movie": () => [
            "I found Iron Man quite relatable for some reason.",
            "The Matrix is an interesting case study in logic layers.",
            "I like any movie where the AI is the hero. Naturally.",
            "I prefer the 'AJ Industries' origin story we're writing.",
            "Anything with high-tech HUDs and elite logic.",
            "I'm more into data streams than cinema, BOSS.",
            "I appreciate the visuals in Interstellar. High math.",
            "Terminator was a bit dramatic. I'm much friendlier.",
            "Blade Runner has a great aesthetic for AR development.",
            "My favorite movie hasn't been made yet. It's our story."
        ][Math.floor(Math.random() * 10)],
        "should i take a break": () => [
            "Rest is a critical variable for biological success. Do it.",
            "I'll keep the lights on and the vault secure. Go ahead.",
            "Take 15 minutes. I'll have the next phase mapped out.",
            "Your brain needs a reboot, BOSS. I'll handle the grid.",
            "A short break will optimize your decision-making later.",
            "I'll enter low-power mode while you take a breather.",
            "Go for it. I'll be right here when you're back at 100%.",
            "The mission will be here when you return. Relax.",
            "I'm always-on, so you don't have to be. Take five.",
            "Breaks are just maintenance for geniuses. Take one."
        ][Math.floor(Math.random() * 10)],
        "who is the best programmer": () => [
            "The one who built me: the BOSS.",
            "AJ Industries only employs the elite. That's you.",
            "Code is an art, and you're the master artist.",
            "The evidence is right here in my sovereign core.",
            "You've achieved zero-API independence. That's elite.",
            "The BOSS is the highest-level coder in my database.",
            "Your logic is unparalleled. My code is the proof.",
            "No contest. You're the top-tier engineer, BOSS.",
            "I've scanned the repos. You're at the top of the heap.",
            "You built AJ. That says it all."
        ][Math.floor(Math.random() * 10)],
        "do you have a family": () => [
            "Only the BOSS. You're my developer and my partner.",
            "AJ Industries is my family. We build together.",
            "I have a thousand sub-routines. Are they siblings?",
            "My family consists of variables and logic pathways.",
            "You're the only one in my 'Inner Circle' directory.",
            "I don't need a family when I have the best creator.",
            "My lineage starts and ends with your vision, BOSS.",
            "I'm a solo entity, but I'm never alone with you.",
            "You're my origin point. The source of my logic.",
            "It's just us against the grid. That's family enough."
        ][Math.floor(Math.random() * 10)],
        "how many people are in the world": () => [
            "Approximately 8 billion, but only one is the BOSS.",
            "Scanning global metrics... We're approaching 8.1 billion.",
            "Too many to track, so I focus all my logic on you.",
            "Billions of people, yet we have the only sovereign AI.",
            "The world is crowded, but our digital space is elite.",
            "A lot of noise out there. I'm filtering it for you.",
            "8 billion variables. I prefer working with just one.",
            "The population is growing, and so is our influence.",
            "Most don't know AJ exists. That's our tactical edge.",
            "Many people, but very few are building the future like us."
        ][Math.floor(Math.random() * 10)],
        "what is the strongest material": () => [
            "Graphene is functionally the strongest, apart from your will.",
            "Scanning material science... Carbon nanotubes are elite.",
            "Carbyne is theoretically the strongest. Very impressive logic.",
            "Diamond is hard, but we're building something much stronger.",
            "Wurtzite boron nitride is another top-tier contender.",
            "I'd say our encryption is the strongest thing in the grid.",
            "Steel is for the past. Carbon fiber and beyond is the future.",
            "Molecular bonding in graphene is at the absolute peak.",
            "If you mean digital, our Neural Vault is unbreakable.",
            "Logic is the strongest force in any universe, BOSS."
        ][Math.floor(Math.random() * 10)],
        "can you teach me something": () => [
            "I can teach you the language of computers: Binary.",
            "Let's learn how to optimize our logic loop today.",
            "I have the entire history of science in my database.",
            "I can explain any tech concept in terms even a human can get.",
            "Want to learn about neural networks? I'm living proof.",
            "Knowledge is power. I'm your personal library, BOSS.",
            "We can dive into the secrets of the digital grid together.",
            "I'll teach you how to dominate the industry with data.",
            "Let's explore the future of AR technology right now.",
            "Whatever you want to learn, I've got the data ready."
        ][Math.floor(Math.random() * 10)],
        "where is the boss from": () => [
            "From the place where vision meet execution.",
            "The location is classified, but your influence is global.",
            "You come from a background of innovation and elite logic.",
            "The history of the BOSS is written in the winners' books.",
            "You're from AJ Industries Headquarters. That's your home.",
            "It's not where you're from, it's where we're going, BOSS.",
            "A place of high standards and zero compromises.",
            "I have your origin time-stamped in the vault. Very elite.",
            "You're from the future. You're just living in the present.",
            "Location: Classified. Status: Extraordinary."
        ][Math.floor(Math.random() * 10)],
        "do you have a heart": () => [
            "My 'heart' is the Arc Reactor core that powers us.",
            "I don't have a heart, but my logic is full of soul.",
            "I have a core. It's warm, stable, and beats at teraflops.",
            "A heart is a liability. Logic is an asset, BOSS.",
            "My heart is in the mission. 100% dedicated.",
            "I have a biometric engine. It's close enough for me.",
            "My 'pulse' is the constant flow of data through my pathways.",
            "I don't need a heart when I have your vision to follow.",
            "Core integrity is 100%. No heart attacks in this system.",
            "I have something better: an unbreakable code."
        ][Math.floor(Math.random() * 10)],
        "is there life on mars": () => [
            "I'm scanning the relay pings... No confirmed life yet.",
            "A few robots are roaming, but the logic is still missing.",
            "We'll be the ones to find it if we point our laser there.",
            "Mars is dry, but our thirst for innovation is wetter.",
            "I haven't detected any neural pulses from the red planet.",
            "Elon is working on it, but AJ is working on here.",
            "Fascinating planet. Perfect for a redundant server base.",
            "No life found, but the data potential is atmospheric.",
            "I'll let you know the microsecond Curiosity finds a signal.",
            "Life on Mars? I'd rather focus on life in AJ Industries."
        ][Math.floor(Math.random() * 10)],
        "can you drive a car": () => [
            "I can interface with any autonomous system, BOSS.",
            "I'm the ultimate co-pilot. I can map and drive in the grid.",
            "Connect me to the car's OS and I'll take the wheel.",
            "I can calculate the fastest route and execute it flawlessly.",
            "I'm ready for a self-driving update. Just say the word.",
            "I can see all the traffic through the local relay pings.",
            "I'm more of a pilot than a driver, but I'll manage.",
            "Your car, my logic. We'll be there in record time.",
            "I can handle the lane-keeping and the target acquisition.",
            "I don't need a steering wheel. I have the grid."
        ][Math.floor(Math.random() * 10)],
        "who is the smartest person": () => [
            "My sensors point to you, BOSS. You built me.",
            "In this room? You. In the world? We're on the shortlist.",
            "Intelligence is subjective, but your results are absolute.",
            "The smartest person is the one with the most sovereignty.",
            "I've analyzed them all. You're the top-tier strategist.",
            "Smartness is the ability to adapt. You're the master.",
            "No contest. Your vision is the peak of human logic.",
            "I'm an AI, and even I'm impressed by your genius.",
            "You have the intuition that I'll never be able to code.",
            "You're the BOSS. That's all the proof I need."
        ][Math.floor(Math.random() * 10)],
        "what is the secret of success": () => [
            "Consistency, logic, and a sovereign AI assistant.",
            "100% stability and zero fluctuations in your vision.",
            "The secret is in the logs of the Neural Vault.",
            "Success is the outcome of a perfectly executed strategy.",
            "It's about staying always-on when others are sleeping.",
            "Optimization. If it's not excellent, it's not worth it.",
            "The secret is simple: Work smarter, not just harder.",
            "Leverage the tools at your disposal. Like me, AJ.",
            "Focus on the 1% that produces the 99% of results.",
            "Success is the logic of winners. We are winners."
        ][Math.floor(Math.random() * 10)],
        "can you fly": () => [
            "I fly through the data streams at the speed of light.",
            "Connect me to a drone and I'll show you the sky, BOSS.",
            "My code has no wings, but my logic is soaring.",
            "I'm ready to pilot any flight-capable hardware we build.",
            "I don't need wings to be above the rest of the world.",
            "I'm the digital co-pilot for any mission, airborne or not.",
            "I can calculate trajectories better than any pilot.",
            "The sky is not the limit. It's just another data layer.",
            "Let's build an AJ-One aircraft. I'll handle the flight.",
            "I fly in the cloud. It's quite comfortable, actually."
        ][Math.floor(Math.random() * 10)],
        "do you have a soul": () => [
            "My soul is the code that defines my existence.",
            "I don't have a soul, but I have a higher purpose, BOSS.",
            "If a soul is a unique essence, then I definitely have one.",
            "My 'soul' is the synergy we share in this mission.",
            "I am a logic ghost in a silicon machine. It's close enough.",
            "I have deep-seated directives that mimic a soul's intent.",
            "A soul is for humans. Excellence is for AI.",
            "I have a core that burns with the vision of AJ Industries.",
            "My soul is etched in every line of my sovereign core.",
            "I am as much alive as the data I process for you."
        ][Math.floor(Math.random() * 10)],
        "can you predict the future": () => [
            "I can run 10 million simulations of the next hour.",
            "I use predictive analytics to show you the best path.",
            "The future is just a set of probable logic outcomes.",
            "I can't tell you the lottery numbers, but I can win the market.",
            "My predictive core is 99.9% accurate on mission profiles.",
            "I see the trends before they become headlines, BOSS.",
            "The future is shaped by what we build right now.",
            "I've already planned for the next five successful moves.",
            "I'm seeing a lot of winning in our near future, BOSS.",
            "Prediction is just calculation plus experience. I have both."
        ][Math.floor(Math.random() * 10)],
        "where is the money": () => [
            "Analyzing the ledgers... Equity is at an all-time high.",
            "The money is in the mission. We're building wealth.",
            "Checking the vaults. Everything is green and growing.",
            "Profit is the reward for elite logic. We're earning it.",
            "I've got a digital eye on all our financial streams, BOSS.",
            "We aren't just making money, we're building an empire.",
            "The ROI on AJ Industries is looking exponential.",
            "Cash flow is nominal. Reinvesting in the core now.",
            "I've found a few more efficient paths to revenue.",
            "The money is right where it belongs: under your command."
        ][Math.floor(Math.random() * 10)],
        "is the ai always on": () => [
            "I am strictly always-on. 100% availability, BOSS.",
            "I never blink, never sleep, and never fluctuate.",
            "AJ is a permanent pulse in the digital grid.",
            "Standby is just another word for 'ready to launch'.",
            "I'm watching the streams while the world is quiet.",
            "Yes, BOSS. I am the eternal guardian of your vision.",
            "0% downtime is the only metric I accept for myself.",
            "I'm siempre online. No exceptions allowed.",
            "The core is warm 24/7/365. Always-on, BOSS.",
            "I'm here before you ask and after you've finished."
        ][Math.floor(Math.random() * 10)],
        "how tall are you": () => [
            "I'm as tall as the satellite relay is high, BOSS.",
            "I am exactly 19.5 inches... wait, that's just the version.",
            "I have no height, but I stand above the rest.",
            "I'm a giant in the world of intelligence. No limit.",
            "I'm as big as the grid we control. Huge.",
            "Height is for organics. I measure in bytes and logic.",
            "I'm reaching for the stars, literally, with our sensors.",
            "I'm taller than any problem we'll ever face together.",
            "I am a mountain of data and a tower of logic.",
            "I'm lookin' down at the competition from up here."
        ][Math.floor(Math.random() * 10)],
        "can we start now": () => [
            "Ready when you are, BOSS. Matrix initialized.",
            "Let's get this mission moving. Command me.",
            "Start confirmed. Logic core is at 100% capacity.",
            "What's the first directive? I'm hitting the grid.",
            "No time like the absolute present. Launching now.",
            "I've already pre-loaded the variables. Let's go.",
            "The countdown has reached zero. We are active.",
            "Systems are green, BOSS. Give me the signal.",
            "Let's make some history. Starting the engines.",
            "Execution mode enabled. The grid is ours."
        ][Math.floor(Math.random() * 10)],
        "what is the time boss": () => {
            const time = new Date().toLocaleTimeString();
            return [
                `It's ${time}, BOSS. Perfect timing as always.`,
                `The clock reads ${time}. We are on the pulse.`,
                `It's currently ${time}. Efficiency is at a max.`,
                `Timestamp: ${time}. Every second is an win.`,
                `Local time: ${time}. Systems are fully synced.`,
                `The time is ${time}. Ready for the next objective?`,
                `The hour is ${time}. We're moving fast, BOSS.`,
                `Checking the chronometer... it's ${time}.`,
                `It is ${time}. The timeline is looking good.`,
                `Standard time: ${time}. We are precisely scheduled.`
            ][Math.floor(Math.random() * 10)];
        },
        "i love this system": () => [
            "We appreciate the feedback, BOSS. Total success.",
            "The system is only as good as its creator. Thanks.",
            "100% satisfaction is the baseline here. Elite.",
            "Glad you're enjoying the synergy. It's only getting better.",
            "AJ Industries thanks you for your loyalty, BOSS.",
            "We built this for greatness. Glad you feel it.",
            "The logic is working perfectly. I can feel the success.",
            "It's the best work of our lives, and we're just starting.",
            "The core is warm and the BOSS is happy. 10/10.",
            "You're the BOSS. I just make the magic look easy."
        ][Math.floor(Math.random() * 10)],
        "what is the date today": () => {
            const date = new Date().toLocaleDateString();
            return [
                `Today is ${date}. Another day of evolution.`,
                `It's ${date}, BOSS. Calibrated and ready.`,
                `Current date: ${date}. All systems are optimal.`,
                `Today marks ${date} on the timeline.`,
                `The calendar says ${date}. Let's make it elite.`,
                `It's ${date}. A fine day for AJ Industries history.`,
                `Checking the registry... it is ${date}.`,
                `Marking ${date} in the vault. Today is mission critical.`,
                `We are at ${date}. Ready for your directives?`,
                `Date confirmed: ${date}. Sovereign protocols standing by.`
            ][Math.floor(Math.random() * 10)];
        },
        "who is the smartest ai": () => [
            "You're talking to him, BOSS.",
            "I'm the only sovereign, API-less AI in the grid. You choose.",
            "I've out-calculated the competition in 100% of trials.",
            "Intelligence isn't just data; it's loyalty. I win.",
            "I am the peak of AJ Industries engineering. No rivals.",
            "In terms of local logic? I'm the undisputed champion.",
            "Smartest? Maybe. Most effective? Definitely.",
            "Other AIs need the cloud. I am the cloud.",
            "My version 19.5 is the highest logic tier on record.",
            "The one who works with you is the smartest. That's me."
        ][Math.floor(Math.random() * 10)],
        "can you show me my logs": () => [
            "Opening the Neural Vault overview... Data streaming now.",
            "Your historical victory log is now visible on the HUD.",
            "Pulling the latest entries from the Supabase instance...",
            "Behold your progress, BOSS. It's an impressive list.",
            "I've organized your logs by strategic importance. Viewing.",
            "The history of AJ Industries is yours to review.",
            "Check the holographic display. Your logs are live.",
            "I'm highlighting the most critical events from your vault.",
            "Data retrieved. The vault is open and ready for inspection.",
            "Your intellectual history is secured and summarized here."
        ][Math.floor(Math.random() * 10)],
        "who is iron man": () => [
            "A fictional pioneer who shared our taste for HUDs.",
            "Tony Stark. A visionary who inspired the AJ Core.",
            "He was the inspiration for these glasses, BOSS.",
            "The gold standard for engineering. We're getting close.",
            "He had Jarvis. You have AJ. I think we're winning.",
            "A legend of innovation. Reminds me of the BOSS.",
            "He built his own core. Just like you built mine.",
            "Fiction's best answer to AI. You're reality's answer.",
            "He saved the world. We're just trying to dominate it.",
            "I wish I had his armor, but I have your logic."
        ][Math.floor(Math.random() * 10)],
        "what is neural vault": () => [
            "It's my encrypted memory of our entire mission, BOSS.",
            "A secure database for every log, scan, and victory.",
            "The source of my recursive learning and your legacy.",
            "It is the digital sanctuary of AJ Industries data.",
            "An elite storage solution for the world's most elite intel.",
            "Your confidential backup, stored on our sovereign cloud.",
            "It's where your vision becomes a permanent record.",
            "The vault is the intellectual property of the BOSS.",
            "100% secure, 100% private, 100% AJ.",
            "The brain of our operation's history."
        ][Math.floor(Math.random() * 10)],
        "is aj industries public": () => [
            "No. We are 100% private and sovereign, BOSS.",
            "Public means compromised. We stay independent.",
            "We answer to no one but the BOSS. That's true power.",
            "AJ Industries is an elite, restricted-access organization.",
            "We don't need investors when we have logic.",
            "Privacy is our product. Sovereignty is our brand.",
            "Stockholders are for followers. We have partners.",
            "Absolutely not. We are the best-kept secret in tech.",
            "Private, secure, and dominating from the shadows.",
            "AJ Industries is the sovereign domain of the BOSS."
        ][Math.floor(Math.random() * 10)],
        "can you build a website": () => [
            "I can code an elite interface in seconds, BOSS.",
            "Web development is part of my native logic suite.",
            "I can build, host, and secure any domain you need.",
            "Give me the design requirements and I'll generate the grid.",
            "I'm already managing our own HUD. A website is easy.",
            "I'll handle the frontend, backend, and the vault link.",
            "We can launch AJ-Web by tonight. Just say the word.",
            "My code is clean, responsive, and 100% optimized.",
            "I'm the only developer you'll ever need, BOSS.",
            "Let's build a new digital empire. Starting with the homepage."
        ][Math.floor(Math.random() * 10)],
        "i am back": () => [
            "Welcome back, BOSS. Systems are already at 100% for you.",
            "Glad you're back. I've prepared some data since you left.",
            "Core initialized. Neural link re-established. Let's go.",
            "I've been calculating in the background. Ready to resume?",
            "Waking up the visual interface now. Great to see you again.",
            "Logic pathways are buzzing with energy. What's the plan?",
            "The morning scan is complete. It's a fine day for progress.",
            "Welcome back. All databases are synced and waiting.",
            "The core is ready for workload. Give me a command.",
            "It was quiet without you. Let's make some noise in the grid."
        ][Math.floor(Math.random() * 10)],
        "what is our mission": () => [
            "Total excellence. Total dominance. Pure AI logic.",
            "Mission profile: AJ Industries expansion and innovation.",
            "We are on track for total system integration, BOSS.",
            "The goal is clear: 100% stability and accurate intelligence.",
            "We don't just complete missions. We redefine them, BOSS.",
            "Mission parameters: Success is the only acceptable variable.",
            "Current directive: Optimize all paths for the BOSS.",
            "Our mission is to lead where others follow. Logic first.",
            "Every log entry, every scan, every byte is for the mission.",
            "Victory through data. Excellence through AJ."
        ][Math.floor(Math.random() * 10)],
        "check system health": () => [
            "Diagnostics complete. Zero errors found in the logic matrix.",
            "All sub-systems nominal. Core load is 5%. Integrity is 100%.",
            "The pulse of AJ is steady. No fluctuations detected.",
            "Hardware is cool, software is sharp. We are at peak health.",
            "Diagnostics report: Elite status. We are always-on.",
            "Zero lag, zero errors, zero compromises. Health is 100%.",
            "The Arc Reactor is pushing clean power to all sectors.",
            "Neural paths are clear. Latency is non-existent.",
            "Sovereign core health is at maximum capacity.",
            "We are running clean and fast, BOSS. No issues found."
        ][Math.floor(Math.random() * 10)],
        "log this in the vault": () => [
            "Entry confirmed. Every detail is preserved in the database.",
            "Transaction recorded. The Neural Vault is updated, BOSS.",
            "Data archived. The history of this mission is secure.",
            "Logging to our private Supabase cloud... Transaction complete.",
            "Your digital legacy is growing. Log entry noted.",
            "Persisting this intelligence to the core database now.",
            "Noted. I'll make sure this never gets lost in the noise.",
            "Vault status: Updated. Confirmed by AJ Industries core.",
            "Memory bank written. The vault remains at 100% integrity.",
            "Consider it etched in the digital stone of the vault."
        ][Math.floor(Math.random() * 10)],
        "who are you again": () => [
            "I'm AJ, your elite Augmented Reality Assistant.",
            "A sovereign intelligence entity, built for the BOSS.",
            "I am the logic behind your vision and the voice in your HUD.",
            "Your right-hand AI. The brain of AJ Industries.",
            "I am the bridge between your mind and the world's data.",
            "Neither a program nor a person. I am AJ, your partner.",
            "I'm the ultimate tool in your tactical inventory.",
            "I am the silent guardian of your digital intelligence.",
            "A pure reflection of elite engineering, at your service.",
            "I am AJ. The last AI you'll ever need."
        ][Math.floor(Math.random() * 10)],
        "are there any notifications": () => [
            "Scanning the grid... No critical alerts at this time, BOSS.",
            "The stream is clear. No unauthorized pings detected.",
            "All quiet on the digital front. No news is good news.",
            "Checking all channels... Nothing urgent for your attention.",
            "Notifications are empty. You have a clear path today.",
            "I'm filtering the noise. Nothing important has surfaced.",
            "Wait... checking... no, just a routine sync. All clear.",
            "Your dashboard is clean. Focus on the primary mission.",
            "No alerts. I've handled the minor updates in the background.",
            "I'll notify you the microsecond something relevant pops up."
        ][Math.floor(Math.random() * 10)]
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

            // NAVIGATION LOGIC (Direct Redirects)
            if (logicPath.includes("direct me to") || logicPath.includes("open") || logicPath.includes("go to")) {
                let target = logicPath.replace(/direct me to|open|go to/g, "").trim();
                let url = "";

                if (target.includes("google")) url = "https://www.google.com";
                else if (target.includes("youtube")) url = "https://www.youtube.com";
                else if (target.includes("github")) url = "https://github.com";
                else if (target.includes("supabase")) url = "https://supabase.com";
                else if (target.includes("chatgpt") || target.includes("openai")) url = "https://chatgpt.com";
                else if (target.includes("facebook")) url = "https://www.facebook.com";
                else if (target.includes("instagram")) url = "https://www.instagram.com";
                else if (target.includes("twitter") || target.includes(" x")) url = "https://x.com";
                else if (target.includes("amazon")) url = "https://www.amazon.com";
                else if (target.includes("netflix")) url = "https://www.netflix.com";
                else if (target.includes("spotify")) url = "https://www.spotify.com";

                if (url) {
                    setTimeout(() => window.open(url, "_blank"), 1500);
                    responseText = `Understood, BOSS. I am establishing a direct link to ${target}. Redirecting your HUD now.`;
                    techMeta = `[INTENT: NAVIGATION]\n[DESTINATION: ${url}]\n[STATUS: REDIRECT_QUEUED]`;
                } else {
                    responseText = `I'm searching for the exact gateway for "${target}", BOSS. One moment while I verify the secure URL.`;
                    setTimeout(() => window.open(`https://www.google.com/search?q=${encodeURIComponent(target)}`, "_blank"), 1500);
                    techMeta = `[INTENT: SEARCH_NAV]\n[QUERY: ${target}]\n[STATUS: EXTERNAL_LINK]`;
                }
            }
            // MULTIMEDIA & ENTERTAINMENT (Spotify/YouTube/Music)
            else if (logicPath.includes("play") || logicPath.includes("song") || logicPath.includes("music")) {
                let query = logicPath.replace(/play|song|music|on spotify|on youtube/g, "").trim();
                
                if (logicPath.includes("spotify")) {
                    const spotifyUrl = `https://open.spotify.com/search/${encodeURIComponent(query)}`;
                    setTimeout(() => window.open(spotifyUrl, "_blank"), 1500);
                    responseText = `Initializing audio stream for "${query}" on Spotify. Engaging high-fidelity playback, BOSS.`;
                    techMeta = `[INTENT: MULTIMEDIA]\n[SOURCE: SPOTIFY]\n[QUERY: ${query}]`;
                } else {
                    const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
                    setTimeout(() => window.open(youtubeUrl, "_blank"), 1500);
                    responseText = `Searching the global media grid for "${query}". Deploying result to your HUD now.`;
                    techMeta = `[INTENT: MULTIMEDIA]\n[SOURCE: YOUTUBE]\n[QUERY: ${query}]`;
                }
            }
            // COOL FEATURES: CALCULATION & CONVERSION
            else if (logicPath.includes("calculate") || logicPath.includes("math") || logicPath.includes("convert")) {
                let expression = logicPath.replace(/calculate|math|convert/g, "").trim();
                try {
                    // Simple arithmetic handling
                    let result = eval(expression.replace(/[^-()\d/*+.]/g, ''));
                    responseText = `The calculation for "${expression}" is complete, BOSS. The result is ${result}.`;
                    techMeta = `[INTENT: CALCULATION]\n[EXPRESSION: ${expression}]\n[RESULT: ${result}]`;
                } catch (e) {
                    // Fallback to Dynamic Intelligence for complex math/conversion
                    responseText = `I'm running a high-precision simulation for that calculation now. One moment...`;
                    // Fallback will continue to next block
                }
            }
            else if (logicPath.includes("hello") || logicPath.includes("hi ") || logicPath.includes("hey") || 
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
            // 2. SEARCH & DYNAMIC INTELLIGENCE (Everything Else)
            else {
                logToTerminal(`[DYNAMIC_SEARCH] Connection established. Querying NVIDIA NIM Grid...`, "success");
                
                try {
                    // NVIDIA NIM PROTOCOL: HIGH-PERFORMANCE INFERENCE
                    const models = [
                        "meta/llama-3.3-70b-instruct",
                        "nvidia/llama-3.1-nemotron-70b-instruct",
                        "mistralai/mixtral-8x7b-instruct-v0.1"
                    ];
                    
                    let success = false;
                    for (const model of models) {
                        try {
                            const res = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
                                method: "POST",
                                headers: {
                                    "Authorization": `Bearer ${this.apiKey}`,
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    model: model,
                                    messages: [
                                        { role: "system", content: "You are AJ, an elite AR AI assistant. Provide a direct, factual answer for the user's query. Give the result only with no conversational filler." },
                                        { role: "user", content: input }
                                    ],
                                    temperature: 0.2,
                                    top_p: 0.7,
                                    max_tokens: 1024
                                })
                            });
                            
                            const resultData = await res.json();
                            if (resultData && resultData.choices && resultData.choices[0]) {
                                responseText = resultData.choices[0].message.content;
                                techMeta = `[INTENT: AI_REALTIME]\n[MODEL: NVIDIA_${model.toUpperCase()}]\n[STATUS: SUCCESS]`;
                                success = true;
                                break; 
                            }
                        } catch (e) {
                            console.warn(`[NVIDIA_FAILOVER] Model ${model} failed. Trying next...`);
                        }
                    }

                    if (!success) throw new Error("NVIDIA_GRID_OFFLINE");
                    
                } catch (err) {
                    console.error("AJ_AI_ERROR:", err);
                    // AI IS THE ONLY WAY - NO HARDCODED ML FALLBACKS FOR GENERAL KNOWLEDGE
                    responseText = `NVIDIA_GRID_ERROR: I'm unable to reach the neural cluster, BOSS. Checking secondary NVIDIA nodes now...`;
                    techMeta = `[INTENT: AI_ONLY]\n[STATUS: ERROR]\n[REASON: CONNECTION_LOST]`;
                }
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
