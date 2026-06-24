# 4.3 · Debugging Techniques

> **Goal:** isolate bugs systematically.

## The debugging mindset

1. **Reproduce** — find an input that reliably triggers the bug.
2. **Isolate** — narrow down to the smallest piece of code involved.
3. **Hypothesise** — guess the cause.
4. **Test the hypothesis** — change one thing, run again.
5. **Fix** — minimal change.
6. **Add a test** — prevent regression.

## Techniques

### 1 · `print` debugging

Insert `print` statements showing variable values at suspect spots.

```python
def average(nums):
    print("DEBUG: nums =", nums)
    total = sum(nums)
    print("DEBUG: total =", total)
    return total / len(nums)
```

Lo-fi but effective. Remove after fixing.

### 2 · Use an IDE debugger

Set **breakpoints**, step through line by line, inspect variables. Thonny, VS Code and PyCharm all support this.

### 3 · Trace tables on paper

When the bug is logical, work through the code with pen and paper using a trace table (Module D Chapter 2.5).

### 4 · Bisection (binary search the bug)

If you have 100 lines of code and a bug appears after refactoring, comment out half the new code and re-test. Repeat on the remaining half.

### 5 · Rubber-duck debugging

Explain your code, line by line, to an inanimate object (or a friend). The act of verbalising often reveals the bug.

### 6 · Compare with a working version

If you used git, run `git diff` to see exactly what changed since the program last worked.

## Worked example

```python
def factorial(n):
    result = 1
    for i in range(n):           # BUG: should be range(1, n+1)
        result *= i              # i starts at 0 → result becomes 0!
    return result

print(factorial(5))   # 0, not 120
```

Debugging steps:

1. **Reproduce** — `factorial(5)` returns 0.
2. **Isolate** — only one loop and one multiplication.
3. **Hypothesise** — maybe the range is wrong.
4. **Test** — add `print(i, result)` inside the loop:
   ```
   0 0
   1 0
   2 0
   3 0
   4 0
   ```
5. **Aha!** `i` starts at 0, multiplying by 0 → always 0.
6. **Fix** — `range(1, n+1)`.

## Compare different solutions

The syllabus invites students to compare different solutions to the same problem on:

- **Number of steps**
- **Memory usage**
- **Readability**

This builds the habit of asking "is there a better way?"

## Common student mistakes

- Changing many things at once — can't tell which fix worked.
- Random changes ("might as well try…") instead of hypothesis-driven.
- Forgetting to remove debug `print`s before final submission.
- Not writing a test that catches the bug to prevent regression.

## Exam-style question

> **Q (5 marks):** A program is supposed to print the sum 1+2+…+n, but for `n=5` it prints 10 instead of 15.
>
> (a) Identify the most likely **type of error**.
> (b) Describe **three debugging techniques** that could help find the cause.

**Sample answer:**

(a) **Logic error** — the program runs but produces the wrong sum.

(b) Three techniques:

1. **Trace table** on paper, walking through n=5 iteration by iteration and comparing with expected.
2. **Print debugging** — add `print(i, total)` inside the loop to see how the running total evolves.
3. **Step through with the IDE debugger**, setting a breakpoint at the loop and inspecting variables each iteration.

## Key takeaways

- Debug systematically: reproduce → isolate → hypothesise → test → fix → test again.
- Multiple techniques work; pick the cheapest first.
- A bug fixed without a test is a bug waiting to come back.

## Module D wrap-up

Self-test:

- Can you trace a 15-line pseudocode by hand?
- Can you implement linear search, min/max/avg in Python from scratch?
- Can you list 3 types of errors with examples?
- Can you describe 3 debugging techniques?

➡️ Next module: [Module E · Social Implications](../../module-e/)
