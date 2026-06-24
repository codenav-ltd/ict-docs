# 2B · 網絡應用開發

> **課時：** 38 · **試卷權重：** 約全科 12.5% · **主要語言：** HTML、CSS、JavaScript（客户端） + PHP（伺服器端，2026 DSE 起）。

本選修擴展模組 C。學習搭建小型網絡、寫客户端/伺服器端指令碼，並構建完整的簡單 Web 應用。

## 子話題速覽

| # | 子話題 | 課時 |
|---|--------|------|
| a | 網絡服務與實施 | 14 |
| b | 網頁編程與應用 | 24 |

---

## a. 網絡服務與實施（14h）

### i · 客户端-伺服器通訊基礎

- **請求 / 響應** 模型 —— 每個客户端動作對應一個響應。
- **TCP 端口號** 標識服務（80 = HTTP、443 = HTTPS、21 = FTP、22 = SSH、25 = SMTP、53 = DNS、3306 = MySQL）。
- **HTTP 方法** —— `GET`（取資料，參數在 URL，冪等）vs `POST`（帶 body，非冪等）。

### 常見網絡伺服器

| 伺服器 | 角色 |
|--------|------|
| **DHCP 伺服器** | 自動給客户端分配 IP |
| **域控制器** | 集中 Windows 網絡認證 |
| **文件伺服器** | 共享文件 |
| **代理伺服器** | 轉發請求、緩存、過濾 |
| **Web 伺服器** | 提供 HTTP(S)（Apache、Nginx） |
| **資料庫伺服器** | 提供查詢協議（MySQL、PostgreSQL） |
| **網關** | 在不同協議間轉換 |

### ii · 基本網絡實施

你須能：

- 建立簡單**有線（Ethernet）** 網絡。
- 建立簡單**無線（Wi-Fi）** 網絡（WPA2/WPA3）。
- 在網絡中共享**文件、列印機、互聯網**。
- 設置共享**權限**（讀、寫、執行）。
- 啓動簡單網絡服務（Web、資料庫）。

### 典型家庭/SBA 網絡

```
互聯網 ─── 調製解調器 ─── 路由器（+Wi-Fi AP） ─── 交換機 ─── PC/列印機
                                  │
                                  └── 無線設備
```

---

## b. 網頁編程與應用（24h）

### i · 網頁編寫與發佈

#### HTML

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>SBA 小項目</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header><h1>班級圖書</h1></header>
  <main>
    <ul>
      <li>書 A</li>
      <li>書 B</li>
    </ul>
  </main>
</body>
</html>
```

#### CSS（讓多頁風格一致）

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
h1   { color: #3c6df0; }
ul   { line-height: 1.6; }
.card { border: 1px solid #ddd; padding: 1rem; border-radius: .5rem; }
```

#### 發佈方式

- **自託管**：Apache / Nginx。
- **CMS**：WordPress。
- **靜態託管**：GitHub Pages、Netlify。

### ii · 網頁編程與應用

#### 客户端 vs 伺服器端

| 維度 | 客户端（JavaScript） | 伺服器端（PHP） |
|------|---------------------|----------------|
| 運行在 | 用户瀏覽器 | Web 伺服器 |
| 能看到 | DOM、用户事件 | 請求、資料庫、文件系統 |
| 用户可見 | 是（查看原始碼） | 否 |
| 用途 | UI 交互、驗證、動畫 | 認證、業務規則、資料庫 |

#### 客户端例子 —— 表單校驗

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
  if (h <= 0 || w <= 0) { return document.getElementById('result').textContent = 'Invalid'; }
  document.getElementById('result').textContent = 'BMI = ' + (w / (h*h)).toFixed(1);
});
</script>
```

#### 伺服器端例子 —— 處理 POST + 資料庫

```php
<?php
session_start();
$name = $_POST['name'] ?? '';
$age  = (int)($_POST['age'] ?? 0);
if ($name === '' || $age < 1 || $age > 120) { echo "Invalid input"; exit; }

$pdo = new PDO('mysql:host=localhost;dbname=sba;charset=utf8mb4', 'sbauser', 'pw');
$stmt = $pdo->prepare('INSERT INTO members (name, age) VALUES (?, ?)');
$stmt->execute([$name, $age]);
echo "Registered: $name ($age)";
?>
```

#### Cookie

```php
setcookie('last_visit', date('Y-m-d H:i:s'), time() + 7 * 24 * 3600, '/');
$lastVisit = $_COOKIE['last_visit'] ?? 'first time';
```

#### Session

```php
session_start();
$_SESSION['user_id'] = 42;
echo $_SESSION['user_id'];
```

| Cookie | Session |
|--------|---------|
| 儲存在客户端 | 儲存在伺服器（客户端只有 session ID） |
| 用户可見可改 | 對用户隱藏 |
| 體積小（~4 KB） | 幾乎無限 |
| 設了 expiry 即可跨瀏覽器會話 | 默認瀏覽器關閉即失效 |

### 端到端例子 · 班級功課清單

1. **登錄** —— PHP 對 `users` 表認證，session 保存 `user_id`。
2. **列表** —— PHP `SELECT * FROM tasks WHERE user_id=?`。
3. **新增** —— HTML 表單 POST 給 PHP，校驗後 `INSERT`。
4. **完成切換** —— JS click 事件 `fetch()` 給 PHP `UPDATE`。
5. **登出** —— 銷燬 session。

::: tip 在線運行 SBA 資料庫查詢
調試 PHP 應用的 SQL 層時，不必啓動整個堆疊。把 `SELECT`/`INSERT` 粘進 **[SQL Books](https://sqlbooks.codenav.dev)** —— 每賬號自帶 MySQL 沙盒，先驗證 SQL 沒問題，再放進 `prepare()`。
:::

### 新趨勢話題（1 分小題）

- 響應式設計 / Mobile-first
- 單頁應用（SPA）
- 漸進式 Web 應用（PWA）
- Serverless / 雲函式
- WebAssembly
- AI 輔助編碼

---

## 常見錯誤

- 把 JS 校驗當成安全 —— 伺服器**絕不**可信任客户端輸入。
- 明文存密碼（應使用 `password_hash` / `password_verify`）。
- 用 `GET` 做改狀態的動作（應用 `POST`）。
- 字符串拼 SQL —— 必須用**預處理**防 SQL 注入。
- 論述中混用 cookie 和 session。

## 歷屆考題熱點

- 區分客户端/伺服器端職責。
- 補全 PHP/JavaScript 程式碼。
- 解釋 HTTP GET vs POST。
- 畫小型辦公室拓撲圖。
- 討論購物車場景中 session/cookie 的角色。

➡️ 下一篇：[2C · 演演算法與編程](./2c-algorithm)
