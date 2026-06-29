# 3.3 · 输入与输出

> **目标：** 正确读用户输入并打印有用输出。

## 用 `print` 输出

```python
print("Hello")
print("x =", 5)                    # Hello x = 5
print("Score:", 75, "Grade:", "A") # Score: 75 Grade: A
```

可选参数：

```python
print("a", "b", "c", sep=" - ")    # a - b - c
print("loading", end="...")        # 不换行
```

## 格式字符串

把值嵌进文本的整洁方式：

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")    # Alice scored 86
print(f"{score / 100:.2%}")        # 86.00%
print(f"Pi is approximately {3.14159:.2f}")  # Pi is approximately 3.14
```

`{}` 里可放任意表达式。冒号语法控制格式（`.2f` = 2 位小数、`%` = 百分比）。

## 用 `input` 读入

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

⚠️ **`input` 永远返回字符串。** 要数字就 `int()` 或 `float()` 转换。

```python
age = int(input("Age? "))
height = float(input("Height in m? "))
```

## 校验数字输入

```python
raw = input("Age? ")
if raw.isdigit():
    age = int(raw)
    print(f"You are {age}.")
else:
    print("That's not a valid age.")
```

或用 `try` / `except` 处理浮点：

```python
try:
    height = float(input("Height (m)? "))
    print(height * height)
except ValueError:
    print("Invalid number.")
```

## 文件 I/O（先看一眼）

模块 D 非正式提到；**文件处理明确属选修 2C**。尝尝：

```python
with open("scores.txt", "r") as f:
    for line in f:
        print(line.strip())
```

## 实例 · 简单计算器

```python
a = float(input("First number? "))
op = input("Operator (+ - * /)? ")
b = float(input("Second number? "))

if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
elif op == "*":
    print(a * b)
elif op == "/":
    if b == 0:
        print("Division by zero!")
    else:
        print(a / b)
else:
    print("Unknown operator")
```

## 学生常见错误

- 忘了 `input()` 返回字符串。
- 把 `input()` 与数字比较：`if input("?") == 5:` 永远 False（字符串 vs 整数）。
- 不处理 `int()` / `float()` 抛的 `ValueError`。

## 考试式题目

> **题（4 分）：** 写 Python 程序读用户输入摄氏温度，输出对应华氏（公式：`F = C × 9/5 + 32`），保留 1 位小数。

**参考答案：**

```python
c = float(input("Temperature in °C? "))
f = c * 9 / 5 + 32
print(f"{c}°C is {f:.1f}°F")
```

## 关键要点

- `print` 输出；`input` 读字符串。
- 格式字符串 (`f"…"`) 让输出整洁。
- 把字符串输入按需转数字。

➡️ 下一节：[3.4 选择](./selection)
