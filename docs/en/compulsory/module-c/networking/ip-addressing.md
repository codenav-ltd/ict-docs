# 1.2 · IPv4 & IPv6 Addressing

> **Goal:** explain the format and reason-for-being of both addressing schemes.

## What an IP address does

Every device on a network needs a unique **address** so that data can find its way. The Internet Protocol (IP) defines this address.

## IPv4

| Property | Value |
|----------|-------|
| Length | 32 bits |
| Notation | Dotted decimal: **192.168.1.10** |
| Address space | 2³² ≈ 4.3 billion |
| Year | 1981 |

Example breakdown:

```
192.168.1.10
└┬┘ └┬┘ │ └┬┘
 │   │  │  └─ host part
 │   │  └──── 
 │   └─────── 
 └─────────── network parts
```

### Special IPv4 ranges (good to know)

| Range | Purpose |
|-------|---------|
| `127.0.0.1` | Loopback (this machine) |
| `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x` | Private (home / office LANs) |
| `255.255.255.255` | Broadcast |

## IPv6

| Property | Value |
|----------|-------|
| Length | 128 bits |
| Notation | Colon hexadecimal: **2001:db8:85a3::8a2e:370:7334** |
| Address space | 2¹²⁸ ≈ 3.4 × 10³⁸ |
| Year | 1998 (deployment ongoing) |

A simplified mental model: "Every grain of sand on Earth could have its own IPv6 address several times over."

### Why we need IPv6

- IPv4 ran out of unique addresses globally (officially announced exhausted in 2011 by IANA).
- IoT (billions of devices) demands far more addresses than IPv4 can provide.
- IPv6 has simpler routing, built-in security extensions, no need for NAT.

## How devices get an address

- **DHCP** (Dynamic Host Configuration Protocol) — most home routers hand out IP addresses automatically.
- **Static IP** — manually assigned (typically for servers and printers).
- **APIPA / Link-local** — automatic fallback if DHCP fails.

## Public vs Private addresses

- **Public IPs** are unique on the global Internet.
- **Private IPs** are reused inside LANs; **NAT** (Network Address Translation) on the router translates between them.

::: tip Technical details not required by C&A
The syllabus says *"technical details are not required"*. Focus on **purpose, format and reason for transition**.
:::

## Exam-style question

> **Q (4 marks):** State two differences between IPv4 and IPv6, and give one reason IPv6 is being introduced.

**Sample answer:**

- **Length**: IPv4 is 32 bits, IPv6 is 128 bits.
- **Notation**: IPv4 uses dotted decimal (`192.168.1.1`); IPv6 uses colon hexadecimal (`2001:db8::1`).
- **Reason for IPv6**: IPv4 only supports ~4.3 billion unique addresses, which were exhausted as the number of Internet-connected devices grew (smartphones, IoT). IPv6 provides 2¹²⁸ addresses, enough for the foreseeable future.

## Key takeaways

- IPv4 = 32 bits, dotted decimal, exhausted.
- IPv6 = 128 bits, hex, plenty of room.

➡️ Next: [1.3 Network Hardware](./network-hardware)
