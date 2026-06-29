# 1.8 · 棧 (LIFO)

> **目標：** 用數組 / 列表實現並使用棧。

## 棧是什麼

**後入先出**集合。最新推入的項最先彈出。

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
| `push(x)` | 加到頂 |
| `pop()` | 移並返頂 |
| `peek()` / `top()` | 看頂但不移 |
| `is_empty()` | 檢查空 |
| `size()` | 元素數 |

## Python 列表實現

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

| 用途 | 為何 |
|-----|-----|
| **撤銷歷史** | 最新動作先撤 |
| **函式調用棧** | 程序用棧做嵌套調 |
| **反轉列表 / 字符串** | 全推、全彈 |
| **括號平衡** | 推開、遇閉則彈 —— 必須匹配 |
| **表達式求值** | 後綴求值用棧 |
| **瀏覽器後退按鈕** | 頁面歷史 |

## 實例 · 反轉字符串

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

## 實例 · 括號平衡

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

## 學生常見錯誤

- `pop()` 前忘檢查空。
- 用 FIFO 而非 LIFO 邏輯。
- 誤從前端移 (`pop(0)`) —— 那是 O(n) 且把棧變隊列。

## 考試式題目

> **題（5 分）：** 在 Python 實現棧含 push、pop、peek、is_empty。用它反轉整數列表。

**參考答案：**

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

## 關鍵要點

- LIFO 順序。
- 用列表易實現。
- 許多實用用途。

➡️ 下一節：[1.9 隊列](./queue)