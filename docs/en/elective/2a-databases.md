# 2A · Databases

> **Curriculum hours:** 38 · **Paper weight:** ~12.5% of subject mark (half of Paper 2) · **Main language:** SQL (SQL-92 dialect).

This elective extends Module A's introduction to databases. You learn relational theory, design databases with ER diagrams, normalise them, and write SQL to query and modify them.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Relational Database Concepts | 6 |
| b | SQL | 18 |
| c | Database Design Methodology | 14 |

---

## a. Relational Database Concepts (6h)

### Key terms

| Term | Meaning |
|------|---------|
| **Entity** | A thing we store data about (Student, Course, Book) |
| **Attribute** | A property of an entity (name, age, ISBN) |
| **Domain** | The set of valid values for an attribute (age ∈ 0..150) |
| **Tuple / Row / Record** | One occurrence of an entity |
| **Relation / Table** | A collection of tuples sharing the same attributes |
| **Index** | A data structure that speeds up lookups, traded for write speed |

### Keys

| Key | Definition | Example |
|-----|------------|---------|
| **Candidate key** | Any attribute (or combination) that uniquely identifies a row | `student_id`, `(name, dob)` |
| **Primary key** | The chosen candidate key for a table | `student_id` |
| **Foreign key** | An attribute in one table that refers to a primary key in another | `class_id` in `Student` refers to `class_id` in `Class` |
| **Composite key** | A primary key made of two or more attributes | `(student_id, course_id)` in an Enrolment table |
| **Surrogate key** | An artificial key with no business meaning | `auto_increment id` |

### Integrity rules

| Rule | Meaning |
|------|---------|
| **Entity integrity** | Primary key may not be NULL |
| **Referential integrity** | A foreign key must reference an existing primary key (or be NULL if allowed) |
| **Domain integrity** | An attribute value must be within its domain |

### Why rollback?

A **rollback** undoes recent transactions to restore the database to a known good state — used when a transaction fails halfway, when data is corrupted, or when a user makes a mistake.

---

## b. SQL (18h) — the heart of Paper 2A

The HKEAA tests SQL based on the **SQL-92 standard** and provides this reserved-word reference sheet inside Paper 2A:

```
Constants : FALSE, TRUE
Operators : + − * / > < = >= <= <> AND OR NOT
Wildcards : %  _  
Aggregates: AVG, COUNT, MAX, MIN, SUM
String    : CHAR (CHR), CHAR_LENGTH (LEN), LOWER, UPPER,
            TRIM, SUBSTRING (SUBSTR/MID), VALUE (VAL),
            SPACE
Date      : DATE, DAY, MONTH, YEAR
Keywords  : ADD, ALL, ALTER, ANY, AS, ASC, BETWEEN, BY,
            CREATE, DELETE, DESC, DISTINCT, DROP, EXISTS,
            FROM, GROUP, HAVING, IN, INDEX,
            INNER JOIN, INSERT, INTEGER, INTERSECT, INTO,
            LEFT [OUTER] JOIN, LIKE, MINUS, NULL,
            RIGHT [OUTER] JOIN, FULL [OUTER] JOIN, ON,
            ORDER, SELECT, SET, TABLE, TO, UNION, UNIQUE,
            UPDATE, VALUES, VIEW, WHERE
```

You must be able to combine **all** of these to query **up to 3 tables** at once and write **one-level sub-queries**.

### CREATE, ALTER, DROP — DDL

```sql
CREATE TABLE Student (
  student_id   INTEGER     PRIMARY KEY,
  name         VARCHAR(50) NOT NULL,
  class_id     INTEGER,
  dob          DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

ALTER TABLE Student ADD email VARCHAR(100);
ALTER TABLE Student DROP COLUMN email;
DROP TABLE Student;
```

### INSERT, UPDATE, DELETE — DML

```sql
INSERT INTO Student (student_id, name, class_id, dob)
VALUES (1001, 'Alice', 4101, '2007-05-12');

UPDATE Student
SET    name = 'Alicia'
WHERE  student_id = 1001;

DELETE FROM Student
WHERE       student_id = 1001;
```

### SELECT — the core skill

```sql
SELECT   name, class_id
FROM     Student
WHERE    name LIKE 'A%'
   AND   dob >= '2007-01-01'
ORDER BY name ASC;
```

### Aggregation: GROUP BY + HAVING

```sql
SELECT   class_id, COUNT(*) AS cnt, AVG(score) AS avg_score
FROM     Score
GROUP BY class_id
HAVING   AVG(score) >= 60
ORDER BY avg_score DESC;
```

> **`WHERE` filters rows before grouping. `HAVING` filters groups after aggregation.**

### Joins (up to 3 tables)

```sql
-- Equi-join (the same as INNER JOIN with =)
SELECT s.name, c.class_name, sc.score
FROM   Student s
       INNER JOIN Class c  ON s.class_id = c.class_id
       INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.subject = 'ICT';

-- LEFT OUTER JOIN keeps every Student even if they have no Score row
SELECT s.name, sc.score
FROM   Student s
       LEFT OUTER JOIN Score sc ON s.student_id = sc.student_id;
```

| Join type | Behaviour |
|-----------|-----------|
| **INNER JOIN** / EQUI-JOIN | Rows that match in both tables |
| **LEFT [OUTER] JOIN** | All rows from left + matching from right (NULL otherwise) |
| **RIGHT [OUTER] JOIN** | All rows from right + matching from left |
| **FULL [OUTER] JOIN** | All rows from both sides |
| **NATURAL JOIN** | Joins on columns with the same name automatically (use carefully) |

### Sub-queries (one level)

```sql
-- All students whose score is above the class average
SELECT name
FROM   Student
WHERE  student_id IN (
         SELECT student_id
         FROM   Score
         WHERE  score > (SELECT AVG(score) FROM Score)
       );
```

The reference paper says **one sub-level only** — you do not need to nest sub-queries inside sub-queries.

### Operators and patterns

| Operator | Meaning | Example |
|----------|---------|---------|
| `BETWEEN a AND b` | inclusive range | `WHERE age BETWEEN 13 AND 19` |
| `IN (…)` | match any in list | `WHERE class_id IN (4101, 4102)` |
| `LIKE 'A%'` | starts with A | `%` = any number of chars |
| `LIKE 'A_'` | A then exactly 1 char | `_` = exactly one char |
| `IS NULL` / `IS NOT NULL` | nullness | `WHERE email IS NULL` |

### Views

```sql
CREATE VIEW HighScorers AS
SELECT s.student_id, s.name, sc.score
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
WHERE  sc.score >= 90;

SELECT * FROM HighScorers;
```

Views look like a virtual table — useful for hiding complexity and access control.

### Built-in functions

```sql
SELECT UPPER(name),
       SUBSTRING(name, 1, 3),
       CHAR_LENGTH(name)
FROM   Student;

SELECT YEAR(dob), MONTH(dob), DAY(dob)
FROM   Student;
```

### Set operations

```sql
SELECT student_id FROM Math_Class
UNION
SELECT student_id FROM Physics_Class;       -- in either class

SELECT student_id FROM Math_Class
INTERSECT
SELECT student_id FROM Physics_Class;       -- in BOTH classes

SELECT student_id FROM Math_Class
MINUS
SELECT student_id FROM Physics_Class;       -- in Math only
```

::: tip Practise these on a real database
Theory only sticks once you run a query, see the result and tweak it. Open **[SQL Books](https://sqlbooks.codenav.dev)** and create a sandbox like `dse_demo`. Copy the snippets above, run them, then try variations: change `WHERE` clauses, swap `INNER` for `LEFT`, add a `GROUP BY`. Each account also has built-in **SQL Books courses** for SELECT → WHERE → JOIN → sub-queries that map cleanly onto this elective.
:::

---

## c. Database Design Methodology (14h)

### ER Diagram symbols (HKEAA standard)

```
Entity:        ┌─────────────┐
               │   Student   │
               └─────────────┘

Attribute:        ◯ name

Key attribute:    ◉ student_id  (underlined in printed diagrams)

Relationship:  ◇ enrols ◇

Cardinality:
  1 ────── 1       one-to-one
  1 ────── M       one-to-many
  M ────── N       many-to-many

Participation:
  ── single line   optional
  ══ double line   mandatory
```

### Worked example · School library

> A school library lends Books to Students. Each book may be borrowed many times over the years, and a student may borrow many books at once.

Entities and relationships:

- **Student** — student_id, name, class_id
- **Book** — isbn, title, author, copies
- **Loan** (M:N → resolve into a relationship table) — loan_id, student_id, isbn, loan_date, return_date

Many-to-many becomes two one-to-many through an associative table:

```
Student ──< Loan >── Book
```

### Normalisation up to 3NF

| Form | Rule |
|------|------|
| **1NF** | Each attribute holds atomic values; no repeating groups |
| **2NF** | 1NF + every non-key attribute depends on the whole primary key (relevant when PK is composite) |
| **3NF** | 2NF + no non-key attribute depends on another non-key attribute (no transitive dependency) |

### Denormalisation

Sometimes we deliberately store **redundant** data to speed up reads (e.g. caching a customer's full name on the order). Drawbacks: more storage, risk of inconsistency. Used when reads vastly outnumber writes.

### Access rights for data privacy

- Grant minimum required privileges (principle of least privilege)
- Separate roles: admin, teacher, student
- Use VIEW to hide sensitive columns
- Apply `GRANT SELECT ON view_name TO user;` in real DBMS

---

## Common mistakes

- Forgetting that `HAVING` is required when filtering on aggregates.
- Joining without the `ON` clause → Cartesian product.
- Confusing `LEFT JOIN` and `RIGHT JOIN` direction.
- Putting the sub-query inside `SELECT` when it belongs in `WHERE`.
- Drawing M:N relationship without resolving it during table design.

## Past-paper hotspots

- Read a CREATE TABLE statement and identify a constraint violation.
- Write SQL for a 2- or 3-table report (with `JOIN` + `GROUP BY` + `HAVING`).
- Convert a scenario into an ER diagram, then to relational schema.
- Normalise a given un-normalised table up to 3NF.

➡️ Next: [2B · Web Application Development](./2b-web)
