# Module B · Computer System Fundamentals

> **Suggested time:** 20 hours · **Reliable MC source.** Hardware facts rarely change between exam years.

This module gives you the mental model of how the major components of a computer system work together.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Basic Machine Organisation | 14 |
| b | System Software | 6 |

---

## a. Basic Machine Organisation (14h)

### Learning outcomes

- Explain the functions of hardware: **input/output devices, processing units, bus system, storage devices**.
- Explain the structure and functions of a **CPU** and its components.
- Outline the **fetch-decode-execute** cycle and the roles of registers, buses and the ALU.
- Describe **RAM, ROM, memory cache** — and the relationship between memory size, address, word length, and performance.
- Describe **input/output devices** and select appropriate ones for a context.
- Describe **storage devices** in terms of access mode, volatility, transfer rate, capacity.
- Outline **latest developments** in processor capabilities, primary memory, secondary storage, data communications.

### CPU components

```
           ┌────────────── CPU ────────────────┐
 Inputs ▶ │  ┌─────────┐  ┌────┐  ┌────────┐  │ ▶ Outputs
          │  │ Control │  │ALU │  │Registers│  │
          │  │  Unit   │  │    │  │  PC IR  │  │
          │  └─────────┘  └────┘  │  MAR MDR│  │
          │       ▲ Bus System ▲   └────────┘  │
          └───────│─────────│──────────────────┘
                  ▼         ▼
            ┌──────────┐   ┌────────────┐
            │  Memory  │   │  Storage   │
            │ (RAM/ROM)│   │ (HDD/SSD)  │
            └──────────┘   └────────────┘
```

### Fetch-decode-execute cycle

1. **Fetch** — PC tells MAR which memory address to read, contents come back in MDR.
2. **Decode** — Control Unit decodes the instruction in the IR.
3. **Execute** — ALU performs arithmetic/logic; result stored in a register or memory.
4. **Increment** the Program Counter and repeat.

### CPU speed units

| Unit | Time | Example use |
|------|------|-------------|
| 1 millisecond (ms) | 10⁻³ s | Disk seek time |
| 1 microsecond (μs) | 10⁻⁶ s | Slow RAM cycle (legacy) |
| 1 nanosecond (ns) | 10⁻⁹ s | Modern RAM access |
| 1 picosecond (ps) | 10⁻¹² s | CPU instruction time |

### Memory types

| Type | Volatile? | Speed | Cost | Used for |
|------|-----------|-------|------|----------|
| **Cache** | Yes | Fastest | Highest | Holding active data near the CPU |
| **RAM (DRAM)** | Yes | Fast | Medium | Main memory while programs run |
| **ROM** | No | Fast (read-only) | Medium | Firmware (e.g. BIOS) |
| **Secondary storage** (HDD/SSD/Flash) | No | Slowest | Cheap | Long-term storage |

### Capacity unit prefixes

```
1 KB = 1024 Bytes  (not 1000!)
1 MB = 1024 KB
1 GB = 1024 MB
1 TB = 1024 GB
```

The SI system uses powers of 10, so a 1 TB disk advertised by a manufacturer (10¹² bytes) is **smaller** than a true 1 TB (2⁴⁰ bytes). You should be able to explain why "Windows reports less storage than the box."

### Input/output devices

| Device | Type | Used for |
|--------|------|----------|
| Keyboard, mouse, scanner, microphone, camera, sensors | Input | Capturing user actions or environment |
| Monitor, speaker, printer, plotter, projector | Output | Displaying or producing results |
| Touch screen | Both | Mobile UIs |

### Storage devices

| Device | Access | Volatile? | Approximate transfer rate | Capacity |
|--------|--------|-----------|--------------------------|----------|
| Magnetic disk (HDD) | Random | No | ~100 MB/s | up to ~20 TB |
| Optical disk (CD/DVD/Blu-ray) | Random | No | ~50 MB/s | up to ~100 GB |
| Flash memory (SSD, USB) | Random | No | ~500 MB/s (SATA), ~7 GB/s (NVMe) | up to ~8 TB |
| Magnetic tape | Sequential | No | ~400 MB/s | up to ~20 TB+ |
| Network storage (NAS / cloud) | Random over network | No | depends on network | virtually unlimited |

Trend: smaller physical size, larger capacity, faster transfer rate over time.

---

## b. System Software (6h)

### Learning outcomes

- Know the functions of **system software vs applications software** and their relationships with hardware and users.
- Outline the basic functions of an **operating system** and describe common ones.
- State the functions and needs of **utility programs** and **driver programs**.
- Distinguish the **modes of operation** (batch, real-time, parallel, distributed, virtualisation).

### Software hierarchy

```
┌────────────────────────────┐
│   Applications software    │  Word, Chrome, Photoshop…
├────────────────────────────┤
│   System software          │  OS + utilities + drivers
├────────────────────────────┤
│   Hardware                 │  CPU, RAM, devices…
└────────────────────────────┘
       ▲
       │ Users interact mostly through applications software.
```

### Operating system functions

- **Process management** — scheduling and switching between programs.
- **Memory management** — allocating RAM, virtual memory paging.
- **File management** — directory structure, permissions.
- **Device management** — drivers and I/O.
- **Security & user management** — login, permissions, account types.
- **User interface** — GUI or CLI.

### Common OS

| OS | Typical use | Notes |
|----|-------------|-------|
| Windows | Desktop, office | Closed source, dominant on PCs |
| macOS | Creative professionals | Built on a Unix base |
| Linux distros (Ubuntu, Debian, Fedora) | Servers, developers | Open source, free |
| iOS, Android | Mobile | iOS closed, Android open source base |
| Chrome OS | Lightweight laptops | Browser-centric |

### Utility programs

| Utility | Function |
|---------|----------|
| Data compressors | Reduce file size for transfer or storage (zip, rar, 7z) |
| Virus checkers | Detect and remove malware |
| File managers | Browse, copy, move, rename files |
| Defragmentation software | Reorganise data on HDD for faster access |
| System monitoring | Show CPU/RAM/disk usage |

### Driver programs

A **device driver** is a piece of software that lets the OS talk to a specific piece of hardware. Without the right driver the device won't work, even if it is physically connected.

### Modes of operation

| Mode | What it means | Example |
|------|----------------|---------|
| **Batch processing** | Jobs are queued and run without user interaction | Monthly payroll |
| **Real-time processing** | Immediate response required | Flight control, online banking |
| **Parallel processing** | Multiple processors work on parts of one task simultaneously | Scientific simulations |
| **Distributed processing** | Work spread across networked computers | Cloud services |
| **Virtualisation** | One physical machine runs multiple virtual machines | Cloud servers, sandboxing |

---

## Common mistakes

- Mixing **cache** (volatile) with **ROM** (non-volatile).
- Confusing **firmware** (software stored in ROM) with the operating system.
- Listing "Windows" as both a system and applications software (it is system software).
- Forgetting that **virtualisation** is a mode of operation, not just "VirtualBox".

## Past-paper hotspots

- MC: identify which type of memory is volatile / non-volatile.
- MC: pick the best storage device given (cost, speed, portability) trade-offs.
- Section B: explain the steps of the fetch-decode-execute cycle and the role of buses.

---

➡️ Next: [Module C · Internet & its Applications](./module-c-internet)
