# 4.3 · Encryption Basics

> **Goal:** explain symmetric vs asymmetric encryption, the role of key size, and the Hong Kong PKI.

## What encryption does

**Encryption** transforms readable data (**plaintext**) into unreadable data (**ciphertext**) using a **key**. Only someone with the right key can **decrypt** it back.

```
Plaintext  ── [Encrypt with key] ──▶  Ciphertext
Ciphertext ── [Decrypt with key] ──▶  Plaintext
```

## Symmetric encryption

**One key** does both encryption and decryption. Sender and receiver must share the same key in advance.

| Property | Detail |
|----------|--------|
| Speed | Very fast |
| Examples | AES, DES (legacy), 3DES |
| Problem | How do you securely share the key? |

## Asymmetric (public-key) encryption

Two mathematically linked keys:

- **Public key** — share with everyone.
- **Private key** — kept secret.

```
Encrypt with public key  ── Only the matching private key can decrypt.
Sign with private key    ── Anyone can verify with the public key.
```

| Property | Detail |
|----------|--------|
| Speed | Slow (much slower than symmetric) |
| Examples | RSA, ECC |
| Solves | Key distribution problem |

## Hybrid approach (used by HTTPS)

1. Browser and server use **asymmetric** encryption to safely exchange a **symmetric session key**.
2. Then they switch to **symmetric** encryption for the actual data — fast.

Best of both worlds: secure key exchange + speedy bulk encryption.

## Key size matters

| Key size | Symmetric example | Asymmetric example | Strength |
|----------|-------------------|--------------------|----------|
| 56-bit | DES | — | Broken |
| 128-bit | AES-128 | — | Strong |
| 256-bit | AES-256 | — | Very strong |
| 2048-bit | — | RSA-2048 | Strong (today) |
| 3072+ bit | — | RSA-3072+ | Future-proof |

Larger key → harder to brute-force → also slower to compute. Trade-off.

## Hong Kong PKI

Hong Kong's **Public Key Infrastructure** (PKI) is run by Hongkong Post via the e-Cert service:

- Issues **digital certificates** to individuals and organisations.
- Used for **digital signatures** on legal documents.
- Recognised under the Electronic Transactions Ordinance.

## Digital signatures

A digital signature uses the **sender's private key** to sign a message hash. The receiver uses the sender's **public key** to verify.

What it proves:

- **Authenticity** — the message came from the holder of the private key.
- **Integrity** — the message wasn't altered.
- **Non-repudiation** — the sender cannot later deny signing.

## Exam-style question

> **Q (5 marks):** Compare symmetric and asymmetric encryption in terms of keys, speed and key-distribution problem. Explain how HTTPS uses both.

**Sample answer:**

- **Keys**: symmetric encryption uses **one shared key** for both encryption and decryption; asymmetric uses a **pair** — a public key (shared widely) and a private key (kept secret).
- **Speed**: symmetric algorithms (AES) are computationally fast; asymmetric (RSA) are much slower.
- **Key distribution**: symmetric requires a secure channel to share the key beforehand; asymmetric solves this by allowing the public key to be sent openly.
- **HTTPS** combines both: the browser uses the server's **public key** (from its certificate) to securely send a freshly generated **symmetric session key**; subsequent traffic is encrypted symmetrically for performance, while only that one key exchange uses the slow asymmetric algorithm.

## Key takeaways

- Symmetric = one key, fast.
- Asymmetric = two keys, slow, solves key distribution.
- Larger key = stronger encryption.
- HTTPS uses both in a hybrid scheme.

➡️ Next: [4.4 Authentication & E-commerce](./authentication)
