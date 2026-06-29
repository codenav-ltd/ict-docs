# 2.2 · CSS 做一致樣式

> **目標：** 用選擇器、屬性、盒模型應用 CSS。

## CSS 在哪

```html
<!-- 行內（除快速測試外避免） -->
<p style="color: red;">Hi</p>

<!-- 內部 -->
<style>
  p { color: red; }
</style>

<!-- 外部（首選） -->
<link rel="stylesheet" href="style.css">
```

## 規則解剖

```
selector { property: value; property: value; }

p.intro  { color: #333; font-size: 18px; }
```

## 選擇器

| 選擇器 | 匹配 |
|----------|---------|
| `p` | 所有 `<p>` |
| `.intro` | 所有 class="intro" 元素 |
| `#main` | id="main" 的元素 |
| `a:hover` | 被懸停的鏈接 |
| `ul li` | `<ul>` 的所有 `<li>` 子孫 |
| `ul > li` | 直接子代 |
| `input[type="text"]` | 類型為 text 的輸入 |

## 盒模型

每個元素是一矩形，由：

```
        ┌── margin ──────────────────────┐
        │  ┌── border ────────────────┐  │
        │  │  ┌── padding ─────────┐  │  │
        │  │  │     content       │  │  │
        │  │  └───────────────────┘  │  │
        │  └─────────────────────────┘  │
        └────────────────────────────────┘
```

用 `box-sizing: border-box` 讓 width/height 含 padding 與 border（更合理默認）。

## 常用屬性

| 屬性 | 值 |
|----------|--------|
| `color` | 前景文本 |
| `background` / `background-color` | 背景 |
| `font-family` / `font-size` / `font-weight` | 文本 |
| `text-align` / `line-height` | 文本佈局 |
| `margin` / `padding` / `border` | 盒模型 |
| `width` / `height` | 大小 |
| `display` | block / inline / inline-block / flex / grid / none |
| `position` | static / relative / absolute / fixed / sticky |

## 佈局 · Flexbox 一分鐘

```css
.row {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
```

子元素成排對齊的彈性項。

## 響應式設計 —— 媒體查詢

```css
@media (max-width: 600px) {
  body { font-size: 14px; }
  .nav { flex-direction: column; }
}
```

內部樣式只在視口寬度至多 600 px（典型手機尺寸）時應用。

## CSS 變數

```css
:root {
  --primary: #3c6df0;
}
a { color: var(--primary); }
```

改一處，處處生效。

## 實例 · 卡片佈局

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

## 學生常見錯誤

- 到處行內 CSS —— 難維護。
- 具體性大戰：`!important` 連環。
- 忘 `box-sizing: border-box` 導致尺寸意外。
- 把 `<div>` 當作語義標籤替代。

## 考試式題目

> **題（5 分）：** 寫 CSS：
> (a) 讓所有 `<h1>` 藍色 (#0044cc) 居中。
> (b) 給 class `panel` 的元素 1 rem padding 與淺灰背景。
> (c) 讓 `<nav>` 在窄於 480 px 屏幕上垂直堆疊。

**參考答案：**

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

## 關鍵要點

- 用外部 CSS、語義選擇器。
- 掌握盒模型。
- 佈局用 flexbox / grid，響應用媒體查詢。

➡️ 下一節：[2.3 發佈選項](./publishing)