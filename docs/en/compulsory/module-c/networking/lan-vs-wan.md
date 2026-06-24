# 1.1 · LAN vs WAN

> **Goal:** distinguish LAN and WAN by coverage, ownership, speed and example.

## Definitions

| Type | Stands for | Coverage |
|------|-----------|----------|
| **LAN** | Local Area Network | A single site (room, building, campus) |
| **WAN** | Wide Area Network | Multi-site / city / country / global |

## Side-by-side comparison

| Feature | LAN | WAN |
|---------|-----|-----|
| **Coverage** | < ~1 km | unlimited |
| **Owner** | Usually one organisation | Multiple parties; the Internet is a WAN of WANs |
| **Speed (typical)** | 1 Gbps – 10 Gbps | 10 Mbps – 1 Gbps per user, slower per hop |
| **Cost** | Low (Ethernet cables, switches) | High (leased lines, fibre between cities) |
| **Latency** | Sub-millisecond | Tens to hundreds of milliseconds |
| **Examples** | Office LAN, school computer lab | The Internet, a bank's branch network |

## Special networks worth knowing

| Term | Coverage | Example |
|------|----------|---------|
| **PAN** Personal Area Network | A few metres around one person | Phone + Bluetooth headset + smartwatch |
| **MAN** Metropolitan Area Network | A city | Hong Kong public Wi-Fi (Y5ZONE legacy) |
| **VLAN** Virtual LAN | Logical subdivision of a physical LAN | School splits staff and student networks on the same switches |
| **VPN** Virtual Private Network | Secure tunnel over the Internet | Working from home and reaching the office LAN |

## Common services in a networked environment

The C&A Guide explicitly mentions:

- **Internal communications** (email, chat, video calls)
- **Conferencing** (Zoom, Teams)
- **Resource sharing** (files, printers, Internet bandwidth)

## Worked example · A typical Hong Kong office

```
                Internet (WAN)
                     │
              ┌──── Router ────┐
              │                │
   Office A (HK Central LAN)   Office B (Kowloon Bay LAN)
   ├─ Switch                   ├─ Switch
   ├─ PCs, printers            ├─ PCs, printers
   └─ Wi-Fi AP                 └─ Wi-Fi AP
```

Each office is a LAN. Connecting them across the city makes a WAN.

## Common student mistakes

- Calling **the Internet** a LAN — it is the world's largest WAN.
- Listing Wi-Fi as a separate type — Wi-Fi is just the **wireless layer** of a LAN.
- Mixing **LAN** with **Ethernet** — Ethernet is a LAN technology; not all LANs use Ethernet.

## Exam-style question

> **Q (4 marks):** Compare LAN and WAN in terms of coverage, ownership, and typical transmission speed. Give one example of each.

**Sample answer:**

- **LAN**: covers a small area (typically up to a building); owned and managed by a single organisation; high speeds (1–10 Gbps). Example: a school's computer lab connected via Ethernet and Wi-Fi.
- **WAN**: covers a large geographical area (cities, countries, continents); typically involves multiple organisations or ISPs; per-user speeds usually lower (10 Mbps – 1 Gbps) due to long-distance links. Example: the Internet.

## Key takeaways

- LAN = local, fast, cheap, single-org.
- WAN = global, slower-per-user, multi-org.

➡️ Next: [1.2 IPv4 & IPv6](./ip-addressing)
