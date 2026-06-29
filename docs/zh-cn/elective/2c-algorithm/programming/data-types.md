# 1.1 · 超越模块 D 的数据类型

> **目标：** 认识结构化与用户自定义类型 —— 不仅是 integer / float / string。

## 模块 D 回顾

- 简单：integer、real (float)、character、boolean。
- 结构化：string、1D 数组。

## 2C 新增

### 结构化数据类型

- **2D 数组**（矩阵、网格、棋盘）。
- **Records / structs** —— 分组字段。
- **元组** —— 定长不可变组。
- **字典 / map** —— 键 → 值对。

### 用户自定义类型

Python 例：

```python
class Student:
    def __init__(self, sid, name, score):
        self.sid = sid
        self.name = name
        self.score = score

alice = Student(1001, "Alice", 86)
print(alice.name, alice.score)
```

或用 `dataclass`（Python 3.7+）：

```python
from dataclasses import dataclass

@dataclass
class Student:
    sid: int
    name: str
    score: int
```

## 何时用各

| 需要 | 类型 |
|------|------|
| 单值 | 简单类型 |
| 固定位置值（极少变形状） | 元组 |
| 命名字段 | dataclass / dict |
| 多个同形状记录 | dataclass 列表 / dict 列表 |
| 2D 网格 | 列表的列表 |

## 实例 · 棋盘

```python
ROWS, COLS = 3, 3
board = [[" "] * COLS for _ in range(ROWS)]
board[0][0] = "X"
board[1][1] = "O"
for row in board:
    print(row)
```

## 学生常见错误

- 误共享内层列表：`board = [[" "] * COLS] * ROWS` 让所有行共享同一列表引用。
- 改元组（不能 —— 不可变）。
- 混淆列表与字典访问（`d[0]` vs `d["key"]`）。

## 考试式题目

> **题（5 分）：** 为 Book 定义 Python `dataclass`，含 title (str)、author (str)、price (float)、year (int)。建两个实例并只印 2020 年后出版的书。

**参考答案：**

```python
from dataclasses import dataclass

@dataclass
class Book:
    title: str
    author: str
    price: float
    year: int

books = [
    Book("HKDSE ICT Guide", "Lee", 99.0, 2024),
    Book("Vintage Algorithms", "Knuth", 120.0, 1973),
]

for b in books:
    if b.year > 2020:
        print(b.title)
```

## 关键要点

- 数据有结构就超越简单类型。
- 优先用 dataclass / 类型化记录，胜过松散 dict。

➡️ 下一节：[1.2 嵌套循环与 2D 列表](./nested-loops)
