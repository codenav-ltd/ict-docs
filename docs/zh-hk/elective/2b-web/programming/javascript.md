# 3.2 · JavaScript Essentials

> **Goal:** handle DOM events, modify the page, validate input.

## Where JavaScript lives

```html
<!-- Inline (avoid) -->
<button onclick="alert('hi')">Click</button>

<!-- Internal -->
<script>
  console.log("loaded");
</script>

<!-- External (preferred) -->
<script src="app.js"></script>
```

## Variables & types

```javascript
const name = "Alice";       // immutable
let count = 0;              // mutable
var legacy = "avoid";       // function-scoped, legacy

typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof null;                // "object" (a known quirk)
typeof undefined;           // "undefined"
```

## DOM access

```javascript
// By id
const btn = document.getElementById("save");

// By selector
const links = document.querySelectorAll("a.external");

// Property access
btn.textContent = "Submit";
btn.disabled = true;
btn.classList.add("primary");
```

## Events

```javascript
btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Clicked!");
});

document.addEventListener("DOMContentLoaded", () => {
  // run once the HTML is parsed
});
```

## Functions

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet("Alice"));
console.log(add(2, 3));
```

## Arrays & objects

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.filter(f => f.startsWith("a"));   // ['apple']

const student = { id: 1001, name: "Alice", scores: [86, 78] };
student.name;                            // "Alice"
student.scores.length;                   // 2
```

## Working example · Form validation

```html
<form id="signup">
  Email: <input id="email" type="email" required>
  Password: <input id="pw" type="password" minlength="8" required>
  <button type="submit">Sign up</button>
  <p id="err"></p>
</form>

<script>
document.getElementById("signup").addEventListener("submit", e => {
  const email = document.getElementById("email").value;
  const pw    = document.getElementById("pw").value;
  if (pw.length < 8) {
    e.preventDefault();
    document.getElementById("err").textContent = "Password too short";
  }
  // Built-in HTML5 validation also runs.
});
</script>
```

## Fetch API — talk to the server

```javascript
async function loadStudents() {
  const r = await fetch("/api/students");
  const data = await r.json();
  console.log(data);
}
```

## Common student mistakes

- Using `==` (loose equality) — always use `===`.
- Forgetting `let` / `const` and creating globals.
- Manipulating the DOM before it's parsed (forgetting `DOMContentLoaded`).
- Treating client-side validation as security.

## Exam-style question

> **Q (5 marks):** Write JavaScript that, when a button (id="calc") is clicked, reads two numeric inputs (id="a" and id="b") and displays their sum in a `<p>` with id="result".

**Sample answer:**

```javascript
document.getElementById("calc").addEventListener("click", () => {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    document.getElementById("result").textContent = "Invalid input";
    return;
  }
  document.getElementById("result").textContent = `Sum = ${a + b}`;
});
```

## Key takeaways

- `const` / `let`, arrow functions, DOM API.
- Wire events with `addEventListener`.
- Use `===` for equality, `fetch` to call the server.

➡️ Next: [3.3 PHP Essentials](./php)
