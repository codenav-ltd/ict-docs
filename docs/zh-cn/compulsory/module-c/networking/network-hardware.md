# 1.3 · Network Hardware

> **Goal:** name the major network devices and the role each plays.

## The devices you must know

| Device | Role |
|--------|------|
| **Network Interface Card (NIC)** | Lets a computer connect to a network (Ethernet, Wi-Fi) |
| **Switch** | Forwards frames between devices on the **same LAN** using MAC addresses |
| **Router** | Forwards packets between **different networks** using IP addresses |
| **Modem** | Modulates / demodulates signals for ADSL, cable, fibre |
| **Wireless Access Point (WAP)** | Bridges wireless clients to a wired LAN |
| **Hub** (legacy) | Broadcasts to all ports — replaced by switches in modern LANs |
| **Repeater / extender** | Boosts a weak signal to extend range |
| **Bridge** | Connects two LAN segments |
| **Gateway** | Translates between two different protocols |

## Switch vs router — the most common confusion

```
LAN (192.168.1.x)
┌─────────────┐
│             │
│  PC ─┐      │
│  PC ─┤      │  (Switch)
│  PC ─┤ ─────┤
│  PC ─┘      │
│             │
└──────┬──────┘
       │ (Router) routes to other networks
       ▼
   Internet
```

- **Switch** stays inside one LAN; uses **MAC addresses**.
- **Router** connects LANs together; uses **IP addresses**.

A home router usually contains: a router function, a switch, a Wi-Fi AP, a modem and a DHCP server — all in one box.

## Wireless networks

Common standards on the C&A Guide:

| Standard | Frequency | Speed |
|----------|-----------|-------|
| 802.11n (Wi-Fi 4) | 2.4 / 5 GHz | up to 600 Mbps |
| 802.11ac (Wi-Fi 5) | 5 GHz | up to ~3.5 Gbps |
| 802.11ax (Wi-Fi 6 / 6E) | 2.4 / 5 / 6 GHz | up to ~9.6 Gbps |

Key wireless concepts:

- **Frequency** — higher frequency = more bandwidth but shorter range.
- **Bandwidth** — channel width determines maximum throughput.
- **Interference** — microwaves, other Wi-Fi networks, Bluetooth can disrupt 2.4 GHz.
- **Roaming** — moving between APs while keeping the same SSID.

## Internet access methods (C&A Guide)

| Method | Typical speed (HK) | Cost | Notes |
|--------|---------------------|------|-------|
| **Dial-up** | 56 kbps | Cheap | Obsolete |
| **ADSL** | up to 24 Mbps | Low | Uses phone line |
| **Cable** | up to 1 Gbps | Medium | Uses TV cable |
| **Fibre (FTTH)** | 1–10 Gbps | Medium | Standard in HK new buildings |
| **4G LTE** | ~100 Mbps | Medium | Mobile |
| **5G** | 1–10 Gbps | Higher | Latest mobile, low latency |
| **Satellite** | variable | High | Used in remote / nautical |

## Exam-style question

> **Q (5 marks):** A small office plans to connect 25 PCs, a network printer, and provide Wi-Fi for visitors. Recommend the network hardware required and the role of each component.

**Sample answer:**

- **NIC** in each PC and the printer to connect to the LAN.
- **Switch** with at least 28 ports to interconnect all wired devices.
- **Wireless Access Point** for visitor Wi-Fi (separate VLAN or guest network).
- **Router** to connect the office LAN to the Internet via the ISP, performing NAT and basic firewalling.
- **Modem** matching the ISP service (cable or fibre), unless integrated into the router.

This combination allows wired devices to communicate via the switch, wireless visitors via the AP, and all devices to share Internet access through the router.

## Key takeaways

- Know **NIC, switch, router, modem, WAP** at minimum.
- Switch = same LAN; Router = between LANs.
- Modern Wi-Fi standards: Wi-Fi 5 / 6.

➡️ Next: [1.4 Transmission Media](./transmission-media)
