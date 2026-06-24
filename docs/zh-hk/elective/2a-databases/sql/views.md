# 2.11 · Views

> **Goal:** create and use views; explain what they're good for.

## What a view is

A **view** is a saved SELECT statement that behaves like a virtual table. You can query a view as if it were a real table; the DBMS runs the underlying SELECT each time.

## Create a view

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.subject, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;
```

## Use a view

```sql
SELECT * FROM HighScorers;
SELECT name FROM HighScorers WHERE subject = 'ICT';
```

## Update / Drop a view

```sql
DROP VIEW HighScorers;
CREATE OR REPLACE VIEW HighScorers AS …;     -- DBMS-specific
```

## Why use views

1. **Hide complexity** — application code SELECTs from `HighScorers` rather than re-writing a 3-table JOIN.
2. **Access control** — grant read access on a view exposing only public columns, not the underlying table.
3. **Consistent reports** — one definition used everywhere ensures everyone sees the same numbers.
4. **Backwards compatibility** — if you rename/redesign a table, you can keep the old name as a view.

## Limits

- Views with aggregates or joins may not be updateable through `UPDATE`/`INSERT`.
- Each query against the view re-runs the underlying SELECT (use **materialised views** for caching, but those are beyond syllabus).

## Example · Privacy through views

> The Student table has a column `medical_notes`. We don't want teachers to see it.

```sql
-- Underlying table has all columns
CREATE TABLE Student (
  student_id  INTEGER PRIMARY KEY,
  name        VARCHAR(50),
  class_id    VARCHAR(10),
  dob         DATE,
  medical_notes TEXT
);

-- Public view exposes only safe columns
CREATE VIEW StudentPublic AS
SELECT student_id, name, class_id, dob FROM Student;

-- Grant teachers access to the view only
GRANT SELECT ON StudentPublic TO teacher_role;
```

Teachers can now SELECT student details without ever seeing the medical notes.

## Worked example · Combined view

```sql
CREATE VIEW ClassICT AS
SELECT s.class_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

-- Easy queries against the view
SELECT class_id, AVG(score) AS avg_ict FROM ClassICT GROUP BY class_id;
```

## Common student mistakes

- Confusing a view with a real table (views don't store data, they re-run their SELECT).
- Trying to insert into a complex view.
- Creating views with `SELECT *` — fragile if underlying schema changes.

## Exam-style question

> **Q (5 marks):** A school librarian frequently runs the report "all overdue loans showing member name and book title". Suggest a view that simplifies this, and one access-rights advantage of using the view.

**Sample answer:**

```sql
CREATE VIEW OverdueLoans AS
SELECT m.member_id, m.name AS member_name,
       b.isbn, b.title AS book_title,
       l.loan_date, l.due_date
FROM   Loan l
       INNER JOIN Member m ON l.member_id = m.member_id
       INNER JOIN Book   b ON l.isbn      = b.isbn
WHERE  l.return_date IS NULL
  AND  l.due_date    < CURRENT_DATE;
```

Then `SELECT * FROM OverdueLoans;` replaces the 3-table JOIN.

**Access-rights advantage**: the school can grant the librarian `SELECT` on `OverdueLoans` only, hiding sensitive columns like member's phone number or borrowing history detail that live in the underlying tables.

## Key takeaways

- Views = saved queries used like tables.
- Hide complexity, enforce access, ensure consistency.
- Not all views are updateable.

## Chapter 2 wrap-up

You've now seen the **entire** SQL surface area of Elective 2A. Self-test:

- DDL: `CREATE TABLE` with PK, FK, NOT NULL, CHECK.
- DML: INSERT, UPDATE, DELETE with WHERE.
- SELECT: WHERE, ORDER BY, GROUP BY, HAVING.
- JOIN: INNER + LEFT/RIGHT/FULL OUTER, up to 3 tables.
- Sub-queries: scalar, IN, EXISTS, one level.
- Set ops: UNION, INTERSECT, MINUS.
- Views: create, drop, use for privacy.

::: tip Drill the chapter
Open [SQL Books](https://sqlbooks.codenav.dev), paste the demo schema from this chapter's overview, and run **every example query**. Then make one variation per query. After 90 minutes of this you'll know SQL cold.
:::

➡️ Next chapter: [3 · Database Design Methodology](../design/)
