# 1.6 · 排序算法

> **目标：** 实现冒泡、插入、选择排序。认识 quick / merge 排序的存在。

## 冒泡排序 —— O(n²)

反复交换相邻乱序对。

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        swapped = False
        for j in range(n - 1 - i):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True
        if not swapped: break
```

- 易实现。
- 数据接近有序时最佳（提前退出）。

## 插入排序 —— O(n²)

把左侧当已排序，把每个新元素插到正确位置。

```python
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key
```

- 对小 / 近排序列表高效。

## 选择排序 —— O(n²)

反复从未排序区选最小，交换到前。

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

- 可预测：不论输入顺序总 O(n²)。
- 交换少（至多 n−1）。

## 更快排序（仅认识）

| 算法 | 时间 | 备注 |
|-----------|------|-------|
| **归并排序** | O(n log n) | 稳定，需额外内存 |
| **快速排序** | 平均 O(n log n)，最坏 O(n²) | 原地，选枢轴 |
| **堆排序** | O(n log n) | 原地，不稳定 |
| **Tim 排序** | O(n log n) | Python 内建 `sorted()` |

HKEAA 期望你**知道它们存在**并与上述 O(n²) 排序比较。

## 对比表

| 算法 | 最好 | 平均 | 最坏 | 稳定？ |
|-----------|------|---------|-------|---------|
| 冒泡 | O(n) | O(n²) | O(n²) | 是 |
| 插入 | O(n) | O(n²) | O(n²) | 是 |
| 选择 | O(n²) | O(n²) | O(n²) | 否 |
| 归并 | O(n log n) | O(n log n) | O(n log n) | 是 |
| 快速 | O(n log n) | O(n log n) | O(n²) | 否 |

## 稳定性

排序**稳定**指相等元素保原顺序。多键排序（如按 name 再按 class —— 稳定排序在每 class 内保 name 顺序）时重要。

## 学生常见错误

- 冒泡提前退出时忘 `swapped = False`。
- 内循环边界偏差 1。
- 对元组调 `sort()`（不可变）。

## 考试式题目

> **题（5 分）：** 在列表 `[5, 2, 4, 6, 1, 3]` 上追踪插入排序。每轮后展示列表。

**参考答案：**

```
start  : [5, 2, 4, 6, 1, 3]
pass 1 (key=2): [2, 5, 4, 6, 1, 3]
pass 2 (key=4): [2, 4, 5, 6, 1, 3]
pass 3 (key=6): [2, 4, 5, 6, 1, 3]
pass 4 (key=1): [1, 2, 4, 5, 6, 3]
pass 5 (key=3): [1, 2, 3, 4, 5, 6]
```

## 关键要点

- 掌握 3 个 O(n²) 排序。
- 知道归并 / 快速存在与大致何时胜。
- 多键排序时稳定性重要。

➡️ 下一节：[1.7 归并与计数](./merging)
