# 3.7 · 建簡易網頁應用

> **目標：** 把一切合成一個小型可工作應用。

## 項目 · 班級作業清單

目標：每位學生登入並管理自己作業列表。

### 文件

```
/project
├── db.php          ← PDO 連接幫手
├── login.php       ← 表單 + POST 處理
├── register.php    ← 註冊
├── logout.php
├── index.php       ← 列任務
├── add.php         ← 加任務
├── toggle.php      ← 標完成 / 未完成
├── delete.php      ← 移任務
├── style.css
└── lib.php         ← 幫手（認證檢查等）
```

### 資料庫模式

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

（可粘到 **[SQL Books](https://sqlbooks.codenav.dev)** 先設計與測，再去本地 MySQL。）

### 示範 `db.php`

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

### 示範 `lib.php`

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

### 示範 `index.php`

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

### 示範 `add.php`

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

## 你該自己加什麼

- `register.php` 與 `login.php` 用 `password_hash` / `password_verify`。
- `toggle.php` 翻 `done` 標誌。
- `delete.php` 移**僅屬當前用户**的任務。
- 基礎 CSS 改觀感。

## 最佳實踐提醒

- **每個**用 `$_SESSION` 的 PHP 腳本都先調 `session_start()`。
- **每個** SQL 用綁參的預處理語句。
- **每個** echo 的用户值過 `htmlspecialchars`。
- **每個**改狀態表單用 `POST`。

## 學生常見錯誤

- 用 `GET` 做刪除（bot 能觸發）。
- 忘按 `user_id` 限範圍（跨用户漏資料）。
- 存明文密碼。
- 把未淨化值塞 HTML。

## 考試式題目

> **題（6 分）：** 概述讓學生登入並管理個人 todo 列表的小型網頁應用的組件與安全措施。

**參考答案：**

**組件**：

- **資料庫**含 `users(id, username, pw_hash)` 與 `tasks(id, user_id, title, due_date, done)` 表。
- **PHP 腳本**做註冊、登入、登出、列、加、切換、刪任務。
- **HTML + CSS** 給用户介面，含輸入表單。
- **會話**跨頁追蹤登入用户。

**安全措施**：

1. **密碼哈希**用 `password_hash` 與 `password_verify` —— 永不存明文密碼。
2. **每次資料庫查詢用預處理語句** —— 防 SQL 注入。
3. 每個受保護腳本頂**`session_start` 與 `$_SESSION["user_id"]` 檢查** —— 防未授權訪問。
4. 顯示用户文本時**用 `htmlspecialchars` 轉義輸出** —— 防 XSS。
5. 改狀態動作（加、刪、切換）用 **`POST`** —— 避被 URL 或瀏覽器快取意外觸發。
6. **按 user_id 限查詢範圍**讓用户僅見與改自己資料。

## 關鍵要點

- 小應用合資料庫、PHP、會話、校驗、HTML。
- 每個腳本都跟安全清單。
- 一次一個特性、端到端做，再下一個。

## 第 3 章 & 選修 2B 總結

你現在能建完整簡易網頁應用。SBA 中可用任何主題重複此模式。

➡️ 下一選修：[2C · 演算法與編程](../../2c-algorithm/)