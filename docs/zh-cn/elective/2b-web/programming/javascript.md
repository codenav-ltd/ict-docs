# 3.2 · JavaScript 基础

> **目标：** 处理 DOM 事件、改页面、校验输入。

## JavaScript 在哪

```html
<!-- 行内（避免） -->
<button onclick="alert('hi')">Click</button>

<!-- 内部 -->
<script>
  console.log("loaded");
</script>

<!-- 外部（首选） -->
<script src="app.js"></script>
```

## 变量与类型

```javascript
const name = "Alice";       // 不可变
let count = 0;              // 可变
var legacy = "avoid";       // 函数作用域，旧

typeof 42;                  // "number"
typeof "abc";               // "string"
typeof true;                // "boolean"
typeof null;                // "object"（已知怪癖）
typeof undefined;           // "undefined"
```

## DOM 访问

```javascript
// 按 id
const btn = document.getElementById("save");

// 按选择器
const links = document.querySelectorAll("a.external");

// 属性访问
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
  // 在 HTML 被解析后运行一次
});
```

## 函数

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

// 箭头函数
const add = (a, b) => a + b;

console.log(greet("Alice"));
console.log(add(2, 3));
```

## 数组与对象

```javascript
const fruits = ["apple", "banana", "cherry"];
fruits.push("date");
fruits.filter(f => f.startsWith("a"));   // ['apple']

const student = { id: 1001, name: "Alice", scores: [86, 78] };
student.name;                            // "Alice"
student.scores.length;                   // 2
```

## 实例 · 表单校验

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
  // 内置 HTML5 校验也跑。
});
</script>
```

## Fetch API —— 跟服务器谈

```javascript
async function loadStudents() {
  const r = await fetch("/api/students");
  const data = await r.json();
  console.log(data);
}
```

## 学生常见错误

- 用 `==`（宽松相等） —— 总用 `===`。
- 忘 `let` / `const` 造全局变量。
- DOM 解析前操作（忘 `DOMContentLoaded`）。
- 把客户端校验当安全。

## 考试式题目

> **题（5 分）：** 写 JavaScript：点击按钮 (id="calc") 时读两个数字输入 (id="a"、id="b") 并把它们的和显示在 id="result" 的 `<p>`。

**参考答案：**

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

## 关键要点

- `const` / `let`、箭头函数、DOM API。
- 用 `addEventListener` 接事件。
- 用 `===` 比较，用 `fetch` 调用服务器。

➡️ 下一节：[3.3 PHP 基础](./php)
