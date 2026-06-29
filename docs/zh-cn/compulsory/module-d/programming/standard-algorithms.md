# 3.8 · 标准算法

> **目标：** 实现 HKEAA 在模块 D 中点名的算法。

课程指引为必修部分明确点名以下算法：

- 在列表中找 min / max / 平均
- 搜索一项（线性查找）
- 找字符串长度
- 从字符串提取所需字符
- 数满足条件的项
- 检查列表是否有序
- 数学公式的使用

## Min / Max / 平均

```python
nums = [12, 4, 7, 19, 3]

mn = nums[0]
mx = nums[0]
total = 0
for n in nums:
    if n < mn: mn = n
    if n > mx: mx = n
    total += n
avg = total / len(nums)

print(mn, mx, avg)         # 3 19 9.0
```

应该能**不用**内置 `min()` / `max()` / `sum()` 也写出来。

## 线性查找

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i              # 找到，返回索引
    return -1                     # 没找到

print(linear_search([3, 7, 1, 9, 5], 9))   # 3
print(linear_search([3, 7, 1, 9, 5], 4))   # -1
```

## 字符串长度

```python
s = "HKDSE"
length = 0
for _ in s:
    length += 1
print(length)               # 5
```

（`len(s)` 同效。）

## 从字符串提取字符

```python
s = "Information"
# 取前 4 个
print(s[:4])                # "Info"

# 每隔一个取
print(s[::2])               # "Ifrain"
```

## 数满足条件的项

```python
scores = [55, 62, 47, 80, 73]
pass_count = 0
for s in scores:
    if s >= 50:
        pass_count += 1
print(pass_count)           # 4
```

或用推导式：

```python
pass_count = sum(1 for s in scores if s >= 50)
```

## 检查列表是否升序

```python
def is_sorted_ascending(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True

print(is_sorted_ascending([1, 3, 5, 7]))   # True
print(is_sorted_ascending([1, 4, 3, 8]))   # False
```

## 用数学公式

```python
# 复利 A = P(1+r)^n
P = float(input("Principal: "))
r = float(input("Annual rate (e.g. 0.05): "))
n = int(input("Years: "))
A = P * (1 + r) ** n
print(f"After {n} years: {A:.2f}")
```

## 边界情况

课程指引强调识别**边界情况**。上述每个算法都试：

- 空列表 (`[]`)
- 单元素列表 (`[5]`)
- 已排序 / 反序列表
- 等于阈值的项（正好 50 是否及格）

## 学生常见错误

- 把 `mn` 与 `mx` 初始化为 0 而非 `nums[0]`（对负数失败）。
- 算相邻差时从索引 0 开始迭代（`is_sorted` 应从 1 起）。
- 切片偏差 1。

## 考试式题目

> **题（6 分）：** 写 Python 代码读 10 个分数到列表，并输出：
> (a) 最高分，
> (b) 最低分，
> (c) 平均，
> (d) 高于平均的分数个数。

**参考答案：**

```python
marks = [int(input(f"Mark {i+1}: ")) for i in range(10)]
highest = max(marks)
lowest  = min(marks)
average = sum(marks) / len(marks)
above_avg = sum(1 for m in marks if m > average)
print(f"Highest: {highest}, Lowest: {lowest}")
print(f"Average: {average:.2f}")
print(f"Above average count: {above_avg}")
```

## 关键要点

- 掌握课程点名的算法。
- 用与不用内置**都**写一遍。
- 总测边界情况。

## 第 3 章总结

自测：5 分钟内能从零实现线性查找与 min/max/avg 报告吗？能就把模块 D 必修编程练成了。

➡️ 下一章：[4 · 程序测试与调试](../testing/)
