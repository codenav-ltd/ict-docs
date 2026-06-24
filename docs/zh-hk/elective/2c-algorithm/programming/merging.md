# 1.7 · Merging & Counting

> **Goal:** merge two sorted lists; perform counting / accumulating algorithms.

## Merge two sorted lists

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

**Time** O(n+m) where n,m are the input lengths.

## Counting algorithms

### Count occurrences

```python
def count_occurrences(arr, target):
    count = 0
    for v in arr:
        if v == target:
            count += 1
    return count

print(count_occurrences([1,2,3,2,2,4], 2))   # 3
```

### Frequency map

```python
def frequency_map(arr):
    freq = {}
    for v in arr:
        freq[v] = freq.get(v, 0) + 1
    return freq

print(frequency_map(["a","b","a","c","b","a"]))   # {'a':3,'b':2,'c':1}
```

## Accumulating

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

## Counting passes

```python
def count_passes(scores, threshold=50):
    return sum(1 for s in scores if s >= threshold)
```

## Common student mistakes

- In merge: forgetting to append the remaining elements after one list is exhausted.
- Counting equal `<` strictly when `<=` was intended.
- Iterating with index but updating wrong variable.

## Exam-style question

> **Q (5 marks):** Implement `merge_three(a, b, c)` that merges three already-sorted lists into one sorted list. Hint: reuse `merge` from above.

**Sample answer:**

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

## Key takeaways

- Merge is the building block of merge sort.
- Counting / accumulating loops appear constantly.

➡️ Next: [1.8 Stack](./stack)
