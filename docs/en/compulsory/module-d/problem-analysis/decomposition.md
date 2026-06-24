# 1.2 · Decomposition

> **Goal:** break a big problem into smaller, individually solvable sub-problems.

## What decomposition is

**Decomposition** is the process of splitting one big problem into smaller, manageable parts that can be solved independently and combined.

A complex system is rarely solved as one giant chunk. You break it down, solve each piece, then glue the pieces together.

## Example · Build a tutorial booking system

The headline "build a tutorial booking system" decomposes into:

1. User accounts (signup, login, profile).
2. Tutor profiles (skills, schedule, rates).
3. Search and filter (subject, time, price).
4. Booking flow (choose slot, pay, confirm).
5. Notifications (email, SMS).
6. Reviews and ratings.

Each smaller problem is **bounded** — you can finish it without solving the others.

## Benefits

- **Cognitive load** — work on one small piece at a time.
- **Reuse** — small pieces can serve multiple bigger problems.
- **Team work** — different students/programmers tackle different pieces.
- **Testing** — easier to test small pieces independently.
- **Maintenance** — fixing a bug touches only one piece.

## Levels of decomposition

```
School registration system
├── Student data
│   ├── add new student
│   ├── update record
│   └── delete record
├── Class allocation
│   ├── assign by score
│   └── manual override
└── Reports
    ├── attendance summary
    └── examination ranking
```

Stop decomposing when each leaf is small enough to implement in one function (10–50 lines).

## Practical heuristics

- Each sub-problem should have its own **inputs, processes and outputs** (use IPO again at each level).
- Each sub-problem should be **independent** — minimal hidden dependencies.
- Name each piece with a **verb-noun** (e.g. `calculateGrade`, `sendEmail`).

## Common student mistakes

- Decomposing too coarsely — leaves are still huge.
- Decomposing too finely — each leaf is two lines; overhead exceeds benefit.
- Forgetting integration — pieces look good alone but don't fit together.

## Exam-style question

> **Q (4 marks):** Decompose the task "produce a yearly report card for each student" into at least four sub-problems and outline what each does.

**Sample answer:**

1. **Collect marks** — gather all exam marks for each subject from the database.
2. **Calculate grades** — convert each subject's mark into a letter grade (A–F) and compute term/overall averages.
3. **Format report** — assemble student details, subject grades, comments, attendance into the standard report layout.
4. **Export & print** — generate a PDF per student and dispatch to printers or email to parents.

## Key takeaways

- Big problem → smaller problems → individual functions.
- Each piece has its own IPO.
- Reusability and team-friendliness emerge naturally.

➡️ Next: [1.3 Pattern Recognition](./pattern-recognition)
