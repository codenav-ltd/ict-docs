# 2C · Algorithm & Programming

> **Curriculum hours:** 38 · **Paper weight:** ~12.5% of subject mark · **Main languages:** Python, C++ (Pascal accepted until 2027).

This elective extends Module D. You move beyond simple loops to algorithm design (search, sort, merge), data structures (stack, queue, linked list), file handling, sub-programs and real-life programming with sensors and event handlers.

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a.i | Design of Solution & Implementation | 28 |
| a.ii | Testing & Debugging | 4 |
| b | Applications of Programming in Real Life | 6 |

---

## a.i Design of Solution & Implementation (28h)

### Data types you must master

- **Simple types** (already covered in Module D): int, float, char, bool
- **Structured types**: arrays (1D, 2D+), strings
- **User-defined types**: in Python, a `class` or a `tuple`/`namedtuple`/`dataclass`

### Searching algorithms

#### Linear search · O(n)

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

#### Binary search · O(log n) — array must be sorted

```python
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1
```

### Sorting algorithms (in syllabus)

#### Bubble sort · O(n²)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
```

#### Insertion sort · O(n²)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
```

#### Selection sort · O(n²)

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
```

#### Faster alternatives mentioned but not implemented

- **Merge sort · O(n log n)** — divide-and-conquer, stable
- **Quick sort · O(n log n) average, O(n²) worst** — pivot-based, in-place

> The C&A Guide says students should *realise* faster sorts exist. You should be able to compare bubble/insertion/selection against merge/quick on speed and use cases.

### Merging (two sorted arrays into one sorted array)

```python
def merge(a, b):
    i = j = 0
    out = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]:
            out.append(a[i]); i += 1
        else:
            out.append(b[j]); j += 1
    out.extend(a[i:])
    out.extend(b[j:])
    return out
```

### Choosing the right algorithm

| Situation | Recommendation |
|-----------|----------------|
| Small data (<50 items) | Bubble/insertion/selection are fine |
| Already-sorted or nearly sorted | Insertion sort is fast |
| Large data, random | Use built-in or merge/quick |
| Sorted data + many lookups | Binary search |
| Few lookups | Linear search avoids sorting cost |

### Nested loops

```python
matrix = [[0]*5 for _ in range(3)]    # 3x5 grid

for i in range(3):
    for j in range(5):
        matrix[i][j] = i * 5 + j

for row in matrix:
    print(row)
```

### Data structures (with arrays/lists)

#### Stack — LIFO

```python
class Stack:
    def __init__(self): self.items = []
    def push(self, x):  self.items.append(x)
    def pop(self):      return self.items.pop() if self.items else None
    def peek(self):     return self.items[-1] if self.items else None
    def is_empty(self): return not self.items
```

Use cases: undo history, function call stack, reverse a string, balanced brackets.

#### Queue — FIFO

```python
class Queue:
    def __init__(self): self.items = []
    def enqueue(self, x):  self.items.append(x)
    def dequeue(self):     return self.items.pop(0) if self.items else None
    def is_empty(self):    return not self.items
```

Use cases: print queue, ticketing, BFS in graphs.

#### Linear linked list (using an array of nodes)

```python
class Node:
    def __init__(self, value, next_idx=-1):
        self.value = value
        self.next_idx = next_idx        # index of next node, -1 = end

# An array of Node objects acts as the storage pool
nodes = [Node('A', 1), Node('B', 2), Node('C', -1)]
head_idx = 0

# Traverse
idx = head_idx
while idx != -1:
    print(nodes[idx].value)
    idx = nodes[idx].next_idx
```

### File handling

```python
# Reading line by line
with open('students.txt', 'r', encoding='utf-8') as f:
    for line in f:
        sid, name, score = line.strip().split(',')

# Writing
with open('output.txt', 'w', encoding='utf-8') as f:
    f.write('id,name,score\n')
    f.write('1001,Alice,90\n')

# Appending
with open('output.txt', 'a', encoding='utf-8') as f:
    f.write('1002,Bob,85\n')
```

Required operations: **delete, insert, append, amend** records.

### Sub-programs with parameter passing

```python
def average(values):
    total = 0
    for v in values:
        total += v
    return total / len(values) if values else 0

print(average([1, 2, 3, 4]))    # 2.5
```

Demonstrate:

- **Global vs local variables**
- **Pass by value** (immutable types like int, str) vs **pass by reference** (mutable types like list, dict)
- Returning multiple values via tuples

### Good programming style

- Meaningful identifiers
- Comments where intent is non-obvious
- Consistent indentation
- Constants near top
- One function = one responsibility

---

## a.ii Testing & Debugging (4h)

### Numerical errors to know

| Error | Cause | Example |
|-------|-------|---------|
| **Rounding** | Limited decimal precision | `0.1 + 0.2 != 0.3` |
| **Truncation** | Cutting off extra digits | `int(3.7) = 3` |
| **Overflow** | Result exceeds max representable value | INT32_MAX + 1 wraps |
| **Underflow** | Result smaller than min representable | Very tiny float becomes 0 |

### Other errors

- **Syntax** — caught by interpreter/compiler
- **Logical** — wrong output, no crash
- **Run-time** — crash mid-execution (division by zero, file not found)

### Debugging tools

- **Stubs** — empty/placeholder functions while building
- **Flags** — boolean variables that signal state
- **Break points** — pause execution in IDE
- **Program traces** — print or log values; manual trace tables
- **Test data sets** — normal, boundary, erroneous

---

## b. Applications of Programming in Real Life (6h)

### Use extended modules/libraries to interact with physical devices

You don't need to memorise APIs, but should know that you can read sensors and control actuators from Python — e.g. on a micro:bit or Raspberry Pi.

```python
# micro:bit pseudo-Python
from microbit import display, accelerometer, button_a

while True:
    if button_a.was_pressed():
        x = accelerometer.get_x()
        display.scroll(str(x))
```

### Event handlers

```javascript
// Browser example
document.querySelector('#go').addEventListener('click', () => {
  alert('Button clicked');
});
```

Specific events include:

- User actions (key press, button click, mouse move)
- Sensor values (light level above threshold, accelerometer tilt)

### Sample physical scenarios

- Speech recognition that displays text
- Motors that move based on accelerometer tilt
- Light sensor triggers an LED at night
- Servo arm follows mouse position

---

## Common mistakes

- Modifying an array while iterating over it.
- Off-by-one errors in `range(len(arr))`.
- Treating Python's list slicing as in-place (it returns a new list).
- Confusing `O(n²)` with `O(2n)`.
- Forgetting to close a file (use `with`).
- Swapping `head_idx` of a linked list during deletion incorrectly.

## Past-paper hotspots

- Complete or trace a sorting / searching function.
- Implement a queue or stack using arrays.
- Read a file, process the data, write back.
- Sketch event-driven program structure for a given device.
- Compare two algorithms in terms of efficiency.

➡️ Back to: [Electives Overview](./)
