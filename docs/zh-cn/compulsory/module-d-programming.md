# 模块 D · 计算思维与编程

> **建议课时：** 48 小时 · **最大的模块。** 伪代码与 Python 题每届卷一必考。

本模块讲系统化的问题解决流程：分解、算法设计、编程、测试。

::: tip 公开考试编程语言
- **2025–2027 DSE：** 可用 **Python、C++ 或 Pascal** 作答。
- **2028 DSE 起：** 仅 **Python 与 C++**。
- 本站示例全部用 Python（HKEAA 参考资料明确推荐、最普遍）。
:::

## 子话题速览

| # | 子话题 | 课时 |
|---|--------|------|
| a | 问题分析与制定 | 5 |
| b | 算法设计 | 12 |
| c | 程序开发 | 20 |
| d | 程序测试与调试 | 11 |

---

## a. 问题分析与制定（5h）

### IPO 分析示例

> 计算用户的 BMI，并指出体重等级。

```
输入   weight (kg), height (m)
处理   bmi = weight / (height * height)
       if bmi < 18.5    → "Underweight"
       elif bmi < 24    → "Normal"
       elif bmi < 28    → "Overweight"
       else             → "Obese"
输出   bmi（一位小数）, 类别
```

### 模式识别

把学生身高升序排序，和把体重降序排序，**模式相同** —— 只改比较方向。

---

## b. 算法设计（12h）

### 数据类型

| 类型 | 值 | 例子 |
|------|----|------|
| Integer | 整数 | `42, -7, 0` |
| Real（float） | 小数 | `3.14, -0.5` |
| Character | 单字符 | `'A', '?'` |
| Boolean | 真假 | `True, False` |

### 简单数据结构（必修）

- **字符串**
- **一维数组**（Python 的 list）

### 布尔逻辑真值表

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

### 控制结构

- **顺序**
- **选择**（`if / elif / else`）
- **迭代**（`for`、`while`）—— 必修部分**不要求嵌套循环**（在选修 2C）

### HKEAA 风格伪代码

```text
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

### 追踪表示例

> 算法：数字符串 `s` 中元音个数

```text
count ← 0
FOR each ch IN s
    IF ch IN ['a','e','i','o','u'] THEN
        count ← count + 1
    END IF
END FOR
```

对 `s = "ict"`：

| 步 | ch | 条件 | count |
|----|----|------|-------|
| 0 | — | — | 0 |
| 1 | 'i' | 真 | 1 |
| 2 | 'c' | 假 | 1 |
| 3 | 't' | 假 | 1 |

最终：1。

### 模块化

把大程序分成小**子程序（函数）**：可读性高、便于测试、可复用、易维护。

---

## c. 程序开发（20h）

### 运算符

| 类别 | 例子 |
|------|------|
| 算术 | `+ - * / % **` |
| 关系 | `== != > < >= <=` |
| 布尔 | `and or not` |

### 必备算法

#### 最小/最大/平均

```python
nums = [12, 4, 7, 19, 3]
mn = mx = nums[0]
total = 0
for n in nums:
    if n < mn: mn = n
    if n > mx: mx = n
    total += n
avg = total / len(nums)
```

#### 线性搜索

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1
```

#### 计数满足条件的项

```python
scores = [55, 62, 47, 80, 73]
count_pass = sum(1 for s in scores if s >= 50)
```

#### 字符串操作

```python
s = "HKDSE"
print(len(s))             # 5
print(s[0])               # 'H'
print(s[1:3])             # 'KD'
print('K' in s)           # True
```

#### 检查是否已排序

```python
def is_sorted(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True
```

---

## d. 程序测试与调试（11h）

### 测试数据分类

| 类别 | 例子 |
|------|------|
| **正常** | 范围内的典型输入（如年龄 = 17） |
| **边界** | 有效范围边缘（如年龄 = 0、150） |
| **错误** | 无效输入（如年龄 = -5、"abc"） |

> 边界值是 bug 最常见的来源。务必测试。

### 错误类型

| 类型 | 检出时机 | 例子 |
|------|---------|------|
| **语法** | 编译/解释 | `print(x` 漏 `)` |
| **逻辑** | 运行后输出错 | 用 `<` 当 `<=` |
| **运行时** | 运行中崩溃 | 除以零、文件不存在 |

### 调试技术

- 加 `print()` 打印变量值
- 用调试器设**断点**
- 纸上做**追踪表**
- 用样例数据**手算试运行**

---

## 常见错误

- 用 Python 语法写伪代码（应用 `←` 而非 `=`）。
- 忘记边界测试。
- 条件里用 `=` 而非 `==`。

## 历届考题热点

- MC：判断错误类型。
- Section B：写/补全基本算法的伪代码。
- Section B：给定伪代码产出追踪表。
- Section B：解释模块化并改写。

::: tip 每周练习
读代码不等于会写。SQL 用 **[SQL Books](https://sqlbooks.codenav.dev)** 练；Python 装本地或用任意在线沙盒。HKEAA 看的是逻辑正确，不是花哨。
:::

---

➡️ 下一篇：[模块 E · 社会影响](./module-e-social)
