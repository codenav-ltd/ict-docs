# 2.5 · 追踪表

> **目标：** 制追踪表，每一步后显示每个变量的值。

## 追踪表是什么

逐步记录算法执行时每个变量的**状态**的表。用于：

- **预测**代码输出。
- **找**逻辑 bug。
- 在考试答案中**展示**理解。

## 例 · 1 到 5 求和

```text
sum ← 0
FOR i ← 1 TO 5
    sum ← sum + i
END FOR
OUTPUT sum
```

追踪表：

| 步骤 | i | sum | 输出 |
|------|---|-----|--------|
| start | — | 0 | — |
| iter 1 | 1 | 1 | — |
| iter 2 | 2 | 3 | — |
| iter 3 | 3 | 6 | — |
| iter 4 | 4 | 10 | — |
| iter 5 | 5 | 15 | — |
| end | — | 15 | 15 |

提示：所有变量横向列出；每轮迭代**值更新一次**。

## WHILE 循环的追踪表

```text
n ← 16
count ← 0
WHILE n > 1
    n ← n / 2
    count ← count + 1
END WHILE
```

| 步骤 | n | count |
|------|---|-------|
| start | 16 | 0 |
| iter 1 | 8 | 1 |
| iter 2 | 4 | 2 |
| iter 3 | 2 | 3 |
| iter 4 | 1 | 4 |

`n = 1` 时条件假，循环结束。输出 `count = 4`。

## 选择 + 循环 的追踪表

```text
total ← 0
count ← 0
FOR i ← 1 TO 4
    INPUT x
    IF x > 0 THEN
        total ← total + x
        count ← count + 1
    END IF
END FOR
IF count > 0 THEN
    OUTPUT total / count
ELSE
    OUTPUT "no positive numbers"
END IF
```

设输入：5、-3、7、0。

| 步骤 | i | x | 条件 | total | count |
|------|---|---|-----------|-------|-------|
| 1 | 1 | 5 | true | 5 | 1 |
| 2 | 2 | -3 | false | 5 | 1 |
| 3 | 3 | 7 | true | 12 | 2 |
| 4 | 4 | 0 | false | 12 | 2 |

输出：12 / 2 = 6。

## 学生常见错误

- 忘**start** 行（初始值）。
- 表中跳过一轮迭代（每轮都要写）。
- 只写最终值 —— 那不是追踪。
- 不同行的列顺序不一致。

## 考试式题目

> **题（5 分）：** 对下列伪代码做追踪表，输入 9：
>
> ```text
> n ← INPUT
> r ← 0
> WHILE n > 0
>     r ← r * 10 + n MOD 10
>     n ← n DIV 10
> END WHILE
> OUTPUT r
> ```

**参考追踪（输入 9，输出倒序数字 —— 但 9 单数字）：**

| 步骤 | n | r |
|------|---|---|
| start | 9 | 0 |
| iter 1 | 0 | 9（= 0*10 + 9） |

输出 `9`。（多位数字如 1234 会输出 4321。）

## 关键要点

- 调试与考试答案都**必须**用追踪表。
- 每个变量、每轮都要写。
- 用简单与边缘情况输入测。

➡️ 下一节：[2.6 模块化](./modularity)
