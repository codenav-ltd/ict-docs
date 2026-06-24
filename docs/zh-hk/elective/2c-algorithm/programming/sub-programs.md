# 1.3 · Sub-programs & Parameter Passing

> **Goal:** define functions cleanly; understand value vs reference, local vs global.

## Defining a function

```python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))             # Hello, Alice!
print(greet("Bob", "Hi"))         # Hi, Bob!
print(greet(name="Carol"))        # keyword argument
```

## Parameters and arguments

- **Parameter** = name in the function definition.
- **Argument** = value passed at call time.

## Positional vs keyword

```python
def order(food, drink, size):
    print(food, drink, size)

order("burger", "cola", "large")          # positional
order(drink="tea", food="rice", size="M") # keyword
```

## Default values

```python
def power(base, exp=2):
    return base ** exp

power(5)        # 25
power(5, 3)     # 125
```

## Variable scope

| Scope | Where |
|-------|-------|
| **Local** | Inside a function |
| **Enclosing** | Inside an outer function (closures) |
| **Global** | Top of module |
| **Built-in** | Python's pre-defined names |

```python
total = 0          # global

def add(x):
    total = x      # local — does NOT change global
    return total

add(10)
print(total)       # still 0
```

Use `global` keyword to modify (rarely needed):

```python
def reset():
    global total
    total = 0
```

## Pass by value vs reference

In Python, everything is "pass by object reference":

- **Immutable types** (int, str, tuple): function cannot modify original.
- **Mutable types** (list, dict, set, custom objects): function can modify in place.

```python
def double_each(lst):
    for i in range(len(lst)):
        lst[i] *= 2

nums = [1, 2, 3]
double_each(nums)
print(nums)             # [2, 4, 6] — original changed
```

```python
def increment(n):
    n += 1
    return n

x = 5
y = increment(x)
print(x, y)             # 5 6  — original unchanged
```

## Return values

```python
def divmod_(a, b):
    return a // b, a % b      # returns a tuple

q, r = divmod_(17, 5)
print(q, r)                   # 3 2
```

## Good function design

- One responsibility.
- Short (≤ 30 lines).
- Meaningful name (verb-noun).
- Document with a docstring.

## Common student mistakes

- Modifying a global from inside a function by accident.
- Returning `print()` (which returns None).
- Mutating a list parameter unintentionally.

## Exam-style question

> **Q (5 marks):** Write a function `stats(numbers)` that returns the average, minimum and maximum of a list. Demonstrate calling it.

**Sample answer:**

```python
def stats(numbers):
    if not numbers:
        return None
    return sum(numbers) / len(numbers), min(numbers), max(numbers)

avg, mn, mx = stats([4, 7, 1, 9, 5])
print(f"avg={avg}, min={mn}, max={mx}")
```

## Key takeaways

- Functions encapsulate logic.
- Default parameters, keyword args, multiple returns.
- Mutable arguments can be modified inside the function.

➡️ Next: [1.4 File Handling](./file-handling)
