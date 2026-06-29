# 3.4 · 选择 (if / elif / else)

> **目标：** 用二元与多路选择做决定。

## 二元选择

```python
if score >= 50:
    print("Pass")
else:
    print("Fail")
```

## 多路选择

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

**重要**：Python 仅当前面条件为假才评估 `elif`。顺序重要！

## 布尔组合

```python
if age >= 18 and has_id:
    print("Eligible")

if temperature < 0 or temperature > 40:
    print("Extreme")

if not member:
    print("Please sign up")
```

## 缩进规则

Python 用**缩进**（惯例 4 空格）定义块。缩进错 → 语法错或逻辑错。

```python
if score >= 50:
    print("Pass")     # 属于 if
    print("Well done")
print("Goodbye")       # 总是运行（在 if 外）
```

## 嵌套 if（允许且常见）

```python
if logged_in:
    if user_type == "admin":
        print("Welcome, admin")
    else:
        print("Welcome, user")
else:
    print("Please log in")
```

复杂逻辑宁可用 `and`/`or` **组合条件**，少做深嵌套。

## 实例 · 一周分日类型

```python
day = input("Day? ").lower()

if day in ("sat", "sun"):
    print("Weekend")
elif day in ("mon", "tue", "wed", "thu", "fri"):
    print("Weekday")
else:
    print("Unknown day")
```

## 学生常见错误

- 混淆 `=`（赋值）与 `==`（比较）。
- `if` 条件后忘 `:`。
- 缩进未对齐（tab 与空格混用）。
- `if 0 < x < 10:` 在 Python（链式比较）能用，但在其他语言不寻常。

## 考试式题目

> **题（5 分）：** 写 Python 程序读一个整数并输出它是正、负还是零。校验输入是整数。

**参考答案：**

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

## 关键要点

- `if`、`elif`、`else` 需要 `:` 与缩进块。
- 用 `and`、`or`、`not` 组合条件。
- 条件重叠时 `elif` 顺序重要。

➡️ 下一节：[3.5 迭代](./iteration)
