# 1.4 · Indexes & Rollback

> **Goal:** explain what an index does, when to use one, and what rollback is for.

## Indexes

An **index** is a data structure that lets the DBMS find rows quickly without scanning the whole table.

### Without an index

```sql
SELECT * FROM Student WHERE name = 'Alice Chan';
```

The DBMS reads every row, comparing `name` — O(N).

### With an index on `name`

The index is sorted (or hashed). Lookups take O(log N) for B-tree or O(1) average for hash.

### Cost

- **Faster reads** (especially on WHERE / JOIN / ORDER BY).
- **Slower writes** — every INSERT/UPDATE/DELETE must update the index too.
- **Disk space** — indexes occupy storage.

### When to add an index

- Columns frequently used in `WHERE`, `JOIN`, `ORDER BY`.
- Columns with many distinct values (high cardinality).
- Primary keys are automatically indexed.
- Avoid indexing tiny tables (full scan is faster anyway).

### Syntax

```sql
CREATE INDEX idx_student_name ON Student(name);
DROP INDEX idx_student_name ON Student;
```

## Rollback

A **rollback** undoes one or more uncommitted changes, restoring the database to its previous consistent state. Part of **transactions**.

### Transaction model

```sql
BEGIN TRANSACTION;
   UPDATE Account SET balance = balance - 100 WHERE id = 1;
   UPDATE Account SET balance = balance + 100 WHERE id = 2;
COMMIT;     -- or ROLLBACK;
```

If the second UPDATE fails mid-way, the application can `ROLLBACK` to restore the first UPDATE.

### ACID properties

| Letter | Property | Meaning |
|--------|----------|---------|
| A | **Atomicity** | All or nothing |
| C | **Consistency** | Database always in a valid state |
| I | **Isolation** | Concurrent transactions don't interfere |
| D | **Durability** | Once committed, survives crashes |

### Common rollback uses

- Application code detects an error and calls `ROLLBACK`.
- Network drops mid-transaction — DBMS rolls back automatically.
- Operator notices a wrong update was just run — rolls back before commit.

## Exam-style question

> **Q (4 marks):** Explain what a database index is and one advantage and one disadvantage of adding indexes to a table. Then describe the purpose of `ROLLBACK`.

**Sample answer:**

- An **index** is a separate data structure that maps values of one or more columns to the rows containing them, allowing the DBMS to find matching rows quickly (typically O(log N) instead of O(N)).

- **Advantage**: dramatically speeds up reads filtered by the indexed columns (e.g. `WHERE name = 'Alice'`).
- **Disadvantage**: each INSERT/UPDATE/DELETE must also update the index, which slows down writes and consumes additional disk space.

- **ROLLBACK** undoes the changes made by the current transaction, restoring the database to the state it was in at the start of the transaction (or last commit). It is used when an error occurs mid-transaction or when an operator detects a mistake before COMMIT, ensuring the database remains consistent.

## Key takeaways

- Index = fast lookup at the cost of slower writes and disk.
- Rollback = "undo" for transactions, central to ACID.

## Chapter 1 wrap-up

You've finished the relational concepts. Now you understand the vocabulary used by every SQL statement.

➡️ Next chapter: [2 · SQL](../sql/)
