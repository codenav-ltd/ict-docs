# 1.5 · 線性與二分查找

> **目標：** 實現並比較兩種查找。

## 線性查找 —— O(n)

走過列表，逐元素比較。

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

- 適用於**無序**資料。
- 最壞：掃描整個列表。

## 二分查找 —— O(log n)

反覆對半查找範圍。需要**已排序**輸入。

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

## 追蹤 —— `binary_search([1,3,5,7,9,11,13], 9)`

| lo | hi | mid | arr[mid] | 比較 |
|----|----|-----|----------|------------|
| 0 | 6 | 3 | 7 | 7<9 → lo=4 |
| 4 | 6 | 5 | 11 | 11>9 → hi=4 |
| 4 | 4 | 4 | 9 | 找到 → 返回 4 |

3 次迭代找到 9 —— 而線性最多 7 次。

## 性能對比

| 項數 | 線性（最壞） | 二分（最壞） |
|-------|----------------|----------------|
| 10 | 10 | 4 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |
| 1,000,000,000 | 1,000,000,000 | 30 |

大型已排序資料上二分快得多。

## 何時用哪個

| 情境 | 用 |
|-----------|-----|
| 小列表、少查 | 線性 |
| 無序 | 線性（多查則先排） |
| 已排序、多查 | 二分 |
| 需精確且有界位置 | 二分 |

## 遞歸二分查找

```python
def binary_recursive(arr, target, lo=0, hi=None):
    if hi is None: hi = len(arr) - 1
    if lo > hi: return -1
    mid = (lo + hi) // 2
    if arr[mid] == target: return mid
    if arr[mid] < target:  return binary_recursive(arr, target, mid + 1, hi)
    return binary_recursive(arr, target, lo, mid - 1)
```

## 學生常見錯誤

- 在未排序資料上用二分。
- `lo`/`hi` 更新偏差 1。
- 找不到時忘返 `-1`。

## 考試式題目

> **題（5 分）：** 在 Python 實現兩種查找。説出雖較慢但線性比二分更可取的一個情境。

**參考答案：**

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

**線性更可取**：列表小或無序且只查一次時。先排序以啓用二分要 O(n log n)，超過 O(n) 線性掃描成本。

## 關鍵要點

- 線性總能用但 O(n)。
- 二分 O(log n) 但需已排序輸入。
- 按查詢頻率與列表狀態選。

➡️ 下一節：[1.6 排序演算法](./sorting)