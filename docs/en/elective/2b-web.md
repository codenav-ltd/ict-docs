# 2B · Web Application Development

> **Curriculum hours:** 38 · **Paper weight:** ~12.5% of subject mark · **Main languages:** HTML, CSS, JavaScript (client-side) + PHP (server-side, from 2026 DSE).

This elective extends Module C. You learn to set up small networks, write client-side and server-side scripts, and build a complete simple web application.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Network Services & Implementation | 14 |
| b | Web Programming & Applications | 24 |

---

## a. Network Services & Implementation (14h)

### i · Client–server communication basics

- **Request / response** model — every client interaction is a request matched by a response.
- **TCP port numbers** identify the service (80 = HTTP, 443 = HTTPS, 21 = FTP, 22 = SSH, 25 = SMTP, 53 = DNS, 3306 = MySQL).
- **HTTP methods** — `GET` (retrieve, parameters in URL, idempotent) vs `POST` (send body, not idempotent).

```
GET /index.php?id=42 HTTP/1.1
Host: example.com

POST /login.php HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 32

user=alice&password=p%40ss
```

### Common network servers

| Server | Role |
|--------|------|
| **DHCP server** | Automatically gives IP addresses to clients |
| **Domain controller** | Centralises authentication in Windows networks |
| **File server** | Stores shared files |
| **Proxy server** | Forwards client requests, caches, filters |
| **Web server** | Serves HTML/CSS/JS over HTTP(S) (Apache, Nginx) |
| **Database server** | Serves data over a query protocol (MySQL, PostgreSQL) |
| **Gateway** | Translates between two different network protocols |

### ii · Basic network implementation

You must be able to:

- Set up a simple **Ethernet** (cabled) network.
- Set up a simple **wireless (Wi-Fi)** network with WPA2/WPA3.
- Share **files, printers, Internet connection** across the network.
- Set folder / file-sharing permissions (**read, write, execute**).
- Set up simple network services such as a web service or database service.

### Example: typical home/SBA network

```
Internet ─── Modem ─── Router (+ Wi-Fi AP) ─── Switch ─── PCs/Printer
                                  │
                                  └── Wireless laptops, phones, IoT
```

---

## b. Web Programming & Applications (24h)

### i · Web authoring and publishing

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SBA Mini Site</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Class Library</h1>
  </header>
  <main>
    <ul>
      <li>Book A</li>
      <li>Book B</li>
    </ul>
  </main>
</body>
</html>
```

#### CSS — applies a consistent look across pages

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
h1   { color: #3c6df0; }
ul   { line-height: 1.6; }
.card { border: 1px solid #ddd; padding: 1rem; border-radius: .5rem; }
```

#### Publishing options

- **Self-host**: copy files to a web server (Apache, Nginx).
- **Web CMS** (e.g. WordPress) for content-heavy sites.
- **Static hosts** (GitHub Pages, Netlify) for simple sites.

### ii · Web programming and applications

#### Client-side vs server-side

| Aspect | Client-side (JavaScript) | Server-side (PHP) |
|--------|--------------------------|-------------------|
| Runs on | User's browser | Web server |
| Sees | DOM, user events | Request, database, file system |
| Visible to user | Yes (View Source) | No |
| Used for | UI interaction, validation, animation | Auth, business rules, DB access |

#### Simple client-side script — input validation

```html
<form id="bmiForm">
  Height (m): <input id="h" type="number" step="0.01" required>
  Weight (kg): <input id="w" type="number" step="0.1" required>
  <button type="submit">Compute</button>
  <p id="result"></p>
</form>

<script>
document.getElementById('bmiForm').addEventListener('submit', e => {
  e.preventDefault();
  const h = parseFloat(document.getElementById('h').value);
  const w = parseFloat(document.getElementById('w').value);
  if (h <= 0 || w <= 0) {
    document.getElementById('result').textContent = 'Invalid input';
    return;
  }
  const bmi = (w / (h * h)).toFixed(1);
  document.getElementById('result').textContent = `BMI = ${bmi}`;
});
</script>
```

#### Simple server-side script — handling POST + database

```php
<?php
// process.php
session_start();

$name = $_POST['name'] ?? '';
$age  = (int)($_POST['age'] ?? 0);

if ($name === '' || $age < 1 || $age > 120) {
  echo "Invalid input";
  exit;
}

$pdo = new PDO('mysql:host=localhost;dbname=sba;charset=utf8mb4', 'sbauser', 'pw');
$stmt = $pdo->prepare('INSERT INTO members (name, age) VALUES (?, ?)');
$stmt->execute([$name, $age]);

echo "Registered: $name ($age)";
?>
```

#### Reading data back

```php
<?php
$stmt = $pdo->query('SELECT id, name, age FROM members ORDER BY id DESC');
foreach ($stmt as $row) {
  echo "<li>{$row['id']} · {$row['name']} ({$row['age']})</li>";
}
?>
```

#### Cookies

```php
// Set a cookie that expires in one week
setcookie('last_visit', date('Y-m-d H:i:s'), time() + 7 * 24 * 3600, '/');

// Read it on a later request
$lastVisit = $_COOKIE['last_visit'] ?? 'first time';
echo "Welcome back. Last visit: $lastVisit";
```

#### Sessions

```php
session_start();
$_SESSION['user_id'] = 42;     // store on the server
echo $_SESSION['user_id'];     // retrieve later
```

Sessions vs cookies:

| Cookie | Session |
|--------|---------|
| Stored on the client | Stored on the server (client only has a session ID cookie) |
| Visible & editable by the user | Hidden from the user |
| Limited size (~4 KB) | Effectively unlimited |
| Survives browser close if expiry set | Expires when session ends (default) |

### Sample end-to-end app · Class homework checklist

1. **Login** — PHP authenticates against `users` table, stores `user_id` in session.
2. **List view** — PHP `SELECT * FROM tasks WHERE user_id=?` and render `<ul>`.
3. **Add task** — HTML form POSTs to PHP which validates and `INSERT`s.
4. **Toggle done** — JavaScript click handler sends `fetch()` to PHP which `UPDATE`s.
5. **Logout** — destroys session.

::: tip Run your SBA database queries online
Whenever you are debugging the SQL layer of your PHP app, you don't need to fire up the whole stack. Paste your `SELECT`/`INSERT` into **[SQL Books](https://sqlbooks.codenav.dev)** — every account has its own MySQL sandbox so you can verify expected results before wiring them into PHP. Then drop the working query straight into `prepare()`.
:::

### New trends to mention (1-mark talking points)

- Responsive design / mobile-first
- Single-Page Applications (SPA)
- Progressive Web Apps (PWA)
- Serverless / cloud functions
- WebAssembly
- AI-assisted code generation

---

## Common mistakes

- Treating JavaScript validation as security — **never** trust client input on the server.
- Storing passwords in plaintext (always hash with `password_hash()` / `password_verify()`).
- Using `GET` for actions that change state (use `POST`).
- Building SQL with string concatenation — must use **prepared statements** to prevent SQL injection.
- Mixing up cookies and sessions in essays.

## Past-paper hotspots

- Identify the difference between client-side and server-side responsibility.
- Complete a partially-written PHP/JavaScript snippet.
- Explain HTTP GET vs POST with a scenario.
- Sketch a topology diagram for a small office.
- Discuss the role of sessions / cookies in a shopping-cart scenario.

➡️ Next: [2C · Algorithm & Programming](./2c-algorithm)
