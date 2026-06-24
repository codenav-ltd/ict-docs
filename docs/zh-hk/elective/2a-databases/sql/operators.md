# 2.4 · Operators, LIKE & IN

> **Goal:** master arithmetic, comparison and pattern-matching operators.

## Arithmetic operators

| Op | Example |
|----|---------|
| `+` | `score + 5` |
| `-` | `100 - score` |
| `*` | `price * quantity` |
| `/` | `total / count` |
| `%` | `id % 2` (modulus) |

Useful in SELECT expressions:

```sql
SELECT name, price, quantity, price * quantity AS subtotal FROM OrderItem;
```

## Comparison operators

| Op | Meaning |
|----|---------|
| `=` | Equal |
| `<>` | Not equal (standard) |
| `!=` | Not equal (DBMS-specific, also accepted) |
| `>` `<` `>=` `<=` | Comparisons |

## LIKE pattern matching

| Pattern | Meaning |
|---------|---------|
| `%` | Any sequence of characters (including empty) |
| `_` | Exactly one character |

### Examples

```sql
SELECT * FROM Student WHERE name LIKE 'A%';     -- starts with A
SELECT * FROM Student WHERE name LIKE '%a';     -- ends with a
SELECT * FROM Student WHERE name LIKE '%a%';    -- contains a
SELECT * FROM Student WHERE name LIKE 'A___';   -- A followed by exactly 3 chars
```

### Escape special characters

```sql
SELECT * FROM Product WHERE code LIKE '100\%off' ESCAPE '\';   -- literal '%'
```

## IN list membership

```sql
SELECT * FROM Student WHERE class_id IN ('F.4A','F.4B');
```

Equivalent OR form:

```sql
SELECT * FROM Student WHERE class_id = 'F.4A' OR class_id = 'F.4B';
```

`IN` is shorter and clearer; it can also accept the result of a sub-query (sub-queries chapter).

## NOT versions

| Form | Meaning |
|------|---------|
| `NOT IN (…)` | Not a member |
| `NOT LIKE 'A%'` | Doesn't start with A |
| `NOT BETWEEN a AND b` | Outside the range |

## BETWEEN

`BETWEEN` is **inclusive** of both ends:

```sql
SELECT * FROM Score WHERE score BETWEEN 70 AND 90;
-- includes 70, includes 90
```

## Operator precedence (in WHERE)

1. Comparison operators (`=`, `<`, etc.)
2. `NOT`
3. `AND`
4. `OR`

When in doubt — parentheses.

## Worked example · Find premium ICT students

> "Students in F.4A whose ICT score is at least 80 and whose name starts with A or E."

```sql
SELECT s.name, sc.score
FROM   Student s, Score sc
WHERE  s.student_id = sc.student_id
  AND  s.class_id   = 'F.4A'
  AND  sc.subject   = 'ICT'
  AND  sc.score    >= 80
  AND  (s.name LIKE 'A%' OR s.name LIKE 'E%');
```

## Common student mistakes

- Using `=` with LIKE patterns (`WHERE name = 'A%'` matches the literal "A%" only).
- Forgetting that `BETWEEN` is inclusive.
- Forgetting that `_` is exactly one character, not zero or more.

## Exam-style question

> **Q (4 marks):** Write SQL on `Product(sku, name, price, category)`:
>
> (a) Products in categories 'Drink' or 'Snack'.
> (b) Products whose name ends in "Pro".
> (c) Products priced between 100 and 500 exclusive (i.e. >100 and <500).

**Sample answer:**

```sql
-- (a)
SELECT * FROM Product WHERE category IN ('Drink','Snack');

-- (b)
SELECT * FROM Product WHERE name LIKE '%Pro';

-- (c)
SELECT * FROM Product WHERE price > 100 AND price < 500;
```

## Key takeaways

- Pick the right tool: `=`, `LIKE`, `IN`, `BETWEEN`.
- `%` and `_` are wildcards inside `LIKE`.
- `BETWEEN` is inclusive.

➡️ Next: [2.5 ORDER BY & DISTINCT](./ordering)
