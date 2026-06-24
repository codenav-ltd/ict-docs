# 3.7 · Building a Simple Web App

> **Goal:** combine everything into a small working application.

## Project · Class homework checklist

Goal: each student logs in and manages a list of homework tasks.

### Files

```
/project
├── db.php          ← PDO connection helper
├── login.php       ← form + POST handler
├── register.php    ← signup
├── logout.php
├── index.php       ← list tasks
├── add.php         ← add task
├── toggle.php      ← mark done / undone
├── delete.php      ← remove task
├── style.css
└── lib.php         ← helpers (auth check, etc.)
```

### Database schema

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  pw_hash  CHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  title VARCHAR(200) NOT NULL,
  due_date DATE,
  done BOOLEAN NOT NULL DEFAULT FALSE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

(You can paste this into **[SQL Books](https://sqlbooks.codenav.dev)** to design and test before moving to your local MySQL.)

### Sample `db.php`

```php
<?php
$pdo = new PDO(
    "mysql:host=localhost;dbname=hw;charset=utf8mb4",
    "hwuser",
    "pw_here",
    [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
     PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]
);
?>
```

### Sample `lib.php`

```php
<?php
function require_login() {
    session_start();
    if (!isset($_SESSION["user_id"])) {
        header("Location: /login.php");
        exit;
    }
    return $_SESSION["user_id"];
}
?>
```

### Sample `index.php`

```php
<?php
require "lib.php";
require "db.php";
$user_id = require_login();

$stmt = $pdo->prepare("SELECT * FROM tasks WHERE user_id = ? ORDER BY due_date");
$stmt->execute([$user_id]);
$tasks = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Homework</title>
  <link rel="stylesheet" href="style.css"></head>
<body>
  <h1>My homework</h1>
  <form action="add.php" method="POST">
    <input name="title" required>
    <input name="due" type="date">
    <button>Add</button>
  </form>
  <ul>
    <?php foreach ($tasks as $t): ?>
      <li>
        <form action="toggle.php" method="POST" style="display:inline">
          <input type="hidden" name="id" value="<?= $t["id"] ?>">
          <input type="checkbox" onChange="this.form.submit()" <?= $t["done"] ? "checked" : "" ?>>
        </form>
        <?= htmlspecialchars($t["title"]) ?>
        <small><?= $t["due_date"] ?></small>
        <form action="delete.php" method="POST" style="display:inline">
          <input type="hidden" name="id" value="<?= $t["id"] ?>">
          <button>×</button>
        </form>
      </li>
    <?php endforeach ?>
  </ul>
  <p><a href="logout.php">Log out</a></p>
</body>
</html>
```

### Sample `add.php`

```php
<?php
require "lib.php";
require "db.php";
$user_id = require_login();

$title = trim($_POST["title"] ?? "");
$due   = $_POST["due"] ?? null;

if ($title !== "") {
    $stmt = $pdo->prepare("INSERT INTO tasks (user_id, title, due_date) VALUES (?, ?, ?)");
    $stmt->execute([$user_id, $title, $due ?: null]);
}
header("Location: /index.php");
?>
```

## What you should be able to add yourself

- `register.php` and `login.php` with `password_hash` / `password_verify`.
- `toggle.php` that flips the `done` flag.
- `delete.php` that removes a task **belonging to the current user only**.
- Basic CSS for a nicer look.

## Best practices reminder

- **Every** PHP script that uses `$_SESSION` calls `session_start()` first.
- **Every** SQL uses prepared statements with bound parameters.
- **Every** echoed user value goes through `htmlspecialchars`.
- **Every** state-changing form uses `POST`.

## Common student mistakes

- Using `GET` for delete (a bot can trigger it).
- Forgetting to scope queries by `user_id` (leaks data across users).
- Storing passwords plain.
- Inserting unsanitised values into HTML.

## Exam-style question

> **Q (6 marks):** Outline the components and security measures of a small web application that allows students to log in and manage personal todo lists.

**Sample answer:**

**Components**:

- **Database** with `users(id, username, pw_hash)` and `tasks(id, user_id, title, due_date, done)` tables.
- **PHP scripts** for register, login, logout, list, add, toggle, delete tasks.
- **HTML + CSS** for the user interface, including forms for input.
- **Sessions** for tracking the logged-in user across pages.

**Security measures**:

1. **Password hashing** with `password_hash` and `password_verify` — never store plain text passwords.
2. **Prepared statements** for every database query — prevents SQL injection.
3. **`session_start` and `$_SESSION["user_id"]` checks** at the top of every protected script — prevents unauthorised access.
4. **Output escaping with `htmlspecialchars`** when displaying user-provided text — prevents XSS.
5. **`POST` for state-changing actions** (add, delete, toggle) — avoids accidental triggers via URL or browser cache.
6. **Scope queries by user_id** so users only see and modify their own data.

## Key takeaways

- A small app combines database, PHP, sessions, validation, and HTML.
- Follow the security checklist on every script.
- Build one feature at a time, end-to-end, before moving to the next.

## Chapter 3 wrap-up & Elective 2B wrap-up

You can now build a complete simple web app. For SBA you can repeat this pattern with any topic.

➡️ Next elective: [2C · Algorithm & Programming](../../2c-algorithm/)
