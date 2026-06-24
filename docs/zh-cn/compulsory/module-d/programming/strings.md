# 3.7 · Strings

> **Goal:** manipulate strings using slicing, methods and concatenation.

## Creating strings

```python
greeting = "Hello"
name = 'Alice'             # single or double quotes both fine
multi = """Line 1
Line 2"""
```

## Length and indexing

```python
s = "HKDSE"
print(len(s))      # 5
print(s[0])        # 'H'
print(s[-1])       # 'E'
print(s[1:4])      # 'KDS'   slicing exclusive on right
```

## Concatenation and repetition

```python
first = "Hello"
last  = "World"
combined = first + " " + last       # "Hello World"
echoed   = "abc" * 3                # "abcabcabc"
```

## Common string methods

| Method | Purpose | Example |
|--------|---------|---------|
| `s.lower()` | All lowercase | `"HKDSE".lower()` → `"hkdse"` |
| `s.upper()` | All uppercase | |
| `s.strip()` | Remove leading/trailing whitespace | `"  hi  ".strip()` → `"hi"` |
| `s.replace(a, b)` | Replace all `a` with `b` | `"aaa".replace("a","b")` → `"bbb"` |
| `s.split(sep)` | Split into list | `"a,b,c".split(",")` → `["a","b","c"]` |
| `sep.join(list)` | Join list with separator | `",".join(["a","b"])` → `"a,b"` |
| `s.startswith(p)` / `s.endswith(p)` | Boolean | |
| `s.find(sub)` | Index of first occurrence or -1 | |
| `s.count(sub)` | Count occurrences | |
| `s.isdigit()` / `s.isalpha()` | Boolean checks | |

## Iterating over a string

```python
for ch in "HKDSE":
    print(ch)
```

## String formatting

```python
name = "Alice"
score = 86
print(f"{name} scored {score}")        # f-string
print("{} scored {}".format(name, score))  # older .format
```

## Worked example · Count vowels

```python
def count_vowels(s):
    count = 0
    for ch in s.lower():
        if ch in "aeiou":
            count += 1
    return count

print(count_vowels("Hong Kong DSE ICT"))   # 5
```

## Worked example · Reverse a string

```python
s = "HKDSE"
reversed_s = s[::-1]   # 'ESDKH'
```

Or step by step:

```python
result = ""
for ch in s:
    result = ch + result
```

## Worked example · Validate password

```python
pw = input("Password: ")
ok = len(pw) >= 8 and any(c.isdigit() for c in pw) and any(c.isupper() for c in pw)
print("Strong" if ok else "Weak")
```

## Common student mistakes

- Strings are **immutable** — `s[0] = "Z"` raises an error. Build a new string instead.
- Forgetting that slicing is exclusive on the right (`s[1:4]` doesn't include index 4).
- Using `==` to compare strings instead of `is` (use `==`; `is` checks identity).

## Exam-style question

> **Q (5 marks):** Write a Python function `is_palindrome(s)` that returns True if `s` reads the same forwards and backwards (case-insensitive, ignoring spaces).

**Sample answer:**

```python
def is_palindrome(s):
    cleaned = s.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("Race car"))   # True
print(is_palindrome("Hello"))      # False
```

## Key takeaways

- Strings: index, slice, methods.
- Immutable — create new strings rather than modifying.
- Format strings (`f"…"`) for clean output.

➡️ Next: [3.8 Standard Algorithms](./standard-algorithms)
