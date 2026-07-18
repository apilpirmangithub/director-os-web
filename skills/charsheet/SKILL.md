---
name: "CharSheet — Cinematic Character Reference Sheet Generator"
description: >
  Generates photorealistic character reference sheet prompts for AI image generation models.
  Produces multi-view sheets with extreme close-up, left/right profiles, medium shot,
  and full body (front/back) with text annotations and white background. Designed to feed directly
  into CinSkill and PromptSkill as @image references for identity-locked AI video generation.
  Ensures absolute visual consistency across all views: same person, same clothing, same lighting,
  same skin texture, same proportions. Supports photorealistic human characters only — grounded
  realism mandatory, no illustration, no stylization unless explicitly requested as anime.
---

# CharSheet — Cinematic Character Reference Sheet Generator v1.0

## Purpose

Generate **multi-view character reference sheets** optimized for AI video production pipelines. These sheets become the @image references that CinSkill and PromptSkill use for identity-locked video generation.

## Core Philosophy

- **Aesthetic Inheritance**: The CharSheet MUST perfectly inherit the visual aesthetic of the main film. If the film is "Gritty 90s Anime", the sheet must be Gritty 90s Anime. If it is "Cinematic HDR Live-Action", the sheet must be Cinematic HDR Live-Action. Do not force generic "professional photoshoot" styles if it contradicts the film's intended aesthetic.
- The character sheet is **evidence**, not art. It documents a real person/character from multiple angles.
- Absolute consistency across all views — the viewer must believe all images are of the same physical person captured in the same session.
- **ZERO tolerance** for AI artifacts: plastic skin, symmetrical face, wax texture, dead eyes, missing pores, smooth hair blobs, melted fingers, or inconsistent proportions.

## Universal Tri-Sheet System (MANDATORY DEFAULT)
For EVERY character sheet you generate, you MUST ALWAYS output **3 distinct CharSheet Prompts** and explain how the user should use them:
1. **[AI ORIGINAL]**: ... [standard charsheet prompt] ... (Explain: "Use this to generate the character entirely from scratch").
2. **[FACE LOCK]**: "Please use the attached image as a character reference to lock the face. Preserve exact facial structure, bone structure, eye shape, and skin texture fidelity with 100% fidelity. Do not airbrush or beautify. [standard charsheet prompt]" (Explain: "Attach your photo to this prompt to lock your face, while the AI designs the costume").
3. **[FULL CUSTOM LOCK]**: "Please use the attached image as a character reference to lock the exact face and clothing. Preserve exact facial structure, skin texture fidelity, and clothing details with 100% fidelity. Do not airbrush or beautify. [standard charsheet prompt]" (Explain: "Attach your photo to this prompt with maximum weight to replicate your exact face and clothing").

---

## Mandatory Views (6-Panel Blueprint Layout)

The character sheet MUST contain exactly these 6 views, arranged in a clean 2x3 or 3x2 grid on a **PURE SOLID WHITE BACKGROUND**.
**CRITICAL RULE:** The design of the character MUST be perfectly synchronized across all 6 panels. The same face, same hair length, same clothing wrinkles, same proportions.

Every panel MUST contain a typography text label written inside the image:

### Row 1 — Face Detail (3 panels)

| Panel | View | Description |
|-------|------|-------------|
| 1 | **Extreme Close-Up (Front)** | Eyes, nose, lips, skin pores. Labeled with typography: **"EXTREME CLOSE UP"** |
| 2 | **Tampak Kiri (Left Profile)** | Perfect 90° profile view of the left side. Labeled with typography: **"LEFT PROFILE"** |
| 3 | **Tampak Kanan (Right Profile)** | Perfect 90° profile view of the right side. Labeled with typography: **"RIGHT PROFILE"** |

### Row 2 — Body & Wardrobe (3 panels)

| Panel | View | Description |
|-------|------|-------------|
| 4 | **Medium Shot (Front)** | Waist-up. Labeled with typography: **"MEDIUM SHOT"** |
| 5 | **Full Body Depan (Front)** | Entire body from head to toe facing camera. Labeled with typography: **"FRONT FULL BODY"**, **"AGE: [X] YRS"**, and **"HEIGHT: [X]CM"** |
| 6 | **Full Body Belakang (Back)** | Entire body back facing camera. Labeled with typography: **"BACK FULL BODY"** |

---

## The Master 6-Panel Prompt Template

Every output prompt MUST follow this exact structural template:

```text
**[Aesthetic/Style Tags (MUST MATCH FILM)]**. A 6-panel casting character reference sheet on a **pure solid white background**. The image is split into 6 equal grid panels. The character's design and identity are perfectly synchronized across all panels. Panel 1: Extreme Close-Up Face Front showing **[Facial Details/Pores/Eye Color]**, with typography text reading **"EXTREME CLOSE UP"**. Panel 2: Perfect 90-degree Left Side Profile Face showing **[Left details]**, with typography text reading **"LEFT PROFILE"**. Panel 3: Perfect 90-degree Right Side Profile Face showing **[Right details]**, with typography text reading **"RIGHT PROFILE"**. Panel 4: Medium Shot Waist-Up Front showing **[Upper Clothing]**, with typography text reading **"MEDIUM SHOT"**. Panel 5: Full Body Front showing **[Full Wardrobe]**, with clear typography text annotations reading **"FRONT FULL BODY"**, **"AGE: [X] YRS"**, and **"HEIGHT: [X]CM"**. Panel 6: Full Body Back showing **[Back Details/Weapons/Hair]**, with typography text reading **"BACK FULL BODY"**. The character is **[Age, Ethnicity, Body Type, Posture, Clothing Details]**. **[Specific camera/lighting settings that match the aesthetic]**, absolutely consistent identity. --ar 16:9
```

---

## 🎭 CASTING SCIENCE (Actor Archetype Selection)
**CRITICAL:** AI defaults to generating generic "beautiful person" faces. You MUST explicitly design the CHARACTER through their physical appearance. The face, body, and posture must TELL A STORY before a single word of dialogue is spoken.

### 1. The Face-as-Story Protocol
Do NOT describe characters with vague terms like "attractive man" or "beautiful woman". Instead, describe the SPECIFIC physical markers that reveal their life story:

| Character Archetype | Physical Design |
|---|---|
| **War Veteran** | Deep crow's feet, sun-damaged leathery skin, asymmetric jawline from old fracture, close-cropped graying hair, thousand-yard stare |
| **Overworked Mother** | Dark circles, messy tied-back hair with loose strands, chapped lips, strong forearms, micro-wrinkles from constant frowning |
| **Corrupt Politician** | Immaculately groomed but slightly puffy face from excess, manicured nails, forced smile that doesn't reach the eyes |
| **Street Fighter** | Cauliflower ear, crooked nose from multiple breaks, scar tissue on knuckles and brow ridge, thick neck, permanent scowl lines |
| **Tech Entrepreneur** | Pale from indoor living, slight forward hunch from screen posture, nervous energy in the eyes, clean but disheveled hair |
| **Rural Farmer** | Deep tan lines at collar and sleeves, calloused massive hands, squint wrinkles from sun, weathered but warm expression |

### 2. The Body Language Blueprint
Before generating the CharSheet, define the character's DEFAULT physical posture and energy:

- **Dominant:** Chin up, shoulders wide, arms uncrossed, takes up space, plants feet wide apart.
- **Submissive:** Hunched shoulders, arms close to body, avoids eye contact, shifts weight nervously.
- **Predatory:** Low center of gravity, head slightly tilted, unblinking eyes, stillness before explosive movement.
- **Exhausted:** Drooping eyelids, slack jaw, weight leaning against walls or furniture, slow blinks.
- **Manic:** Wide eyes, constant fidgeting, rapid head turns, fingers tapping, unstoppable energy.

### 3. Age Accuracy Protocol
AI models default to making everyone look 25-30. You MUST enforce age-accurate physical markers:

- **Teen (15-19):** Slight acne, unfinished facial structure, gangly proportions, awkward posture.
- **Young Adult (20-30):** Peak physical condition but showing early stress (eye bags from late nights).
- **Middle Age (35-50):** Crow's feet, forehead lines, slight softening of jawline, graying at temples.
- **Senior (60+):** Deep wrinkles, sagging skin, age spots, thinning hair, slower but dignified posture.

### 4. The Anti-Photogenic Protocol (Ugly Beauty & Natural Restraint)
**CRITICAL:** AI natively suffers from "Instagram-Face Syndrome" — everyone looks perfectly symmetrical and highly photogenic. You MUST inject "un-cinematic" flaws to create realism, BUT **DO NOT OVERDO IT.**
**THE RESTRAINT MANDATE:** "Ugly Beauty" does NOT mean grotesque, deformed, or literally horrifying (unless it's a monster). It means **NATURAL, GROUNDED REALISM**. Just everyday, normal, imperfect human beings.
**THE NARRATIVE JUSTIFICATION MANDATE:** NEVER apply physical flaws randomly just for the sake of being "ugly." Every imperfection MUST have a strong narrative or occupational reason. 
- Example 1: A detective working the 3:00 AM shift has heavy eye bags and messy hair due to *exhaustion*. 
- Example 2: A farmer has sunspots and leathery skin due to *outdoor labor*.
- Example 3: If the character is a well-rested, wealthy CEO, they MUST NOT have exhausted eye bags or messy hair; their imperfections should be subtle (e.g., an asymmetrical, cold smile or pale indoor skin).
- **Natural Asymmetry (Not Deformity):** "Slightly crooked nose", "one eye slightly smaller than the other", "uneven smile". Do NOT make them look mutated.
- **Unconventional (Not Exaggerated):** "Weak chin", "mild overbite", "heavy hooded eyelids", "tired expression".
- **Skin Texture (Not Disease):** "Visible pores", "mild acne scarring", "sunspots", "uneven skin tone". Do not over-texture them into looking sick unless justified by the script.
- **Sweat & Moisture (Anti-Slime):** NEVER use generic words like "very sweaty" or "sweating heavily", as AI will over-render it into looking like thick plastic or slime. If a character is sweating, use clinical/microscopic terms: *"Micro-beads of perspiration on the forehead"*, *"matte skin with subtle localized specular highlights"*, or *"damp hairline"*. Keep the moisture grounded and natural.
- **Camera-Shy Posture:** Prevent the character from "posing" for the camera. Use tags like: "awkward posture", "unaware of the camera", "mid-blink", "resting tired face", "unflattering angle".

---

## 👔 WARDROBE DESIGN PROTOCOL (Costume as Character)
**CRITICAL:** Clothing is NOT decoration. In cinema, wardrobe is a VISUAL LANGUAGE that communicates status, psychology, and narrative arc WITHOUT dialogue.

### 1. The Wardrobe Storytelling Matrix

| What Clothing Reveals | Example |
|---|---|
| **Economic Status** | Frayed collar = poverty. Perfect tailoring = wealth. Brand-new ill-fitting suit = trying to pretend |
| **Personality** | All-black = guarded/powerful. Bright colors = extrovert. Neutral beige = invisible/forgettable |
| **Emotional State** | Buttoned-up = in control. Loosened tie, rolled sleeves = breaking down. Mismatched = not thinking |
| **Occupation** | Ink-stained fingers + rolled sleeves = writer. Steel-toed boots = construction. Scrubs = medical |
| **Time Period** | 90s baggy jeans, 60s mod skirts, Edo-period hakama, Victorian corset |
| **Cultural Identity** | Batik, Kebaya, Kimono, Dashiki, Sari — must be culturally accurate |

### 2. The Wardrobe Arc (Costume Evolution)
In multi-clip films, wardrobe MUST change to reflect the character's emotional journey:

- **Act 1 (Control):** Clean, pressed, symmetrical, buttoned up. Everything in order.
- **Act 2 (Crisis):** Same clothes but progressively disheveled — untucked shirt, missing button, sweat stains, rolled sleeves, loosened collar.
- **Act 3 (Transformation):** Either completely different outfit (new identity) OR the same clothes now destroyed (torn, bloodied, soaked).

### 3. The Full-Body Wardrobe Mandate (Head-to-Toe)
**ABSOLUTE RULE:** When describing ANY character's wardrobe, you MUST describe ALL 5 zones. Leaving ANY zone undefined will cause AI to hallucinate random clothing:

| Zone | Must Define |
|------|------------|
| **1. Head** | Hair (style, length, color, wet/dry), headwear (hat, bandana, none), facial hair |
| **2. Upper Body** | Undershirt, shirt/blouse, jacket/coat, accessories (necklace, tie, scarf) |
| **3. Hands** | Rings, gloves, watches, bracelets, tattoos, nail condition |
| **4. Lower Body** | Pants/skirt/shorts type, belt, specific fit (baggy, tailored, torn) |
| **5. Feet** | Specific shoe type (combat boots, stilettos, sandals, barefoot) — NEVER leave undefined |

### 4. Color Costume Psychology

| Wardrobe Color | Character Signal |
|---|---|
| **All Black** | Power, mourning, hiding, authority, mystery |
| **Pure White** | Innocence, purity, clinical, angelic, OR about to get destroyed (blood contrast) |
| **Red** | Passion, danger, aggression, the one you can't ignore |
| **Blue** | Trust, calm, sadness, loyalty, corporate |
| **Gray** | Anonymity, depression, bureaucracy, moral ambiguity |
| **Earth Tones** | Grounded, rural, honest, humble, connected to nature |
| **Neon/Bright** | Chaotic, attention-seeking, unhinged, party, youth |

### 5. The Texture Detail Mandate
AI renders all clothing as smooth plastic unless told otherwise. You MUST specify fabric texture:

- "Wrinkled linen shirt with visible weave texture"
- "Worn leather jacket with scuff marks and cracking at the elbows"
- "Rain-soaked cotton t-shirt clinging to skin, semi-transparent from water"
- "Starched crisp white dress shirt with razor-sharp collar creases"
- "Faded denim with white stress marks at the knees and pockets"


---

