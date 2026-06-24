# Chapter 1 · Basic Machine Organisation

> **Hours:** 14 · The largest sub-topic of Module B.

Every computer — phone, laptop, server, smart TV — shares the same skeleton: processor, memory, storage, input/output, all connected by buses. This chapter walks through each piece.

## Sub-topics

| # | Topic | Time |
|---|-------|------|
| 1.1 | [CPU architecture](./cpu-architecture) | 60 min |
| 1.2 | [Fetch–decode–execute cycle](./fetch-decode-execute) | 60 min |
| 1.3 | [Memory types](./memory-types) | 60 min |
| 1.4 | [Storage devices](./storage-devices) | 60 min |
| 1.5 | [Input / output devices](./io-devices) | 60 min |

## Big picture

```
          ┌────────── CPU ──────────┐
 Inputs ──│  Control + ALU + Regs   │── Outputs
          └────────┬────────────────┘
                   │ buses
           ┌───────┴────────┐
           ▼                ▼
       ┌───────┐       ┌───────────┐
       │  RAM  │       │  Storage  │
       │  ROM  │       │  HDD/SSD  │
       │ Cache │       │  Optical  │
       └───────┘       └───────────┘
```

Memorise this picture. Almost every Section B structured question begins with a labelled version of it.

## Learning outcomes (C&A Guide)

- Explain functions of input/output devices, processing units, bus system, storage devices.
- Explain the structure and functions of a CPU and its components.
- Outline the **fetch-decode-execute** cycle.
- Describe RAM, ROM, memory cache; relate size, address, word length to performance.
- Describe storage devices in terms of access mode, volatility, transfer rate, capacity.
- Outline latest developments in processors, memory, storage, data communications.

➡️ Start: [1.1 CPU Architecture](./cpu-architecture)
