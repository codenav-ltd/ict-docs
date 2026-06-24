# 1.1 · Defining a Problem (IPO Analysis)

> **Goal:** transform a fuzzy problem statement into a clear list of Inputs, Processes and Outputs.

## What IPO means

**I**nput → **P**rocess → **O**utput. Every programming task can be modelled this way.

```
┌────────┐    ┌────────┐    ┌────────┐
│ Input  │ ──▶│Process │ ──▶│ Output │
└────────┘    └────────┘    └────────┘
```

Before writing a single line of code, fill in all three boxes.

## Why it matters

Skipping IPO leads to:

- Programs that ignore important inputs.
- Forgotten outputs (e.g. logs).
- Solutions that solve the wrong problem.

## Worked example · BMI calculator

| Field | Content |
|-------|---------|
| **Input** | weight in kg (float), height in metres (float) |
| **Process** | bmi = weight / (height × height); classify into Underweight/Normal/Overweight/Obese |
| **Output** | bmi (one decimal); category text |

## IPO template

```
Problem name : 
Author       : 
Date         :

INPUTS
  - name : type : example
  - …

PROCESSES
  - step 1 …
  - step 2 …
  - …

OUTPUTS
  - name : type : example
  - …

ASSUMPTIONS
  - …

VALIDATIONS
  - …
```

Fill the template in 5 minutes before coding. Most marks lost in SBA come from missing this step.

## Defining problem scope

Always state explicitly **what is** and **what is not** in scope.

> **Scope:** the program computes BMI for a single user at one time.  
> **Out of scope:** storing historical BMI, multi-user accounts, ideal weight calculation.

Scope keeps the project finishable.

## Exam-style question

> **Q (4 marks):** A teacher wants a program that takes a class's exam marks and prints the highest mark, lowest mark and average. Carry out an IPO analysis.

**Sample answer:**

- **Inputs**: a list of integer marks (e.g. `[78, 65, 90, 55, 82]`).
- **Processes**: validate that all marks are 0–100; find max and min; compute average = sum / count.
- **Outputs**: highest mark, lowest mark, average (rounded to 1 decimal place).

## Key takeaways

- IPO before code.
- Scope decisions prevent feature creep.

➡️ Next: [1.2 Decomposition](./decomposition)
