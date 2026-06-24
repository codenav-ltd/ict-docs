# 2.3 · SELECT & WHERE

> **Goal:** read data effectively using SELECT and filter rows with WHERE.

## SELECT — pick columns

```sql
SELECT * FROM Student;                   -- every column
SELECT name, class_id FROM Student;      -- specific columns
SELECT name AS pupil_name FROM Student;  -- alias
```

## WHERE — filter rows

```sql
SELECT * FROM Student WHERE class_id = 'F.4A';
SELECT * FROM Student WHERE dob >= '2008-01-01';
SELECT * FROM Score WHERE subject = 'ICT' AND score >= 80;
SELECT * FROM Student WHERE name LIKE 'A%';
```

## Comparison operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `=` | Equal | `score = 100` |
| `<>` | Not equal (standard SQL) | `class_id <> 'F.4B'` |
| `>` `<` `>=` `<=` | Comparisons | `score >= 50` |
| `BETWEEN a AND b` | Inclusive range | `score BETWEEN 70 AND 90` |
| `IN (...)` | Member of list | `class_id IN ('F.4A','F.4C')` |
| `LIKE pattern` | Pattern match | `name LIKE 'A%'` |
| `IS NULL` / `IS NOT NULL` | Null test | `email IS NULL` |

## Logical operators

| Operator | Meaning |
|----------|---------|
| `AND` | Both conditions true |
| `OR` | At least one true |
| `NOT` | Negation |

Combine with parentheses for clarity:

```sql
SELECT *
FROM   Student
WHERE  (class_id = 'F.4A' AND dob >= '2008-01-01')
   OR  class_id = 'F.4C';
```

## Worked examples

### List all F.4A students

```sql
SELECT student_id, name FROM Student WHERE class_id = 'F.4A';
```

### ICT scores above 80

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc                   -- (use JOIN in 2.8)
WHERE  s.student_id = sc.student_id
  AND  sc.subject = 'ICT'
  AND  sc.score > 80;
```

### Students born in 2007

```sql
SELECT name, dob FROM Student WHERE dob BETWEEN '2007-01-01' AND '2007-12-31';
SELECT name, dob FROM Student WHERE YEAR(dob) = 2007;        -- simpler with YEAR()
```

### Names starting with A or B

```sql
SELECT name FROM Student WHERE name LIKE 'A%' OR name LIKE 'B%';
```

## How to predict output by hand

1. **FROM** — write down all rows of the table.
2. **WHERE** — cross out rows that fail the condition.
3. **SELECT** — keep only requested columns.

This three-step trace earns marks on "what is the output" questions.

## Common student mistakes

- Comparing with `=` for NULL (use `IS NULL`).
- Single quotes for strings, double quotes for identifiers in standard SQL (most DBMS accept either, but be consistent).
- Forgetting `AND` between conditions (`WHERE a=1 b=2` → syntax error).

## Exam-style question

> **Q (5 marks):** Write SQL queries against `Student(student_id, name, class_id, dob)` and `Score(student_id, subject, score)`:
>
> (a) List names of F.4A students.
> (b) List subjects where any student scored 100.
> (c) List students born between 2007-01-01 and 2008-12-31 whose name starts with 'A'.

**Sample answer:**

```sql
-- (a)
SELECT name FROM Student WHERE class_id = 'F.4A';

-- (b)
SELECT DISTINCT subject FROM Score WHERE score = 100;

-- (c)
SELECT name, dob
FROM   Student
WHERE  dob BETWEEN '2007-01-01' AND '2008-12-31'
  AND  name LIKE 'A%';
```

## Key takeaways

- SELECT picks columns; WHERE filters rows.
- Use the right operator: `=`, `BETWEEN`, `IN`, `LIKE`, `IS NULL`.
- AND / OR / NOT combine conditions.

➡️ Next: [2.4 Operators & LIKE / IN](./operators)
