# 2C · 演演算法與編程

> **課時：** 38 · **試卷權重：** 約全科 12.5% · **主要語言：** Python、C++（Pascal 至 2027 接受）。

本選修擴展模組 D。從簡單循環進階到演算法設計（查找、排序、合併）、資料結構（堆疊、佇列、鏈表）、文件處理、子程序、傳感器與事件驅動編程。

## 子話題速覽

| # | 子話題 | 課時 |
|---|--------|------|
| a.i | 解決方案構思與應用 | 28 |
| a.ii | 測試與調試 | 4 |
| b | 編程在現實生活中的應用 | 6 |

---

## a.i 解決方案構思與應用（28h）

### 必須掌握的資料類型

- **簡單類型**（模組 D 已覆蓋）：int、float、char、bool
- **結構化類型**：陣列（1D、2D+）、字符串
- **用户自定義**：Python 的 `class`、`tuple`、`dataclass`

### 查找演算法

#### 線性查找 · O(n)

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

### 排序演算法（課綱內）

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

#### 選擇排序 · O(n²)

```python
def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        m = i
        for j in range(i + 1, n):
            if arr[j] < arr[m]: m = j
        arr[i], arr[m] = arr[m], arr[i]
```

#### 更快的（要求認知）

- **歸併排序 · O(n log n)** —— 分治、穩定
- **快速排序 · 平均 O(n log n)** —— pivot、就地

> 課程指引説學生需 *知道* 更快演算法存在。要會比較冒泡/插入/選擇 vs 歸併/快排。

### 合併（兩個已排序陣列）

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

### 嵌套循環

```python
matrix = [[0]*5 for _ in range(3)]
for i in range(3):
    for j in range(5):
        matrix[i][j] = i * 5 + j
```

### 資料結構（用陣列實現）

#### 堆疊（LIFO）

```python
class Stack:
    def __init__(self): self.items = []
    def push(self, x):  self.items.append(x)
    def pop(self):      return self.items.pop() if self.items else None
    def peek(self):     return self.items[-1] if self.items else None
```

應用：撤銷歷史、函式調用堆疊、字符串反轉、括號匹配。

#### 佇列（FIFO）

```python
class Queue:
    def __init__(self): self.items = []
    def enqueue(self, x): self.items.append(x)
    def dequeue(self):    return self.items.pop(0) if self.items else None
```

應用：列印佇列、票務、圖的 BFS。

#### 鏈表（用陣列節點池）

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

### 文件處理

```python
with open('students.txt', 'r', encoding='utf-8') as f:
    for line in f:
        sid, name, score = line.strip().split(',')

with open('output.txt', 'w', encoding='utf-8') as f:
    f.write('id,name,score\n')

with open('output.txt', 'a', encoding='utf-8') as f:
    f.write('1002,Bob,85\n')
```

要求操作：**刪除、插入、追加、修改**記錄。

### 子程序與參數傳遞

```python
def average(values):
    return sum(values) / len(values) if values else 0
```

要展示：

- **全局 vs 局部變量**
- **值傳遞**（不可變如 int、str）vs **引用傳遞**（可變如 list、dict）
- 用 tuple 返回多個值

---

## a.ii 測試與調試（4h）

### 數值錯誤

| 錯誤 | 原因 |
|------|------|
| **舍入** | 小數精度有限 |
| **截斷** | 截掉多餘位 |
| **溢出** | 超過最大表示值 |
| **下溢** | 小於最小表示值 |

### 調試工具

- **樁函式（Stubs）** —— 佔位空函式
- **標誌（Flags）** —— 狀態布爾
- **斷點**
- **程序追蹤** —— print/log，紙上追蹤表
- **測試資料集** —— 正常、邊界、錯誤

---

## b. 編程在現實生活中的應用（6h）

### 用擴展模組/庫與硬件交互

```python
# micro:bit 偽 Python
from microbit import display, accelerometer, button_a
while True:
    if button_a.was_pressed():
        display.scroll(str(accelerometer.get_x()))
```

### 事件處理器

```javascript
document.querySelector('#go').addEventListener('click', () => alert('Clicked'));
```

事件包括：

- 用户動作（按鍵、點擊、移動）
- 傳感器值（亮度超閾值、加速度傾斜）

### 物理裝置例子

- 語音識別 → 顯示文字
- 加速度計 → 控制馬達
- 光感 → 夜間點燈
- 舵機跟隨滑鼠

---

## 常見錯誤

- 邊迭代邊修改陣列。
- `range(len(arr))` 越界。
- 以為 Python 列表切片是就地。
- 二分查找前忘記排序。
- 忘記關閉文件（用 `with`）。

## 歷屆考題熱點

- 補全/追蹤排序、查找。
- 用陣列實現堆疊、佇列。
- 讀文件、處理、寫回。
- 給定裝置畫事件驅動結構。
- 比較兩演算法效率。

➡️ 返回：[選修部分總覽](./)
