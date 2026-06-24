# 4.1 · Threat Catalogue

> **Goal:** name common Internet threats, describe how each works, and recognise them in scenarios.

## Malicious software (malware) family

| Threat | What it does | Spread |
|--------|--------------|--------|
| **Virus** | Attaches to a host program and replicates when the program runs | Email attachments, infected files |
| **Worm** | Self-replicates over the network without needing a host program | Network vulnerabilities, mass-mail |
| **Trojan horse** | Disguised as legitimate software; opens a backdoor | "Free" downloads, pirated games |
| **Spyware** | Secretly monitors and reports user activity | Bundled with freeware, sketchy ads |
| **Ransomware** | Encrypts files, demands payment | Phishing emails, exploit kits |
| **Adware** | Forces unwanted ads | Bundled with free apps |
| **Rootkit** | Hides itself deep in the OS | Often delivered via Trojan |
| **Botnet** | Network of compromised machines used for attacks | Worm or Trojan-installed bots |

## Network-level attacks

| Attack | Description |
|--------|-------------|
| **Unauthorised access** | Logging in without permission |
| **Eavesdropping / interception** | Reading data in transit |
| **DoS / DDoS** | Overwhelms a service with traffic so legitimate users cannot reach it |
| **SQL injection** | Exploits input fields to run unintended SQL on the server |
| **Cross-site scripting (XSS)** | Injects JavaScript into a web page to steal cookies |
| **Man-in-the-middle (MITM)** | Attacker silently relays / alters communication between two parties |

## Social-engineering attacks

| Attack | How it works |
|--------|--------------|
| **Phishing** | Fake email / SMS / website asks for credentials |
| **Spear phishing** | Targeted phishing aimed at one person/organisation |
| **Pretexting** | Pretending to be IT support to extract passwords |
| **Baiting** | Leaving a USB stick in a parking lot hoping someone plugs it in |
| **Tailgating** | Following an authorised person into a restricted area |

## Privacy threats

- Browser cookies / tracking pixels.
- Mobile apps over-collecting permissions.
- Public-Wi-Fi sniffing.
- Aggregation: name + DOB + class → identifies an individual.

## Worked example · A typical ransomware attack

1. Attacker sends a phishing email pretending to be the HR department with a "salary review" PDF.
2. Victim opens the file; embedded macro downloads malware.
3. Malware encrypts every file it can reach on the user's computer and shared drives.
4. A ransom note appears demanding payment in Bitcoin.
5. Even if paid, files may not be restored.

## Why HK schools should care

- WiFi networks easy to eavesdrop without WPA.
- Student data on shared servers.
- Outdated lab software with known vulnerabilities.
- Many users with weak passwords.

## Exam-style question

> **Q (5 marks):** Describe four common security threats to a school network. For each, give one realistic example.

**Sample answer:**

1. **Virus** — a student plugs in a USB stick infected with a virus; the virus attaches itself to a Word document, which then infects other PCs in the lab when shared.
2. **Phishing** — a teacher receives an email pretending to be from the school IT department asking to "verify" their password; clicking the link sends their credentials to an attacker.
3. **DoS attack** — a disgruntled student floods the school's online portal with traffic, preventing classmates from submitting assignments before deadlines.
4. **Ransomware** — opening a malicious attachment encrypts shared lesson files and demands payment to unlock them.

## Key takeaways

- Categories: malware, network attacks, social engineering, privacy.
- Know the **definitions** and one **example each**.

➡️ Next: [4.2 Defence Measures](./defences)
