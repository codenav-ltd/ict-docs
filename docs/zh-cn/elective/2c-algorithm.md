# 2C · 算法与编程

> **课时：** 38 · **试卷权重：** 约全科 12.5% · **主要语言：** Python、C++（Pascal 至 2027 接受）。

本选修扩展模块 D。从简单循环进阶到算法设计（查找、排序、合并）、数据结构（栈、队列、链表）、文件处理、子程序、传感器与事件驱动编程。

## 子话题速览

| # | 子话题 | 课时 |
|---|--------|------|
| a.i | 解决方案设计与实现 | 28 |
| a.ii | 测试与调试 | 4 |
| b | 编程在现实生活中的应用 | 6 |

---

## a.i 解决方案设计与实现（28h）

### 必须掌握的数据类型

- **简单类型**（模块 D 已覆盖）：int、float、char、bool
- **结构化类型**：数组（1D、2D+）、字符串
- **用户自定义**：Python 的 `class`、`tuple`、`dataclass`

### 查找算法

#### 线性查找 · O(n)

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

#### 二分查找 · O(log n)（要求已排序）

```python
def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1
```

### 排序算法（课纲内）

#### 冒泡排序 · O(n²)

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped: break
```

#### 插入排序 · O(n²)

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key, j = arr[i], i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
```

#### 选择排序 · O(n²)

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if arr[j] < arr[m]: m = j
        arr[i], arr[m] = arr[m], arr[i]
```

#### 更快的（要求认知）

- **归并排序 · O(n log n)** —— 分治、稳定
- **快速排序 · 平均 O(n log n)** —— pivot、就地

> 课程指引说学生需 *知道* 更快算法存在。要会比较冒泡/插入/选择 vs 归并/快排。

### 合并（两个已排序数组）

```python
def merge(a, b):
    i = j = 0
    out = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]: out.append(a[i]); i += 1
        else:            out.append(b[j]); j += 1
    out.extend(a[i:]); out.extend(b[j:])
    return out
```

### 嵌套循环

```python
matrix = [[0]*5 for _ in range(3)]
for i in range(3):
    for j in range(5):
        matrix[i][j] = i * 5 + j
```

### 数据结构（用数组实现）

#### 栈（LIFO）

```python
class Stack:
    def __init__(self): self.items = []
    def push(self, x):  self.items.append(x)
    def pop(self):      return self.items.pop() if self.items else None
    def peek(self):     return self.items[-1] if self.items else None
```

应用：撤销历史、函数调用栈、字符串反转、括号匹配。

#### 队列（FIFO）

```python
class Queue:
    def __init__(self): self.items = []
    def enqueue(self, x): self.items.append(x)
    def dequeue(self):    return self.items.pop(0) if self.items else None
```

应用：打印队列、票务、图的 BFS。

#### 链表（用数组节点池）

```python
class Node:
    def __init__(self, value, next_idx=-1):
        self.value = value
        self.next_idx = next_idx

nodes = [Node('A', 1), Node('B', 2), Node('C', -1)]
head_idx = 0
idx = head_idx
while idx != -1:
    print(nodes[idx].value)
    idx = nodes[idx].next_idx
```

### 文件处理

```python
with open('students.txt', 'r', encoding='utf-8') as f:
    for line in f:
        sid, name, score = line.strip().split(',')

with open('output.txt', 'w', encoding='utf-8') as f:
    f.write('id,name,score\n')

with open('output.txt', 'a', encoding='utf-8') as f:
    f.write('1002,Bob,85\n')
```

要求操作：**删除、插入、追加、修改**记录。

### 子程序与参数传递

```python
def average(values):
    return sum(values) / len(values) if values else 0
```

要展示：

- **全局 vs 局部变量**
- **值传递**（不可变如 int、str）vs **引用传递**（可变如 list、dict）
- 用 tuple 返回多个值

---

## a.ii 测试与调试（4h）

### 数值错误

| 错误 | 原因 |
|------|------|
| **舍入** | 小数精度有限 |
| **截断** | 截掉多余位 |
| **溢出** | 超过最大表示值 |
| **下溢** | 小于最小表示值 |

### 调试工具

- **桩函数（Stubs）** —— 占位空函数
- **标志（Flags）** —— 状态布尔
- **断点**
- **程序追踪** —— print/log，纸上追踪表
- **测试数据集** —— 正常、边界、错误

---

## b. 编程在现实生活中的应用（6h）

### 用扩展模块/库与硬件交互

```python
# micro:bit 伪 Python
from microbit import display, accelerometer, button_a
while True:
    if button_a.was_pressed():
        display.scroll(str(accelerometer.get_x()))
```

### 事件处理器

```javascript
document.querySelector('#go').addEventListener('click', () => alert('Clicked'));
```

事件包括：

- 用户动作（按键、点击、移动）
- 传感器值（亮度超阈值、加速度倾斜）

### 物理装置示例

- 语音识别 → 显示文字
- 加速度计 → 控制马达
- 光感 → 夜间点灯
- 舵机跟随鼠标

---

## 常见错误

- 边迭代边修改数组。
- `range(len(arr))` 越界。
- 以为 Python 列表切片是就地。
- 二分查找前忘记排序。
- 忘记关闭文件（用 `with`）。

## 历届考题热点

- 补全/追踪排序、查找。
- 用数组实现栈、队列。
- 读文件、处理、写回。
- 给定装置画事件驱动结构。
- 比较两算法效率。

➡️ 返回：[选修部分总览](./)
