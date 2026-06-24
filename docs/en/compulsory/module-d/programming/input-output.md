# 3.3 · Input & Output

> **Goal:** read user input correctly and print useful output.

## Output with `print`

```python
print("Hello")
print("x =", 5)                    # Hello x = 5
print("Score:", 75, "Grade:", "A") # Score: 75 Grade: A
```

Optional arguments:

```python
print("a", "b", "c", sep=" - ")    # a - b - c
print("loading", end="...")        # no newline
```

## Format strings

The clean way to embed values:

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")    # Alice scored 86
print(f"{score / 100:.2%}")        # 86.00%
print(f"Pi is approximately {3.14159:.2f}")  # Pi is approximately 3.14
```

Inside `{}` you can put any expression. The colon syntax controls formatting (`.2f` = 2 decimal places, `%` = percentage).

## Input with `input`

```python
name = input("What is your name? ")
print(f"Hello, {name}!")
```

⚠️ **`input` always returns a string.** Convert with `int()` or `float()` if you need a number.

```python
age = int(input("Age? "))
height = float(input("Height in m? "))
```

## Validating numeric input

```python
raw = input("Age? ")
if raw.isdigit():
    age = int(raw)
    print(f"You are {age}.")
else:
    print("That's not a valid age.")
```

Or with `try` / `except` for floats:

```python
try:
    height = float(input("Height (m)? "))
    print(height * height)
except ValueError:
    print("Invalid number.")
```

## File input / output (optional preview)

In Module D this is informally introduced; **file handling is explicitly Elective 2C** material. Quick taste:

```python
with open("scores.txt", "r") as f:
    for line in f:
        print(line.strip())
```

## Worked example · Simple calculator

```python
a = float(input("First number? "))
op = input("Operator (+ - * /)? ")
b = float(input("Second number? "))

if op == "+":
    print(a + b)
elif op == "-":
    print(a - b)
elif op == "*":
    print(a * b)
elif op == "/":
    if b == 0:
        print("Division by zero!")
    else:
        print(a / b)
else:
    print("Unknown operator")
```

## Common student mistakes

- Forgetting that `input()` returns a string.
- Comparing `input()` to a number: `if input("?") == 5:` is always False (string vs int).
- Not handling `ValueError` from `int()` / `float()`.

## Exam-style question

> **Q (4 marks):** Write a Python program that asks the user to enter the temperature in Celsius and outputs the equivalent in Fahrenheit (formula: `F = C × 9/5 + 32`), formatted to 1 decimal place.

**Sample answer:**

```python
c = float(input("Temperature in °C? "))
f = c * 9 / 5 + 32
print(f"{c}°C is {f:.1f}°F")
```

## Key takeaways

- `print` outputs; `input` reads strings.
- Format strings (`f"…"`) make output readable.
- Convert string input to numbers as needed.

➡️ Next: [3.4 Selection](./selection)
