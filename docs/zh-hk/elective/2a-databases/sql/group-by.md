# 2.6 · GROUP BY & HAVING

> **Goal:** aggregate rows by group and filter the resulting groups.

## GROUP BY

`GROUP BY` collapses rows that share the same value(s) into one row, allowing aggregation.

```sql
SELECT class_id, COUNT(*) AS student_count
FROM   Student
GROUP BY class_id;
```

Output:

| class_id | student_count |
|----------|---------------|
| F.4A | 3 |
| F.4B | 2 |

## Aggregate functions

| Function | What it returns |
|----------|-----------------|
| `COUNT(*)` | Number of rows in the group |
| `COUNT(col)` | Number of non-null values in column |
| `SUM(col)` | Sum of numeric values |
| `AVG(col)` | Average |
| `MIN(col)` | Smallest value |
| `MAX(col)` | Largest value |

```sql
SELECT subject, COUNT(*) AS sat, AVG(score) AS avg, MAX(score) AS top
FROM   Score
GROUP BY subject;
```

## HAVING — filter on aggregates

```sql
SELECT subject, AVG(score) AS avg
FROM   Score
GROUP BY subject
HAVING AVG(score) >= 70;
```

> **WHERE filters rows before grouping. HAVING filters groups after aggregation.**

## Both WHERE and HAVING

```sql
SELECT class_id, COUNT(*) AS pass_count
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'      -- filters rows
GROUP BY class_id
HAVING COUNT(*) >= 2;          -- filters groups
```

## Order of clauses (memorise!)

```sql
SELECT  …                ← what to output
FROM    …                ← which tables
WHERE   …                ← filter rows
GROUP BY …               ← collapse into groups
HAVING  …                ← filter groups
ORDER BY …               ← sort final result
```

Mnemonic: **F W G H S O** ("Friends With Great Habits Sing On")

## Common student mistakes

- Putting an aggregate in `WHERE` instead of `HAVING`.
- Selecting non-aggregated, non-grouped columns:
  ```sql
  -- Error in strict SQL: "name" is not in GROUP BY
  SELECT name, AVG(score) FROM Score GROUP BY student_id;
  ```
- Forgetting that `COUNT(*)` includes NULL rows; `COUNT(col)` ignores NULLs.

## Worked example · Class report

> "For each class, show the number of students and the average ICT score, but only include classes with at least 2 ICT scores."

```sql
SELECT s.class_id, COUNT(*) AS cnt, AVG(sc.score) AS avg_score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
GROUP BY s.class_id
HAVING COUNT(*) >= 2
ORDER BY avg_score DESC;
```

## Exam-style question

> **Q (5 marks):** Write SQL on `Score(student_id, subject, score)`:
>
> (a) For each subject, show count of records and average score.
> (b) For each subject where the average is ≥ 75, show subject, max score and average.

**Sample answer:**

```sql
-- (a)
SELECT subject, COUNT(*) AS cnt, AVG(score) AS avg
FROM   Score
GROUP BY subject;

-- (b)
SELECT subject, MAX(score) AS top, AVG(score) AS avg
FROM   Score
GROUP BY subject
HAVING AVG(score) >= 75;
```

## Key takeaways

- GROUP BY collapses rows; aggregates summarise.
- WHERE before grouping; HAVING after.
- Order of clauses: `FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY`.

➡️ Next: [2.7 Aggregates & Built-in Functions](./functions)
