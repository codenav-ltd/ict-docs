# 1.2 · 嵌套循环与 2D 列表

> **目标：** 处理嵌套迭代与二维数据。**回忆**：嵌套循环明确是 2C，**不是**必修。

## 为何嵌套循环

单循环不够时 —— 你需要在循环**里再**循环。

```python
for i in range(3):
    for j in range(3):
        print(i, j)
```

输出全部 9 个组合。

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

## 安全创建 2D 列表

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

# 转置
T = [[grid[r][c] for r in range(len(grid))] for c in range(len(grid[0]))]
```

## 实例 · 井字棋胜者检查

```python
def check_winner(board):
    lines = []
    lines.extend(board)                            # 行
    lines.extend(list(zip(*board)))                # 列（zip 转置）
    lines.append([board[i][i] for i in range(3)]) # 主对角线
    lines.append([board[i][2-i] for i in range(3)]) # 反对角线

    for line in lines:
        if line[0] != " " and line.count(line[0]) == 3:
            return line[0]
    return None
```

## 学生常见错误

- 初始化 2D 列表时共享内层列表。
- 混淆 `grid[row][col]` vs `grid[col][row]`。
- 嵌套 range 偏差 1。

## 考试式题目

> **题（5 分）：** 写 Python 函数 `print_table(n)` 印 1 到 n 的乘法表，排成方形网格。

**参考答案：**

```python
def print_table(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            print(f"{i*j:>4}", end="")
        print()

print_table(5)
```

输出：

```
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
```

## 关键要点

- 嵌套循环做组合。
- 2D 初始化用列表推导。

➡️ 下一节：[1.3 子程序与参数](./sub-programs)
