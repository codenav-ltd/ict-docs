# 1.11 · Testing & Debugging

> **Goal:** know the numerical and structural errors the syllabus mentions, and the debugging tools.

## Numerical errors (named by the syllabus)

| Error | Cause | Example |
|-------|-------|---------|
| **Rounding** | Limited decimal precision | `0.1 + 0.2 != 0.3` |
| **Truncation** | Cutting off extra digits | `int(3.9) → 3` |
| **Overflow** | Result exceeds max representable | Int32 max + 1 wraps |
| **Underflow** | Result smaller than min representable | Tiny float becomes 0 |

Mitigation:

- Use `Decimal` for money to avoid float rounding.
- Use 64-bit ints (Python's `int` is arbitrary precision).
- Apply `round()` deliberately.

## Other errors (recap)

| Type | When |
|------|------|
| Syntax | Compile / interpret time |
| Logical | Runs but wrong output |
| Run-time | Crash during execution |

## Debugging tools

| Tool | What it does |
|------|--------------|
| **Stubs** | Empty placeholder functions used during top-down development |
| **Flags** | Boolean state variables that toggle behaviour |
| **Break points** | IDE debugger pauses at a chosen line so you can inspect state |
| **Program trace** | Print statements / loggers to show variable values |
| **Test data sets** | Normal / boundary / erroneous |

## A debugging walkthrough

Suppose a function should return the average but returns 0.

1. **Reproduce** with a small input.
2. **Add print(s)** at key spots:
   ```python
   def average(nums):
       print("DEBUG nums:", nums)
       total = sum(nums)
       print("DEBUG total:", total)
       return total / len(nums)
   ```
3. **Hypothesise** — divide by zero? wrong total?
4. **Fix** and remove debug prints.

## Common student mistakes

- Catching exceptions to hide bugs.
- Changing many things at once.
- Forgetting boundary tests.
- Trusting "it worked on my machine".

## Exam-style question

> **Q (5 marks):** Identify the type of error and propose a debugging technique for each:
> (a) Program prints `0` instead of the average.
> (b) Python raises `IndexError: list index out of range`.
> (c) Program won't start: "SyntaxError: invalid syntax".
> (d) Result is `0.30000000000000004` instead of `0.3`.

**Sample answer:**

(a) **Logical error**. Use **trace tables** or **print debugging** to inspect intermediate values; likely culprits: dividing before accumulating, off-by-one in loop bounds.

(b) **Run-time error**. Add a **breakpoint** at the indexing line, inspect the list length vs the index; add a guard like `if i < len(arr)`.

(c) **Syntax error**. Read the **line number** in the error message; check for unmatched brackets, missing colons, bad indentation.

(d) **Numerical rounding error** caused by binary floating-point. Use `round(x, 1)` for display, or switch to `Decimal` for precise arithmetic.

## Key takeaways

- Numerical errors: rounding, truncation, overflow, underflow.
- Debugging tools: stubs, flags, breakpoints, traces, test data.
- Fix systematically.

## Chapter 1 wrap-up

You've finished the meat of 2C. Self-test:

- Can you implement linear & binary search?
- Can you implement bubble, insertion, selection sorts?
- Can you build a stack, queue and linked list in Python?
- Can you debug systematically?

➡️ Next chapter: [2 · Programming in Real Life](../real-life/)
