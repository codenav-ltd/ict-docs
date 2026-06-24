# 3.2 · Number Systems

> **Goal:** convert integers fluently between denary (decimal), binary, and hexadecimal in both directions, with full working.

## The three number systems on the syllabus

| System | Base | Digits used |
|--------|------|-------------|
| **Denary (decimal)** | 10 | 0 1 2 3 4 5 6 7 8 9 |
| **Binary** | 2 | 0 1 |
| **Hexadecimal (hex)** | 16 | 0 1 2 3 4 5 6 7 8 9 A B C D E F |

You will be asked to convert between any pair, in both directions.

## Place value, the universal idea

Any number system has **place values** that are powers of the base.

### Denary (base 10)

| Place | 1000 | 100 | 10 | 1 |
|-------|------|-----|----|----|
| Power | 10³ | 10² | 10¹ | 10⁰ |
| Digit | 2 | 3 | 7 | 4 |

`2 × 1000 + 3 × 100 + 7 × 10 + 4 × 1 = 2374`

### Binary (base 2)

| Place | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-------|-----|----|----|----|----|----|----|----|
| Power | 2⁷ | 2⁶ | 2⁵ | 2⁴ | 2³ | 2² | 2¹ | 2⁰ |
| Digit | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 |

`128 + 32 + 16 + 4 + 1 = 181₁₀`

### Hexadecimal (base 16)

| Place | 4096 | 256 | 16 | 1 |
|-------|------|-----|----|----|
| Power | 16³ | 16² | 16¹ | 16⁰ |
| Digit | 0 | 2 | A | 7 |

`2 × 256 + 10 × 16 + 7 × 1 = 679₁₀`

## Quick reference table (0–15)

You **must** memorise this table cold.

| Denary | Binary (4-bit) | Hex |
|--------|----------------|-----|
| 0 | 0000 | 0 |
| 1 | 0001 | 1 |
| 2 | 0010 | 2 |
| 3 | 0011 | 3 |
| 4 | 0100 | 4 |
| 5 | 0101 | 5 |
| 6 | 0110 | 6 |
| 7 | 0111 | 7 |
| 8 | 1000 | 8 |
| 9 | 1001 | 9 |
| 10 | 1010 | A |
| 11 | 1011 | B |
| 12 | 1100 | C |
| 13 | 1101 | D |
| 14 | 1110 | E |
| 15 | 1111 | F |

## Denary → Binary

### Method 1 · Successive division by 2

Divide repeatedly by 2 and read remainders **bottom to top**.

Convert `45₁₀`:

```
45 ÷ 2 = 22  remainder 1
22 ÷ 2 = 11  remainder 0
11 ÷ 2 = 5   remainder 1
 5 ÷ 2 = 2   remainder 1
 2 ÷ 2 = 1   remainder 0
 1 ÷ 2 = 0   remainder 1   ← top
```

Reading bottom to top → `101101₂`.

### Method 2 · Subtract the largest power of 2

| Power of 2 | Used? | Remaining |
|-----------|-------|-----------|
| 32 | ✓ | 45 − 32 = 13 |
| 16 | ✗ | 13 |
| 8 | ✓ | 13 − 8 = 5 |
| 4 | ✓ | 5 − 4 = 1 |
| 2 | ✗ | 1 |
| 1 | ✓ | 1 − 1 = 0 |

Result: `101101₂`.

## Binary → Denary

Multiply each bit by its place value and sum.

`11010110₂` → 128 + 64 + 16 + 4 + 2 = `214₁₀`.

Tip: write the place values **above** the bits before adding.

## Denary → Hex

### Method 1 · Successive division by 16

Convert `2750₁₀`:

```
2750 ÷ 16 = 171 remainder 14 (E)
 171 ÷ 16 = 10  remainder 11 (B)
  10 ÷ 16 = 0   remainder 10 (A)   ← top
```

Reading bottom to top → `ABE₁₆`.

### Method 2 · Via binary

Convert to binary first, then **group in 4s** (right to left).

`2750₁₀ = 1010 1011 1110₂` → `A B E` → `ABE₁₆`.

## Hex → Denary

Multiply each digit by its place value and sum.

`3F₁₆` = 3 × 16 + 15 × 1 = **63₁₀**

## Binary ↔ Hex (the shortcut)

This conversion is the fastest because **1 hex digit = 4 binary bits**.

```
Binary  : 1101 1010 0011 1111
            D    A    3    F
Hex     :        D A 3 F
```

Both directions take seconds once you have memorised the 0–15 table.

::: tip Always group binary in 4s before converting to hex
- Group **from the right**: `11010100110₂` → `0110 1010 0110` (pad with leading zeros).
- Then read: `6 A 6` → `6A6₁₆`.
:::

## Common conversion practice

| Denary | Binary | Hex |
|--------|--------|-----|
| 13 | 1101 | D |
| 25 | 11001 | 19 |
| 100 | 1100100 | 64 |
| 255 | 11111111 | FF |
| 256 | 100000000 | 100 |
| 1024 | 10000000000 | 400 |
| 65535 | 1111111111111111 | FFFF |

Memorising **255 = 0xFF** and **65535 = 0xFFFF** saves time in exam.

## How many bits do I need?

For an unsigned integer N, the number of bits needed is **⌈log₂(N+1)⌉**.

| Range | Bits needed |
|-------|-------------|
| 0–1 | 1 |
| 0–3 | 2 |
| 0–7 | 3 |
| 0–15 | 4 |
| 0–255 | 8 |
| 0–1023 | 10 |
| 0–65535 | 16 |

n bits can represent **2ⁿ** distinct values. You should be able to derive this for any small n.

## Why hexadecimal at all?

Computers are binary. Why bother with hex?

1. **Compactness** — 1 hex digit replaces 4 binary digits.
2. **Readability** — RGB colour `#FF8800` is much clearer than `11111111 10001000 00000000`.
3. **Easy bit-mapping** — each hex digit corresponds neatly to 4 bits.
4. **Standard in addresses** — MAC addresses, IPv6, memory dumps all use hex.

## Common student mistakes

- Reading division remainders **top to bottom** (it's bottom to top).
- Forgetting that hex `A`–`F` map to 10–15 (writing `A = 11` is a frequent slip).
- Missing leading zeros when grouping binary into 4s — pad first.
- Confusing the *base* with the *number of digits*.

## Practice activity

Convert without a calculator:

1. `87₁₀` → binary, hex
2. `0xC8` → denary, binary
3. `10110101₂` → denary, hex
4. `0xBEEF` → binary
5. `255₁₀ + 1` → binary, hex

::: details Answers
1. `1010111₂`, `57₁₆`
2. `200₁₀`, `11001000₂`
3. `181₁₀`, `B5₁₆`
4. `1011 1110 1110 1111₂`
5. `100000000₂`, `100₁₆`
:::

## Exam-style question

> **Q (4 marks):** (a) Convert `2024₁₀` to binary, showing all working. (b) Convert your answer in (a) to hexadecimal.

**Sample answer:**

(a) Successive division by 2:

```
2024 ÷ 2 = 1012 r 0
1012 ÷ 2 =  506 r 0
 506 ÷ 2 =  253 r 0
 253 ÷ 2 =  126 r 1
 126 ÷ 2 =   63 r 0
  63 ÷ 2 =   31 r 1
  31 ÷ 2 =   15 r 1
  15 ÷ 2 =    7 r 1
   7 ÷ 2 =    3 r 1
   3 ÷ 2 =    1 r 1
   1 ÷ 2 =    0 r 1
```

`2024₁₀ = 11111101000₂`

(b) Group in 4s from the right (pad with leading 0s):

`0111 1110 1000` → `7 E 8` → `2024₁₀ = 7E8₁₆`

## Key takeaways

- Three bases: 10, 2, 16.
- Master **two methods** for denary → binary (successive division + subtract powers).
- **1 hex digit = 4 binary bits** is the fastest conversion shortcut.
- Memorise 0–15 in all three bases.

➡️ Next: [3.3 Binary Arithmetic & Overflow](./binary-arithmetic)
