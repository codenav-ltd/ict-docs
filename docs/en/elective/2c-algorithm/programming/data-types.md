# 1.1 · Data Types Beyond Module D

> **Goal:** know structured and user-defined types — not just integer / float / string.

## Recap from Module D

- Simple: integer, real (float), character, boolean.
- Structured: string, 1D array.

## New for 2C

### Structured data types

- **2D arrays** (matrices, grids, game boards).
- **Records / structs** — grouped fields.
- **Tuples** — fixed-length immutable groups.
- **Dictionaries / maps** — key→value pairs.

### User-defined types

Pythonic example:

```python
class Student:
    def __init__(self, sid, name, score):
        self.sid = sid
        self.name = name
        self.score = score

alice = Student(1001, "Alice", 86)
print(alice.name, alice.score)
```

Or with `dataclass` (Python 3.7+):

```python
from dataclasses import dataclass

@dataclass
class Student:
    sid: int
    name: str
    score: int
```

## When to use each

| Need | Type |
|------|------|
| Single value | simple type |
| Fixed-position values (rarely change shape) | tuple |
| Named fields | dataclass / dict |
| Many records of same shape | list of dataclasses / list of dicts |
| 2D grid | list of lists |

## Worked example · Game board

```python
ROWS, COLS = 3, 3
board = [[" "] * COLS for _ in range(ROWS)]
board[0][0] = "X"
board[1][1] = "O"
for row in board:
    print(row)
```

## Common student mistakes

- Sharing inner lists by mistake: `board = [[" "] * COLS] * ROWS` creates rows that all share the same list reference.
- Mutating a tuple (impossible — they're immutable).
- Mixing list and dict access (`d[0]` vs `d["key"]`).

## Exam-style question

> **Q (5 marks):** Define a Python `dataclass` for a Book with title (str), author (str), price (float), year (int). Create two instances and print only books published after 2020.

**Sample answer:**

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

## Key takeaways

- Move beyond simple types when the data has structure.
- Prefer dataclasses / typed records over loose dicts.

➡️ Next: [1.2 Nested Loops & 2D Lists](./nested-loops)
