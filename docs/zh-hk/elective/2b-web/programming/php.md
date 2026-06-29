# 3.3 · PHP 基礎

> **目標：** 讀寫基本 PHP。2026 DSE 起，PHP 是卷 2B 的服務器端語言。

## 文件結構

PHP 文件像嵌入 `<?php … ?>` 標籤的 HTML：

```php
<!DOCTYPE html>
<html>
<body>
  <h1>Hello, <?= htmlspecialchars($name ?? "guest") ?>!</h1>
</body>
</html>
```

Web 伺服器的 PHP 模組在送 HTML 給瀏覽器前解析 `<?php ?>` 裏的所有內容。

## 變數與基本類型

```php
<?php
$name  = "Alice";
$age   = 17;
$score = 86.5;
$ok    = true;

echo $name;                        // Alice
echo "$name is $age";              // Alice is 17  （雙引號內插值）
echo "$name is " . $age;           // 同上用拼接
?>
```

## 數組

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

## 控制結構

與多數語言相同 —— `if`、`elseif`、`else`、`switch`、`for`、`while`、`foreach`。

```php
<?php
if ($score >= 80) echo "A";
elseif ($score >= 70) echo "B";
elseif ($score >= 60) echo "C";
else echo "F";
?>
```

## 函式

```php
<?php
function add($a, $b) {
    return $a + $b;
}

echo add(2, 3);     // 5
?>
```

## 接收表單資料

```php
<?php
$name  = $_POST["name"] ?? "";      // 來自 POST 表單
$id    = $_GET["id"]    ?? 0;       // 來自 URL 查詢串
$cookie= $_COOKIE["last_visit"] ?? null;
?>
```

`$_POST`、`$_GET`、`$_COOKIE`、`$_SESSION`、`$_FILES`、`$_REQUEST`、`$_SERVER` 是**超全局**。

## 安全輸出

絕不要 `echo` 原始用户輸入 —— 用 `htmlspecialchars()` 防 XSS：

```php
<?php
echo "<p>Welcome, " . htmlspecialchars($name) . "</p>";
// 或短語法：
?>
<p>Welcome, <?= htmlspecialchars($name) ?></p>
```

## include / require 其他文件

```php
<?php
require_once "db.php";          // 缺失致命錯
include "header.html";          // 缺失警告
?>
```

常見模式：跨頁共享的 `header.php` 與 `footer.php`。

## 實例 · 帶表單的 Hello

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

## 學生常見錯誤

- 忘 `<?php` 開標籤 → 代碼顯示為文本。
- echo 原始用户輸入 → XSS。
- 把資料庫憑證硬編碼到提交的程式碼裏。
- 用過時 `mysql_*` 函式而不是 `PDO` 或 `mysqli_*`。

## 考試式題目

> **題（5 分）：** 寫 PHP 頁：從 `GET` 查詢參數 `n` 收一數字並列印它是奇是偶。`n` 缺或非數字則列印「Invalid input」。

**參考答案：**

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

## 關鍵要點

- PHP 在送 HTML 前在服務器跑。
- 超全局：`$_POST`、`$_GET`、`$_COOKIE`、`$_SESSION`。
- 總把用户輸入在輸出時轉義。

➡️ 下一節：[3.4 表單處理與校驗](./forms)