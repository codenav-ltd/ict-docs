# 4.3 · Pivot Tables & What-if Analysis

> **Goal:** describe what a pivot table does, when to use one, and how "what-if" analysis supports decision making.

## What a pivot table is

A **pivot table** is an interactive tool that takes a long list of records and **summarises** it by rearranging fields into rows, columns and aggregations.

### Source data example

```
Date         Class   Subject   Mark
2026-01-15   F.4A    ICT       85
2026-01-15   F.4A    Maths     72
2026-01-15   F.4B    ICT       91
2026-01-15   F.4B    Maths     68
2026-02-12   F.4A    ICT       88
2026-02-12   F.4A    Maths     75
2026-02-12   F.4B    ICT       80
2026-02-12   F.4B    Maths     74
```

### Pivot output: average marks by class × subject

|   | ICT | Maths |
|---|-----|-------|
| F.4A | 86.5 | 73.5 |
| F.4B | 85.5 | 71 |

The same raw rows, rearranged into a 2×2 summary. Click and drag fields to change the view in seconds.

## Pivot table anatomy

| Drop zone | Purpose |
|-----------|---------|
| **Rows** | Group rows by these field values |
| **Columns** | Group columns by these field values |
| **Values** | Aggregate (sum, count, average, min, max, etc.) |
| **Filters** | Restrict the data shown |

## Why pivot tables matter

1. **Speed** — produce a summary in seconds rather than writing nested formulas.
2. **Interactivity** — drag fields to explore "what if I group by class instead?"
3. **No data duplication** — the source table is untouched.
4. **Pivot charts** turn the summary into a visual instantly.

## Worked example · Sales analysis

A small shop logs every sale: `Date, Product, Region, Quantity, Revenue`.

Questions a pivot table can answer:

- **Revenue by product** — drag Product to Rows, Revenue to Values (sum).
- **Quantity by region by month** — drag Region to Rows, Month to Columns, Quantity to Values.
- **Top 5 selling products** — sort the pivot by Revenue descending.

Without a pivot table you would write dozens of `SUMIF`, `COUNTIF`, or write a SQL query. Pivot tables collapse the work.

## What-if analysis

**What-if** analysis lets you change one or more inputs to see how the output changes — useful for business forecasting, budgeting, and "what if next year's tuition rises 10%?" scenarios.

### Three classic what-if tools (Excel)

| Tool | Use |
|------|-----|
| **Goal Seek** | Set a target output, find the input that achieves it |
| **Scenario Manager** | Save several named scenarios (optimistic/pessimistic) and compare |
| **Data Table** | Vary 1 or 2 inputs across a range and see all results in a grid |

### Goal Seek example

> "I want to score 80 average across 5 subjects. I already have marks for 4 subjects. What do I need on the 5th?"

Set up:

```
A1: Subject1  90
A2: Subject2  75
A3: Subject3  82
A4: Subject4  68
A5: Subject5  ?
A6: =AVERAGE(A1:A5)
```

Goal Seek → "Set `A6` to 80 by changing `A5`" → answer 85.

### Scenario Manager example

Three scenarios for next year's club budget:

| Scenario | Income | Sponsor | Net |
|----------|--------|---------|-----|
| Optimistic | 15,000 | 5,000 | +20,000 |
| Realistic | 10,000 | 2,000 | +12,000 |
| Pessimistic | 6,000 | 0 | +6,000 |

The Scenario Manager keeps all three on file; pick one to apply with a click.

### Data Table example

Vary monthly contribution from $500 to $5,000 and show the savings after 12 months. Excel fills the whole grid in one go.

## When to use which

| Need | Tool |
|------|------|
| Summarise a long list | Pivot table |
| Find the input that hits a target output | Goal Seek |
| Compare a few named scenarios | Scenario Manager |
| See output across a range of inputs | Data Table |

## Common student mistakes

- Confusing a pivot table with a regular sorted table — pivot tables **aggregate**, not just rearrange.
- Forgetting to **refresh** the pivot after editing source data.
- Treating Goal Seek as "what if I want any answer to change anything" — it solves **one cell for one input**.
- Writing 10 nested `IF` statements when a pivot or `IFS` would do.

## Practice activity

Imagine the source table:

```
StudentID Class  Subject Term Score
1001      F.4A   ICT      1    78
1001      F.4A   Maths    1    82
1001      F.4A   ICT      2    85
1002      F.4B   ICT      1    65
…
```

Sketch a pivot table that shows:

- **Rows**: Class
- **Columns**: Term
- **Values**: Average of Score (filtered to Subject = ICT)

You should be able to verbalise the answer to a teacher in 10 seconds: "Drag Class to Rows, Term to Columns, Score to Values as Average, Subject to Filter set to ICT."

## Exam-style question

> **Q (5 marks):** Explain how a pivot table can help a school principal analyse 12 months of canteen sales recorded as one row per transaction. Also describe one suitable "what-if" scenario the principal might explore.

**Sample answer:**

A pivot table summarises the transaction list by relevant dimensions — for example, **month** as rows and **menu category** (rice, drinks, snacks) as columns, with **sum of revenue** as the aggregated value. The principal can immediately see which months and categories generated most revenue and identify trends (e.g. drink sales spike in summer). Drag-and-drop allows the principal to **interactively explore** alternative views without rewriting any formulas, and the result can be converted into a pivot chart for presentations.

A suitable **what-if scenario**: the principal expects rice ingredient costs to rise 8% next term. Using Excel's **Scenario Manager** or **Data Table**, the principal can vary the cost factor and observe the projected impact on monthly net profit, helping decide whether to adjust menu prices.

## Key takeaways

- Pivot tables **summarise** large datasets by rearranging fields.
- They are interactive — drag and drop fields to explore new views.
- **What-if** tools: Goal Seek (target → input), Scenario Manager (named alternatives), Data Table (input range → output grid).

➡️ Next: [4.4 Database Basics with a DBMS](./database-basics)
