# 3.4 · 表單處理與校驗

> **目標：** 用客户端 + 服務器端雙校驗安全接收用户輸入。

## 端到端流程

```
1. HTML 表單（HTML5 + JS 校驗）         ← 便利
   ↓ POST
2. 服務器端 PHP                          ← 安全
3. 資料庫（若有效）                       ← 持久
4. 響應（成功或錯誤）
```

## HTML 表單

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

HTML5 屬性 (`required`、`type=email`、`min/max`) 抓多數隨便錯誤。

## 客户端 JavaScript 校驗

```javascript
form.addEventListener("submit", e => {
  const email = form.email.value;
  if (!email.includes("@")) {
    e.preventDefault();
    alert("Invalid email");
  }
});
```

## 服務器端 PHP 校驗 —— **真正防線**

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
    // 安全儲存
}
?>
```

### 校驗清單

| 檢查 | 例 |
|-------|---------|
| **非空** | `$x !== ""` |
| **類型** | `is_numeric`、`filter_var(..., FILTER_VALIDATE_EMAIL)` |
| **長度** | `mb_strlen($s) <= 50` |
| **範圍** | `1 <= n <= 100` |
| **模式** | `preg_match("/^[A-Z]\d{6}\(\d\)$/", $hkid)` 驗 HKID |
| **唯一** | DB 查無重複 |
| **一致** | `start_date <= end_date` |

## CSRF 保護（進階但值知道）

跨站請求偽造：惡意站以登入用户名義提交表單。防禦：每表單含隱藏不可預測令牌，提交時驗。

## 文件上載

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

總要：

- 按**內容**而非擴展名查文件類型。
- 用生成的文件名存避路徑穿越。
- 限大小。

## 學生常見錯誤

- 以為 HTML5 + JS 夠了。
- 忘 `trim()` —— 首尾空格溜過。
- 把文件存在與 PHP 同目錄（安全風險）。
- 用簡單串匹配驗 HKID —— 多極端情況。

## 考試式題目

> **題（6 分）：** 設註冊頁捕 Name、Email、Password。描述：
> (a) 你會用的兩個 HTML5 校驗屬性。
> (b) PHP 中兩項服務器端檢查與各自防範什麼。
> (c) 你怎樣哈希並存密碼。

**參考答案：**

(a) 每輸入用 `required` 確保非空；email 上 `type="email"` 觸發內建格式檢查；密碼上 `minlength="8"` 強制最小長度。

(b) 服務器端：

- **`filter_var($email, FILTER_VALIDATE_EMAIL)`** —— 防繞過瀏覽器的格式錯郵箱（用户可禁 JS 或用工具跳校驗）。
- **`mb_strlen($pw) >= 8` 與模式檢查** —— 防瀏覽器抓不到的弱密碼（舊瀏覽器忽視 `minlength`）。

(c) 用 `password_hash($pw, PASSWORD_DEFAULT)` 算加鹽 bcrypt/argon2 哈希，把哈希存資料庫。登入時 `password_verify($pw, $hashFromDb)` 驗密碼。絕不要存明文密碼。

## 關鍵要點

- HTML5 + JS 給 UX，服務器端給安全。
- 校驗類型、長度、範圍、模式、唯一性。
- 哈希密碼；輸出轉義 (`htmlspecialchars`)。

➡️ 下一節：[3.5 從 PHP 操作資料庫 (PDO)](./php-database)