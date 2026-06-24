# 2.6 · Modularity

> **Goal:** explain why splitting a program into sub-programs is essential.

## What modularity is

**Modularity** means designing a program as a collection of **independent, reusable sub-programs (functions / procedures)**, each responsible for one well-defined task.

## Benefits

| Benefit | Why it matters |
|---------|----------------|
| **Easier to read** | Each function is small; readers focus on one task |
| **Easier to test** | Unit-test each function in isolation |
| **Easier to debug** | Bug in `calc_grade` → fix in `calc_grade`, no side-effects elsewhere |
| **Reusable** | Same function used by multiple programs |
| **Parallel work** | Different developers tackle different functions |
| **Maintainable** | Change one function without breaking others |

## Worked example · Before and after

### Before (monolithic)

```python
print("Welcome")
name = input("Name? ")
score = int(input("Score? "))
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"
print(f"{name} scored {score}, grade {grade}")
```

### After (modular)

```python
def greet():
    print("Welcome")

def read_student():
    name = input("Name? ")
    score = int(input("Score? "))
    return name, score

def calc_grade(score):
    if score >= 80: return "A"
    if score >= 70: return "B"
    if score >= 60: return "C"
    return "F"

def report(name, score, grade):
    print(f"{name} scored {score}, grade {grade}")

# main
greet()
name, score = read_student()
report(name, score, calc_grade(score))
```

Same behaviour but easier to extend (e.g. swap `calc_grade` with a different rubric).

## Good function design rules

- **One responsibility** per function — name it with a verb (`calculate_grade`).
- **Inputs as parameters, outputs as return values.** Avoid hidden side-effects.
- **Short** — ideally under 30 lines.
- **Pure when possible** — same input → same output, no surprises.
- **Documented** — a one-line docstring explaining intent.

## Common student mistakes

- Functions that do too much (read input, compute, save, print, email…).
- Heavy use of **global variables** instead of parameters — couples functions.
- Repeating identical code across files instead of extracting a function.
- "God objects" — one giant class that knows everything.

## Exam-style question

> **Q (4 marks):** Describe two advantages of modular design and one risk of writing one long program without modularity.

**Sample answer:**

Advantages:

1. **Maintainability** — bugs and feature changes are localised to single functions, reducing the chance of breaking unrelated code.
2. **Reusability** — well-designed functions can be reused across different programs without copy-paste.

Risk of no modularity:

- A single, monolithic program is hard to read, hard to test, and a small change anywhere can introduce hidden bugs in unrelated parts because logic and state are entangled.

## Key takeaways

- Break big programs into small functions.
- Each function does **one** thing well.
- Modularity pays off in tests, teamwork and maintenance.

## Chapter 2 wrap-up

Self-test: can you read a 15-line pseudocode snippet and write the trace table without help? If yes, you're ready for Chapter 3.

➡️ Next chapter: [3 · Program Development (Python)](../programming/)
