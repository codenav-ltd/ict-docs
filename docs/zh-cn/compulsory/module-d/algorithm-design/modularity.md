# 2.6 · 模块化

> **目标：** 解释把程序拆成子程序为何必要。

## 模块化是什么

**模块化**指把程序设计为一组**独立、可复用的子程序（函数 / 过程）**，每个负责一个明确任务。

## 好处

| 好处 | 为何重要 |
|---------|----------------|
| **易读** | 函数小；读者一次专注一件事 |
| **易测** | 每个函数可单独单元测试 |
| **易调试** | `calc_grade` 的 bug 在 `calc_grade` 里修，不外溢 |
| **可复用** | 同一函数被多个程序使用 |
| **并行** | 不同开发者处理不同函数 |
| **可维护** | 改一个函数不破坏其他 |

## 实例 · 前后对比

### 之前（一体式）

```python
print("Welcome")
name = input("Name? ")
score = int(input("Score? "))
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"
print(f"{name} scored {score}, grade {grade}")
```

### 之后（模块化）

```python
def greet():
    print("Welcome")

def read_student():
    name = input("Name? ")
    score = int(input("Score? "))
    return name, score

def calc_grade(score):
    if score >= 80: return "A"
    if score >= 70: return "B"
    if score >= 60: return "C"
    return "F"

def report(name, score, grade):
    print(f"{name} scored {score}, grade {grade}")

# main
greet()
name, score = read_student()
report(name, score, calc_grade(score))
```

行为相同但更易扩展（如换不同评分规则只换 `calc_grade`）。

## 好函数设计规则

- **一职** —— 用动词命名（`calculate_grade`）。
- **输入作参数、输出作返回值。** 避隐藏副作用。
- **短** —— 理想 30 行以内。
- **尽可能纯** —— 同输入 → 同输出，无意外。
- **有文档** —— 一行 docstring 说意图。

## 学生常见错误

- 函数干太多（读输入、计算、保存、打印、发邮件…）。
- 大量用**全局变量**而非参数 —— 函数耦合。
- 在多个文件复制相同代码而不是提取函数。
- 「上帝对象」 —— 一个万事知道的巨型类。

## 考试式题目

> **题（4 分）：** 描述模块化设计的两个优势，以及不模块化写一个长程序的一个风险。

**参考答案：**

优势：

1. **可维护** —— bug 与改动局限于单个函数，降低破坏无关代码的机会。
2. **可复用** —— 设计良好的函数可跨不同程序复用，不必复制粘贴。

无模块化的风险：

- 单一一体程序难读、难测，任何小改可能在无关部分引入隐藏 bug，因为逻辑与状态纠缠。

## 关键要点

- 把大程序拆成小函数。
- 每个函数做**一件**事好。
- 模块化在测试、团队、维护上回报丰厚。

## 第 2 章总结

自测：能在不参考的情况下读 15 行伪代码并写出追踪表吗？能就去第 3 章。

➡️ 下一章：[3 · 程序开发 (Python)](../programming/)
