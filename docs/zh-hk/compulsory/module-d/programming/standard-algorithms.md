# 3.8 · 標準演算法

> **目標：** 實現 HKEAA 在模組 D 中點名的演算法。

課程指引為必修部分明確點名以下演算法：

- 在列表中找 min / max / 平均
- 搜索一項（線性查找）
- 找字符串長度
- 從字符串提取所需字符
- 數滿足條件的項
- 檢查列表是否有序
- 數學公式的使用

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

應該能**不用**內建 `min()` / `max()` / `sum()` 也寫出來。

## 線性查找

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i              # 找到，返回索引
    return -1                     # 沒找到

print(linear_search([3, 7, 1, 9, 5], 9))   # 3
print(linear_search([3, 7, 1, 9, 5], 4))   # -1
```

## 字符串長度

```python
s = "HKDSE"
length = 0
for _ in s:
    length += 1
print(length)               # 5
```

（`len(s)` 同效。）

## 從字符串提取字符

```python
s = "Information"
# 取前 4 個
print(s[:4])                # "Info"

# 每隔一個取
print(s[::2])               # "Ifrain"
```

## 數滿足條件的項

```python
scores = [55, 62, 47, 80, 73]
pass_count = 0
for s in scores:
    if s >= 50:
        pass_count += 1
print(pass_count)           # 4
```

或用推導式：

```python
pass_count = sum(1 for s in scores if s >= 50)
```

## 檢查列表是否升序

```python
def is_sorted_ascending(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True

print(is_sorted_ascending([1, 3, 5, 7]))   # True
print(is_sorted_ascending([1, 4, 3, 8]))   # False
```

## 用數學公式

```python
# 複利 A = P(1+r)^n
P = float(input("Principal: "))
r = float(input("Annual rate (e.g. 0.05): "))
n = int(input("Years: "))
A = P * (1 + r) ** n
print(f"After {n} years: {A:.2f}")
```

## 邊界情況

課程指引強調識別**邊界情況**。上述每個演算法都試：

- 空列表 (`[]`)
- 單元素列表 (`[5]`)
- 已排序 / 反序列表
- 等於閾值的項（正好 50 是否及格）

## 學生常見錯誤

- 把 `mn` 與 `mx` 初始化為 0 而非 `nums[0]`（對負數失敗）。
- 算相鄰差時從索引 0 開始迭代（`is_sorted` 應從 1 起）。
- 切片偏差 1。

## 考試式題目

> **題（6 分）：** 寫 Python 代碼讀 10 個分數到列表，並輸出：
> (a) 最高分，
> (b) 最低分，
> (c) 平均，
> (d) 高於平均的分數個數。

**參考答案：**

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

## 關鍵要點

- 掌握課程點名的演算法。
- 用與不用內建**都**寫一遍。
- 總測邊界情況。

## 第 3 章總結

自測：5 分鐘內能從零實現線性查找與 min/max/avg 報告嗎？能就把模組 D 必修編程練成了。

➡️ 下一章：[4 · 程序測試與調試](../testing/)