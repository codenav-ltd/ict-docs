# 3.4 · Selection (if / elif / else)

> **Goal:** make decisions with binary and multi-way selection.

## Binary selection

```python
if score >= 50:
    print("Pass")
else:
    print("Fail")
```

## Multi-way selection

```python
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"
print(grade)
```

**Important**: Python evaluates `elif` only when previous conditions are false. The order matters!

## Boolean combinations

```python
if age >= 18 and has_id:
    print("Eligible")

if temperature < 0 or temperature > 40:
    print("Extreme")

if not member:
    print("Please sign up")
```

## Indentation rules

Python uses **indentation** (4 spaces conventionally) to define blocks. Wrong indentation → syntax error or logic error.

```python
if score >= 50:
    print("Pass")     # part of the if
    print("Well done")
print("Goodbye")       # always runs (outside if)
```

## Nested if (allowed and common)

```python
if logged_in:
    if user_type == "admin":
        print("Welcome, admin")
    else:
        print("Welcome, user")
else:
    print("Please log in")
```

For complex logic, prefer **combining conditions** with `and`/`or` rather than deep nesting.

## Worked example · Day-of-week classification

```python
day = input("Day? ").lower()

if day in ("sat", "sun"):
    print("Weekend")
elif day in ("mon", "tue", "wed", "thu", "fri"):
    print("Weekday")
else:
    print("Unknown day")
```

## Common student mistakes

- Confusing `=` (assignment) and `==` (comparison).
- Forgetting the `:` after the `if` condition.
- Misaligning indentation (mixing tabs and spaces).
- Writing `if 0 < x < 10:` works in Python (chained comparison) but is unusual in other languages.

## Exam-style question

> **Q (5 marks):** Write a Python program that reads an integer and prints whether it is positive, negative, or zero. Validate the input is an integer.

**Sample answer:**

```python
raw = input("Enter an integer: ")
try:
    n = int(raw)
    if n > 0:
        print("Positive")
    elif n < 0:
        print("Negative")
    else:
        print("Zero")
except ValueError:
    print("Not a valid integer")
```

## Key takeaways

- `if`, `elif`, `else` with mandatory `:` and indented blocks.
- Use `and`, `or`, `not` to combine conditions.
- Order of `elif` matters when conditions overlap.

➡️ Next: [3.5 Iteration](./iteration)
