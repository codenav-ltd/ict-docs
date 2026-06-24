# 2.1 · HTML Deep Dive

> **Goal:** know more than the Module C basics — semantic tags, forms, tables, media.

## Semantic tags

Use these instead of `<div>` everywhere for accessibility and SEO:

| Tag | Use |
|-----|-----|
| `<header>` | Top of a page or section |
| `<nav>` | Navigation links |
| `<main>` | Primary content |
| `<article>` | Self-contained piece |
| `<section>` | Generic section |
| `<aside>` | Sidebar / tangential |
| `<footer>` | Bottom of a page |
| `<figure>` / `<figcaption>` | Image with caption |
| `<time datetime="2026-06-24">` | Machine-readable date |

## Forms

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

### Input types

| Type | Purpose |
|------|---------|
| `text` | General text |
| `password` | Hidden text |
| `email` | Email format validation |
| `number` | Numeric input |
| `tel` | Phone |
| `date` / `time` / `datetime-local` | Temporal pickers |
| `checkbox` / `radio` | Boolean / one of many |
| `file` | Upload |
| `hidden` | Not visible to user |
| `submit` / `reset` | Buttons |

### Validation attributes

`required`, `minlength`, `maxlength`, `pattern`, `min`, `max`, `step`.

## Tables

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

For tabular **data** only — not for layout.

## Media

```html
<img src="logo.png" alt="School logo">
<video src="intro.mp4" controls></video>
<audio src="welcome.mp3" controls></audio>
```

Always include `alt` text for images (accessibility).

## Common student mistakes

- Using tables for **layout** (use CSS grid / flexbox instead).
- Forgetting `name` attribute on form inputs (won't be sent on submit).
- Forgetting `alt` text on images.
- Mixing `<b>` (bold) and `<strong>` (semantic strong) — prefer the semantic one for meaning.

## Exam-style question

> **Q (5 marks):** Build a simple HTML form for a contact page. Include fields for Name (required, max 100 chars), Email (must be valid), Message (textarea, required, min 10 chars), and a submit button. Use POST.

**Sample answer:**

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

## Key takeaways

- Use semantic tags.
- Master form input types and validation attributes.
- Tables for data only.

➡️ Next: [2.2 CSS](./css)
