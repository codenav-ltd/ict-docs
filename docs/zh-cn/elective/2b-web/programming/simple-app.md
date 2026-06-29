# 3.7 · 建简易网页应用

> **目标：** 把一切合成一个小型可工作应用。

## 项目 · 班级作业清单

目标：每位学生登入并管理自己作业列表。

### 文件

```
/project
├── db.php          ← PDO 连接帮手
├── login.php       ← 表单 + POST 处理
├── register.php    ← 注册
├── logout.php
├── index.php       ← 列任务
├── add.php         ← 加任务
├── toggle.php      ← 标完成 / 未完成
├── delete.php      ← 移任务
├── style.css
└── lib.php         ← 帮手（认证检查等）
```

### 数据库模式

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

（可粘到 **[SQL Books](https://sqlbooks.codenav.dev)** 先设计与测，再去本地 MySQL。）

### 示范 `db.php`

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

### 示范 `lib.php`

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

### 示范 `index.php`

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

### 示范 `add.php`

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

## 你该自己加什么

- `register.php` 与 `login.php` 用 `password_hash` / `password_verify`。
- `toggle.php` 翻 `done` 标志。
- `delete.php` 移**仅属当前用户**的任务。
- 基础 CSS 改观感。

## 最佳实践提醒

- **每个**用 `$_SESSION` 的 PHP 脚本都先调 `session_start()`。
- **每个** SQL 用绑参的预处理语句。
- **每个** echo 的用户值过 `htmlspecialchars`。
- **每个**改状态表单用 `POST`。

## 学生常见错误

- 用 `GET` 做删除（bot 能触发）。
- 忘按 `user_id` 限范围（跨用户漏数据）。
- 存明文密码。
- 把未净化值塞 HTML。

## 考试式题目

> **题（6 分）：** 概述让学生登入并管理个人 todo 列表的小型网页应用的组件与安全措施。

**参考答案：**

**组件**：

- **数据库**含 `users(id, username, pw_hash)` 与 `tasks(id, user_id, title, due_date, done)` 表。
- **PHP 脚本**做注册、登入、登出、列、加、切换、删任务。
- **HTML + CSS** 给用户界面，含输入表单。
- **会话**跨页追踪登入用户。

**安全措施**：

1. **密码哈希**用 `password_hash` 与 `password_verify` —— 永不存明文密码。
2. **每次数据库查询用预处理语句** —— 防 SQL 注入。
3. 每个受保护脚本顶**`session_start` 与 `$_SESSION["user_id"]` 检查** —— 防未授权访问。
4. 显示用户文本时**用 `htmlspecialchars` 转义输出** —— 防 XSS。
5. 改状态动作（加、删、切换）用 **`POST`** —— 避被 URL 或浏览器缓存意外触发。
6. **按 user_id 限查询范围**让用户仅见与改自己数据。

## 关键要点

- 小应用合数据库、PHP、会话、校验、HTML。
- 每个脚本都跟安全清单。
- 一次一个特性、端到端做，再下一个。

## 第 3 章 & 选修 2B 总结

你现在能建完整简易网页应用。SBA 中可用任何主题重复此模式。

➡️ 下一选修：[2C · 算法与编程](../../2c-algorithm/)
