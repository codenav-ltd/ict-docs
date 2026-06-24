# Chapter 2 · SQL

> **Hours:** 18 · **The heart of Elective 2A.** Master this and you bank half the elective's marks.

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

## Sub-topics (split for clarity)

| # | Topic |
|---|-------|
| 2.1 | [CREATE, ALTER, DROP (DDL)](./ddl) |
| 2.2 | [INSERT, UPDATE, DELETE (DML)](./dml) |
| 2.3 | [SELECT & WHERE](./select) |
| 2.4 | [Operators & LIKE / IN](./operators) |
| 2.5 | [ORDER BY & DISTINCT](./ordering) |
| 2.6 | [GROUP BY & HAVING](./group-by) |
| 2.7 | [Aggregates & built-in functions](./functions) |
| 2.8 | [JOIN (up to 3 tables)](./joins) |
| 2.9 | [Sub-queries (one level)](./subqueries) |
| 2.10 | [Set operations (UNION, INTERSECT, MINUS)](./set-ops) |
| 2.11 | [Views](./views) |

## Practice setup

Throughout this chapter we use the following demo dataset. **Paste it into [SQL Books](https://sqlbooks.codenav.dev)** to follow along.

```sql
CREATE TABLE Class (
  class_id   VARCHAR(10) PRIMARY KEY,
  teacher    VARCHAR(50)
);

CREATE TABLE Student (
  student_id INTEGER     PRIMARY KEY,
  name       VARCHAR(50) NOT NULL,
  class_id   VARCHAR(10),
  dob        DATE,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
);

CREATE TABLE Score (
  student_id INTEGER,
  subject    VARCHAR(30),
  score      INTEGER CHECK (score BETWEEN 0 AND 100),
  PRIMARY KEY (student_id, subject),
  FOREIGN KEY (student_id) REFERENCES Student(student_id)
);

INSERT INTO Class VALUES
  ('F.4A', 'Mr. Lee'),
  ('F.4B', 'Ms. Wong');

INSERT INTO Student VALUES
  (1001, 'Alice', 'F.4A', '2007-05-12'),
  (1002, 'Bob',   'F.4A', '2008-03-22'),
  (1003, 'Carol', 'F.4B', '2007-11-08'),
  (1004, 'David', 'F.4B', '2008-01-30'),
  (1005, 'Eve',   'F.4A', '2007-07-15');

INSERT INTO Score VALUES
  (1001, 'ICT',  86), (1001, 'Maths', 78),
  (1002, 'ICT',  72), (1002, 'Maths', 65),
  (1003, 'ICT',  91), (1003, 'Maths', 88),
  (1004, 'ICT',  55), (1004, 'Maths', 60),
  (1005, 'ICT',  78), (1005, 'Maths', 80);
```

➡️ Start: [2.1 CREATE, ALTER, DROP](./ddl)
