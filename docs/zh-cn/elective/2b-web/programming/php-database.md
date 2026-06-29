# 3.5 · 从 PHP 操作数据库 (PDO)

> **目标：** 用**预处理语句**从 PHP 安全查数据库。

## 为何 PDO

`PDO`（PHP Data Objects）是 PHP 中现代、可移植的数据库 API。它以同一接口支援多 DBMS (MySQL、PostgreSQL、SQLite…)，且关键地能用**预处理语句**击败 SQL 注入。

## 连接

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

把凭证放独立 `db.php` 或环境变量 —— 永远别提交到公共 Git。

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

### 命名占位符

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

## 事务

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

用于任何多步钱 / 库存更新。

## 为何用预处理语句（安全）

不用：

```php
// 非常坏
$pdo->query("SELECT * FROM users WHERE name = '" . $_GET["n"] . "'");
```

如果用户发 `n=Alice'; DROP TABLE users; --`，查询变：

```sql
SELECT * FROM users WHERE name = 'Alice'; DROP TABLE users; --'
```

→ 表被删。**总用**预处理语句。

## 错误处理

```php
<?php
try {
    $stmt = $pdo->prepare(...);
    $stmt->execute([...]);
} catch (PDOException $e) {
    error_log($e->getMessage());          // 内部记日志
    http_response_code(500);
    echo "Sorry, something went wrong.";  // 别把 SQL 错暴露给用户
}
?>
```

## 学生常见错误

- 把用户输入拼接进 SQL → SQL 注入。
- 捕异常然后忽略。
- 忘取结果 (`fetch()` / `fetchAll()`)。
- 用 `mysql_*` 函数（PHP 7+ 移除）。

## 考试式题目

> **题（5 分）：** 写 PHP 片段用 PDO：
>
> (a) 以用户 `librarian` 连 MySQL 数据库 `library`。
> (b) 用预处理语句插一条新 Loan 行。
> (c) 解释预处理语句如何防 SQL 注入。

**参考答案：**

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

**如何防 SQL 注入**：SQL 模板先送到 DBMS；占位符 (`:m`、`:isbn` 等) 被作数据绑定而非拼到 SQL 字符串。即使值含 `'; DROP TABLE ...; --`，DBMS 视它为字面值而非可执行 SQL，所以恶意命令永不跑。

## 关键要点

- 用 `PDO` + 预处理语句。
- 凭证不进源代码。
- 多步改动包在事务里。

::: tip 接入 PHP 前先测 SQL
调试查询时，把它粘到 **[SQL Books](https://sqlbooks.codenav.dev)** 配真实测试数据，调到结果对了再移到 PHP 的 `prepare()` 调用。省小时。
:::

➡️ 下一节：[3.6 Cookie 与会话](./cookies-sessions)
