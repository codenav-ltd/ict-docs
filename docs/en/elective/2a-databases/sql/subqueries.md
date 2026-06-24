# 2.9 · Sub-queries (one level)

> **Goal:** use a SELECT inside another SELECT. The HKEAA limits this to **one level**.

## What a sub-query is

A **sub-query** is a SELECT statement nested inside another SQL statement.

## Where you can use them

| Position | Example |
|----------|---------|
| In `WHERE` | `WHERE x IN (SELECT …)` |
| In `HAVING` | `HAVING SUM(x) > (SELECT AVG(x) FROM …)` |
| In `FROM` (subquery as table) | `SELECT … FROM (SELECT … ) AS t` |
| In `SELECT` | `SELECT x, (SELECT MAX(y) FROM …) AS m FROM …` |

## Three patterns to know

### Pattern 1 · Scalar sub-query (returns one value)

```sql
SELECT name, score
FROM   Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  score = (SELECT MAX(score) FROM Score WHERE subject = 'ICT');
```

### Pattern 2 · IN list

```sql
SELECT name
FROM   Student
WHERE  student_id IN (
         SELECT student_id FROM Score WHERE score >= 90
       );
```

### Pattern 3 · EXISTS check

```sql
SELECT name
FROM   Student s
WHERE  EXISTS (
         SELECT 1 FROM Score sc WHERE sc.student_id = s.student_id AND sc.score >= 90
       );
```

## Comparison: IN vs JOIN

The IN sub-query can usually be rewritten as a JOIN:

```sql
-- IN form
SELECT DISTINCT s.name
FROM   Student s
WHERE  s.student_id IN (SELECT student_id FROM Score WHERE score >= 90);

-- JOIN form
SELECT DISTINCT s.name
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;
```

Both produce the same answer. Use whichever is clearer for the situation.

## Correlated sub-query

A sub-query that references the outer query's row:

```sql
SELECT s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score = (
         SELECT MAX(sc2.score)
         FROM   Score sc2
         WHERE  sc2.student_id = s.student_id
       );
```

This returns each student's top-scoring subject. The inner SELECT runs once per outer row.

## "One sub-level only"

The HKEAA reference paper says sub-queries are **one level** for Paper 2A. So this is fine:

```sql
WHERE x IN (SELECT a FROM t1 WHERE b > 10)
```

But **two levels of nesting** are not required:

```sql
WHERE x IN (SELECT a FROM t1 WHERE b IN (SELECT c FROM t2))
```

You won't be expected to write such queries; if you see one in a problem, it can usually be rewritten with JOIN.

## Common student mistakes

- Putting a sub-query in `SELECT` when it belongs in `WHERE`.
- Returning multiple rows from a scalar sub-query (will error).
- Forgetting that NULL in a sub-query result makes `IN` and `NOT IN` behave surprisingly.
- Writing two-level nesting (over-complicated).

## Worked example · Above-average scorers

> "Students whose ICT score is above the class's average ICT score."

```sql
SELECT s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score > (
         SELECT AVG(sc2.score)
         FROM   Score sc2 INNER JOIN Student s2 ON sc2.student_id = s2.student_id
         WHERE  sc2.subject = 'ICT'
           AND  s2.class_id = s.class_id
       );
```

## Exam-style question

> **Q (5 marks):** Write SQL using `Student(student_id, name, class_id)` and `Score(student_id, subject, score)`:
>
> (a) Names of students who scored higher than the average score for ICT.
> (b) Names of students who have no recorded score (using a sub-query).

**Sample answer:**

```sql
-- (a)
SELECT DISTINCT s.name
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT'
  AND  sc.score > (SELECT AVG(score) FROM Score WHERE subject = 'ICT');

-- (b)
SELECT name
FROM   Student
WHERE  student_id NOT IN (SELECT student_id FROM Score);
```

## Key takeaways

- Sub-queries let you ask "rows matching the result of another query".
- Three common patterns: scalar, IN, EXISTS.
- Stay at one level; you can usually rewrite with JOIN.

➡️ Next: [2.10 Set Operations](./set-ops)
