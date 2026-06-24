# 3.1 · HTML Basics

> **Goal:** recognise the structure of an HTML document and identify the role of common tags.

## Minimal valid HTML

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

### What each part does

| Part | Purpose |
|------|---------|
| `<!DOCTYPE html>` | Declares the document as HTML5 |
| `<html lang="en">` | Root element; `lang` declares language for accessibility |
| `<head>` | Metadata (title, charset, links to CSS/JS) |
| `<meta charset="UTF-8">` | Declares character encoding — essential for Chinese support |
| `<title>` | Tab title; also used by search engines |
| `<body>` | Visible content |
| `<h1>`–`<h6>` | Headings (h1 most important) |
| `<p>` | Paragraph |
| `<a href="…">` | Hyperlink |
| `<img src="…" alt="…">` | Image (with required alt text for accessibility) |
| `<ul> / <ol> / <li>` | Lists |
| `<table> / <tr> / <td>` | Tables |
| `<div> / <span>` | Generic containers |

## Tags vs attributes vs values

```
<a href="https://example.com">click</a>
└┬┘ └──┬─┘ └───────┬─────────┘ └─┬─┘ └┬┘
tag  attribute     value         text  closing
```

## Common tags by purpose

| Need | Tag |
|------|-----|
| Page section | `<section>`, `<article>`, `<header>`, `<footer>`, `<nav>` |
| Form | `<form>`, `<input>`, `<button>`, `<select>`, `<textarea>` |
| Media | `<img>`, `<video>`, `<audio>` |
| Style hook | `<div class="…">`, `<span id="…">` |
| Line break | `<br>` (self-closing) |
| Horizontal rule | `<hr>` |

## Why the meta charset matters

```html
<meta charset="UTF-8">
```

Without it, the browser may misinterpret bytes and show Chinese characters as garbled text (mojibake). UTF-8 covers all modern scripts.

## Page organisation principles

The C&A Guide mentions:

- **Ease of navigation** — visible menus, logical link placement.
- **Appropriate placement of links, tables, frames, multimedia**.
- **Sensible colour, background, font size and style** for the intended audience.
- **Cross-platform compatibility** — works on any modern browser.

## Common student mistakes

- Forgetting `<!DOCTYPE html>`.
- Mixing up `<img src="…">` and `<a href="…">`.
- Missing the closing `</p>`.
- Using inline styling everywhere instead of CSS (covered in Elective 2B).

## Exam-style question

> **Q (4 marks):** Write a minimal HTML page that includes a heading "Welcome to ICT", a paragraph saying "We are learning HTML.", and a link to www.hkeaa.edu.hk. Use UTF-8.

**Sample answer:**

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

## Key takeaways

- Recognise the standard skeleton.
- Know the role of common tags.
- HTML codes do **not** need to be memorised — but structure does.

➡️ Next: [3.2 Web Publishing](./web-publishing)
