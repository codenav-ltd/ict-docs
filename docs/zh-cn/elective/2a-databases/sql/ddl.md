# 2.1 · CREATE, ALTER, DROP (DDL)

> **Goal:** define database structure using Data Definition Language (DDL).

## Three DDL verbs

| Verb | Purpose |
|------|---------|
| `CREATE` | Create new database objects (tables, views, indexes) |
| `ALTER` | Modify existing objects |
| `DROP` | Delete objects |

## CREATE TABLE

```sql
CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  email      VARCHAR(100) UNIQUE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);
```

Anatomy:

| Part | Purpose |
|------|---------|
| `INTEGER`, `VARCHAR(n)`, `DATE`, `BOOLEAN`, `DECIMAL(p,s)` | Data types |
| `PRIMARY KEY` | Marks the unique row identifier |
| `NOT NULL` | Rejects NULL |
| `UNIQUE` | Rejects duplicates (in addition to PK uniqueness) |
| `CHECK (cond)` | Reject rows failing condition |
| `DEFAULT value` | Insert this if not provided |
| `FOREIGN KEY … REFERENCES …` | Enforce referential integrity |

## Common data types

| Type | Use |
|------|-----|
| `INTEGER` | Whole numbers |
| `DECIMAL(p, s)` | Fixed-point (`DECIMAL(8,2)` for money) |
| `VARCHAR(n)` | Variable-length string up to n chars |
| `CHAR(n)` | Fixed-length string |
| `DATE` / `TIME` / `DATETIME` | Temporal |
| `BOOLEAN` | True / False (some DBMS use `BIT`) |

## ALTER TABLE

```sql
ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student ADD CONSTRAINT chk_dob CHECK (dob > '1900-01-01');
ALTER TABLE Student DROP COLUMN email;
ALTER TABLE Student RENAME TO Pupil;
```

ALTER lets you evolve a schema without losing data.

## DROP

```sql
DROP TABLE Student;
DROP VIEW HighScorers;
DROP INDEX idx_student_name;
```

Beware: `DROP TABLE` is irreversible without backup.

## Worked example · Create the demo schema

(Run in [SQL Books](https://sqlbooks.codenav.dev) to follow along.)

```sql
CREATE TABLE Class (
  class_id VARCHAR(10) PRIMARY KEY,
  teacher  VARCHAR(50)
);

CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);
```

## Common student mistakes

- Forgetting `NOT NULL` on columns that must always have a value.
- Using `VARCHAR` for numeric IDs that you'll do arithmetic on.
- Defining FK before the referenced table exists.
- Trying to `ALTER TABLE` while a process has the table locked.

## Exam-style question

> **Q (5 marks):** Write SQL to create a `Book` table with columns: isbn (PK, 13 chars), title (required, max 200 chars), author (max 100 chars), price (positive decimal with 2 decimal places, default 0), publication_date.

**Sample answer:**

```sql
CREATE TABLE Book (
  isbn             CHAR(13) PRIMARY KEY,
  title            VARCHAR(200) NOT NULL,
  author           VARCHAR(100),
  price            DECIMAL(8,2) DEFAULT 0 CHECK (price >= 0),
  publication_date DATE
);
```

## Key takeaways

- `CREATE / ALTER / DROP` form DDL.
- Pick types carefully; declare keys and constraints.
- Test in a sandbox before applying to production.

➡️ Next: [2.2 INSERT, UPDATE, DELETE](./dml)
