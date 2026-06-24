# Module C · Internet & its Applications

> **Suggested time:** 31 hours · **Prerequisite for Elective 2B.** Heavy on vocabulary — make flashcards.

This module covers Internet fundamentals: how networks are built, what services run on them, simple web authoring, and how to keep yourself safe online.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Networking & Internet Basics | 9 |
| b | Internet Services & Applications | 5 |
| c | Elementary Web Authoring | 3 |
| d | Threats & Security on the Internet | 14 |

---

## a. Networking & Internet Basics (9h)

### Learning outcomes

- Define and compare **LAN** and **WAN**.
- Know the formats and functions of **IPv4** and **IPv6** (technical detail not required).
- Discuss common services in a networked environment (internal communications, conferencing, resource sharing).
- Explain functions of network hardware: links, modem, NIC, switch, router, etc.
- Compare Internet-access methods on speed, cost, security, availability.
- Understand the need for **communications software** and **protocols** (simple TCP/IP).

### LAN vs WAN

| Feature | LAN | WAN |
|---------|-----|-----|
| Coverage | Single building / campus | City, country, world |
| Owner | Usually one organisation | Multiple |
| Speed | Higher (1 Gbps+) | Lower per user |
| Example | School computer lab | The Internet itself |

### IPv4 vs IPv6

| Feature | IPv4 | IPv6 |
|---------|------|------|
| Length | 32 bits | 128 bits |
| Notation | Dotted decimal: `192.168.1.10` | Colon hex: `2001:db8::1` |
| Address space | ~4.3 billion | ~3.4 × 10³⁸ |
| Reason for IPv6 | IPv4 ran out of addresses | Future-proof, simpler routing |

### Network hardware

| Device | Function |
|--------|----------|
| **NIC** (network interface card) | Connects a computer to the network |
| **Switch** | Forwards frames between devices in a LAN using MAC addresses |
| **Router** | Forwards packets between networks using IP addresses |
| **Modem** | Modulates/demodulates signals (for ADSL, cable, fibre) |
| **Wireless Access Point** | Bridges wireless clients to a wired LAN |

### Transmission media

- **UTP** (Unshielded Twisted Pair) — copper, common in offices
- **Coaxial** — older, cable TV style
- **Fibre optic** — light through glass, fastest, longest range
- **Microwave / satellite** — wireless long-distance
- **Bluetooth / Wi-Fi** — short range wireless

### Wireless concepts

- **Frequency**, **bandwidth**, **interference**, **roaming**
- Common standards: 802.11ac / ax (Wi-Fi 5 / Wi-Fi 6)

### Internet access comparison

| Method | Speed | Cost | Mobility | Notes |
|--------|-------|------|----------|-------|
| Dial-up | ~56 kbps | Cheap | None | Obsolete |
| ADSL | Up to ~24 Mbps | Low | None | Uses phone line |
| Cable | Up to ~1 Gbps | Medium | None | Uses TV cable |
| Fibre (FTTH) | 1–10 Gbps | Medium | None | Standard in Hong Kong |
| 4G LTE | ~100 Mbps | Medium | High | Mobile |
| 5G | 1–10 Gbps | High | High | Latest mobile |
| Satellite | Variable | High | High | Used in remote areas |

### TCP/IP basics

- **TCP** (Transmission Control Protocol) provides reliable, ordered, error-checked delivery using **port numbers**.
- **IP** (Internet Protocol) handles **addressing** and **routing**.
- Together they enable end-to-end communication across networks.

---

## b. Internet Services & Applications (5h)

### Learning outcomes

- Describe **how data is transmitted over the Internet** and understand URL, DNS, HTTP, HTTPS.
- Formulate effective **search strategies** and critically evaluate sources.
- Identify suitable **graphics, audio, video file formats** for web pages.
- Apply Internet services: file transfer, remote logon, online chat, discussion forum, email.
- Describe **streaming technology** and its applications.

### URL anatomy

```
https:// www.example.com :443 /path/to/page ?id=123 #section
└──┬──┘ └──────┬───────┘ └┬─┘ └────┬─────┘ └──┬──┘ └──┬───┘
 scheme    hostname     port      path     query  fragment
```

### DNS in one diagram

```
User types  www.example.com
       │
       ▼
   ┌────────────┐    ┌────────────┐
   │  Browser   │ ─▶ │ DNS server │  "Resolve www.example.com"
   └────────────┘    └────────────┘
        ▲                  │
        │ IP 93.184.216.34 │
        └──────────────────┘
        │
        ▼
   HTTPS request to 93.184.216.34
```

### HTTP vs HTTPS

| Feature | HTTP | HTTPS |
|---------|------|-------|
| Encryption | None | TLS/SSL |
| Default port | 80 | 443 |
| Privacy | Plaintext | Encrypted |
| Used today | Rarely | Almost always |

### Web file formats

| Need | Formats |
|------|---------|
| Image | jpg/jpeg, png, gif, webp, svg |
| Audio | mp3, ogg, wav |
| Video | mp4 (h.264/h.265), webm |
| Document | pdf |

### Internet services

| Service | Protocol | Use |
|---------|----------|-----|
| Web | HTTP/HTTPS | Browsing |
| Email | SMTP, POP3, IMAP | Sending/receiving mail |
| FTP | FTP/SFTP | File transfer |
| Remote logon | SSH | Server administration |
| Chat | XMPP, proprietary | Instant messaging |
| Streaming | RTMP, HLS, DASH | Voice mail, videoconferencing, webcasting |

### Real-life applications

- Internet of Things (**IoT**), cloud computing, smart city, automated home appliances, telehealth — appreciate how they improve human life.

---

## c. Elementary Web Authoring (3h)

### Learning outcomes

- Recognise the basic constructs of **HTML** (cross-platform).
- Discuss the organisation of web pages for an intended audience and **upload them** to the Web.

### Minimal HTML page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello HKDSE</title>
</head>
<body>
  <h1>Hello, world</h1>
  <p>This is my first web page.</p>
  <a href="https://www.hkeaa.edu.hk">HKEAA</a>
  <img src="logo.png" alt="logo">
</body>
</html>
```

You do **not** need to memorise every tag — but recognise the structure: `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, `<body>`, headings `<h1>–<h6>`, paragraphs `<p>`, links `<a>`, images `<img>`, lists `<ul><li>`, tables `<table>`.

### Web page organisation principles

- Ease of **navigation** — clear menus
- Appropriate placement of **links**, **tables**, **frames**, **multimedia**
- Sensible **colour combinations**, **background design**, **font size and style**
- Match the **intended audience** (kids vs corporate vs academic)

---

## d. Threats & Security on the Internet (14h)

### Learning outcomes

- Describe risks from common **network security threats**.
- Propose effective **measures** to improve network security.
- Discuss **privacy threats** and ways to maintain privacy.
- Be aware of **information encryption** technologies.
- Explain **authentication** and **authorisation**.
- Know about security used in **electronic transactions**.
- Be aware of **latest developments** in security measures.

### Threats catalogue

| Threat | What it does |
|--------|--------------|
| Virus | Self-replicates by attaching to other programs |
| Worm | Self-replicates over a network independently |
| Trojan | Disguised as legitimate software, opens back door |
| Spyware | Tracks user without consent |
| Ransomware | Encrypts data, demands payment |
| Unauthorised access | Logging in without permission |
| Interception (eavesdropping) | Capturing data in transit |
| Intrusion via dynamic web pages | SQL injection, XSS |
| DoS / DDoS | Overwhelms a service with traffic |

### Measures

| Measure | What it stops |
|---------|---------------|
| Browser security settings | Phishing, drive-by downloads |
| Anti-virus software | Malware on the device |
| Authentication (password, 2FA, biometric) | Unauthorised access |
| Access & user-right control | Insider misuse |
| Firewall | Unwanted incoming/outgoing traffic |
| WPA / WPA2 / WPA3 | Wireless eavesdropping |
| VPN | Encrypts data between user and network |
| Regular OS / software updates | Known exploits |

### Privacy threats

- Eavesdropping, hacking, phishing, spamming, junk mail
- Profiling by ad networks, cookies, tracking pixels

### Encryption basics

| Concept | Notes |
|---------|-------|
| Symmetric encryption | One shared key (e.g. AES) |
| Asymmetric encryption | Public/private key pair (e.g. RSA) |
| Hong Kong PKI | Public Key Infrastructure run by Hongkong Post |
| Larger key | More secure but slower |

### Authentication & authorisation

- **Authentication** answers "*Who are you?*" — passwords, tokens, biometrics, digital certificates.
- **Authorisation** answers "*What may you do?*" — access control lists, roles.
- Digital certificate flow: signer attaches a digital signature; verifier obtains the signer's digital certificate, checks the signature.

### Online transaction security

- **SSL/TLS** — encrypts the HTTP session into HTTPS.
- **Smart cards, security tokens** — hardware-based authentication.
- **Mobile SMS one-time passwords** — common in HK banks.

---

## Common mistakes

- Calling **the Internet** a LAN. The Internet is a global WAN of WANs.
- Confusing **switch** (LAN-only) and **router** (between networks).
- Believing HTTPS is "fully secure" — it secures transmission, not the server itself.
- Saying "viruses cause DoS attacks" — DoS uses many machines, not necessarily viruses.

## Past-paper hotspots

- MC: pick the most appropriate Internet access method for a scenario.
- MC: identify which is encryption / authentication / authorisation.
- Section B: describe how DNS resolves a name, or how an HTTPS request flows.

---

➡️ Next: [Module D · Computational Thinking & Programming](./module-d-programming)
