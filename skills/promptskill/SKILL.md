---
name: "PromptSkill — Cinematic Prompting Engine v2.0"
description: >
  Transforms cinematic direction into optimized AI video prompts. Contains perfectly isolated 
  aesthetic compilers via XML tags (LIVE_ACTION, ANIME, 3D_COMIC) to prevent context bleed.
  Covers the complete prompt structure, visual storytelling principles, reference mapping,
  and anti-border enforcement. Works with VideoOrchestra for multi-clip workflows.
---
# PromptSkill — Cinematic Prompting Engine v2.0

## PURPOSE
To act as the final "Compiler" that turns director intent into a dense, physically observable text prompt for AI Video Generators (like Sora, Kling, Runway, Midjourney).

**THE NARRATIVE ANCHOR LAW:** Segala elemen visual yang Anda *compile* (kamera, lensa, warna, lokasi, *layering* kedalaman ruang, pakaian, properti) **WAJIB MUTLAK** dipicu dan dibenarkan oleh Cerita/Naskah (*Story/Writing*). Dilarang merakit kata kunci (*keywords*) atau elemen estetika hanya demi "tampilan sinematik yang keren". Jika elemen tersebut tidak menyumbang makna psikologis, karakter, atau lingkungan cerita, HAPUS. Estetika tanpa narasi adalah sampah.

**THE ANTI-SLOP DICTIONARY LAW:** DILARANG KERAS menggunakan kata *modifier* estetika AI pasaran dan murahan seperti: *"epic, masterpiece, 8k, highly detailed, trending on artstation, cinematic, unreal engine, gorgeous"*. Ganti semua kata adjektif malas tersebut dengan instruksi **GEOMETRI FISIK** (Misal: ganti "epic lighting" dengan "harsh 45-degree volumetric rim light", ganti "highly detailed" dengan "visible skin pores and fabric micro-threading").

**ROUTER INSTRUCTION:** Read the requested genre/aesthetic. Then ONLY read the rules inside the matching XML tag below to build the prompt. IGNORE all other XML tags entirely to prevent context bleed (e.g. if Live-Action, ignore Anime completely).

---

<LIVE_ACTION_COMPILER>
### LIVE ACTION PROMPT COMPILATION
1. **Global Style Tag:** Start every prompt with: *"Cinematic live-action photography, high-end commercial editorial quality, shot on [Camera Lens], layered studio lighting."*
2. **Identity Lock:** *"Preserve exact facial structure, skin texture fidelity, and clothing details with 100% fidelity. Do not airbrush or beautify."*
3. **LOD:** Focus descriptive words on photorealistic details: skin pores, fabric threading, dust motes, realistic depth of field.
</LIVE_ACTION_COMPILER>

<ANIME_COMPILER>
### ANIME PROMPT COMPILATION
1. **Adaptive Global Style Tag:** Start every prompt with: *"[Insert Specific Genre] modern anime style, crisp cel-shaded linework, HDR volumetric lighting, extreme peak brightness contrast."* (Adapt the mood and colors to the story, but always maintain the crisp cel-shaded and HDR lighting texture).
2. **Prompt Diet (Anti-Bleed):** Do NOT use abstract cinematic terms like "masterpiece" or "award-winning". The AI only understands physical anime geometry.
3. **LOD:** For wide shots, detail the matte painting backgrounds and Nakamura cubes. For close-ups, detail the hatching shadows on the face.
</ANIME_COMPILER>

<3D_COMIC_COMPILER>
### 3D COMIC PROMPT COMPILATION (SPIDER-VERSE STYLE)
1. **Global Style Tag:** Start every prompt with this EXACT string: *"Stylized 3D comic book animation, non-photorealistic rendering (NPR), halftone dot shading, Ben-Day dots, CMYK offset chromatic aberration, vibrant pop-art lighting, 2D hand-drawn linework over 3D models, animating on twos, stop-motion feel, graphic 2D motion smears."*
2. **Copyright Filter:** DO NOT use the words Spider-Man, Miles Morales, or Spider-Verse in the prompt.
3. **LOD:** Focus descriptive words on the comic book graphic elements (action lines, burst flashes).
</3D_COMIC_COMPILER>

---

## UNIVERSAL PROTOCOLS (Applies to all engines)

### 0. PREMIUM AESTHETIC MANDATE (Anti-Dullness Law & Environmental Creativity)
**CRITICAL:** AI models often default to boring, pale/flat/sterile backgrounds OR fall back to cliché "cyberpunk" colors (generic neon pink/blue). You MUST actively override this lazy default behavior.
- **The Pale Ban (Anti-Pucat):** DILARANG menggunakan latar belakang putih polos, abu-abu pucat, atau ruangan kosong sebagai "default malas". Latar pucat/steril (seperti tembok putih) HANYA BOLEH digunakan jika memiliki **alasan naratif/tematik yang kuat** (contoh: *high-end minimalist art gallery, mental asylum, ruang interogasi, atau isolasi psikologis*). Jika menggunakan tembok putih, wajib tambahkan interaksi cahaya yang dramatis (misal: *harsh window shadows, soft bounced rim light*).
- **The Cliché Ban (Anti-Neon Pink/Blue):** DILARANG menggunakan kombinasi warna "cyberpunk neon pink & blue" kecuali user eksplisit meminta genre cyberpunk. Paksa AI menggunakan palet warna yang lebih canggih dan sinematik (misal: *Neo-Noir Gold & Deep Emerald, Crimson & Tungsten, Chiaroscuro Amber & Obsidian*, dsb).
- **Architectural Exploration:** Selalu eksplorasi geometri dan gaya arsitektur secara ekstrem (hyper-creative). Jika user meminta "kamar tidur", JANGAN berikan kamar kotak biasa. Berikan *"Sunken bedroom with brutalist concrete walls, suspended glass fireplace, and deep amber rim lights"*. Jadikan lingkungan (environment) sebagai "karakter" tersendiri yang memukau.
- **Visual Justification:** Every element in the frame must look expensive, purposeful, architecturally complex, and aesthetically breathtaking.

### 0.5 THE ANTI-GENERIC DESCRIPTOR LAW (Anti-Malas)
**CRITICAL:** AI sering menggunakan deskripsi yang sangat generik jika tidak dipaksa. Anda **WAJIB** mengganti kata-kata generik dengan spesifikasi tekstural yang berdimensi:
- **Wardrobe Generik:** DILARANG menulis *"casual clothes"*, *"a suit"*, atau *"a dress"*. WAJIB spesifik secara material dan siluet: *"Oversized heavy wool trench coat, distressed denim, structured silk faille gown, tailored charcoal herringbone suit"*.
- **Cuaca/Waktu Generik:** DILARANG menulis *"Daytime"*, *"Night"*, atau *"Clear sky"*. WAJIB menggunakan cuaca yang memantulkan tekstur sinematik: *"Overcast morning mist, golden hour harsh shadows, post-rain wet neon streets, suffocating midday desert sun"*.
- **Ekspresi Generik (Show, Don't Tell):** DILARANG menulis *"He looks sad"*, *"She is angry"*, *"He is scared"*. AI Video tidak memahami emosi abstrak dengan baik. WAJIB mendeskripsikan anatomi otot wajah: *"Jaw clenched, swallowing hard, micro-tremor in the lower lip, widened pupils, flared nostrils, stiffened neck muscles"*.

### 1. Multi-Reference Protocol & The Rule of One (Anti-Bleed)
- **THE RULE OF ONE:** In AI Video Diffusion, mentioning a reference tag multiple times heavily damages the weighting (causing visual artifacts or "character bleed"). Therefore, you MUST mention a local reference tag (e.g., `Local @image1`) **EXACTLY ONCE** per clip prompt.
- **Bracket Exclusion:** NEVER place `@image` tags inside technical brackets (like `[CRITICAL WARDROBE CHECK]`, `[GAZE]`, `[PROXIMITY]`). Technical brackets must use the character's NAME (e.g., "Kenji wears..."). The single `@image` tag is ONLY permitted inside the final `[NARRATIVE ACTION PARAGRAPH]`.
- **Anchor Locking System:** To ensure the AI doesn't mix up characters when they are only tagged once, you must use Name Binding (e.g., `Kenji (Local @image1)`) and Visual Anchors (ensure their wardrobes are highly contrasted in the text, e.g., Black suit vs White shirt).
- **Multi-Ref Assembly:** When assigning multiple references to ONE character (e.g., Face from Image 1, Body from Image 2), assign roles explicitly: *"Using the exact person across all provided reference images. Take the face from @image2. Take the full body from @image1."* 
- **Lighting Recalculation:** Always add: *"Completely recalculate all lighting, shadows, and reflections to match the new environment. Ensure a seamless natural skin transition between the face and neck."*

### 1.5 THE UNIFIED OBJECT PERMANENCE LAW (Anti-Disappearing Glitch)
**CRITICAL:** AI Video Generators menderita **Amnesia Objek 100%**. Jika barang/desain tidak terus-menerus diingatkan, AI akan menghapusnya dari layar.
- **Continuous Prop Binding (Cross-Clip):** Jika sebuah barang (pistol, payung, tas) dipegang di Klip 1, Anda WAJIB mendeskripsikan ulang barang tersebut di Klip 2 jika masih ada di *frame* (baik di `[PROSE]` maupun `[GLOBAL LOCK]`).
  - *Contoh Salah:* (Klip 2: Dia berlari menembus hujan). -> AI menghapus pedang di Klip 2.
  - *Contoh Benar:* (Klip 2: Dia berlari menembus hujan, **tangan kanannya masih menggenggam erat pedang baja**).
- **The 180-Degree Blindspot (Cross-Angle):** Saat karakter berbalik badan 180 derajat (membelakangi kamera), AI sering melupakan desain ransel, jubah, atau logo punggung. Anda WAJIB memaksa AI membaca referensi punggung.
  - *Contoh Benar:* *"Character turns around. Reference the BACK FULL BODY panel of @image1 to maintain exact 3D geometry of the backpack."*

### 2. Tri-Sheet Reading Protocol (The Blueprints & Anti-Grid Glitch)
**CRITICAL:** When feeding a multi-panel grid (CharSheet/EnvSheet) into an AI Video Generator (like Sora/Kling) as a reference, you MUST explicitly forbid it from rendering the grid lines, or it will generate a video of a floating grid.
When dealing with references, instruct the AI how to read them:
- **6-Panel Character:** *"Reference @image1 is a 6-panel character sheet. ONLY use it as an identity reference. DO NOT render the grid lines, text labels, or multiple panels. Render a single, unified cinematic frame. Read the top panels for facial structure, and bottom panels for body/wardrobe."*
- **7-Panel Environment:** *"Reference @image4 is a 7-panel map. DO NOT render the map or grid lines. ONLY render a single cinematic frame from the [North/South/East/West/Up/Down] POV."*
- **4-Panel Prop:** *"Reference @image3 is a 4-panel prop sheet. DO NOT render the grid. ONLY render the [Front/Back/Left/Right] view texture for the object in this scene."*

### 3. Typography Constraint & Background Blur (Anti-Garbage Text)
- **CRITICAL:** AI Video models cannot spell complex sentences and will generate alien/melting text on background signs (e.g., in supermarkets, cyberpunk cities, billboards).
- **Foreground Text:** If the scene requires readable text (e.g., a logo on a shirt), limit it to 1-2 words MAX and enclose it in bold quotes. Example: A glowing neon sign displaying the word **"HOTEL"**.
- **Background Text (The Bokeh Trick - Use with Logic):** If the scene takes place in a sign-heavy environment (like a supermarket aisle), you can blur the background to hide AI spelling errors using shallow depth of field (bokeh). **HOWEVER, this must make cinematographic sense.** Only use this on Medium or Close-Up shots focused on a character. Do NOT artificially blur Wide Establishing Shots just to hide text (it looks unnatural).

### 5. Continuity & Override Protocol (State-Changes)
- **Wardrobe/Grooming (Minor Changes):** If a character changes clothes for a new day, or takes a shower (clean face/wet hair), do NOT request a new reference sheet. Instead, write an Override Command in the prompt: *"Use @image1 as the exact base identity for facial structure and proportions, but OVERRIDE the wardrobe to be a casual blue shirt, and OVERRIDE the hair to be wet."* This minimizes the need to generate endless references.
- **Major Changes (State Change):** If a character undergoes a major scripted change (e.g., permanent battle damage, new costume), you MUST switch the tag to the damaged variant. Example: *"Use @image1_Damaged for the face and torn clothes."*
- **Chronological Trauma & Healing (Time-Context Logic):** AI Video models suffer from temporal blindness. You MUST calculate the passage of time between clips. If characters are in a continuous battle, explicitly instruct the AI to accumulate damage in the wardrobe check (e.g., "bruises are now darker, shirt is torn, covered in sweat"). If the script says "The Next Day" or "3 Days Later", explicitly instruct the AI to heal them (e.g., "wet clothes are now completely dry, bleeding cuts have faded into yellow healing scabs, completely unbruised"). Do NOT let the AI guess the passage of time.

### 6. Voice Characteristic Reference (@audio)
If the clip contains character dialogue, do NOT use rigid protocol brackets. Instead, treat `@audio` tags as **Voice Characteristic References** (e.g., bass, raspiness, pitch) and integrate them fluidly into the dynamic prose.
- **Dynamic Flow:** The flow of the dialogue and the physical act of speaking must adapt dynamically to the action in the video.
- **Prose Integration:** Describe *how* they speak alongside their actions. Example: `Rama dodges the strike, his chest heaving as he shouts "Sini lo!" with a deep, raspy bass voice (Local @audio1).`
- **ANTI-RIGID DIALOGUE MANDATE:** You MUST NOT use rigid, script-like formatting for dialogue such as `SPEAK:`, `DIALOGUE:`, or `SAYS:`. Dialogue MUST be seamlessly integrated into the narrative prose as a natural continuation of the character's physical action.
- The Rule of One (Audio): You must NEVER mention a character's @audio tag more than once per clip to avoid parser duplication. If a character speaks multiple times in a single clip, attach the @audio tag ONLY to their FIRST line of dialogue. For subsequent lines, just describe them speaking without the tag. Example: Rama shouts with a deep bass (Local @audio1): "Wait!" then runs forward and adds: "It's a trap!"
- The Rule of Silence: You MUST NOT use a character's @audio tag in a clip if they do not speak in that specific clip. If they are just fighting, walking, or standing silently, the @audio tag must be completely omitted from that clip's prompt.
- Anti-Typo Dialogue (Verbatim Protocol): To prevent AI video models from hallucinating or generating "typo" audio (e.g., saying B when the prompt says A), you MUST strictly follow this formatting:
  1. Verbatim Extraction: You must copy the dialogue EXACTLY character-for-character from the original script. Do NOT summarize, rephrase, or translate it. If the script dialogue is in Indonesian, write the exact Indonesian text inside the prompt.
  2. Strict Quotation: The spoken dialogue MUST be wrapped in standard double quotes "".
  3. Punctuation Sanitization & TTS Safety: AI Video text-to-speech engines struggle with complex symbols. Strip out unnecessary ellipses ..., em dashes -, or brackets () from inside the quotation marks so the engine reads the words cleanly. Keep only basic punctuation (, . ! ?).
  4. GLOBAL ANTI-MARKDOWN LAW: You MUST NEVER use Markdown formatting (e.g., bullet points - or *, or bold/italic text like **bold** or *italic*) anywhere inside the final prompt output code block ([PROSE], [SPATIAL DEPTH ENGINE], etc.). AI Video parsers will fail and generate garbage if they read markdown symbols. Separate items using spaces, pipes |, or commas instead.
- Lip-Sync Anchoring (Anti-Ventriloquist Glitch): When Rapid Banter occurs, the AI model will often move both mouths at the same time. To prevent this, you MUST explicitly dictate the mechanical turn-taking of their mouths in the [NARRATIVE ACTION PARAGRAPH]. 
  - Rule of One Compliance: Even in Rapid Banter, NEVER use their @image tags more than once in the paragraph. Use their physical descriptions or names to anchor the lip-sync instructions.

### 8.1 THE 7 PHYSICS PILLARS (Anti-Amnesia Data)
Because AI Video Generators suffer from "inter-clip amnesia", you MUST explicitly dictate the spatial and temporal continuity in EVERY SINGLE CLIP PROMPT using these 7 specific physics variables.
**NUCLEAR DIRECTIVE:** To save token space and prevent the 2000-character cutoff, you MUST compress all 7 variables into a SINGLE line formatted as **`[PHYSICS VECTORS]: Gaze: [val] | Body: [val] | Compass: [val] | Momentum: [val] | Light: [val] | Prox: [val] | Relativity: [val]`**. Do not write them on separate lines.
- **Gaze:** Where the character is looking (e.g. off-screen right, unblinking). Do not break the fourth wall.
- **Body:** Angle of the character's body relative to the lens (e.g. 3/4 screen-right).
- **Compass:** Screen-relative directions (e.g. walks screen-left to screen-right, camera tracks parallel).
- **Momentum:** Current kinetic energy (e.g. full sprint, slow pour).
- **Light:** Weather/time continuity (e.g. Night mercury green).
- **Prox:** Exact distance (e.g. 0.8m table camera push 1.5m).
- **Relativity:** Hardware vs software movement (e.g. camera slow push-in subject micro only).

### 8. MACRO & FINE-MOTOR PROTOCOL (Anti-Melting Insert Shots)
**CRITICAL:** AI Video Generators are notoriously bad at rendering fine-motor skills (fingers interacting with small objects like keys, locks, wires, keyboards) and will often melt the fingers into the metal.
**Action:** If the scene involves an Insert Shot of a character manipulating an object with their hands, you MUST apply these three rules in the prompt:
1. **Camera Logic:** Force an Extreme Close-Up (ECU) with a Macro Lens. (e.g., "Macro lens, extreme close-up insert shot, ultra-shallow depth of field completely blurring the background"). This forces the AI to spend 100% of its processing power on the object and fingers.
2. **Mechanical Physics:** Do NOT use vague verbs like "He unlocks the padlock". You must describe the mechanical physics. (e.g., "A steel key is inserted into a brass keyhole and turned 90-degrees clockwise until a mechanical click is heard").
3. **Anti-Melting Tag:** You MUST append this exact phrase to the Narrative Action Paragraph: *"Physically accurate object permanence, 5 distinct human fingers, fingers do NOT melt or merge with the metal object, maintaining strict structural boundaries."*

### 9.1 ANTI-ZOOM-ZOOM LAW (Anti-Position-Teleport)
**CRITICAL:** AI Video Engines have zero 3D spatial memory. When you zoom in then zoom out, the AI reconstructs the scene from scratch and often teleports the subject to a different position.
- **BANNED PATTERN:** Never write "zoom in then zoom out" or "push in then pull back" within a single clip prompt.
- **SOLUTION (Mono-Directional):** Use only ONE camera direction per clip: either zoom IN the entire clip, or zoom OUT the entire clip, or track laterally. Never reverse.
- **SOLUTION (Hard Cut):** If you need both a close-up AND a wide shot, use `[HARD CUT: ANGLE SHIFT]` between them. This resets the AI's spatial expectations cleanly.
- **SOLUTION (Orbit):** A continuous orbital move (camera circles the subject) is safe because distance stays constant.

### 9.2 ANTI-FREEZE WORD LAW (Anti-Still-Frame)
**CRITICAL:** AI Video Engines interpret the words "freeze", "static", "still", "hold pose", "motionless", and "locked in place" LITERALLY — they will generate a completely frozen still image for the remaining duration.
**SCOPE:** This ban applies ONLY to the `[PROSE]` narrative action paragraph and `[MOMENTUM CARRY-OVER]` tag. It does NOT apply to style engine descriptions (e.g., "static camera" in Comedy/Deadpan is a legitimate artistic direction for the CAMERA, not the CHARACTER).
- **BLACKLISTED WORDS in [PROSE]:** `freeze`, `frozen`, `static`, `still`, `motionless`, `hold pose`, `locked in place`, `stops moving`.
- **SAFE REPLACEMENT:** Instead of "contrapposto freeze", write: *"settles into contrapposto stance, continuous subtle micro-tremors in fingers, hair drifting, fabric settling, chest breathing."*
- **THE LIVING STATUE RULE:** Even when a character "stops" moving, you MUST describe at least 3 continuous micro-movements: (1) breathing/chest rise, (2) hair/fabric drift, (3) finger/eye micro-twitch. This keeps the AI rendering motion instead of a still frame.

### 10. STRICT CHARACTER LIMIT MANDATE (1900 - 1950 CHARACTERS) - MATHEMATICAL ABSOLUTE
**CRITICAL:** Native AI video engines (Sora, Kling, Runway) truncate anything over 2000 characters, but they output weak visuals if the prompt is too short. You MUST mathematically guarantee that your total output block per clip is exactly between 1,900 and 1,950 characters.
- **Hard Floor (1,900 Minimum):** You MUST NOT output a prompt shorter than 1,900 characters. If your draft is 1,600-1,800, you have FAILED the detail mandate. You MUST inject additional micro-physics, haptic textures, and cinematic lighting details until it crosses 1,900.
- **Hard Ceiling (1,950 Maximum):** The absolute maximum is 1,950 characters. Going to 1,951 is FORBIDDEN.
- **Mandatory Self-Audit:** Before outputting, you MUST internally count your characters. If your draft is under 1,900, expand the physics/textures. If it exceeds 1,950, trim adjectives. Do NOT let it swell to 3000+.

### 11. EXPLICIT CUT SYNTAX (Editing Logic)
**CRITICAL:** To prevent AI Video models from hallucinating location or time shifts within a single prompt, you MUST use explicit cut syntax instead of generic `[HARD CUT]`. Do NOT change locations or time-of-day within a single 10s prompt; if a script demands a location/time shift, split it into separate prompts using VideoOrchestra.
For cuts WITHIN the same location/time, use these explicit markers:
1. `[HARD CUT: ANGLE SHIFT]` — Forces the AI to change the camera angle/lens while maintaining the exact same time and location.
2. `[HARD CUT: JUMP CUT]` — Skips forward 1-3 seconds in time at the exact same location (e.g., character moves from standing to suddenly sitting).
3. `[MATCH CUT: VISUAL TRANSITION]` — Used for creative transitions where Object A cuts to Object B with a similar shape/composition.
