# 1.2 · HTTP 請求 / 響應

> **目標：** 讀原始 HTTP 消息並區分 GET 與 POST。

## HTTP 請求解剖

```
GET /index.html?id=42 HTTP/1.1     ← 請求行
Host: example.com                   ← 頭…
User-Agent: Mozilla/5.0
Accept: text/html

                                    ← 空行 = 頭結束
                                    （主體 —— GET 空）
```

| 部分 | 用途 |
|------|---------|
| 方法 | 做什麼：GET、POST、PUT、DELETE… |
| 路徑 | 哪個資源 |
| 版本 | HTTP/1.1、HTTP/2、HTTP/3 |
| 頭 | 元資料：host、內容類型、cookie、認證 |
| 主體 | 負載（主要給 POST/PUT） |

## HTTP 響應解剖

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1342

<!DOCTYPE html>
<html>...</html>
```

| 部分 | 用途 |
|------|---------|
| 狀態行 | 版本 + 狀態碼 + 原因 |
| 頭 | 內容類型、長度、cookie、安全 |
| 主體 | 資源 |

## 常見 HTTP 狀態碼

| 碼 | 含義 |
|------|---------|
| 200 OK | 成功 |
| 301 / 302 | 重定向 |
| 304 Not Modified | 快取仍有效 |
| 400 Bad Request | 客户錯 |
| 401 Unauthorized | 須登入 |
| 403 Forbidden | 已登入但不允許 |
| 404 Not Found | URL 錯 |
| 500 Internal Server Error | 服務器崩 |
| 503 Service Unavailable | 服務器超載 / 關 |

## GET vs POST

| 特性 | GET | POST |
|---------|-----|------|
| 參數 | URL 查詢串 | 請求主體 |
| 可加書籤？ | 是 | 否 |
| 冪等？ | 是（安全重複） | 否 |
| 快取 | 可快取 | 通常不 |
| 主體大小 | 受限（~2 KB） | 大 |
| 用於 | 讀 / 搜索 | 提交 / 改資料 |
| 瀏覽器歷史可見 | 是 | 否 |

### 例子

```
GET /search?q=hkdse              ← 讀
POST /login                       ← 提交表單
POST /api/orders                  ← 建新訂單
```

## 端口號

| 服務 | 端口 |
|---------|------|
| HTTP | 80 |
| HTTPS | 443 |
| FTP | 21 |
| SSH | 22 |
| SMTP | 25 |
| DNS | 53 |
| MySQL | 3306 |
| PostgreSQL | 5432 |

單台服務器可在不同端口承載多服務。

## 學生常見錯誤

- 用 GET 做改狀態動作（安全風險：bot 能觸發）。
- 以為 POST 「更安全」 —— 無 HTTPS 時兩者都可見。
- 忘了 HTTP **無狀態** —— 會話 / cookie 在其上加狀態。

## 考試式題目

> **題（5 分）：** 比較 GET 與 POST。各給合適用途並解釋為何 GET 不適合你分給 POST 的那種操作。

**參考答案：**

| 特性 | GET | POST |
|---------|-----|------|
| 參數位置 | URL 查詢 | 請求主體 |
| 冪等 | 是 | 否 |
| 主體大小 | 小 | 大 |
| 用 | 讀 / 搜索 | 提交改狀態資料 |

**合適用途**：

- **GET**：搜學校目錄 —— `/search?keyword=python`。安全、可加書籤、可重複、可快取。
- **POST**：提交登入表單 —— `/login` 用户名密碼在主體。

**為何 GET 不適合登入**：GET 把參數放 URL，會出現在瀏覽器歷史、服務器日誌和 Referer 頭 —— 暴露密碼。POST 把主體留在 URL 與日誌外，且非冪等所以不會被意外重放。

## 關鍵要點

- HTTP 消息有請求行 / 狀態行、頭、可選主體。
- GET 讀；POST 改。
- 狀態碼（2xx 成功、3xx 重定向、4xx 客户錯、5xx 服務器錯）。

➡️ 下一節：[1.3 網絡服務器](./servers)