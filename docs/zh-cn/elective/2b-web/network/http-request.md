# 1.2 · HTTP 请求 / 响应

> **目标：** 读原始 HTTP 消息并区分 GET 与 POST。

## HTTP 请求解剖

```
GET /index.html?id=42 HTTP/1.1     ← 请求行
Host: example.com                   ← 头…
User-Agent: Mozilla/5.0
Accept: text/html

                                    ← 空行 = 头结束
                                    （主体 —— GET 空）
```

| 部分 | 用途 |
|------|---------|
| 方法 | 做什么：GET、POST、PUT、DELETE… |
| 路径 | 哪个资源 |
| 版本 | HTTP/1.1、HTTP/2、HTTP/3 |
| 头 | 元数据：host、内容类型、cookie、认证 |
| 主体 | 负载（主要给 POST/PUT） |

## HTTP 响应解剖

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1342

<!DOCTYPE html>
<html>...</html>
```

| 部分 | 用途 |
|------|---------|
| 状态行 | 版本 + 状态码 + 原因 |
| 头 | 内容类型、长度、cookie、安全 |
| 主体 | 资源 |

## 常见 HTTP 状态码

| 码 | 含义 |
|------|---------|
| 200 OK | 成功 |
| 301 / 302 | 重定向 |
| 304 Not Modified | 缓存仍有效 |
| 400 Bad Request | 客户错 |
| 401 Unauthorized | 须登入 |
| 403 Forbidden | 已登入但不允许 |
| 404 Not Found | URL 错 |
| 500 Internal Server Error | 服务器崩 |
| 503 Service Unavailable | 服务器超载 / 关 |

## GET vs POST

| 特性 | GET | POST |
|---------|-----|------|
| 参数 | URL 查询串 | 请求主体 |
| 可加书签？ | 是 | 否 |
| 幂等？ | 是（安全重复） | 否 |
| 缓存 | 可缓存 | 通常不 |
| 主体大小 | 受限（~2 KB） | 大 |
| 用于 | 读 / 搜索 | 提交 / 改数据 |
| 浏览器历史可见 | 是 | 否 |

### 例子

```
GET /search?q=hkdse              ← 读
POST /login                       ← 提交表单
POST /api/orders                  ← 建新订单
```

## 端口号

| 服务 | 端口 |
|---------|------|
| HTTP | 80 |
| HTTPS | 443 |
| FTP | 21 |
| SSH | 22 |
| SMTP | 25 |
| DNS | 53 |
| MySQL | 3306 |
| PostgreSQL | 5432 |

单台服务器可在不同端口承载多服务。

## 学生常见错误

- 用 GET 做改状态动作（安全风险：bot 能触发）。
- 以为 POST 「更安全」 —— 无 HTTPS 时两者都可见。
- 忘了 HTTP **无状态** —— 会话 / cookie 在其上加状态。

## 考试式题目

> **题（5 分）：** 比较 GET 与 POST。各给合适用途并解释为何 GET 不适合你分给 POST 的那种操作。

**参考答案：**

| 特性 | GET | POST |
|---------|-----|------|
| 参数位置 | URL 查询 | 请求主体 |
| 幂等 | 是 | 否 |
| 主体大小 | 小 | 大 |
| 用 | 读 / 搜索 | 提交改状态数据 |

**合适用途**：

- **GET**：搜学校目录 —— `/search?keyword=python`。安全、可加书签、可重复、可缓存。
- **POST**：提交登入表单 —— `/login` 用户名密码在主体。

**为何 GET 不适合登入**：GET 把参数放 URL，会出现在浏览器历史、服务器日志和 Referer 头 —— 暴露密码。POST 把主体留在 URL 与日志外，且非幂等所以不会被意外重放。

## 关键要点

- HTTP 消息有请求行 / 状态行、头、可选主体。
- GET 读；POST 改。
- 状态码（2xx 成功、3xx 重定向、4xx 客户错、5xx 服务器错）。

➡️ 下一节：[1.3 网络服务器](./servers)
