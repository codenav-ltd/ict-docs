# 2.2 · CSS for Consistent Style

> **Goal:** apply CSS using selectors, properties and the box model.

## Where CSS lives

```html
<!-- Inline (avoid except for quick tests) -->
<p style="color: red;">Hi</p>

<!-- Internal -->
<style>
  p { color: red; }
</style>

<!-- External (preferred) -->
<link rel="stylesheet" href="style.css">
```

## Anatomy of a rule

```
selector { property: value; property: value; }

p.intro  { color: #333; font-size: 18px; }
```

## Selectors

| Selector | Matches |
|----------|---------|
| `p` | All `<p>` |
| `.intro` | All elements with class="intro" |
| `#main` | The element with id="main" |
| `a:hover` | Links being hovered |
| `ul li` | All `<li>` descendants of `<ul>` |
| `ul > li` | Direct children |
| `input[type="text"]` | Inputs with type=text |

## The box model

Every element is a rectangle composed of:

```
        ┌── margin ──────────────────────┐
        │  ┌── border ────────────────┐  │
        │  │  ┌── padding ─────────┐  │  │
        │  │  │     content       │  │  │
        │  │  └───────────────────┘  │  │
        │  └─────────────────────────┘  │
        └────────────────────────────────┘
```

Use `box-sizing: border-box` to make width/height include padding & border (saner default).

## Common properties

| Property | Values |
|----------|--------|
| `color` | Foreground text |
| `background` / `background-color` | Background |
| `font-family` / `font-size` / `font-weight` | Text |
| `text-align` / `line-height` | Text layout |
| `margin` / `padding` / `border` | Box model |
| `width` / `height` | Size |
| `display` | block / inline / inline-block / flex / grid / none |
| `position` | static / relative / absolute / fixed / sticky |

## Layout · Flexbox in one minute

```css
.row {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
}
```

Children become flexible items aligned in a row.

## Responsive design — media queries

```css
@media (max-width: 600px) {
  body { font-size: 14px; }
  .nav { flex-direction: column; }
}
```

The styles inside apply only when the viewport is at most 600 px wide — typical phone size.

## CSS variables

```css
:root {
  --primary: #3c6df0;
}
a { color: var(--primary); }
```

Change one value, propagate everywhere.

## Worked example · Card layout

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

## Common student mistakes

- Inline CSS everywhere — hard to maintain.
- Specificity wars: `!important` chains.
- Forgetting `box-sizing: border-box` and getting size surprises.
- Treating `<div>` as a substitute for semantic tags.

## Exam-style question

> **Q (5 marks):** Write CSS to:
> (a) Make all `<h1>` blue (#0044cc) and centred.
> (b) Apply 1 rem padding and a light-grey background to elements with class `panel`.
> (c) Make the navigation menu (`<nav>`) stack vertically on screens narrower than 480 px.

**Sample answer:**

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

## Key takeaways

- Use external CSS, semantic selectors.
- Master the box model.
- Use flexbox / grid for layout, media queries for responsiveness.

➡️ Next: [2.3 Publishing Options](./publishing)
