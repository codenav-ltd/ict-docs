# 2B · 网络应用开发

> **课时：** 38 · **试卷权重：** 约全科 12.5% · **主要语言：** HTML、CSS、JavaScript（客户端） + PHP（服务器端，2026 DSE 起）。

本选修扩展模块 C。学习搭建小型网络、写客户端/服务器端脚本，并构建完整的简单 Web 应用。

## 子话题速览

| # | 子话题 | 课时 |
|---|--------|------|
| a | 网络服务与实施 | 14 |
| b | 网页编程与应用 | 24 |

---

## a. 网络服务与实施（14h）

### i · 客户端-服务器通讯基础

- **请求 / 响应** 模型 —— 每个客户端动作对应一个响应。
- **TCP 端口号** 标识服务（80 = HTTP、443 = HTTPS、21 = FTP、22 = SSH、25 = SMTP、53 = DNS、3306 = MySQL）。
- **HTTP 方法** —— `GET`（取数据，参数在 URL，幂等）vs `POST`（带 body，非幂等）。

### 常见网络服务器

| 服务器 | 角色 |
|--------|------|
| **DHCP 服务器** | 自动给客户端分配 IP |
| **域控制器** | 集中 Windows 网络认证 |
| **文件服务器** | 共享文件 |
| **代理服务器** | 转发请求、缓存、过滤 |
| **Web 服务器** | 提供 HTTP(S)（Apache、Nginx） |
| **数据库服务器** | 提供查询协议（MySQL、PostgreSQL） |
| **网关** | 在不同协议间转换 |

### ii · 基本网络实施

你须能：

- 建立简单**有线（Ethernet）** 网络。
- 建立简单**无线（Wi-Fi）** 网络（WPA2/WPA3）。
- 在网络中共享**文件、打印机、互联网**。
- 设置共享**权限**（读、写、执行）。
- 启动简单网络服务（Web、数据库）。

### 典型家庭/SBA 网络

```
互联网 ─── 调制解调器 ─── 路由器（+Wi-Fi AP） ─── 交换机 ─── PC/打印机
                                  │
                                  └── 无线设备
```

---

## b. 网页编程与应用（24h）

### i · 网页编写与发布

#### HTML

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>SBA 小项目</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header><h1>班级图书</h1></header>
  <main>
    <ul>
      <li>书 A</li>
      <li>书 B</li>
    </ul>
  </main>
</body>
</html>
```

#### CSS（让多页风格一致）

```css
body { font-family: system-ui, sans-serif; margin: 2rem; }
h1   { color: #3c6df0; }
ul   { line-height: 1.6; }
.card { border: 1px solid #ddd; padding: 1rem; border-radius: .5rem; }
```

#### 发布方式

- **自托管**：Apache / Nginx。
- **CMS**：WordPress。
- **静态托管**：GitHub Pages、Netlify。

### ii · 网页编程与应用

#### 客户端 vs 服务器端

| 维度 | 客户端（JavaScript） | 服务器端（PHP） |
|------|---------------------|----------------|
| 运行在 | 用户浏览器 | Web 服务器 |
| 能看到 | DOM、用户事件 | 请求、数据库、文件系统 |
| 用户可见 | 是（查看源代码） | 否 |
| 用途 | UI 交互、验证、动画 | 认证、业务规则、数据库 |

#### 客户端示例 —— 表单校验

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

#### 服务器端示例 —— 处理 POST + 数据库

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
| 储存在客户端 | 储存在服务器（客户端只有 session ID） |
| 用户可见可改 | 对用户隐藏 |
| 体积小（~4 KB） | 几乎无限 |
| 设了 expiry 即可跨浏览器会话 | 默认浏览器关闭即失效 |

### 端到端示例 · 班级功课清单

1. **登录** —— PHP 对 `users` 表认证，session 保存 `user_id`。
2. **列表** —— PHP `SELECT * FROM tasks WHERE user_id=?`。
3. **新增** —— HTML 表单 POST 给 PHP，校验后 `INSERT`。
4. **完成切换** —— JS click 事件 `fetch()` 给 PHP `UPDATE`。
5. **登出** —— 销毁 session。

::: tip 在线运行 SBA 数据库查询
调试 PHP 应用的 SQL 层时，不必启动整个栈。把 `SELECT`/`INSERT` 粘进 **[SQL Books](https://sqlbooks.codenav.dev)** —— 每账号自带 MySQL 沙盒，先验证 SQL 没问题，再放进 `prepare()`。
:::

### 新趋势话题（1 分小题）

- 响应式设计 / Mobile-first
- 单页应用（SPA）
- 渐进式 Web 应用（PWA）
- Serverless / 云函数
- WebAssembly
- AI 辅助编码

---

## 常见错误

- 把 JS 校验当成安全 —— 服务器**绝不**可信任客户端输入。
- 明文存密码（应使用 `password_hash` / `password_verify`）。
- 用 `GET` 做改状态的动作（应用 `POST`）。
- 字符串拼 SQL —— 必须用**预处理**防 SQL 注入。
- 论述中混用 cookie 和 session。

## 历届考题热点

- 区分客户端/服务器端职责。
- 补全 PHP/JavaScript 代码。
- 解释 HTTP GET vs POST。
- 画小型办公室拓扑图。
- 讨论购物车场景中 session/cookie 的角色。

➡️ 下一篇：[2C · 算法与编程](./2c-algorithm)
