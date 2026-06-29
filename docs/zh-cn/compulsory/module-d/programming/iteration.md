# 3.5 · 迭代 (for 与 while)

> **目标：** 用 `for` 计数、用 `while` 等条件。记住**嵌套循环是 2C 内容**。

## `for` —— 计数循环

```python
for i in range(5):
    print(i)           # 0, 1, 2, 3, 4
```

`range(start, stop, step)`：

| 调用 | 序列 |
|------|----------|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 6)` | 1, 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(10, 0, -1)` | 10, 9, 8, …, 1 |

## 遍历列表

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

`enumerate` 同时取索引 + 值：

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

## `while` —— 条件循环

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

事先不知道要循环几次时用 `while`。

### 哨兵控制 `while`

```python
total = 0
n = int(input("Number (0 to stop): "))
while n != 0:
    total += n
    n = int(input("Number (0 to stop): "))
print("Total:", total)
```

用户输 `0` 停。`0` 是**哨兵值**。

## `break` 与 `continue`

| 关键字 | 效果 |
|---------|--------|
| `break` | 立刻退出循环 |
| `continue` | 跳过本轮余下，去下轮 |

```python
for i in range(10):
    if i == 5:
        break          # 5 时停
    print(i)           # 0 1 2 3 4

for i in range(10):
    if i % 2 == 0:
        continue       # 跳偶数
    print(i)           # 1 3 5 7 9
```

## 避免死循环

```python
# 坏 —— count 永不变
count = 0
while count < 10:
    print(count)

# 好
count = 0
while count < 10:
    print(count)
    count += 1
```

## 实例 · 1..n 求和

```python
n = int(input("n? "))
total = 0
for i in range(1, n + 1):
    total += i
print("Sum:", total)
```

## 实例 · 猜数字

```python
import random
secret = random.randint(1, 100)
guess = -1
while guess != secret:
    guess = int(input("Guess: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
print("Correct!")
```

## 学生常见错误

- `range` 偏差 1：`range(1, 10)` 给 1..9，不是 1..10。
- `while` 忘更新控制变量 → 死循环。
- 必修伪代码写嵌套循环（属 2C）。

## 考试式题目

> **题（5 分）：** 写 Python 程序读数字直到用户输入 -1，然后输出所输入数字的平均（不计 -1）。若无输入，输出「no input」。

**参考答案：**

```python
total = 0
count = 0
while True:
    n = int(input("Number (-1 to stop): "))
    if n == -1:
        break
    total += n
    count += 1

if count == 0:
    print("no input")
else:
    print("Average:", total / count)
```

## 关键要点

- `for` 计数；`while` 「直到条件」。
- `range(start, stop, step)` 不含 `stop`。
- `break` 退出；`continue` 跳过。
- 必修部分避免嵌套循环。

➡️ 下一节：[3.6 列表（一维数组）](./arrays-lists)
