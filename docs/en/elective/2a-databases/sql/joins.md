# 2.8 · JOIN (up to 3 tables)

> **Goal:** combine data from multiple tables. The most-tested SQL topic in Paper 2A.

## Why JOIN

Relational databases split data across tables to avoid redundancy. To answer cross-table questions, you must **join** the tables back together using shared keys.

## INNER JOIN

Returns rows where the join condition matches in **both** tables.

```sql
SELECT s.name, sc.subject, sc.score
FROM   Student s
       INNER JOIN Score sc ON s.student_id = sc.student_id;
```

| s.name | sc.subject | sc.score |
|--------|------------|----------|
| Alice  | ICT        | 86 |
| Alice  | Maths      | 78 |
| Bob    | ICT        | 72 |
| …      | …          | … |

## EQUI-JOIN

An INNER JOIN where the condition is an equality. Syntactically identical to the above.

## NATURAL JOIN

Joins on columns with **the same name** in both tables automatically:

```sql
SELECT name, subject, score
FROM   Student NATURAL JOIN Score;
-- Joins automatically on student_id (the only shared column)
```

⚠️ NATURAL JOIN is **dangerous** in real schemas because adding a same-named column later may break queries silently. Prefer explicit `ON`.

## OUTER JOINs

| Type | Behaviour |
|------|-----------|
| `LEFT [OUTER] JOIN` | All rows from left table; matching rows from right (NULL if none) |
| `RIGHT [OUTER] JOIN` | All rows from right; matching from left |
| `FULL [OUTER] JOIN` | All rows from both sides |

### LEFT OUTER JOIN example

> List every student and their ICT score, including students with no ICT score.

```sql
SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc
                    ON s.student_id = sc.student_id
                   AND sc.subject = 'ICT';
```

Students with no ICT score appear with `sc.score = NULL`.

## Joining 3 tables

The HKEAA explicitly says **up to 3 tables**.

```sql
SELECT s.name, c.teacher, sc.subject, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC;
```

Diagram of the joins:

```
Student ─── class_id ──→ Class
   │
   └─── student_id ──→ Score
```

## Aliasing tables (best practice)

Use short aliases to keep queries readable:

```sql
SELECT s.name, c.teacher, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id  = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id;
```

## Common pitfalls

### 1 · Missing ON → Cartesian product

```sql
SELECT * FROM Student, Score;     -- 5 × 10 = 50 rows!
```

Always include `ON`:

```sql
SELECT * FROM Student s, Score sc WHERE s.student_id = sc.student_id;
```

Or use explicit JOIN syntax:

```sql
SELECT * FROM Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 2 · Wrong join type

If you need every student (even without any score), use LEFT OUTER JOIN — INNER will drop them.

### 3 · Confusing direction

LEFT keeps all rows from the table on the left of `JOIN`. RIGHT keeps all rows from the right.

## Worked example · Top scorers per class

```sql
SELECT s.class_id, s.name, sc.score
FROM   Student s
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score = (
        SELECT MAX(sc2.score)
        FROM   Score sc2 INNER JOIN Student s2 ON sc2.student_id = s2.student_id
        WHERE  sc2.subject = 'ICT' AND s2.class_id = s.class_id
       );
```

(Uses a correlated sub-query — see next sub-topic.)

## Exam-style question

> **Q (6 marks):** Write SQL queries using `Student(student_id, name, class_id)`, `Class(class_id, teacher)`, `Score(student_id, subject, score)`:
>
> (a) For each student, show their name and class teacher's name.
> (b) List students with no recorded score.
> (c) For each class, average ICT score, sorted descending.

**Sample answer:**

```sql
-- (a)
SELECT s.name, c.teacher
FROM   Student s INNER JOIN Class c ON s.class_id = c.class_id;

-- (b)
SELECT s.name
FROM   Student s LEFT OUTER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.student_id IS NULL;

-- (c)
SELECT s.class_id, AVG(sc.score) AS avg_ict
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
GROUP  BY s.class_id
ORDER  BY avg_ict DESC;
```

## Key takeaways

- INNER JOIN = matches only.
- LEFT / RIGHT / FULL OUTER JOIN = keep one or both sides regardless.
- Use aliases, always specify ON.

➡️ Next: [2.9 Sub-queries](./subqueries)
