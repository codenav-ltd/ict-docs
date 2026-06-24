# 2.10 · Set Operations — UNION, INTERSECT, MINUS

> **Goal:** combine result sets with set algebra.

## The three operations

| Operation | Returns |
|-----------|---------|
| `UNION` | Rows in EITHER set (duplicates removed) |
| `UNION ALL` | Rows in either set (duplicates kept) |
| `INTERSECT` | Rows in BOTH sets |
| `MINUS` (or `EXCEPT`) | Rows in first set but NOT in second |

## Rules

- Both queries must have the **same number of columns**.
- Corresponding columns must have **compatible data types**.
- The column names in the result come from the first query.

## Examples

Suppose two tables of class enrolment lists:

```sql
CREATE TABLE Math (student_id INTEGER, name VARCHAR(50));
CREATE TABLE Physics (student_id INTEGER, name VARCHAR(50));
```

### Students taking either Math or Physics

```sql
SELECT student_id, name FROM Math
UNION
SELECT student_id, name FROM Physics;
```

### Students taking both Math AND Physics

```sql
SELECT student_id, name FROM Math
INTERSECT
SELECT student_id, name FROM Physics;
```

### Students taking Math but NOT Physics

```sql
SELECT student_id, name FROM Math
MINUS                                  -- or EXCEPT in standard SQL
SELECT student_id, name FROM Physics;
```

## UNION vs UNION ALL

```sql
SELECT 1 UNION SELECT 1;           -- 1 row
SELECT 1 UNION ALL SELECT 1;       -- 2 rows
```

`UNION` deduplicates (slower). `UNION ALL` keeps everything (faster).

## DBMS variations

| Operation | MySQL | PostgreSQL | SQL Server | Oracle |
|-----------|-------|------------|-----------|--------|
| UNION | ✓ | ✓ | ✓ | ✓ |
| INTERSECT | ✓ (8.0+) | ✓ | ✓ | ✓ |
| MINUS | uses NOT IN | EXCEPT | EXCEPT | MINUS |

The HKEAA reference sheet uses **MINUS** — the keyword recognised by SQL-92.

## Worked example · Combine reports

> "All distinct subjects offered in F.4A OR F.4B."

```sql
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4A'
UNION
SELECT subject FROM Score INNER JOIN Student ON Score.student_id = Student.student_id
WHERE  Student.class_id = 'F.4B';
```

## Common student mistakes

- Different column counts in the two queries → error.
- Misaligned data types (string vs int).
- Forgetting that UNION removes duplicates by default.

## Exam-style question

> **Q (4 marks):** Two clubs maintain member lists in `Chess(member_id, name)` and `Robotics(member_id, name)`. Write SQL to find:
>
> (a) Members of EITHER club.
> (b) Members of BOTH clubs.
> (c) Members of Chess only.

**Sample answer:**

```sql
-- (a)
SELECT member_id, name FROM Chess
UNION
SELECT member_id, name FROM Robotics;

-- (b)
SELECT member_id, name FROM Chess
INTERSECT
SELECT member_id, name FROM Robotics;

-- (c)
SELECT member_id, name FROM Chess
MINUS
SELECT member_id, name FROM Robotics;
```

## Key takeaways

- UNION / INTERSECT / MINUS combine two compatible result sets.
- Column count and type must match.
- UNION removes duplicates; UNION ALL keeps them.

➡️ Next: [2.11 Views](./views)
