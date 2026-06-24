# 1.3 · Memory Types

> **Goal:** distinguish RAM, ROM, cache and storage by speed, volatility and use case.

## Memory pyramid

```
            ▲   small, fast, expensive
            │
   ┌────────┴──────────┐  registers       (inside CPU,   <1 ns)
   ├───────────────────┤  cache (L1/L2/L3) (CPU die,     1-30 ns)
   ├───────────────────┤  main memory (RAM)               (~80 ns)
   ├───────────────────┤  SSD                            (~50 μs)
   ├───────────────────┤  HDD                            (~5 ms)
   ├───────────────────┤  Tape, optical archive          (seconds)
            │
            ▼   large, slow, cheap
```

The CPU works best when the data it needs is high in the pyramid.

## RAM — Random Access Memory

| Property | Value |
|----------|-------|
| Volatility | **Volatile** (loses data when power off) |
| Speed | Fast (~80 ns) |
| Use | Holds running programs and active data |
| Examples | DDR4 / DDR5 modules in a PC, LPDDR in phones |

When you double-click an app, the OS copies its code from storage **into RAM** so the CPU can fetch instructions quickly.

## ROM — Read Only Memory

| Property | Value |
|----------|-------|
| Volatility | **Non-volatile** (retains data without power) |
| Speed | Comparable to RAM for reads |
| Writable | Limited / not at all (in classic ROM) |
| Use | Firmware (BIOS/UEFI, embedded device boot code) |

ROM stores instructions that must survive a power cut — the very first code the CPU runs on power-up.

Modern variants:

- **PROM** (Programmable ROM) — written once.
- **EPROM / EEPROM / Flash** — erasable and rewritable, but with limited cycles.

## Cache

| Property | Value |
|----------|-------|
| Volatility | Volatile |
| Speed | **Fastest after registers** (1–30 ns) |
| Size | Small (KB–MB on modern CPUs) |
| Use | Holds frequently-used data near the CPU |

The CPU first checks the cache; only on a **cache miss** does it go to RAM. Good cache hit rates dramatically improve performance.

Levels:

| Level | Speed | Size | Notes |
|-------|-------|------|-------|
| L1 | ~1 ns | tens of KB per core | split into instruction + data |
| L2 | ~3 ns | hundreds of KB | per core or shared |
| L3 | ~10 ns | a few MB | shared across cores |

## Relationship to performance

- Bigger memory → can hold more open tabs / open files.
- More memory **addresses** the CPU can support → larger usable memory (32-bit OS caps at ~4 GB; 64-bit OS supports terabytes).
- Wider **word length** → more bits transferred per cycle.

## Capacity units — the famous "1 KB" question

| Unit (binary) | Bytes |
|---------------|-------|
| 1 byte | 8 bits |
| 1 KB | 1,024 bytes |
| 1 MB | 1,024 KB |
| 1 GB | 1,024 MB |
| 1 TB | 1,024 GB |

The SI (decimal) version uses 1,000 instead of 1,024. Hard-disk vendors advertise SI-style ("1 TB" = 10¹² bytes), so Windows shows less than the box says.

## Worked example · Why my PC slows down

- 8 GB RAM, you open 25 Chrome tabs + a game + Photoshop.
- Combined usage exceeds RAM. The OS uses **paging** to swap chunks to the SSD ("virtual memory").
- SSD access is **~1000× slower** than RAM.
- Apps stutter as the CPU waits for paging.

The cure: more RAM or fewer open apps.

## Common student mistakes

- Saying ROM is **volatile** (it's not).
- Saying cache is the same as RAM (it's smaller, faster, on the CPU die).
- Mixing **firmware** (software stored in ROM) with **operating system** (loaded from disk into RAM).
- Claiming SSD is a kind of RAM (SSDs are non-volatile mass storage; only RAM holds running data).

## Exam-style question

> **Q (4 marks):** Distinguish RAM and ROM in terms of volatility, typical use, and one example of data each holds. Then explain how cache memory improves CPU performance.

**Sample answer:**

- **RAM**: volatile, used as the working area for running programs (e.g. open documents, active variables).
- **ROM**: non-volatile, used to store firmware that must survive power loss (e.g. the BIOS/UEFI that boots the computer).
- **Cache**: a small, very fast memory between the CPU and RAM. By keeping recently or frequently used data and instructions close to the CPU, the cache avoids slow RAM access and reduces the average memory latency, allowing the CPU to execute more instructions per second.

## Key takeaways

- RAM = volatile workspace.
- ROM = non-volatile firmware store.
- Cache = tiny, fastest memory on the CPU.
- Capacity prefixes use **1024** in the IT sense; decimal SI uses 1000.

➡️ Next: [1.4 Storage Devices](./storage-devices)
