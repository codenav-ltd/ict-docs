# 2.7 · Aggregates & Built-in Functions

> **Goal:** use the function families listed in the HKEAA reference sheet.

## Aggregate functions

| Function | Example | Returns |
|----------|---------|---------|
| `COUNT(*)` | `COUNT(*)` | Number of rows |
| `COUNT(col)` | `COUNT(email)` | Non-null values |
| `SUM(col)` | `SUM(score)` | Total |
| `AVG(col)` | `AVG(score)` | Mean |
| `MIN(col)` | `MIN(score)` | Smallest |
| `MAX(col)` | `MAX(score)` | Largest |

## String functions (from the reference sheet)

| Function | Example | Returns |
|----------|---------|---------|
| `CHAR_LENGTH(s)` or `LEN(s)` | `LEN('HKDSE')` | 5 |
| `LOWER(s)` | `LOWER('HKDSE')` | `'hkdse'` |
| `UPPER(s)` | `UPPER('dse')` | `'DSE'` |
| `TRIM(s)` | `TRIM('  hi  ')` | `'hi'` |
| `SUBSTRING(s, start, length)` | `SUBSTRING('HKDSE', 1, 2)` | `'HK'` |
| `VALUE(s)` or `VAL(s)` | `VAL('123abc')` | `123` (DBMS-specific) |
| `CHAR(n)` or `CHR(n)` | `CHR(65)` | `'A'` |
| `SPACE(n)` | `SPACE(3)` | `'   '` |

## Date functions

| Function | Returns |
|----------|---------|
| `DATE` | Construct or extract |
| `DAY(d)` | Day of month |
| `MONTH(d)` | Month |
| `YEAR(d)` | Year |

```sql
SELECT name, YEAR(dob) AS birth_year
FROM   Student
WHERE  MONTH(dob) = 5;       -- born in May
```

## Numeric helpers

| Function | Returns |
|----------|---------|
| `ABS(n)` | Absolute value |
| `INT(n)` | Integer part (truncate) |
| `ROUND(n, d)` (DBMS-specific) | Round to d decimals |

## Combining aggregates and functions

```sql
SELECT subject, ROUND(AVG(score), 1) AS avg_rounded
FROM   Score
GROUP BY subject;
```

## Worked example · Customer report

```sql
SELECT UPPER(name) AS NAME,
       LEN(name) AS NAME_LEN,
       YEAR(dob) AS YOB
FROM   Student
ORDER  BY name;
```

## Common student mistakes

- Trying `AVG()` on text columns.
- Using `COUNT(col)` and being surprised NULL values are skipped.
- Mixing function names across DBMS (e.g. `LEN` works in some, `CHAR_LENGTH` in standard SQL).

## Exam-style question

> **Q (5 marks):** Write SQL on `Student(student_id, name, class_id, dob)`:
>
> (a) Output each student's name in upper case and the year of birth.
> (b) Show the average length of student names.
> (c) Number of students born in 2007.

**Sample answer:**

```sql
-- (a)
SELECT UPPER(name) AS upper_name, YEAR(dob) AS birth_year FROM Student;

-- (b)
SELECT AVG(CHAR_LENGTH(name)) AS avg_name_length FROM Student;

-- (c)
SELECT COUNT(*) AS born_2007 FROM Student WHERE YEAR(dob) = 2007;
```

## Key takeaways

- Aggregate functions summarise groups.
- Use string / date / numeric helpers freely.
- Function names vary by DBMS — the HKEAA reference sheet lists the canonical SQL-92 versions.

➡️ Next: [2.8 JOIN](./joins)
