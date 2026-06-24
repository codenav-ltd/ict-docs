# 3.6 · Cookies & Sessions

> **Goal:** know the difference, set both, and use sessions to track logged-in users.

## Why we need them

HTTP is **stateless** — each request is independent. To remember "this is the same user who logged in 10 minutes ago", we need some form of state.

## Cookies

A **cookie** is a small piece of data stored on the **client**. The browser sends it back on every subsequent request to the same domain.

### Setting / reading

```php
<?php
// Set a cookie that lasts 7 days
setcookie("last_visit", date("Y-m-d H:i:s"), time() + 7 * 24 * 3600, "/");

// Read it (available on the NEXT request)
$last = $_COOKIE["last_visit"] ?? "first time";
echo "Welcome back. Last visit: $last";
?>
```

### Cookie attributes

| Attribute | Purpose |
|-----------|---------|
| `expires` / `max-age` | When the cookie expires |
| `path` | URL path scope |
| `domain` | Domain scope |
| `secure` | Only sent over HTTPS |
| `HttpOnly` | Not accessible to JavaScript (protects against XSS) |
| `SameSite` | Restricts cross-site sending (CSRF protection) |

## Sessions

A **session** stores data on the **server**. The browser only sees a short **session ID** in a cookie, sent back with each request.

```php
<?php
session_start();                    // call before any output

// Write to session
$_SESSION["user_id"] = 1001;
$_SESSION["role"]    = "student";

// Read from session
echo $_SESSION["role"] ?? "guest";
?>
```

To log out:

```php
<?php
session_start();
$_SESSION = [];
session_destroy();
?>
```

## Cookie vs Session

| Feature | Cookie | Session |
|---------|--------|---------|
| Stored | On client | On server (client has only session ID) |
| Size | ~4 KB | Effectively unlimited |
| Visibility | User can inspect / modify | Hidden from user |
| Persists across browser close? | If `expires` is set | No (default expires when browser closes) |
| Speed | Sent on every request | Lookup on server |
| Use for | User preferences, last visit, tracking | Authentication, shopping cart |

## A complete login flow

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

## Security considerations

- Always use `Secure` + `HttpOnly` cookies on HTTPS sites.
- Regenerate session ID after login: `session_regenerate_id(true);`.
- Limit session lifetime; require re-login for sensitive actions.
- Use CSRF tokens on state-changing forms.

## Common student mistakes

- Storing sensitive data in cookies (any user can read them).
- Forgetting `session_start()` at the top of every page that uses `$_SESSION`.
- Using sessions instead of database for permanent data — sessions disappear when expired.

## Exam-style question

> **Q (5 marks):** Distinguish cookies and sessions. Describe how a shopping site can use them together for a "remember me" feature plus a logged-in cart.

**Sample answer:**

A **cookie** is data stored on the client's browser; small (~4 KB) and visible/modifiable by the user. A **session** stores data on the server; the client only holds a session ID. Sessions are appropriate for sensitive data (login state), cookies for low-sensitivity persistent preferences.

A shopping site can combine both:

- **"Remember me"** — store a long-lived cookie containing a random "remember token". On the next visit, the server matches the token to a user record and starts a session automatically.
- **Logged-in cart** — the cart contents live in the user's session on the server, retrieved by the session ID cookie sent in every request. This way the cart survives navigation but isn't visible to other users.

For security, the remember-me token is unique per device, can be revoked from the user's account page, and the session cookie has `HttpOnly` + `Secure` flags.

## Key takeaways

- Cookies = client; sessions = server.
- Use sessions for sensitive state; cookies for preferences.
- Always secure with HTTPS + flags.

➡️ Next: [3.7 Building a Simple Web App](./simple-app)
