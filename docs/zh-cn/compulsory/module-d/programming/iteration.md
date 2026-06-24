# 3.5 · Iteration (for and while)

> **Goal:** use `for` to count, `while` to wait for a condition. Remember **nested loops are 2C material**.

## `for` — counting loops

```python
for i in range(5):
    print(i)           # 0, 1, 2, 3, 4
```

`range(start, stop, step)`:

| Call | Sequence |
|------|----------|
| `range(5)` | 0, 1, 2, 3, 4 |
| `range(1, 6)` | 1, 2, 3, 4, 5 |
| `range(0, 10, 2)` | 0, 2, 4, 6, 8 |
| `range(10, 0, -1)` | 10, 9, 8, …, 1 |

## Iterating over a list

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

You can also `enumerate` to get index + value:

```python
for i, fruit in enumerate(fruits):
    print(i, fruit)
```

## `while` — conditional loops

```python
count = 0
while count < 5:
    print(count)
    count += 1
```

Use `while` when you don't know in advance how many iterations are needed.

### Sentinel-controlled `while`

```python
total = 0
n = int(input("Number (0 to stop): "))
while n != 0:
    total += n
    n = int(input("Number (0 to stop): "))
print("Total:", total)
```

The user types `0` to stop. `0` is the **sentinel value**.

## `break` and `continue`

| Keyword | Effect |
|---------|--------|
| `break` | Exit the loop immediately |
| `continue` | Skip the rest of this iteration, go to the next |

```python
for i in range(10):
    if i == 5:
        break          # stop loop at 5
    print(i)           # 0 1 2 3 4

for i in range(10):
    if i % 2 == 0:
        continue       # skip even numbers
    print(i)           # 1 3 5 7 9
```

## Avoiding infinite loops

```python
# BAD — count never changes
count = 0
while count < 10:
    print(count)

# GOOD
count = 0
while count < 10:
    print(count)
    count += 1
```

## Worked example · Sum 1..n

```python
n = int(input("n? "))
total = 0
for i in range(1, n + 1):
    total += i
print("Sum:", total)
```

## Worked example · Guess the number

```python
import random
secret = random.randint(1, 100)
guess = -1
while guess != secret:
    guess = int(input("Guess: "))
    if guess < secret:
        print("Too low")
    elif guess > secret:
        print("Too high")
print("Correct!")
```

## Common student mistakes

- Off-by-one in `range`: `range(1, 10)` gives 1..9, not 1..10.
- Forgetting to update the loop variable in `while` → infinite loop.
- Writing nested loops in compulsory pseudocode (it's a 2C topic).

## Exam-style question

> **Q (5 marks):** Write a Python program that reads numbers until the user enters -1, then prints the average of the entered numbers (excluding -1). If no numbers are entered, print "no input".

**Sample answer:**

```python
total = 0
count = 0
while True:
    n = int(input("Number (-1 to stop): "))
    if n == -1:
        break
    total += n
    count += 1

if count == 0:
    print("no input")
else:
    print("Average:", total / count)
```

## Key takeaways

- `for` for counting; `while` for "until a condition".
- `range(start, stop, step)` is exclusive of `stop`.
- `break` exits; `continue` skips.
- Avoid nested loops in compulsory part.

➡️ Next: [3.6 Lists (1D Arrays)](./arrays-lists)
