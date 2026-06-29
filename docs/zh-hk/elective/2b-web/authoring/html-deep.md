# 2.1 · HTML 深入

> **目標：** 比模組 C 基礎多 —— 語義標籤、表單、表格、媒體。

## 語義標籤

為無障礙與 SEO，多用以下而非到處 `<div>`：

| 標籤 | 用途 |
|-----|-----|
| `<header>` | 頁面或區段頂 |
| `<nav>` | 導航鏈接 |
| `<main>` | 主內容 |
| `<article>` | 自含一塊 |
| `<section>` | 通用區段 |
| `<aside>` | 側欄 / 附帶 |
| `<footer>` | 頁面底 |
| `<figure>` / `<figcaption>` | 帶標題圖像 |
| `<time datetime="2026-06-24">` | 機器可讀日期 |

## 表單

```html
<form action="/login" method="POST">
  <label for="user">Username:</label>
  <input id="user" name="user" type="text" required>

  <label for="pw">Password:</label>
  <input id="pw" name="pw" type="password" required minlength="8">

  <label for="remember">
    <input id="remember" name="remember" type="checkbox">
    Remember me
  </label>

  <button type="submit">Log in</button>
</form>
```

### 輸入類型

| 類型 | 用途 |
|------|---------|
| `text` | 一般文本 |
| `password` | 隱藏文本 |
| `email` | 郵箱格式校驗 |
| `number` | 數字輸入 |
| `tel` | 電話 |
| `date` / `time` / `datetime-local` | 時間選取器 |
| `checkbox` / `radio` | 布林 / 多選一 |
| `file` | 上載 |
| `hidden` | 用户不可見 |
| `submit` / `reset` | 按鈕 |

### 校驗屬性

`required`、`minlength`、`maxlength`、`pattern`、`min`、`max`、`step`。

## 表格

```html
<table>
  <thead>
    <tr><th>Name</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>86</td></tr>
    <tr><td>Bob</td><td>72</td></tr>
  </tbody>
</table>
```

僅用於表格**資料** —— 不要用於佈局。

## 媒體

```html
<img src="logo.png" alt="School logo">
<video src="intro.mp4" controls></video>
<audio src="welcome.mp3" controls></audio>
```

圖像總帶 `alt` 文本（無障礙）。

## 學生常見錯誤

- 用表格做**佈局**（用 CSS grid / flexbox）。
- 表單輸入忘 `name` 屬性（提交時不會送）。
- 圖像忘 `alt` 文本。
- 混淆 `<b>`（粗）與 `<strong>`（語義強）—— 表意優先用語義的。

## 考試式題目

> **題（5 分）：** 為聯繫頁搭簡單 HTML 表單。含 Name（必填，至多 100 字符）、Email（必須有效）、Message（textarea，必填，至少 10 字符）和提交按鈕。用 POST。

**參考答案：**

```html
<form action="/contact" method="POST">
  <label>Name:
    <input type="text" name="name" maxlength="100" required>
  </label>
  <br>
  <label>Email:
    <input type="email" name="email" required>
  </label>
  <br>
  <label>Message:
    <textarea name="msg" rows="5" minlength="10" required></textarea>
  </label>
  <br>
  <button type="submit">Send</button>
</form>
```

## 關鍵要點

- 用語義標籤。
- 掌握表單輸入類型與校驗屬性。
- 表格僅給資料。

➡️ 下一節：[2.2 CSS](./css)