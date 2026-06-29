# 3.1 · HTML 基礎

> **目標：** 識別 HTML 文件結構並辨認常用標籤的角色。

## 最小有效 HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My first page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is my first web page.</p>
  <a href="https://www.hkeaa.edu.hk">HKEAA</a>
  <img src="logo.png" alt="School logo">
</body>
</html>
```

### 各部分作用

| 部分 | 用途 |
|------|---------|
| `<!DOCTYPE html>` | 聲明本文件為 HTML5 |
| `<html lang="en">` | 根元素；`lang` 為無障礙聲明語言 |
| `<head>` | 元資料（標題、字符集、CSS/JS 鏈接） |
| `<meta charset="UTF-8">` | 聲明字符編碼 —— 對中文支援必需 |
| `<title>` | 標籤頁標題；也被搜索引擎用 |
| `<body>` | 可見內容 |
| `<h1>`–`<h6>` | 標題（h1 最重要） |
| `<p>` | 段落 |
| `<a href="…">` | 超鏈接 |
| `<img src="…" alt="…">` | 圖像（無障礙需要 alt 文本） |
| `<ul> / <ol> / <li>` | 列表 |
| `<table> / <tr> / <td>` | 表格 |
| `<div> / <span>` | 通用容器 |

## 標籤 vs 屬性 vs 值

```
<a href="https://example.com">click</a>
└┬┘ └──┬─┘ └───────┬─────────┘ └─┬─┘ └┬┘
標籤   屬性         值          文本   結束
```

## 按用途分常用標籤

| 需求 | 標籤 |
|------|-----|
| 頁面區段 | `<section>`、`<article>`、`<header>`、`<footer>`、`<nav>` |
| 表單 | `<form>`、`<input>`、`<button>`、`<select>`、`<textarea>` |
| 媒體 | `<img>`、`<video>`、`<audio>` |
| 樣式鈎子 | `<div class="…">`、`<span id="…">` |
| 換行 | `<br>`（自閉） |
| 水平線 | `<hr>` |

## meta charset 為何重要

```html
<meta charset="UTF-8">
```

沒它，瀏覽器可能解錯位元組，把中文顯示成亂碼 (mojibake)。UTF-8 涵蓋所有現代文字。

## 頁面組織原則

課程指引提到：

- **易於導航** —— 顯眼菜單、鏈接合理放置。
- **鏈接、表格、框架、多媒體的合適放置**。
- **配色、背景、字號、字體**與目標受眾匹配。
- **跨平台兼容** —— 在任何現代瀏覽器上工作。

## 學生常見錯誤

- 忘 `<!DOCTYPE html>`。
- 把 `<img src="…">` 與 `<a href="…">` 搞反。
- 漏閉合 `</p>`。
- 到處用行內樣式而不是 CSS（CSS 在選修 2B 講）。

## 考試式題目

> **題（4 分）：** 寫一個最小 HTML 頁，包含標題「Welcome to ICT」、段落「We are learning HTML.」和指向 www.hkeaa.edu.hk 的鏈接。用 UTF-8。

**參考答案：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Welcome to ICT</title>
</head>
<body>
  <h1>Welcome to ICT</h1>
  <p>We are learning HTML.</p>
  <a href="https://www.hkeaa.edu.hk">HKEAA</a>
</body>
</html>
```

## 關鍵要點

- 識別標準骨架。
- 認識常用標籤角色。
- HTML 代碼**不**需要背 —— 但結構要會。

➡️ 下一節：[3.2 網頁發佈](./web-publishing)