# 1.7 · 归并与计数

> **目标：** 合并两个已排序列表；执行计数 / 累加算法。

## 合并两个已排序列表

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

**时间** O(n+m)，n、m 为两输入长度。

## 计数算法

### 计出现次数

```python
def count_occurrences(arr, target):
    count = 0
    for v in arr:
        if v == target:
            count += 1
    return count

print(count_occurrences([1,2,3,2,2,4], 2))   # 3
```

### 频率表

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

## 计通过数

```python
def count_passes(scores, threshold=50):
    return sum(1 for s in scores if s >= threshold)
```

## 学生常见错误

- 归并里：一个列表用尽后忘把余下追加。
- 想要 `<=` 时用了严格 `<`。
- 用索引迭代但更新错变量。

## 考试式题目

> **题（5 分）：** 实现 `merge_three(a, b, c)` 把三个已排序列表合为一个已排序列表。提示：复用上面 `merge`。

**参考答案：**

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

## 关键要点

- 归并是归并排序的基石。
- 计数 / 累加循环到处都是。

➡️ 下一节：[1.8 栈](./stack)
