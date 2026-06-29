# 3.6 · 列表（一維數組）

> **目標：** 創建、讀、改、搜索並處理 Python 列表。（列表是 Python 的一維數組。）

## 創建列表

```python
empty = []
fruits = ["apple", "banana", "cherry"]
zeros = [0] * 10        # 十個 0
counts = list(range(1, 6))  # [1, 2, 3, 4, 5]
```

## 索引（0 起！）

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # cherry（最後）
```

## 切片

```python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])    # [20, 30, 40]
print(nums[:2])     # [10, 20]
print(nums[2:])     # [30, 40, 50]
print(nums[::-1])   # [50, 40, 30, 20, 10]（反向）
```

## 更新

```python
fruits[1] = "blueberry"
fruits.append("date")
fruits.insert(0, "apricot")
fruits.remove("apple")
last = fruits.pop()
```

## 長度與成員

```python
print(len(fruits))           # 4
print("banana" in fruits)    # True 或 False
```

## 遍歷

```python
for f in fruits:
    print(f)

for i, f in enumerate(fruits):
    print(i, f)
```

## 常用操作

| 需要 | 代碼 |
|------|------|
| 求和 | `sum(nums)` |
| 最小 / 最大 | `min(nums)`、`max(nums)` |
| 數出現次數 | `nums.count(5)` |
| 原地排序 | `nums.sort()` |
| 排序副本 | `sorted(nums)` |
| 原地反轉 | `nums.reverse()` |

## 實例 · 班級平均

```python
marks = [78, 65, 90, 55, 82, 73]
print("Average:", sum(marks) / len(marks))
print("Top:", max(marks))
print("Pass count:", sum(1 for m in marks if m >= 50))
```

## 實例 · 讀 5 個分數再列印統計

```python
marks = []
for _ in range(5):
    marks.append(int(input("Mark: ")))

print("Min:", min(marks))
print("Max:", max(marks))
print("Avg:", sum(marks) / len(marks))
```

## 列表 vs 數組（其他語言）

Pascal/C++ 中通常聲明固定大小、單一類型數組：

```text
DECLARE marks[1..30] OF INTEGER
```

Python 的 `list` 更靈活：動態大小、可混合類型。對 HKDSE 課程目的，把 `list` 當作 Python 的一維數組。

## 學生常見錯誤

- 索引越界：3 元素列表上 `fruits[5]`。
- 把偽程式碼（1 起）翻 Python 時忘了 Python 是 0 起。
- 混淆 `nums.sort()`（原地，返回 `None`）與 `sorted(nums)`（返回新列表）。
- 遍歷時修改列表。

## 考試式題目

> **題（5 分）：** 寫 Python 程式讀 10 個數到列表，輸出最大、最小，以及最大所在的索引。

**參考答案：**

```python
nums = [int(input(f"Number {i+1}: ")) for i in range(10)]
mx = max(nums)
mn = min(nums)
idx = nums.index(mx)
print(f"Max = {mx} at index {idx}")
print(f"Min = {mn}")
```

## 關鍵要點

- Python `list` = HKDSE 的一維數組。
- 0 起、可變、動態大小。
- 標準工具：`len, sum, min, max, sort, sorted, in, count`。

➡️ 下一節：[3.7 字符串](./strings)