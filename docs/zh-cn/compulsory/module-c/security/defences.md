# 4.2 · Defence Measures

> **Goal:** match each threat to a suitable defence and explain how each defence works.

## The defence playbook

| Defence | Protects against |
|---------|------------------|
| **Anti-virus software** | Malware on the device |
| **Firewall** | Unauthorised inbound/outbound traffic |
| **Software updates / patches** | Known vulnerabilities |
| **Strong passwords** | Brute force, credential stuffing |
| **Multi-factor authentication (2FA / MFA)** | Stolen passwords |
| **Browser security settings** | Phishing, drive-by downloads, third-party cookies |
| **Wireless protection (WPA2 / WPA3)** | Wi-Fi eavesdropping |
| **VPN** | Snooping on public Wi-Fi |
| **Backups** | Ransomware, hardware failure |
| **User education** | Social engineering, phishing |
| **Access & user-right control** | Insider misuse, lost laptops |
| **Encryption (at rest + in transit)** | Data leaks |

## How each defence works

### Anti-virus

Scans files and memory for known malware signatures and suspicious behaviour. Modern AV uses heuristics and cloud lookup. Limitation: zero-day malware not yet in signature databases.

### Firewall

Inspects traffic between networks and decides what to allow/block based on rules (IP, port, protocol). Hardware firewalls protect networks; software firewalls protect individual machines.

### Multi-factor authentication

Requires **something you know** (password) + **something you have** (phone, token) + optionally **something you are** (fingerprint).

### Wireless protection

| Standard | Year | Security |
|----------|------|----------|
| WEP | 1997 | Broken — do not use |
| WPA | 2003 | Better, but deprecated |
| WPA2 | 2004 | Standard for ~20 years |
| WPA3 | 2018 | Current best practice |

### Virtual Private Network (VPN)

Creates an encrypted tunnel between your device and a VPN server, so anyone in between (open Wi-Fi, ISP) sees only encrypted traffic.

### Backups (3-2-1 rule)

- **3** copies of important data,
- on **2** different media,
- with **1** off-site (e.g. cloud).

The single best defence against ransomware.

## Layered defence (defence in depth)

No single measure is enough. Real security stacks several layers:

```
   user education
        │
        ▼
   strong password + MFA
        │
        ▼
   anti-virus + updated OS
        │
        ▼
   firewall + WPA2/3 Wi-Fi
        │
        ▼
   network monitoring + backups
```

## Exam-style question

> **Q (5 marks):** A school is concerned about its computer lab network. Recommend five different security measures and explain what threats each addresses.

**Sample answer:**

1. **Anti-virus software** on every lab PC — detects and removes viruses and Trojans students may bring in via USB.
2. **Firewall** at the network gateway — blocks unauthorised inbound traffic and limits which services can reach the Internet.
3. **WPA3-secured staff Wi-Fi** + separate guest network — prevents outsiders from eavesdropping or piggybacking on the school's bandwidth.
4. **Daily backups** of student work to an off-site location — recovers from ransomware or hardware failure.
5. **Annual cybersecurity awareness training** for teachers and senior students — reduces success rate of phishing and other social-engineering attacks.

## Key takeaways

- Defences map to threats; pick the right one for each.
- Layer them — defence in depth.
- Backups are non-negotiable.

➡️ Next: [4.3 Encryption Basics](./encryption)
