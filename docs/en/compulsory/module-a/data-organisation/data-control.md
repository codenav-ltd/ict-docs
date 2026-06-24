# 2.3 · Data Control — Validation, Verification & Parity

> **Goal:** distinguish validation from verification, list common techniques for each, and explain parity-check error detection.

## Why we need data control

Garbage in → garbage out. If a user types `Bn` instead of `Bob`, the system might:

- send the wrong email,
- charge the wrong account,
- print the wrong name on a graduation certificate.

**Data control** is the umbrella term for techniques that **prevent**, **detect** or **correct** errors as data enters or moves through a system.

## The three families of technique

| Family | Performed by | When |
|--------|--------------|------|
| **Validation** | Software (automatic) | At the point of data entry |
| **Verification** | Human (manual) | At the point of data entry |
| **Parity check** | Hardware / software | During transmission or storage |

::: tip Memory hook
- **V**alidation = **V**alidated by code (the **V**erbose computer)
- **V**erification = **V**erified by a **V**iewer (a human)
- Parity = the post-it on the data saying "I have an odd / even number of 1s"
:::

## Validation in detail

A **validation rule** is a check performed by the software against pre-defined criteria. If the input fails, the user is asked to re-enter.

### Common validation types

| Type | What it checks | Example |
|------|----------------|---------|
| **Range check** | Value is within an acceptable range | Age between 0 and 150 |
| **Presence check** | Field is not empty | Name field is required |
| **Format / picture check** | Matches a pattern | `HK_ID = X123456(7)` |
| **Length check** | Number of characters within bounds | Password length ≥ 8 |
| **Type / data type check** | Numeric vs text vs date | Phone number is digits only |
| **Check digit** | Final digit calculated from the others | HKID check letter, ISBN, credit card (Luhn) |
| **Lookup check** | Value exists in a reference list | Country code is in ISO 3166 |
| **Consistency check** | Two fields agree | Departure date ≤ return date |

### Worked example · Check digit (HKID)

The HKID check letter is calculated from the digits using a weighted sum modulo 11. The software performs the same calculation on the data you typed; if the result differs from the letter, your input is rejected — even a single typo is caught.

### Validation does not guarantee accuracy

A validation rule confirms the input is **plausible**, not **correct**. "Alice's age = 17" passes a range check even if Alice is really 16.

## Verification in detail

**Verification** is the *human* check that data has been transferred correctly.

### Common verification techniques

| Technique | How it works |
|-----------|--------------|
| **Visual check** | The user re-reads what they typed against the source document |
| **Double entry** | The same data is typed twice (often by two different operators); the system compares |
| **Read-back** | A call-centre agent reads the data back to the caller |
| **Print and proofread** | Common in publishing |

### Worked example · Password confirmation

Almost every signup form asks you to type your password **twice**. This is double entry — a verification step, not validation. The software cannot know whether your typed password matches *what you intended*; the second entry is your manual check.

## Validation vs verification side-by-side

| Aspect | Validation | Verification |
|--------|-----------|--------------|
| Done by | Software | Human |
| Detects | Implausible values | Transcription / typing mistakes |
| Example | `age <= 150` rule | Re-typing the password |
| Guarantees correctness? | No | No, but greatly reduces typing errors |
| Performed when | Real-time at entry | At entry or after |

## Parity checking

**Parity** is a hardware-level error-detection technique used during **transmission** or **storage**.

### How even parity works

When sending an **n-bit data byte**, the sender appends a **parity bit** so that the total number of `1`s (data + parity) is **even**.

Example (even parity, 7 data bits + 1 parity bit):

| Data bits | Number of 1s | Parity bit | Sent byte |
|-----------|--------------|------------|-----------|
| `1010101` | 4 (even) | `0` | `10101010` |
| `1010100` | 3 (odd) | `1` | `10101001` |

The receiver counts the 1s in the received byte. If the count is **odd** (under even parity), the byte was corrupted in transit.

### Odd parity

Odd parity works the same way but the total number of `1`s should be **odd**. Either convention works as long as sender and receiver agree.

### Limitations

- Detects **single-bit errors** only. Two flipped bits cancel out.
- Cannot **correct** errors, only detect them.
- More advanced schemes (Hamming code, CRC) detect and correct multi-bit errors but are beyond the syllabus.

### Where parity appears

- Older modems and serial cables.
- RAM ECC (Error-Correcting Code) modules use a richer form.
- Storage devices for integrity (e.g. RAID has parity disks).

## A complete pipeline

```
                  ┌─────────────────┐
  USER  ──INPUT──▶│ Validation rule │ Reject if rule fails
                  └─────┬───────────┘
                        │
                        ▼
                  ┌─────────────────┐
                  │ Verification    │ User re-checks / re-types
                  └─────┬───────────┘
                        │
                        ▼ stored
                  ┌─────────────────┐
                  │ Parity check    │ Detects bit flip during transmission
                  └─────────────────┘
```

## Practice activity

Classify each as **validation (V)**, **verification (R)** or **parity (P)**:

1. The login form refuses passwords shorter than 8 characters.
2. You re-enter your new password to confirm.
3. The HKID page rejects an invalid check letter.
4. A network card detects a corrupted Ethernet frame.
5. The librarian reads the borrower's surname back to the student before scanning.
6. The membership form refuses non-numeric phone numbers.

::: details Answers
1. V (length / range)
2. R (double entry)
3. V (check digit)
4. P (parity / similar at frame level)
5. R (visual / read-back)
6. V (data type)
:::

## Exam-style question

> **Q (5 marks):** A clinic's online booking form collects the patient's name, HKID, phone number and preferred appointment time. Suggest one suitable **validation** check for each of the four fields, and one **verification** technique for the whole form.

**Sample answer:**

- **Name** — presence check (must not be empty); optionally length ≤ 100.
- **HKID** — format check (`X123456(7)`) and check-digit verification.
- **Phone number** — length check (8 digits in Hong Kong) and type check (digits only).
- **Appointment time** — range check (within clinic operating hours) and consistency check (not in the past).
- **Verification** — show a summary page and ask the patient to confirm before submission (visual check), or send a confirmation email/SMS with a link to confirm.

## Common student mistakes

- Saying validation "guarantees" correct data — it doesn't.
- Listing "captcha" as validation — captchas confirm humanity, not data quality.
- Confusing **parity** with **encryption** — parity is error detection, encryption is secrecy.
- Forgetting that a check digit is a special kind of validation.

## Key takeaways

- **Validation** = software check at entry.
- **Verification** = human check at entry.
- **Parity** = bit-level error detection during transmission/storage.
- All three increase data quality but **none** guarantees correctness.

➡️ Next chapter: [3 · Data Representation](../data-representation/)
