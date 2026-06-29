# 3.6 · Cookie 與會話

> **目標：** 知道差異、設兩者、用會話追蹤登入用户。

## 為何需要

HTTP **無狀態** —— 每個請求獨立。要記住「這是 10 分鐘前登入的同一用户」就要某種狀態。

## Cookie

**Cookie** 是存在**客户**的一小塊資料。瀏覽器在向同一域的之後每個請求都送回。

### 設 / 讀

```php
<?php
// 設 7 天有效的 cookie
setcookie("last_visit", date("Y-m-d H:i:s"), time() + 7 * 24 * 3600, "/");

// 讀它（**下次**請求才有）
$last = $_COOKIE["last_visit"] ?? "first time";
echo "Welcome back. Last visit: $last";
?>
```

### Cookie 屬性

| 屬性 | 用途 |
|-----------|---------|
| `expires` / `max-age` | cookie 何時過期 |
| `path` | URL 路徑範圍 |
| `domain` | 域範圍 |
| `secure` | 僅在 HTTPS 上發 |
| `HttpOnly` | JS 不可訪問（防 XSS） |
| `SameSite` | 限跨站發送（防 CSRF） |

## 會話

**會話**資料存在**服務器**。瀏覽器只見 cookie 裏短**會話 ID**，每請求送回。

```php
<?php
session_start();                    // 任何輸出前調

// 寫會話
$_SESSION["user_id"] = 1001;
$_SESSION["role"]    = "student";

// 讀會話
echo $_SESSION["role"] ?? "guest";
?>
```

登出：

```php
<?php
session_start();
$_SESSION = [];
session_destroy();
?>
```

## Cookie vs 會話

| 特性 | Cookie | 會話 |
|---------|--------|---------|
| 存於 | 客户 | 服務器（客户只有會話 ID） |
| 大小 | ~4 KB | 幾乎無限 |
| 可見 | 用户可查 / 改 | 用户看不到 |
| 瀏覽器關後還存？ | `expires` 已設則是 | 否（默認關瀏覽器過期） |
| 速度 | 每請求都送 | 服務器查找 |
| 用於 | 用户偏好、上次訪問、追蹤 | 認證、購物車 |

## 完整登入流程

```php
<?php
// login.php
session_start();
require "db.php";

$stmt = $pdo->prepare("SELECT id, pw_hash FROM users WHERE username = ?");
$stmt->execute([$_POST["user"]]);
$row = $stmt->fetch();

if ($row && password_verify($_POST["pw"], $row["pw_hash"])) {
    $_SESSION["user_id"] = $row["id"];
    header("Location: /dashboard.php");
    exit;
} else {
    echo "Login failed.";
}
?>
```

```php
<?php
// dashboard.php
session_start();
if (!isset($_SESSION["user_id"])) {
    header("Location: /login.php");
    exit;
}
echo "Hello, user #" . $_SESSION["user_id"];
?>
```

## 安全考量

- HTTPS 站總用 `Secure` + `HttpOnly` cookie。
- 登入後再生會話 ID：`session_regenerate_id(true);`。
- 限會話壽命；敏感動作要求再登入。
- 改狀態表單加 CSRF 令牌。

## 學生常見錯誤

- 在 cookie 裏存敏感資料（任何用户能讀）。
- 用 `$_SESSION` 的每頁頂部忘 `session_start()`。
- 用會話存永久資料 —— 會話過期就消失。

## 考試式題目

> **題（5 分）：** 區分 cookie 與會話。描述購物站如何用兩者合做「記住我」與登入態購物車。

**參考答案：**

**Cookie** 是存在客户瀏覽器的資料；小（~4 KB），用户可見 / 可改。**會話**把資料存在服務器；客户只持會話 ID。會話適合敏感資料（登入態），cookie 適合低敏感的持久偏好。

購物站可兩者合用：

- **「記住我」** —— 存長壽 cookie 裝隨機「記住令牌」。下次訪問，服務器把令牌匹到用户記錄並自動起會話。
- **登入態購物車** —— 購物車內容存在用户服務器會話裏，由每請求送的會話 ID cookie 取回。這樣購物車跨導航存留但對其他用户不可見。

為安全，記住我令牌每設備唯一、可從用户賬號頁撤銷，會話 cookie 帶 `HttpOnly` + `Secure` 標誌。

## 關鍵要點

- Cookie = 客户；會話 = 服務器。
- 敏感態用會話；偏好用 cookie。
- 用 HTTPS + 標誌保安全。

➡️ 下一節：[3.7 建簡易網頁應用](./simple-app)