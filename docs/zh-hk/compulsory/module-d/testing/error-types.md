# 4.2 · Types of Errors

> **Goal:** classify any program error as syntax, logic, or run-time and explain its symptoms.

## The three types

| Type | Detected when | Symptom | Example |
|------|---------------|---------|---------|
| **Syntax** | Compile / interpret time | Program won't run at all | `print(x` missing closing `)` |
| **Logic** | At run time, gives wrong output | Program runs but result is wrong | Using `<` when `<=` was intended |
| **Run-time** | During execution | Program crashes mid-way | Division by zero, file not found, index out of range |

## Syntax errors

The interpreter (Python) refuses to run the program until you fix the grammar.

```python
# SyntaxError: '(' was never closed
print("hi"
```

```python
# IndentationError: unexpected indent
if x > 0:
        print(x)
    print(x)        # mis-aligned!
```

Fix: read the line number, find the typo.

## Logic errors

Most insidious. The program runs and produces output — but the output is wrong.

```python
# Wants: "Pass" if score >= 50, else "Fail"
if score > 50:           # BUG: should be >=
    print("Pass")
else:
    print("Fail")
```

Score = 50 → incorrectly prints "Fail".

Logic errors are detected by **testing**, not by Python.

## Run-time errors (exceptions)

The program runs, but an unexpected condition crashes it.

| Error | Cause |
|-------|-------|
| `ZeroDivisionError` | Divide by 0 |
| `ValueError` | `int("abc")` |
| `IndexError` | `lst[10]` on a 3-element list |
| `KeyError` | Missing dict key |
| `FileNotFoundError` | Opening a missing file |
| `TypeError` | `"5" + 3` |

Handle them with `try` / `except`:

```python
try:
    n = int(input("Number: "))
    print(100 / n)
except ZeroDivisionError:
    print("Can't divide by zero")
except ValueError:
    print("That's not a number")
```

## Mapping errors to their detection

| Error type | Best caught by |
|------------|----------------|
| Syntax | Linter / IDE syntax highlighting |
| Logic | Unit tests + trace tables + manual review |
| Run-time | Defensive code (try/except), good test data |

## Common student mistakes

- Confusing syntax errors with logic errors.
- Adding excessive `try/except` to hide bugs instead of fixing them.
- Treating Python `print` debugging as undignified — it's a perfectly fine technique.

## Exam-style question

> **Q (4 marks):** Identify the type of error in each snippet:
>
> (a) `print("Hello World"`
> (b) `total = 0; for i in range(1,11): total += i; print("Sum = ", total + 1)`  *(off-by-one)*
> (c) `mark = int("87a")`
> (d) `result = 10 / 0`

**Sample answer:**

(a) **Syntax** — unmatched parenthesis.
(b) **Logic** — `+ 1` shouldn't be there; produces wrong sum.
(c) **Run-time** (`ValueError`) — string contains non-numeric character.
(d) **Run-time** (`ZeroDivisionError`).

## Key takeaways

- 3 types: syntax, logic, run-time.
- Syntax: caught early. Logic: hardest. Run-time: handle gracefully.

➡️ Next: [4.3 Debugging Techniques](./debugging)
