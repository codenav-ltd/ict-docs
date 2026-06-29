# 1.10 · 链表

> **目标：** 用节点数组实现线性链表。HKEAA 课程用这种「节点数组」做法。

## 链表是什么

**节点**序列，每个存值与指向下一节点的指针。

```
[A | →] → [B | →] → [C | →] → null
```

与数组比，链表：

- **任意处插 / 删便宜**（不用移）。
- **访问第 n 个贵**（必须从头走）。

## HKEAA 风格实现：节点数组

课程说「以数组实现」，所以用 Python 列表的 `Node` 对象，`next` 用索引表示。

```python
class Node:
    def __init__(self, value, next_idx=-1):
        self.value = value
        self.next_idx = next_idx          # -1 表末尾

nodes = [
    Node("A", 1),
    Node("B", 2),
    Node("C", -1),
]
head_idx = 0
```

### 遍历

```python
idx = head_idx
while idx != -1:
    print(nodes[idx].value)
    idx = nodes[idx].next_idx
```

### 在头插

```python
def insert_head(nodes, head_idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, head_idx))
    return new_idx        # 新头索引
```

### 在给定节点后插

```python
def insert_after(nodes, idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, nodes[idx].next_idx))
    nodes[idx].next_idx = new_idx
```

### 删给定节点之后

```python
def delete_after(nodes, idx):
    nxt = nodes[idx].next_idx
    if nxt != -1:
        nodes[idx].next_idx = nodes[nxt].next_idx
```

### 搜索

```python
def search(nodes, head_idx, target):
    idx = head_idx
    while idx != -1:
        if nodes[idx].value == target:
            return idx
        idx = nodes[idx].next_idx
    return -1
```

## Python 风格替代（基于类，不是节点数组）

```python
class Node:
    def __init__(self, value, nxt=None):
        self.value = value
        self.nxt   = nxt

class LinkedList:
    def __init__(self):
        self.head = None
    def push_front(self, value):
        self.head = Node(value, self.head)
    def __iter__(self):
        n = self.head
        while n:
            yield n.value
            n = n.nxt
```

HKEAA 课程偏好节点数组做法。允许时才用 Python 风格。

## 对比 · 数组 vs 链表

| 方面 | 数组 | 链表 |
|--------|-------|-------------|
| 随机访问 | O(1) | O(n) |
| 头部插 / 删 | O(n) | O(1) |
| 中间插 / 删 | O(n) | O(1)（已知节点） |
| 内存布局 | 连续 | 散乱（指针） |
| 缓存性能 | 较好 | 较差 |

## 学生常见错误

- 插入时忘更新「next」指针。
- 低级语言中内存泄漏（Python GC 处理）。
- 混淆索引变量与存的值。

## 考试式题目

> **题（5 分）：** 用伪代码或 Python 实现：在基于数组的链表里给定节点之后插入新节点。

**参考答案：**

```python
def insert_after(nodes, idx, value):
    """在索引 `idx` 节点后插入 Node(value)。"""
    new_idx = len(nodes)
    new_node = Node(value, nodes[idx].next_idx)   # 新节点指向 idx 原本指向的
    nodes.append(new_node)
    nodes[idx].next_idx = new_idx                 # idx 现指向新
```

**追踪** 初始 `[A→1, B→2, C→-1]`，head=0；调 `insert_after(nodes, 0, 'X')`：

| 步骤 | nodes | head |
|------|-------|------|
| start | A→1, B→2, C→-1 | 0 |
| new Node('X', 1) | + X→1 | 0 |
| nodes[0].next_idx = 3 | A→3, B→2, C→-1, X→1 | 0 |

遍历：A → X → B → C ✓

## 关键要点

- 节点持值 + next 指针（数组形式里是索引）。
- 易插 / 删；随机访问慢。
- HKEAA 要节点数组实现。

➡️ 下一节：[1.11 测试与调试](./testing-debug)
