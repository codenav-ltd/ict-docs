# 4.2 · 错误类型

> **目标：** 把任何程序错误归为语法、逻辑或运行时，并解释其症状。

## 三种类型

| 类型 | 何时被发现 | 症状 | 例子 |
|------|---------------|---------|---------|
| **Syntax 语法** | 编译 / 解释时 | 程序根本跑不起 | `print(x` 漏闭合 `)` |
| **Logic 逻辑** | 运行时给错答案 | 程序跑但结果错 | 用 `<` 应是 `<=` |
| **Run-time 运行时** | 执行中 | 程序中途崩 | 除以零、文件找不到、索引越界 |

## 语法错误

解释器（Python）在你修正文法前拒绝跑。

```python
# SyntaxError: '(' was never closed
print("hi"
```

```python
# IndentationError: unexpected indent
if x > 0:
        print(x)
    print(x)        # 缩进未对齐！
```

修法：读行号、找笔误。

## 逻辑错误

最阴险。程序跑出输出 —— 但输出错。

```python
# 想要：分数 >= 50 印「Pass」，否则「Fail」
if score > 50:           # BUG：应为 >=
    print("Pass")
else:
    print("Fail")
```

分数 = 50 → 错印「Fail」。

逻辑错误靠**测试**发现，Python 抓不到。

## 运行时错误（异常）

程序在跑，但意外条件令它崩。

| 错误 | 原因 |
|-------|-------|
| `ZeroDivisionError` | 除以 0 |
| `ValueError` | `int("abc")` |
| `IndexError` | 3 元素列表上 `lst[10]` |
| `KeyError` | 缺字典键 |
| `FileNotFoundError` | 打开不存在文件 |
| `TypeError` | `"5" + 3` |

用 `try` / `except` 处理：

```python
try:
    n = int(input("Number: "))
    print(100 / n)
except ZeroDivisionError:
    print("Can't divide by zero")
except ValueError:
    print("That's not a number")
```

## 把错误对应到发现手段

| 错误类型 | 最佳捕获 |
|------------|----------------|
| 语法 | 代码检查 / IDE 语法高亮 |
| 逻辑 | 单元测试 + 追踪表 + 人工检查 |
| 运行时 | 防御代码 (try/except)、好测试数据 |

## 学生常见错误

- 混淆语法错与逻辑错。
- 用过多 `try/except` 掩盖 bug 而非修复。
- 把 Python `print` 调试视为不体面 —— 它是十分有效的技术。

## 考试式题目

> **题（4 分）：** 识别每段代码的错误类型：
>
> (a) `print("Hello World"`
> (b) `total = 0; for i in range(1,11): total += i; print("Sum = ", total + 1)` *(偏差 1)*
> (c) `mark = int("87a")`
> (d) `result = 10 / 0`

**参考答案：**

(a) **语法** —— 括号未匹配。
(b) **逻辑** —— `+ 1` 不该有；导致总和错。
(c) **运行时** (`ValueError`) —— 字符串含非数字字符。
(d) **运行时** (`ZeroDivisionError`)。

## 关键要点

- 3 类：语法、逻辑、运行时。
- 语法：早期抓。逻辑：最难。运行时：优雅处理。

➡️ 下一节：[4.3 调试技巧](./debugging)
