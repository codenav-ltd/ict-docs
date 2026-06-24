# Programming Pitfalls (Python / Pseudocode / SQL)

> A reference card for the kind of bugs the HKEAA loves to test.

## Python pitfalls

### 1. Mutable default arguments

```python
def add_item(item, basket=[]):     # BAD — basket is shared
    basket.append(item)
    return basket
```

Use `None` instead:

```python
def add_item(item, basket=None):
    if basket is None:
        basket = []
    basket.append(item)
    return basket
```

### 2. Integer vs float division

```python
print(5 / 2)     # 2.5
print(5 // 2)    # 2 (integer/floor division)
```

### 3. String immutability

```python
s = "abc"
s[0] = "z"       # TypeError — strings can't be mutated
```

Use slicing/concatenation instead:

```python
s = "z" + s[1:]
```

### 4. Mutating a list while iterating

```python
lst = [1, 2, 3, 4]
for x in lst:
    if x % 2 == 0:
        lst.remove(x)    # surprising results
```

Better — iterate over a copy or build a new list:

```python
lst = [x for x in lst if x % 2 != 0]
```

### 5. Truthiness traps

```python
if x:        # True for non-zero, non-empty, non-None
    ...
```

But `0`, `''`, `[]`, `{}`, `None` all evaluate to False — distinguish explicitly when needed:

```python
if x is not None:
    ...
```

## Pseudocode pitfalls

### Use HKEAA conventions

```text
INPUT  n
total ← 0
FOR i ← 1 TO n
    IF i MOD 2 = 0 THEN
        total ← total + i
    END IF
END FOR
OUTPUT total
```

- `←` not `=`
- `END FOR`, `END IF` to close blocks
- Capitalised keywords (some schools use lower case — follow your teacher / mark scheme)

### Don't import Python idioms

```text
nums.append(5)                  # OK in Python, NOT in HKEAA pseudocode
ADD 5 TO nums                   # better in pseudocode
```

## SQL pitfalls

### 1. `WHERE` vs `HAVING`

```sql
-- Wrong
SELECT class, AVG(score)
FROM   Score
WHERE  AVG(score) >= 60
GROUP  BY class;

-- Right
SELECT class, AVG(score)
FROM   Score
GROUP  BY class
HAVING AVG(score) >= 60;
```

### 2. `JOIN` without `ON` → Cartesian product

```sql
SELECT * FROM Student, Score;          -- 1000 students × 5000 scores = 5,000,000 rows!
```

Specify the relationship:

```sql
SELECT *
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id;
```

### 3. Mixed quotes

```sql
SELECT name FROM Student WHERE class = "F4A";   -- many DBMS accept it, but "..." is reserved for identifiers in standard SQL
```

Standard SQL uses single quotes for strings:

```sql
SELECT name FROM Student WHERE class = 'F4A';
```

### 4. `NULL` comparison

```sql
SELECT * FROM Student WHERE email = NULL;     -- never matches!
SELECT * FROM Student WHERE email IS NULL;    -- correct
```

### 5. Aggregates with non-aggregated columns

```sql
-- Wrong (in strict SQL)
SELECT name, AVG(score) FROM Score;

-- Right
SELECT s.name, AVG(sc.score)
FROM   Student s INNER JOIN Score sc ON s.student_id = sc.student_id
GROUP  BY s.name;
```

::: tip Catch SQL bugs in seconds, not minutes
The fastest feedback loop for SQL bugs is to run the query in **[SQL Books](https://sqlbooks.codenav.dev)** — paste, run, read the error or result, fix, repeat. If a `JOIN` is wrong you'll see a row count surprise immediately. If a `HAVING` is wrong you'll get an aggregate-vs-row mismatch error. Once it works there, transfer the SQL to your PHP code.
:::

## PHP pitfalls

### 1. SQL injection via string concatenation

```php
// VERY BAD
$pdo->query("SELECT * FROM Member WHERE name = '" . $_GET['n'] . "'");
```

```php
// GOOD
$stmt = $pdo->prepare('SELECT * FROM Member WHERE name = ?');
$stmt->execute([$_GET['n']]);
```

### 2. Storing passwords in plaintext

```php
// BAD
$pdo->query("INSERT INTO Users (pw) VALUES ('$pw')");

// GOOD
$hash = password_hash($pw, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('INSERT INTO Users (pw_hash) VALUES (?)');
$stmt->execute([$hash]);
// Later:
$ok = password_verify($pw, $hash);
```

### 3. Forgetting `session_start()` before reading `$_SESSION`

```php
session_start();
echo $_SESSION['user_id'] ?? 'not logged in';
```

### 4. Echoing raw user input → XSS

```php
echo $_GET['msg'];                       // BAD
echo htmlspecialchars($_GET['msg']);     // GOOD
```

➡️ Back to: [Exam tips overview](./)
