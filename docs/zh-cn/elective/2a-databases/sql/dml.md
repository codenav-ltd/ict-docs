# 2.2 · INSERT, UPDATE, DELETE (DML)

> **Goal:** modify data safely using Data Manipulation Language (DML).

## INSERT

### Single row

```sql
INSERT INTO Student (student_id, name, class_id, dob)
VALUES (1006, 'Frank', 'F.4B', '2008-04-19');
```

### Multiple rows

```sql
INSERT INTO Student VALUES
  (1007, 'Grace', 'F.4A', '2008-06-21'),
  (1008, 'Henry', 'F.4B', '2007-12-05');
```

### Insert from SELECT

```sql
INSERT INTO StudentArchive
SELECT * FROM Student WHERE dob < '2008-01-01';
```

## UPDATE

```sql
UPDATE Student
SET    class_id = 'F.4A'
WHERE  student_id = 1006;
```

⚠️ **Always include `WHERE`** unless you intentionally want to change every row.

```sql
-- DANGER: updates every row!
UPDATE Student SET class_id = 'F.4A';
```

You can update multiple columns at once:

```sql
UPDATE Student
SET    name = 'Alicia Chan', dob = '2007-05-13'
WHERE  student_id = 1001;
```

## DELETE

```sql
DELETE FROM Student
WHERE       student_id = 1008;
```

⚠️ Same warning as UPDATE — without `WHERE` you delete everything.

```sql
-- DANGER: clears the table
DELETE FROM Student;
```

## Tips for safe DML

1. **Always begin with `SELECT`** matching the same `WHERE` to confirm the rows you'll affect.
   ```sql
   SELECT * FROM Student WHERE student_id = 1008;
   ```
2. **Wrap in a transaction** so you can `ROLLBACK`:
   ```sql
   BEGIN TRANSACTION;
     DELETE FROM Student WHERE student_id = 1008;
   -- Check the affected rows, then…
   COMMIT;
   ```
3. **Test in a sandbox first** ([SQL Books](https://sqlbooks.codenav.dev) gives you one per account).

## NULL handling

```sql
INSERT INTO Student (student_id, name) VALUES (1009, 'Ivy');
-- class_id and dob become NULL by default

UPDATE Student
SET    dob = NULL
WHERE  student_id = 1009;
```

To filter on NULL:

```sql
SELECT * FROM Student WHERE dob IS NULL;
SELECT * FROM Student WHERE dob IS NOT NULL;
```

⚠️ `WHERE dob = NULL` **never matches** — NULL is not equal to anything.

## Worked example · Manage classroom enrolment

Move Bob from F.4A to F.4B:

```sql
UPDATE Student SET class_id = 'F.4B' WHERE student_id = 1002;
```

Remove a withdrawn student:

```sql
DELETE FROM Student WHERE student_id = 1008;
```

Bulk price increase of 10% for premium books:

```sql
UPDATE Book SET price = price * 1.10 WHERE category = 'Premium';
```

## Common student mistakes

- Forgetting `WHERE` and modifying every row.
- Mixing INSERT column order vs VALUES.
- Forgetting that `=` for NULL doesn't work (use `IS NULL`).
- Updating data while a transaction lock blocks other users.

## Exam-style question

> **Q (5 marks):** Write SQL statements that:
> (a) Insert a new student with id 1010, name "Jack", class F.4B, dob 2008-09-10.
> (b) Change Alice (student_id 1001)'s class to F.4B.
> (c) Delete all students whose dob is before 2007-01-01.
> (d) Set the email field of all students currently NULL to 'unknown@school.edu.hk'.

**Sample answer:**

```sql
-- (a)
INSERT INTO Student (student_id, name, class_id, dob)
VALUES (1010, 'Jack', 'F.4B', '2008-09-10');

-- (b)
UPDATE Student SET class_id = 'F.4B' WHERE student_id = 1001;

-- (c)
DELETE FROM Student WHERE dob < '2007-01-01';

-- (d)
UPDATE Student SET email = 'unknown@school.edu.hk' WHERE email IS NULL;
```

## Key takeaways

- `INSERT`, `UPDATE`, `DELETE` modify rows.
- Always include `WHERE` for UPDATE / DELETE.
- Use transactions for safety; sandbox for practice.

➡️ Next: [2.3 SELECT & WHERE](./select)
