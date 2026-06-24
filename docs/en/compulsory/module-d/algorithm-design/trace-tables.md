# 2.5 · Trace Tables

> **Goal:** produce a trace table that shows the value of every variable after every step.

## What a trace table is

A table that records the **state** of each variable as an algorithm executes, one step at a time. Used to:

- **Predict** the output of a piece of code.
- **Find** logic bugs.
- **Demonstrate** understanding in an exam answer.

## Example · Sum 1 to 5

```text
sum ← 0
FOR i ← 1 TO 5
    sum ← sum + i
END FOR
OUTPUT sum
```

Trace table:

| Step | i | sum | Output |
|------|---|-----|--------|
| start | — | 0 | — |
| iter 1 | 1 | 1 | — |
| iter 2 | 2 | 3 | — |
| iter 3 | 3 | 6 | — |
| iter 4 | 4 | 10 | — |
| iter 5 | 5 | 15 | — |
| end | — | 15 | 15 |

Tip: list **every** variable across columns; advance the values **once per iteration**.

## Trace table for a WHILE loop

```text
n ← 16
count ← 0
WHILE n > 1
    n ← n / 2
    count ← count + 1
END WHILE
```

| Step | n | count |
|------|---|-------|
| start | 16 | 0 |
| iter 1 | 8 | 1 |
| iter 2 | 4 | 2 |
| iter 3 | 2 | 3 |
| iter 4 | 1 | 4 |

When `n = 1` the condition becomes false and the loop ends. Output `count = 4`.

## Trace table for nested selections (selection inside loop)

```text
total ← 0
count ← 0
FOR i ← 1 TO 4
    INPUT x
    IF x > 0 THEN
        total ← total + x
        count ← count + 1
    END IF
END FOR
IF count > 0 THEN
    OUTPUT total / count
ELSE
    OUTPUT "no positive numbers"
END IF
```

Suppose inputs: 5, -3, 7, 0.

| Step | i | x | condition | total | count |
|------|---|---|-----------|-------|-------|
| 1 | 1 | 5 | true | 5 | 1 |
| 2 | 2 | -3 | false | 5 | 1 |
| 3 | 3 | 7 | true | 12 | 2 |
| 4 | 4 | 0 | false | 12 | 2 |

Output: 12 / 2 = 6.

## Common student mistakes

- Forgetting the **start** row (initial values).
- Skipping an iteration in the table (always show every loop pass).
- Writing the final value only — that's not a trace.
- Mixing column orders between rows.

## Exam-style question

> **Q (5 marks):** Produce a trace table for the following pseudocode with input 9:
>
> ```text
> n ← INPUT
> r ← 0
> WHILE n > 0
>     r ← r * 10 + n MOD 10
>     n ← n DIV 10
> END WHILE
> OUTPUT r
> ```

**Sample trace (input 9, output reverses digits — but 9 is a single digit):**

| Step | n | r |
|------|---|---|
| start | 9 | 0 |
| iter 1 | 0 | 9 (= 0*10 + 9) |

Output `9`. (For multi-digit input like 1234 it would output 4321.)

## Key takeaways

- Trace tables are **mandatory** for debugging and exam answers.
- Include every variable in every iteration.
- Test with both simple and edge-case inputs.

➡️ Next: [2.6 Modularity](./modularity)
