# 3.6 · Cookie 与会话

> **目标：** 知道差异、设两者、用会话追踪登入用户。

## 为何需要

HTTP **无状态** —— 每个请求独立。要记住「这是 10 分钟前登入的同一用户」就要某种状态。

## Cookie

**Cookie** 是存在**客户**的一小块数据。浏览器在向同一域的之后每个请求都送回。

### 设 / 读

```php
<?php
// 设 7 天有效的 cookie
setcookie("last_visit", date("Y-m-d H:i:s"), time() + 7 * 24 * 3600, "/");

// 读它（**下次**请求才有）
$last = $_COOKIE["last_visit"] ?? "first time";
echo "Welcome back. Last visit: $last";
?>
```

### Cookie 属性

| 属性 | 用途 |
|-----------|---------|
| `expires` / `max-age` | cookie 何时过期 |
| `path` | URL 路径范围 |
| `domain` | 域范围 |
| `secure` | 仅在 HTTPS 上发 |
| `HttpOnly` | JS 不可访问（防 XSS） |
| `SameSite` | 限跨站发送（防 CSRF） |

## 会话

**会话**数据存在**服务器**。浏览器只见 cookie 里短**会话 ID**，每请求送回。

```php
<?php
session_start();                    // 任何输出前调

// 写会话
$_SESSION["user_id"] = 1001;
$_SESSION["role"]    = "student";

// 读会话
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

## Cookie vs 会话

| 特性 | Cookie | 会话 |
|---------|--------|---------|
| 存于 | 客户 | 服务器（客户只有会话 ID） |
| 大小 | ~4 KB | 几乎无限 |
| 可见 | 用户可查 / 改 | 用户看不到 |
| 浏览器关后还存？ | `expires` 已设则是 | 否（默认关浏览器过期） |
| 速度 | 每请求都送 | 服务器查找 |
| 用于 | 用户偏好、上次访问、追踪 | 认证、购物车 |

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

- HTTPS 站总用 `Secure` + `HttpOnly` cookie。
- 登入后再生会话 ID：`session_regenerate_id(true);`。
- 限会话寿命；敏感动作要求再登入。
- 改状态表单加 CSRF 令牌。

## 学生常见错误

- 在 cookie 里存敏感数据（任何用户能读）。
- 用 `$_SESSION` 的每页顶部忘 `session_start()`。
- 用会话存永久数据 —— 会话过期就消失。

## 考试式题目

> **题（5 分）：** 区分 cookie 与会话。描述购物站如何用两者合做「记住我」与登入态购物车。

**参考答案：**

**Cookie** 是存在客户浏览器的数据；小（~4 KB），用户可见 / 可改。**会话**把数据存在服务器；客户只持会话 ID。会话适合敏感数据（登入态），cookie 适合低敏感的持久偏好。

购物站可两者合用：

- **「记住我」** —— 存长寿 cookie 装随机「记住令牌」。下次访问，服务器把令牌匹到用户记录并自动起会话。
- **登入态购物车** —— 购物车内容存在用户服务器会话里，由每请求送的会话 ID cookie 取回。这样购物车跨导航存留但对其他用户不可见。

为安全，记住我令牌每设备唯一、可从用户账号页撤销，会话 cookie 带 `HttpOnly` + `Secure` 标志。

## 关键要点

- Cookie = 客户；会话 = 服务器。
- 敏感态用会话；偏好用 cookie。
- 用 HTTPS + 标志保安全。

➡️ 下一节：[3.7 建简易网页应用](./simple-app)
