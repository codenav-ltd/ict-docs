# For Teachers · Scheme of Work and Classroom Ideas

> A pragmatic playbook for ICT teachers preparing a class for HKDSE. Use what fits your context.

## Suggested 3-year scheme of work

| Year | Term | Compulsory focus | Elective focus | SBA |
|------|------|-----------------|----------------|-----|
| S4 | 1 | A, partial D | — | — |
| S4 | 2 | C, D core | Elective taster lessons | — |
| S4 | 3 | B, E | Final elective taster | Concept conversation |
| S5 | 1 | D wrap-up | Elective A first half | Topic selection |
| S5 | 2 | — | Elective A & B second half | Task 1 design + build |
| S5 | 3 | Revision | — | Task 1 finalise, Task 2 begin |
| S6 | 1 | Past papers + revision | Past papers | Task 2 finalise + submit |
| S6 | 2 | Mock exams | Mock exams | — |

## Teaching strategies that work

| Strategy | When | Why |
|----------|------|-----|
| **IPO chart** for every problem | All programming lessons | Forces students to slow down before coding |
| **Pair programming** | Coding-heavy lessons | Stronger student explains to weaker, both benefit |
| **Live trace tables on the board** | Algorithm lessons | Demystifies "what variables actually do" |
| **Mini debates** | Module E (ethics) | Surfaces real opinions, easier to remember |
| **Past paper "speed runs"** | S6 | Builds exam stamina and pattern recognition |
| **Spaced quizzes** | Throughout | Fight Ebbinghaus forgetting curve |

## Classroom infrastructure recommendations

- **Standardise on Python 3.11+** if the syllabus permits (some schools still teach C++ in parallel).
- **One MySQL instance per class** with one schema per student, OR use a hosted multi-tenant tool like [SQL Books](https://sqlbooks.codenav.dev) so each student has an isolated database. The latter avoids "Alice dropped my table".
- **VS Code + Live Share** for collaborative coding.
- **GitHub Classroom** (or Gitea on-prem) for SBA versioning — pays off massively in S5.
- **Shared "common mistakes" wall** updated after every test.

## SBA grading sanity checks

1. Did the student build something that **actually works**? Run it.
2. Is the report **honest** about what didn't work? Reward reflection.
3. Are test cases **diverse** (normal, boundary, erroneous)?
4. Is the design coherent (ER diagram matches actual tables)?

## Common student difficulty points and how to address

| Topic | Symptom | Mini intervention |
|-------|---------|--------------------|
| Pseudocode → Python | Syntax errors | Side-by-side template handout |
| SQL JOIN | Cartesian product confusion | Venn diagram + 1 toy dataset |
| Two's complement | Confused about negative numbers | Step-by-step worksheet × 5 problems |
| HTTP GET/POST | Treat them as interchangeable | Demo with browser network tab |
| Normalisation | Don't reach 3NF | Worked example from non-normalised CSV |

## Differentiation for mixed-ability classes

- Provide **3 tiers of worksheet** per major topic: foundation, standard, extension.
- For coding tasks, give a **scaffolded version** (with TODOs) and a **blank version**.
- Use ungraded **diagnostic quizzes** early in S5 to identify gaps.

## Recommended resources

- HKEAA reference papers (always the authoritative source)
- EDB C&A Guide (the syllabus bible)
- Past papers and sample papers from HKEAA
- Open courseware (MIT, Harvard CS50) for selective enrichment
- This site (HKDSE ICT Hub) for cross-referencing in three languages

::: tip Reduce IT-admin overhead with hosted tools
School lab MySQL set-ups are notoriously fragile. A hosted tool like **[SQL Books](https://sqlbooks.codenav.dev)** removes the need to manage users, ports, backups — every student logs in, gets an isolated database, runs queries, and you can hand out structured **SQL Books courses** as classwork. This is especially useful for substitute lessons or remote learning days.
:::

➡️ Back to: [Study Plan overview](./)
