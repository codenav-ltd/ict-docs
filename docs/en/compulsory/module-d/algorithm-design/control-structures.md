# 2.4 · Control Structures

> **Goal:** master sequence, selection (binary / multi-way) and iteration. **Nested loops are NOT in compulsory**.

## The three structures

| Structure | Description |
|-----------|-------------|
| **Sequence** | Statements execute top to bottom |
| **Selection** | Choose between alternatives (binary / multi-way) |
| **Iteration** | Repeat statements while/until a condition |

## Sequence

```text
INPUT a
INPUT b
sum ← a + b
OUTPUT sum
```

Nothing fancy — just straight-line execution.

## Selection · Binary (IF / THEN / ELSE)

```text
IF mark >= 50 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
END IF
```

## Selection · Multi-way (IF / ELSE IF / ELSE)

```text
IF mark >= 80 THEN
    OUTPUT "A"
ELSE IF mark >= 70 THEN
    OUTPUT "B"
ELSE IF mark >= 60 THEN
    OUTPUT "C"
ELSE
    OUTPUT "F"
END IF
```

Or with a CASE construct (if your textbook uses it):

```text
CASE mark OF
    80..100 : OUTPUT "A"
    70..79  : OUTPUT "B"
    60..69  : OUTPUT "C"
    OTHERWISE: OUTPUT "F"
END CASE
```

## Iteration · FOR (counting loop)

```text
sum ← 0
FOR i ← 1 TO 10
    sum ← sum + i
END FOR
OUTPUT sum     // 55
```

## Iteration · WHILE (pre-test loop)

```text
i ← 1
sum ← 0
WHILE i <= 10
    sum ← sum + i
    i ← i + 1
END WHILE
OUTPUT sum
```

## Iteration · REPEAT … UNTIL (post-test loop)

Used in textbooks based on Pascal. Always executes at least once.

```text
i ← 1
sum ← 0
REPEAT
    sum ← sum + i
    i ← i + 1
UNTIL i > 10
OUTPUT sum
```

## ⚠️ Nested loops are NOT in the compulsory part

The C&A Guide says clearly:

> "Sequence, selection and iteration (**nested loop is not required**) constructs to create a program."

**Nested loops** belong to **Elective 2C**. In Module D you only need single-layer loops.

## Combining structures

Most real algorithms combine all three. Example: count students who passed in a class of N:

```text
INPUT n
pass_count ← 0
FOR i ← 1 TO n
    INPUT mark
    IF mark >= 50 THEN
        pass_count ← pass_count + 1
    END IF
END FOR
OUTPUT pass_count
```

## Common student mistakes

- Forgetting `END IF` / `END FOR` / `END WHILE`.
- Using `IF a = b` for assignment (assignment uses `←`).
- Writing nested loops in compulsory pseudocode (it's a 2C-only construct).
- Infinite loops — forgetting to update the loop control variable.

## Exam-style question

> **Q (5 marks):** Write pseudocode that reads a list of 20 numbers and outputs the count of numbers greater than 10.

**Sample answer:**

```text
count ← 0
FOR i ← 1 TO 20
    INPUT n
    IF n > 10 THEN
        count ← count + 1
    END IF
END FOR
OUTPUT count
```

## Key takeaways

- Three structures: sequence, selection, iteration.
- Selection: binary and multi-way.
- Iteration: FOR (counting), WHILE (pre-test), REPEAT-UNTIL (post-test).
- **No nested loops** in compulsory part.

➡️ Next: [2.5 Trace Tables](./trace-tables)
