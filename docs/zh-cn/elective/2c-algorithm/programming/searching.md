# 1.5 · Linear & Binary Search

> **Goal:** implement and compare both searches.

## Linear search — O(n)

Walk through the list, comparing each element.

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i
    return -1
```

- Works on **unsorted** data.
- Worst case: scans the whole list.

## Binary search — O(log n)

Repeatedly halve the search range. Requires a **sorted** input.

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

## Trace — `binary_search([1,3,5,7,9,11,13], 9)`

| lo | hi | mid | arr[mid] | comparison |
|----|----|-----|----------|------------|
| 0 | 6 | 3 | 7 | 7<9 → lo=4 |
| 4 | 6 | 5 | 11 | 11>9 → hi=4 |
| 4 | 4 | 4 | 9 | found → return 4 |

3 iterations to find 9 — vs up to 7 for linear search.

## Performance comparison

| Items | Linear (worst) | Binary (worst) |
|-------|----------------|----------------|
| 10 | 10 | 4 |
| 1,000 | 1,000 | 10 |
| 1,000,000 | 1,000,000 | 20 |
| 1,000,000,000 | 1,000,000,000 | 30 |

Binary search is dramatically faster on large sorted data.

## When to use which

| Situation | Use |
|-----------|-----|
| Small list, few lookups | Linear |
| Unsorted | Linear (or sort first if many lookups) |
| Sorted, many lookups | Binary |
| Need exact and bounded position | Binary |

## Recursive binary search

```python
def binary_recursive(arr, target, lo=0, hi=None):
    if hi is None: hi = len(arr) - 1
    if lo > hi: return -1
    mid = (lo + hi) // 2
    if arr[mid] == target: return mid
    if arr[mid] < target:  return binary_recursive(arr, target, mid + 1, hi)
    return binary_recursive(arr, target, lo, mid - 1)
```

## Common student mistakes

- Calling binary search on unsorted data.
- Off-by-one in `lo`/`hi` updates.
- Forgetting to return `-1` when not found.

## Exam-style question

> **Q (5 marks):** Implement both searches in Python. State one situation where linear search is preferable to binary search despite being slower.

**Sample answer:**

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

**Preferable for linear**: when the list is small or unsorted and we only do one search. Sorting first to enable binary search costs O(n log n), which outweighs the O(n) linear scan.

## Key takeaways

- Linear works always but O(n).
- Binary is O(log n) but needs sorted input.
- Choose based on lookup frequency and list state.

➡️ Next: [1.6 Sorting Algorithms](./sorting)
