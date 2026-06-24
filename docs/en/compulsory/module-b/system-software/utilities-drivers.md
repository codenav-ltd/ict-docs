# 2.2 · Utilities & Drivers

> **Goal:** explain the role of utility programs and device drivers, and give common examples.

## Utility programs

A **utility** is system software that performs a specific maintenance task on the computer. Examples on the syllabus:

| Utility | Function | Example software |
|---------|---------|------------------|
| **Data compressor** | Reduce file size for transfer / storage | 7-Zip, WinRAR, native zip in Windows/macOS |
| **Virus checker (anti-virus)** | Detect and remove malware | Windows Defender, Bitdefender, Kaspersky |
| **File manager** | Browse, copy, move, rename | Windows Explorer, macOS Finder |
| **Defragmentation software** | Reorganise disk blocks to speed HDD access | Windows Optimize Drives (defrag for HDDs only) |
| **System monitor** | Show CPU/RAM/disk usage | Task Manager, Activity Monitor |
| **Backup tool** | Schedule and store backups | Time Machine, File History |
| **Disk cleanup** | Delete temp files, caches | Windows Disk Cleanup, CCleaner |

::: tip Defrag and SSDs
**Do not defragment an SSD.** SSDs have no spinning platters; defragmenting wears out the flash cells without performance benefit. Modern OSes detect SSDs and run TRIM instead.
:::

## Device drivers

A **driver** is a small program that lets the OS talk to a **specific** piece of hardware.

| Without driver | With driver |
|----------------|-------------|
| OS sees a generic USB device | OS knows it's a printer, can send PCL/PostScript commands |
| Photo button on camera does nothing | Captures a JPG and saves to disk |
| Bluetooth keyboard doesn't pair | OS recognises HID protocol and pairs |

### How drivers work

```
Application  ──▶ OS API  ──▶ Device driver  ──▶ Hardware
```

If the driver is missing or buggy, the OS can't translate generic commands into the hardware's specific protocol.

### Driver sources

- **Bundled with the OS** (Windows Update, kernel modules in Linux).
- **Downloaded from manufacturer** (Nvidia, AMD, printer vendors).
- **Generic / built-in** (HID for keyboards, USB Mass Storage for thumb drives).

## Why utilities and drivers fall under system software

Both keep the computer healthy and bridge between OS and hardware. They are not the end-user product (no spreadsheet, no game), so they sit firmly in **system software** territory.

## Common student mistakes

- Listing a **web browser** as a utility — browsers are application software.
- Confusing **anti-virus** with **firewall**: anti-virus scans files; firewall filters network traffic. (Both exist, sometimes bundled.)
- Believing drivers are needed "only for old hardware" — every keyboard, GPU, Wi-Fi card needs a driver.
- Defragmenting SSDs.

## Exam-style question

> **Q (4 marks):** Define utility program and device driver, giving one example of each. Explain why both are classified as system software.

**Sample answer:**

A **utility program** is software that performs a specific maintenance or housekeeping task on the computer (example: anti-virus scanning files for malware). A **device driver** is software that allows the operating system to communicate with a specific hardware device (example: the printer driver translates OS print commands into instructions the printer understands).

Both are **system software** because they support the OS and hardware rather than directly solving an end-user problem — they make the computer usable so that application software can run.

## Key takeaways

- Utility = a tool that helps run / maintain the computer.
- Driver = software bridge from OS to specific hardware.
- Both are system software, not applications.

➡️ Next: [2.3 Modes of Operation](./operation-modes)
