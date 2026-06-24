# 3.2 · Cardinality & Participation

> **Goal:** describe relationships precisely.

## Cardinality — "how many" on each side

| Cardinality | Description |
|-------------|-------------|
| **1 : 1** (one-to-one) | Each instance of A relates to at most one of B and vice versa |
| **1 : M** (one-to-many) | Each A relates to many B; each B relates to one A |
| **M : N** (many-to-many) | Many A to many B |

### Examples

| Relationship | Cardinality |
|--------------|-------------|
| Person — has — Passport | 1 : 1 |
| Department — employs — Staff | 1 : M |
| Student — enrols in — Course | M : N |

## HKEAA symbols (the C&A Guide reproduces these)

```
1 ────── 1   Relationship   one-to-one
1 ────── M   Relationship   one-to-many
M ────── N   Relationship   many-to-many
```

## Participation — "must / may"

| Participation | Notation | Meaning |
|---------------|----------|---------|
| **Total / Mandatory** | Double line `══` | Every instance must participate |
| **Partial / Optional** | Single line `──` | An instance may or may not participate |

### Examples

| Relationship | Participation |
|--------------|---------------|
| Loan must reference a Member | Loan side: Mandatory |
| A Member may or may not have any current Loans | Member side: Optional |

## Combining cardinality + participation

Example: Member borrows Book

```
Member ──── < borrows > ════ Book
  (M)   optional ─║║══ mandatory  (N)
```

Here:

- M:N cardinality (associative entity required).
- Member's participation is optional (some members never borrow).
- Loan's participation is mandatory (every loan record must reference a book).

## Resolving M:N — repeat from 3.1

```
Member ───< Loan >─── Book
```

Loan becomes its own entity with FKs to both sides.

## Cardinality decisions in practice

Ask:

1. Can A exist without B? → optional participation.
2. Can one A relate to more than one B? → many side.
3. Can one B relate to more than one A? → many side.

If both sides are "many" → introduce an associative entity.

## Common student mistakes

- Confusing cardinality (numbers) with participation (mandatory / optional).
- Forgetting to mark mandatory side as double line.
- Treating every relationship as M:N.

## Exam-style question

> **Q (5 marks):** For each scenario, state the cardinality and participation:
>
> (a) A bank account belongs to exactly one customer; a customer may have multiple accounts.
> (b) A student takes many courses; each course has many students; both sides are mandatory.

**Sample answer:**

(a) Cardinality: **1 : M** (Customer to Account). Participation: Customer side **optional** (customer can exist before opening any account); Account side **mandatory** (every account must have an owner).

(b) Cardinality: **M : N** (Student to Course). Participation: **mandatory on both sides** (every student must enrol in at least one course; every course must have at least one student). Implementation requires an associative entity, e.g. `Enrolment(student_id, course_id, semester, grade)`.

## Key takeaways

- Cardinality = numbers (1, M, N).
- Participation = whether it's mandatory.
- Pin both down before designing tables.

➡️ Next: [3.3 Normalisation](./normalisation)
