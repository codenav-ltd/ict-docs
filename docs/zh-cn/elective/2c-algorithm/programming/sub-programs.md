# 1.3 · 子程序与参数传递

> **目标：** 整洁地定义函数；理解值 vs 引用、局部 vs 全局。

## 定义函数

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))             # Hello, Alice!
print(greet("Bob", "Hi"))         # Hi, Bob!
print(greet(name="Carol"))        # 关键字参数
```

## 参数与实参

- **参数**= 函数定义里的名字。
- **实参**= 调用时传的值。

## 位置 vs 关键字

```python
def order(food, drink, size):
    print(food, drink, size)

order("burger", "cola", "large")          # 位置
order(drink="tea", food="rice", size="M") # 关键字
```

## 默认值

```python
def power(base, exp=2):
    return base ** exp

power(5)        # 25
power(5, 3)     # 125
```

## 变量作用域

| 作用域 | 在哪 |
|-------|-------|
| **局部** | 函数内 |
| **外围** | 外层函数（闭包） |
| **全局** | 模组顶部 |
| **内建** | Python 预定义名字 |

```python
total = 0          # 全局

def add(x):
    total = x      # 局部 —— **不**改全局
    return total

add(10)
print(total)       # 仍 0
```

用 `global` 关键字修改（很少需要）：

```python
def reset():
    global total
    total = 0
```

## 值传 vs 引用传

Python 里一切都是「按对象引用传递」：

- **不可变类型**（int、str、tuple）：函数不能改原值。
- **可变类型**（list、dict、set、自定义对象）：函数可原地改。

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
    return a // b, a % b      # 返回元组

q, r = divmod_(17, 5)
print(q, r)                   # 3 2
```

## 好函数设计

- 一职。
- 短（≤ 30 行）。
- 有意义的名（动宾）。
- 用 docstring 记。

## 学生常见错误

- 函数里意外改全局。
- 返回 `print()`（返回 None）。
- 意外修改列表参数。

## 考试式题目

> **题（5 分）：** 写函数 `stats(numbers)` 返回列表的平均、最小、最大。演示调用。

**参考答案：**

```python
def stats(numbers):
    if not numbers:
        return None
    return sum(numbers) / len(numbers), min(numbers), max(numbers)

avg, mn, mx = stats([4, 7, 1, 9, 5])
print(f"avg={avg}, min={mn}, max={mx}")
```

## 关键要点

- 函数封装逻辑。
- 默认参数、关键字参数、多返回。
- 可变参数可在函数内改。

➡️ 下一节：[1.4 文件处理](./file-handling)
