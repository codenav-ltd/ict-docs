# Module D · Computational Thinking & Programming

> **Suggested time:** 48 hours · **The biggest module.** Pseudocode and Python questions appear in every Paper 1.

This module covers the systematic problem-solving process: decomposition, algorithm design, programming and testing.

::: tip Programming languages in the public exam
- **2025–2027 DSE:** candidates may write answers in **Python, C++ or Pascal**.
- **2028 DSE onwards:** only **Python and C++**.
- All examples on this site use Python because it is the most popular choice and the language explicitly recommended by HKEAA reference materials.
:::

## Topic breakdown

| # | Sub-topic | Hours |
|---|-----------|-------|
| a | Problem-Formulation & Analysis | 5 |
| b | Algorithm Design | 12 |
| c | Program Development | 20 |
| d | Program Testing & Debugging | 11 |

---

## a. Problem-Formulation & Analysis (5h)

### Learning outcomes

- Define a problem and its scope.
- Analyse a problem by identifying required **inputs, outputs and processes**.
- Solve a problem by **decomposing** it into smaller sub-problems.
- Identify common **patterns** across similar problems.

### Worked example · IPO analysis

> Problem: Calculate the Body Mass Index (BMI) of a user and tell them whether they are underweight, normal, overweight or obese.

```
INPUT      weight (kg), height (m)
PROCESS    bmi = weight / (height * height)
           if bmi < 18.5            → "Underweight"
           elif bmi < 24            → "Normal"
           elif bmi < 28            → "Overweight"
           else                     → "Obese"
OUTPUT     bmi (one decimal), category text
```

### Pattern recognition example

Sorting student heights ascending and weights descending uses the **same** sorting pattern with only the comparison direction reversed.

---

## b. Algorithm Design (12h)

### Learning outcomes

- Use **pseudocode** and **program flowcharts** to represent algorithms.
- Outline input/output requirements and design an appropriate user interface.
- Recognise the uses of simple **data types** and **data structures**.
- Design and construct standard algorithms using basic **control structures**.
- Create and examine algorithms such as loading and printing an array, adding/deleting an array item.
- Produce a **trace table** showing values of variables at each step.
- Locate and correct **logic errors**; **modify** an algorithm for changed specs.
- Describe the advantages of **modularity**.

### Data types

| Type | Values | Examples |
|------|--------|----------|
| Integer | Whole numbers | `42, -7, 0` |
| Real (float) | Decimal numbers | `3.14, -0.5` |
| Character | Single character | `'A', '?'` |
| Boolean | True / False | `True, False` |

### Simple data structures (compulsory)

- **String** — sequence of characters
- **1-dimensional array** (list in Python)

### Boolean logic & truth tables

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

### Control structures

- **Sequence** — statements run top-down.
- **Selection** — `if / elif / else` (binary and multi-way).
- **Iteration** — `for`, `while` (nested loops are NOT required in the Compulsory Part — they appear in Elective 2C).

### Pseudocode style used by HKEAA

```text
INPUT n
total ← 0
FOR i ← 1 TO n
    total ← total + i
END FOR
OUTPUT total
```

### Flowchart symbols

```
┌──────────┐
│  Start   │  ← Terminator (rounded rectangle)
└────┬─────┘
     ▼
┌──────────┐
│ Input n  │  ← Input/Output (parallelogram)
└────┬─────┘
     ▼
┌──────────┐
│ total←0  │  ← Process (rectangle)
└────┬─────┘
     ▼
   ◇─────◇
  ◇ n>0? ◇   ← Decision (diamond)
   ◇─────◇
```

### Trace table example

> Algorithm: count vowels in a string `s`

```text
count ← 0
FOR each ch IN s
    IF ch IN ['a','e','i','o','u'] THEN
        count ← count + 1
    END IF
END FOR
```

For `s = "ict"`:

| Step | ch | Condition | count |
|------|----|-----------|-------|
| 0 | — | — | 0 |
| 1 | 'i' | True | 1 |
| 2 | 'c' | False | 1 |
| 3 | 't' | False | 1 |

Final answer: 1.

### Modularity

Break a big program into small **sub-programs (functions)**. Benefits:

- Easier to read and test
- Reusable across programs
- Multiple programmers can work in parallel
- Easier to maintain — change one function without touching others

---

## c. Program Development (20h)

### Learning outcomes

- Understand and use **variables, constants, and 1D arrays** in different contexts.
- Use **operators, expressions, assignment, input, output**.
- Use **sequence, selection and iteration** (nested loop NOT required at this level).
- Produce a programming solution for a given problem.

### Operators

| Group | Examples |
|-------|----------|
| Arithmetic | `+ - * / % **` |
| Relational | `== != > < >= <=` |
| Boolean | `and or not` |

### Variable rules

- Choose **meaningful names** (`average_height`, not `x`)
- One purpose per variable
- Initialise before use

### Classic algorithms to know

#### Find min / max / average

```python
nums = [12, 4, 7, 19, 3]
mn = mx = nums[0]
total = 0
for n in nums:
    if n < mn: mn = n
    if n > mx: mx = n
    total += n
avg = total / len(nums)
print(mn, mx, avg)
```

#### Linear search

```python
def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i      # found, return index
    return -1             # not found
```

#### Count items meeting a condition

```python
scores = [55, 62, 47, 80, 73]
count_pass = sum(1 for s in scores if s >= 50)
print(count_pass)         # 4
```

#### String operations

```python
s = "HKDSE"
print(len(s))             # 5
print(s[0])               # 'H'
print(s[1:3])             # 'KD'
print(s.lower())          # 'hkdse'
print('K' in s)           # True
```

#### Check if a list is sorted

```python
def is_sorted(lst):
    for i in range(1, len(lst)):
        if lst[i] < lst[i-1]:
            return False
    return True
```

### User interface design

- Show clear **prompts** for input
- Validate input (range, type)
- Output results in a meaningful order with labels

---

## d. Program Testing & Debugging (11h)

### Learning outcomes

- Apply **data validation** checks to design appropriate **test data**.
- Understand and describe types of program errors: **syntax, logic, run-time**.
- Compare different solutions to the same problem.

### Test data categories

| Category | Examples |
|----------|----------|
| **Normal** | Typical input within range (e.g. age = 17) |
| **Boundary** | Edge of valid range (e.g. age = 0, age = 150) |
| **Erroneous** | Invalid input (e.g. age = -5, age = "abc") |

> Boundary cases are the single biggest source of bugs. Always test them.

### Error types

| Type | Detected when | Example |
|------|---------------|---------|
| **Syntax** | Compile / interpret | `print(x` missing `)` |
| **Logic** | At runtime, wrong output | Using `<` instead of `<=` |
| **Run-time** | While running | Division by zero, file not found |

### Debugging techniques

- Add `print()` statements to inspect variable values
- Use a debugger to set **breakpoints** and step through
- **Trace tables** on paper
- **Dry-run** the algorithm with sample data

### Comparing solutions

When two programs give the same correct result, compare:

- **Number of steps** (efficiency)
- **Memory usage**
- **Readability and maintainability**

---

## Common mistakes

- Writing pseudocode with Python-specific syntax (use `←` for assignment, not `=`).
- Forgetting boundary cases in test data.
- Using `=` instead of `==` in conditions.
- Mixing up `and` / `or` truth tables.
- Producing a trace table that skips an iteration.

## Past-paper hotspots

- MC: identify which error type a given snippet has.
- Section B: write or complete pseudocode for a basic algorithm (min/max/count/search).
- Section B: produce a trace table for given pseudocode.
- Section B: explain modularity and rewrite a program using a sub-program.

::: tip Practice every week
Reading code is not the same as writing it. Use **[SQL Books](https://sqlbooks.codenav.dev)** for SQL practice; for Python, install it locally or use any free online Python sandbox. The HKEAA marks correct logic, not perfect code style.
:::

---

➡️ Next: [Module E · Social Implications](./module-e-social)
