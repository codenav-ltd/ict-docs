# 3.4 · 選擇 (if / elif / else)

> **目標：** 用二元與多路選擇做決定。

## 二元選擇

```python
if score >= 50:
    print("Pass")
else:
    print("Fail")
```

## 多路選擇

```python
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"
print(grade)
```

**重要**：Python 僅當前麪條件為假才評估 `elif`。順序重要！

## 布林組合

```python
if age >= 18 and has_id:
    print("Eligible")

if temperature < 0 or temperature > 40:
    print("Extreme")

if not member:
    print("Please sign up")
```

## 縮進規則

Python 用**縮進**（慣例 4 空格）定義塊。縮進錯 → 語法錯或邏輯錯。

```python
if score >= 50:
    print("Pass")     # 屬於 if
    print("Well done")
print("Goodbye")       # 總是執行（在 if 外）
```

## 嵌套 if（允許且常見）

```python
if logged_in:
    if user_type == "admin":
        print("Welcome, admin")
    else:
        print("Welcome, user")
else:
    print("Please log in")
```

複雜邏輯寧可用 `and`/`or` **組合條件**，少做深嵌套。

## 實例 · 一週分日類型

```python
day = input("Day? ").lower()

if day in ("sat", "sun"):
    print("Weekend")
elif day in ("mon", "tue", "wed", "thu", "fri"):
    print("Weekday")
else:
    print("Unknown day")
```

## 學生常見錯誤

- 混淆 `=`（賦值）與 `==`（比較）。
- `if` 條件後忘 `:`。
- 縮進未對齊（tab 與空格混用）。
- `if 0 < x < 10:` 在 Python（鏈式比較）能用，但在其他語言不尋常。

## 考試式題目

> **題（5 分）：** 寫 Python 程式讀一個整數並輸出它是正、負還是零。校驗輸入是整數。

**參考答案：**

```python
raw = input("Enter an integer: ")
try:
    n = int(raw)
    if n > 0:
        print("Positive")
    elif n < 0:
        print("Negative")
    else:
        print("Zero")
except ValueError:
    print("Not a valid integer")
```

## 關鍵要點

- `if`、`elif`、`else` 需要 `:` 與縮進塊。
- 用 `and`、`or`、`not` 組合條件。
- 條件重疊時 `elif` 順序重要。

➡️ 下一節：[3.5 迭代](./iteration)