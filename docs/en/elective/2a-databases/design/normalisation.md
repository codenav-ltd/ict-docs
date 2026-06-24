# 3.3 · Normalisation to 3NF

> **Goal:** transform an un-normalised table to 3NF, explaining each step.

## Why normalise?

To **reduce data redundancy** and avoid **update anomalies**.

| Anomaly | Symptom |
|---------|---------|
| **Insertion** | Can't add a record without dummy data |
| **Update** | Same fact stored in many rows; one update misses one row → inconsistency |
| **Deletion** | Deleting a row accidentally removes other useful facts |

## The journey · UNF → 1NF → 2NF → 3NF

The HKEAA requires up to **Third Normal Form (3NF)**.

## Starting point · UNF (Un-normalised)

Suppose a school stores enrolment in one table:

```
StudentID  Name         Courses                       Teacher
S001       Alice Chan   ICT, Maths, Eng               Mr.Lee, Ms.Wong, Mr.Tam
S002       Bob Wong     ICT, Bio                      Mr.Lee, Ms.Lam
```

Problems:

- `Courses` and `Teacher` are **comma-separated lists** — violates 1NF.

## 1NF · Atomic values

Split each repeating value into its own row.

```
StudentID  Name         Course  Teacher
S001       Alice Chan   ICT     Mr.Lee
S001       Alice Chan   Maths   Ms.Wong
S001       Alice Chan   Eng     Mr.Tam
S002       Bob Wong     ICT     Mr.Lee
S002       Bob Wong     Bio     Ms.Lam
```

**Primary key** is now composite: `(StudentID, Course)`.

## 2NF · No partial dependency on a composite key

`Name` depends only on `StudentID` — a **partial dependency** on part of the composite key. Move it out.

```
Student(StudentID PK, Name)
Enrolment(StudentID PK, Course PK, Teacher)
```

After 2NF every non-key attribute depends on the **whole** composite key.

## 3NF · No transitive dependency

In the new `Enrolment` table, `Teacher` depends on `Course` (each course has one teacher), which depends on the key. This is a **transitive dependency** (`PK → Course → Teacher`). Move Teacher out.

```
Student(StudentID PK, Name)
Course(Course PK, Teacher)
Enrolment(StudentID PK, Course PK)
```

After 3NF every non-key attribute depends **only on the key**.

## Quick summary

| Form | Rule |
|------|------|
| 1NF | Atomic values; no repeating groups |
| 2NF | 1NF + non-key attributes depend on the **whole** key (relevant when PK is composite) |
| 3NF | 2NF + no transitive dependency (non-key depends only on key) |

A common mnemonic: "**the key, the whole key, and nothing but the key**".

## Practical hints

- If your table has only a single-column PK, you're already in 2NF.
- Look for groups of columns that always travel together (e.g. `Course → Teacher`) — that's a sign of a missing table.
- Test queries on the normalised schema to ensure no data is lost.

## Common student mistakes

- Stopping at 1NF and calling it normalised.
- Confusing 2NF with 3NF.
- Over-normalising into hundreds of tables — readability suffers.
- Forgetting referential integrity after splitting (add FKs).

## Exam-style question

> **Q (6 marks):** A bookshop stores sales like:
>
> ```
> SaleID Customer  Books                       Prices
> 101    Alice     Book A, Book B             50, 80
> 102    Bob       Book A                     50
> ```
>
> Normalise the table to 3NF, showing the intermediate 1NF and 2NF stages.

**Sample answer:**

**1NF** — split into atomic rows:

```
Sale(SaleID, Customer, Book, Price)
101 Alice Book A 50
101 Alice Book B 80
102 Bob   Book A 50
```

Primary key composite: `(SaleID, Book)`.

**2NF** — `Customer` depends only on `SaleID`; move out.

```
SaleHeader(SaleID PK, Customer)
SaleLine(SaleID PK, Book PK, Price)
```

**3NF** — `Price` depends on `Book` (assuming each book has a fixed price), not on the key. Move out.

```
SaleHeader(SaleID PK, Customer)
Book(Book PK, Price)
SaleLine(SaleID PK, Book PK)
```

Now each table satisfies 3NF. Redundancy is gone — change a book's price in one row of `Book` instead of every line of `SaleLine`.

## Key takeaways

- 1NF: atomic values, no lists.
- 2NF: no partial dependency.
- 3NF: no transitive dependency.
- "Key, whole key, nothing but the key."

➡️ Next: [3.4 Denormalisation](./denormalisation)
