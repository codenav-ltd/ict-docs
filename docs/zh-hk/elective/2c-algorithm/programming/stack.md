# 1.8 · Stack (LIFO)

> **Goal:** implement and use a stack with an array / list.

## What a stack is

A **Last-In, First-Out** collection. The latest pushed item is the first popped.

```
push 'A'  →  [A]
push 'B'  →  [A, B]
push 'C'  →  [A, B, C]
pop       →  [A, B]    returns C
pop       →  [A]       returns B
```

## Operations

| Operation | Purpose |
|-----------|---------|
| `push(x)` | Add to top |
| `pop()` | Remove and return top |
| `peek()` / `top()` | Look at top without removing |
| `is_empty()` | Check if empty |
| `size()` | Number of elements |

## Implementation with a Python list

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

## Use cases

| Use | Why |
|-----|-----|
| **Undo history** | Latest action undone first |
| **Function call stack** | Programs use stacks for nested calls |
| **Reverse a list / string** | Push all, pop all |
| **Balanced brackets** | Push opening, pop on closing — must match |
| **Expression evaluation** | Postfix evaluation uses a stack |
| **Back button** in browsers | Page history |

## Worked example · Reverse a string

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

## Worked example · Balanced brackets

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

## Common student mistakes

- Forgetting to check empty before `pop()`.
- Using FIFO logic instead of LIFO.
- Mistakenly removing from the front (`pop(0)`) — that's O(n) and turns it into a queue.

## Exam-style question

> **Q (5 marks):** Implement a stack in Python with push, pop, peek and is_empty. Use it to reverse a list of integers.

**Sample answer:**

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

## Key takeaways

- LIFO order.
- Easy to implement with a list.
- Many practical uses.

➡️ Next: [1.9 Queue](./queue)
