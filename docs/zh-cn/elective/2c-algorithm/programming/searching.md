# 1.5 · 线性与二分查找

> **目标：** 实现并比较两种查找。

## 线性查找 —— O(n)

走过列表，逐元素比较。

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

- 适用于**无序**数据。
- 最坏：扫描整个列表。

## 二分查找 —— O(log n)

反复对半查找范围。需要**已排序**输入。

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

## 追踪 —— `binary_search([1,3,5,7,9,11,13], 9)`

| lo | hi | mid | arr[mid] | 比较 |
|----|----|-----|----------|------------|
| 0 | 6 | 3 | 7 | 7<9 → lo=4 |
| 4 | 6 | 5 | 11 | 11>9 → hi=4 |
| 4 | 4 | 4 | 9 | 找到 → 返回 4 |

3 次迭代找到 9 —— 而线性最多 7 次。

## 性能对比

| 项数 | 线性（最坏） | 二分（最坏） |
|-------|----------------|----------------|
| 10 | 10 | 4 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |
| 1,000,000,000 | 1,000,000,000 | 30 |

大型已排序数据上二分快得多。

## 何时用哪个

| 情境 | 用 |
|-----------|-----|
| 小列表、少查 | 线性 |
| 无序 | 线性（多查则先排） |
| 已排序、多查 | 二分 |
| 需精确且有界位置 | 二分 |

## 递归二分查找

```python
def binary_recursive(arr, target, lo=0, hi=None):
    if hi is None: hi = len(arr) - 1
    if lo > hi: return -1
    mid = (lo + hi) // 2
    if arr[mid] == target: return mid
    if arr[mid] < target:  return binary_recursive(arr, target, mid + 1, hi)
    return binary_recursive(arr, target, lo, mid - 1)
```

## 学生常见错误

- 在未排序数据上用二分。
- `lo`/`hi` 更新偏差 1。
- 找不到时忘返 `-1`。

## 考试式题目

> **题（5 分）：** 在 Python 实现两种查找。说出虽较慢但线性比二分更可取的一个情境。

**参考答案：**

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1

def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target: return mid
        elif arr[mid] < target: lo = mid + 1
        else: hi = mid - 1
    return -1
```

**线性更可取**：列表小或无序且只查一次时。先排序以启用二分要 O(n log n)，超过 O(n) 线性扫描成本。

## 关键要点

- 线性总能用但 O(n)。
- 二分 O(log n) 但需已排序输入。
- 按查询频率与列表状态选。

➡️ 下一节：[1.6 排序算法](./sorting)
