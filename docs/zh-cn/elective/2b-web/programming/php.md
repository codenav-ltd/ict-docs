# 3.3 · PHP 基础

> **目标：** 读写基本 PHP。2026 DSE 起，PHP 是卷 2B 的服务器端语言。

## 文件结构

PHP 文件像嵌入 `<?php … ?>` 标签的 HTML：

```php
<!DOCTYPE html>
<html>
<body>
  <h1>Hello, <?= htmlspecialchars($name ?? "guest") ?>!</h1>
</body>
</html>
```

Web 服务器的 PHP 模组在送 HTML 给浏览器前解析 `<?php ?>` 里的所有内容。

## 变量与基本类型

```php
<?php
$name  = "Alice";
$age   = 17;
$score = 86.5;
$ok    = true;

echo $name;                        // Alice
echo "$name is $age";              // Alice is 17  （双引号内插值）
echo "$name is " . $age;           // 同上用拼接
?>
```

## 数组

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

## 控制结构

与多数语言相同 —— `if`、`elseif`、`else`、`switch`、`for`、`while`、`foreach`。

```php
<?php
if ($score >= 80) echo "A";
elseif ($score >= 70) echo "B";
elseif ($score >= 60) echo "C";
else echo "F";
?>
```

## 函数

```php
<?php
function add($a, $b) {
    return $a + $b;
}

echo add(2, 3);     // 5
?>
```

## 接收表单数据

```php
<?php
$name  = $_POST["name"] ?? "";      // 来自 POST 表单
$id    = $_GET["id"]    ?? 0;       // 来自 URL 查询串
$cookie= $_COOKIE["last_visit"] ?? null;
?>
```

`$_POST`、`$_GET`、`$_COOKIE`、`$_SESSION`、`$_FILES`、`$_REQUEST`、`$_SERVER` 是**超全局**。

## 安全输出

绝不要 `echo` 原始用户输入 —— 用 `htmlspecialchars()` 防 XSS：

```php
<?php
echo "<p>Welcome, " . htmlspecialchars($name) . "</p>";
// 或短语法：
?>
<p>Welcome, <?= htmlspecialchars($name) ?></p>
```

## include / require 其他文件

```php
<?php
require_once "db.php";          // 缺失致命错
include "header.html";          // 缺失警告
?>
```

常见模式：跨页共享的 `header.php` 与 `footer.php`。

## 实例 · 带表单的 Hello

```php
<?php
$name = $_POST["name"] ?? "";
?>
<!DOCTYPE html>
<html>
<body>
  <form method="POST">
    Your name: <input name="name" required>
    <button>Greet</button>
  </form>
  <?php if ($name !== ""): ?>
    <p>Hello, <?= htmlspecialchars($name) ?>!</p>
  <?php endif; ?>
</body>
</html>
```

## 学生常见错误

- 忘 `<?php` 开标签 → 代码显示为文本。
- echo 原始用户输入 → XSS。
- 把数据库凭证硬编码到提交的代码里。
- 用过时 `mysql_*` 函数而不是 `PDO` 或 `mysqli_*`。

## 考试式题目

> **题（5 分）：** 写 PHP 页：从 `GET` 查询参数 `n` 收一数字并打印它是奇是偶。`n` 缺或非数字则打印「Invalid input」。

**参考答案：**

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

## 关键要点

- PHP 在送 HTML 前在服务器跑。
- 超全局：`$_POST`、`$_GET`、`$_COOKIE`、`$_SESSION`。
- 总把用户输入在输出时转义。

➡️ 下一节：[3.4 表单处理与校验](./forms)
