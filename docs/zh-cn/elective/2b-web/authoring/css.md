# 2.2 · CSS 做一致样式

> **目标：** 用选择器、属性、盒模型应用 CSS。

## CSS 在哪

```html
<!-- 行内（除快速测试外避免） -->
<p style="color: red;">Hi</p>

<!-- 内部 -->
<style>
  p { color: red; }
</style>

<!-- 外部（首选） -->
<link rel="stylesheet" href="style.css">
```

## 规则解剖

```
selector { property: value; property: value; }

p.intro  { color: #333; font-size: 18px; }
```

## 选择器

| 选择器 | 匹配 |
|----------|---------|
| `p` | 所有 `<p>` |
| `.intro` | 所有 class="intro" 元素 |
| `#main` | id="main" 的元素 |
| `a:hover` | 被悬停的链接 |
| `ul li` | `<ul>` 的所有 `<li>` 子孙 |
| `ul > li` | 直接子代 |
| `input[type="text"]` | 类型为 text 的输入 |

## 盒模型

每个元素是一矩形，由：

```
        ┌── margin ──────────────────────┐
        │  ┌── border ────────────────┐  │
        │  │  ┌── padding ─────────┐  │  │
        │  │  │     content       │  │  │
        │  │  └───────────────────┘  │  │
        │  └─────────────────────────┘  │
        └────────────────────────────────┘
```

用 `box-sizing: border-box` 让 width/height 含 padding 与 border（更合理默认）。

## 常用属性

| 属性 | 值 |
|----------|--------|
| `color` | 前景文本 |
| `background` / `background-color` | 背景 |
| `font-family` / `font-size` / `font-weight` | 文本 |
| `text-align` / `line-height` | 文本布局 |
| `margin` / `padding` / `border` | 盒模型 |
| `width` / `height` | 大小 |
| `display` | block / inline / inline-block / flex / grid / none |
| `position` | static / relative / absolute / fixed / sticky |

## 布局 · Flexbox 一分钟

```css
.row {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
```

子元素成排对齐的弹性项。

## 响应式设计 —— 媒体查询

```css
@media (max-width: 600px) {
  body { font-size: 14px; }
  .nav { flex-direction: column; }
}
```

内部样式只在视口宽度至多 600 px（典型手机尺寸）时应用。

## CSS 变量

```css
:root {
  --primary: #3c6df0;
}
a { color: var(--primary); }
```

改一处，处处生效。

## 实例 · 卡片布局

```html
<div class="card">
  <h2>Title</h2>
  <p>Description.</p>
</div>
```

```css
.card {
  background: #fff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,.1);
}
```

## 学生常见错误

- 到处行内 CSS —— 难维护。
- 具体性大战：`!important` 连环。
- 忘 `box-sizing: border-box` 导致尺寸意外。
- 把 `<div>` 当作语义标签替代。

## 考试式题目

> **题（5 分）：** 写 CSS：
> (a) 让所有 `<h1>` 蓝色 (#0044cc) 居中。
> (b) 给 class `panel` 的元素 1 rem padding 与浅灰背景。
> (c) 让 `<nav>` 在窄于 480 px 屏幕上垂直堆叠。

**参考答案：**

```css
h1 {
  color: #0044cc;
  text-align: center;
}

.panel {
  padding: 1rem;
  background: #f4f4f4;
}

@media (max-width: 480px) {
  nav {
    display: flex;
    flex-direction: column;
  }
}
```

## 关键要点

- 用外部 CSS、语义选择器。
- 掌握盒模型。
- 布局用 flexbox / grid，响应用媒体查询。

➡️ 下一节：[2.3 发布选项](./publishing)
