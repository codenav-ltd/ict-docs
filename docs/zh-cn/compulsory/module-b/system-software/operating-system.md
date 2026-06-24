# 2.1 · Operating Systems

> **Goal:** describe the major functions of an OS and compare common ones.

## What an OS does — six core jobs

| Function | What it does | Example |
|----------|--------------|---------|
| **Process management** | Schedule and switch between programs | Run Chrome + Word + music player simultaneously |
| **Memory management** | Allocate RAM, swap to disk if needed | Open more tabs than your RAM holds; OS pages out the oldest |
| **File management** | Maintain folders, permissions, free space | Save file to `D:\projects\` |
| **Device management** | Talk to hardware via drivers | Print job sent to the printer driver |
| **User & security management** | Logins, passwords, permissions | Standard vs Administrator account |
| **User interface (UI)** | GUI or CLI | Windows desktop vs Linux terminal |

Without these, your hardware would be a useless box.

## Common operating systems

| OS | Typical user | Notes |
|----|--------------|-------|
| **Microsoft Windows** | Desktops, offices, gamers | Closed source, ~75% PC market |
| **macOS** | Apple Mac users | Unix-based |
| **Linux distros** (Ubuntu, Debian, Fedora) | Developers, servers, supercomputers | Open source, free |
| **Android** | Smartphones, tablets | Linux kernel + Google's stack |
| **iOS / iPadOS** | iPhones, iPads | Closed, tightly integrated with hardware |
| **Chrome OS** | Light laptops, education | Browser-centric, fast updates |
| **Embedded OS** (e.g. FreeRTOS, VxWorks) | IoT devices, cars, satellites | Tiny footprint, deterministic |

## Multi-tasking vs Multi-user vs Multi-processing

| Term | Meaning |
|------|---------|
| **Multi-tasking** | One CPU, multiple programs sharing time (rapid switching) |
| **Multi-user** | One machine, multiple users logged in (timesharing or remote) |
| **Multi-processing** | Multiple CPUs / cores doing real parallel work |

Modern OSes support all three.

## GUI vs CLI

| Feature | GUI | CLI |
|---------|-----|-----|
| Beginners | Easy | Steep learning curve |
| Power users | Slower for repetitive tasks | Fastest with scripts |
| Resource use | Heavier | Tiny |
| Automation | Limited | Excellent (shell scripts) |

Most modern OSes offer both.

## Exam-style question

> **Q (4 marks):** Outline four functions of an operating system, and explain why an OS is essential for running multiple applications at once.

**Sample answer:**

1. **Process management** — schedules CPU time so several applications run concurrently.
2. **Memory management** — allocates and protects RAM between processes.
3. **File management** — provides directories, permissions, and a unified file API.
4. **Device management** — communicates with peripherals via drivers.

Without an OS, each application would have to talk directly to the hardware and manage its own memory; two apps wanting the same resource (e.g. the speaker) would clash. The OS arbitrates so the user can run Chrome, Word and a music player simultaneously without manual coordination.

## Key takeaways

- OS = process + memory + file + device + security + UI.
- Many flavours: Windows, macOS, Linux, Android, iOS, Chrome OS, embedded.
- Multi-tasking, multi-user, multi-processing all coexist today.

➡️ Next: [2.2 Utilities & Drivers](./utilities-drivers)
