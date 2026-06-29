# 3.3 · 輸入與輸出

> **目標：** 正確讀用户輸入並列印有用輸出。

## 用 `print` 輸出

```python
print("Hello")
print("x =", 5)                    # Hello x = 5
print("Score:", 75, "Grade:", "A") # Score: 75 Grade: A
```

可選參數：

```python
print("a", "b", "c", sep=" - ")    # a - b - c
print("loading", end="...")        # 不換行
```

## 格式字符串

把值嵌進文本的整潔方式：

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")    # Alice scored 86
print(f"{score / 100:.2%}")        # 86.00%
print(f"Pi is approximately {3.14159:.2f}")  # Pi is approximately 3.14
```

`{}` 裏可放任意表達式。冒號語法控制格式（`.2f` = 2 位小數、`%` = 百分比）。

## 用 `input` 讀入

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

⚠️ **`input` 永遠返回字符串。** 要數字就 `int()` 或 `float()` 轉換。

```python
age = int(input("Age? "))
height = float(input("Height in m? "))
```

## 校驗數字輸入

```python
raw = input("Age? ")
if raw.isdigit():
    age = int(raw)
    print(f"You are {age}.")
else:
    print("That's not a valid age.")
```

或用 `try` / `except` 處理浮點：

```python
try:
    height = float(input("Height (m)? "))
    print(height * height)
except ValueError:
    print("Invalid number.")
```

## 文件 I/O（先看一眼）

模組 D 非正式提到；**文件處理明確屬選修 2C**。嚐嚐：

```python
with open("scores.txt", "r") as f:
    for line in f:
        print(line.strip())
```

## 實例 · 簡單計算器

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

## 學生常見錯誤

- 忘了 `input()` 返回字符串。
- 把 `input()` 與數字比較：`if input("?") == 5:` 永遠 False（字符串 vs 整數）。
- 不處理 `int()` / `float()` 拋的 `ValueError`。

## 考試式題目

> **題（4 分）：** 寫 Python 程式讀用户輸入攝氏温度，輸出對應華氏（公式：`F = C × 9/5 + 32`），保留 1 位小數。

**參考答案：**

```python
c = float(input("Temperature in °C? "))
f = c * 9 / 5 + 32
print(f"{c}°C is {f:.1f}°F")
```

## 關鍵要點

- `print` 輸出；`input` 讀字符串。
- 格式字符串 (`f"…"`) 讓輸出整潔。
- 把字符串輸入按需轉數字。

➡️ 下一節：[3.4 選擇](./selection)