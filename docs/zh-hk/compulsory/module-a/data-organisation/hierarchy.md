# 2.1 · Hierarchy of Data

> **Goal:** name the five levels of the data hierarchy and identify each one in a given scenario.

## The five levels

Data is organised hierarchically — from the tiniest 0/1 up to a full database. Memorise this ladder:

```
                       ┌─────────────────────┐
                       │     Database        │  collection of related files
                       └────────▲────────────┘
                                │
                       ┌─────────────────────┐
                       │     File            │  collection of related records
                       └────────▲────────────┘
                                │
                       ┌─────────────────────┐
                       │     Record          │  collection of related fields
                       └────────▲────────────┘
                                │
                       ┌─────────────────────┐
                       │     Field           │  the smallest meaningful unit
                       └────────▲────────────┘
                                │
                       ┌─────────────────────┐
                       │     Byte (8 bits)   │  storage of a character
                       └────────▲────────────┘
                                │
                       ┌─────────────────────┐
                       │     Bit             │  0 or 1
                       └─────────────────────┘
```

For Paper 1 the **5 levels you must name** are:

1. **Field**
2. **Record**
3. **File**
4. **Database**

(plus the lower-level technical building blocks **bit** and **byte**)

The HKEAA usually asks: "Identify data, records, fields, files and databases in this scenario." So we focus on the top 4 + the conceptual base "data".

## Walk-through · School student database

| Level | Example |
|-------|---------|
| **Database** | The school's entire `school_system` database |
| **File / Table** | The `students` table |
| **Record** | One row: `1001, Alice Chan, F.4A, 2007-05-12, 86 Robinson Rd` |
| **Field** | `class = 'F.4A'` (one cell) |
| **Byte / Character** | The letter `F` in `F.4A` |
| **Bit** | A single `0` or `1` inside the byte that stores `F` |

## More vocabulary you should know

| Term | Meaning |
|------|---------|
| **Entity** | The "thing" you're recording (a student, a book, an order) |
| **Attribute** | A characteristic of an entity (matches "field") |
| **Tuple / Row** | A specific instance of an entity (matches "record") |
| **Relation / Table** | A structured collection (matches "file" in relational DBs) |
| **Schema** | The blueprint of a database (which tables, which fields) |

These appear again in Elective 2A. Knowing them now saves time later.

## Real-life examples

| Domain | Field | Record | File | Database |
|--------|-------|--------|------|----------|
| Hospital | patient_id | One patient's appointment | All appointments today | Hospital management system |
| Library | ISBN | One loan transaction | All loans this month | Library DB |
| MTR | card_id | One tap | All taps today | Octopus DB |
| Shop | sku | One product line on a receipt | All receipts this hour | POS DB |

## How data is organised inside a file

The file you store on disk can be laid out in several ways:

| Layout | Description | Typical use |
|--------|-------------|-------------|
| **Sequential** | Records stored one after another in a fixed order (often sorted by key) | Tape backups, log files |
| **Indexed sequential (ISAM)** | Sequential + an index allowing quick jumps | Older mainframe systems |
| **Random / direct (hash)** | Records placed at positions calculated from the key | Hash-based databases |
| **Relational** | Tables with rows and columns; relationships expressed by foreign keys | MySQL, PostgreSQL, SQLite |

For Paper 1 you only need to **distinguish sequential and direct access** (next sub-topic).

## Common student mistakes

- Confusing **record** and **field**: a record is the whole row; a field is one cell.
- Calling the whole spreadsheet a **record**.
- Saying **byte ≠ character**: in basic ASCII a character is 1 byte, but in Unicode (UTF-8) it can be 1–4 bytes.
- Forgetting that a **database** can contain many files/tables — not just one.

## Practice activity

You are given the following CSV file from a sports club:

```csv
member_id,name,join_date,birth_year,sport
1001,Alice Chan,2024-09-01,2007,Basketball
1002,Bob Wong,2024-09-15,2008,Swimming
1003,Carol Yip,2024-10-03,2007,Tennis
```

For this file, identify:

- **A field** (e.g. `member_id` or any single cell value)
- **A record** (one full row, e.g. row of member 1002)
- **The file** (the CSV itself)
- **A database** (the club's collection of CSVs / tables)
- **A byte** (the storage of one character in the CSV)

## Exam-style question

> **Q (4 marks):** A car park system records the licence plate, entry time, exit time and fee for each parking event. Identify, with one example each, the field, record, file and database used by the system.

**Mark scheme expects:**

- **Field** (1): e.g. `licence_plate = "AB1234"`
- **Record** (1): one parking event row, e.g. `("AB1234", "2026-06-24 09:00", "2026-06-24 11:30", 60)`
- **File** (1): all parking events for one day (or one location)
- **Database** (1): the car park company's full database covering all car parks and dates

## Key takeaways

- **Field → Record → File → Database**.
- A field is one **piece of data**, a record is **one instance of an entity**.
- The terms reappear as **attribute, tuple, table, schema** in Elective 2A.

➡️ Next: [2.2 Sequential vs Direct Access](./access-methods)
