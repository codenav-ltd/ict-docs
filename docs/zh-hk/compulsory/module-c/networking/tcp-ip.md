# 1.5 · TCP/IP Basics

> **Goal:** explain TCP and IP separately, why they matter, and the role of protocols in general.

## What a "protocol" is

A **communication protocol** is an agreed set of rules that two devices follow to exchange data successfully — like a language agreed in advance.

Without protocols:

- The receiver wouldn't know where one message ends and the next begins.
- Errors would go undetected.
- Lost packets would never be retransmitted.

## TCP / IP — two pieces, one suite

| Protocol | Role |
|----------|------|
| **IP** (Internet Protocol) | Provides **addressing** and **routing** — gets each packet to the right machine |
| **TCP** (Transmission Control Protocol) | Provides **reliable, ordered, error-checked delivery** between two programs (port-to-port) |

Together they are the "TCP/IP" protocol suite that the Internet runs on.

## Analogy · Postcards and tracked mail

- **IP** is like dropping postcards in a mailbox — they may arrive in any order, some may get lost.
- **TCP** is like Hong Kong Post's tracked mail service — confirms delivery, re-sends if lost, delivers in order.

## How they fit together (simplified)

```
Application data ── TCP ── chops into segments, numbers them
                              │
                              ▼
                         IP ── adds source/dest IP, sends as packets
                              │
                              ▼
                  Network hardware (NIC, switches, routers)
```

At the destination, IP delivers packets to the correct host; TCP reassembles them in order and asks for resends if needed.

## Other protocols you should recognise

| Protocol | Stands for | Use |
|----------|-----------|-----|
| **HTTP** | HyperText Transfer Protocol | Browsing (port 80) |
| **HTTPS** | HTTP Secure | Browsing with TLS encryption (port 443) |
| **FTP** | File Transfer Protocol | File transfer (port 21) |
| **SMTP** | Simple Mail Transfer Protocol | Sending email (port 25) |
| **POP3 / IMAP** | Post Office / Internet Message Access | Receiving email |
| **DNS** | Domain Name System | Name → IP resolution |
| **DHCP** | Dynamic Host Configuration Protocol | Auto-assign IP |
| **UDP** | User Datagram Protocol | Fast, no-guarantee alternative to TCP (used for video calls, DNS queries) |

## Why TCP and UDP coexist

| Aspect | TCP | UDP |
|--------|-----|-----|
| Reliability | Yes (resends lost packets) | No |
| Ordering | Yes | No |
| Speed overhead | Higher | Lower |
| Used for | Web, email, file transfer | Video / voice calls, online games, DNS |

Real-time video and gaming prefer UDP — late packets are useless anyway; better to skip and stay current.

## Exam-style question

> **Q (4 marks):** Explain the difference between TCP and IP, and why a protocol is needed for two computers to communicate.

**Sample answer:**

- **IP** handles **addressing and routing** — every packet carries source and destination IP addresses, and routers forward packets toward the destination.
- **TCP** ensures **reliable, ordered delivery** between programs by numbering segments, acknowledging receipt, and re-sending lost ones.
- A **protocol** is a set of agreed rules; without it, two computers (possibly from different vendors and OSes) would have no common understanding of how data is formatted, addressed, or acknowledged, making reliable communication impossible.

## Key takeaways

- IP = addressing & routing.
- TCP = reliable, ordered byte stream.
- UDP = fast, no-guarantee alternative.
- Protocols are agreed rules — without them, networking does not work.

## Chapter 1 wrap-up

You've finished networking fundamentals. Self-test:

- LAN vs WAN — coverage, owner, example?
- IPv4 vs IPv6 — bits, notation, reason for transition?
- Switch vs router — same LAN vs between LANs?
- TCP vs UDP — when to use each?

➡️ Next chapter: [2 · Internet Services & Applications](../services/)
