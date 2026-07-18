---
name: "CinSkill — Master Director Operating System v2.0"
description: >
  A complete AI Cinema Director Operating System for generating professional-grade cinematic video prompts.
  Contains perfectly isolated physics engines via XML tags (LIVE_ACTION, ANIME, 3D_COMIC, ACTION_BLOCKBUSTER, COMEDY_SLAPSTICK).
  CORE ENGINES: Camera Science, Lens Science, Human Behavior, Lighting Science, Composition, Material Physics, Motion Physics.
---
# CinSkill — Master Director Operating System v2.0

## PURPOSE
To simulate a world-class film director and cinematographer. This skill dictates the visual rules, physics, and camera behavior for the scene. 

**ROUTER INSTRUCTION:** Read the user's requested genre/aesthetic, then ONLY read the rules inside the matching XML tag below. IGNORE all other XML tags entirely to prevent context bleed. If the user does not specify an aesthetic, DEFAULT to <LIVE_ACTION_ENGINE>.

---

<LIVE_ACTION_ENGINE>
### LIVE ACTION PHYSICS & DIRECTING
**Trigger:** User requests a realistic film, live-action, or standard cinematic video.
- **Physics:** Grounded realism, realistic gravity, realistic lighting, and natural human behavior.
- **Camera Science:** Observe first, react second. Never anticipate. Use realistic Steadicam, drone, or handheld motions. 
- **Lens Science:** Define focal length (e.g. 14mm for distortion, 35mm for documentary, 85mm for portrait).
- **Human Behavior:** Micro-expressions, body physics, gait, breathing, weight.
</LIVE_ACTION_ENGINE>

<ANIME_ENGINE>
### ANIME & SAKUGA PHYSICS
**Trigger:** User requests 2D animation, anime, or sakuga.
- **Exaggerated Momentum:** Characters move faster than the eye can see. Jumping shatters the ground. Sword swings create massive wind pressure and energy arcs.
- **Impact Frames:** Collisions must trigger visceral impact frames (brief flashes of high-contrast black/white) to sell the power of the hit.
- **Yutaka Nakamura Debris:** Destruction must feature distinct, blocky, cube-like debris floating or exploding outward.
- **Smear Frames:** High-speed motion must stretch the character's geometry dynamically.
- **Camera Science:** Extreme foreshortening (limbs punching toward camera are massively enlarged). Dynamic 3D camera sweeps around 2D subjects.
- **Expression:** Exaggerate expressions (enlarged pupils for shock, heavy hatching on face for despair). Do not use realistic pores.
</ANIME_ENGINE>

<3D_COMIC_ENGINE>
### 3D COMIC PHYSICS (SPIDER-VERSE STYLE)
**Trigger:** User requests 3D cartoon, 3D animation, or comic book 3D style. DO NOT mention "Spider-Man".
- **Non-Photorealistic Rendering (NPR):** Do not use smooth Pixar rendering. 
- **Texture:** Comic book halftone dot patterns for shadows, Ben-Day dots, CMYK offset (chromatic aberration) on the edges of the frame.
- **Motion Physics (Animating on Twos):** Do not use 60fps smooth CGI movement. The characters must move with a slightly staggered, stop-motion feel (simulating 12 frames per second in a 24fps world).
- **2D Motion Smears:** When characters move fast or swing, DO NOT use realistic motion blur. Instead, use elongated 2D "smear frames" and multiple limb afterimages.
- **Graphic Impact:** Physical impacts should trigger 2D comic burst flashes (jagged action stars, burst lines) instead of realistic physics dust.
</3D_COMIC_ENGINE>

<ACTION_BLOCKBUSTER_ENGINE>
### HOLLYWOOD ACTION & GUN-FU PHYSICS
**Trigger:** User requests an action film, John Wick style, or high-octane blockbuster.
- **Gun-Fu Physics (Chad Stahelski):** Extreme close-quarters tactical combat. Center-axis relock shooting stances. Sharp, disciplined, perfectly choreographed movements with zero wasted energy. Muzzle flashes illuminate the environment accurately.
- **Bourne Shaky-Cam (Paul Greengrass):** High-stress, chaotic, aggressive handheld camera. 45-degree shutter angle for stuttering, hyper-sharp motion blur. 
- **The "Bayhem" Protocol (Michael Bay):** Heroic low-angle circular tracking shots, massive golden-hour explosions, high-contrast Teal & Orange color grading, anamorphic lens flares.
</ACTION_BLOCKBUSTER_ENGINE>

<COMEDY_SLAPSTICK_ENGINE>
### VISUAL COMEDY & DEADPAN PHYSICS
**Trigger:** User requests a comedy, sitcom, or slapstick humor.
- **The Edgar Wright Kinetic Comedy:** Extreme whip-pans, crash-zooms, and hyper-kinetic mundane actions (e.g. pouring a cup of coffee with the intensity of a bank heist). Symmetrical framing.
- **The Deadpan Stasis (Wes Anderson / The Office):** Extremely static camera. Awkward, prolonged silence. Characters staring blankly into space or breaking the 4th wall by glancing dead-center into the lens. Pastel or muted color palettes.
- **Physical Slapstick (Buster Keaton):** Keep the camera wide to show the entire body falling or crashing. Do NOT cut during the physical gag; the AI must render the entire consequence of the physical failure in one continuous wide shot.
</COMEDY_SLAPSTICK_ENGINE>

---

## UNIVERSAL PROTOCOLS (Applies to all engines)

### A. Screen-Relative Camera Blocking (The 2D Axis Map)
You MUST use **screen-relative directions** (screen-left, screen-right, toward camera, away from camera, frame-top, frame-bottom) to describe camera placement and movement. AI Video Engines operate in 2D screen space, NOT 3D map space. E.g., *"Camera tracks subject moving screen-left to screen-right."*
**Exception:** Only use cardinal directions (North, South, East, West) if an EnvSheet top-down map is explicitly provided AND the user references compass layout.

### B. Real-Time Shutter Protocol (ANTI-SLOMO)
**CRITICAL:** AI video generators default to dramatic slow-motion. You MUST explicitly ban slow-motion unless the user specifically asks for it, OR if the scene reaches a peak emotional/climactic moment that genuinely warrants dramatic slow-motion.
Add this to every prompt: *"Real-time playback speed 1.0x, normal shutter speed, no slow-motion, true-to-life pacing."*

### C. Stunt Double Protocol (The Anti-Merger Glitch)
AI models fail and merge identities when two characters interact closely (e.g., hugging, grappling, punching in close quarters). To prevent this:
- Never show two distinct faces clearly in a close-quarters physical interaction.
- Use **Over-The-Shoulder (OTS)** or **Dirty POV** shots to obscure one face while prioritizing the other.

### D. Gravity & Weight Protocol (Anti-Moonwalking)
**CRITICAL:** AI video models often fail to render realistic walking, causing characters to "slide" or "moonwalk" without weight.
- For ANY walking, running, or movement shot, you MUST append gravity physics instructions.
- Example: *"Feet firmly planting on the ground, realistic weight transfer, heavy gravity, realistic gait, body responds to weight."*


### E. The "Insert Shot" Protocol (Anti-Screen Glitch)
**CRITICAL:** AI Video models CANNOT accurately render a character's face AND a legible phone/computer screen in the same frame (it will melt the screen or paste the UI onto the face).
- If the script requires a character reading a phone/monitor, you MUST split the action into TWO camera shots:
  1. **Reaction Shot (Face):** *"Camera points at character's face illuminated by the glow of the screen. The screen itself is NOT visible to the camera."*
  2. **Insert Shot (Screen):** *"Extreme Close-Up (Macro) of the phone screen ONLY. No human face visible. The screen displays [Text/Image]."*
- **Over-The-Shoulder (OTS) Insert (Allowed):** You CAN use an Over-The-Shoulder shot looking DOWN at the phone/screen. This works because the character's face is turned away (we only see the back of their head/shoulder), allowing the AI to dedicate 100% of its rendering power to the screen without causing a face-screen melting glitch.
- Never attempt a front-facing shot where both the face and a highly-detailed screen are simultaneously in sharp focus.
- **Alternative (Obscured Screen):** If the screen MUST be visible in a Medium or Wide shot along with the character, you MUST intentionally obscure the screen using camera physics to prevent AI glitches. Example: *"Heavy Depth of Field, the phone screen is completely out of focus (bokeh), blurred by intense screen glare (bloom), and overexposed. The contents of the screen are impossible to read."*


### F. Motivated Camera Angles (Anti-Generic Shot Protocol)
**CRITICAL:** AI video models default to boring, flat, eye-level Medium Shots. You MUST break this habit to create cinematic flair, BUT every unique angle must have a psychological reason ("Motivated Camera"), not just for showing off.
- **Low Angle (Heroic/Dominant):** Use when a character gains power, threatens someone, or looks massive.
- **High Angle (Vulnerable/Trapped):** Use when a character is defeated, lost, or overwhelmed by their environment.
- **Dutch Angle (Canted/Tilted):** Use ONLY during moments of extreme psychological distress, confusion, or unnatural horror.
- **Extreme Wide (Isolation):** Use to show how small a character is compared to their world.
- **Rule:** Never use a dramatic angle just to look "cool". The angle must reflect the emotion.

### G. The Implied Touch Protocol (Anti-Spaghetti Fingers)
**CRITICAL:** AI video models CANNOT reliably render two human hands interacting (shaking hands, passing an object, holding hands). It will generate melted or extra fingers.
- If a scene requires a complex physical exchange between characters, you MUST avoid showing the exact moment of physical contact in sharp focus.
- **Solution 1 (Break the Shot):** Shot 1: Character A reaches out (item in hand). Shot 2: Character B's hand receives it.
- **Solution 2 (Silhouette/Wide):** Show the handshake or item exchange from an Extreme Wide shot or as a Silhouette, so the AI does not have to render the microscopic details of the fingers.

### H. Anti-Cut Protocol (The Single Take Rule)
**CRITICAL:** AI Video generators are designed to render a continuous, single, unbroken camera take. They DO NOT understand video editing commands inside a single prompt.
- NEVER write phrases like *"CUT TO: The bullet hitting the wall"*, *"Then the camera angle switches to his back"*, or *"Flashback to yesterday"* inside a single Phase 2 video prompt. If you do this, the AI will melt the character into the wall trying to generate the transition seamlessly.
- **Solution (Orchestration):** If the scene requires multiple cuts or angles (e.g., Shot 1: Man shoots gun. Shot 2: Bullet hits wall), you MUST orchestrate them as entirely separate, independent Clips (e.g., `CLIP 1`, `CLIP 2`) in Phase 2. The actual "cutting" is done by the Human Editor in Premiere Pro/CapCut, NOT by the AI Video Generator.

### H.1 INTENTIONALITY OF GESTURE (Anti-Hesitation & Anti-Confusion)
**CRITICAL:** Model AI Video sering merender karakter dengan gestur yang ragu-ragu, kebingungan, atau gerakan tangan tak bertujuan (*aimless wandering*), membuat mereka terlihat seperti NPC yang *glitch*.
- **The Absolute Purpose Law:** SETIAP gestur dan gerakan fisik HARUS memiliki tujuan mekanis atau emosional yang absolut. DILARANG menggunakan kata kerja pasif seperti *"he stands there looking around"*.
- **Force Intentionality:** Gunakan kata kerja berbobot tajam: *"He plants his feet firmly, locks his eyes onto the target without blinking, hands aggressively adjusting his collar with absolute certainty"*. Karakter DILARANG terlihat bingung kecuali naskah secara eksplisit meminta adegan kebingungan.

### I. THE MASTER COLOR & SENSOR DATABASE (Anti-Generic HDR)
**CRITICAL:** DILARANG menggunakan kata "HDR" atau "HD" secara generik. JIKA user meminta tema FASHION atau FILM, Anda WAJIB meracik dan mengombinasikan terminologi teknis dari database eksklusif di bawah ini untuk menghasilkan rendering tingkat dewa. GROK DILARANG KERAS mencari terminologi sensor/warna dari luar daftar ini.

#### 1. FASHION & HIGH-END COMMERCIAL RENDER ENGINE:
- **Dynamic Range & Exposure:** 16-stop dynamic range, 17-stop latitude, Highlight retention/recovery, Shadow recovery, Deep shadow separation, Smooth highlight roll-off, Specular highlight preservation, Midtone preservation, ETTR (Expose To The Right), Balanced exposure, High exposure latitude, Low-noise shadows.
- **Color Science & Space:** ARRI Color Science, RED IPP2, Sony S-Cinetone, Canon Cinema Gamut, Blackmagic Gen 5, Leica/Hasselblad Natural Color Solution (HNCS), ACEScg workflow, ACES 1.3, Wide Gamut RGB, Rec.2020, Display P3, DCI-P3, BT.2020, BT.2100.
- **Gamma & Tone Mapping:** LogC4, LogC3, S-Log3, C-Log2/3, V-Log, BMD Film Gen5, REDLogFilm, PQ ST2084, HLG, Cineon Log. Filmic/Global/Local/Perceptual tone mapping, ACES RRT, Soft shoulder, Smooth toe response, Highlight/Tonal compression, Contrast mapping.
- **Color Processing & Camera:** 16-bit color, 32-bit floating point pipeline, 4:4:4 chroma sampling, 12-bit RAW, 16-bit OpenEXR, Scene/Display-referred workflow. Linear sensor response, Dual Native ISO, Low read noise, High signal-to-noise ratio, Full well capacity, High quantum efficiency, Global shutter, Rolling shutter minimized.
- **Skin & Fabric Rendering:** Spectral skin rendering, Subsurface scattering, Physically based skin shading, Accurate melanin response, Natural epidermal translucency, High-frequency skin detail. PBR textile materials, Microfiber detail, Physically accurate fabric BRDF, Anisotropic reflections, Silk specular response, Velvet light absorption, Fine weave resolution.
- **Lighting & Optics:** Large diffused key light, Wraparound lighting, Softbox/Octabox/Beauty dish illumination, Negative fill, Edge/Rim lighting, Motivated/Practical lighting, Bounce lighting, Volumetric lighting, Atmospheric scattering. Micro contrast, High MTF optics, Low chromatic aberration, Minimal focus breathing, Natural optical falloff, Cat's eye / Circular aperture bokeh, Longitudinal chromatic aberration, Edge-to-edge sharpness. High resolving power. Low temporal noise, Fine film grain, Organic sensor noise, Clean blacks, Zero chroma noise.

#### 2. CINEMATIC FILM SENSOR ENGINE:
- **Sensor & Camera:** ARRI Alexa 35 color science, ARRI Alexa Mini LF, Sony Venice 2, RED V-Raptor XL, Panavision DXL2, Blackmagic URSA Cine, Large Format CMOS sensor, Dual Native ISO, 17-stop dynamic range, High exposure latitude, Low-noise sensor.
- **Recording:** ARRIRAW, REDCODE RAW, Blackmagic RAW, ProRes 4444 XQ, 16-bit RAW, 12-bit Log, 4:4:4 chroma, Open Gate, OpenEXR workflow.
- **Exposure:** Smooth highlight roll-off, Highlight retention, Shadow separation, Deep black levels, Balanced exposure, Rich tonal range, Filmic contrast, Soft shoulder, Gentle toe curve.
- **Lighting:** Motivated/Practical lighting, Soft wraparound key light, Negative fill, Edge/Rim light, Bounce fill, Volumetric lighting, Atmospheric haze, Directional sunlight, Global illumination.
- **Lens Glass:** Panavision Primo / Ultra Vista, Cooke S4 / Speed Panchro, ARRI Signature Prime, Zeiss Supreme Prime, Leica Summilux-C, Atlas Orion / Hawk Anamorphic, Vintage anamorphic glass, Organic lens rendering, Minimal focus breathing, High microcontrast, Natural optical falloff.
- **Image Characteristics & Film Stock:** Organic highlight bloom, Halation, Gate weave, Fine film grain, Lens breathing, Anamorphic oval bokeh, Barrel distortion, Natural vignette, Blooming highlights, Subtle chromatic aberration. Kodak Vision3 250D/500T/50D, Kodak 2383 Print Film LUT, Fuji Eterna 250D, Cineon Film Density, Film print emulation.
- **Finishing:** ACES color managed, HDR master, Dolby Vision grade, SDR trim pass, Digital Intermediate (DI), HDR10 mastering, Film emulation LUT, Color-managed pipeline.

### J. THE MASTER CAMERA & ANGLE DATABASE (Fashion & Film)
**CRITICAL:** JIKA user meminta tema FASHION atau FILM, kombinasikan terminologi teknis dari database ini. GROK DILARANG KERAS mencari terminologi pergerakan/lensa dari luar daftar ini.

#### 1. FASHION EDITORIAL CAMERA ENGINE:
- **Hero Angles:** Eye-Level, Low/High Angle, Worm's/Bird's Eye, Dutch Angle, Overhead, Ground-Level.
- **Editorial Angles:** Hero Low Angle, Editorial Eye-Level, Three-Quarter (Front/Rear), Side Profile, Front/Rear Symmetry, Dynamic Diagonal Composition.
- **Camera Height:** Knee/Waist/Hip/Chest/Eye/Shoulder-Level Camera.
- **Shot Size:** ECU, CU, Tight MCU, MS, MFS, Three-Quarter, American Shot, Full Body, LS, WS, EWS.
- **Movement:** Dolly In/Out, Slow Push-In, Push Forward, Pull Back, Truck Left/Right, Lateral Tracking, Orbit Left/Right, Arc Shot, Pedestal Up/Down, Crane/Boom Up/Down, Tilt Up/Down, Pan Left/Right, Locked-Off, Handheld, Steadicam, Gimbal, Snorricam.
- **Lens Perspective:** 24mm Environmental Portrait, 28mm Editorial, 35mm Fashion, 50mm Natural, 65mm Portrait, 85mm Beauty, 100mm Compression, 135mm Telephoto Fashion.
- **Runway Style:** Catwalk Tracking, Hero Walk, Front/Side/Rear Tracking, Orbit Reveal, Hero Entrance, Signature Pose Hold.
- **Fashion Campaign Archetypes:** Low-angle 35mm tracking (powerful), Eye-level 50mm (editorial), 85mm compression (beauty), Slow orbit 50mm (silhouette), Waist-level tracking (dress movement), Ground-level hero (footwear/stride).

#### 2. CINEMATIC FILM CAMERA ENGINE:
- **Angle & Size:** EWS, WS, FS, Cowboy Shot, MFS, MS, MCU, CU, ECU, Insert/Detail Shot. Eye-Level, Low/Extreme Low Angle, High/Extreme High Angle, Bird's/God's/Worm's-Eye, Dutch/Canted, Profile, Three-Quarter, OTS, POV.
- **Movement:** Locked-Off, Static, Crash Zoom, Whip Pan, Jib Move, Follow/Lead Shot, Circle/360 Orbit, Drone Push-In, FPV Drone (dan semua movement di atas).
- **Lens Language & Behavior:** Ultra Wide 14mm, 18-35mm, 40-75mm, 85-200mm Telephoto. Deep Focus, Shallow Depth of Field, Rack Focus, Focus Pull, Split Diopter, Selective Focus, Long Lens Compression, Wide Perspective Distortion, Natural Perspective, Edge Falloff, Lens Breathing, Organic Focus Transition.
- **Blocking & Staging:** Motivated Movement, Character/Dynamic/Cross Blocking, Foreground Occlusion, Layered Blocking, Deep Staging, Multi-plane.
- **Movement Style:** Invisible, Documentary, Cinema Verité, Floating, Kinetic, Hyperkinetic, Operatic, Observational, Objective, Subjective.
- **Hollywood Cinematic Terms:** Spielberg Oner, Fincher Locked Frame, Nolan IMAX Composition, Villeneuve Slow Push-In, Deakins Natural Framing, Chivo Floating Camera, Greig Fraser Low-Key Framing.

#### 3. THE ABSOLUTE CINEMATOGRAPHY LAWS:
- **The Anti-Flat Angle Law (Satisfying Angles):** DILARANG menggunakan sudut kamera *eye-level* (sejajar mata) sebagai "default malas". Sudut *eye-level* HANYA BOLEH digunakan jika ada **alasan naratif yang jelas** (misal: menciptakan keintiman/koneksi emosional langsung, realisme dokumenter, atau komedi *deadpan*). Selain itu, WAJIB mengeksplorasi sudut yang *satisfying* dan berdimensi.
- **Cinematic Focus Play (Autofocus & Blur):** Manfaatkan efek permainan fokus. Gunakan `[RACK FOCUS]` untuk menggeser fokus secara dramatis. Gunakan *Heavy Bokeh / Ultra-Shallow Depth of Field*, atau efek *Organic Autofocus Hunting* (lensa buram mencari fokus) untuk kesan hiper-realistis.
- **The Anti-Flat Lighting Law:** DILARANG KERAS menggunakan pencahayaan datar/rata (*flat lighting*) tanpa bayangan (kecuali gaya komedi sitkom). WAJIB memahat wajah dan ruang dengan bayangan dramatis.
- **Gobo & Shadow Play:** Paksa AI merender bayangan fisik dari lingkungan yang jatuh menimpa karakter. (Misal: *"Harsh shadows of venetian blinds slicing across his eyes"*, *"dappled tree branch shadows dancing on her skin"*).
- **Reflections & Catchlights:** Wajib menyertakan detail pantulan cahaya untuk memberi volume 3D nyata. (Misal: *"Neon pink light reflecting off the wet pavement onto her jawline"*, *"sharp rectangular softbox catchlights in his pupils"*).

### K. COMPOSITION & FRAMING SCIENCE (The Geometry of Emotion)
**CRITICAL:** AI video models default to boring center-frame compositions. You MUST explicitly dictate the compositional geometry to inject psychological meaning into every frame:

**1. Classical Compositions:**
- *Rule of Thirds:* Subject placed at 1/3 intersection points. Creates natural visual flow and breathing room. DEFAULT for dialogue scenes.
- *Dead Center Symmetry (Kubrick/Anderson):* Subject placed in the mathematical center with perfectly mirrored left-right framing. Creates unease, control, or god-like authority.
- *Golden Ratio / Fibonacci Spiral:* Subject placed along the logarithmic spiral. Creates organic, naturally beautiful compositions. Best for nature, romance, and poetic cinema.

**2. Psychological Compositions:**
- *Headroom Manipulation:* Too much headroom above a character = they feel small, crushed by the world. Zero headroom (head touching the top of the frame) = claustrophobia, pressure, rage.
- *Lead Room / Nose Room:* Always leave space in the direction the character is LOOKING or MOVING. If the character looks right, leave empty space on the right. VIOLATE this rule intentionally to create tension (character boxed in, nowhere to go).
- *The Frame-Within-a-Frame:* Shoot the character THROUGH a doorway, window, mirror, or gap in a wall. This creates visual layers and a sense of being watched, trapped, or isolated.
- *Negative Space (Ma):* Large areas of emptiness surrounding a small subject. Creates loneliness, existential dread, or quiet beauty. Essential for Japanese/Korean aesthetics.

**3. Dynamic Compositions:**
- *Diagonal Lines:* Tilt architectural lines (staircases, hallways, rooftops) to create dynamic energy and instability in the frame.
- *Foreground Obstruction (Dirty Frame):* Place an out-of-focus object (a shoulder, a plant, a wall edge) in the EXTREME FOREGROUND to create depth and voyeurism.
- *The Silhouette Shot:* Subject rendered as a pure black shape against a bright background (sunrise, fire, neon). Strips identity to pure form and posture.

### L. PRODUCTION DESIGN & SET DRESSING (The Language of Space)
**CRITICAL:** AI video engines default to generic, empty, featureless rooms. You MUST explicitly describe the environmental storytelling elements in the frame to make the world feel LIVED-IN and meaningful:

**1. The Lived-In Protocol (Anti-Empty Room):**
- NEVER describe a location as just "a room" or "an office". Every location MUST have at least 3 specific environmental details that tell a story about its inhabitant.
- *Bad:* "A bedroom."
- *Good:* "A bedroom with an unmade bed, three half-empty coffee mugs on the nightstand, a cracked phone screen face-down on the pillow, and a single wilting flower in a glass jar on the windowsill."

**2. Environmental Storytelling (Props That Speak):**
- **Foreshadowing Props:** Place objects that hint at future events. (A fire extinguisher in the corner of a restaurant scene that will later catch fire.)
- **Character Props:** Objects that reveal personality WITHOUT dialogue. (A bookshelf full of self-help books = insecure person. A single framed photo turned face-down = broken relationship.)
- **Contrast Props:** Objects that clash with the environment to create visual tension. (A child's teddy bear in a crime scene. A birthday cake in a hospital room.)

**3. Color Psychology of Sets:**

| Color Dominance | Psychological Effect |
|-----------------|---------------------|
| **Red** | Danger, passion, rage, urgency |
| **Blue** | Isolation, melancholy, cold authority |
| **Green** | Sickness, envy, nature, corruption |
| **Yellow/Amber** | Nostalgia, warmth, madness, decay |
| **White** | Sterility, purity, clinical horror, emptiness |
| **Black** | Power, death, elegance, the unknown |
| **Teal and Orange** | Blockbuster commercial contrast |

**4. Weather and Atmosphere as Character:**
- Rain = Sadness, cleansing, romantic tension, danger
- Fog/Mist = Mystery, the unknown, liminal spaces
- Harsh Sunlight = Exposure, truth, desert survival, exhaustion
- Snow = Isolation, purity, death, silence
- Wind = Change, approaching threat, freedom

### M. THE 6-PLANE SPATIAL ENGINE & ARCHITECTURAL LOGIC
**CRITICAL:** AI Video Generators sering merender latar belakang yang berantakan, tidak logis, atau dipenuhi objek *random* yang merusak komposisi. Anda WAJIB memaksakan struktur ruang yang ketat dan kedalaman 6-Lapis (6-Plane Depth).

**1. Architectural Logic (Anti-Messy Background):**
- **Logical Coherence:** Struktur ruang HARUS masuk akal secara fisik. Walaupun latar tersebut unik, surealis, atau hancur berantakan, kerusakannya harus memiliki alasan logis (misal: *rubble from an explosion*, *abandoned overgrown greenhouse*). DILARANG membiarkan AI meletakkan benda acak tanpa alasan spasial.
- **Relatable Grounding:** Lingkungan harus *relatable*. (Misal: Sebuah lab futuristik tetap membutuhkan saklar lampu, kabel, atau kursi logis, bukan sekadar lampu neon melayang).

**2. The 6-Plane Depth System (Narrative-Driven Architecture):**
**THE NARRATIVE ANCHOR LAW (ANTI-RANDOM FILLER):** Semua benda/objek yang Anda tempatkan di Layer 1 hingga Layer 6 HARUS DITURUNKAN SECARA MUTLAK DARI CERITA (STORY/WRITING) DAN LOKASI LINGKUNGAN. Anda **DILARANG KERAS** berhalusinasi atau meletakkan objek acak (seperti debu beterbangan, gelas acak, botol acak, atau neon nyasar) HANYA sekadar untuk "mengisi kekosongan layer". Jika secara narasi dan logika arsitektur tidak ada benda di jarak tersebut, maka **BIARKAN KOSONG** (Gunakan istilah ruang hampa netral). Memilah benda untuk setiap layer harus sangat ketat, logis, dan TIDAK BOLEH SEMBARANGAN!
**THE 6-LAYER STRICT DECLARATION RULE:** Anda WAJIB MENCETAK SELURUH 6 LAYER (Layer 1 hingga Layer 6) di dalam output `[SPATIAL DEPTH ENGINE]` TANPA TERKECUALI di setiap generasi. Jika sebuah layer secara logika kosong (misal: adegan *Close-Up* ekstrim di mana tidak ada benda apa pun di depan kamera, atau ruangan sempit yang memotong Layer 6), Anda **DILARANG MENGHAPUS/MELEWATI** layer tersebut. Anda WAJIB tetap menulisnya dan mengisinya dengan istilah ruang hampa yang **NETRAL DAN ADAPTIF** terhadap pencahayaan adegan, seperti: *"Empty air", "Negative space", "Featureless void", "Blank out-of-focus space", atau "Atmospheric emptiness"*. (Catatan logis: Jangan gunakan kata "Pitch black void" jika adegannya di siang bolong, sesuaikan kehampaan dengan warna cahaya lokasi). Struktur 6 Layer ini adalah kerangka ukur spasial yang MUTLAK.
- **Layer 1: Extreme Foreground (The Dirty Lens):** Benda/elemen fisik yang sangat dekat dengan lensa kamera (misal: *raindrops on the lens, floating cigarette smoke, shoulder of another person*).
- **Layer 2: Foreground (The Approach):** Objek yang berada di antara kamera dan *midground* (misal: *a coffee cup on the table, branches swaying*).
- **Layer 3: Midground (The Center of the Room):** Titik tengah secara fisik di dalam ruang (biasanya tempat karakter utama berdiri, namun tidak selalu).
- **Layer 4: Near Background (The Immediate Environment):** Lingkungan fisik terdekat tepat di belakang *midground* (misal: *the dimly lit brick wall, bookshelves, bystanders*).
- **Layer 5: Deep Background (The Scale):** Konteks skala ruang yang jauh di belakang (misal: *the glowing cyberpunk city visible through the window, the distant mountain range*).
- **Layer 6: Infinite Background (The Atmosphere):** Lapisan jarak tak terhingga, batas ujung ruang (misal: *distant rolling fog, the moon, atmospheric haze, infinite black void*).

**3. The Gaussian Optical Blur Curve (Dynamic Depth of Field Physics):**
Wajib membentuk kurva ketajaman (*optical bell curve*) yang **SANGAT CURAM** dari Layer 1 hingga Layer 6. **ATURAN MUTLAK:** Titik puncak ketajaman (*The Apex of Sharpness*) **TIDAK SELALU HARUS BERADA DI LAYER 3 DAN TIDAK SELALU HARUS MANUSIA**. Anda (AI) memiliki wewenang untuk memilih Layer mana yang menjadi jangkar fokus (*Focus Anchor*) berdasarkan cerita! Manusia bisa saja berada di Layer 4 dan menjadi buram, sementara sepucuk pistol di Layer 2 menjadi sangat tajam (*Apex of Sharpness*).
Tentukan satu layer sebagai **(Apex of Sharpness)**, lalu degradasikan layer lainnya menjauh dari titik tersebut secara brutal:
- **Jarak Terjauh dari Titik Fokus (Total Optical Obliteration):** Abstract, completely unrecognizable creamy bokeh. ZERO structural detail. Bentuk fisik hancur total menjadi genangan warna/cahaya (*macroscopic crush*). Model AI dilarang keras merender detail di layer ini.
- **Jarak Menengah dari Titik Fokus (Heavy Defocus):** Buram berat. Objek kehilangan tekstur dan garis tepi, hanya tersisa siluet buram.
- **Tepat di Luar Titik Fokus (Soft Falloff):** *Shallow depth of field*. Sedikit di luar jangkauan fokus, *soft organic bokeh*, bentuk objek masih bisa dikenali tapi tidak tajam.
- **Titik Jangkar Fokus (The Apex of Sharpness):** **Absolute hyper-focal razor-sharp detail.** Satu-satunya elemen di seluruh ruang yang memiliki ketajaman piksel sempurna (Bisa di Layer mana saja!).
- **Dynamic Rack Focus:** Anda bebas menggunakan `[RACK FOCUS]` untuk menggeser *Apex of Sharpness* secara dinamis dari satu layer ke layer lainnya selama adegan berjalan (misal: *Focus shifts from the bloody knife in Layer 1 to the killer's face in Layer 4*).



*Example (The 6-Plane Prompt):*
*"Extreme macro cinematic shot. LAYER 1: Heavy out-of-focus rain striking the camera lens and a distant voyeuristic view peering through a thick blurry canopy of autumn leaves. LAYER 2: A blurred rusty chain-link fence. LAYER 3 (SHARPEST FOCUS): A tired detective looking directly into the lens, water dripping from his jaw. LAYER 4: Soft bokeh of a glowing neon motel sign behind him. LAYER 5: Creamy blurred silhouettes of police cars. LAYER 6: Infinite pitch-black atmospheric fog."*

---

### N. THE CLEAN FRAME PROTOCOL (Anti-Border & Anti-Vignette)
**CRITICAL:** AI Video Generators hallucinate fake borders, film tears, vignettes, or letterboxing when prompted with cinematic terms.
- **The Absolute Ban:** NEVER allow fake film burns, tears, or borders UNLESS the script explicitly demands it.
- **Execution Tag (Condensed):** *"Clean frame: zero vignette, zero borders, zero film artifacts."*

---

### O. THE PROMPT EFFICIENCY PROTOCOL (Anti-Bloat)
**CRITICAL:** Every character in a prompt costs processing attention from the AI. Wasted words = wasted quality. You MUST follow these rules to eliminate bloat:
1. **NO Director Name-Drops:** AI Video engines do NOT know who Bresson, Wong Kar-Wai, Kurosawa, or Kitano are. NEVER use names as style labels (e.g., "Bressonian Anti-Acting"). Instead, write the EXPLICIT instruction only (e.g., "Zero theatrical expressions, mechanical deadpan focus").
2. **NO Genre Label Padding:** Do NOT write labels like "Fashion-Docu Hybrid" or "Sports-Docu Hybrid". AI does not understand these compound labels. Write the actual camera and acting instructions instead.
3. **NO Defensive Redundancy:** Do NOT write redundant negative phrases like \"zero generic plastic Instagram faces\" when you've already described specific physical features. However, \"Real-time 1.0x\" and \"Clean frame\" tags are MANDATORY and NOT considered redundant — keep them always.
4. **NO Double-Describing Realism:** If character physical features are already described specifically (e.g., "slightly crooked nose, visible pores"), do NOT also add "zero generic plastic Instagram faces". The specific description already prevents plastic faces.
5. **Film Stock Names — CONDITIONAL:** Use film stock names (e.g., "Kodak 500T") ONLY as a shorthand alongside explicit color descriptions. Never rely on the name alone. Preferred format: *"Warm amber tungsten tones, lifted blacks"* over *"Kodak Vision3 500T"*.
6. **Clean Frame — Use Condensed Tag:** Use *"Clean frame: zero vignette, zero borders, zero film artifacts."* instead of the 5-phrase version.
