# 3.5 · ER → Relational Tables

> **Goal:** translate an ER diagram into CREATE TABLE statements.

## Conversion rules

| ER element | Becomes |
|-----------|---------|
| Entity | Table with one column per attribute; key attribute → PK |
| 1:1 relationship | Single FK in one of the two tables |
| 1:M relationship | FK on the M side referencing PK of the 1 side |
| M:N relationship | New associative table with two FKs (composite PK) |
| Weak entity | Table including FK to owner entity in its PK |
| Inheritance (rare) | Single table with discriminator column OR separate tables per subclass |

## Example · School library

ER diagram (verbal):

- Entities: `Member(member_id, name, class)`, `Book(isbn, title, author, copies)`.
- Relationship: `Loan(loan_date, due_date, return_date)` — M:N between Member and Book.

### Tables

```sql
CREATE TABLE Member (
  member_id INTEGER PRIMARY KEY,
  name      VARCHAR(50) NOT NULL,
  class     VARCHAR(10)
);

CREATE TABLE Book (
  isbn   VARCHAR(13) PRIMARY KEY,
  title  VARCHAR(200) NOT NULL,
  author VARCHAR(100),
  copies INTEGER DEFAULT 1
);

CREATE TABLE Loan (
  loan_id     INTEGER PRIMARY KEY,
  member_id   INTEGER NOT NULL,
  isbn        VARCHAR(13) NOT NULL,
  loan_date   DATE NOT NULL,
  due_date    DATE NOT NULL,
  return_date DATE,
  FOREIGN KEY (member_id) REFERENCES Member(member_id),
  FOREIGN KEY (isbn)      REFERENCES Book(isbn)
);
```

We added a surrogate `loan_id` instead of a composite PK `(member_id, isbn)` because a member may borrow the same book again later — composite alone wouldn't be unique.

## Worked example · Online shop

ER:

- `Customer(customer_id, name, email)`
- `Product(sku, name, price, stock)`
- `Order(order_id, customer_id, order_date, status)`
- `OrderLine(order_id, sku, quantity)` (M:N between Order and Product)

### Tables

```sql
CREATE TABLE Customer (
  customer_id INTEGER PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  email       VARCHAR(150) UNIQUE
);

CREATE TABLE Product (
  sku   VARCHAR(20) PRIMARY KEY,
  name  VARCHAR(200) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE "Order" (                       -- quoted because ORDER is reserved
  order_id    INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  order_date  DATE NOT NULL,
  status      VARCHAR(20) NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

CREATE TABLE OrderLine (
  order_id INTEGER,
  sku      VARCHAR(20),
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  PRIMARY KEY (order_id, sku),
  FOREIGN KEY (order_id) REFERENCES "Order"(order_id),
  FOREIGN KEY (sku)      REFERENCES Product(sku)
);
```

## Best practice

- Always specify FK constraints.
- Use surrogate PKs for entities that might naturally clash.
- Pick types deliberately (`VARCHAR(n)` vs `TEXT`).
- Avoid SQL reserved words as identifiers (use quotes if you must).

## Common student mistakes

- Forgetting to convert M:N relationships into associative tables.
- Using meaningful names for surrogate keys (`alice_id` instead of `id`).
- Storing identical data in multiple tables instead of FKs.

## Exam-style question

> **Q (6 marks):** Convert the following ER into CREATE TABLE statements:
>
> - `Person(person_id, name)`
> - `Skill(skill_id, name)`
> - Many-to-many relationship "knows" between Person and Skill, with attribute `level` (1–5).

**Sample answer:**

```sql
CREATE TABLE Person (
  person_id INTEGER PRIMARY KEY,
  name      VARCHAR(100) NOT NULL
);

CREATE TABLE Skill (
  skill_id INTEGER PRIMARY KEY,
  name     VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE PersonSkill (
  person_id INTEGER,
  skill_id  INTEGER,
  level     INTEGER NOT NULL CHECK (level BETWEEN 1 AND 5),
  PRIMARY KEY (person_id, skill_id),
  FOREIGN KEY (person_id) REFERENCES Person(person_id),
  FOREIGN KEY (skill_id)  REFERENCES Skill(skill_id)
);
```

## Key takeaways

- Each entity → table.
- M:N → associative table.
- Always specify FK constraints.

➡️ Next: [3.6 Access Rights & Privacy](./access-rights)
