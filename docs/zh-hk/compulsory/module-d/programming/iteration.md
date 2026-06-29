# 3.5 · 迭代 (for 與 while)

> **目標：** 用 `for` 計數、用 `while` 等條件。記住**巢狀迴圈是 2C 內容**。

## `for` —— 計數迴圈

```python
for i in range(5):
    print(i)           # 0, 1, 2, 3, 4
```

`range(start, stop, step)`：

| 調用 | 序列 |
|------|----------|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 6)` | 1, 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(10, 0, -1)` | 10, 9, 8, …, 1 |

## 遍歷列表

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

`enumerate` 同時取索引 + 值：

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

## `while` —— 條件迴圈

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

事先不知道要迴圈幾次時用 `while`。

### 哨兵控制 `while`

```python
total = 0
n = int(input("Number (0 to stop): "))
while n != 0:
    total += n
    n = int(input("Number (0 to stop): "))
print("Total:", total)
```

用户輸 `0` 停。`0` 是**哨兵值**。

## `break` 與 `continue`

| 關鍵字 | 效果 |
|---------|--------|
| `break` | 立刻退出迴圈 |
| `continue` | 跳過本輪餘下，去下輪 |

```python
for i in range(10):
    if i == 5:
        break          # 5 時停
    print(i)           # 0 1 2 3 4

for i in range(10):
    if i % 2 == 0:
        continue       # 跳偶數
    print(i)           # 1 3 5 7 9
```

## 避免死迴圈

```python
# 壞 —— count 永不變
count = 0
while count < 10:
    print(count)

# 好
count = 0
while count < 10:
    print(count)
    count += 1
```

## 實例 · 1..n 求和

```python
n = int(input("n? "))
total = 0
for i in range(1, n + 1):
    total += i
print("Sum:", total)
```

## 實例 · 猜數字

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

## 學生常見錯誤

- `range` 偏差 1：`range(1, 10)` 給 1..9，不是 1..10。
- `while` 忘更新控制變數 → 死迴圈。
- 必修偽程式碼寫巢狀迴圈（屬 2C）。

## 考試式題目

> **題（5 分）：** 寫 Python 程式讀數字直到用户輸入 -1，然後輸出所輸入數字的平均（不計 -1）。若無輸入，輸出「no input」。

**參考答案：**

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

## 關鍵要點

- `for` 計數；`while` 「直到條件」。
- `range(start, stop, step)` 不含 `stop`。
- `break` 退出；`continue` 跳過。
- 必修部分避免巢狀迴圈。

➡️ 下一節：[3.6 列表（一維數組）](./arrays-lists)