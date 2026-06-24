# 2.3 · Web File Formats

> **Goal:** pick the right multimedia format for a web page.

## Image formats for the web

| Format | Compression | Best for | Notes |
|--------|-------------|----------|-------|
| **JPEG / JPG** | Lossy | Photographs | Small files, no transparency |
| **PNG** | Lossless | Logos, icons, screenshots | Supports transparency (alpha) |
| **GIF** | Lossless, 256-colour palette | Short animations | Largely replaced by MP4/WebM |
| **WebP** | Both | Modern photos / graphics | Smaller than JPG at same quality |
| **SVG** | Vector (lossless) | Logos, icons, charts | Scales infinitely without pixelation |

## Audio formats for the web

| Format | Compression | Best for |
|--------|-------------|----------|
| **MP3** | Lossy | Music, podcasts |
| **AAC** | Lossy | Apple ecosystem, YouTube |
| **OGG / OPUS** | Lossy | Open-source friendly |
| **WAV** | None | Source masters, rarely served on web |

## Video formats for the web

| Format / codec | Use |
|----------------|-----|
| **MP4 (H.264)** | Universal modern standard |
| **WebM (VP9 / AV1)** | Royalty-free alternative |
| **HLS / DASH** | Adaptive streaming — different bitrates served as needed |

## Choosing wisely

Smaller files = faster page load = better user experience and SEO. The rules of thumb:

- Photos → **JPG** or **WebP**.
- Logos / icons → **SVG** or **PNG**.
- Memes / short clips → **MP4** (replaces GIF).
- Voice / music → **MP3** or **AAC**.

## Plug-ins, players, helpers

The C&A Guide mentions browser **plug-ins and players**. Modern browsers play most media natively (HTML5 `<video>` and `<audio>` tags), reducing the need for legacy plug-ins like Flash (officially dead).

## Search engines and information evaluation

The Guide also lists "**formulating effective search strategies**" and **critically analysing source reliability** — see Module E for ethics, but the practical web skills include:

- Use **quotes** for exact phrases.
- Use `site:` to limit to a domain.
- Use `-` to exclude words.
- Cross-check multiple independent sources.

## Exam-style question

> **Q (4 marks):** Recommend a suitable file format for each of the following items on a school website:
> (a) A high-quality photo of the school building.
> (b) The school crest with a transparent background.
> (c) A 30-second introduction video.
> (d) The principal's audio message of welcome.

**Sample answer:**

(a) **JPG (or WebP)** — photographs compress well lossily with no perceptible quality loss.
(b) **PNG (or SVG)** — supports transparency, lossless edges. SVG scales infinitely if the crest is vector art.
(c) **MP4 (H.264)** — universal video format playable on every modern browser and device.
(d) **MP3 (or AAC)** — small compressed audio, supported across all platforms.

## Key takeaways

- Match the format to the medium and to web performance needs.

➡️ Next: [2.4 Streaming & Cloud](./streaming)
