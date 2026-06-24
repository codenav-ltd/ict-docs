# 1.1 · Tables, Rows, Attributes

> **Goal:** master the core vocabulary of the relational model.

## The relational model in one diagram

```
┌─── Table (relation) ─── Student ───────────────────────┐
│ id       name          class    dob          score      │
│ 1001     Alice Chan    F.4A     2007-05-12   86         │  ← Row (tuple / record)
│ 1002     Bob Wong      F.4A     2008-03-22   72         │
│ 1003     Carol Yip     F.4B     2007-11-08   91         │
└─────────────────────────────────────────────────────────┘
         ▲                                       ▲
         │                                       │
       Attribute (column / field)             Attribute
```

## Core terms

| Term | Meaning |
|------|---------|
| **Entity** | A thing we model (Student, Book, Order) |
| **Relation / Table** | A collection of rows sharing the same attributes |
| **Tuple / Row / Record** | One specific instance of the entity |
| **Attribute / Column / Field** | A property of the entity |
| **Domain** | The set of valid values for an attribute (e.g. age 0..150) |
| **Schema** | The blueprint of the database (what tables, what columns, what types) |
| **Instance** | The actual data in a database at a moment in time |

## Why "relational"?

Relations between entities are represented by **shared values** — typically a primary key in one table appearing as a foreign key in another.

```
Student              Class
┌──────┬──────┐      ┌──────┬───────────┐
│ id   │ class│      │ id   │ teacher   │
├──────┼──────┤      ├──────┼───────────┤
│ 1001 │ F.4A │ ───▶ │ F.4A │ Mr. Lee   │
│ 1002 │ F.4A │ ───▶ │ F.4A │ Mr. Lee   │
│ 1003 │ F.4B │ ───▶ │ F.4B │ Ms. Wong  │
└──────┴──────┘      └──────┴───────────┘
```

## Properties of a relation

A proper relation:

- Has a **unique name**.
- Has **distinct attribute names**.
- Stores **atomic** values (no lists inside a cell — that's 1NF).
- Has **no duplicate rows** (in theory).
- **Row order does not matter**.
- **Column order does not matter** in theory (though SQL preserves it).

## Worked example · Library

| Entity | Attributes |
|--------|------------|
| Book | isbn (PK), title, author, copies |
| Member | member_id (PK), name, class, joined_on |
| Loan | loan_id (PK), member_id (FK), isbn (FK), loan_date, due_date, return_date |

Each row of `Loan` represents one borrowing event linking a member to a book.

## Common student mistakes

- Storing comma-separated lists in a cell ("Alice, Bob, Carol") — violates 1NF.
- Mixing data types in one column.
- Duplicating data across many rows that should live in a related table.

## Exam-style question

> **Q (4 marks):** A school wants to track members of its many clubs. Each student may join multiple clubs and each club may have multiple students. Identify the entities, key attributes, and the relationship between them.

**Sample answer:**

- **Entities**: `Student`, `Club`, `Membership` (associative).
- **Primary keys**: `Student.student_id`, `Club.club_id`, `Membership.(student_id, club_id)` composite.
- **Relationship**: Many-to-many between Student and Club, resolved via the `Membership` associative table holding the two foreign keys plus optional fields like `joined_on`.

## Key takeaways

- Relations are tables of tuples; attributes are columns.
- Atomic values, no duplicate rows.
- Relations between entities use shared keys.

➡️ Next: [1.2 Keys](./keys)
