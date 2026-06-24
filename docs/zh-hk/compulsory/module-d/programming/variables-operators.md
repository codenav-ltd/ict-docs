# 3.2 · Variables & Operators

> **Goal:** declare variables, use the right operator for the job, and follow naming conventions.

## Variables

A variable is a named storage for a value.

```python
age = 17
name = "Alice"
height = 1.65
is_student = True
```

Python infers the type — no explicit declaration needed.

## Naming rules

- Letters, digits, underscores; must start with a letter or `_`.
- Case-sensitive: `Age` ≠ `age`.
- Don't use Python keywords (`if`, `for`, `class`…).
- **Convention**: `snake_case` for variables and functions, `UPPER_CASE` for constants.

Good:

```python
average_height = 165
PI = 3.14159
```

Bad:

```python
a = 165          # what does 'a' mean?
PiValue = 3.14   # mixed conventions
```

## Operators reference

### Arithmetic

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| `+` | Add | `3+2` | 5 |
| `-` | Subtract | `3-2` | 1 |
| `*` | Multiply | `3*2` | 6 |
| `/` | True division | `5/2` | 2.5 |
| `//` | Floor division | `5//2` | 2 |
| `%` | Modulus | `5%2` | 1 |
| `**` | Power | `2**10` | 1024 |

### Comparison (relational)

| Operator | Meaning |
|----------|---------|
| `==` | Equal to |
| `!=` | Not equal to |
| `>` `<` | Greater / less |
| `>=` `<=` | Greater or equal / less or equal |

::: warning Python vs HKEAA pseudocode
HKEAA pseudocode uses `=` for comparison and `←` for assignment. Python uses `==` for comparison and `=` for assignment. Don't mix them in your answers.
:::

### Boolean (logical)

| Operator | Meaning |
|----------|---------|
| `and` | True if both operands True |
| `or` | True if at least one True |
| `not` | Reverses Boolean |

### Assignment shortcuts

| Shortcut | Means |
|----------|-------|
| `x += 5` | `x = x + 5` |
| `x -= 3` | `x = x - 3` |
| `x *= 2` | `x = x * 2` |

## Operator precedence (high → low)

1. `**`
2. `*` `/` `//` `%`
3. `+` `-`
4. Comparisons `<` `<=` `>` `>=` `==` `!=`
5. `not`
6. `and`
7. `or`

Use parentheses when in doubt.

## Worked examples

```python
total = 0
for i in range(1, 11):
    total += i              # 1+2+...+10
print(total)                # 55

a, b = 7, 3
print(a // b, a % b)        # 2 1   (quotient, remainder)

x = 5
print(x ** 2)               # 25
print((x + 3) * 2)          # 16
```

## Common student mistakes

- Confusing `=` (assignment) with `==` (comparison).
- Forgetting that `5 / 2 = 2.5` (Python 3 true division); use `//` for integer division.
- Using `&` and `|` (bitwise) instead of `and` / `or` (Boolean).
- Reusing variable names that shadow built-ins (`list`, `sum`, `str`).

## Exam-style question

> **Q (4 marks):** Trace the value of `result` after each line:
>
> ```python
> x = 7
> y = 3
> result = (x % y) * 2 + (x // y) ** 2
> ```

**Sample answer:**

- `x % y = 1`
- `(1) * 2 = 2`
- `x // y = 2`
- `2 ** 2 = 4`
- `result = 2 + 4 = 6`

## Key takeaways

- Names matter — pick meaningful ones.
- Know your operators and their precedence.
- Python's `=` is assignment; `==` is comparison.

➡️ Next: [3.3 Input / Output](./input-output)
