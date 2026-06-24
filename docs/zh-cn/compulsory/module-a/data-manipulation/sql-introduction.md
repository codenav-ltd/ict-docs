# 4.5 · Reading Simple SQL

> **Goal:** read and predict the output of basic `SELECT` queries — the level expected in Paper 1.

## Why "reading" SQL?

At Module A level you are **not** required to write complex SQL — that comes in Elective 2A. But Paper 1 routinely asks you to **read** a short `SELECT` and predict its output. Even if you don't take 2A, this skill earns you marks.

## SQL's job in one sentence

> **SQL** (Structured Query Language) is the language used to talk to relational databases. Most operations involve `SELECT … FROM … WHERE …`.

## The five clauses you must recognise

| Clause | Purpose |
|--------|---------|
| `SELECT columns` | Which columns to show |
| `FROM table` | Which table to read |
| `WHERE condition` | Filter rows |
| `ORDER BY column` | Sort the output |
| `GROUP BY column` | Aggregate by group |

We focus on the first four here. `GROUP BY` is touched on in 2A.

## Demo dataset

```sql
CREATE TABLE student (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  class VARCHAR(10),
  score INTEGER
);

INSERT INTO student VALUES
  (1001, 'Alice', 'F.4A', 86),
  (1002, 'Bob',   'F.4A', 72),
  (1003, 'Carol', 'F.4B', 91),
  (1004, 'David', 'F.4B', 55),
  (1005, 'Eve',   'F.4A', 78);
```

You can paste this into **[SQL Books](https://sqlbooks.codenav.dev)** and run every example below in your browser sandbox — no installation needed.

## Example queries

### Q1 · Everyone

```sql
SELECT * FROM student;
```

Output:

```
id    name   class  score
1001  Alice  F.4A   86
1002  Bob    F.4A   72
1003  Carol  F.4B   91
1004  David  F.4B   55
1005  Eve    F.4A   78
```

### Q2 · Selected columns

```sql
SELECT name, score FROM student;
```

```
name   score
Alice  86
Bob    72
Carol  91
David  55
Eve    78
```

### Q3 · With a filter

```sql
SELECT name, score
FROM   student
WHERE  score >= 80;
```

```
name   score
Alice  86
Carol  91
```

### Q4 · Two conditions

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
  AND  score >= 80;
```

```
name   score
Alice  86
```

### Q5 · Sort

```sql
SELECT name, score
FROM   student
WHERE  class = 'F.4A'
ORDER BY score DESC;
```

```
name   score
Alice  86
Eve    78
Bob    72
```

### Q6 · Patterns with LIKE

```sql
SELECT name
FROM   student
WHERE  name LIKE 'A%';      -- starts with A
```

```
name
Alice
```

| Pattern | Meaning |
|---------|---------|
| `%` | any number of characters |
| `_` | exactly one character |

### Q7 · Range with BETWEEN

```sql
SELECT name, score
FROM   student
WHERE  score BETWEEN 70 AND 90;
```

```
name   score
Alice  86
Bob    72
Eve    78
```

### Q8 · Membership with IN

```sql
SELECT name, class
FROM   student
WHERE  class IN ('F.4A', 'F.4C');
```

```
name   class
Alice  F.4A
Bob    F.4A
Eve    F.4A
```

### Q9 · Aggregates (peek at 2A material)

```sql
SELECT COUNT(*) FROM student;             -- 5
SELECT AVG(score) FROM student;           -- 76.4
SELECT MAX(score), MIN(score) FROM student; -- 91, 55
```

## How to predict output by hand

A reliable mental algorithm:

1. **FROM** — write down all rows of the table.
2. **WHERE** — cross out rows that don't match.
3. **ORDER BY** — sort what remains.
4. **SELECT** — keep only the requested columns.

Example walking through Q5:

| Step | Result |
|------|--------|
| FROM student | 5 rows |
| WHERE class = 'F.4A' | Alice, Bob, Eve |
| ORDER BY score DESC | Alice (86), Eve (78), Bob (72) |
| SELECT name, score | done |

## Common student mistakes

- Forgetting that **strings** must be in **single quotes**: `'F.4A'`, not `F.4A`.
- Using `==` instead of `=` (SQL uses single `=`).
- Treating `<>` and `!=` as identical — standard SQL is `<>`; most DBMS accept both, but the HKEAA reference table prints `<>`.
- Missing `AND` between conditions.
- Trying to use `WHERE` on aggregates — that needs `HAVING` (2A material).

## Practice activity

Predict the output of each query using the dataset above:

1. `SELECT name FROM student WHERE class = 'F.4B';`
2. `SELECT * FROM student WHERE score < 70;`
3. `SELECT name, score FROM student ORDER BY score DESC LIMIT 2;`
4. `SELECT class, COUNT(*) FROM student GROUP BY class;`
5. `SELECT name FROM student WHERE name LIKE '%e%';`

::: details Answers
1. Carol, David
2. David, 55
3. Carol 91, Alice 86
4. F.4A 3, F.4B 2
5. Alice, Eve (any name containing 'e' — case-sensitive depends on collation; default usually case-insensitive)
:::

## Exam-style question

> **Q (5 marks):** The table `book` has columns `isbn, title, author, year_published`. Write the SQL query that returns the title and year of all books written by `'Lewis Carroll'` published after the year 2000, sorted by year ascending.

**Sample answer:**

```sql
SELECT title, year_published
FROM   book
WHERE  author = 'Lewis Carroll'
  AND  year_published > 2000
ORDER BY year_published ASC;
```

## Key takeaways

- SQL queries follow a predictable shape: `SELECT … FROM … WHERE … ORDER BY …`.
- `=` for comparison, single quotes for strings.
- The C&A Guide says you must be able to **trace and interpret** simple SQL — this is exactly what was practised here.
- Move on to Elective 2A if you want to **write** more complex queries.

::: tip Run every query, change every clause
The skill clicks when you **type** the queries yourself. Open [SQL Books](https://sqlbooks.codenav.dev), paste the demo `CREATE TABLE` and `INSERT`s, then run Q1 through Q9. Edit one condition, hit run, watch the output change. Ten minutes of this beats one hour of passive reading.
:::

## Chapter wrap-up

You've finished Chapter 4 — and therefore all of Module A. Self-test:

- Can you write a 3-line spreadsheet formula that finds the median score? Hint: there's a `MEDIAN()` function.
- Can you draw a pivot table mock-up from a CSV in 30 seconds?
- Can you predict the output of `SELECT name FROM student WHERE score BETWEEN 60 AND 80 ORDER BY name`?

If yes — congratulations, you're ready to move on.

➡️ Next module: [Module B · Computer System Fundamentals](../../module-b/)
