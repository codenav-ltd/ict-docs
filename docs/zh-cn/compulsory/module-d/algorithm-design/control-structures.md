# 2.4 · 控制结构

> **目标：** 掌握顺序、选择（二元 / 多路）和迭代。**嵌套循环不在必修**。

## 三种结构

| 结构 | 说明 |
|-----------|-------------|
| **Sequence 顺序** | 语句从上往下执行 |
| **Selection 选择** | 在备选间选（二元 / 多路） |
| **Iteration 迭代** | 满足 while/until 条件时重复 |

## 顺序

```text
INPUT a
INPUT b
sum ← a + b
OUTPUT sum
```

不花哨 —— 直线执行。

## 选择 · 二元 (IF / THEN / ELSE)

```text
IF mark >= 50 THEN
    OUTPUT "Pass"
ELSE
    OUTPUT "Fail"
END IF
```

## 选择 · 多路 (IF / ELSE IF / ELSE)

```text
IF mark >= 80 THEN
    OUTPUT "A"
ELSE IF mark >= 70 THEN
    OUTPUT "B"
ELSE IF mark >= 60 THEN
    OUTPUT "C"
ELSE
    OUTPUT "F"
END IF
```

或用 CASE（教材若用）：

```text
CASE mark OF
    80..100 : OUTPUT "A"
    70..79  : OUTPUT "B"
    60..69  : OUTPUT "C"
    OTHERWISE: OUTPUT "F"
END CASE
```

## 迭代 · FOR（计数循环）

```text
sum ← 0
FOR i ← 1 TO 10
    sum ← sum + i
END FOR
OUTPUT sum     // 55
```

## 迭代 · WHILE（前测循环）

```text
i ← 1
sum ← 0
WHILE i <= 10
    sum ← sum + i
    i ← i + 1
END WHILE
OUTPUT sum
```

## 迭代 · REPEAT … UNTIL（后测循环）

源自 Pascal 教材。至少执行一次。

```text
i ← 1
sum ← 0
REPEAT
    sum ← sum + i
    i ← i + 1
UNTIL i > 10
OUTPUT sum
```

## ⚠️ 嵌套循环不在必修

课程指引明言：

> 「顺序、选择和迭代（**不要求嵌套循环**）构造来创建程序。」

**嵌套循环**属**选修 2C**。模块 D 只要单层循环。

## 组合结构

多数真实算法三者并用。例：数 N 人班通过的学生：

```text
INPUT n
pass_count ← 0
FOR i ← 1 TO n
    INPUT mark
    IF mark >= 50 THEN
        pass_count ← pass_count + 1
    END IF
END FOR
OUTPUT pass_count
```

## 学生常见错误

- 忘 `END IF` / `END FOR` / `END WHILE`。
- 用 `IF a = b` 做赋值（赋值用 `←`）。
- 必修伪代码写嵌套循环（这是 2C 专用）。
- 死循环 —— 忘更新循环控制变量。

## 考试式题目

> **题（5 分）：** 写伪代码读 20 个数并输出大于 10 的个数。

**参考答案：**

```text
count ← 0
FOR i ← 1 TO 20
    INPUT n
    IF n > 10 THEN
        count ← count + 1
    END IF
END FOR
OUTPUT count
```

## 关键要点

- 三种结构：顺序、选择、迭代。
- 选择：二元与多路。
- 迭代：FOR（计数）、WHILE（前测）、REPEAT-UNTIL（后测）。
- 必修**无嵌套循环**。

➡️ 下一节：[2.5 追踪表](./trace-tables)
