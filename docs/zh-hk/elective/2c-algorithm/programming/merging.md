# 1.7 · 歸併與計數

> **目標：** 合併兩個已排序列表；執行計數 / 累加演算法。

## 合併兩個已排序列表

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

print(merge([1, 4, 7], [2, 3, 8]))   # [1, 2, 3, 4, 7, 8]
```

**時間** O(n+m)，n、m 為兩輸入長度。

## 計數演算法

### 計出現次數

```python
def count_occurrences(arr, target):
    count = 0
    for v in arr:
        if v == target:
            count += 1
    return count

print(count_occurrences([1,2,3,2,2,4], 2))   # 3
```

### 頻率表

```python
def frequency_map(arr):
    freq = {}
    for v in arr:
        freq[v] = freq.get(v, 0) + 1
    return freq

print(frequency_map(["a","b","a","c","b","a"]))   # {'a':3,'b':2,'c':1}
```

## 累加

```python
def running_total(nums):
    total = 0
    running = []
    for n in nums:
        total += n
        running.append(total)
    return running

print(running_total([1,2,3,4,5]))   # [1,3,6,10,15]
```

## 計通過數

```python
def count_passes(scores, threshold=50):
    return sum(1 for s in scores if s >= threshold)
```

## 學生常見錯誤

- 歸併裏：一個列表用盡後忘把餘下追加。
- 想要 `<=` 時用了嚴格 `<`。
- 用索引迭代但更新錯變數。

## 考試式題目

> **題（5 分）：** 實現 `merge_three(a, b, c)` 把三個已排序列表合為一個已排序列表。提示：複用上面 `merge`。

**參考答案：**

```python
def merge(a, b):
    i = j = 0; out = []
    while i < len(a) and j < len(b):
        if a[i] <= b[j]: out.append(a[i]); i += 1
        else:            out.append(b[j]); j += 1
    out.extend(a[i:]); out.extend(b[j:])
    return out

def merge_three(a, b, c):
    return merge(merge(a, b), c)

print(merge_three([1,4], [2,3], [0,5]))   # [0,1,2,3,4,5]
```

## 關鍵要點

- 歸併是歸併排序的基石。
- 計數 / 累加迴圈到處都是。

➡️ 下一節：[1.8 棧](./stack)