# 4.4 · Authentication, Authorisation & E-commerce Security

> **Goal:** distinguish authentication from authorisation, describe common methods, and outline the security used in online transactions.

## Authentication vs Authorisation

| Concept | Answers | Example |
|---------|---------|---------|
| **Authentication** | "Who are you?" | Logging in with username + password |
| **Authorisation** | "What may you do?" | Once logged in, can you delete files? |

A teacher's login authenticates them. Their role (`teacher`) then authorises them to view all students' marks, but not to delete other teachers' accounts.

## Authentication methods

| Factor | Examples |
|--------|----------|
| **Something you know** | Password, PIN, security question |
| **Something you have** | Phone for SMS code, hardware token, smart card |
| **Something you are** | Fingerprint, face, iris |
| **Somewhere you are** | Geo-fence (your phone must be near your office) |
| **Something you do** | Typing rhythm, mouse pattern |

**Multi-factor authentication (MFA)** combines two or more factors for stronger security.

## Authorisation methods

| Method | How it works |
|--------|--------------|
| **Access Control List (ACL)** | List of who can do what to a resource |
| **Role-based access control (RBAC)** | Roles (admin, teacher, student) granted permissions |
| **Attribute-based access control (ABAC)** | Rules based on attributes (department, time of day) |

## Digital certificates — proving identity online

When you visit `https://www.hsbc.com.hk`, the bank's server presents a **digital certificate** signed by a trusted **Certificate Authority (CA)**. Your browser:

1. Confirms the CA is in its trusted list.
2. Verifies the certificate's signature.
3. Checks the certificate hasn't expired or been revoked.

If all checks pass, you see the green padlock — and you can trust you're really talking to HSBC.

## E-commerce security stack

| Layer | What it provides |
|-------|------------------|
| **SSL/TLS (HTTPS)** | Encrypts the data in transit |
| **Digital certificate** | Proves server identity |
| **Strong authentication** | Confirms the customer's identity (password + 2FA) |
| **Tokenisation** | Replaces credit-card numbers with non-sensitive tokens |
| **3-D Secure** | Extra verification step for card payments (Visa Secure, Mastercard ID Check) |
| **Mobile SMS one-time passwords** | Secondary check used widely in HK banks |
| **Fraud-detection AI** | Flags unusual transactions |

## Hong Kong online-banking flow

1. Customer enters username + password (something they know).
2. Bank sends SMS OTP to registered phone (something they have).
3. Customer enters OTP — successfully authenticated.
4. HTTPS secures all subsequent traffic.
5. Each large transfer triggers another SMS confirmation.

## Smart cards, tokens, biometrics

| Token type | Used by |
|------------|---------|
| HKID smart card | Identity verification at government counters |
| Octopus card | Stored-value payment |
| RSA SecurID token | Corporate VPN access |
| Apple Pay / Google Pay tokens | NFC payments |
| FIDO2 / passkeys | Modern passwordless login |

## New trends

- **Passkeys** — replace passwords with public-key cryptography on devices.
- **Behavioural biometrics** — typing patterns, gait analysis.
- **Zero-trust architecture** — never trust, always verify.

## Exam-style question

> **Q (5 marks):** Distinguish authentication from authorisation. Describe two-factor authentication and explain how digital certificates underpin secure online shopping.

**Sample answer:**

- **Authentication** verifies *who* the user is (e.g. correct password); **authorisation** decides *what* the authenticated user is allowed to do (e.g. can view but not delete).
- **Two-factor authentication (2FA)** requires two independent factors — typically something you know (password) plus something you have (SMS code or hardware token). Even if the password is stolen, the attacker still cannot log in without the second factor.
- **Digital certificates** in HTTPS prove the online shop's identity. The browser checks that the certificate is issued by a trusted Certificate Authority, is unexpired, and matches the domain, ensuring the customer is communicating with the real shop, not a phishing impostor. Encrypted HTTPS transport then keeps credit-card data safe from interception during the transaction.

## Key takeaways

- Authentication = who; Authorisation = what.
- MFA combines factors for stronger security.
- HTTPS + digital certificates + tokenisation = the modern e-commerce trust stack.

## Module C wrap-up

You're done with the Internet module. Self-test:

- Can you compare LAN/WAN, IPv4/IPv6, switch/router in seconds?
- Can you outline what happens when you type a URL into a browser?
- Can you name three threats and three defences?
- Can you explain how HTTPS uses both symmetric and asymmetric encryption?

➡️ Next module: [Module D · Computational Thinking & Programming](../../module-d/)
