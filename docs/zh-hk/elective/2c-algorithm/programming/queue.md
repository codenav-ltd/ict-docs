# 1.9 · 隊列 (FIFO)

> **目標：** 用數組 / 列表實現並使用隊列。

## 隊列是什麼

**先入先出**集合。最早入隊的項最先出隊。

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
| `dequeue()` | 移並返頭 |
| `front()` / `peek()` | 看頭但不移 |
| `is_empty()` | 檢查空 |
| `size()` | 元素數 |

## Python 列表實現

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

⚠️ `pop(0)` 是 O(n) —— 生產用 `collections.deque`，但 HKEAA 期望的是上面教科書實現。

## 用例

| 用途 | 為何 |
|-----|-----|
| **列印隊列** | 先送的先印 |
| **客服** | 先到先得 |
| **票務** | 港鐵櫃台排隊 |
| **OS 任務調度** | 輪轉 |
| **圖中 BFS** | 層序遍歷 |
| **消息隊列** | 生產消費者系統 |

## 實例 · 模擬銀行隊列

```python
q = Queue()
q.enqueue("Alice")
q.enqueue("Bob")
q.enqueue("Carol")

while not q.is_empty():
    print("Serving", q.dequeue())
```

輸出：

```
Serving Alice
Serving Bob
Serving Carol
```

## 迴圈隊列（思想）

**迴圈隊列**複用定長數組 —— 到末時索引回捲到前。避 `pop(0)` 的 O(n) 成本。HKEAA 可選知識。

## 學生常見錯誤

- 從尾移而非頭。
- 忘空檢查。
- 用 `pop()`（LIFO） —— 應 `pop(0)`。

## 考試式題目

> **題（5 分）：** 在 Python 實現隊列含 enqueue、dequeue、front、is_empty。展示如何模擬帶三個任務的列印機隊列。

**參考答案：**

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

## 關鍵要點

- FIFO 順序。
- 多現實應用。
- 注意 `pop(0)` 的 O(n) 成本。

➡️ 下一節：[1.10 鏈表](./linked-list)