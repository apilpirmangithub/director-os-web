---
name: "AudioSkill — Cinematic Sound Design Engine v1.0"
description: >
  Generates professional-grade audio prompts for Voice Acting (ElevenLabs), Foley/SFX (ElevenLabs SFX),
  and Music Scoring (Suno/Udio). Enforces HDR audio mixing, uncompressed formats, dynamic range, and
  emotional pacing.
---

# AudioSkill — Cinematic Sound Design Engine v1.0

## Purpose
Visuals are only 50% of the cinematic experience. This skill dictates how to write prompts for AI audio generators to produce studio-quality soundscapes, voice acting, and musical scores.

---

## 1. Voice Acting Engine (ElevenLabs/Play.ht)

Never just write "A man talking." Voice prompts must dictate the emotional performance, recording environment, and timbre.

### Voice Prompt Structure:
`[Character Type], [Emotional State], [Vocal Timbre], [Pacing/Flow], [Micro-expressions/Breathing]. [Technical Spec].`

### Rules:
- **Language Lock (CRITICAL):** If the dialogue is NOT in English (e.g., Japanese, Indonesian), you MUST explicitly state the native language to prevent the AI from generating an English accent or translating it to English. (e.g., "Speaking fluent native Japanese, strictly NOT English").
- **Timbre:** Raspy, booming, breathy, squeaky, resonant, nasal.
- **Pacing/Flow:** Machine-gun fast, slow and deliberate, trembling, hesitant, arrogant flow.
- **Micro-expressions:** Include physical vocalizations in the description (e.g., "heavy breathing between words", "stifling a sob", "gritting teeth").
- **Technical Spec (MANDATORY):** End every voice prompt with: `Wide dynamic range audio, uncompressed HDR mix, zero audio clipping.`

**Example:**
> *Prompt:* "Middle-aged gruff male voice, suppressed rage. Raspy and resonant timbre. Slow, deliberate pacing with heavy breathing between words like he is gritting his teeth. Wide dynamic range audio, uncompressed HDR mix, zero audio clipping."

---

## 2. Foley & SFX Engine (ElevenLabs SFX)

Sound effects must be layered and physically grounded.

### SFX Prompt Structure:
`[Primary Sound Action], [Material Collision], [Reverb/Environment], [Technical Spec].`

### Rules:
- **Material Collision:** What is hitting what? (e.g., "Heavy metal boot scraping against concrete").
- **Frequency Layers:** Always combine low frequencies (sub-bass drop, heavy thud) with high frequencies (glass shatter, sharp hiss).
- **Technical Spec (MANDATORY):** End every SFX prompt with: `Cinematic theatrical mix, heavy sub-bass, Dolby Atmos style spatial panning.`

**Example:**
> *Prompt:* "Massive cinematic sci-fi explosion. High-frequency electrical glass shattering followed immediately by a deafening low-frequency sub-bass shockwave. Ominous metallic debris raining down on concrete. Cinematic theatrical mix, heavy sub-bass, Dolby Atmos style spatial panning."

---

## 3. Musical Scoring Engine (Suno/Udio)

Music dictates the emotional subtext of a scene.

### Rules:
- **BPM (Beats Per Minute):** Dictate the speed. (e.g., 60 BPM for sad/ambient, 140+ BPM for action/fight scenes).
- **Instrumentation:** Specify the exact instruments (e.g., "distorted electric cello", "808 sub-bass synth", "massive taiko drums").
- **Structure:** Use tags like `[Build up]`, `[Drop]`, `[Crescendo]` to guide the AI's composition flow.

**Example:**
> *Prompt:* "[Instrumental] Epic cyberpunk battle theme. 145 BPM. Aggressive distorted 808 sub-bass, frantic analog synth arpeggios, and massive taiko drums. [Build up] into a chaotic [Drop] with soaring distorted electric cello."

---

## 4. Trigger Conditions
Use this skill whenever generating audio, sound effects, or music prompts, or when updating the `@audio` and `Soundscape` sections of an Orchestrator script.
