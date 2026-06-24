# 1.2 · Keys — Primary, Foreign, Candidate

> **Goal:** identify all kinds of keys and pick the right one.

## Why keys matter

- **Uniquely identify** each row.
- **Link** tables together.
- Enable **fast lookups** via indexes.

## Five terms you must know

| Key | Definition |
|-----|------------|
| **Super key** | Any combination of attributes that uniquely identifies a row |
| **Candidate key** | A minimal super key (no attribute can be removed) |
| **Primary key (PK)** | The chosen candidate key for the table |
| **Alternate key** | Other candidate keys not chosen as PK |
| **Foreign key (FK)** | An attribute in one table that references a PK in another |

## Special types

| Key | Notes |
|-----|-------|
| **Composite key** | A key consisting of two or more attributes |
| **Surrogate key** | An artificial key with no business meaning (`id INTEGER AUTO_INCREMENT`) |
| **Natural key** | A key derived from real-world data (HKID, ISBN) |

## Worked example · Student table

```
Student(
  student_id      INTEGER PRIMARY KEY,   ← surrogate, single attribute
  hkid            VARCHAR(10) UNIQUE,    ← candidate (natural)
  name            VARCHAR(50) NOT NULL,
  dob             DATE,
  class_id        INTEGER,
  FOREIGN KEY (class_id) REFERENCES Class(class_id)
)
```

- **Candidate keys**: `student_id`, `hkid` (both unique).
- **Primary key**: `student_id` (chosen).
- **Alternate key**: `hkid` (the other candidate).
- **Foreign key**: `class_id` → `Class.class_id`.

## Composite key example · Enrolment

A student can enrol in many courses, a course has many students:

```
Enrolment(
  student_id INTEGER,
  course_id  INTEGER,
  semester   VARCHAR(10),
  PRIMARY KEY (student_id, course_id, semester),
  FOREIGN KEY (student_id) REFERENCES Student(student_id),
  FOREIGN KEY (course_id)  REFERENCES Course(course_id)
)
```

Here `(student_id, course_id, semester)` together uniquely identify an enrolment record.

## Choosing a primary key

| Criterion | Why |
|-----------|-----|
| Unique | Must identify a single row |
| Not null | PK cannot be NULL |
| Immutable | Should rarely change |
| Compact | Smaller index, faster lookups |
| Convenient | Surrogate keys avoid coupling business meaning to identity |

## Common student mistakes

- Using a name as a primary key (names aren't unique and may change).
- Forgetting that **a foreign key must reference an existing primary key** in another table.
- Confusing composite key with multiple primary keys (a table has **one** PK, possibly composite).
- Using nullable columns as primary keys.

## Exam-style question

> **Q (5 marks):** For the table `Order(order_id, customer_id, product_id, quantity, order_date)`:
>
> (a) Suggest a suitable primary key.
> (b) Identify two foreign keys and the tables they reference.
> (c) Could `(customer_id, product_id)` serve as a primary key? Justify.

**Sample answer:**

(a) `order_id` — a surrogate key, single column, unique, never null.

(b) `customer_id` references `Customer(customer_id)`; `product_id` references `Product(product_id)`.

(c) `(customer_id, product_id)` is **not** a suitable PK because a customer may order the same product multiple times on different dates — the composite would not be unique. To make it unique you'd need to add `order_date`, but the original `order_id` surrogate is simpler and more reliable.

## Key takeaways

- Primary key uniquely identifies rows.
- Foreign key references a primary key in another table.
- Composite keys exist; surrogate keys are often cleanest.

➡️ Next: [1.3 Integrity Rules](./integrity)
