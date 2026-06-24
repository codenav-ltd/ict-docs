# 1.6 · Sorting Algorithms

> **Goal:** implement bubble, insertion, selection sort. Recognise quick / merge sort exist.

## Bubble sort — O(n²)

Repeatedly swap adjacent out-of-order pairs.

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

- Easy to implement.
- Best when data is nearly sorted (early exit).

## Insertion sort — O(n²)

Treat the left side as sorted, insert each new element into its correct position.

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

- Efficient for small / nearly sorted lists.

## Selection sort — O(n²)

Repeatedly select the smallest from the unsorted region and swap it to the front.

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

- Predictable: always O(n²), regardless of input order.
- Few swaps (n−1 at most).

## Faster sorts (awareness only)

| Algorithm | Time | Notes |
|-----------|------|-------|
| **Merge sort** | O(n log n) | Stable, requires extra memory |
| **Quick sort** | O(n log n) avg, O(n²) worst | In-place, picks a pivot |
| **Heap sort** | O(n log n) | In-place, not stable |
| **Tim sort** | O(n log n) | Python's built-in `sorted()` |

The HKEAA expects you to **know they exist** and compare them to the O(n²) sorts above.

## Comparison table

| Algorithm | Best | Average | Worst | Stable? |
|-----------|------|---------|-------|---------|
| Bubble | O(n) | O(n²) | O(n²) | Yes |
| Insertion | O(n) | O(n²) | O(n²) | Yes |
| Selection | O(n²) | O(n²) | O(n²) | No |
| Merge | O(n log n) | O(n log n) | O(n log n) | Yes |
| Quick | O(n log n) | O(n log n) | O(n²) | No |

## Stability

A sort is **stable** if equal elements keep their original order. Important when sorting by multiple criteria (e.g. sort by name, then by class — stable sort preserves name order within each class).

## Common student mistakes

- Forgetting `swapped = False` in bubble sort's early exit.
- Off-by-one in inner loop bounds.
- Calling `sort()` on a tuple (immutable).

## Exam-style question

> **Q (5 marks):** Trace insertion sort on the list `[5, 2, 4, 6, 1, 3]`. Show the list after each pass.

**Sample answer:**

```
start  : [5, 2, 4, 6, 1, 3]
pass 1 (key=2): [2, 5, 4, 6, 1, 3]
pass 2 (key=4): [2, 4, 5, 6, 1, 3]
pass 3 (key=6): [2, 4, 5, 6, 1, 3]
pass 4 (key=1): [1, 2, 4, 5, 6, 3]
pass 5 (key=3): [1, 2, 3, 4, 5, 6]
```

## Key takeaways

- Master 3 O(n²) sorts.
- Know merge / quick exist and roughly when they win.
- Stability matters for multi-key sorts.

➡️ Next: [1.7 Merging & Counting](./merging)
