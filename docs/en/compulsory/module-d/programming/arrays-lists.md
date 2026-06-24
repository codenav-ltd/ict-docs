# 3.6 · Lists (1D Arrays)

> **Goal:** create, read, update, search and process Python lists. (Lists are Python's 1D arrays.)

## Creating a list

```python
empty = []
fruits = ["apple", "banana", "cherry"]
zeros = [0] * 10        # ten zeros
counts = list(range(1, 6))  # [1, 2, 3, 4, 5]
```

## Indexing (zero-based!)

```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])    # apple
print(fruits[2])    # cherry
print(fruits[-1])   # cherry (last)
```

## Slicing

```python
nums = [10, 20, 30, 40, 50]
print(nums[1:4])    # [20, 30, 40]
print(nums[:2])     # [10, 20]
print(nums[2:])     # [30, 40, 50]
print(nums[::-1])   # [50, 40, 30, 20, 10]  (reverse)
```

## Updating

```python
fruits[1] = "blueberry"
fruits.append("date")
fruits.insert(0, "apricot")
fruits.remove("apple")
last = fruits.pop()
```

## Length & membership

```python
print(len(fruits))           # 4
print("banana" in fruits)    # True or False
```

## Iterating

```python
for f in fruits:
    print(f)

for i, f in enumerate(fruits):
    print(i, f)
```

## Common operations

| Need | Code |
|------|------|
| Sum | `sum(nums)` |
| Min / max | `min(nums)`, `max(nums)` |
| Count occurrences | `nums.count(5)` |
| Sort (in place) | `nums.sort()` |
| Sorted copy | `sorted(nums)` |
| Reverse (in place) | `nums.reverse()` |

## Worked example · Class average

```python
marks = [78, 65, 90, 55, 82, 73]
print("Average:", sum(marks) / len(marks))
print("Top:", max(marks))
print("Pass count:", sum(1 for m in marks if m >= 50))
```

## Worked example · Read 5 marks then print stats

```python
marks = []
for _ in range(5):
    marks.append(int(input("Mark: ")))

print("Min:", min(marks))
print("Max:", max(marks))
print("Avg:", sum(marks) / len(marks))
```

## List vs array (in other languages)

In Pascal/C++ you usually declare an array with a fixed size and one type:

```text
DECLARE marks[1..30] OF INTEGER
```

Python's `list` is more flexible: dynamic size, can hold mixed types. For HKDSE syllabus purposes, treat `list` as the Python equivalent of a 1D array.

## Common student mistakes

- Index out of range: `fruits[5]` when the list has 3 items.
- Forgetting Python is 0-indexed when translating from pseudocode (1-indexed).
- Confusing `nums.sort()` (in place, returns `None`) with `sorted(nums)` (returns new list).
- Modifying a list while iterating over it.

## Exam-style question

> **Q (5 marks):** Write a Python program that reads 10 numbers into a list, then prints the maximum, minimum, and the index of the maximum.

**Sample answer:**

```python
nums = [int(input(f"Number {i+1}: ")) for i in range(10)]
mx = max(nums)
mn = min(nums)
idx = nums.index(mx)
print(f"Max = {mx} at index {idx}")
print(f"Min = {mn}")
```

## Key takeaways

- Python `list` = the 1D array of HKDSE.
- 0-indexed, mutable, dynamic size.
- Standard tools: `len, sum, min, max, sort, sorted, in, count`.

➡️ Next: [3.7 Strings](./strings)
