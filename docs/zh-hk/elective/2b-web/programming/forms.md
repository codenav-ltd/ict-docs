# 3.4 · Form Handling & Validation

> **Goal:** accept user input safely with both client-side and server-side validation.

## End-to-end flow

```
1. HTML form (with HTML5 + JS validation)   ← convenience
   ↓ POST
2. Server-side PHP                            ← security
3. Database (if valid)                        ← persistence
4. Response (success or error)
```

## HTML form

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

HTML5 attributes (`required`, `type=email`, `min/max`) catch most casual errors.

## Client-side JavaScript validation

```javascript
form.addEventListener("submit", e => {
  const email = form.email.value;
  if (!email.includes("@")) {
    e.preventDefault();
    alert("Invalid email");
  }
});
```

## Server-side PHP validation — **the real defence**

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
    // safe to store
}
?>
```

### Validation checklist

| Check | Example |
|-------|---------|
| **Presence** | `$x !== ""` |
| **Type** | `is_numeric`, `filter_var(..., FILTER_VALIDATE_EMAIL)` |
| **Length** | `mb_strlen($s) <= 50` |
| **Range** | `1 <= n <= 100` |
| **Pattern** | `preg_match("/^[A-Z]\d{6}\(\d\)$/", $hkid)` for HKID format |
| **Uniqueness** | DB query to confirm no duplicate |
| **Consistency** | `start_date <= end_date` |

## CSRF protection (advanced but worth knowing)

Cross-Site Request Forgery: malicious site submits a form on behalf of a logged-in user. Defence: include a hidden, unpredictable token in every form and check it on submission.

## File uploads

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

Always:

- Check file type by **content**, not just extension.
- Store with a generated filename to avoid path traversal.
- Limit size.

## Common student mistakes

- Believing HTML5 + JS is enough.
- Forgetting `trim()` — surrounding spaces sneak through.
- Storing files in the same directory as PHP (security risk).
- Using simple string match for HKID — many corner cases.

## Exam-style question

> **Q (6 marks):** Design a registration page that captures Name, Email, Password. Describe:
> (a) Two HTML5 validation attributes you would use.
> (b) Two server-side checks in PHP and what each protects against.
> (c) How you would hash and store the password.

**Sample answer:**

(a) `required` on every input ensures non-empty; `type="email"` on email triggers built-in format check; `minlength="8"` on the password enforces a minimum length.

(b) Server-side:

- **`filter_var($email, FILTER_VALIDATE_EMAIL)`** — protects against malformed emails that bypassed the browser (the user could have disabled JS or used a tool to skip validation).
- **`mb_strlen($pw) >= 8` and pattern checks** — protect against weak passwords that browsers might not catch (older browsers ignore `minlength`).

(c) Use `password_hash($pw, PASSWORD_DEFAULT)` to compute a salted bcrypt/argon2 hash, then store the hash in the database. On login, `password_verify($pw, $hashFromDb)` confirms the password. Never store plaintext passwords.

## Key takeaways

- HTML5 + JS for UX, server-side for security.
- Validate type, length, range, pattern, uniqueness.
- Hash passwords; sanitise output (`htmlspecialchars`).

➡️ Next: [3.5 Database from PHP (PDO)](./php-database)
