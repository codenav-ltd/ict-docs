# 2.1 · HTML 深入

> **目标：** 比模块 C 基础多 —— 语义标签、表单、表格、媒体。

## 语义标签

为无障碍与 SEO，多用以下而非到处 `<div>`：

| 标签 | 用途 |
|-----|-----|
| `<header>` | 页面或区段顶 |
| `<nav>` | 导航链接 |
| `<main>` | 主内容 |
| `<article>` | 自含一块 |
| `<section>` | 通用区段 |
| `<aside>` | 侧栏 / 附带 |
| `<footer>` | 页面底 |
| `<figure>` / `<figcaption>` | 带标题图像 |
| `<time datetime="2026-06-24">` | 机器可读日期 |

## 表单

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

### 输入类型

| 类型 | 用途 |
|------|---------|
| `text` | 一般文本 |
| `password` | 隐藏文本 |
| `email` | 邮箱格式校验 |
| `number` | 数字输入 |
| `tel` | 电话 |
| `date` / `time` / `datetime-local` | 时间选取器 |
| `checkbox` / `radio` | 布尔 / 多选一 |
| `file` | 上传 |
| `hidden` | 用户不可见 |
| `submit` / `reset` | 按钮 |

### 校验属性

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

仅用于表格**数据** —— 不要用于布局。

## 媒体

```html
<img src="logo.png" alt="School logo">
<video src="intro.mp4" controls></video>
<audio src="welcome.mp3" controls></audio>
```

图像总带 `alt` 文本（无障碍）。

## 学生常见错误

- 用表格做**布局**（用 CSS grid / flexbox）。
- 表单输入忘 `name` 属性（提交时不会送）。
- 图像忘 `alt` 文本。
- 混淆 `<b>`（粗）与 `<strong>`（语义强）—— 表意优先用语义的。

## 考试式题目

> **题（5 分）：** 为联系页搭简单 HTML 表单。含 Name（必填，至多 100 字符）、Email（必须有效）、Message（textarea，必填，至少 10 字符）和提交按钮。用 POST。

**参考答案：**

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

## 关键要点

- 用语义标签。
- 掌握表单输入类型与校验属性。
- 表格仅给数据。

➡️ 下一节：[2.2 CSS](./css)
