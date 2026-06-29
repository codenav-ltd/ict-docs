# 2.1 · 伪代码

> **目标：** 用 HKEAA 规范读写伪代码。

## 伪代码是什么

**伪代码**是非正式、类英语的算法描述。它**语言无关** —— 之后可用 Python、C++、Pascal 等任意语言实现。

## HKEAA 风格规范

| 规范 | 例子 |
|------------|---------|
| 赋值用 `←` 不用 `=` | `total ← 0` |
| 比较用 `=`（不用 `==`） | `IF age = 17 THEN` |
| 关键字全大写 | `IF, THEN, ELSE, FOR, WHILE, END FOR, END IF` |
| 缩进表示块结构 | （无花括号、无冒号） |
| 注释以 `//` 起 | `// initialise counter` |

## 一个完整例子

```text
// 计算 1+2+…+n
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

## 常用关键字

| 关键字 | 用途 |
|---------|-----|
| `INPUT x` | 读入值到变量 x |
| `OUTPUT x` | 显示 x |
| `IF cond THEN … ELSE IF … ELSE … END IF` | 选择 |
| `FOR x ← a TO b STEP s … END FOR` | 计数循环 |
| `WHILE cond … END WHILE` | 条件循环 |
| `REPEAT … UNTIL cond` | 后测循环 |
| `CASE … END CASE` | 多路选择 |
| `BEGIN / END` | 块标记（某些教材） |

## 读 vs 写

HKEAA 可能：

1. **给**伪代码让你算输出 / 作追踪表。
2. **让你为**给定问题写伪代码。
3. **让你转**伪代码为 Python。

三种都要遵守上述规范。

## 实例 · 三数最大

```text
INPUT a, b, c
max ← a
IF b > max THEN max ← b END IF
IF c > max THEN max ← c END IF
OUTPUT max
```

## 翻成 Python（速查）

| 伪代码 | Python |
|------------|--------|
| `INPUT x` | `x = int(input())` |
| `OUTPUT x` | `print(x)` |
| `x ← 5` | `x = 5` |
| `IF a = b THEN` | `if a == b:` |
| `IF a >= b THEN … ELSE …` | `if a >= b: … else: …` |
| `FOR i ← 1 TO n` | `for i in range(1, n+1):` |
| `WHILE cond` | `while cond:` |

## 学生常见错误

- 伪代码里用 `=` 赋值（应用 `←`）。
- 混入 Python `==` 比较（应用单 `=`）。
- 忘 `END FOR` / `END IF`。
- 加入 `try/except` 等语言特定结构到伪代码。

## 考试式题目

> **题（5 分）：** 写伪代码读 10 个数并输出正数、负数、零各有多少个。

**参考答案：**

```text
positives ← 0
negatives ← 0
zeros     ← 0
FOR i ← 1 TO 10
    INPUT n
    IF n > 0 THEN
        positives ← positives + 1
    ELSE IF n < 0 THEN
        negatives ← negatives + 1
    ELSE
        zeros ← zeros + 1
    END IF
END FOR
OUTPUT positives, negatives, zeros
```

## 关键要点

- HKEAA 风格：大写关键字、`←` 赋值、`END FOR/IF`。
- 用它在编码前交流算法。

➡️ 下一节：[2.2 流程图](./flowcharts)
