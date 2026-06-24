# 2.1 · Pseudocode

> **Goal:** read and write pseudocode using HKEAA conventions.

## What pseudocode is

**Pseudocode** is an informal, English-like description of an algorithm. It is **language-agnostic** — you can later implement it in Python, C++, Pascal or any other language.

## HKEAA-style conventions

| Convention | Example |
|------------|---------|
| Assignment uses `←` not `=` | `total ← 0` |
| Comparison uses `=` (no `==`) | `IF age = 17 THEN` |
| Keywords in CAPS | `IF, THEN, ELSE, FOR, WHILE, END FOR, END IF` |
| Indentation shows block structure | (no braces, no colons) |
| Comments start with `//` | `// initialise counter` |

## A complete example

```text
// Compute the sum 1+2+…+n
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

## Common keywords

| Keyword | Use |
|---------|-----|
| `INPUT x` | Read a value into variable x |
| `OUTPUT x` | Display x |
| `IF cond THEN … ELSE IF … ELSE … END IF` | Selection |
| `FOR x ← a TO b STEP s … END FOR` | Counting loop |
| `WHILE cond … END WHILE` | Conditional loop |
| `REPEAT … UNTIL cond` | Post-test loop |
| `CASE … END CASE` | Multi-way selection |
| `BEGIN / END` | Block markers (some textbooks) |

## Reading vs writing pseudocode

The HKEAA may:

1. **Show** pseudocode and ask for output / a trace table.
2. **Ask you to write** pseudocode for a given problem.
3. **Ask you to convert** pseudocode into Python.

For all three you must respect the conventions above.

## Worked example · Maximum of three numbers

```text
INPUT a, b, c
max ← a
IF b > max THEN max ← b END IF
IF c > max THEN max ← c END IF
OUTPUT max
```

## Translating to Python (quick reference)

| Pseudocode | Python |
|------------|--------|
| `INPUT x` | `x = int(input())` |
| `OUTPUT x` | `print(x)` |
| `x ← 5` | `x = 5` |
| `IF a = b THEN` | `if a == b:` |
| `IF a >= b THEN … ELSE …` | `if a >= b: … else: …` |
| `FOR i ← 1 TO n` | `for i in range(1, n+1):` |
| `WHILE cond` | `while cond:` |

## Common student mistakes

- Writing `=` for assignment in pseudocode (use `←`).
- Mixing Python `==` for comparison (use single `=`).
- Forgetting `END FOR` / `END IF`.
- Adding language-specific constructs like `try/except` to pseudocode.

## Exam-style question

> **Q (5 marks):** Write pseudocode that reads 10 numbers from the user and outputs how many are positive, negative, and zero.

**Sample answer:**

```text
positives ← 0
negatives ← 0
zeros     ← 0
FOR i ← 1 TO 10
    INPUT n
    IF n > 0 THEN
        positives ← positives + 1
    ELSE IF n < 0 THEN
        negatives ← negatives + 1
    ELSE
        zeros ← zeros + 1
    END IF
END FOR
OUTPUT positives, negatives, zeros
```

## Key takeaways

- HKEAA-style pseudocode: caps keywords, `←` for assignment, `END FOR/IF`.
- Use it to communicate algorithms before coding.

➡️ Next: [2.2 Flowcharts](./flowcharts)
