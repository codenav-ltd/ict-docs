# 3.6 · Multimedia Digitisation

> **Goal:** explain briefly how images, audio and video are digitised, and reason about file size trade-offs.

## How images are digitised

### Step 1 · Sampling — divide into pixels

An image is broken into a grid of **pixels** (picture elements). The more pixels per inch, the higher the **resolution**.

```
Original picture  →  640 × 480 grid  →  307,200 pixels
                                       ▢ ▢ ▢ ▢ ▢ ▢ ▢ …
                                       ▢ ▢ ▢ ▢ ▢ ▢ ▢ …
                                       …                
```

### Step 2 · Quantisation — encode each pixel's colour

Each pixel is stored as a colour code. Two common schemes:

| Scheme | Bits per pixel | Colours |
|--------|----------------|---------|
| 1-bit black & white | 1 | 2 |
| 8-bit greyscale | 8 | 256 |
| 24-bit RGB true colour | 24 (8 per channel) | 16,777,216 |
| 32-bit ARGB | 32 (8 alpha + 8 R + 8 G + 8 B) | 16M with transparency |

The **bit depth** (or colour depth) determines the number of representable colours: 2ⁿ for n bits.

### Image file size estimate

```
file size ≈ width × height × bit depth ÷ 8   (in bytes, uncompressed)
```

A 1920×1080 24-bit photo:

```
1920 × 1080 × 24 ÷ 8 = 6,220,800 bytes ≈ 5.9 MB (uncompressed BMP)
```

Compression (JPG, PNG) typically reduces this by 5×–20×.

### Worked example · Why JPG is smaller than BMP for photos

JPG uses **lossy** compression that discards detail the eye is unlikely to notice (high-frequency components in colour channels). The same 5.9 MB BMP often becomes a 600 KB JPG with imperceptible quality loss.

## How audio is digitised

Sound is a continuous pressure wave. To digitise it:

### Step 1 · Sampling rate — how often to measure

The microphone is sampled at regular intervals. Common rates:

| Sampling rate | Use case |
|---------------|----------|
| 8 kHz | Telephone |
| 22.05 kHz | Low-quality voice recording |
| 44.1 kHz | CD audio |
| 48 kHz | Pro audio, video |
| 96 / 192 kHz | High-resolution audio |

Higher rates capture higher frequencies (Nyquist theorem: ≥ 2× the highest frequency to be preserved).

### Step 2 · Bit depth — how precise each sample is

| Bit depth | Use case |
|-----------|----------|
| 8-bit | Telephone, simple toys |
| 16-bit | CD audio, MP3 |
| 24-bit | Studio recording |

### Step 3 · Channels

| Channels | Description |
|----------|-------------|
| Mono | 1 channel |
| Stereo | 2 channels (L + R) |
| 5.1 surround | 6 channels |

### Audio file size estimate

```
file size ≈ sample rate × bit depth × channels × duration ÷ 8   (in bytes, uncompressed)
```

3 minutes of CD-quality stereo audio:

```
44,100 × 16 × 2 × 180 ÷ 8 = 31,752,000 bytes ≈ 30 MB
```

MP3 compression brings this to about 3 MB.

## How video is digitised

Video is a sequence of **still frames** (each digitised as an image) plus an **audio track**.

| Property | Examples |
|----------|----------|
| Frame rate (fps) | 24 (film), 30 (TV), 60 (high motion), 120 (slow-mo) |
| Resolution | 720p (1280×720), 1080p, 4K (3840×2160), 8K |
| Bit depth | typically 8 bits per channel (24 bpp) |
| Codec | H.264, H.265, AV1, VP9 |

### Video file size estimate (uncompressed)

```
file size ≈ width × height × bit depth × frame rate × duration ÷ 8
```

For 1080p 30fps 24-bit, 1 minute:

```
1920 × 1080 × 24 × 30 × 60 ÷ 8 ≈ 11 GB
```

Real H.264 compressed video for the same minute → about **70–200 MB** (50–150× smaller).

## Compression — lossless vs lossy

| Type | What it does | Pros | Cons | Examples |
|------|--------------|------|------|----------|
| **Lossless** | Encodes the exact original; perfectly reversible | No quality loss | Smaller savings | PNG, FLAC, ZIP |
| **Lossy** | Discards data the human senses miss | Much smaller files | Cannot recover original | JPG, MP3, MP4 |

### When to use which

- **Photographs / music for casual listening** → lossy is fine.
- **Medical imaging / archive masters** → lossless.
- **Diagrams, icons, screenshots** → lossless (PNG) because hard edges suffer in JPG.

## Sampling theorem (simplified)

To reproduce a signal containing frequencies up to **F**, you need to sample at **at least 2 × F** times per second (Nyquist rate).

Audio CDs sample at 44.1 kHz because the human ear hears up to ~20 kHz, and `2 × 20 = 40` plus a safety margin → 44.1 kHz.

## Common student mistakes

- Confusing **sampling rate** with **bit rate** (bit rate combines both with channel count).
- Saying *"lossless compression makes the file smaller without changing it"* — it changes the **encoding**, not the **content**.
- Treating GIF as a video format — GIF is an animated image format; modern web uses MP4 or WebM.

## Practice activity

Estimate the size of:

1. A 12-megapixel photo at 24-bit colour, uncompressed.
2. A 5-minute mono voice memo at 16-bit, 8 kHz.
3. A 30-second 720p video at 30 fps, uncompressed.

::: details Calculation hints
1. `12,000,000 × 24 ÷ 8 ≈ 36 MB`
2. `8000 × 16 × 1 × 300 ÷ 8 ≈ 4.8 MB`
3. `1280 × 720 × 24 × 30 × 30 ÷ 8 ≈ 2.5 GB`
:::

## Exam-style question

> **Q (4 marks):** Explain how an audio CD with 16-bit, 44.1 kHz, stereo sampling stores 60 seconds of music. Calculate the storage required (ignore overheads).

**Sample answer:**

The microphone signal is sampled 44,100 times per second on each of the two channels (stereo). Each sample is stored as a 16-bit integer representing the signal level at that instant. The 60-second stream contains `44,100 × 2 × 60 = 5,292,000` samples. Each sample is 2 bytes (16 bits), so the total storage is `5,292,000 × 2 = 10,584,000 bytes ≈ 10.1 MB`.

## Key takeaways

- Image = pixel grid + colour depth.
- Audio = sample rate × bit depth × channels.
- Video = frames + audio + compression.
- **Lossy** compression trades quality for size; **lossless** preserves all detail.

➡️ Next: [3.7 File Formats](./file-formats)
