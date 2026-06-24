# 3.8 · Standard Algorithms

> **Goal:** implement the algorithms the HKEAA lists by name in Module D.

The C&A Guide explicitly mentions these algorithms for the compulsory part:

- Find min / max / average in a list
- Search for an item (linear search)
- Find length of a string
- Extract required characters from a string
- Count items meeting a condition
- Check if values in a list are in order
- Use of mathematical formulas

## Min / Max / Average

```python
nums = [12, 4, 7, 19, 3]

mn = nums[0]
mx = nums[0]
total = 0
for n in nums:
    if n < mn: mn = n
    if n > mx: mx = n
    total += n
avg = total / len(nums)

print(mn, mx, avg)         # 3 19 9.0
```

You should be able to write this **without** built-in `min()` / `max()` / `sum()`.

## Linear search

```python
def linear_search(arr, target):
    for i, v in enumerate(arr):
        if v == target:
            return i              # found, return index
    return -1                     # not found

print(linear_search([3, 7, 1, 9, 5], 9))   # 3
print(linear_search([3, 7, 1, 9, 5], 4))   # -1
```

## Length of a string

```python
s = "HKDSE"
length = 0
for _ in s:
    length += 1
print(length)               # 5
```

(`len(s)` would do the same.)

## Extract characters from a string

```python
s = "Information"
# extract first 4 characters
print(s[:4])                # "Info"

# extract every 2nd character
print(s[::2])               # "Ifrain"
```

## Count items meeting a condition

```python
scores = [55, 62, 47, 80, 73]
pass_count = 0
for s in scores:
    if s >= 50:
        pass_count += 1
print(pass_count)           # 4
```

Or with a comprehension:

```python
pass_count = sum(1 for s in scores if s >= 50)
```

## Check if a list is sorted

```python
def is_sorted_ascending(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True

print(is_sorted_ascending([1, 3, 5, 7]))   # True
print(is_sorted_ascending([1, 4, 3, 8]))   # False
```

## Using a mathematical formula

```python
# Compound interest A = P(1+r)^n
P = float(input("Principal: "))
r = float(input("Annual rate (e.g. 0.05): "))
n = int(input("Years: "))
A = P * (1 + r) ** n
print(f"After {n} years: {A:.2f}")
```

## Boundary cases

The C&A Guide stresses identifying **boundary cases**. For each algorithm above, test:

- Empty list (`[]`)
- Single-item list (`[5]`)
- Already-sorted list / reverse-sorted list
- Items equal to threshold (50 exactly for pass)

## Common student mistakes

- Initialising `mn` and `mx` to 0 instead of `nums[0]` (fails on negative numbers).
- Iterating from index 0 when computing pairwise differences (`is_sorted` should start from 1).
- Off-by-one in slicing.

## Exam-style question

> **Q (6 marks):** Write Python code to read 10 marks into a list and output:
> (a) The highest mark,
> (b) The lowest mark,
> (c) The average,
> (d) How many marks are above the average.

**Sample answer:**

```python
marks = [int(input(f"Mark {i+1}: ")) for i in range(10)]
highest = max(marks)
lowest  = min(marks)
average = sum(marks) / len(marks)
above_avg = sum(1 for m in marks if m > average)
print(f"Highest: {highest}, Lowest: {lowest}")
print(f"Average: {average:.2f}")
print(f"Above average count: {above_avg}")
```

## Key takeaways

- Master the syllabus-named algorithms.
- Implement them **with and without** built-ins.
- Always test boundary cases.

## Chapter 3 wrap-up

Self-test: can you implement linear search and a min/max/avg report from scratch in 5 minutes? If yes, you have Module D's compulsory programming nailed.

➡️ Next chapter: [4 · Program Testing & Debugging](../testing/)
