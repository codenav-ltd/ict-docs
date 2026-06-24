# 3.3 · Binary Arithmetic & Overflow

> **Goal:** add and subtract binary numbers correctly, and detect overflow in n-bit storage.

## Binary addition rules

Just like decimal, but only with `0` and `1`:

| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

The interesting case is `1 + 1 = 10₂` — write `0`, carry `1`. Same as `5 + 5 = 10` in denary.

### Example · 5 + 6 (4-bit)

```
  Carry: 1 1 1
         0 1 0 1   (5)
       + 0 1 1 0   (6)
       ─────────
         1 0 1 1   (11)
```

Result: `1011₂ = 11₁₀`. ✓

### Example · 9 + 7 (4-bit) — **overflow!**

```
  Carry: 1 1 1 1
         1 0 0 1   (9)
       + 0 1 1 1   (7)
       ─────────
       1 0 0 0 0   (16, but 5 bits)
```

In 4 bits the result is `0000` with a **carry out**. That carry is the overflow indicator — see below.

## Binary subtraction

Two common methods:

### Method 1 · Borrow (school style)

| A | B | Diff | Borrow |
|---|---|------|--------|
| 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 1 |

```
         1 0 0 1   (9)
       − 0 1 0 1   (5)
       ─────────
         0 1 0 0   (4)  ✓
```

### Method 2 · Add the two's complement

This is what real CPUs do (see [3.4 Two's Complement](./twos-complement)). Convert the subtrahend into its negative form, then **add**.

`A − B = A + (−B)`.

## What is overflow?

**Overflow** happens when the result of an arithmetic operation **cannot fit** in the available number of bits.

For unsigned n-bit numbers, the maximum representable value is `2ⁿ − 1`. Going beyond it causes the result to **wrap around** modulo `2ⁿ`.

| Bits | Max unsigned value |
|------|--------------------|
| 4 | 15 |
| 8 | 255 |
| 16 | 65,535 |
| 32 | 4,294,967,295 |

## Detecting overflow

### Rule for unsigned addition

If the addition produces a **carry out of the most significant bit (MSB)** — that is, the answer needed an extra bit — overflow has occurred.

```
4-bit:  9 + 7
  carry: 1
   1001   (9)
 + 0111   (7)
 ──────
 1 0000   (16 — needs 5 bits → overflow!)
```

### Rule for signed (two's complement) addition

Overflow happens when **the two operands have the same sign** but **the result has a different sign**.

```
+5 + +6 in 4-bit signed two's complement
  0101 (+5)
+ 0110 (+6)
──────
  1011 (-5 in 4-bit two's complement!)
```

Both operands positive but result interpreted as negative → overflow.

(Detail on signed representation in the next sub-topic.)

## Minimum and maximum for n-bit storage

The C&A Guide explicitly mentions the **min and max numbers** an n-bit register can hold.

| Bits | Unsigned min | Unsigned max | Signed min (two's comp) | Signed max (two's comp) |
|------|--------------|--------------|--------------------------|--------------------------|
| 4 | 0 | 15 | −8 | +7 |
| 8 | 0 | 255 | −128 | +127 |
| 16 | 0 | 65,535 | −32,768 | +32,767 |

You will be expected to derive these for **up to 16 bits (2 bytes)**, which the syllabus calls out by name.

## Worked examples

### Example A · 8-bit unsigned `200 + 100`

200₁₀ = `1100 1000`, 100₁₀ = `0110 0100`.

```
  1100 1000
+ 0110 0100
-----------
1 0010 1100    ← 9 bits → overflow (8-bit max is 255)
```

The 8-bit truncated result is `00101100` = 44 — not the true 300. Programs that ignore overflow will silently produce 44.

### Example B · 4-bit signed `+5 + +6`

Both fit in 4 bits individually, but their sum 11 exceeds the signed max of +7. Overflow.

### Example C · 4-bit signed `−5 + −4`

−5 = `1011`, −4 = `1100`. Sum = `1 0111`. The 4-bit truncated result is `0111` = +7. Both inputs negative but result positive → overflow.

## Practice activity

Compute each in 4-bit binary and mark overflow when present:

1. `0110 + 0101`
2. `1101 + 0011` (unsigned)
3. `0111 + 0001` (signed)
4. `1100 − 0011`
5. `1000 + 1000` (signed)

::: details Answers
1. `1011` (no overflow)
2. `10000` → `0000` + carry, **unsigned overflow**
3. `1000`, signed → overflow (positive + positive = negative)
4. `1001` (no overflow)
5. `10000` → `0000`, signed → overflow (negative + negative = zero, sign-changing)
:::

## Real-world impact of overflow

- **Gandhi nuclear bug** in *Civilization* — his aggression score underflowed from 1 to 255.
- **YouTube view counter** — broke at 2,147,483,647 (signed 32-bit max).
- **Boeing 787 generator** — could not stay powered for >248 days due to 32-bit signed overflow.
- **Cybersecurity** — many vulnerabilities (buffer overflow attacks) start with arithmetic overflow.

## Common student mistakes

- Confusing **carry-out** (unsigned overflow) with **sign change** (signed overflow).
- Forgetting overflow happens whenever the result **does not fit** in the chosen width, even if it is mathematically correct.
- Adding numbers across different bit widths without padding to a common width.

## Exam-style question

> **Q (4 marks):** Perform the following 8-bit unsigned binary additions. State whether overflow occurs.
> (a) `1010 1101 + 0001 0011`
> (b) `1111 1000 + 0000 1000`

**Sample answer:**

(a) `1010 1101 + 0001 0011 = 1100 0000`. No carry out → no overflow.

(b) `1111 1000 + 0000 1000 = 1 0000 0000`. Carry out of the MSB → **overflow** (correct result 256 cannot fit in 8 bits).

## Key takeaways

- Binary addition uses the same column-by-column carry idea as decimal.
- **Overflow** = result does not fit in the allotted bits.
- Unsigned overflow ⇒ carry out of MSB.
- Signed overflow ⇒ both operands same sign, result has opposite sign.
- Maximum unsigned value in n bits is `2ⁿ − 1`.

➡️ Next: [3.4 Two's Complement](./twos-complement)
