# 1.9 · Queue (FIFO)

> **Goal:** implement and use a queue with an array / list.

## What a queue is

A **First-In, First-Out** collection. The earliest enqueued item is the first dequeued.

```
enqueue 'A' →  [A]
enqueue 'B' →  [A, B]
enqueue 'C' →  [A, B, C]
dequeue     →  [B, C]   returns A
dequeue     →  [C]      returns B
```

## Operations

| Operation | Purpose |
|-----------|---------|
| `enqueue(x)` | Add to back |
| `dequeue()` | Remove and return front |
| `front()` / `peek()` | Look at front without removing |
| `is_empty()` | Check if empty |
| `size()` | Number of elements |

## Implementation with a Python list

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

⚠️ `pop(0)` is O(n) — for production use `collections.deque`, but the textbook implementation above is what the HKEAA expects.

## Use cases

| Use | Why |
|-----|-----|
| **Print queue** | First job sent prints first |
| **Customer service** | First-come first-served |
| **Ticketing** | Queue at MTR counter |
| **Operating system task scheduling** | Round-robin |
| **BFS in graphs** | Level-order traversal |
| **Message queues** | Producer-consumer systems |

## Worked example · Simulated bank queue

```python
q = Queue()
q.enqueue("Alice")
q.enqueue("Bob")
q.enqueue("Carol")

while not q.is_empty():
    print("Serving", q.dequeue())
```

Output:

```
Serving Alice
Serving Bob
Serving Carol
```

## Circular queue (idea)

A **circular queue** reuses a fixed-size array — when the end is reached, indices wrap to the front. This avoids the O(n) cost of `pop(0)`. Optional knowledge for HKEAA.

## Common student mistakes

- Removing from back instead of front.
- Forgetting empty check.
- Using `pop()` (which is LIFO) — should be `pop(0)`.

## Exam-style question

> **Q (5 marks):** Implement a queue in Python with enqueue, dequeue, front, is_empty. Show how it could simulate a printer's job queue with three jobs.

**Sample answer:**

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

## Key takeaways

- FIFO order.
- Many real-life applications.
- Note the O(n) cost of `pop(0)`.

➡️ Next: [1.10 Linked List](./linked-list)
