# 3.1 · Analog vs Digital Data

> **Goal:** explain the difference, give real-life examples, and identify situations that require conversion between the two.

## Two ways to represent the world

| Aspect | **Analog** | **Digital** |
|--------|-----------|-------------|
| Values | Continuous (infinite range) | Discrete (finite set of distinct values) |
| Example signal | Voltage that smoothly varies over time | Sequence of `0`s and `1`s |
| Real-world example | A mercury thermometer reading | A digital thermometer's display |
| Storage | Often physical (tape grooves, film) | Bits in memory or on disk |

### Mental picture

```
Analog:  ───╱╲───╱╲───╱╲──── (smooth curve)

Digital: ████      ████      ████  (square steps)
         ░░░░ ████ ░░░░ ████ ░░░░
```

## Why computers use digital data

1. **Only two states to track** — high voltage (`1`) and low voltage (`0`). Transistors switch quickly and reliably between two states.
2. **Noise resistance** — a small voltage wobble in an analog signal corrupts the value forever; a digital signal can be cleanly re-read as long as `1`s stay above the threshold.
3. **Perfect copying** — copying a digital file produces a bit-for-bit identical copy. Copying an analog tape introduces hiss and distortion every generation.
4. **Compression and encryption** — only digital data can be mathematically transformed (compressed, hashed, encrypted).
5. **Standardisation** — digital data can be exchanged between any compliant device, regardless of brand.

## When conversion is needed

### Analog → Digital (ADC: Analog-to-Digital Converter)

| Source | Use case |
|--------|----------|
| Microphone | Record podcast |
| Camera sensor | Take a photo |
| Temperature sensor | Smart-home thermostat |
| Microphone in your phone | Voice messages |
| ECG machine | Patient monitoring |

### Digital → Analog (DAC: Digital-to-Analog Converter)

| Source | Use case |
|--------|----------|
| MP3 file | Play through speakers |
| Digital movie | Display on screen |
| Digital thermostat | Control a relay to a heater |
| Digital radio | Audio output to ear bud |

::: tip Devices that do both
A smartphone is full of ADCs **and** DACs: ADC for the microphone, DAC for the speaker, ADC for the touchscreen pressure sensor, etc.
:::

## The cost of going digital — sampling and quantisation

When an ADC converts an analog signal:

1. **Sampling** — the signal is measured at regular time intervals.
2. **Quantisation** — each sample is rounded to the nearest available digital value.

```
Original analog: ─╱─╲─╱─╲─╱─
Samples         : .   .   .   .
Quantised steps : ▁  ▃  ▆  ▂  ▅
```

More samples per second and more bits per sample give better fidelity but larger files. This trade-off is at the heart of audio/video formats (covered in 3.6).

## Limits and trade-offs

| Property | Analog wins | Digital wins |
|----------|-------------|--------------|
| Resolution | Theoretically infinite | Limited by sampling rate and bit depth |
| Storage | Cheap for some media (vinyl) | Cheap per byte, scales infinitely |
| Editing | Limited | Easy and reversible |
| Distribution | Physical | Instant, anywhere |
| Longevity | Degrades (tapes stretch, films fade) | Bit-rot risk, but copies are perfect |

## Pop-culture examples

- **Vinyl records** are analog; **CDs** are digital.
- **VHS tapes** are analog; **DVDs, Blu-rays** are digital.
- **Old AM/FM radio** is analog; **DAB / online radio** is digital.
- **Film cameras** are analog; **mirrorless cameras** are digital.

## Common student mistakes

- Calling a "digital photo" **analog because it's of the real world** — once captured, it is digital.
- Treating "digital" as synonymous with "binary" — digital data is **discrete**, and binary is the most common encoding, but ternary and decimal are also "digital".
- Saying "digital is always better" — analog still wins for some music enthusiasts (warmth of vinyl).

## Practice activity

Classify each as **analog (A)** or **digital (D)**:

1. A live trumpet performance.
2. The same performance recorded as a CD audio file.
3. An ink-and-paper signature.
4. A scanned PDF of the signature.
5. The hands of a wall clock.
6. The 7-segment display of a digital clock.
7. The voltage on the speaker wire of a stereo system.

::: details Answers
1. A 2. D 3. A 4. D 5. A 6. D 7. A
:::

## Exam-style question

> **Q (3 marks):** Distinguish between analog and digital data and state one reason computers prefer digital data.

**Sample answer:** Analog data is continuous and can take any value within a range; digital data is discrete and uses a finite set of distinct values (in computers, usually `0` and `1`). Computers prefer digital data because it is more resistant to noise during transmission and storage, allowing exact reproduction and easy mathematical processing such as encryption and compression.

## Key takeaways

- **Analog = continuous, Digital = discrete.**
- Computers use digital because of noise resistance, perfect copying, and mathematical processing.
- ADC and DAC bridge the two worlds.

➡️ Next: [3.2 Number Systems](./number-systems)
