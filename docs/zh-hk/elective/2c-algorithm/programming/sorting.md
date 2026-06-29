# 1.6 · 排序演算法

> **目標：** 實現冒泡、插入、選擇排序。認識 quick / merge 排序的存在。

## 冒泡排序 —— O(n²)

反覆交換相鄰亂序對。

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

- 易實現。
- 資料接近有序時最佳（提前退出）。

## 插入排序 —— O(n²)

把左側當已排序，把每個新元素插到正確位置。

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

- 對小 / 近排序列表高效。

## 選擇排序 —— O(n²)

反覆從未排序區選最小，交換到前。

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

- 可預測：不論輸入順序總 O(n²)。
- 交換少（至多 n−1）。

## 更快排序（僅認識）

| 演算法 | 時間 | 備註 |
|-----------|------|-------|
| **歸併排序** | O(n log n) | 穩定，需額外記憶體 |
| **快速排序** | 平均 O(n log n)，最壞 O(n²) | 原地，選樞軸 |
| **堆排序** | O(n log n) | 原地，不穩定 |
| **Tim 排序** | O(n log n) | Python 內建 `sorted()` |

HKEAA 期望你**知道它們存在**並與上述 O(n²) 排序比較。

## 對比表

| 演算法 | 最好 | 平均 | 最壞 | 穩定？ |
|-----------|------|---------|-------|---------|
| 冒泡 | O(n) | O(n²) | O(n²) | 是 |
| 插入 | O(n) | O(n²) | O(n²) | 是 |
| 選擇 | O(n²) | O(n²) | O(n²) | 否 |
| 歸併 | O(n log n) | O(n log n) | O(n log n) | 是 |
| 快速 | O(n log n) | O(n log n) | O(n²) | 否 |

## 穩定性

排序**穩定**指相等元素保原順序。多鍵排序（如按 name 再按 class —— 穩定排序在每 class 內保 name 順序）時重要。

## 學生常見錯誤

- 冒泡提前退出時忘 `swapped = False`。
- 內迴圈邊界偏差 1。
- 對元組調 `sort()`（不可變）。

## 考試式題目

> **題（5 分）：** 在列表 `[5, 2, 4, 6, 1, 3]` 上追蹤插入排序。每輪後展示列表。

**參考答案：**

```
start  : [5, 2, 4, 6, 1, 3]
pass 1 (key=2): [2, 5, 4, 6, 1, 3]
pass 2 (key=4): [2, 4, 5, 6, 1, 3]
pass 3 (key=6): [2, 4, 5, 6, 1, 3]
pass 4 (key=1): [1, 2, 4, 5, 6, 3]
pass 5 (key=3): [1, 2, 3, 4, 5, 6]
```

## 關鍵要點

- 掌握 3 個 O(n²) 排序。
- 知道歸併 / 快速存在與大致何時勝。
- 多鍵排序時穩定性重要。

➡️ 下一節：[1.7 歸併與計數](./merging)