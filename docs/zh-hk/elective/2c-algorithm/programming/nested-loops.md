# 1.2 · Nested Loops & 2D Lists

> **Goal:** handle nested iteration and two-dimensional data. **Recall**: nested loops are explicitly 2C, **not** compulsory.

## Why nested loops

When a single loop isn't enough — you need a loop **inside** another loop.

```python
for i in range(3):
    for j in range(3):
        print(i, j)
```

Outputs all 9 combinations.

## 2D lists in Python

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

## Creating a 2D list safely

```python
ROWS, COLS = 5, 4
matrix = [[0] * COLS for _ in range(ROWS)]
```

⚠️ **Don't** do `matrix = [[0] * COLS] * ROWS` — every row would share the same list reference!

## Common operations

```python
# Sum all elements
total = 0
for row in grid:
    for v in row:
        total += v

# Find max
biggest = grid[0][0]
for row in grid:
    for v in row:
        if v > biggest:
            biggest = v

# Transpose
T = [[grid[r][c] for r in range(len(grid))] for c in range(len(grid[0]))]
```

## Worked example · Tic-tac-toe winner check

```python
def check_winner(board):
    lines = []
    lines.extend(board)                            # rows
    lines.extend(list(zip(*board)))                # columns (zip transposes)
    lines.append([board[i][i] for i in range(3)]) # main diagonal
    lines.append([board[i][2-i] for i in range(3)]) # anti-diagonal

    for line in lines:
        if line[0] != " " and line.count(line[0]) == 3:
            return line[0]
    return None
```

## Common student mistakes

- Sharing inner lists when initialising a 2D list.
- Mixing up `grid[row][col]` vs `grid[col][row]`.
- Off-by-one in nested ranges.

## Exam-style question

> **Q (5 marks):** Write a Python function `print_table(n)` that prints the multiplication table for 1 to n, formatted as a square grid.

**Sample answer:**

```python
def print_table(n):
    for i in range(1, n + 1):
        for j in range(1, n + 1):
            print(f"{i*j:>4}", end="")
        print()

print_table(5)
```

Output:

```
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25
```

## Key takeaways

- Use nested loops for combinations.
- Use list comprehensions for 2D init.

➡️ Next: [1.3 Sub-programs & Parameters](./sub-programs)
