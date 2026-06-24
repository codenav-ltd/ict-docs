# 2.3 · Data Types & Structures

> **Goal:** pick the right data type for each variable and recognise the simple data structures used in Module D.

## Simple data types

| Type | Stores | Python equivalent |
|------|--------|-------------------|
| **Integer** | Whole numbers | `int` |
| **Real / Float** | Decimal numbers | `float` |
| **Character** | A single character | `str` of length 1 |
| **Boolean** | True / False | `bool` |

### Choosing the right type

- Use **integer** if no decimals are needed (age, count). Faster and exact.
- Use **float** for measurements (height, weight, money — though for money, fixed-point is safer in real systems).
- Use **boolean** for yes/no, on/off, found/not-found.
- Use **character** rarely; **string** is more common in real code.

## Simple data structures

The syllabus restricts compulsory data structures to:

- **String** — sequence of characters
- **1D array** — fixed-size ordered collection

(2D arrays, stacks, queues, linked lists are **Elective 2C** material.)

### String basics

```text
name ← "HKDSE"
length ← LENGTH(name)        // 5
first  ← name[1]             // 'H' (1-indexed pseudocode style)
rest   ← SUBSTRING(name, 2, 5) // 'KDSE'
```

In Python:

```python
name = "HKDSE"
print(len(name))     # 5
print(name[0])       # 'H'   (Python is 0-indexed)
print(name[1:5])     # 'KDSE'
```

> **Indexing convention**: pseudocode in HKEAA documents is often 1-indexed; Python is 0-indexed. Be careful when converting.

### 1D array basics

```text
DECLARE marks[1..10]
marks[1] ← 65
marks[2] ← 90
total ← 0
FOR i ← 1 TO 10
    total ← total + marks[i]
END FOR
average ← total / 10
```

In Python (using a list):

```python
marks = [65, 90, 78, 85, 92, 60, 73, 88, 95, 80]
average = sum(marks) / len(marks)
```

## Boolean logic & truth tables

| A | B | A AND B | A OR B | NOT A |
|---|---|---------|--------|-------|
| F | F | F | F | T |
| F | T | F | T | T |
| T | F | F | T | F |
| T | T | T | T | F |

You may be asked to fill in or apply truth tables for compound conditions.

### Example · Decide eligibility for a discount

> "Members get a discount if they are over 60 OR have spent more than $1,000."

```text
discount ← (age > 60) OR (spent > 1000)
```

For age = 65, spent = 500 → True (first half true).
For age = 30, spent = 2000 → True (second half true).
For age = 25, spent = 100 → False.

## Common student mistakes

- Storing a phone number as **integer** — loses leading zeros; use **string**.
- Confusing **integer division** with **real division**. In Python `5/2 = 2.5`, `5//2 = 2`.
- Off-by-one indexing when translating between pseudocode and Python.

## Exam-style question

> **Q (4 marks):** Select the most appropriate data type for each of the following variables and justify your choice:
> (a) student_id, (b) bmi, (c) is_member, (d) student_name.

**Sample answer:**

- (a) **String** — IDs may have leading zeros or letters; numeric arithmetic is never required.
- (b) **Real / Float** — BMI is a decimal value.
- (c) **Boolean** — only two states, member or not.
- (d) **String** — sequence of characters of variable length.

## Key takeaways

- Four simple types: integer, real, character, boolean.
- Compulsory data structures: string and 1D array.
- Pick types that match the data's nature (no maths → no number).

➡️ Next: [2.4 Control Structures](./control-structures)
