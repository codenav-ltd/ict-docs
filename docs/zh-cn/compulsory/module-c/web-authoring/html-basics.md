# 3.1 · HTML 基础

> **目标：** 识别 HTML 文档结构并辨认常用标签的角色。

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
| `<!DOCTYPE html>` | 声明本文档为 HTML5 |
| `<html lang="en">` | 根元素；`lang` 为无障碍声明语言 |
| `<head>` | 元数据（标题、字符集、CSS/JS 链接） |
| `<meta charset="UTF-8">` | 声明字符编码 —— 对中文支援必需 |
| `<title>` | 标签页标题；也被搜索引擎用 |
| `<body>` | 可见内容 |
| `<h1>`–`<h6>` | 标题（h1 最重要） |
| `<p>` | 段落 |
| `<a href="…">` | 超链接 |
| `<img src="…" alt="…">` | 图像（无障碍需要 alt 文本） |
| `<ul> / <ol> / <li>` | 列表 |
| `<table> / <tr> / <td>` | 表格 |
| `<div> / <span>` | 通用容器 |

## 标签 vs 属性 vs 值

```
<a href="https://example.com">click</a>
└┬┘ └──┬─┘ └───────┬─────────┘ └─┬─┘ └┬┘
标签   属性         值          文本   结束
```

## 按用途分常用标签

| 需求 | 标签 |
|------|-----|
| 页面区段 | `<section>`、`<article>`、`<header>`、`<footer>`、`<nav>` |
| 表单 | `<form>`、`<input>`、`<button>`、`<select>`、`<textarea>` |
| 媒体 | `<img>`、`<video>`、`<audio>` |
| 样式钩子 | `<div class="…">`、`<span id="…">` |
| 换行 | `<br>`（自闭） |
| 水平线 | `<hr>` |

## meta charset 为何重要

```html
<meta charset="UTF-8">
```

没它，浏览器可能解错字节，把中文显示成乱码 (mojibake)。UTF-8 涵盖所有现代文字。

## 页面组织原则

课程指引提到：

- **易于导航** —— 显眼菜单、链接合理放置。
- **链接、表格、框架、多媒体的合适放置**。
- **配色、背景、字号、字体**与目标受众匹配。
- **跨平台兼容** —— 在任何现代浏览器上工作。

## 学生常见错误

- 忘 `<!DOCTYPE html>`。
- 把 `<img src="…">` 与 `<a href="…">` 搞反。
- 漏闭合 `</p>`。
- 到处用行内样式而不是 CSS（CSS 在选修 2B 讲）。

## 考试式题目

> **题（4 分）：** 写一个最小 HTML 页，包含标题「Welcome to ICT」、段落「We are learning HTML.」和指向 www.hkeaa.edu.hk 的链接。用 UTF-8。

**参考答案：**

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

## 关键要点

- 识别标准骨架。
- 认识常用标签角色。
- HTML 代码**不**需要背 —— 但结构要会。

➡️ 下一节：[3.2 网页发布](./web-publishing)
