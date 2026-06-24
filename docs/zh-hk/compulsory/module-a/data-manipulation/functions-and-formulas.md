# 4.2 · Cell References & Functions

> **Goal:** use relative, absolute and mixed references; pick the right built-in function for each task.

## Cell references — relative vs absolute vs mixed

When you copy a formula, references **adjust** based on their type.

| Type | Syntax | When you copy down |
|------|--------|--------------------|
| **Relative** | `A1` | Row changes (e.g. → `A2`, `A3`) |
| **Absolute** | `$A$1` | Stays `$A$1` always |
| **Mixed (column locked)** | `$A1` | Row changes, column locked |
| **Mixed (row locked)** | `A$1` | Column changes, row locked |

### Worked example · Why absolute references matter

`B2:B13` contains 12 months of sales. In `C2` we want to mark "Above" or "Below" yearly average and copy the formula down to `C13`.

```text
✗ =IF(B2 > AVERAGE(B2:B13), "Above", "Below")
```

When you copy this to `C3`, the formula becomes:

```text
=IF(B3 > AVERAGE(B3:B14), "Above", "Below")
```

The range slid down to `B3:B14`, which is wrong — `B14` is empty and `B2` is excluded.

```text
✓ =IF(B2 > AVERAGE($B$2:$B$13), "Above", "Below")
```

The `$` signs lock the range so it stays `$B$2:$B$13` when copied.

## Common operators and functions

### Mathematical functions

| Function | Description | Example |
|----------|-------------|---------|
| `SUM(range)` | Total | `=SUM(B2:B13)` |
| `AVERAGE(range)` | Mean | `=AVERAGE(B2:B13)` |
| `MIN(range)` `MAX(range)` | Smallest / largest | `=MIN(B2:B13)` |
| `COUNT(range)` | Numbers only | `=COUNT(B2:B13)` |
| `COUNTA(range)` | Non-empty cells | `=COUNTA(A2:A100)` |
| `COUNTIF(range, criteria)` | Count by condition | `=COUNTIF(B2:B100, ">=80")` |
| `SUMIF(range, criteria, sum_range)` | Sum by condition | `=SUMIF(B2:B100, "F.4A", C2:C100)` |
| `ROUND(num, digits)` | Round to n digits | `=ROUND(3.14159, 2)` → 3.14 |
| `INT(num)` | Truncate decimals | `=INT(3.9)` → 3 |
| `MOD(a, b)` | Remainder | `=MOD(10, 3)` → 1 |
| `ABS(num)` | Absolute value | `=ABS(-5)` → 5 |

### Logical functions

| Function | Description | Example |
|----------|-------------|---------|
| `IF(cond, then, else)` | Conditional | `=IF(B2>=50, "Pass", "Fail")` |
| `IFS(cond1, val1, cond2, val2, ...)` | Multi-way | `=IFS(B2>=90, "A", B2>=80, "B", B2>=70, "C", TRUE, "F")` |
| `AND(c1, c2, ...)` | Boolean AND | `=AND(B2>=50, B3>=50)` |
| `OR(c1, c2, ...)` | Boolean OR | `=OR(B2="F.4A", B2="F.4B")` |
| `NOT(c)` | Boolean NOT | `=NOT(B2=0)` |

### Lookup functions

| Function | Description | Example |
|----------|-------------|---------|
| `VLOOKUP(value, table, col_index, FALSE)` | Vertical lookup | `=VLOOKUP(A2, $E$2:$F$10, 2, FALSE)` |
| `HLOOKUP(value, table, row_index, FALSE)` | Horizontal lookup | (less common) |
| `INDEX(range, row, col)` | Pick a cell | `=INDEX($E$2:$F$10, MATCH(A2, $E$2:$E$10, 0), 2)` |
| `MATCH(value, range, 0)` | Find position | `=MATCH("Alice", $A$2:$A$100, 0)` |

### Text functions

| Function | Description | Example |
|----------|-------------|---------|
| `LEN(text)` | Length | `=LEN("HKDSE")` → 5 |
| `LEFT(text, n)` | First n chars | `=LEFT("HKDSE", 2)` → "HK" |
| `MID(text, start, len)` | Substring | `=MID("HKDSE", 2, 2)` → "KD" |
| `UPPER(text)` / `LOWER(text)` | Case | `=UPPER("dse")` → "DSE" |
| `TRIM(text)` | Strip extra spaces | `=TRIM("  HK  ")` → "HK" |

### Date functions

| Function | Description |
|----------|-------------|
| `TODAY()` | Today's date |
| `NOW()` | Current date + time |
| `YEAR(date)` `MONTH(date)` `DAY(date)` | Extract part |
| `DATEDIF(start, end, "Y")` | Years between |

## Worked examples

### Example A · Auto-grade a class

```text
=IF(C2>=80,"A",IF(C2>=70,"B",IF(C2>=60,"C","F")))
```

Better (cleaner with IFS):

```text
=IFS(C2>=80,"A", C2>=70,"B", C2>=60,"C", TRUE,"F")
```

### Example B · Count passes by class

```text
=COUNTIFS(B2:B100, "F.4A", C2:C100, ">=50")
```

### Example C · Lookup a grade table

| E | F |
|---|---|
| 80 | A |
| 70 | B |
| 60 | C |
| 0 | F |

```text
=VLOOKUP(C2, $E$2:$F$5, 2, TRUE)    ← TRUE = approximate match (use with sorted range)
```

## Common student mistakes

- Forgetting `$` and getting wrong totals after copying.
- Using `=` instead of `==` is fine here (spreadsheets use a single `=`).
- VLOOKUP with `TRUE` on an unsorted range → wrong matches.
- Mixing argument order in `IF(cond, false_value, true_value)` (the **then** comes first).

## Practice activity

Given a class roster with scores in `B2:B31`:

1. Write a formula in `D1` that shows the class average.
2. Write a formula in `D2` that shows the **number of students who scored ≥ 80**.
3. Write a formula in `E2` (copyable down) that shows each student's score as a percentage of the maximum.
4. Write a formula in `F2` that uses `VLOOKUP` to translate the score into a letter grade based on a 4-row grade table in `H2:I5`.

::: details Suggested answers
1. `=AVERAGE(B2:B31)`
2. `=COUNTIF(B2:B31, ">=80")`
3. `=B2/MAX($B$2:$B$31)*100`
4. `=VLOOKUP(B2, $H$2:$I$5, 2, TRUE)`
:::

## Exam-style question

> **Q (5 marks):** Cells `B2:B25` store the daily sales of an ice cream shop for one month. Write Excel formulas to compute:
>
> (a) The total monthly sales.
> (b) The average daily sales.
> (c) The number of days with sales above HK$2,000.
> (d) The day-of-month with the highest sales (assuming day numbers are in `A2:A25`).
> (e) A label "Bonus" if total sales exceed HK$60,000, else "Standard".

**Sample answers:**

(a) `=SUM(B2:B25)`
(b) `=AVERAGE(B2:B25)`
(c) `=COUNTIF(B2:B25, ">2000")`
(d) `=INDEX(A2:A25, MATCH(MAX(B2:B25), B2:B25, 0))`
(e) `=IF(SUM(B2:B25)>60000, "Bonus", "Standard")`

## Key takeaways

- `$` locks references. Use absolute / mixed refs when copying.
- Know the core families: math, logical, lookup, text, date.
- Choose the simplest formula that works.

➡️ Next: [4.3 Pivot Tables & What-if](./pivot-tables)
