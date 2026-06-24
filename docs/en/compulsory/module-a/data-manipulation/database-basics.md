# 4.4 · Database Basics with a DBMS

> **Goal:** explain what a DBMS does, create a simple database with form and report, and understand how it differs from a spreadsheet.

## What is a DBMS?

A **Database Management System** (DBMS) is software that lets you **create, query, modify and secure** a database. Popular DBMS:

- **MySQL / MariaDB** — open source, web-friendly
- **PostgreSQL** — open source, advanced features
- **SQLite** — file-based, embedded in apps
- **Microsoft Access** — desktop, popular in schools
- **Oracle / SQL Server** — enterprise

Whatever DBMS you use, the core ideas are identical: tables, rows, columns, queries.

## Spreadsheet vs Database

| Aspect | Spreadsheet | Database (DBMS) |
|--------|-------------|------------------|
| Storage unit | Cell | Row / record |
| Max practical size | Hundreds of thousands | Millions+ |
| Concurrent users | A few at a time | Many simultaneously |
| Data integrity | Loose | Enforced (data types, keys, constraints) |
| Query language | Formulas | **SQL** |
| Relationships | Manual lookup | Foreign keys, joins |
| Multi-user editing | Risky | Designed for it |

**Rule of thumb**: when data crosses 50,000 rows or multiple tables, leave spreadsheets and use a DBMS.

## A simple example · Membership database

Imagine a sports club. We need three tables:

### Table `Member`

| member_id | name | dob | class |
|-----------|------|-----|-------|
| 1001 | Alice Chan | 2007-05-12 | F.4A |
| 1002 | Bob Wong | 2008-03-22 | F.4B |
| 1003 | Carol Yip | 2007-11-08 | F.4A |

### Table `Sport`

| sport_id | name | coach |
|----------|------|-------|
| 1 | Basketball | Mr. Lee |
| 2 | Swimming | Ms. Wong |

### Table `Enrol` (a join / associative table)

| member_id | sport_id | join_date |
|-----------|----------|-----------|
| 1001 | 1 | 2024-09-01 |
| 1001 | 2 | 2024-09-15 |
| 1002 | 2 | 2024-10-03 |

## Forms — data entry made friendly

A **form** is a UI for entering data into a single record without exposing the raw table.

```
┌──────────── Add new member ────────────┐
│ Member ID :  [ 1004           ]        │
│ Name      :  [ Daisy Tam       ]       │
│ DOB       :  [ 2008-01-14      ]       │
│ Class     :  [ F.4B ▼         ]        │
│                                        │
│       [ Save ]      [ Cancel ]         │
└────────────────────────────────────────┘
```

Forms typically include validation rules (e.g. dropdown for class, date picker for DOB) so users cannot enter junk.

## Queries — getting answers

A **query** retrieves selected data from one or more tables. Underneath, queries use SQL (covered in the next sub-topic). Most DBMS also offer a graphical query builder.

Examples of useful queries on the membership database:

- Find every F.4A member.
- Count members per sport.
- List members who have not enrolled in any sport yet.
- Show members born in 2008.

## Reports — formatted output

A **report** is a formatted, printable view based on a query.

```
══════════════════════════════════════════
   Membership report — generated 2026-06-24
══════════════════════════════════════════
F.4A
  1001  Alice Chan   Basketball, Swimming
  1003  Carol Yip    Basketball

F.4B
  1002  Bob Wong     Swimming
══════════════════════════════════════════
```

Reports typically include headers, footers, group totals, page numbers and dynamic dates.

## Lifecycle of a typical database task

```
1. Define the schema     (decide tables and columns)
2. Create the tables     (CREATE TABLE in SQL)
3. Design forms          (entry UI for users)
4. Enter data            (via forms or imports)
5. Run queries           (answer business questions)
6. Generate reports      (printable / shareable)
7. Maintain & backup     (regular backups)
```

This is the workflow your SBA Task 1 will follow.

## Why a DBMS is safer than a spreadsheet

| Risk | Spreadsheet | DBMS |
|------|------------|------|
| Two users edit the same row | Latest save wins | Locking prevents conflicts |
| Accidental delete | Hidden by formulas | Foreign keys can block delete |
| Invalid data type | Allowed | Rejected by column type |
| Single-file corruption | High | Transaction logs + ACID guarantees |
| Massive growth | Slows / crashes | Designed for large data |

## Common student mistakes

- Calling Excel **a DBMS** — it's a spreadsheet program; Microsoft **Access** is the related DBMS.
- Confusing **a record (row)** with **a field (column)**.
- Not using **forms** in SBA — direct table editing is messy and error-prone.
- Building one giant table with 30+ columns instead of splitting into related tables.

## Practice activity

For a small library system, decide which **tables** you need and what **fields** each contains:

::: details Suggested
- **Book** (`isbn, title, author, copies`)
- **Member** (`member_id, name, class, joined_on`)
- **Loan** (`loan_id, member_id, isbn, loan_date, due_date, return_date`)
- Optional: **Fine** (`fine_id, loan_id, amount, paid_on`)
:::

## Exam-style question

> **Q (5 marks):** A school is moving its student attendance records from Excel to a DBMS such as MySQL. Describe two benefits of using a DBMS over a spreadsheet for this purpose, and explain how forms and queries help the school office staff.

**Sample answer:**

Two benefits of the DBMS:

1. **Concurrent multi-user access** — many teachers can submit attendance simultaneously without overwriting each other's data, unlike a single Excel file.
2. **Data integrity** — column types and foreign keys prevent invalid entries (e.g. cannot record attendance for a non-existent student), guaranteeing cleaner reports.

**Forms** provide a friendly UI tailored to teachers: dropdown for class, calendar for date, presence radio buttons. Forms shield teachers from the raw table and enforce validation. **Queries** let the office staff answer questions instantly: "Which students were absent more than 5 times this term?" or "Show today's attendance rate per class." Without queries the staff would manually scroll and count rows.

## Key takeaways

- **DBMS = software to manage databases**; underlying storage = tables, rows, columns.
- Use **forms** to enter data safely.
- Use **queries** to ask questions.
- Use **reports** to share formatted answers.
- Spreadsheets are fine until you outgrow them; DBMS scales.

➡️ Next: [4.5 Reading Simple SQL](./sql-introduction)
