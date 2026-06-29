# 2.3 · 数据类型与结构

> **目标：** 为每个变量挑对数据类型并识别模块 D 用到的简单数据结构。

## 简单数据类型

| 类型 | 储存 | Python 对应 |
|------|--------|-------------------|
| **Integer 整数** | 整数 | `int` |
| **Real / Float 实数 / 浮点** | 小数 | `float` |
| **Character 字符** | 单字符 | 长度 1 的 `str` |
| **Boolean 布尔** | True / False | `bool` |

### 选对类型

- 不需要小数用 **integer**（年龄、计数）。快且精确。
- 测量值用 **float**（身高、体重、金钱 —— 真实系统中金钱用定点更稳）。
- 是 / 否、开 / 关、找到 / 没找到用 **boolean**。
- 字符少用；现实更常用 **string**。

## 简单数据结构

课程把必修数据结构限于：

- **String 字符串** —— 字符序列
- **1D array 一维数组** —— 固定大小有序集合

（2D 数组、栈、队列、链表是**选修 2C** 内容。）

### 字符串基础

```text
name ← "HKDSE"
length ← LENGTH(name)        // 5
first  ← name[1]             // 'H'（伪代码风格 1 索引）
rest   ← SUBSTRING(name, 2, 5) // 'KDSE'
```

Python：

```python
name = "HKDSE"
print(len(name))     # 5
print(name[0])       # 'H'   (Python 是 0 索引)
print(name[1:5])     # 'KDSE'
```

> **索引惯例**：HKEAA 文档中的伪代码常 1 索引；Python 0 索引。转换时小心。

### 1D 数组基础

```text
DECLARE marks[1..10]
marks[1] ← 65
marks[2] ← 90
total ← 0
FOR i ← 1 TO 10
    total ← total + marks[i]
END FOR
average ← total / 10
```

Python（用列表）：

```python
marks = [65, 90, 78, 85, 92, 60, 73, 88, 95, 80]
average = sum(marks) / len(marks)
```

## 布尔逻辑与真值表

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

可能要你为复合条件填或套真值表。

### 例 · 折扣资格

> 「会员如果年龄超过 60 或消费超过 \$1,000 可享折扣。」

```text
discount ← (age > 60) OR (spent > 1000)
```

age = 65、spent = 500 → True（前半为真）。
age = 30、spent = 2000 → True（后半为真）。
age = 25、spent = 100 → False。

## 学生常见错误

- 把电话号码存为**整数** —— 丢首零；用**字符串**。
- 混淆**整数除法**与**实数除法**。Python 里 `5/2 = 2.5`、`5//2 = 2`。
- 伪代码与 Python 互转时 off-by-one。

## 考试式题目

> **题（4 分）：** 为下列变量挑最合适的数据类型并说明理由：
> (a) student_id、(b) bmi、(c) is_member、(d) student_name。

**参考答案：**

- (a) **String** —— ID 可能有首零或字母；从不需数字运算。
- (b) **Real / Float** —— BMI 是小数。
- (c) **Boolean** —— 只两态：会员或否。
- (d) **String** —— 长度可变的字符序列。

## 关键要点

- 四种简单类型：integer、real、character、boolean。
- 必修数据结构：string 与 1D array。
- 选符合数据本质的类型（不算数 → 不用数字）。

➡️ 下一节：[2.4 控制结构](./control-structures)
