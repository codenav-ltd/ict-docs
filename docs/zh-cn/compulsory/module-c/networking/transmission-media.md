# 1.4 · Transmission Media

> **Goal:** compare wired and wireless media on speed, distance, cost and use case.

## Wired media

| Medium | Speed (typical) | Max distance per segment | Use |
|--------|-----------------|---------------------------|-----|
| **UTP (Cat6)** | 1–10 Gbps | 100 m | Office LANs |
| **Coaxial** | 100–500 Mbps | 500 m | Cable TV / Internet |
| **Fibre optic** | 1 Gbps – 100 Gbps+ | km – tens of km | Long-haul, fast LAN backbones, FTTH |

### Why fibre wins for distance

Fibre carries light, not electrons. It is **immune to electromagnetic interference**, supports much greater distances without repeaters, and has enormous bandwidth.

## Wireless media

| Medium | Range | Speed | Notes |
|--------|-------|-------|-------|
| **Bluetooth** | 1–100 m | 1–3 Mbps | Peripherals, IoT |
| **Wi-Fi** | 30–100 m | 100 Mbps – 9 Gbps | LAN wireless |
| **Microwave** | km – hundreds of km | up to 1 Gbps | Backbones, long links |
| **Satellite** | global | 1 Mbps – 1 Gbps | Remote areas, nautical |
| **Cellular (4G/5G)** | km from cell | 100 Mbps – 10 Gbps | Mobile devices |
| **Infrared (IR)** | a few metres line-of-sight | low | Remote controls, legacy IrDA |

## Wired vs wireless trade-offs

| Aspect | Wired | Wireless |
|--------|-------|----------|
| Speed | Higher and steadier | Lower and variable |
| Latency | Lower | Higher |
| Security | More physical control | Easier to eavesdrop |
| Installation | Cables to lay | Minimal cabling |
| Mobility | None | Excellent |
| Cost (initial) | Higher (cabling) | Lower |
| Cost (long term) | Lower | Replaces every few years |

## Exam-style question

> **Q (4 marks):** A school's new building must support both fixed classrooms and bring-your-own-device (BYOD) learning. Recommend a transmission media plan with justification.

**Sample answer:**

- **Fibre optic** for the building backbone — high bandwidth, long range, low interference, future-proof.
- **UTP Cat6** drops to each classroom — supports 1 Gbps to teacher PCs, projectors, IP phones.
- **Wi-Fi 6 (802.11ax)** access points in every classroom — supports many simultaneous student devices for BYOD lessons, with seamless roaming as students move between classes.

The fibre backbone aggregates traffic from many Wi-Fi APs and wired classrooms back to the school's central switch and Internet router.

## Key takeaways

- Three wired families: UTP, coax, fibre.
- Wireless: Bluetooth, Wi-Fi, microwave, satellite, cellular.
- Fibre = highest speed + longest range.

➡️ Next: [1.5 TCP/IP Basics](./tcp-ip)
