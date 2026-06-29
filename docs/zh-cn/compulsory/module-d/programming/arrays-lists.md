# 3.6 · 列表（一维数组）

> **目标：** 创建、读、改、搜索并处理 Python 列表。（列表是 Python 的一维数组。）

## 创建列表

```python
empty = []
fruits = ["apple", "banana", "cherry"]
zeros = [0] * 10        # 十个 0
counts = list(range(1, 6))  # [1, 2, 3, 4, 5]
```

## 索引（0 起！）

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # cherry（最后）
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

## 长度与成员

```python
print(len(fruits))           # 4
print("banana" in fruits)    # True 或 False
```

## 遍历

```python
for f in fruits:
    print(f)

for i, f in enumerate(fruits):
    print(i, f)
```

## 常用操作

| 需要 | 代码 |
|------|------|
| 求和 | `sum(nums)` |
| 最小 / 最大 | `min(nums)`、`max(nums)` |
| 数出现次数 | `nums.count(5)` |
| 原地排序 | `nums.sort()` |
| 排序副本 | `sorted(nums)` |
| 原地反转 | `nums.reverse()` |

## 实例 · 班级平均

```python
marks = [78, 65, 90, 55, 82, 73]
print("Average:", sum(marks) / len(marks))
print("Top:", max(marks))
print("Pass count:", sum(1 for m in marks if m >= 50))
```

## 实例 · 读 5 个分数再打印统计

```python
marks = []
for _ in range(5):
    marks.append(int(input("Mark: ")))

print("Min:", min(marks))
print("Max:", max(marks))
print("Avg:", sum(marks) / len(marks))
```

## 列表 vs 数组（其他语言）

Pascal/C++ 中通常声明固定大小、单一类型数组：

```text
DECLARE marks[1..30] OF INTEGER
```

Python 的 `list` 更灵活：动态大小、可混合类型。对 HKDSE 课程目的，把 `list` 当作 Python 的一维数组。

## 学生常见错误

- 索引越界：3 元素列表上 `fruits[5]`。
- 把伪代码（1 起）翻 Python 时忘了 Python 是 0 起。
- 混淆 `nums.sort()`（原地，返回 `None`）与 `sorted(nums)`（返回新列表）。
- 遍历时修改列表。

## 考试式题目

> **题（5 分）：** 写 Python 程序读 10 个数到列表，输出最大、最小，以及最大所在的索引。

**参考答案：**

```python
nums = [int(input(f"Number {i+1}: ")) for i in range(10)]
mx = max(nums)
mn = min(nums)
idx = nums.index(mx)
print(f"Max = {mx} at index {idx}")
print(f"Min = {mn}")
```

## 关键要点

- Python `list` = HKDSE 的一维数组。
- 0 起、可变、动态大小。
- 标准工具：`len, sum, min, max, sort, sorted, in, count`。

➡️ 下一节：[3.7 字符串](./strings)
