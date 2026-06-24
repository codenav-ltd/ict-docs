# 2.5 · ORDER BY & DISTINCT

> **Goal:** sort results and remove duplicates.

## ORDER BY

```sql
SELECT * FROM Student ORDER BY name;             -- ascending by default
SELECT * FROM Student ORDER BY name ASC;         -- explicit ascending
SELECT * FROM Student ORDER BY dob DESC;         -- descending
```

### Sort by multiple columns

```sql
SELECT * FROM Student
ORDER BY class_id ASC, name ASC;
```

Sorts by class_id first, then by name within each class.

### Sort by an expression or alias

```sql
SELECT name, score, score * 1.1 AS adjusted
FROM   Score
ORDER BY adjusted DESC;
```

## DISTINCT — remove duplicates

```sql
SELECT DISTINCT class_id FROM Student;
-- returns: 'F.4A', 'F.4B'  (each once)
```

Without DISTINCT, you'd see one row per student.

### DISTINCT with multiple columns

```sql
SELECT DISTINCT class_id, subject FROM Score;
-- one row for each unique (class, subject) pair
```

## LIMIT / TOP (not in the SQL-92 reference sheet, but commonly seen)

```sql
SELECT * FROM Score ORDER BY score DESC LIMIT 3;     -- MySQL/Postgres/SQLite
SELECT TOP 3 * FROM Score ORDER BY score DESC;       -- SQL Server
```

The HKEAA reference sheet doesn't list these; expect basic SELECT to suffice in 2A.

## Worked examples

### Top 3 ICT scorers

```sql
SELECT s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
ORDER BY sc.score DESC
LIMIT 3;
```

### Unique subjects offered

```sql
SELECT DISTINCT subject FROM Score;
```

### List classes alphabetically, then teachers alphabetically inside each

```sql
SELECT * FROM Class ORDER BY class_id ASC, teacher ASC;
```

## Common student mistakes

- Forgetting `ASC`/`DESC` for a specific column when sorting multiple.
- Using `DISTINCT` with `*` and assuming it deduplicates by one column (it considers all columns).
- Sorting before grouping (in GROUP BY queries) — the order of clauses matters.

## Exam-style question

> **Q (4 marks):** Write SQL on `Score(student_id, subject, score)`:
>
> (a) List the distinct subjects.
> (b) Show all scores sorted by subject ascending, then by score descending.

**Sample answer:**

```sql
-- (a)
SELECT DISTINCT subject FROM Score;

-- (b)
SELECT * FROM Score
ORDER BY subject ASC, score DESC;
```

## Key takeaways

- ORDER BY supports multiple columns + ASC / DESC each.
- DISTINCT considers all selected columns.

➡️ Next: [2.6 GROUP BY & HAVING](./group-by)
