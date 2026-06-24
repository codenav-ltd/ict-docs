# 4.1 · Spreadsheet Basics

> **Goal:** name the parts of a spreadsheet, write basic formulas, and use filter / sort / search.

## Anatomy of a spreadsheet

```
   A         B         C         D
1  Name      Class     Score     Grade
2  Alice     F.4A      86        =IF(...)
3  Bob       F.4A      72        =IF(...)
4  Carol     F.4B      91        =IF(...)
```

| Term | Meaning |
|------|---------|
| **Workbook** | The whole file (`.xlsx`) |
| **Worksheet (sheet / tab)** | One page inside the workbook |
| **Column** | Letters A, B, C, … |
| **Row** | Numbers 1, 2, 3, … |
| **Cell** | One intersection (e.g. `B3`) |
| **Range** | A rectangular group of cells (e.g. `A2:D10`) |
| **Formula** | An expression starting with `=` |
| **Function** | A predefined formula (e.g. `SUM`, `AVERAGE`) |

## Writing your first formula

Every formula starts with `=`. Operators:

| Operator | Meaning | Example |
|----------|---------|---------|
| `+` `-` `*` `/` | Arithmetic | `=A1+B1` |
| `^` | Power | `=2^10` |
| `&` | Concatenate text | `="Hello "&A1` |
| `=` `<>` `>` `<` `>=` `<=` | Comparison | `=A1>=50` |

```
A1: 50
A2: 30
A3: =A1+A2    →  80
A4: =A1*2     →  100
A5: =SUM(A1:A4) → 80+50+30+100 = 260
```

## Three essential operations

### 1 · Sort

| Before | After Sort by Score Desc |
|--------|---------------------------|
| Alice 86 | Carol 91 |
| Bob 72 | Alice 86 |
| Carol 91 | Bob 72 |

You can sort by **single** or **multiple criteria** (e.g. Class then Score).

### 2 · Filter

Show only rows matching a condition. The other rows are temporarily hidden.

| Filter | Result |
|--------|--------|
| Class = F.4A | Alice and Bob remain visible; Carol is hidden |
| Score ≥ 80 | Alice and Carol visible |

### 3 · Search / Find & Replace

- Find: locate a value within a worksheet.
- Find & Replace: substitute one value with another in bulk.

## Common student mistakes

- Forgetting `=` at the start of a formula.
- Using `*` instead of typing the cell reference: `=A1 * 2` is fine, but `=A1 * B1` requires both refs.
- Sorting without selecting the **whole table** — splits names from their scores.
- Filtering without unfreezing earlier filters → confusing partial views.

## Worked example · Grading calculator

In `D2` enter:

```text
=IF(C2 >= 80, "A", IF(C2 >= 70, "B", IF(C2 >= 60, "C", "F")))
```

Copy down to `D3:D4` to grade every student.

## Practice activity

Create the worksheet shown at the top. Now:

1. Sort the students by score descending.
2. Filter to show only F.4A.
3. Add a column "Average" with the class average.
4. Apply conditional formatting to highlight scores below 60 in red.

## Key takeaways

- Cells, rows, columns, ranges — know the vocabulary.
- Every formula starts with `=`.
- Sort, filter and find are the three day-one operations.

➡️ Next: [4.2 Cell References & Functions](./functions-and-formulas)
