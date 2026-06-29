# 3.2 · JavaScript 基礎

> **目標：** 處理 DOM 事件、改頁面、校驗輸入。

## JavaScript 在哪

```html
<!-- 行內（避免） -->
<button onclick="alert('hi')">Click</button>

<!-- 內部 -->
<script>
  console.log("loaded");
</script>

<!-- 外部（首選） -->
<script src="app.js"></script>
```

## 變數與類型

```javascript
const name = "Alice";       // 不可變
let count = 0;              // 可變
var legacy = "avoid";       // 函式作用域，舊

typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof null;                // "object"（已知怪癖）
typeof undefined;           // "undefined"
```

## DOM 訪問

```javascript
// 按 id
const btn = document.getElementById("save");

// 按選擇器
const links = document.querySelectorAll("a.external");

// 屬性訪問
btn.textContent = "Submit";
btn.disabled = true;
btn.classList.add("primary");
```

## 事件

```javascript
btn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Clicked!");
});

document.addEventListener("DOMContentLoaded", () => {
  // 在 HTML 被解析後執行一次
});
```

## 函式

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

// 箭頭函式
const add = (a, b) => a + b;

console.log(greet("Alice"));
console.log(add(2, 3));
```

## 數組與物件

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.filter(f => f.startsWith("a"));   // ['apple']

const student = { id: 1001, name: "Alice", scores: [86, 78] };
student.name;                            // "Alice"
student.scores.length;                   // 2
```

## 實例 · 表單校驗

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
  // 內建 HTML5 校驗也跑。
});
</script>
```

## Fetch API —— 跟服務器談

```javascript
async function loadStudents() {
  const r = await fetch("/api/students");
  const data = await r.json();
  console.log(data);
}
```

## 學生常見錯誤

- 用 `==`（寬鬆相等） —— 總用 `===`。
- 忘 `let` / `const` 造全局變數。
- DOM 解析前操作（忘 `DOMContentLoaded`）。
- 把客户端校驗當安全。

## 考試式題目

> **題（5 分）：** 寫 JavaScript：點擊按鈕 (id="calc") 時讀兩個數字輸入 (id="a"、id="b") 並把它們的和顯示在 id="result" 的 `<p>`。

**參考答案：**

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

## 關鍵要點

- `const` / `let`、箭頭函式、DOM API。
- 用 `addEventListener` 接事件。
- 用 `===` 比較，用 `fetch` 調用服務器。

➡️ 下一節：[3.3 PHP 基礎](./php)