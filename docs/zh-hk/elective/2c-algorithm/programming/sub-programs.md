# 1.3 · 子程式與參數傳遞

> **目標：** 整潔地定義函式；理解值 vs 引用、局部 vs 全局。

## 定義函式

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))             # Hello, Alice!
print(greet("Bob", "Hi"))         # Hi, Bob!
print(greet(name="Carol"))        # 關鍵字參數
```

## 參數與實參

- **參數**= 函式定義裏的名字。
- **實參**= 調用時傳的值。

## 位置 vs 關鍵字

```python
def order(food, drink, size):
    print(food, drink, size)

order("burger", "cola", "large")          # 位置
order(drink="tea", food="rice", size="M") # 關鍵字
```

## 默認值

```python
def power(base, exp=2):
    return base ** exp

power(5)        # 25
power(5, 3)     # 125
```

## 變數作用域

| 作用域 | 在哪 |
|-------|-------|
| **局部** | 函式內 |
| **外圍** | 外層函式（閉包） |
| **全局** | 模組頂部 |
| **內建** | Python 預定義名字 |

```python
total = 0          # 全局

def add(x):
    total = x      # 局部 —— **不**改全局
    return total

add(10)
print(total)       # 仍 0
```

用 `global` 關鍵字修改（很少需要）：

```python
def reset():
    global total
    total = 0
```

## 值傳 vs 引用傳

Python 裏一切都是「按物件引用傳遞」：

- **不可變類型**（int、str、tuple）：函式不能改原值。
- **可變類型**（list、dict、set、自定義物件）：函式可原地改。

```python
def double_each(lst):
    for i in range(len(lst)):
        lst[i] *= 2

nums = [1, 2, 3]
double_each(nums)
print(nums)             # [2, 4, 6] —— 原值改了
```

```python
def increment(n):
    n += 1
    return n

x = 5
y = increment(x)
print(x, y)             # 5 6  —— 原值未改
```

## 返回值

```python
def divmod_(a, b):
    return a // b, a % b      # 返回元組

q, r = divmod_(17, 5)
print(q, r)                   # 3 2
```

## 好函式設計

- 一職。
- 短（≤ 30 行）。
- 有意義的名（動賓）。
- 用 docstring 記。

## 學生常見錯誤

- 函式里意外改全局。
- 返回 `print()`（返回 None）。
- 意外修改列表參數。

## 考試式題目

> **題（5 分）：** 寫函式 `stats(numbers)` 返回列表的平均、最小、最大。演示調用。

**參考答案：**

```python
def stats(numbers):
    if not numbers:
        return None
    return sum(numbers) / len(numbers), min(numbers), max(numbers)

avg, mn, mx = stats([4, 7, 1, 9, 5])
print(f"avg={avg}, min={mn}, max={mx}")
```

## 關鍵要點

- 函式封裝邏輯。
- 默認參數、關鍵字參數、多返回。
- 可變參數可在函式內改。

➡️ 下一節：[1.4 文件處理](./file-handling)