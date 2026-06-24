# 3.1 · ER Diagrams

> **Goal:** read and draw Entity-Relationship diagrams using HKEAA symbols.

## What an ER diagram is

A picture of the **entities** in a database, their **attributes** and the **relationships** between them. It serves as the design blueprint before any tables are created.

## HKEAA symbol set

```
Entity:        ┌─────────────┐
               │   Student   │
               └─────────────┘

Attribute:      ◯ name

Key attribute:  ◉ student_id   (underlined in printed diagrams)

Relationship:   ◇ enrols ◇
```

## Building an ER diagram

### Step 1 · Identify entities

Read the scenario. Each noun describing a thing you store data about is a candidate entity.

> "A school enrols students into classes. Each class has one teacher."

Entities: **Student**, **Class** (Teacher might be modelled as an entity or an attribute of Class).

### Step 2 · Identify attributes

For each entity, list the attributes (columns) you care about.

```
Student: student_id (PK), name, dob, class_id (FK)
Class:   class_id (PK), teacher
```

### Step 3 · Identify relationships

Look for verbs that connect entities ("enrols", "borrows", "owns").

> "Each student enrols in exactly one class; each class can have many students."

Relationship: `Student — enrols — Class`, with cardinality **many-to-one** (each student → one class; each class → many students).

### Step 4 · Add cardinality and participation

See [3.2 Cardinality & Participation](./cardinality) for details.

## Simple example diagram

```
Student ───< enrols >─── Class
  │                          │
  ◯ name                     ◯ teacher
  ◉ student_id               ◉ class_id
```

The "<" and ">" symbols suggest the "many" side.

## A bigger example · School library

Entities and relationships:

```
       Member ───< Loan >─── Book
          │            │           │
       ◯ name       ◯ date     ◯ title
       ◉ id         ◉ id       ◉ isbn
```

Relationships:

- Member ─ borrows ─ Book (Many-to-Many) → resolved with the `Loan` associative entity.
- A loan belongs to exactly one Member and exactly one Book.

## When to add a weak / associative entity

When a many-to-many relationship has its own attributes (e.g. `loan_date`, `due_date`), it deserves its own entity.

## Common student mistakes

- Drawing a Many-to-Many relationship without an associative entity.
- Confusing entity (a noun) with attribute (a property).
- Drawing relationships between attributes.
- Forgetting to underline the key attribute.

## Exam-style question

> **Q (5 marks):** Draw an ER diagram for the scenario: an online tutoring platform connects students with tutors. Each student can book multiple lessons. Each lesson is given by exactly one tutor at one time slot. The platform stores lesson topic and price.

**Sample answer (text representation):**

Entities:

- **Student** (`student_id PK, name, email`)
- **Tutor** (`tutor_id PK, name, subject`)
- **Lesson** (`lesson_id PK, topic, price, slot_datetime, student_id FK, tutor_id FK`)

Relationships:

- Student **— books —** Lesson : 1 to many
- Tutor **— gives —** Lesson : 1 to many

Diagram (verbal):

```
Student ────< books >──── Lesson ────< gives >──── Tutor
```

## Key takeaways

- ER diagrams show entities, attributes, relationships.
- Resolve Many-to-Many with an associative entity.
- Use HKEAA symbols.

➡️ Next: [3.2 Cardinality & Participation](./cardinality)
