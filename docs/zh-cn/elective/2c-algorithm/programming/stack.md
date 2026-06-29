# 1.8 · 栈 (LIFO)

> **目标：** 用数组 / 列表实现并使用栈。

## 栈是什么

**后入先出**集合。最新推入的项最先弹出。

```
push 'A'  →  [A]
push 'B'  →  [A, B]
push 'C'  →  [A, B, C]
pop       →  [A, B]    返回 C
pop       →  [A]       返回 B
```

## 操作

| 操作 | 用途 |
|-----------|---------|
| `push(x)` | 加到顶 |
| `pop()` | 移并返顶 |
| `peek()` / `top()` | 看顶但不移 |
| `is_empty()` | 检查空 |
| `size()` | 元素数 |

## Python 列表实现

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, x):
        self.items.append(x)

    def pop(self):
        if not self.items:
            raise IndexError("stack is empty")
        return self.items.pop()

    def peek(self):
        return self.items[-1] if self.items else None

    def is_empty(self):
        return not self.items

    def size(self):
        return len(self.items)
```

## 用例

| 用途 | 为何 |
|-----|-----|
| **撤销历史** | 最新动作先撤 |
| **函数调用栈** | 程序用栈做嵌套调 |
| **反转列表 / 字符串** | 全推、全弹 |
| **括号平衡** | 推开、遇闭则弹 —— 必须匹配 |
| **表达式求值** | 后缀求值用栈 |
| **浏览器后退按钮** | 页面历史 |

## 实例 · 反转字符串

```python
s = "HKDSE"
stk = Stack()
for ch in s:
    stk.push(ch)
result = ""
while not stk.is_empty():
    result += stk.pop()
print(result)              # ESDKH
```

## 实例 · 括号平衡

```python
pairs = {')':'(', ']':'[', '}':'{'}

def is_balanced(s):
    stk = Stack()
    for ch in s:
        if ch in "([{":
            stk.push(ch)
        elif ch in ")]}":
            if stk.is_empty() or stk.pop() != pairs[ch]:
                return False
    return stk.is_empty()

print(is_balanced("(a+b)*(c-{d/[e+f]})"))   # True
print(is_balanced("(a+b]"))                  # False
```

## 学生常见错误

- `pop()` 前忘检查空。
- 用 FIFO 而非 LIFO 逻辑。
- 误从前端移 (`pop(0)`) —— 那是 O(n) 且把栈变队列。

## 考试式题目

> **题（5 分）：** 在 Python 实现栈含 push、pop、peek、is_empty。用它反转整数列表。

**参考答案：**

```python
class Stack:
    def __init__(self):
        self.items = []
    def push(self, x):   self.items.append(x)
    def pop(self):       return self.items.pop() if self.items else None
    def peek(self):      return self.items[-1] if self.items else None
    def is_empty(self):  return not self.items

def reverse(lst):
    s = Stack()
    for v in lst:
        s.push(v)
    out = []
    while not s.is_empty():
        out.append(s.pop())
    return out

print(reverse([1, 2, 3, 4]))     # [4, 3, 2, 1]
```

## 关键要点

- LIFO 顺序。
- 用列表易实现。
- 许多实用用途。

➡️ 下一节：[1.9 队列](./queue)
