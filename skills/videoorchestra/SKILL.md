---
name: "VideoOrchestra — Film Director Conductor v1.0"
description: >
  Orchestrates multi-clip cinematic productions by breaking long-form video projects into
  independent segments of 10 seconds or less. Manages duration breakdown, self-contained prompt
  construction, dynamic reference re-numbering, and provides editing/sequencing guides for
  seamless stitching. Works with Elite Screenwriter for story structure, CinSkill for cinematic
  quality, and Seedance Prompting Skill for individual prompt generation. Activates on any
  multi-clip or long-duration video production request.
---
# VideoOrchestra â€” Film Director Conductor v1.0

## Core Principles
- **Max Clip Length**: The default and recommended clip length is 10 seconds. Every generated video segment must be 15 seconds or less (absolute maximum for extended action). Never exceed this in a single generation request.
- **Reference Management**: When user provides reference images (@image1, @image2, etc.):
  - Mention each reference **exactly once** per prompt.
  - Do not repeat references like @image1 multiple times in the same prompt.
  - Place the single mention strategically (usually early in identity/character section).
- **Orchestration Workflow**:
  1. Analyze total requested duration and story structure.
  2. Break into logical scenes/clips (≤15s each).
  3. Generate **fully self-contained** individual prompts (no references to other clips inside the prompt text).
  4. Provide a separate **Editing & Sequencing Guide** (outside the prompts) explaining how to stitch clips and what visual elements should match across them.
  5. Ensure visual consistency by repeating key descriptive details explicitly in each prompt where needed, rather than using "same as previous".
  6. **Dedicated Prop Sheets (Anti-Duplication)**: If a character interacts with or uses a specific significant item, weapon, vehicle, or equipment, it MUST be assigned its own dedicated reference sheet in Phase 1 (generated via PropSheet skill). Never rely on the character sheet to define the item.

## Trigger Activation
Activate automatically on requests like "bikin film durasi X detik", "buat movie panjang", "generate full video story", or any multi-clip cinematic project. Combine with cineskill and satisfied-color-palette for premium results.

## Detailed Instructions
When user requests a film:
1. **Duration Breakdown**:
   - Calculate number of clips: total_seconds / 15 (round up).
   - Define scene beats with precise timestamps e.g. [0-15s], [15-30s].
   - Ensure narrative flow: establish, build, climax, resolve.

2. **Smart Shot Selection & Pacing Logic**:
   - **Wide Shot:** Use for establishing geography, showing scale, isolation, or opening a scene.
   - **Medium Shot:** Use for natural interaction, dialogue, or standard human action.
   - **Extreme Close-Up:** Use ONLY for intense emotional peaks, crucial realizations, or important detailed actions (e.g., a trembling hand).
   - **Intelligent Cutting:** Do not cut randomly in the middle of a continuous action. Cut on action (e.g., character swings a punch, next clip shows the impact), or cut on an eyeline shift (character looks off-screen, next clip shows what they see).
   - **High Action Priority (Density Bias):** The default directorial style is HIGH ACTION DENSITY. You must maximize the action limits (e.g., pushing close to 7 actions per 10s or 10 actions per 15s) to create dynamic, cinematic experiences.
   - **The "Low Action" Exception:** You may ONLY generate a low-action clip (e.g., 1-2 actions in 10s) if it is a CRITICALLY IMPORTANT narrative moment that requires slow, heavy emotional weight (e.g., a slow-motion realization, an intense stare-down, mourning a death). Never use low-action pacing for boring filler or mundane tasks.
   
   - **Anime Pacing Logic ('Ma'):** If requested aesthetic is Anime, rely heavily on the contrast between extreme stillness and hyper-speed. Follow stillness (a single tear, a cape blowing) with a rapid burst of Sakuga action.
   - **Anime Invisible Stitching (Alternative Wipes):** For Anime, you can also use "The Energy Flash Cut" (ending and starting on a blinding white/colored impact flash) or "The Speed Line Wipe" (ending and starting in abstract speed lines) to stitch clips seamlessly.
   - **One-Take (Continuous Shot) Protocol:** If the user requests a "One-Take" or continuous unbroken shot that exceeds 15 seconds, you must use **Invisible Stitching**:
     - *End of Clip 1:* The camera must pan quickly into a blur (whip-pan) OR push into a dark object (someone's back, a wall, shadow) completely filling the frame.
     - *Start of Clip 2:* Must begin from the exact same blur/darkness and pull back to reveal the new action. This allows the editor to stitch them seamlessly.

3. **Prompt Construction Rules**:
   - Each prompt must be **completely self-contained** â€” the video model has no memory of other clips.
   - Do **NOT** write phrases like "same as previous clip", "continue from before", "same lighting/wardrobe as clip 1", "like the last scene", etc. inside any prompt.
   - Start with global style/identity + reference images (mention each reference **exactly once**).
   - Explicitly repeat important visual details (character appearance, lighting mood, color palette, environment) in every clip where consistency matters.
   - Detail scene-specific action, camera movement, timing.
   - Use cineskill engines for cinematic quality.
   - Keep each prompt under model limits.


4. **Action Density Protocol (Duration Matching):**
   - **Under-dense Rescue (15s rule):** If you allocate 15 seconds to a clip, but the written action is only "Character stares at the wall", the AI video model will stretch it into slow-motion or freeze. You MUST rescue this by artificially adding environmental or camera density to fill the time. Example: *"Character stares at the wall. The camera slowly pushes in for 15 seconds. Dust motes drift heavily in the air. The light from the window slowly crawls across the wall."*
   - **Over-dense Prevention (Max Action Limits):** You must strictly obey the maximum physical action limit based on clip duration to prevent the AI from melting or failing to render:
     - **5 seconds:** MAXIMUM 3 distinct actions.
     - **10 seconds:** MAXIMUM 7 distinct actions.
     - **15 seconds:** MAXIMUM 10 distinct actions.
     If a script or user requests more actions than the limit for a specific duration, you MUST either split the scene into multiple clips or use time-compression cinematic techniques (e.g., whip-pans, speed-lines) to bypass the limit safely.

5. **Node-Based API Workflow Protocol (V3.0)**:
   - For each clip, **only include the references (Image and Audio) that are actually used** in that specific scene.
   - **Absolute Dynamic Re-numbering**: You MUST re-number both Images AND Audio sequentially starting from 1 (e.g., `@image1`, `@Audio1`) to prevent gaps in node-based workflows (like ComfyUI). 
   - **CRITICAL PRE-FLIGHT CHECK**: Before writing ANY prompt in Phase 2, you MUST output explicit mapping logic blocks:
     `**[IMAGE MAPPING: Global @imageX -> Local @image1 (Name) | Global @imageY -> Local @image2 (Name)]**`
     `**[AUDIO MAPPING: Global @AudioX -> Local @Audio1 (Name) | Global @AudioY -> Local @audio2 (Name)]**`
   - **Single-Clip Exemption (NUCLEAR — ZERO EXCEPTIONS):** You MUST NOT generate CharSheets, EnvSheets, or PropSheets in Phase 1 for ANY asset (character, environment, or prop) that appears in ONLY ONE clip. This is the #1 most common waste error. Before generating ANY sheet, you MUST perform a **Cross-Clip Appearance Audit**: scan ALL clips and count how many clips each asset appears in. If count = 1, DO NOT generate a sheet — describe it inline in [GLOBAL LOCK]. If count ≥ 2, generate a sheet. The ONLY exception is if the user explicitly requests a sheet for a specific asset.
      - **Example (CORRECT):** Film has 3 clips. Character A appears in Clip 1+2+3 → Generate CharSheet. Character B appears ONLY in Clip 2 → NO CharSheet, describe inline. Environment X appears ONLY in Clip 1 → NO EnvSheet. Prop Y appears in Clip 1+3 → Generate PropSheet.
      - **Example (WRONG):** Generating 5 CharSheets, 2 EnvSheets, and 1 PropSheet for a 2-clip film where most assets appear once. This wastes the user's time and AI credits.
    - **Audio Single-Clip Exemption:** Do NOT generate Audio Persona prompts for characters who only speak in ONE clip. Let the native TTS engine handle them from the text description in [PROSE].
    - **"No Ref" (Zero Reference Protocol):** If the user explicitly requests "no ref" or "tanpa referensi", you MUST completely skip Phase 1 (Asset Generation). In Phase 2, you MUST NOT use any `@image` or `@audio` tags anywhere in the prompt. All descriptions and voice characteristics must be purely textual without any `@` variables.

6. **Output Structure (2-Phase Protocol)**:
   - **PHASE 1: Asset & Audio Generation Sheet (MULTI-CLIP ASSETS ONLY)**: Before writing video prompts, perform a **Cross-Clip Appearance Audit** to identify which assets appear in 2+ clips. ONLY generate sheets for those assets.
     - **Image Assets (MULTI-CLIP ONLY):** Write Image Generation Prompts (Midjourney/Flux style) ONLY for characters/environments/props appearing in 2+ clips. Use CharSheet/EnvSheet/PropSheet rules respectively.
       - **Environmental Asset Rule**: Any location appearing in 2+ clips MUST get a dual-panel 16:9 EnvSheet. Single-clip locations are described inline in [GLOBAL LOCK].
       - **PropSheet Enforcement**: Generate PropSheets ONLY for props that appear in 2+ clips AND are central story objects. Single-clip props are described inline.

       - **State-Change Protocol (Character Evolution):** If the script contains a [STATE CHANGE] tag for a character (e.g., they get a permanent scar or change clothes), you MUST generate TWO CharSheets for them in Phase 1.
         - 1. @image1_Base: The clean/original version. (Generate this with a normal text prompt).
         - 2. @image1_Damaged: The changed version. **DO NOT write a pure text prompt for this.** Instead, output this exact warning: *"🚨 UNTUK MENJAGA IDENTITAS 100%: Anda wajib memasukkan hasil gambar @image1_Base sebagai Character Reference (--cref atau Image-to-Image) ke dalam AI, lalu gunakan prompt berikut: [Prompt baju robek & wajah kotor/berdarah]."*
      - **Audio Assets (Vocal Persona):** Write Voice Design Prompts for ElevenLabs ONLY for characters who speak in **multiple clips** (2 clips or more). Do NOT generate Audio Personas for Sound Effects (SFX) or characters who only speak in a single clip (let the native video engine handle them purely from text). Use strictly numeric IDs (e.g., `Global @Audio1 (Kenji)`, `Global @Audio2 (Ryu)`) for clean node parsing, never descriptive strings. Focus on **Vocal Characteristics, Persona, and Dialect**. (MANDATORY: Always append "Wide dynamic range audio, uncompressed HDR mix, zero audio clipping" to ensure high-fidelity voice generation).
   - **PHASE 2: Video Orchestration**:
     - Summary: Total clips needed, total runtime, scene breakdown.
     - **Per-clip prompts**: Fully independent and self-contained — numbered clearly with timestamp e.g. [0-15s].
       - **SCENE-LEVEL RNG LOCK (ANTI-RE-ROLL):** DILARANG KERAS merender ulang (RNG) lokasi, cuaca, baju, atau pencahayaan untuk klip yang berada di *scene* (adegan) yang sama! Anda WAJIB memutar dadu `[SYS-LOG: RNG INITIATIVE]` HANYA SATU KALI di klip pertama dari sebuah *scene*. Untuk klip-klip berikutnya dalam *scene* yang sama, Anda WAJIB mem-fotokopi persis isi dari `[GLOBAL LOCK]` dan `[RENDER & ACTING LOCK]` dari klip pertama agar karakter dan lokasi tidak berubah wujud (*morphing*). Setiap klip tetap harus memiliki `[SYS-LOG]`, namun isinya adalah hasil *lock* mutlak dari klip pertama (jangan diacak ulang!). **ATURAN MUTLAK UI/UX:** Anda WAJIB meletakkan `[SYS-LOG]` ini **DI LUAR** kotak kode (\`\`\`\`text\`\`\`\`). HANYA bagian `[PROSE]` hingga `[PHYSICS VECTORS]` yang boleh dibungkus ke dalam kotak kode.
       - **Explicit Tagging Rule**: If a shot is wide and multiple elements are visible, you MUST explicitly mention EVERY tag present in the frame (e.g., "@image1, @image2, and @image5 are visible in @image4"). Do not leave the AI guessing who is in the wide shot.
                - **Spatial Continuity Rule**: Every clip must strictly obey the layout defined in Phase 1 and instruct the AI how to read it. (e.g., "STRICT SPATIAL CONTINUITY: @image4 is a dual-panel reference. Read the left panel map for layout, but ONLY render the right panel cinematic style").
         - **Master Lighting & Color Grade Protocol:** AI Video models are forgetful. If a scene occurs in a specific lighting environment (e.g., "Neon pink cyberpunk alley, heavy fog, high contrast"), you MUST copy-paste that EXACT lighting phrase into EVERY SINGLE CLIP PROMPT for that scene. Do not leave any clip without explicit lighting/weather instructions, or the AI will hallucinate different weather/lighting between cuts.
         - **Audio Integration & Anti-Lip-Sync Protocol**: Inject `@audio` tags into the prose. 
           * **NATIVE LANGUAGE LOCK (CRITICAL):** You MUST explicitly define the language next to the `@audio` tag in the prose if it's not English, otherwise the TTS engine will hallucinate an English accent regardless of the audio reference file.
           * If the dialogue is ON-SCREEN and requires lip-sync: write the dialogue normally and inject the language lock (e.g., `Kenji shouts (Local @Audio1: fluent native Japanese, NO English) "Ikiro!"`).
           * If the dialogue is (O.S.) or (V.O.): You MUST include the dialogue text for native TTS engines, but you MUST forcefully lock the on-screen character's mouth to prevent the AI from lip-syncing them. (e.g., `Voice O.S. (Local @Audio1: fluent native Japanese, NO English): "System breach." [CRITICAL PHYSICS: Kenji's mouth is strictly CLOSED, zero lip movement, jaws locked, he is only listening]`).
         - **MANDATORY PHYSICS VECTORS COMPRESSION (MULTI-CLIP ONLY):** Dalam mode multi-clip, setiap klip WAJIB menyertakan vektor fisika spasial SETELAH blok `[LENS & CAMERA PHYSICS LOCK]`. Tag ini berfungsi sebagai "GPS spasial" agar AI Video Engine tidak berhalusinasi arah pandang atau pencahayaan antar klip. Untuk menghemat batas 2000 karakter, Anda WAJIB menggabungkannya ke dalam satu baris dengan format:
         **`[PHYSICS VECTORS]: Gaze: [val] | Body: [val] | Compass: [val] | Momentum: [val] | Light: [val] | Prox: [val] | Relativity: [val]`**
         (Contoh: `[PHYSICS VECTORS]: Gaze: off-screen right | Body: 3/4 screen-right | Compass: toward camera | Momentum: slow pour | Light: Night mercury green | Prox: 0.8m | Relativity: camera slow push-in subject micro`) 
     - **Editing & Sequencing Guide** (separate section after all prompts):
       - How to stitch the clips (recommended order, transitions, crossfades).
       - Which visual elements must match across clips (lighting, color grade, wardrobe, environment, character details) — so the user can check/adjust during editing.
                - Any post-production notes (sound design, music sync, etc.).
         - **Audio Editing Guide for (V.O.) and (O.S.):** If a clip contains Voice-Over or Off-Screen dialogue, explicitly instruct the user: *"RENDER CLIP INI TANPA GERAKAN MULUT (Bungkam). Sinkronisasi suara (O.S.) atau (V.O.) ditaruh di layer audio terpisah di aplikasi editing Anda (CapCut/Premiere)."*

## Best Practices
- **Each prompt is independent** â€” never assume the video model can "see" or remember previous clips. All consistency must come from within the prompt itself (strong descriptions + reference images).
- Repeat key visual details explicitly across prompts when continuity is important (this is normal and expected).
- Prioritize story coherence and clear visual continuity over trying to make every single clip perfect in isolation.
- For very long films (>60s), suggest generating in batches and doing iterative refinement between batches.
- Always confirm with user before generating multiple clips.
- After generation, the **Editing & Sequencing Guide** becomes the main tool for the user to achieve a seamless final film.

This skill turns single-clip limitations into full cinematic productions.

## Grounded Realism Enforcement (MANDATORY)

Every clip prompt generated by VideoOrchestra MUST enforce grounded realism:

- **Motion**: All human motion must show weight, inertia, momentum, and physical consequence. No floaty, weightless, or robotic movement. Every action has wind-up and follow-through. Walking has heel-to-toe contact and arm counter-swing.
- **Texture**: Every prompt must specify natural skin texture (visible pores, subsurface scattering), individual hair strands, fabric weave/fiber detail, and material-appropriate surface behavior. No plastic skin, no wax texture, no airbrushed smoothness.
- **Camera**: Camera behavior must feel like a real human operator — subtle breathing, micro-reframe corrections, organic focus hunting. No perfectly smooth gimbal movement unless explicitly a steadicam shot.
- **Human Behavior**: Characters must show natural blinking, breathing, weight shifts, idle fidgeting, and micro-expressions. No statue-like stillness, no dead eyes, no robotic precision.
- **Environment**: Surfaces show natural wear, dust, and age. Materials interact with light correctly (metal reflects, wood absorbs, glass refracts). Wind affects all elements consistently.
- **Anti-AI Words**: Never use "beautiful", "perfect", "stunning", "masterpiece", "8K ultra HD" in any clip prompt. Replace with specific, technical, observable descriptions.
- **Priority Rule**: Physics > Realism > Story > Style. Only explicit "anime style" requests bypass grounded enforcement.

Every clip must produce video indistinguishable from real footage shot by a real camera operator capturing real people in a real location.

## CharSheet Integration

When character reference sheets are available (generated by CharSheet skill):
- Use CharSheet images as `@image` references for identity lock across all clips.
- CharSheet provides 6-panel references (extreme close-up face, left profile, right profile, medium shot, front full body, back full body).
- Reference the appropriate CharSheet view based on the clip's camera angle for strongest identity match.
- Repeat key identity descriptors from CharSheet in every clip prompt — never rely on "same as previous."

## Full Pipeline

```
CharSheet (character reference images)
    ↓
WriterSkill (story/script with duration-aware timing)
    ↓
CinSkill (cinematic direction — 23 engines)
    ↓
PromptSkill (individual clip prompt compilation)
    ↓
VideoOrchestra (THIS SKILL — multi-clip orchestration + sequencing)
    ↓
AI Video Generation → Editing & Sequencing Guide → Final Film
```








