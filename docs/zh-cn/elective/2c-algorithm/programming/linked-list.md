# 1.10 · Linked List

> **Goal:** implement a linear linked list using arrays of nodes. HKEAA syllabus uses this array-of-nodes approach.

## What a linked list is

A sequence of **nodes**, each storing a value and a pointer to the next node.

```
[A | →] → [B | →] → [C | →] → null
```

Compared with an array, a linked list:

- **Cheap to insert / delete** anywhere (no shifting).
- **Expensive to access** the n-th element (must walk from start).

## HKEAA-style implementation: array of nodes

The syllabus says "implemented in terms of arrays", so use an array (Python list) of `Node` objects with `next` represented as an index.

```python
class Node:
    def __init__(self, value, next_idx=-1):
        self.value = value
        self.next_idx = next_idx          # -1 means end

nodes = [
    Node("A", 1),
    Node("B", 2),
    Node("C", -1),
]
head_idx = 0
```

### Traverse

```python
idx = head_idx
while idx != -1:
    print(nodes[idx].value)
    idx = nodes[idx].next_idx
```

### Insert at head

```python
def insert_head(nodes, head_idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, head_idx))
    return new_idx        # new head index
```

### Insert after a given node

```python
def insert_after(nodes, idx, value):
    new_idx = len(nodes)
    nodes.append(Node(value, nodes[idx].next_idx))
    nodes[idx].next_idx = new_idx
```

### Delete after a given node

```python
def delete_after(nodes, idx):
    nxt = nodes[idx].next_idx
    if nxt != -1:
        nodes[idx].next_idx = nodes[nxt].next_idx
```

### Search

```python
def search(nodes, head_idx, target):
    idx = head_idx
    while idx != -1:
        if nodes[idx].value == target:
            return idx
        idx = nodes[idx].next_idx
    return -1
```

## Pythonic alternative (class-based, not array-of-nodes)

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

The HKEAA syllabus prefers the array-of-nodes approach. Use Pythonic only when allowed.

## Comparison · Array vs Linked List

| Aspect | Array | Linked list |
|--------|-------|-------------|
| Random access | O(1) | O(n) |
| Insert / delete at front | O(n) | O(1) |
| Insert / delete in middle | O(n) | O(1) (given the node) |
| Memory layout | Contiguous | Scattered (pointers) |
| Cache performance | Better | Worse |

## Common student mistakes

- Forgetting to update the "next" pointer when inserting.
- Memory leaks in lower-level languages (Python's GC handles it).
- Confusing the index variable with the value stored.

## Exam-style question

> **Q (5 marks):** Implement (in pseudocode or Python) a procedure that inserts a new node after a given node in an array-based linked list.

**Sample answer:**

```python
def insert_after(nodes, idx, value):
    """Insert a new Node(value) after the node at index `idx`."""
    new_idx = len(nodes)
    new_node = Node(value, nodes[idx].next_idx)   # new node points where idx pointed
    nodes.append(new_node)
    nodes[idx].next_idx = new_idx                 # idx now points to new
```

**Trace** with initial `[A→1, B→2, C→-1]`, head=0; call `insert_after(nodes, 0, 'X')`:

| Step | nodes | head |
|------|-------|------|
| start | A→1, B→2, C→-1 | 0 |
| new Node('X', 1) | + X→1 | 0 |
| nodes[0].next_idx = 3 | A→3, B→2, C→-1, X→1 | 0 |

Traversal: A → X → B → C ✓

## Key takeaways

- Nodes hold value + next pointer (index in array form).
- Easy insert/delete; slow random access.
- HKEAA wants array-of-nodes implementation.

➡️ Next: [1.11 Testing & Debugging](./testing-debug)
