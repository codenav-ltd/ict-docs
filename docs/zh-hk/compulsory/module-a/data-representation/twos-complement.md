# 3.4 · Two's Complement

> **Goal:** convert any integer to its n-bit two's-complement form, and convert it back.

## The problem of negative numbers

Binary has only `0` and `1` — there is no `−` sign. How can a computer store **negative** integers?

Three solutions existed historically:

| Scheme | Idea | Drawback |
|--------|------|----------|
| **Sign-magnitude** | Reserve the leftmost bit as the sign (`0` = +, `1` = −); rest is magnitude | Two zeros (+0, −0); subtraction is awkward |
| **One's complement** | Flip every bit to negate | Still two zeros; carry handling messy |
| **Two's complement** | Flip every bit, then add 1 | Single zero; addition and subtraction work uniformly |

**Modern computers all use two's complement** for signed integers. The HKEAA explicitly requires you to know it.

## How to encode a negative integer

### The 3-step recipe

To represent `−x` in n-bit two's complement:

1. **Write `+x` in n-bit binary.**
2. **Invert every bit** (one's complement).
3. **Add 1.**

### Example · −5 in 8 bits

| Step | Working |
|------|---------|
| 1. Write +5 | `0000 0101` |
| 2. Invert | `1111 1010` |
| 3. Add 1 | `1111 1011` |

So `−5 = 1111 1011₂` in 8-bit two's complement.

### Example · −1 in 8 bits

| Step | Working |
|------|---------|
| 1. Write +1 | `0000 0001` |
| 2. Invert | `1111 1110` |
| 3. Add 1 | `1111 1111` |

`−1` is **all ones**. (This is true for any number of bits.)

### Example · −128 in 8 bits

| Step | Working |
|------|---------|
| 1. Write +128 | `1000 0000` (already negative interpretation, but bit pattern is the same) |
| 2. Invert | `0111 1111` |
| 3. Add 1 | `1000 0000` |

The bit pattern `1000 0000` represents `−128` in two's complement — the smallest 8-bit signed value.

## How to decode a two's complement number

If the **MSB is 0** → it's a positive number; read as normal binary.

If the **MSB is 1** → it's negative. Two ways to convert:

### Method 1 · Apply the same recipe (it's symmetric!)

`1111 1011₂` → flip → `0000 0100` → +1 → `0000 0101` = `5` → so original is `−5`.

### Method 2 · Use the negative MSB place value

For an n-bit two's complement number, the **MSB has the place value −2ⁿ⁻¹** instead of +2ⁿ⁻¹.

For 8-bit:

| Place | −128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-------|------|----|----|----|----|----|----|----|
| Bit | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |

Value = −128 + 64 + 32 + 16 + 8 + 0 + 2 + 1 = `−5`. ✓

## Range of n-bit two's complement

| Bits | Range |
|------|-------|
| 4 | −8 to +7 |
| 8 | −128 to +127 |
| 16 | −32,768 to +32,767 |
| 32 | −2,147,483,648 to +2,147,483,647 |

Formula: for n bits, range is `−2ⁿ⁻¹` to `+2ⁿ⁻¹ − 1`.

Notice the **asymmetry**: there is one more negative value than positive because `0` lives in the positive half (`0000 0000`).

## Why two's complement is brilliant

### One representation for zero

Sign-magnitude has `+0` and `−0`. Two's complement has only `0000 0000` = 0.

### Subtraction is just addition

`A − B = A + (two's-complement of B)`.

The same circuitry adds positive and negative numbers — no separate subtractor needed.

### Sign extension works naturally

If you copy an 8-bit signed number into a 16-bit register, you just copy the MSB into the new upper bits:

```
8-bit  −5 = 1111 1011
16-bit −5 = 1111 1111 1111 1011
```

## Worked examples

### Example A · Compute `7 − 3` in 4-bit two's complement

`+7 = 0111`
`+3 = 0011`, so `−3 = 0011 → 1100 → 1101`.

Add: `0111 + 1101 = 1 0100`. Discard the carry out → `0100` = `+4`. ✓

### Example B · Compute `5 − 9` in 8-bit two's complement

`+5 = 0000 0101`
`−9 = 0000 1001 → 1111 0110 → 1111 0111`

Add: `0000 0101 + 1111 0111 = 1111 1100` = `−4`. ✓

## Common student mistakes

- Forgetting **step 3 (add 1)** — that's the difference between one's and two's complement.
- Confusing MSB = 1 as **always negative** — only **in two's complement**; in unsigned binary the MSB is just another bit.
- Asymmetric range bug: trying to represent +128 in 8-bit signed (it's out of range).
- Mixing widths — comparing a 4-bit signed `1011` with an 8-bit signed `1011` gives different values.

## Practice activity

In 8-bit two's complement, find:

1. The bit pattern for `−1`.
2. The bit pattern for `−42`.
3. The decimal value of `1110 0000`.
4. The decimal value of `1000 0000`.
5. The range of values representable.

::: details Answers
1. `1111 1111`
2. `1101 0110`  (+42 = `0010 1010` → invert `1101 0101` → +1 → `1101 0110`)
3. `−32`
4. `−128`
5. `−128` to `+127`
:::

## Exam-style question

> **Q (4 marks):** Using 8-bit two's complement, express `−45₁₀` in binary. Show your working.

**Sample answer:**

| Step | Working |
|------|---------|
| 1. Write +45 in 8-bit binary | `0010 1101` |
| 2. Invert every bit | `1101 0010` |
| 3. Add 1 | `1101 0011` |

`−45₁₀ = 1101 0011₂` in 8-bit two's complement.

## Key takeaways

- Two's complement = **invert all bits, then add 1**.
- The MSB of a two's-complement number has place value `−2ⁿ⁻¹`.
- One single representation of zero.
- Addition and subtraction use the same hardware.
- Range: `−2ⁿ⁻¹` to `+2ⁿ⁻¹ − 1`.

➡️ Next: [3.5 Character Encoding](./character-encoding)
