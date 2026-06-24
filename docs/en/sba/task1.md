# SBA Task 1 · Design & Implementation (25 marks)

> Show that you can take a real-world problem, design a solution, and build a working prototype with the ICT skills you have learnt.

## What markers look for

| Section | What to include | Tips |
|---------|----------------|------|
| **Problem identification** | Who the user is, what pain you solve, scope (in/out) | 1–2 paragraphs is enough; be specific |
| **Requirements** | Functional and non-functional requirements list | Bulleted, numbered |
| **System design** | ER diagram, data dictionary, system architecture diagram, wireframes/mock-ups | Use the official ER symbols |
| **Implementation plan** | Modules, technologies, milestones | Gantt chart looks great |
| **Build artefacts** | Screenshots of code, UI, database tables | Use captions, not just images |
| **User guide** | How to install/run, key workflows | Reads like a real manual |

## Suggested document structure

```
1. Introduction
   1.1 Background
   1.2 Aim
   1.3 Scope
2. Analysis
   2.1 User profile
   2.2 Use cases
   2.3 Functional requirements
   2.4 Non-functional requirements
3. Design
   3.1 System architecture
   3.2 ER diagram
   3.3 Data dictionary
   3.4 UI mock-ups
   3.5 Process flowcharts
4. Implementation
   4.1 Technology stack
   4.2 Database schema (SQL)
   4.3 Backend modules
   4.4 Frontend pages
   4.5 Key code snippets
5. User guide
6. References
```

## Worked example · School library system

### Problem statement

> Our school librarian still records book loans on paper. This makes it slow to find overdue books and impossible to generate monthly reports. We will build a small web system to digitise loan records.

### ER diagram (rough)

```
[Member] ─── borrows ─── [Loan] ─── refers_to ─── [Book]
                            │
                            └── 1:M to [Fine] (optional)
```

### Database schema (in SQL Books while drafting)

```sql
CREATE TABLE Member (
  member_id INTEGER PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  class     VARCHAR(10)
);

CREATE TABLE Book (
  isbn      VARCHAR(20) PRIMARY KEY,
  title     VARCHAR(200) NOT NULL,
  author    VARCHAR(100),
  copies    INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE Loan (
  loan_id    INTEGER PRIMARY KEY,
  member_id  INTEGER NOT NULL,
  isbn       VARCHAR(20) NOT NULL,
  loan_date  DATE NOT NULL,
  due_date   DATE NOT NULL,
  return_date DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id),
  FOREIGN KEY (isbn)      REFERENCES Book(isbn)
);
```

### Implementation outline

1. Bootstrap a tiny PHP project with `index.php`, `style.css`, and a `db.php` connection helper.
2. CRUD pages: list members, add book, record loan, return book.
3. Reports page: show overdue loans with `JOIN` of all three tables.
4. Login with `session_start()` for librarian-only pages.

### Required deliverables (typical school list)

- Source code (zipped)
- Database `.sql` dump
- User guide (PDF, 2–4 pages)
- Demo video (optional, 3 minutes)
- Self-evaluation form

## Time management

A 25-mark task typically takes **20–30 hours** of work spread over weeks. Allocate roughly:

- 15% planning / requirements
- 30% design / documentation
- 45% coding & testing
- 10% writing the report

## Common pitfalls

- **Scope creep** — you don't need 50 features. Three solid ones beat ten broken ones.
- **No version control** — keep a copy after each major milestone.
- **Designing in code first** — draw the schema and ER diagram **before** writing SQL.
- **Hard-coded data** — markers want to see use of variables, parameters, configuration.

::: tip Iterate your schema fast
Database design is the single biggest source of redo work in SBA. Spin up **[SQL Books](https://sqlbooks.codenav.dev)** during the design phase: paste your `CREATE TABLE`s, insert 5 sample rows, run your hardest reporting query. If it doesn't run, fix the schema **before** you write any PHP.
:::

➡️ Next: [Task 2 · Testing & Evaluation](./task2)
