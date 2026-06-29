# 1.2 · 巢狀迴圈與 2D 列表

> **目標：** 處理嵌套迭代與二維資料。**回憶**：巢狀迴圈明確是 2C，**不是**必修。

## 為何巢狀迴圈

單迴圈不夠時 —— 你需要在迴圈**裏再**迴圈。

```python
for i in range(3):
    for j in range(3):
        print(i, j)
```

輸出全部 9 個組合。

## Python 中的 2D 列表

```python
grid = [[1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]]

print(grid[0][2])    # 3
print(grid[2][0])    # 7

for row in grid:
    for val in row:
        print(val, end=" ")
    print()
```

## 安全創建 2D 列表

```python
ROWS, COLS = 5, 4
matrix = [[0] * COLS for _ in range(ROWS)]
```

⚠️ **不要** `matrix = [[0] * COLS] * ROWS` —— 每行共享同一列表引用！

## 常用操作

```python
# 全元素求和
total = 0
for row in grid:
    for v in row:
        total += v

# 找最大
biggest = grid[0][0]
for row in grid:
    for v in row:
        if v > biggest:
            biggest = v

# 轉置
T = [[grid[r][c] for r in range(len(grid))] for c in range(len(grid[0]))]
```

## 實例 · 井字棋勝者檢查

```python
def check_winner(board):
    lines = []
    lines.extend(board)                            # 行
    lines.extend(list(zip(*board)))                # 列（zip 轉置）
    lines.append([board[i][i] for i in range(3)]) # 主對角線
    lines.append([board[i][2-i] for i in range(3)]) # 反對角線

    for line in lines:
        if line[0] != " " and line.count(line[0]) == 3:
            return line[0]
    return None
```

## 學生常見錯誤

- 初始化 2D 列表時共享內層列表。
- 混淆 `grid[row][col]` vs `grid[col][row]`。
- 嵌套 range 偏差 1。

## 考試式題目

> **題（5 分）：** 寫 Python 函式 `print_table(n)` 印 1 到 n 的乘法表，排成方形網格。

**參考答案：**

```python
def print_table(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            print(f"{i*j:>4}", end="")
        print()

print_table(5)
```

輸出：

```
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
```

## 關鍵要點

- 巢狀迴圈做組合。
- 2D 初始化用列表推導。

➡️ 下一節：[1.3 子程式與參數](./sub-programs)