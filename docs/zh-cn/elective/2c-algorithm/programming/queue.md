# 1.9 · 队列 (FIFO)

> **目标：** 用数组 / 列表实现并使用队列。

## 队列是什么

**先入先出**集合。最早入队的项最先出队。

```
enqueue 'A' →  [A]
enqueue 'B' →  [A, B]
enqueue 'C' →  [A, B, C]
dequeue     →  [B, C]   返回 A
dequeue     →  [C]      返回 B
```

## 操作

| 操作 | 用途 |
|-----------|---------|
| `enqueue(x)` | 加到尾 |
| `dequeue()` | 移并返头 |
| `front()` / `peek()` | 看头但不移 |
| `is_empty()` | 检查空 |
| `size()` | 元素数 |

## Python 列表实现

```python
class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, x):
        self.items.append(x)

    def dequeue(self):
        if not self.items:
            raise IndexError("queue is empty")
        return self.items.pop(0)

    def front(self):
        return self.items[0] if self.items else None

    def is_empty(self):
        return not self.items
```

⚠️ `pop(0)` 是 O(n) —— 生产用 `collections.deque`，但 HKEAA 期望的是上面教科书实现。

## 用例

| 用途 | 为何 |
|-----|-----|
| **打印队列** | 先送的先印 |
| **客服** | 先到先得 |
| **票务** | 港铁柜台排队 |
| **OS 任务调度** | 轮转 |
| **图中 BFS** | 层序遍历 |
| **消息队列** | 生产消费者系统 |

## 实例 · 模拟银行队列

```python
q = Queue()
q.enqueue("Alice")
q.enqueue("Bob")
q.enqueue("Carol")

while not q.is_empty():
    print("Serving", q.dequeue())
```

输出：

```
Serving Alice
Serving Bob
Serving Carol
```

## 循环队列（思想）

**循环队列**复用定长数组 —— 到末时索引回卷到前。避 `pop(0)` 的 O(n) 成本。HKEAA 可选知识。

## 学生常见错误

- 从尾移而非头。
- 忘空检查。
- 用 `pop()`（LIFO） —— 应 `pop(0)`。

## 考试式题目

> **题（5 分）：** 在 Python 实现队列含 enqueue、dequeue、front、is_empty。展示如何模拟带三个任务的打印机队列。

**参考答案：**

```python
class Queue:
    def __init__(self):       self.items = []
    def enqueue(self, x):     self.items.append(x)
    def dequeue(self):        return self.items.pop(0) if self.items else None
    def front(self):          return self.items[0] if self.items else None
    def is_empty(self):       return not self.items

printer = Queue()
printer.enqueue("Report.docx")
printer.enqueue("Photo.jpg")
printer.enqueue("Slides.pdf")

while not printer.is_empty():
    print("Printing", printer.dequeue())
```

## 关键要点

- FIFO 顺序。
- 多现实应用。
- 注意 `pop(0)` 的 O(n) 成本。

➡️ 下一节：[1.10 链表](./linked-list)
