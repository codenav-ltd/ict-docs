# 3.3 · PHP Essentials

> **Goal:** read and write basic PHP. From 2026 DSE, PHP is the server-side language in Paper 2B.

## File structure

A PHP file looks like HTML with `<?php … ?>` tags embedded:

```php
<!DOCTYPE html>
<html>
<body>
  <h1>Hello, <?= htmlspecialchars($name ?? "guest") ?>!</h1>
</body>
</html>
```

The web server's PHP module parses everything inside `<?php ?>` before sending HTML to the browser.

## Variables & basic types

```php
<?php
$name  = "Alice";
$age   = 17;
$score = 86.5;
$ok    = true;

echo $name;                        // Alice
echo "$name is $age";              // Alice is 17  (interpolation in double quotes)
echo "$name is " . $age;           // same with concatenation
?>
```

## Arrays

```php
<?php
$fruits = ["apple", "banana", "cherry"];
echo $fruits[0];                    // apple
echo count($fruits);                // 3

$student = ["id" => 1001, "name" => "Alice", "score" => 86];
echo $student["name"];              // Alice

foreach ($fruits as $f) {
    echo $f, "\n";
}
?>
```

## Control structures

Same as most languages — `if`, `elseif`, `else`, `switch`, `for`, `while`, `foreach`.

```php
<?php
if ($score >= 80) echo "A";
elseif ($score >= 70) echo "B";
elseif ($score >= 60) echo "C";
else echo "F";
?>
```

## Functions

```php
<?php
function add($a, $b) {
    return $a + $b;
}

echo add(2, 3);     // 5
?>
```

## Receiving form data

```php
<?php
$name  = $_POST["name"] ?? "";      // from a POST form
$id    = $_GET["id"]    ?? 0;       // from URL query string
$cookie= $_COOKIE["last_visit"] ?? null;
?>
```

`$_POST`, `$_GET`, `$_COOKIE`, `$_SESSION`, `$_FILES`, `$_REQUEST`, `$_SERVER` are **superglobals**.

## Output safely

Never `echo` raw user input — use `htmlspecialchars()` to prevent XSS:

```php
<?php
echo "<p>Welcome, " . htmlspecialchars($name) . "</p>";
// or short syntax:
?>
<p>Welcome, <?= htmlspecialchars($name) ?></p>
```

## Include / require other files

```php
<?php
require_once "db.php";          // fatal error if missing
include "header.html";          // warning if missing
?>
```

Common pattern: a `header.php` and `footer.php` shared across pages.

## Worked example · Hello with form

```php
<?php
$name = $_POST["name"] ?? "";
?>
<!DOCTYPE html>
<html>
<body>
  <form method="POST">
    Your name:
    <input name="name" required>
    <button>Greet</button>
  </form>
  <?php if ($name !== ""): ?>
    <p>Hello, <?= htmlspecialchars($name) ?>!</p>
  <?php endif; ?>
</body>
</html>
```

## Common student mistakes

- Forgetting `<?php` open tag → code shows as text.
- Echoing raw user input → XSS.
- Hard-coding database credentials in committed code.
- Using deprecated `mysql_*` functions instead of `PDO` or `mysqli_*`.

## Exam-style question

> **Q (5 marks):** Write a PHP page that receives a number from a `GET` query parameter `n` and prints whether it is odd or even. If `n` is missing or non-numeric, print "Invalid input".

**Sample answer:**

```php
<?php
$raw = $_GET["n"] ?? "";
if (!is_numeric($raw)) {
    echo "Invalid input";
} else {
    $n = (int)$raw;
    echo "$n is " . ($n % 2 === 0 ? "even" : "odd");
}
?>
```

## Key takeaways

- PHP runs on the server before HTML is sent.
- Superglobals: `$_POST`, `$_GET`, `$_COOKIE`, `$_SESSION`.
- Always escape user input on output.

➡️ Next: [3.4 Form Handling & Validation](./forms)
