# 3.4 · 表单处理与校验

> **目标：** 用客户端 + 服务器端双校验安全接收用户输入。

## 端到端流程

```
1. HTML 表单（HTML5 + JS 校验）         ← 便利
   ↓ POST
2. 服务器端 PHP                          ← 安全
3. 数据库（若有效）                       ← 持久
4. 响应（成功或错误）
```

## HTML 表单

```html
<form action="register.php" method="POST">
  <label>Name:
    <input name="name" required maxlength="50">
  </label>
  <label>Email:
    <input name="email" type="email" required>
  </label>
  <label>Age:
    <input name="age" type="number" min="6" max="99" required>
  </label>
  <button>Register</button>
</form>
```

HTML5 属性 (`required`、`type=email`、`min/max`) 抓多数随便错误。

## 客户端 JavaScript 校验

```javascript
form.addEventListener("submit", e => {
  const email = form.email.value;
  if (!email.includes("@")) {
    e.preventDefault();
    alert("Invalid email");
  }
});
```

## 服务器端 PHP 校验 —— **真正防线**

```php
<?php
$errors = [];

$name  = trim($_POST["name"]  ?? "");
$email = trim($_POST["email"] ?? "");
$age   = $_POST["age"]        ?? "";

if ($name === "" || mb_strlen($name) > 50) {
    $errors[] = "Name is required and ≤ 50 chars.";
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email.";
}
if (!is_numeric($age) || (int)$age < 6 || (int)$age > 99) {
    $errors[] = "Age must be 6-99.";
}

if ($errors) {
    foreach ($errors as $e) echo "<p>$e</p>";
} else {
    // 安全储存
}
?>
```

### 校验清单

| 检查 | 例 |
|-------|---------|
| **非空** | `$x !== ""` |
| **类型** | `is_numeric`、`filter_var(..., FILTER_VALIDATE_EMAIL)` |
| **长度** | `mb_strlen($s) <= 50` |
| **范围** | `1 <= n <= 100` |
| **模式** | `preg_match("/^[A-Z]\d{6}\(\d\)$/", $hkid)` 验 HKID |
| **唯一** | DB 查无重复 |
| **一致** | `start_date <= end_date` |

## CSRF 保护（进阶但值知道）

跨站请求伪造：恶意站以登入用户名义提交表单。防御：每表单含隐藏不可预测令牌，提交时验。

## 文件上传

```html
<form method="POST" enctype="multipart/form-data">
  <input type="file" name="photo" required>
  <button>Upload</button>
</form>
```

```php
<?php
if ($_FILES["photo"]["error"] === UPLOAD_ERR_OK) {
    $type = mime_content_type($_FILES["photo"]["tmp_name"]);
    if (in_array($type, ["image/jpeg","image/png"])) {
        move_uploaded_file($_FILES["photo"]["tmp_name"], "uploads/" . basename($_FILES["photo"]["name"]));
    } else {
        echo "Only JPG/PNG allowed.";
    }
}
?>
```

总要：

- 按**内容**而非扩展名查文件类型。
- 用生成的文件名存避路径穿越。
- 限大小。

## 学生常见错误

- 以为 HTML5 + JS 够了。
- 忘 `trim()` —— 首尾空格溜过。
- 把文件存在与 PHP 同目录（安全风险）。
- 用简单串匹配验 HKID —— 多极端情况。

## 考试式题目

> **题（6 分）：** 设注册页捕 Name、Email、Password。描述：
> (a) 你会用的两个 HTML5 校验属性。
> (b) PHP 中两项服务器端检查与各自防范什么。
> (c) 你怎样哈希并存密码。

**参考答案：**

(a) 每输入用 `required` 确保非空；email 上 `type="email"` 触发内置格式检查；密码上 `minlength="8"` 强制最小长度。

(b) 服务器端：

- **`filter_var($email, FILTER_VALIDATE_EMAIL)`** —— 防绕过浏览器的格式错邮箱（用户可禁 JS 或用工具跳校验）。
- **`mb_strlen($pw) >= 8` 与模式检查** —— 防浏览器抓不到的弱密码（旧浏览器忽视 `minlength`）。

(c) 用 `password_hash($pw, PASSWORD_DEFAULT)` 算加盐 bcrypt/argon2 哈希，把哈希存数据库。登入时 `password_verify($pw, $hashFromDb)` 验密码。绝不要存明文密码。

## 关键要点

- HTML5 + JS 给 UX，服务器端给安全。
- 校验类型、长度、范围、模式、唯一性。
- 哈希密码；输出转义 (`htmlspecialchars`)。

➡️ 下一节：[3.5 从 PHP 操作数据库 (PDO)](./php-database)
