# 1.3 · Integrity Rules

> **Goal:** explain the three named integrity rules and recognise violations.

## The three rules

| Rule | Definition |
|------|------------|
| **Entity integrity** | Primary key must not be NULL and must be unique within the table |
| **Referential integrity** | A foreign key must reference an **existing** primary key value (or be NULL if allowed) |
| **Domain integrity** | Each attribute's value must lie within its declared domain (data type + constraints) |

## Entity integrity examples

| Action | Status |
|--------|--------|
| `INSERT INTO Student VALUES (NULL, 'Alice', ...)` | ❌ violates — PK is NULL |
| `INSERT INTO Student VALUES (1001, 'Alice', ...)` and another row with `(1001, 'Bob', ...)` | ❌ violates — PK duplicated |

## Referential integrity examples

| Action | Status |
|--------|--------|
| `INSERT INTO Loan VALUES (1, member_id=999, ...)` when no member 999 exists | ❌ violates — FK orphan |
| Deleting a member who has outstanding loans | ❌ may violate, unless ON DELETE CASCADE is set |

### What happens when you delete a referenced row?

DBMSs offer several **referential actions**:

| Action | Behaviour |
|--------|-----------|
| `RESTRICT` (default) | Block the delete if any FK references it |
| `CASCADE` | Delete the referencing rows too |
| `SET NULL` | Set the referencing FK to NULL |
| `SET DEFAULT` | Set the FK to its column default |

Choose based on business rules: deleting a Member usually shouldn't silently delete their borrowing history (RESTRICT or move records to an archive).

## Domain integrity examples

| Declaration | Violation |
|-------------|-----------|
| `score INTEGER CHECK (score BETWEEN 0 AND 100)` | `INSERT … score = 150` rejected |
| `class CHAR(4)` | `INSERT … class = 'F5BBB'` truncated / rejected |
| `dob DATE NOT NULL` | `INSERT … dob = NULL` rejected |
| `is_active BOOLEAN` | `INSERT … is_active = 'maybe'` rejected |

## Beyond the three named rules

DBMSs also enforce:

- **UNIQUE** constraints on non-key columns (e.g. email must be unique).
- **CHECK** constraints (custom rules).
- **DEFAULT** values.
- **NOT NULL**.

## Common student mistakes

- Confusing entity integrity (PK level) with referential integrity (FK level).
- Forgetting that NULL is **not** equal to anything, including itself.
- Not declaring `NOT NULL` on important columns.
- Writing `CHECK` constraints that allow invalid combinations.

## Exam-style question

> **Q (5 marks):** Explain each of the three integrity rules and give one realistic example violation for each in a school student database.

**Sample answer:**

1. **Entity integrity** — primary key must be unique and not null. Example violation: inserting a student row with `student_id = NULL` is rejected because every student must be uniquely identifiable.

2. **Referential integrity** — foreign keys must reference an existing primary key. Example violation: inserting a borrowing record (`Loan`) with `student_id = 9999` when no such student exists in the `Student` table — DBMS rejects the insert.

3. **Domain integrity** — attribute values must lie within the declared domain. Example violation: trying to insert `score = 150` when the column is declared `CHECK (score BETWEEN 0 AND 100)` — the DBMS rejects because the value is outside the valid range.

## Key takeaways

- Three rules: entity, referential, domain.
- DBMSs enforce them via constraints.
- Pick referential actions (RESTRICT / CASCADE / SET NULL) based on business rules.

➡️ Next: [1.4 Indexes & Rollback](./indexes-rollback)
