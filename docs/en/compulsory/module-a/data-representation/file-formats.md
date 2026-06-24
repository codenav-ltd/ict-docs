# 3.7 · File Formats

> **Goal:** compare the common file formats listed in the C&A Guide and pick the right one for a use case.

## Why "format" matters

A file format is a **convention** for arranging bytes so software can read them back. Same data, different formats → very different sizes, qualities and capabilities.

## Formats listed in the C&A Guide

| Category | Formats |
|----------|---------|
| Image | bmp, png, jpg |
| Audio | wav, mp3 |
| Video | avi, mpeg4 (mp4) |
| Document / text | txt, docx, odt, pdf |

You should be able to **compare** them on:

- compression (lossless / lossy / none)
- typical file size
- typical use case
- editability vs portability

## Image formats

| Format | Compression | Typical size | Best for | Notes |
|--------|-------------|--------------|----------|-------|
| **BMP** | None (or RLE) | Largest | Legacy Windows, simple uncompressed storage | Wastes space on modern web |
| **PNG** | Lossless | Medium | Icons, screenshots, logos, transparency | Supports alpha channel |
| **JPG (JPEG)** | Lossy | Smallest | Photographs | Don't re-save repeatedly (quality degrades each time) |
| **GIF** (not on syllabus but commonly seen) | Lossless, 256-colour palette | Small | Simple animations | Largely replaced by MP4 |

### Quick rule

- **Photo of real life** → JPG.
- **Diagram, screenshot, icon, transparency** → PNG.
- **Archival / forensic** → BMP or TIFF.

## Audio formats

| Format | Compression | Typical size (3 min) | Best for | Notes |
|--------|-------------|----------------------|----------|-------|
| **WAV** | None | ~30 MB | Recording masters, short SFX | High quality, large |
| **MP3** | Lossy | ~3 MB | Music distribution, podcasts | Universal compatibility |
| **AAC** (in MP4 container, not in syllabus list) | Lossy | ~3 MB | Apple ecosystem, YouTube | Slightly better than MP3 at same bit rate |
| **FLAC** (not on syllabus) | Lossless | ~15 MB | Audiophile downloads | Smaller than WAV, no quality loss |

### Quick rule

- **Recording masters** → WAV.
- **Sharing / streaming** → MP3.

## Video formats

| Format | Compression | Typical size (1 min, 1080p) | Best for | Notes |
|--------|-------------|------------------------------|----------|-------|
| **AVI** | Container — can hold many codecs | Varies; often large | Legacy Windows video | Old, no longer recommended |
| **MPEG-4 / MP4** | Lossy (H.264, H.265, AV1) | ~50–200 MB | Web streaming, mobile playback | The de-facto standard |

### Quick rule

- **Today** → MP4 (with H.264 or H.265 codec).

## Document formats

| Format | Editable? | Layout fidelity | Best for | Notes |
|--------|-----------|-----------------|----------|-------|
| **TXT** | Yes | No formatting | Plain text, code, logs | Smallest, universally readable |
| **DOCX** | Yes (Word) | Good | Microsoft Word documents | Proprietary but open spec |
| **ODT** | Yes (LibreOffice / OpenOffice) | Good | Open document standard | Open, royalty-free |
| **PDF** | Limited (without special tools) | Excellent | Sharing for viewing/printing | Looks identical on any device |

### Quick rule

- **Sharing with formatting preserved** → PDF.
- **Editing collaboratively** → DOCX or ODT.
- **Code / config / logs** → TXT.

## Decision flowcharts

### "What format should I save this image as?"

```
Is it a photograph?               → JPG
Does it need transparency?        → PNG
Is it a screenshot or icon?       → PNG
Is it a forensic archive?         → BMP or TIFF
```

### "What format should I send this document as?"

```
Recipient must edit?              → DOCX (Microsoft) / ODT (Open)
Recipient must only view?         → PDF
Recipient is a programmer?        → TXT (or Markdown)
```

## Container vs codec (good to know)

- A **container** is the file wrapper (e.g. `.mp4`, `.avi`, `.mkv`).
- A **codec** is the algorithm that compresses / decompresses the audio or video stream (H.264, H.265, AAC, MP3).
- An `.mp4` file can contain H.264 video + AAC audio, OR H.265 video + Opus audio, etc.

The HKEAA mostly cares about containers (file extensions).

## File-size comparison example

A typical short school promotional clip — 30 s, 720p, stereo audio:

| Format / encoding | Approximate size |
|-------------------|------------------|
| Uncompressed AVI | ~2.5 GB |
| MP4 (H.264) | ~30 MB |
| MP4 (H.265) | ~15 MB |
| Old MPEG-1 | ~50 MB |

The MP4 (H.265) is ~150× smaller than uncompressed — same content, smarter format.

## Common student mistakes

- Calling MP4 **lossless** — it is lossy.
- Saving a photo as PNG and being surprised it is larger than JPG.
- Editing a JPG many times and not realising quality degrades each save.
- Calling DOCX an **open** format — it is **proprietary but standardised**; ODT is the open one.

## Practice activity

Choose the best format for each:

1. A 200-page lecture notes you must publish for download — clear layout, no editing required.
2. A team logo with a transparent background for the school website.
3. A 6-second meme to share in a group chat (modern phones).
4. A recording master of the school choir for the music teacher's archive.
5. Source code for an SBA submission.

::: details Suggested
1. PDF · 2. PNG · 3. MP4 (or animated GIF, though MP4 is smaller) · 4. WAV (or FLAC) · 5. TXT (or `.py`/`.html` etc, plain text)
:::

## Exam-style question

> **Q (5 marks):** A school is preparing a digital prospectus to be downloaded from its website. The prospectus contains photographs of students, the school logo with a transparent background, and 30-page formatted text.
>
> Recommend the most suitable file format for each, justifying your choice.

**Sample answer:**

- **Photographs** → JPG. Photographs have continuous tones; JPG's lossy compression dramatically reduces file size with imperceptible quality loss, important for fast download from a website.
- **School logo with transparent background** → PNG. PNG supports transparency (alpha channel) and uses lossless compression, preserving the crisp edges of the logo.
- **Formatted text (30 pages)** → PDF. PDF preserves layout, fonts and images across all devices and operating systems, making it ideal for distribution.

## Key takeaways

- The C&A Guide names: **bmp, png, jpg, wav, mp3, avi, mpeg4, txt, docx, odt, pdf**.
- Match format to use case: photo → JPG, screenshot → PNG, video → MP4, viewable doc → PDF.
- Lossy formats trade quality for size; lossless formats preserve every bit.

➡️ Next chapter: [4 · Data Manipulation & Analysis](../data-manipulation/)
