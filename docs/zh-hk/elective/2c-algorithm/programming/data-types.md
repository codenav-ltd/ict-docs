# 1.1 · 超越模組 D 的資料類型

> **目標：** 認識結構化與用户自定義類型 —— 不僅是 integer / float / string。

## 模組 D 回顧

- 簡單：integer、real (float)、character、boolean。
- 結構化：string、1D 數組。

## 2C 新增

### 結構化資料類型

- **2D 數組**（矩陣、網格、棋盤）。
- **Records / structs** —— 分組欄位。
- **元組** —— 定長不可變組。
- **字典 / map** —— 鍵 → 值對。

### 用户自定義類型

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

## 何時用各

| 需要 | 類型 |
|------|------|
| 單值 | 簡單類型 |
| 固定位置值（極少變形狀） | 元組 |
| 命名欄位 | dataclass / dict |
| 多個同形狀記錄 | dataclass 列表 / dict 列表 |
| 2D 網格 | 列表的列表 |

## 實例 · 棋盤

```python
ROWS, COLS = 3, 3
board = [[" "] * COLS for _ in range(ROWS)]
board[0][0] = "X"
board[1][1] = "O"
for row in board:
    print(row)
```

## 學生常見錯誤

- 誤共享內層列表：`board = [[" "] * COLS] * ROWS` 讓所有行共享同一列表引用。
- 改元組（不能 —— 不可變）。
- 混淆列表與字典訪問（`d[0]` vs `d["key"]`）。

## 考試式題目

> **題（5 分）：** 為 Book 定義 Python `dataclass`，含 title (str)、author (str)、price (float)、year (int)。建兩個實例並只印 2020 年後出版的書。

**參考答案：**

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

## 關鍵要點

- 資料有結構就超越簡單類型。
- 優先用 dataclass / 類型化記錄，勝過鬆散 dict。

➡️ 下一節：[1.2 巢狀迴圈與 2D 列表](./nested-loops)