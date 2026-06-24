# 1.4 · Storage Devices

> **Goal:** compare the major secondary storage devices on access mode, volatility, transfer rate, capacity, and pick the right one for a scenario.

## What "secondary storage" means

Anything that **persists** when the power goes off and is **not** the running RAM. Used for the OS, applications, documents, photos and backups.

## The five categories you must know

| Device | Access | Volatile? | Typical transfer rate | Typical capacity | Notes |
|--------|--------|-----------|------------------------|-------------------|-------|
| **Magnetic Hard Disk (HDD)** | Random | No | 100–200 MB/s | up to ~20 TB | Cheap per GB; moving parts → fragile |
| **Optical Disk** (CD, DVD, Blu-ray) | Random | No | ~50 MB/s | up to 100 GB (BD) | Distribution media; archival |
| **Flash memory** (USB, SSD, SD card) | Random | No | SATA SSD 500 MB/s, NVMe SSD up to 7 GB/s | up to ~8 TB | No moving parts; quiet, durable |
| **Magnetic Tape** | Sequential | No | 200–400 MB/s | up to ~20 TB+ per cartridge | Backup; cheap per GB; slow seek |
| **Network / Cloud storage** | Random over network | No | Depends on network | Virtually unlimited | OneDrive, iCloud, Dropbox |

## Comparison axes you must master

### Access mode

- **Random / direct** → HDD, SSD, optical, USB, NAS — jump to any record.
- **Sequential** → tape — read in order from the start.

### Volatility

- All listed devices are **non-volatile**. (Volatile = RAM, cache, registers.)

### Capacity vs cost

- Per-GB cost order (cheap → expensive):
  - Tape < HDD < SSD < High-end NVMe SSD < RAM
- Trend: every five years SSDs drop in price; HDDs hold their cost edge for cold storage.

### Speed

- NVMe SSD > SATA SSD > HDD > Optical > Tape.

### Mobility

- USB > SD card > External SSD > Optical disk > External HDD > Tape > Cloud (instant from anywhere with Internet).

## Trends to mention in essays

1. **Sizes shrink, capacities grow.** A modern 1 TB microSD card is smaller than a thumbnail.
2. **SSDs increasingly replace HDDs** in laptops and even data centres for hot data.
3. **Cloud storage** has democratised off-site backup.
4. **Tape is far from dead** — enterprises and hyperscale clouds still use LTO tapes for cold storage because of unmatched per-GB cost.

## Worked example · Designing storage for a school

| Need | Best choice | Reason |
|------|-------------|--------|
| OS + programs on classroom PCs | SATA / NVMe SSD | Fast boot, snappy apps |
| Shared student files | Network attached storage (NAS) with HDDs | Cheap per GB, accessible from any PC |
| Daily backup off-site | Cloud (Microsoft 365 / Google Workspace) | Versioning, disaster recovery |
| Long-term archive of CCTV footage | External HDDs or tape | Cheapest per GB |
| Sharing a class video at school assembly | USB flash drive | Portable, plug-and-play |

## Common student mistakes

- Calling SSDs "Solid State HDD" — they are not HDDs, no spinning platters.
- Treating cloud storage as a **type of device** — it is a **service** running on someone else's storage.
- Forgetting that **optical disks** (CD/DVD) are still required for some legacy systems.
- Calling tape "obsolete" — it is alive and well in enterprise backup.

## Exam-style question

> **Q (4 marks):** Compare an SSD with a magnetic HDD in terms of speed, durability and cost per GB. Suggest one situation where an HDD remains preferable.

**Sample answer:**

- **Speed**: SSDs use flash memory with no moving parts, achieving transfer rates of 500 MB/s (SATA) to 7 GB/s (NVMe). HDDs rely on rotating platters and reach ~100–200 MB/s, with seek delays.
- **Durability**: SSDs have no moving parts, so they tolerate vibration and drops; HDDs can fail if dropped while spinning.
- **Cost per GB**: HDDs remain considerably cheaper per GB than SSDs.

**When HDDs win**: archival storage of large quantities of cold data (e.g. CCTV footage, backup vaults) where capacity per dollar matters more than speed.

## Key takeaways

- Five families: HDD, optical, flash (SSD/USB), tape, cloud.
- Compare on **access mode, volatility, transfer rate, capacity, cost, mobility**.
- Choose based on workload, not fashion.

➡️ Next: [1.5 Input/Output Devices](./io-devices)
