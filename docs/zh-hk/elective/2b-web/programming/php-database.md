# 3.5 · 從 PHP 操作資料庫 (PDO)

> **目標：** 用**預處理語句**從 PHP 安全查資料庫。

## 為何 PDO

`PDO`（PHP Data Objects）是 PHP 中現代、可移植的資料庫 API。它以同一接口支援多 DBMS (MySQL、PostgreSQL、SQLite…)，且關鍵地能用**預處理語句**擊敗 SQL 注入。

## 連接

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

把憑證放獨立 `db.php` 或環境變數 —— 永遠別提交到公共 Git。

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

### 命名佔位符

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

## 事務

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

用於任何多步錢 / 庫存更新。

## 為何用預處理語句（安全）

不用：

```php
// 非常壞
$pdo->query("SELECT * FROM users WHERE name = '" . $_GET["n"] . "'");
```

如果用户發 `n=Alice'; DROP TABLE users; --`，查詢變：

```sql
SELECT * FROM users WHERE name = 'Alice'; DROP TABLE users; --'
```

→ 表被刪。**總用**預處理語句。

## 錯誤處理

```php
<?php
try {
    $stmt = $pdo->prepare(...);
    $stmt->execute([...]);
} catch (PDOException $e) {
    error_log($e->getMessage());          // 內部記日誌
    http_response_code(500);
    echo "Sorry, something went wrong.";  // 別把 SQL 錯暴露給用户
}
?>
```

## 學生常見錯誤

- 把用户輸入拼接進 SQL → SQL 注入。
- 捕異常然後忽略。
- 忘取結果 (`fetch()` / `fetchAll()`)。
- 用 `mysql_*` 函式（PHP 7+ 移除）。

## 考試式題目

> **題（5 分）：** 寫 PHP 片段用 PDO：
>
> (a) 以用户 `librarian` 連 MySQL 資料庫 `library`。
> (b) 用預處理語句插一條新 Loan 行。
> (c) 解釋預處理語句如何防 SQL 注入。

**參考答案：**

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

**如何防 SQL 注入**：SQL 模板先送到 DBMS；佔位符 (`:m`、`:isbn` 等) 被作資料綁定而非拼到 SQL 字符串。即使值含 `'; DROP TABLE ...; --`，DBMS 視它為字面值而非可執行 SQL，所以惡意命令永不跑。

## 關鍵要點

- 用 `PDO` + 預處理語句。
- 憑證不進源程式碼。
- 多步改動包在事務裏。

::: tip 接入 PHP 前先測 SQL
調試查詢時，把它粘到 **[SQL Books](https://sqlbooks.codenav.dev)** 配真實測試資料，調到結果對了再移到 PHP 的 `prepare()` 調用。省小時。
:::

➡️ 下一節：[3.6 Cookie 與會話](./cookies-sessions)