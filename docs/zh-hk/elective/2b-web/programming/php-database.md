# 3.5 · Database from PHP (PDO)

> **Goal:** safely query a database from PHP using **prepared statements**.

## Why PDO

`PDO` (PHP Data Objects) is the modern, portable database API in PHP. It supports many DBMS (MySQL, PostgreSQL, SQLite…) with the same interface and, crucially, it enables **prepared statements** to defeat SQL injection.

## Connecting

```php
<?php
$pdo = new PDO(
    "mysql:host=localhost;dbname=schooldb;charset=utf8mb4",
    "schooluser",
    "strong_pw_here",
    [
        PDO::ATTR_ERRMODE          => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
);
?>
```

Keep credentials in a separate `db.php` or environment variables — never commit to public Git.

## SELECT

```php
<?php
$stmt = $pdo->prepare("SELECT * FROM Student WHERE class_id = ?");
$stmt->execute(["F.4A"]);
$rows = $stmt->fetchAll();

foreach ($rows as $r) {
    echo $r["name"], "\n";
}
?>
```

### Named placeholders

```php
<?php
$stmt = $pdo->prepare("SELECT * FROM Student WHERE class_id = :class AND name LIKE :name");
$stmt->execute([
    ":class" => "F.4A",
    ":name"  => "A%",
]);
?>
```

## INSERT / UPDATE / DELETE

```php
<?php
$stmt = $pdo->prepare("INSERT INTO Student (name, class_id, dob) VALUES (?, ?, ?)");
$stmt->execute(["Alice", "F.4A", "2007-05-12"]);

echo "New ID = " . $pdo->lastInsertId();
?>
```

## Transactions

```php
<?php
try {
    $pdo->beginTransaction();
    $pdo->prepare("UPDATE Account SET balance = balance - ? WHERE id = ?")->execute([100, 1]);
    $pdo->prepare("UPDATE Account SET balance = balance + ? WHERE id = ?")->execute([100, 2]);
    $pdo->commit();
} catch (Exception $e) {
    $pdo->rollBack();
    throw $e;
}
?>
```

Use for any multi-step money / inventory updates.

## Why prepared statements (security)

Without them:

```php
// VERY BAD
$pdo->query("SELECT * FROM users WHERE name = '" . $_GET["n"] . "'");
```

If the user sends `n=Alice'; DROP TABLE users; --`, the query becomes:

```sql
SELECT * FROM users WHERE name = 'Alice'; DROP TABLE users; --'
```

→ table dropped. **Always** use prepared statements.

## Error handling

```php
<?php
try {
    $stmt = $pdo->prepare(...);
    $stmt->execute([...]);
} catch (PDOException $e) {
    error_log($e->getMessage());          // log internally
    http_response_code(500);
    echo "Sorry, something went wrong.";  // never reveal the SQL error to user
}
?>
```

## Common student mistakes

- Concatenating user input into SQL → SQL injection.
- Catching exceptions and ignoring them.
- Forgetting to fetch results (`fetch()` / `fetchAll()`).
- Using `mysql_*` functions (removed in PHP 7+).

## Exam-style question

> **Q (5 marks):** Write a PHP snippet that uses PDO to:
>
> (a) Connect to a MySQL database `library` as user `librarian`.
> (b) Insert a new Loan row using prepared statements.
> (c) Explain how prepared statements prevent SQL injection.

**Sample answer:**

```php
<?php
$pdo = new PDO(
    "mysql:host=localhost;dbname=library;charset=utf8mb4",
    "librarian",
    "pwd_here",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
);

$stmt = $pdo->prepare(
    "INSERT INTO Loan (member_id, isbn, loan_date, due_date)
     VALUES (:m, :isbn, :ld, :dd)"
);
$stmt->execute([
    ":m"    => 1001,
    ":isbn" => "9780000000000",
    ":ld"   => date("Y-m-d"),
    ":dd"   => date("Y-m-d", strtotime("+14 days")),
]);
?>
```

**How it prevents SQL injection**: the SQL template is sent to the DBMS first; placeholders (`:m`, `:isbn` etc.) are then bound as data, not concatenated into the SQL string. Even if the value contains `'; DROP TABLE ...; --`, the DBMS treats it as a literal value rather than executable SQL, so the malicious command never runs.

## Key takeaways

- Use `PDO` + prepared statements.
- Keep credentials out of source code.
- Wrap multi-step changes in transactions.

::: tip Test SQL out before wiring it into PHP
When debugging a query, paste it into **[SQL Books](https://sqlbooks.codenav.dev)** with real test data, tweak until the result is right, then move it to your PHP `prepare()` call. Saves hours.
:::

➡️ Next: [3.6 Cookies & Sessions](./cookies-sessions)
