# 3.5 · Character Encoding

> **Goal:** explain how letters become bytes, name the four encodings on the syllabus, and choose the right one for a job.

## Why we need encoding

Computers store only `0`s and `1`s. A **character encoding** is an agreed mapping between characters (letters, symbols, ideographs) and **integer codes**, which can then be stored as bits.

Three things have to agree for text to travel correctly:

1. **Character set** — which characters are available (the alphabet).
2. **Encoding** — how each character maps to a binary code.
3. **Byte order / decoding software** — how the bytes are read back.

## ASCII — the original

**ASCII** (American Standard Code for Information Interchange) defines codes for the basic English alphabet, digits, punctuation and control characters.

| Aspect | Detail |
|--------|--------|
| Bits per character | **7** (often padded to 8 bits = 1 byte) |
| Total characters | 128 |
| Covers | English letters, digits, punctuation, control codes (CR, LF…) |
| Year | 1963 |

### Selected ASCII codes

| Character | Denary | Binary | Hex |
|-----------|--------|--------|-----|
| `A` | 65 | 100 0001 | 41 |
| `a` | 97 | 110 0001 | 61 |
| `0` | 48 | 011 0000 | 30 |
| `9` | 57 | 011 1001 | 39 |
| `(space)` | 32 | 010 0000 | 20 |
| `\n` (newline) | 10 | 000 1010 | 0A |

Two pieces of trivia worth remembering:

- `a − A = 32` (lowercase = uppercase + 32 → easy case conversion).
- `'9' − '0' = 9` (easy digit-character to integer conversion).

::: tip You do NOT need to memorise specific codes
The C&A Guide explicitly says: *"Recall of specific codes is not required."* You need to **understand** the principle.
:::

## Big-5 — Traditional Chinese

| Aspect | Detail |
|--------|--------|
| Bits per character | **16** (2 bytes) |
| Total characters | ~13,000+ |
| Covers | Traditional Chinese (mainly Hong Kong & Taiwan) |
| Year | 1984 |

Each Chinese character is stored as 2 bytes. A document mixing English and Chinese under Big-5 stores English in 1 byte and Chinese in 2.

## GB — Simplified Chinese

The Chinese national standard **GB** (國標) covers Simplified Chinese characters used in mainland China.

| Aspect | Detail |
|--------|--------|
| Bits per character | 2–4 bytes (GB2312, GBK, GB18030 over time) |
| Covers | Simplified Chinese; later versions include Traditional |

## Unicode — the global standard

**Unicode** assigns a unique number ("code point") to every character in every script — Latin, Chinese, Arabic, emoji, mathematical symbols, etc.

| Aspect | Detail |
|--------|--------|
| Total characters | 150,000+ (and growing) |
| Encodings | UTF-8 (1–4 bytes per char), UTF-16 (2 or 4 bytes), UTF-32 (always 4 bytes) |
| Used by | Modern Web, modern operating systems, almost all new software |

### UTF-8 is the de-facto Web standard

UTF-8 is clever:

- Encodes ASCII characters in **1 byte** (backwards-compatible).
- Encodes other characters in 2, 3 or 4 bytes.
- A single byte stream tells the decoder how many bytes belong to the current character.

```
'A'  → 1 byte:  01000001
'£'  → 2 bytes: 11000010 10100011
'中' → 3 bytes: 11100100 10111000 10101101
'😀' → 4 bytes: 11110000 10011111 10011000 10000000
```

## Side-by-side comparison

| Feature | ASCII | Big-5 | GB | Unicode (UTF-8) |
|---------|-------|-------|----|------------------|
| Origin | USA | Taiwan / HK | Mainland China | International |
| Bytes per character | 1 | 2 | 2–4 | 1–4 |
| Covers | English, ASCII | Traditional Chinese | Simplified Chinese | Everything |
| Mixed-language safe? | English only | Limited | Limited | Yes |
| Modern recommendation | Subset of UTF-8 | Legacy | Legacy | **Yes** |

## Why the size of the character set matters

> *"The relationship between the size of the character set and the representation should be explained."*  
> — C&A Guide

The number of bits needed to encode a character set is determined by the set's size:

| Character set size | Bits needed |
|-------------------|-------------|
| 2 (binary alphabet) | 1 |
| 16 | 4 |
| 256 | 8 |
| 65,536 (BMP of Unicode) | 16 |
| 1,114,112 (full Unicode) | 21 (rounded to 24 or 32) |

A larger character set → more bits per character → more storage and bandwidth needed.

## Common student mistakes

- Saying "ASCII can store Chinese" — it cannot (only 128 codes).
- Mixing **Unicode** (the character set) with **UTF-8** (one encoding of it).
- Claiming Big-5 covers Simplified Chinese — it does **not**.
- Forgetting that mixing encodings causes **mojibake** (garbled text).

## Real-world tips

- Always save text files as **UTF-8** to avoid Chinese garbage.
- When opening a CSV in Excel, choose UTF-8 encoding to keep Chinese readable.
- Web pages should declare `<meta charset="UTF-8">` in the `<head>`.

## Worked example · How many bytes does "中文ABC" take?

Under **UTF-8**:

| Char | Bytes |
|------|-------|
| 中 | 3 |
| 文 | 3 |
| A | 1 |
| B | 1 |
| C | 1 |
| Total | **9 bytes** |

Under **Big-5**:

| Char | Bytes |
|------|-------|
| 中 | 2 |
| 文 | 2 |
| A | 1 |
| B | 1 |
| C | 1 |
| Total | **7 bytes** |

Big-5 is smaller here but cannot represent emojis or Cyrillic.

## Practice activity

Match each scenario to the most suitable encoding:

| Scenario | Best encoding |
|----------|---------------|
| Storing English-only legacy database records from 1985 | ? |
| A Hong Kong newspaper website with Traditional Chinese & emojis | ? |
| A simplified-Chinese pamphlet for mainland China, no other scripts | ? |
| A multilingual Wikipedia article | ? |

::: details Suggested
- ASCII
- UTF-8 (Unicode)
- GB (or UTF-8)
- UTF-8 (Unicode)
:::

## Exam-style question

> **Q (4 marks):** Compare ASCII and Unicode in terms of (a) the range of characters supported, (b) the bytes used per character. State one reason most modern web pages use Unicode (UTF-8).

**Sample answer:**

- **Range**: ASCII supports 128 characters (basic English, digits, punctuation, control codes). Unicode supports over 150,000 characters covering all major scripts including Chinese, Arabic, emoji.
- **Bytes**: ASCII uses 1 byte per character (7 bits used). Unicode encoded as UTF-8 uses 1–4 bytes depending on the character; ASCII characters still take 1 byte for backward compatibility.
- **Reason**: Web pages serve global audiences and must display many scripts including emoji and Chinese; only Unicode can encode all of them.

## Key takeaways

- ASCII = 1 byte, English only.
- Big-5 = 2 bytes, Traditional Chinese.
- GB = 2–4 bytes, Simplified Chinese.
- Unicode (UTF-8) = 1–4 bytes, **global default**.
- Larger character set → more bits per character.

➡️ Next: [3.6 Multimedia Digitisation](./multimedia-encoding)
