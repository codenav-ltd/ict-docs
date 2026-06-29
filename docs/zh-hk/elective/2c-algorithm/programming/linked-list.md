# 1.10 · 鏈表

> **目標：** 用節點數組實現線性鏈表。HKEAA 課程用這種「節點數組」做法。

## 鏈表是什麼

**節點**序列，每個存值與指向下一節點的指針。

```
[A | →] → [B | →] → [C | →] → null
```

與數組比，鏈表：

- **任意處插 / 刪便宜**（不用移）。
- **訪問第 n 個貴**（必須從頭走）。

## HKEAA 風格實現：節點數組

課程説「以數組實現」，所以用 Python 列表的 `Node` 物件，`next` 用索引表示。

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

### 遍歷

```python
idx = head_idx
while idx != -1:
    print(nodes[idx].value)
    idx = nodes[idx].next_idx
```

### 在頭插

```python
def insert_head(nodes, head_idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, head_idx))
    return new_idx        # 新頭索引
```

### 在給定節點後插

```python
def insert_after(nodes, idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, nodes[idx].next_idx))
    nodes[idx].next_idx = new_idx
```

### 刪給定節點之後

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

## Python 風格替代（基於類，不是節點數組）

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

HKEAA 課程偏好節點數組做法。允許時才用 Python 風格。

## 對比 · 數組 vs 鏈表

| 方面 | 數組 | 鏈表 |
|--------|-------|-------------|
| 隨機訪問 | O(1) | O(n) |
| 頭部插 / 刪 | O(n) | O(1) |
| 中間插 / 刪 | O(n) | O(1)（已知節點） |
| 記憶體佈局 | 連續 | 散亂（指針） |
| 快取性能 | 較好 | 較差 |

## 學生常見錯誤

- 插入時忘更新「next」指針。
- 低級語言中記憶體泄漏（Python GC 處理）。
- 混淆索引變數與存的值。

## 考試式題目

> **題（5 分）：** 用偽程式碼或 Python 實現：在基於數組的鏈表裏給定節點之後插入新節點。

**參考答案：**

```python
def insert_after(nodes, idx, value):
    """在索引 `idx` 節點後插入 Node(value)。"""
    new_idx = len(nodes)
    new_node = Node(value, nodes[idx].next_idx)   # 新節點指向 idx 原本指向的
    nodes.append(new_node)
    nodes[idx].next_idx = new_idx                 # idx 現指向新
```

**追蹤** 初始 `[A→1, B→2, C→-1]`，head=0；調 `insert_after(nodes, 0, 'X')`：

| 步驟 | nodes | head |
|------|-------|------|
| start | A→1, B→2, C→-1 | 0 |
| new Node('X', 1) | + X→1 | 0 |
| nodes[0].next_idx = 3 | A→3, B→2, C→-1, X→1 | 0 |

遍歷：A → X → B → C ✓

## 關鍵要點

- 節點持值 + next 指針（數組形式裏是索引）。
- 易插 / 刪；隨機訪問慢。
- HKEAA 要節點數組實現。

➡️ 下一節：[1.11 測試與調試](./testing-debug)