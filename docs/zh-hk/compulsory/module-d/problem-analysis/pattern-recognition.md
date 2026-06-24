# 1.3 · Pattern Recognition

> **Goal:** spot when two problems share the same structure so one solution serves both.

## What pattern recognition is

Looking for **common structure** across problems so a single algorithm — perhaps with small variations — can solve many.

## Examples

### Pattern 1 · "Find the largest"

| Problem | What changes |
|---------|--------------|
| Find the tallest student | "tall" |
| Find the most expensive product | "expensive" |
| Find the longest river | "long" |

Same algorithm — `max()` — different attribute.

### Pattern 2 · "Process every item in a list"

| Problem | Action per item |
|---------|------------------|
| Print every student's name | print |
| Sum all sales | accumulate |
| Email every parent | send_email |
| Validate every entry | validate |

All loop through a collection, varying only the inner action.

### Pattern 3 · "Sort a list"

| Problem | Sort key |
|---------|----------|
| Sort students ascending by score | score asc |
| Sort weights descending | weight desc |
| Sort books by title alphabetically | title |

Same sort algorithm; only the comparison function changes.

## Why this matters

- Once you implement one pattern well, future similar tasks take minutes.
- Code becomes **generic** — accept a list and a function, work on anything.
- Libraries are built on recognised patterns (`map`, `filter`, `reduce`).

## Worked example · Robot programming

Two tasks:

- Drive a robot in a **square**.
- Drive a robot in an **equilateral triangle**.

Pattern: "repeat (move forward, turn by an angle)" N times.

```text
For each corner of the polygon:
    move forward by side_length
    turn by exterior_angle
```

Only the **angle** and **number of corners** differ.

```python
def draw_polygon(sides, length):
    for _ in range(sides):
        move_forward(length)
        turn(360 / sides)
```

`draw_polygon(4, 100)` draws a square; `draw_polygon(3, 100)` draws a triangle; `draw_polygon(8, 50)` draws an octagon.

## Pattern catalogue worth knowing

| Pattern | Use |
|---------|-----|
| **Iterate** | Walk through a list |
| **Accumulate** | Build a running total |
| **Filter** | Keep items meeting a condition |
| **Map** | Transform each item |
| **Search** | Find an item |
| **Sort** | Order a list |
| **Group** | Categorise items |
| **Aggregate** | Summarise a group |

## Exam-style question

> **Q (4 marks):** Two students notice they have written similar code: one to find the tallest classmate, another to find the most expensive book in a list. Explain how pattern recognition can help them write reusable code.

**Sample answer:**

Both problems share the **"find the maximum item"** pattern: iterate through a list, track the best-so-far, return it at the end. The only difference is the attribute being compared (height vs price). The students can write a **generic function** that accepts a list and a "key function" describing which attribute to compare, e.g.:

```python
def find_max(items, key):
    best = items[0]
    for item in items[1:]:
        if key(item) > key(best):
            best = item
    return best

find_max(students, key=lambda s: s.height)
find_max(books,    key=lambda b: b.price)
```

This single function replaces two specialised versions, reduces bugs, and supports any future "find the maximum" task.

## Key takeaways

- Spot common structure → write generic code.
- A handful of patterns covers most problems.

## Chapter 1 wrap-up

Self-test: can you do all three (IPO → decomposition → pattern) for a small problem in 10 minutes? If yes, advance.

➡️ Next chapter: [2 · Algorithm Design](../algorithm-design/)
